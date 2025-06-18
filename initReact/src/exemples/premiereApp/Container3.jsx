export default function Container() {
    function printSomething() {
        console.log('Hello World !')
    }
    return (
        <div>
            <h1>React Training</h1>
            <button className="u-btn" onClick={printSomething}>Click me !</button>
        </div>
    );
}