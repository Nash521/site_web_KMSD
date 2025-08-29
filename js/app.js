// Fonction pour charger un template
function loadTemplate(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
    })
    .catch((err) => console.error("Erreur chargement template:", err));
}

// Charger header et footer
loadTemplate("Carrousel", "Pages/Accueil/Composants/Carrousel.html");
loadTemplate("footer", "templates/footer.html");
