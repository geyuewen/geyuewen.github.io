'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cc1542c551b9728962d799761b788b72",
"index.html": "134ecd4e65ad72253b589296bb466e3d",
"/": "134ecd4e65ad72253b589296bb466e3d",
"main.dart.js": "ef156398bd7ee8fbdbd2a09b3b99cb97",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fd63ec1a9f9ac91cd9965910ba5b8b95",
"assets/AssetManifest.json": "ed4a4aabcb69e8967e883d55b2f37827",
"assets/NOTICES": "97ea12111b8e04f7e8b5e0731e5c0e95",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "684f4dfac6d118b27e525f2df39ea6a4",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/gltj_return_slice.png": "96707b123725945aadd2e6fca20e745b",
"assets/assets/images/sip_number_slice.png": "64dba0d11feb24508eda25cbcddf5221",
"assets/assets/images/sign_in_zh_slice.png": "c93f7475c91a1b4e0362c8ead3b7ecb3",
"assets/assets/images/ship_management_slice.png": "01b62ed0ad590c7374adad3b87a30003",
"assets/assets/images/recharge_bg1_slice.png": "34245e869479aa197174a2738a9cf2b6",
"assets/assets/images/account_management_bg_slice.png": "a8196cabd4f92a12681cdd4294eb1060",
"assets/assets/images/set_up_slice.png": "490ba2ebef181781b192d0b1870dcf94",
"assets/assets/images/opinion_slice.png": "26db9726b40689b2a77b243d0fea2642",
"assets/assets/images/flow_recharge_slice.png": "9d4df5e16813246d845e2a468ce7fe7e",
"assets/assets/images/my_not_see_slice.png": "0abcb44e9adee273289c6f9511770777",
"assets/assets/images/kefu_w_slice.png": "32e72c4845f61d82699ecf460d7a7bd2",
"assets/assets/images/user.png": "5bbb75dd96f032fa25eb62125caeb0dd",
"assets/assets/images/back-black.png": "f3ddf25ef9a85005ef30e4951d4747fe",
"assets/assets/images/sign_in_bg_slice.png": "97e4a2a1b6bf2ab76d1af7c0123d887f",
"assets/assets/images/account_management_slice.png": "b50926a7d330f195be88f8433f842a61",
"assets/assets/images/earnings_from_points_bg_slice.png": "5f3698331db89a9df084f21a73fb4823",
"assets/assets/images/crewaccountslice.png": "e77c17eb23cd0679c9dd08062349e807",
"assets/assets/images/business_records_slice.png": "89e97e83d0cb6d156fa8890949cd0c33",
"assets/assets/images/logo.png": "139cc41e96bfa2eaa058ce9636747c94",
"assets/assets/images/sip_management_bg_slice.png": "63afb61c02f645aacc21a1acd20d597a",
"assets/assets/images/logo2.png": "139cc41e96bfa2eaa058ce9636747c94",
"assets/assets/images/equipment_opening_slice.png": "3ca574956e216d31265b30170f05d549",
"assets/assets/images/traffic_gift_slice.png": "1274555a41d935e41a98ae1a5eff4dc4",
"assets/assets/images/set_meal_slice.png": "fc5d34cb9d279969c963a8763d97937d",
"assets/assets/images/my_visible_slice.png": "1606633ce2a43d1011c5050263414fab",
"assets/assets/images/sip_management_slice.png": "2247f46d8a97e0adaeadeb36c968f075",
"assets/assets/images/problem_feedback_slice.png": "13233e107476448e11edf83081d42ce3",
"assets/assets/images/subordinate_slice.png": "89ead768e1782ad91d22293282968396",
"assets/assets/images/account_assets_bg_slice.png": "3658c70fd546aa3f394db660c3669a34",
"assets/assets/images/notice.png": "f39b2b199d08dda59248c8574fbabb62",
"assets/assets/images/sign_in_password_slice.png": "e1645ac17f3b82957f24d2de6466a2b4",
"assets/assets/images/recharge_bg2_slice.png": "8d9d4237ef1236364618fa9cb5bf2f3d",
"assets/assets/images/back-white.png": "cf68dc67f0e0ba9a92b8b4429d808279",
"assets/assets/images/ship_management_bg_slice.png": "687bfcd77ffe2f0e6836e9e73a32307c",
"assets/assets/images/record_bg_slice.png": "c7ab66f20349ad5be1e333f2591d1cd9",
"assets/assets/images/address_management_slice.png": "c4b8fe4fa08f06006da9e9f327d8ac76",
"assets/assets/images/my_bill2.png": "8ae177e712096c61e53d7ff56c05da21",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
