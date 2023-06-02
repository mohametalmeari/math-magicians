import { useState } from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './App.css';

function App() {
  const [pageIndex, setPageIndex] = useState(1);

  const NavToPage = (index) => {
    setPageIndex(index);
  };

  return (
    <div className="container">
      <header>
        <h1>
          Math Magicians
        </h1>
        <button className="nav-link" onClick={() => { NavToPage(1); }} type="button">
          Calculator
        </button>
        <button className="nav-link" onClick={() => { NavToPage(2); }} type="button">
          Quote
        </button>
      </header>
      <main>
        {pageIndex === 1 ? <Calculator /> : <Quote />}
      </main>
    </div>
  );
}

export default App;
