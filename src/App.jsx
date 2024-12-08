import './css/App.css'
import Favorites from './pages/favorites'
import Home from "./pages/home"
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import { MovieProvider } from './context/MovieContext'
//function Text({display}){
//  return(
//    <div>
//      <p>{display}</p>
//    </div>
//  );
//}

function App() {


  return (
    // Code here 'Components' and 'fragments' and 'prop' as in property

    //moviecontext.jsx is a state
    <MovieProvider>
    
      <NavBar/>
  <main className="main-content">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
    </Routes>
  </main>
  </MovieProvider>
  );
  

  
  
}




export default App;
