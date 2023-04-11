(function(){
    
    var CACHE_NAME = "v1_cache_app",
        resourcesToCache = [
            "/"
        ];
    
    self.addEventListener("install", function(e){
        e.waitUntil(
            caches.open(CACHE_NAME).then(function(cache){
                return cache.addAll(resourcesToCache).then(function(){
                    self.skipWaiting();
                })
            }).catch(function(err){
                console.log("Error registering to cache", err);
            })
        )
    });

    self.addEventListener("activate", function(){
        console.log("Worker activated!");
    });
    
    self.addEventListener("fetch", function(e){
        if(e.request.mode === "navigate"){
            if(e.request.url.indexOf("refresh=1") != -1){
                async function respond(){
                    try {
                        var response = await fetch(e.request),
                            cache;
                        if(response.ok){
                            cache = await caches.open(CACHE_NAME);
                            cache.put(e.request, response.clone());
                        }
                        return response;
                    }catch(error){
                        
                    }
                    return await caches.match(e.request, {ignoreSearch: true});
                }
                e.respondWith(
                    respond()
                );
                return;
            }
            e.respondWith(
                caches.match(e.request, {ignoreSearch: true}).then(function(res){
                    if(res){
                        return res;
                    }

                    return fetch(e.request);
                })
            );
        }
    });
    
})();