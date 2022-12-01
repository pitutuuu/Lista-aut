const Car = (props) => {
    return (
        <div>
            <h4>{props.car.make.manufacturer} {props.car.make.model}</h4>
            <ul>
                <li>kolor: {props.car.color}</li>
                <li>rok produkcji: {props.car.year}</li>
                <li>kraj pochodzenia: {props.car.origin}</li>
                
                <li>cena: <b>${props.car.price}</b></li>
            </ul>
        </div>
    )
}

export default Car