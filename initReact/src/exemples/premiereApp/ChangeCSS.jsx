// Dans cet exemple, nous allons modifier la couleur du texte 
// en fonction d'une condition.

export default function ChangeCSS() {
  // Booléen à modifier pour changer la couleur du texte
  let isRed = true;

  return (
    <div>
      <p className={`${isRed ? 'text-danger' : 'text-success'}`}>
        Texte à afficher
      </p>
    </div>
  );
}
