export default function Container() {
    let isRed = true;
    let text = "je suis le premier composant";
    return (
        <p className={`${isRed ? "text-danger" : "text-success"}`}>
            {text.toUpperCase()}
        </p>
    );
}