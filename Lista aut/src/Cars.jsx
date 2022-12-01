import Car from './Car'

const Cars = (props) => {
    const cars = props.cars.filter(car => car.year === props.year)
    return (
        <div>
            <h1>Lista samochodów ({props.year}) [{cars.length}]</h1>
            {cars.map(car => <Car car={car} />)}
        </div>
    )
}

export default Cars