
import { useState } from "react";

function StudentCard(props) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  function basculerInformations() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  return (
    <div className="student-card">
      {props.nom === "Nada Chaaben" ? (
        <img
          src={props.photo}
          alt={props.nom}
          className="student-image"
        />
      ) : (
        <div className="student-avatar">
          {props.nom.charAt(0).toUpperCase()}
        </div>
      )}

      <h2>{props.nom}</h2>

      {coordonneesVisibles && (
        <div className="student-info">
          <p><strong>Email :</strong> {props.email}</p>
          <p><strong>Téléphone :</strong> {props.telephone}</p>
          <p><strong>Filière :</strong> {props.filiere}</p>
          <p><strong>Année :</strong> {props.annee}</p>
          <p><strong>Groupe :</strong> {props.groupe}</p>
          <p><strong>Ville :</strong> {props.ville}</p>

          <a href={`mailto:${props.email}`} className="contact-button">
            Contacter
          </a>
        </div>
      )}

      <div className="card-actions">
        <button
          onClick={basculerInformations}
          className="action-button"
        >
          {coordonneesVisibles ? "Masquer" : "Afficher"}
        </button>

        <button
          onClick={() => props.onEdit(props.id)}
          className="action-button edit-button"
        >
          Modifier
        </button>

        <button
          onClick={() => props.onDelete(props.id)}
          className="action-button delete-button"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
