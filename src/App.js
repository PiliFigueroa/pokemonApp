import './App.css';
import { Home } from './screens/Home/Home'
import { PokeList } from './screens/PokeList/PokeList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/pokemon' element={<PokeList />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;