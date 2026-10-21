function StudentCard({
  prenom,
  nom,
  email,
  telephone,
  filiere = "Non précisée"
}) {
  return (
    <div className="student-card">
      <div className="student-avatar">
        {prenom.charAt(0)}
      </div>

      <h2>{prenom} {nom}</h2>

      <p>
        <strong>Email :</strong> {email}
      </p>

      <p>
        <strong>Téléphone :</strong> {telephone}
      </p>

      <p>
        <strong>Filière :</strong> {filiere}
      </p>
    </div>
  );
}

export default StudentCard;