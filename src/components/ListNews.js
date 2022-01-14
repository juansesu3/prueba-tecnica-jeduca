import React from 'react';
import { Button, Card, Carousel, Col, Container, Row, Stack } from 'react-bootstrap';
import firebaseApp from '../credenciales';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';
import '../styles/List.css'


const firestore = getFirestore(firebaseApp);





const ListNews = ({ arrayNews, correoUsuario, setArrayNews }) => {
    async function deleteNews(idNews) {
        //crear nuevo array de tareas 
        const nvoArrayNews = arrayNews.filter((objectNew) => objectNew.id !== idNews);

        //acrtualizar base de datos 

        const docuRef = doc(firestore, `usuarios/${correoUsuario}`)
        updateDoc(docuRef, {news: [...nvoArrayNews]});
        //actualizar  state
        setArrayNews(nvoArrayNews);


    }
    return (
        
            < >
            <div className='layout-list'>
                {arrayNews.map((objectNew) => {
                    return (




                        
                        // <Row>
                        //     <Col>{objectNew.description}</Col>
                        //     <Col> <Button>See File</Button></Col>
                        //     <Col><Button onClick={() => deleteNews(objectNew.id)}>Delete New</Button></Col>
                        // </Row>

<div >
  <Card style={{ width: '18rem' }}  >
    <Card.Img variant="top" src={objectNew.url} />
    <Card.Body>
      <Card.Title>{objectNew.title}</Card.Title>
      <Card.Text>
      {objectNew.date}
      </Card.Text>
      <Card.Text>
      {objectNew.description}
      </Card.Text>
      <Button variant="danger" onClick={() => deleteNews(objectNew.id)}>Delete New</Button>
    </Card.Body>
  </Card>
  </div>












                    )

                })}
                </div>
                </>
        
    )
}

export default ListNews
