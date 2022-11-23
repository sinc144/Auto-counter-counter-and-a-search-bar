import AutoCounter from './autoCounter';
import Counter from './counter';
import SearcBar from './searchBar';
import './App.css';

function App() {
  return (
    <div className="App App-header">
        
      <div className="App-header">
        
        <p className="conter">Auto Counter to 60</p>
        <AutoCounter />
        
      </div>
      <div>
        <p className='App-header info'>To go to the next step you have to reach 10 on the "Counter to 10"</p>
      </div>
      <div>
        <p className='App-header'>Counter to 10</p>
        <Counter />
      </div>

      <div>
        
        
      </div>
  </div>
  );
}

export default App;
