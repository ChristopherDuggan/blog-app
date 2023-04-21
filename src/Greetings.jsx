function Greetings(props) {
    return (
        <div>
            <h1>Hello {props.name}!</h1>
            <h2>I'm {props.age} years old!</h2>
            <h3>I'm in {props.location}!</h3>
            <p>A number is {props.number / 10}</p>
        </div>
    )
}

export default Greetings
