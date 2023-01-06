import '../style/components/header/Header.css';
import {Routes, Route} from "react-router-dom"
import Home from './home/Home'
import Header from "./header/Header"
import Container from './home/Container';


/**
 * Contains the routes and all our application.
 * @returns app
 */
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user/:id" element={<Container />}></Route>
      </Routes>
    </div>
  );
}

export default App;
