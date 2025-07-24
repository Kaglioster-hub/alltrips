document.addEventListener("DOMContentLoaded", () => {
  console.log("✨ Soul Rotator attivato – animazioni cosmiche caricate");

  const messages = [
    "🌠 Ogni viaggio è una possibilità di riscriversi.",
    "💫 L'anima sa dove andare, il resto è logistica.",
    "🌍 La mappa non è il territorio… ma può guidarti.",
    "🌀 Parti ora. Il tempo è una convenzione.",
    "🚀 Dove vuoi andare, ci sei già stato in sogno."
  ];

  const rotator = document.getElementById("soul-rotator");
  if (!rotator) return;

  let i = 0;
  function rotate() {
    rotator.textContent = messages[i % messages.length];
    i++;
  }

  rotate(); // Mostra subito il primo messaggio
  setInterval(rotate, 6000); // Cambia ogni 6 secondi
});
