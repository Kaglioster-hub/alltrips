document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("tripForm");
  const results = document.getElementById("results");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const date = document.getElementById("date").value;

    if (!from || !to || !date) {
      results.innerHTML = "⚠️ Inserisci tutti i campi per cercare un viaggio.";
      return;
    }

    results.innerHTML = `
      <div class="divine-box">
        🔍 <span class="pulse">Ricerca in corso</span> da <b>${from}</b> a <b>${to}</b> per il <b>${date}</b>...
      </div>
    `;
  });
});
