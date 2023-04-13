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
                    return cache.match(e.request, {ignoreSearch: true}).then(function(cached){
                        if(!cached){
                            return fetch(e.request);
                        }
                        if(e.request.url.indexOf("refresh=1") != -1 || location.search.indexOf("store=0") != -1 || location.hostname == "ispeedtest.epizy.com"){
                            var url = e.request.url.replace(/#(.*)/, "");
                            url += (url.indexOf("?") == -1 ? "?" : "&") + "v=" + Math.random();
                            return fetch(url).then(function(fetched){
                                if(fetched.ok){
                                    cache.delete(e.request, {ignoreSearch: true}).then(function(status){
                                        console.log("cache item deleted: " + status);
                                    });
                                    cache.put(e.request, fetched.clone());
                                    return fetched;
                                }
                                return cached;
                            }).catch(function(){
                                return cached;
                            });
                        }
                        return cached;
                    })
                })
            );
        }
    });
    
})();