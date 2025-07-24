fetch("/seo_pages/feed.json")
  .then(res => res.json())
  .then(data => console.log("📡 AutoFeed attivo con", data.length, "feed."))
  .catch(() => console.warn("❌ Nessun feed disponibile"));
