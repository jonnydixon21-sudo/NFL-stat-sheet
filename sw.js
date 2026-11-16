/* Pass-through helper so the app can be installed. It keeps no offline copy: every visit loads
   straight from GitHub, so each Wednesday's refresh shows up the next time the app is opened. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
