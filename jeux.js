// Récupération des éléments
const totalElement = document.getElementById("total");
const quantites = document.querySelectorAll(".quantite");

// Fonction pour recalculer le total
function recalculerTotal() {
  let total = 0;

  quantites.forEach(qte => {
    const prix = Number(qte.dataset.prix);
    const quantite = Number(qte.textContent);
    total += prix * quantite;
  });

  totalElement.textContent = total;
}

// Gestion des boutons +
document.querySelectorAll(".plus").forEach(bouton => {
  bouton.addEventListener("click", () => {
    const id = bouton.dataset.id;
    const qteElement = document.querySelector(`.quantite[data-id="${id}"]`);

    let quantite = Number(qteElement.textContent);
    quantite++;
    qteElement.textContent = quantite;

    recalculerTotal();
  });
});

// Gestion des boutons –
document.querySelectorAll(".moins").forEach(bouton => {
  bouton.addEventListener("click", () => {
    const id = bouton.dataset.id;
    const qteElement = document.querySelector(`.quantite[data-id="${id}"]`);

    let quantite = Number(qteElement.textContent);

    // Empêche d'aller en négatif
    if (quantite <= 0) return;

    quantite--;
    qteElement.textContent = quantite;

    recalculerTotal();
  });
});

// Bouton reset
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
  quantites.forEach(qte => {
    qte.textContent = 0;
  });
  recalculerTotal();
});

// Initialisation du total
recalculerTotal();