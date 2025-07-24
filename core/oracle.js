document.addEventListener("DOMContentLoaded", () => {
  console.log("🔮 Oracle attivo – Tutti i viaggi saranno rivelati...");

  // Mostra un messaggio ispirazionale dinamico nella console o nel DOM
  const divineMessages = [
    "✨ Dove vai non serve il passato.",
    "🌌 Ogni viaggio è una rinascita cosmica.",
    "🧭 La tua destinazione ti sta già cercando.",
    "🔥 Clicca. Parti. Risorgi.",
    "🌍 La realtà comincia dove finisce la mappa."
  ];

  const selected = divineMessages[Math.floor(Math.random() * divineMessages.length)];
  console.log("🗝️ " + selected);

  // (Facoltativo) Mostra frase nel DOM se esiste un elemento con id #tagline
  const tagline = document.getElementById("tagline");
  if (tagline) tagline.textContent = selected;
});
