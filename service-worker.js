"use strict";var precacheConfig=[["/dgesindesign/index.html","8e70f737bcb293fa3ebe111c1a18dd45"],["/dgesindesign/static/css/main.2aaf7b40.css","22e7051280cf70ccc514606b8e5b6778"],["/dgesindesign/static/js/0.be706760.chunk.js","33b1a5f4ee1f882d9a0cff3481850dc8"],["/dgesindesign/static/js/1.29d89f64.chunk.js","9ede29f3710fcb0a1d055f6f8f19294d"],["/dgesindesign/static/js/main.3da54b46.js","bc76a20955fd50940d1664f1390b2b0d"],["/dgesindesign/static/media/cars.307268af.png","307268af4e422fdae8079267e41ae450"],["/dgesindesign/static/media/contact.e8a3bde4.jpg","e8a3bde441f8f19345015fa139868026"],["/dgesindesign/static/media/denver-post.93ef88dd.png","93ef88dd22fa456564c44cf0dcf357f0"],["/dgesindesign/static/media/derek-beach.41c96b21.jpg","41c96b21b7778dd1a71c2b7997aab155"],["/dgesindesign/static/media/design-sprint.97b94273.jpg","97b94273fc268174b2938f3c90f74c13"],["/dgesindesign/static/media/design-studio.7070ebde.png","7070ebdecd0fc25091a3e0d04965682a"],["/dgesindesign/static/media/dg-logo.c932f699.png","c932f6991546f875fc153f39741226c8"],["/dgesindesign/static/media/fema-logo.bfa8b088.png","bfa8b08880cb733e1e224415119ea2b8"],["/dgesindesign/static/media/gdta.e0746e3c.jpg","e0746e3c0682f02a4716221b010ef5a2"],["/dgesindesign/static/media/installation.90f57d05.jpg","90f57d05d5f474b088d0092d85efac21"],["/dgesindesign/static/media/ipsos-wireframe.a379efee.jpg","a379efeec95c461889acdfbf5b0d2ce8"],["/dgesindesign/static/media/loc-white.fc30061b.svg","fc30061b4dd10fdcc618f940f3fb644e"],["/dgesindesign/static/media/map-interface.02463a2d.png","02463a2d4762eec53b5ef33eac427ce4"],["/dgesindesign/static/media/market-research.bd3f5e26.jpg","bd3f5e263e44bf089fc1c4f58c2a7ece"],["/dgesindesign/static/media/mhus.872d792b.jpg","872d792bad360bc526ee2604452e2efe"],["/dgesindesign/static/media/mission-planning.3ad46303.jpg","3ad46303f47a7fe053af04a91ddb680d"],["/dgesindesign/static/media/multiplatform-design.c3cf37c7.png","c3cf37c755f88ffdbea605838b93be28"],["/dgesindesign/static/media/pioneer-press.e444c277.png","e444c2772546278135bddef0bd6f053a"],["/dgesindesign/static/media/resume.eb3c65d5.pdf","eb3c65d5073f0d0f5922c1f5542e924f"],["/dgesindesign/static/media/site-inspector.2033c803.jpg","2033c80345fc2cc8bdf2c6c51015ab3f"],["/dgesindesign/static/media/stakeholder-interviews.0ba5d41f.jpg","0ba5d41fb07f268913067b1bbaf6f91d"],["/dgesindesign/static/media/tile-4.b9900b3a.jpg","b9900b3a009b42621be8d91889b0e75a"],["/dgesindesign/static/media/typewriter2.869a7f94.jpg","869a7f9496ed3313fe03810d40ae3bc2"],["/dgesindesign/static/media/us-navy.918f7e9a.png","918f7e9a218af8b4fd803b8e00c4f37c"],["/dgesindesign/static/media/user-story-map.810d90c8.jpg","810d90c8e7c1f801690adba4c0dc3631"],["/dgesindesign/static/media/uspto.6843d88e.jpg","6843d88e1209b67731b4c1823912b8ba"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(n){return n.redirected?("body"in n?Promise.resolve(n.body):n.blob()).then(function(e){return new Response(e,{headers:n.headers,status:n.status,statusText:n.statusText})}):Promise.resolve(n)},createCacheKey=function(e,n,t,a){var s=new URL(e);return a&&s.pathname.match(a)||(s.search+=(s.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(n){return t.every(function(e){return!e.test(n[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),s=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var e=new Request(n,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+n+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(n,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(n){return n.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return n.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(n){if("GET"===n.request.method){var e,t=stripIgnoredUrlParameters(n.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t));var s="/dgesindesign/index.html";!e&&"navigate"===n.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],n.request.url)&&(t=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&n.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',n.request.url,e),fetch(n.request)}))}});