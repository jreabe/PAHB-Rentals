var C="pahb-v2",F=["./","index.html","manifest.webmanifest","logo.png","icon-180.png","icon-192.png","icon-512.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(function(r){return r||fetch(e.request).catch(function(){return caches.match("index.html")})}))});
