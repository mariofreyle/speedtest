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
        console.log("Activated!");
    });
    
    self.addEventListener("fetch", function(e){
        if(e.request.mode === "navigate"){
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