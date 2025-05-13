// code-1
// document.getElementById('app').innerHTML = 'This is Saleh';

// const divElement = React.createElement('div', {}, 'Hi Momi');
// ReactDOM.render(
//     divElement,
//     document.getElementById('app')
// )



// code-2

const Btn = () => (<button>Click me</button>)

const div = (
    <div>
        <h1>
            This is JSX
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae animi nulla sit enim ut atque quam modi aliquam commodi. Repellendus id cum pariatur!
        </p>
        <Btn />
        <Button />
    </div>
)

ReactDOM.render(
    div,
    document.getElementById('app')
)


