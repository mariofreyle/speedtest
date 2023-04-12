(function(){
    
    var CACHE_NAME = "v1_cache_app",
        resourcesToCache = [
            location.hostname == "ispeedtest.epizy.com" ? "/app" : "/"
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
        console.log("Worker installed!");
    });

    self.addEventListener("activate", function(){
        console.log("Worker activated!");
    });
    
    self.addEventListener("fetch", function(e){
        if(e.request.mode === "navigate"){
            e.respondWith(
                caches.open(CACHE_NAME).then(function(cache){
                    return cache.match(e.request, {ignoreSearch: true}).then(function(res){
                        if(res && (e.request.url.indexOf("refresh=1") != -1 || location.search.indexOf("store=0") || location.hostname == "ispeedtest.epizy.com")){
                            return fetch(e.request).then(function(response){
                                if(response.ok){
                                    cache.delete(e.request, {ignoreSearch: true}).then(function(status){
                                        console.log(status);
                                    });
                                    cache.put(e.request, response.clone());
                                    cache.matchAll(e.request, {ignoreSearch: true}).then(function(matchs){
                                        console.log(matchs);
                                    });
                                    return response;
                                }
                                return res;
                            }).catch(function(){
                                return res;
                            });
                        }
                        if(res){
                            return res;
                        }

                        return fetch(e.request);
                    })
                })
            );
        }
    });
    
})();