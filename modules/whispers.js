document.addEventListener("DOMContentLoaded", () => {
  console.log("👁️‍🗨️ Whispers attivo – ascolto frequenze cosmiche...");

  const whispers = [
    "🌌 L'universo parla... ascolta.",
    "🧭 La direzione giusta non si trova, si ricorda.",
    "⏳ Ogni click è un battito del tempo multidimensionale.",
    "🔮 La destinazione è solo una scusa per cominciare.",
    "🛰️ Connessione stabile con le rotte dell'anima."
  ];

  setInterval(() => {
    const msg = whispers[Math.floor(Math.random() * whispers.length)];
    console.log("🌬️ Sussurro cosmico: " + msg);
  }, 15000);
});
