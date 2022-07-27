import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import BodyComponenentFunc from './component/BodyComponenetsfunc.js';


import 'bootstrap/dist/css/bootstrap.min.css' 
import Content from './component/Content';
import Footer from './component/footer';
import BodyComponent from './component/BodyComponent';

import Parent from './component/Parent'
import Greet from './component/Greet';
import Counter from './component/Counter';
function App() {
  return (
    
    <>
      {/* <Navbar/> */}
      <BodyComponenentFunc title = "test"/>
      <BodyComponent firstName = "Steven"/>
      {/* <div style = {{minHeight: '100vh'}}>
        <Content/>
      </div> */}

      <Parent name = 'doni' age = {20}/>
     
      {/* <Footer/> */}

      <Greet/>

      <Counter default = {2}/>
    </>
  );
}

export default App;
