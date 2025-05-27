import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import State from "./hooks/state";
import Form from "./hooks/Form";
function App() {
    let name="Gow";
    return (
    <>
      
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home name={name}/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Service" element={<Service/>}/>
      <Route path="/Contact" element={<Contact/>}/>
       <Route path="/State" element={<State/>}/>
       <Route path="/Form" element={<Form/>}/>
      </Routes>
    </>
  );
}

export default App;
