import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  const etudiant = {
    nom: "Nada Chaaben",
    email: "nadachaaben96@gmail.com",
    telephone: "+216 24 272 325",
    filiere: "Génie Logiciel et Systèmes d'Information",
    annee: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia"
  };

  return (
    <div className="page">
      <div className="student-card">
      <img
  src="/src/images/moi.jpg"
  alt="Ma photo"
  className="avatar"
/>

        <h1>Fiche étudiant</h1>

        <p><strong>Nom & Prénom :</strong> {etudiant.nom}</p>
        <p><strong>Email :</strong> {etudiant.email}</p>
        <p><strong>Téléphone :</strong> {etudiant.telephone}</p>
        <p><strong>Filière :</strong> {etudiant.filiere}</p>
        <p><strong>Année d'étude :</strong> {etudiant.annee}</p>
        <p><strong>Groupe :</strong> {etudiant.groupe}</p>
        <p><strong>Ville :</strong> {etudiant.ville}</p>

        <a className="contact-btn" href={"mailto:" + etudiant.email}>
          Contacter
        </a>
      </div>
    </div>
  );
}

export default App;