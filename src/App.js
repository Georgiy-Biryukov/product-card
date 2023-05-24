
import { Card } from './components/Card'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <ul className='cards-list'>
          <li className='cards-item'>
            <Card variant='dark' />
          </li>
          <li className='cards-item'>
            <Card />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
