import React from 'react';
import { Container, Form, Col, Row, Button } from 'react-bootstrap';
import firebaseApp from '../credenciales';
import { doc, getFirestore, updateDoc } from 'firebase/firestore'

const firestore = getFirestore(firebaseApp)

const AddNews = ({ correoUsuario, setArrayNews, arrayNews }) => {


    async function fileHandler(e){
        //detectar archivo
        //cargarlos a firebase 
    }

    async function adddNews(e) {


        e.preventDefault();

        const description = e.target.formDescripcion.value
        const title = e.target.formTitle.value
        const date = e.target.formDate.value
        const url = e.target.formUrl.value
        //crear array news 

        const nvoArrayNews = [...arrayNews, 
            {   
                id: + new Date(), 
                description: description, 
                url: url,
                date:date,
                title:title,
        
            }]
        //actualizar base de datos 


        const docuRef = doc(firestore, `usuarios/${correoUsuario}`);
        updateDoc(docuRef, { news: [...nvoArrayNews] });

        //actualizar estado


        setArrayNews(nvoArrayNews)





    }
    return (
        <>
            <Container>
                <Form onSubmit={adddNews}>
                    <Row>
                        <Col><Form.Control type="text" placeholder='News Titles' id="formTitle" /></Col>
                        <Col><Form.Control type="text" placeholder='News Descriptions' id="formDescripcion" /></Col>
                        <Col><Form.Control type="text" placeholder='News images' id="formUrl" /></Col>
                        <Col><Form.Control type="date" placeholder='Date' id="formDate" /></Col>
                        <Col><Button type="submit">Add News</Button></Col>
                        <Col></Col>
                    </Row>
                </Form>

            </Container>
        </>
    )
}

export default AddNews
