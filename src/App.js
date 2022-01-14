import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
// import NavBarr from "./components/NavBarr";
// import AppRouter from "./router/AppRouter";
import firebaseApp from "./credenciales";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
const  auth = getAuth(firebaseApp)



function App() {
  const[usarioGlobal, setUsuarioGlobal] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase)=> {


    if(usuarioFirebase){
      //en caso de que haya sesion iniciada

      setUsuarioGlobal(usuarioFirebase);

    }else{
      //en caso de que no haya sesion iniciada 
      setUsuarioGlobal(null)

    }
  })
  
  return (
    < >

    
{usarioGlobal ?  <Home correoUsuario={usarioGlobal.email}/> : <Login/>}
      
    </>
  );
}

export default App;
