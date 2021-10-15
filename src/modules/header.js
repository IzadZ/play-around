/**
Genrate headers
@return {String}
*/
let headers = "";
for (const name of [
  "Nom",
  "Prénom",
  "Âge",
  "Couleur des yeux",
  "Email",
  "Entreprise",
  "Téléphone",
]) {
  headers += `<th>${name}</th>`;
}
export default headers;
