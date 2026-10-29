
import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      nom: "Nada Chaaben",
      email: "nada@example.com",
      telephone: "12345678",
      filiere: "Informatique",
      annee: "1ère année",
      groupe: "Groupe 1",
      ville: "Mahdia",
      photo: "/images/moi.jpg",
    },
    {
      id: 2,
      nom: "Slim Boubaker",
      email: "slim@example.com",
      telephone: "98765432",
      filiere: "Génie logiciel",
      annee: "2ème année",
      groupe: "Groupe 2",
      ville: "Monastir",
      photo: "/images/moi.jpg",
    },
    {
      id: 3,
      nom: "Amira Ben Ali",
      email: "amira@example.com",
      telephone: "22334455",
      filiere: "Informatique",
      annee: "1ère année",
      groupe: "Groupe 3",
      ville: "Sousse",
      photo: "/images/moi.jpg",
    },
  ]);

  const [nouveauNom, setNouveauNom] = useState("");
  const [nouvelEmail, setNouvelEmail] = useState("");
  const [nouveauTelephone, setNouveauTelephone] = useState("");
  const [nouvelleFiliere, setNouvelleFiliere] = useState("Informatique");
  const [filtre, setFiltre] = useState("Toutes");

  function ajouterEtudiant(e) {
    e.preventDefault();

    const nouvelEtudiant = {
      id: Date.now(),
      nom: nouveauNom,
      email: nouvelEmail,
      telephone: nouveauTelephone,
      filiere: nouvelleFiliere,
      annee: "1ère année",
      groupe: "Groupe 1",
      ville: "Mahdia",
      photo: "/images/moi.jpg",
    };

    setEtudiants([...etudiants, nouvelEtudiant]);

    setNouveauNom("");
    setNouvelEmail("");
    setNouveauTelephone("");
    setNouvelleFiliere("Informatique");
  }

  function supprimerEtudiant(id) {
    setEtudiants(etudiants.filter((etudiant) => etudiant.id !== id));
  }

  function modifierEtudiant(id) {
    const etudiant = etudiants.find((etudiant) => etudiant.id === id);
    const nouveauNom = window.prompt(
      "Saisir le nouveau nom :",
      etudiant.nom
    );

    if (nouveauNom !== null && nouveauNom.trim() !== "") {
      setEtudiants(
        etudiants.map((etudiant) =>
          etudiant.id === id
            ? { ...etudiant, nom: nouveauNom }
            : etudiant
        )
      );
    }
  }

  const etudiantsFiltres =
    filtre === "Toutes"
      ? etudiants
      : etudiants.filter((etudiant) => etudiant.filiere === filtre);

  return (
    <div className="app">
      <Header />
      <Navbar />

      <main className="main" id="etudiants">
        <h1 className="page-title">Gestion des étudiants</h1>

        <section className="form-section">
          <h2>Ajouter un étudiant</h2>

          <form onSubmit={ajouterEtudiant} className="student-form">
            <input
              type="text"
              placeholder="Nom et prénom"
              value={nouveauNom}
              onChange={(e) => setNouveauNom(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Adresse email"
              value={nouvelEmail}
              onChange={(e) => setNouvelEmail(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Téléphone"
              value={nouveauTelephone}
              onChange={(e) => setNouveauTelephone(e.target.value)}
              required
            />

            <select
              value={nouvelleFiliere}
              onChange={(e) => setNouvelleFiliere(e.target.value)}
            >
              <option value="Informatique">Informatique</option>
              <option value="Génie logiciel">Génie logiciel</option>
            </select>

            <button type="submit" className="action-button">
              Ajouter
            </button>
          </form>
        </section>

        <section className="filter-section">
          <label htmlFor="filtre">Filtrer par filière : </label>

          <select
            id="filtre"
            value={filtre}
            onChange={(e) => setFiltre(e.target.value)}
          >
            <option value="Toutes">Toutes les filières</option>
            <option value="Informatique">Informatique</option>
            <option value="Génie logiciel">Génie logiciel</option>
          </select>
        </section>

        <div className="students-container">
          {etudiantsFiltres.length > 0 ? (
            etudiantsFiltres.map((etudiant) => (
              <StudentCard
                key={etudiant.id}
                {...etudiant}
                onDelete={supprimerEtudiant}
                onEdit={modifierEtudiant}
              />
            ))
          ) : (
            <p>Aucun étudiant trouvé.</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
