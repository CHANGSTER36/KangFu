// 最簡單的 service worker：讓手機能「安裝」成 App；資料一律即時向網路讀取，不做快取。
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => self.clients.claim());
self.addEventListener("fetch", () => {});
