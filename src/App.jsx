
function App() {
  return (
    <div className="app">
      <div className="student-card">
        <img
          src="/images/moi.jpg"
          alt="Photo étudiant"
          className="student-image"
        />

        <h1>Fiche étudiant</h1>

        <p><strong>Nom & Prénom :</strong> Nada</p>
        <p><strong>Email :</strong> slimboubaker@gmail.com</p>
        <p><strong>Téléphone :</strong> +216 99 999 999</p>
        <p><strong>Filière :</strong> Génie Logiciel et Systèmes d'Information</p>
        <p><strong>Année d'étude :</strong> 2ème année</p>
        <p><strong>Groupe :</strong> GLSI 2</p>
        <p><strong>Ville :</strong> Mahdia</p>

        <a
          href="mailto:slimboubaker@gmail.com"
          className="contact-button"
        >
          Contacter
        </a>
      </div>
    </div>
  );
}

export default App;
