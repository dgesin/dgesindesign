"use strict";var precacheConfig=[["/dgesindesign/index.html","8b216b89d64812311810fcd4808d6d43"],["/dgesindesign/static/css/main.a27194e2.css","3d7ced19a4bbc58347ad6c1156b394b4"],["/dgesindesign/static/js/0.be706760.chunk.js","33b1a5f4ee1f882d9a0cff3481850dc8"],["/dgesindesign/static/js/1.29d89f64.chunk.js","9ede29f3710fcb0a1d055f6f8f19294d"],["/dgesindesign/static/js/main.ed03b6af.js","f4721712f480e08894955e2c8de835cd"],["/dgesindesign/static/media/cars.307268af.png","307268af4e422fdae8079267e41ae450"],["/dgesindesign/static/media/denver-post.93ef88dd.png","93ef88dd22fa456564c44cf0dcf357f0"],["/dgesindesign/static/media/derek-beach.2feb22d7.jpg","2feb22d7c6e2ab9f80d752d53b0a94e2"],["/dgesindesign/static/media/design-sprint.9441499e.jpg","9441499e08f521c424e973e18d8036ee"],["/dgesindesign/static/media/design-studio.7070ebde.png","7070ebdecd0fc25091a3e0d04965682a"],["/dgesindesign/static/media/dg-logo.c932f699.png","c932f6991546f875fc153f39741226c8"],["/dgesindesign/static/media/fema-logo.60849c91.png","60849c9145f28b2d4f1d9c74a0981321"],["/dgesindesign/static/media/gdta.4f37d500.jpg","4f37d500a4a276e91f56130e4d13af36"],["/dgesindesign/static/media/ipsos-wireframe.a999cdbc.jpg","a999cdbc461309c66c9ba39e6c99aa72"],["/dgesindesign/static/media/loc-white.fc30061b.svg","fc30061b4dd10fdcc618f940f3fb644e"],["/dgesindesign/static/media/market-research.bd3f5e26.jpg","bd3f5e263e44bf089fc1c4f58c2a7ece"],["/dgesindesign/static/media/multiplatform-design.c3cf37c7.png","c3cf37c755f88ffdbea605838b93be28"],["/dgesindesign/static/media/pioneer-press.c4b6c832.png","c4b6c8326c2b1bc14dfd85b9a06d89e1"],["/dgesindesign/static/media/resume.eb3c65d5.pdf","eb3c65d5073f0d0f5922c1f5542e924f"],["/dgesindesign/static/media/site-inspector.e98898ab.jpg","e98898abb4bb4477ecae850400383f2a"],["/dgesindesign/static/media/tile-4.b9900b3a.jpg","b9900b3a009b42621be8d91889b0e75a"],["/dgesindesign/static/media/typewriter2.3a3102ac.jpg","3a3102aca03d804934ff17aa72aaec48"],["/dgesindesign/static/media/us-navy.bdd717e2.png","bdd717e28d50d9a325a1034ef38a88fd"],["/dgesindesign/static/media/user-story-map.6063549a.jpg","6063549acb397bfaa2f9b909ecf2154a"],["/dgesindesign/static/media/uspto.6843d88e.jpg","6843d88e1209b67731b4c1823912b8ba"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(n){return n.redirected?("body"in n?Promise.resolve(n.body):n.blob()).then(function(e){return new Response(e,{headers:n.headers,status:n.status,statusText:n.statusText})}):Promise.resolve(n)},createCacheKey=function(e,n,t,a){var s=new URL(e);return a&&s.pathname.match(a)||(s.search+=(s.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(n){return t.every(function(e){return!e.test(n[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),s=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var e=new Request(n,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+n+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(n,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(n){return n.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return n.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(n){if("GET"===n.request.method){var e,t=stripIgnoredUrlParameters(n.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t));var s="/dgesindesign/index.html";!e&&"navigate"===n.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],n.request.url)&&(t=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&n.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',n.request.url,e),fetch(n.request)}))}});