self.addEventListener("fetch", e => {
  e.respondWith(
    caches.open("minosvdo").then(cache =>
      cache.match(e.request).then(res =>
        res || fetch(e.request)
      )
    )
  );
});