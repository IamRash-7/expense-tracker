import './App.css';
import {Header} from './components/Header.js';
import {Balance} from './components/Balance.js';
import {Inex} from './components/Inex.js';
import {Trlist} from './components/Trlist.js';
import {Transaction} from './components/Transaction.js';

import {GlobalProvider} from './context/global';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance />
        <Inex />
        <Trlist/>
        <Transaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
