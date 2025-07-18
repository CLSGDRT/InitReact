// Dans cet exemple, nous allons afficher un texte en majuscules à partir d'une variable en minuscules.
// en utilisant la méthode toUpperCase() de JavaScript.
export default function CodeJS() {
  // Texte à afficher, en minuscules
  let titleLowerCase = "titre en petit";

  return (
    <div>
      {titleLowerCase.toUpperCase()}
    </div>
  );
}
