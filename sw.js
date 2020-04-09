const workboxVersion="5.0.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"zhix.co"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"17e186763e1f37bb8fb53d49094bda96",url:"./404.html"},{revision:"1bddecb22a73bf7a31a87fc8fcd7cfe8",url:"./about/index.html"},{revision:"f0516f24f5ac8873cce90ec259b35d60",url:"./categories/技术/index.html"},{revision:"2f319ecb6a59dcd2d8695ff571187f0c",url:"./categories/设计/index.html"},{revision:"d575209d7e38a41959987a1f3f0445ad",url:"./categories/index.html"},{revision:"bc4cf6fa18dae1aaff2aee4adb640ebe",url:"./css/meme.min.css"},{revision:"8d2a4fd8cbf836428792bdd7f92af172",url:"./fonts/glyph-correction.woff2"},{revision:"3eacd63796de4b39bc102dae7b143ca5",url:"./fonts/JetBrainsMono-Regular.woff2"},{revision:"fec9f667e8b6199a803de550bcef0c8a",url:"./index.html"},{revision:"5efe98088e34457e3f08f8fe2a25cbab",url:"./js/meme.min.js"},{revision:"800846cf0ea80c4b7cf2828d02fa1eff",url:"./manifest.json"},{revision:"1c9a1fbb21b1fed60888acbeb9b0314b",url:"./page/1/index.html"},{revision:"d0fb82cb4ed84e1228ac3fdf3ccb2b56",url:"./posts/index.html"},{revision:"2fa2117ae8bb010fb882facd521e1e24",url:"./posts/spring-cache-in-practice-adding-memory-cache-in-front-of-redis-cache/index.html"},{revision:"094d69574075cbdd6008de65c9fe28cc",url:"./posts/talking-spi-in-java/index.html"},{revision:"5baa15febf9852996e7f8f1048db70ec",url:"./posts/talking-typesetting/index.html"},{revision:"e6e3d57f471b697abf4c269fc6bc7a14",url:"./posts/typography-in-cjk-blog/index.html"},{revision:"7bbf95dae62c4085662a3f17cf4f168b",url:"./series/排版学/index.html"},{revision:"9ad89278b5c06d9e2cb73352466d93d6",url:"./series/index.html"},{revision:"9916e0ea9461a38c6a613aaafb51d2b5",url:"./series/java-核心/index.html"},{revision:"553094e6f734ef3513b702d1c9e82c3a",url:"./series/spring-framework/index.html"},{revision:"12144456da87c71f85f7eda4bbc9f947",url:"./tags/编程/index.html"},{revision:"2da5d89ef27560208f3058facc538ae9",url:"./tags/博客/index.html"},{revision:"4832d9b93438d134eef662b0a530f5d7",url:"./tags/公众号/index.html"},{revision:"66d1b51dfc154c4d5a8ad18e189938ff",url:"./tags/缓存/index.html"},{revision:"85d7fd405634752b563f3ce4d8b116df",url:"./tags/面向对象/index.html"},{revision:"e8e8556d916d41281dc47c7ff84947bf",url:"./tags/排版/index.html"},{revision:"a7abe6af6d84b1e58ac3cdbde59bef39",url:"./tags/软件工程/index.html"},{revision:"ecc7c9a3e9fd1d55e2dafea5e1b531a1",url:"./tags/设计/index.html"},{revision:"c64fc027f85f4b4629058bdfd9cfb2b8",url:"./tags/字符集/index.html"},{revision:"f8dfd34bd4d7ccb20b5e5312b574b986",url:"./tags/字体/index.html"},{revision:"1a5beb167c63e0bb5ddab749136baec2",url:"./tags/baeldung/index.html"},{revision:"a680c2fc62630040524c8777fd68cea4",url:"./tags/cache/index.html"},{revision:"3b27c42c0dfd0b654de021c2c8928642",url:"./tags/css/index.html"},{revision:"d922f7e32b87b6ec6314c1fa6f4babb9",url:"./tags/hugo/index.html"},{revision:"8d43c7d1288b99ad25431031dfa2c203",url:"./tags/index.html"},{revision:"3a59826841b1654645f007ccdcd21d1b",url:"./tags/java/index.html"},{revision:"b5a4d8064baf6a22b9e29b49eb8e3773",url:"./tags/jdk/index.html"},{revision:"70c1d82dd335629559e57f9093d2c9d1",url:"./tags/markdown/index.html"},{revision:"b54cfb417e210d2c6c62539360b00ed4",url:"./tags/redis/index.html"},{revision:"c524d6335f630f481f8b3215c290d4c4",url:"./tags/spi/index.html"},{revision:"0ef39ad27c715587826370923021e05d",url:"./tags/spring-cache/index.html"},{revision:"a7ad165fdcd3732e6654f3b0e4a17e0d",url:"./tags/spring-framework/index.html"},{revision:"8cd6907ebba989dd712620258a5c1ac1",url:"./tags/unicode/index.html"},{revision:"f94e88b69b60295daabfc825ef863456",url:"./tags/utf-8/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:mp4|webm|ogg)$/,new workbox.strategies.CacheFirst({cacheName:"videos",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[200]}),new workbox.rangeRequests.RangeRequestsPlugin]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();