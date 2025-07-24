
document.getElementById("tripForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const date = document.getElementById("date").value;
  document.getElementById("results").innerHTML = `
    <div class='pulse-box'>✨ Ricerca di un pacchetto All-Inclusive da <strong>${from}</strong> a <strong>${to}</strong> per il <strong>${date}</strong> in corso...</div>
  `;
});
