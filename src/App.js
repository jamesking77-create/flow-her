
import './App.css';
// import Tictactoe from './pages/dashboard/component/tictactoe.jsx'
import MenstrualApp from './pages/dashboard/component/menstrualApp';
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import MensPage2 from './pages/dashboard/component/mensPage2';
import MensPage3 from './pages/dashboard/component/mensPage3';
// import UserDetailsComponent from './pages/dashboard/component/userDetailsComponent';
// import Cards from './pages/dashboard/component/api';

function App() {
  return (
    <div className="App">     
    
      <Router>
        <Routes>
          <Route path= "/" element={<MenstrualApp/>} />
          <Route path = "/page2" element={<MensPage2/>}/>
          <Route path = "/page3" element={<MensPage3/>} />
          {/* <Route path = "/counter" element={<CounterComponent />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
