
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";

function App() {
  const etudiants = [
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
      nom: "Oussema ghorraf",
      email: "Oussema@example.com",
      telephone: "98765432",
      filiere: "Génie logiciel",
      annee: "2ème année",
      groupe: "Groupe 2",
      ville: "Monastir",
      photo: "/images/etudiant2.jpg",
    },
    {
      id: 3,
      nom: "Sarra Haouala",
      email: "Sarra@example.com",
      telephone: "22334455",
      filiere: "Informatique",
      annee: "1ère année",
      groupe: "Groupe 3",
      ville: "Sousse",
      photo: "/images/etudiant3.jpg",
    },
  ];

  return (
    <div className="app">
      <Header />
      <Navbar />

      <main className="main" id="etudiants">
        <h1 className="page-title">Liste des étudiants</h1>

        <div className="students-container">
          {etudiants.map((etudiant) => (
            <StudentCard
              key={etudiant.id}
              nom={etudiant.nom}
              email={etudiant.email}
              telephone={etudiant.telephone}
              filiere={etudiant.filiere}
              annee={etudiant.annee}
              groupe={etudiant.groupe}
              ville={etudiant.ville}
              photo={etudiant.photo}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
