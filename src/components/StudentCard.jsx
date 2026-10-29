
function StudentCard(props) {
  return (
    <div className="student-card">
      <img
        src={props.photo}
        alt="Photo étudiant"
        className="student-image"
      />

      <h2>{props.nom}</h2>

      <p><strong>Email :</strong> {props.email}</p>
      <p><strong>Téléphone :</strong> {props.telephone}</p>
      <p><strong>Filière :</strong> {props.filiere}</p>
      <p><strong>Année d'étude :</strong> {props.annee}</p>
      <p><strong>Groupe :</strong> {props.groupe}</p>
      <p><strong>Ville :</strong> {props.ville}</p>

      <a
        href={`mailto:${props.email}`}
        className="contact-button"
      >
        Contacter
      </a>
    </div>
  );
}

export default StudentCard;
