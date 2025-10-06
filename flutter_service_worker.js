'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "62a92350fbe949d5bec7a63103a27aaa",
"version.json": "d688075b1200ab438b1fb0b017f5366e",
"index.html": "caa338f1d86f1f9be6de9e1f2a96c481",
"/": "caa338f1d86f1f9be6de9e1f2a96c481",
"main.dart.js": "ce3ce0974f0f7e788298c6e23488f5a8",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "964f2c784a42a81a44d62f326f9cb607",
"icons/favicon.ico": "dbc3b85a85864fa2bb668ac026b6acd2",
"icons/apple-touch-icon.png": "c1cd76f207784b840e701e73c0eb6ec4",
"icons/icon-192.png": "c97531b60b6e0de34d44011eb52798fd",
"icons/Icon-maskable-192.png": "7aa7964d88a209989f7d21e59632ce4b",
"icons/Icon-maskable-512.png": "ff851e4b4e280322339db379fc918907",
"icons/icon-512.png": "b1c37414d54379b28ef3d8c8e84408f2",
"manifest.json": "f33ec882199bca3b6a00574424727122",
"assets/AssetManifest.json": "36191f1449368232c5e416387a4df8f7",
"assets/NOTICES": "dd2d234c8bff59f0e750dc0849d4d451",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "4b1a5f5f25c48e211a0052604b146f19",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b97cc5ee71f23a1536b315bff0dbee15",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f969a5bfe30faad73610dc14819e3a6b",
"assets/fonts/MaterialIcons-Regular.otf": "5dda6598c4de705b9f6342a083e9d17e",
"assets/Assets/weather.svg": "ec0c5f206dbc2dad1f430f46638a738e",
"assets/Assets/slide3.jpg": "499c8f7184d6e750dc4ac22e7623cb1d",
"assets/Assets/logoWhiteBg.png": "784373e1da96542b22a0303f8dabc9c0",
"assets/Assets/roadMap.png": "8af61f781aab473f65b6ef62b3779118",
"assets/Assets/homeIcon.png": "2fea6901029222e62a92fcb8924dfb61",
"assets/Assets/toyota.svg": "e6628e32b4204bf4e5de494cc188fac4",
"assets/Assets/slide2.jpg": "df7b24dbf3b38a6373b8a26ffea57edf",
"assets/Assets/dottedBG1.png": "a0b0ba3584f9d72944f67cbdaa16931c",
"assets/Assets/patten1.png": "8311ec904d5e6173022f15b1a9374fe1",
"assets/Assets/plug.png": "d46980f3365641cf2bc526d1aeb90e62",
"assets/Assets/slide1.jpg": "0f82cae578c89da2ad73b4f8c94e969c",
"assets/Assets/logoSymbolWhiteWithBlackBg.png": "75876b9219f54781fc0acf2ba25f6446",
"assets/Assets/future.jpg": "b9b9e0d26628f28199f6da2ce74902cb",
"assets/Assets/fb.svg": "7169b8da1b956592e77936aae700344e",
"assets/Assets/sercLogo.svg": "9453be3f906650cd6884102c6c18fb53",
"assets/Assets/forest.png": "364b87577ee6dfc5e18ef92727e158b1",
"assets/Assets/mechIcon.png": "a68c8389bd793c83f1c1a4937afbff2c",
"assets/Assets/git.svg": "777cc3248eaae276b6946e996f310b64",
"assets/Assets/logoWithBlackBg.png": "4d39fa8f265f8a9d90382fb5a8e3d4d1",
"assets/Assets/rever.svg": "3a58357d201908634208be72fca300ef",
"assets/Assets/logoSymbolWithBlackBg.png": "0ab764413b7fbe15c2a3d61faffebe29",
"assets/Assets/logoWithoutSymbolWhiteBg.png": "676bca49d07f30097c7e54b3c40e4ac1",
"assets/Assets/greenLineLogo.svg": "e4b92cbe4f0ac7867ca3789d478f7325",
"assets/Assets/safety.png": "c4c85f68a54b5e5628c931e54ec4a155",
"assets/Assets/saharaLogo.png": "43fd7841f8fb7e100d88eb4f78a142fc",
"assets/Assets/electrician1.jpg": "50f9303e5bd333f4507b747d472f5264",
"assets/Assets/evPump.svg": "aef34ce6db853635b51566ec0aec458f",
"assets/Assets/precision.png": "8ee2f37282c5422f0516d7ef4b5d5268",
"assets/Assets/airIcon.png": "9c7ce978b32a9e3727da1da76034bba2",
"assets/Assets/bulb2.png": "c96ea0ed172512d19985f95c37e9698d",
"assets/Assets/electrician2.jpg": "5280b6934202476fcbc4d2fc091d6fc7",
"assets/Assets/station.svg": "19752267aca2c28c52079a8c7daab9d3",
"assets/Assets/bulb1.jpg": "c0c076181a0c8dae52a75b4dfffd577f",
"assets/Assets/logoSymbolWhiteBg.png": "b62d08a2db3a26b2e480e643599f3729",
"assets/Assets/carIcon.png": "a80adeb89cb29391bbaba218169fb306",
"assets/Assets/innovation.png": "59d69cdfb8480ab04cf2f0ad7d72516b",
"assets/Assets/electricalIcon.png": "006dbf333631dc5cda2b61fa4f49dcdf",
"assets/Assets/stright.svg": "c144e0c46f761bd210ef84899305dc0f",
"assets/Assets/bmw.svg": "0a8de30390f831514442b25a0c195dcf",
"assets/Assets/roadMapIcon1.png": "2fdddae6fc6f8f501e70ce8218a7348a",
"assets/Assets/evIcon.png": "8d82a3696f86c304ce2dd36aaab51718",
"assets/Assets/faq.png": "b7308971baace9d26e28cb045148439c",
"assets/Assets/newyork.svg": "82633ee03d1b61646356f75467032166",
"assets/Assets/efficiency.png": "a76bbe48ffc875308873841b238fc729",
"assets/Assets/stra.svg": "8b5d476a8b19c7b2013ab8759fc4c6af",
"assets/Assets/linkedin.svg": "4dac62f9d9751fa5ff5f619648d6a190",
"assets/Assets/twitter.svg": "33d6e4e884bb889deac97b6b5e300fa7",
"assets/Assets/roadMapIcon2.png": "a1ea8a2127c070429a4970c33b1965b7",
"assets/Assets/insta.svg": "25b063457c913344f2a332fc190bf7c8",
"assets/Assets/discord.svg": "d3a06c733379f3d8dc0c10f4ed2f71b7",
"assets/Assets/roadMapIcon3.png": "722774d74dd2971da8df84e48937b08d",
"assets/Assets/charger4.jpg": "3a48cf7c15f7df247c46142d429f1bac",
"assets/Assets/charger1.jpg": "c6b58f2b5c25cca3bbadacc56824b87a",
"assets/Assets/gm.svg": "b0dbfcca939e5dcdb29cd62c5064d841",
"assets/Assets/charger3.jpg": "fce7b8c597cf3f3724f66e6a5805a382",
"assets/Assets/roadMapIcon4.png": "9d89128aebf86d35b8bc761dcb50b063",
"assets/Assets/girl.jpeg": "d4538607c4b3eecd2414db084b9e7ede",
"assets/Assets/roadMapIcon5.png": "eff7e0c43ecd7a01027cd9b65ba4fab4",
"assets/Assets/charger2.jpg": "18ca59864fcdb07a40f459d088082cb1",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
