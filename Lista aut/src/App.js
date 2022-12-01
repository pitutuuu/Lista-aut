import './App.css';
import Cars from './Cars'
import cars from './carsDB.json'

function App() {
  return (
    <div className="App">
      <Cars cars={cars} year={2013} />
      <Cars cars={cars} year={2018} />
      <Cars cars={cars} year={2020} />
    </div>
  );
}

export default App;
