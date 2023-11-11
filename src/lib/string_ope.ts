function convertirFormatDate(input: string): string {
  const dateObj = new Date(input);

  const jour = dateObj.getDate();
  const mois = dateObj.getMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
  const annee = dateObj.getFullYear();

  const heures = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const secondes = dateObj.getSeconds();

  // Fonction pour ajouter un zéro devant les chiffres < 10
  const ajouterZero = (valeur: number): string =>
    valeur < 10 ? `0${valeur}` : `${valeur}`;

  const dateFormatee = `${ajouterZero(jour)}/${ajouterZero(
    mois
  )}/${annee} ${ajouterZero(heures)}:${ajouterZero(minutes)}:${ajouterZero(
    secondes
  )}`;

  return dateFormatee + " PM";
}

export { convertirFormatDate };
