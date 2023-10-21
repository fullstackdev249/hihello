import logo from './hihello_logo.svg';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body className="App-body">
        <Calculator/>
      </body>
    </div>
  );
}

export default App;
