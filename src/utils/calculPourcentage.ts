function calculPourcentage(nombreACalculer: number, tva: number): number {
  //calcul
  let resultatCalculTva: number = (nombreACalculer * tva) / 100;
  return resultatCalculTva;
}

export default calculPourcentage;
