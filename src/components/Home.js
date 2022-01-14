import React, { useState, useEffect } from 'react'
import { Button, Card, Carousel, Container } from 'react-bootstrap'
import '../styles/Home.css'
import { getAuth, signOut } from 'firebase/auth';
import firebaseApp from '../credenciales';
import AddNews from './AddNews';
import ListNews from './ListNews';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);


const Home = ({ correoUsuario }) => {


  console.log(correoUsuario);

  const [arrayNews, setArrayNews] = useState(null)

  const fakeData = [
    { 
    id: 1, 
    title: "Fake new 1",
    description: "Some quick example text to build on the card title and make up the bulk of" ,  
    date:"29/10/1994",
    url: "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641318874/AmazonasSprint3/ofjlh7hkkzrq8tlxvuly.png" },




    {  id: 2, 
      title: "Fake new 2",
      description: "Some quick example text to build on the card title and make up the bulk of" , 
      date:"29/10/1994",
      url: "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641318874/AmazonasSprint3/ofjlh7hkkzrq8tlxvuly.png" },

    {  id: 3, 
      title: "Fake new 3",
      description: "Some quick example text to build on the card title and make up the bulk of", 
      date:"29/10/1994",
      url: "https://res.cloudinary.com/dv08oqgvx/image/upload/v1641318874/AmazonasSprint3/ofjlh7hkkzrq8tlxvuly.png" },
  ];

  async function buscarDocumentOrCrearDocumento(idDocumento) {
    //crear referencia del documento 

    const docuRef = doc(firestore, `usuarios/${idDocumento}`);
    //buscar documento 

    const consulta = await getDoc(docuRef);


    //revisar si existe 
    if (consulta.exists()) {
      //siu si existe 
      const infoDocu = consulta.data();
      return infoDocu.news;


    } else {
      //si no existe 
      await setDoc(docuRef, { news: [...fakeData] });
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      return infoDocu.news



    }







  }

 
  useEffect(() => {
    async function fetchNews() {

      const newsFetchadas = await buscarDocumentOrCrearDocumento(
        correoUsuario
      );
      setArrayNews(newsFetchadas)
    }

    fetchNews()
  }, []);


  return (
    <div>
      <Container>
        <Button onClick={() => signOut(auth)}>Sign off</Button>
        <hr />
        <AddNews
         arrayNews={arrayNews}
         setArrayNews={setArrayNews}
         correoUsuario={correoUsuario}
        />
{

        arrayNews ?
        <ListNews 
         arrayNews={arrayNews}
         setArrayNews={setArrayNews}
         correoUsuario={correoUsuario}
         />
         : null
}


      </Container>


    </div>
  )
}

export default Home
