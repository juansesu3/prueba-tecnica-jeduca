import React, { useState } from 'react';
import { Stack, Container, Form, Button } from 'react-bootstrap';
import firebaseApp from '../credenciales';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider
} from 'firebase/auth'

const auth = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider();

const Login = () => {

  const [estaRegistrandose, setEstaRegistrandose] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    const correo = e.target.formBasicEmail.value;
    const contra = e.target.formBasicPassword.value;
    console.log(correo, contra);
    if (estaRegistrandose) {
      //si se registra
      const usuario = await createUserWithEmailAndPassword(auth, correo, contra)

    } else {
      // si esta iniciando sesion 
      signInWithEmailAndPassword(auth, correo, contra)
    }

  }


  return (
    <div>
      <Container>
        <Stack gap={3}>
          {estaRegistrandose ? "Sign up" : "log in"}
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="dark" type="submit" >
              {estaRegistrandose ? "Sign up" : "log in"}
            </Button>
          </Form>
          <Button variant="primary" type="submit" style={{ width: '40vw', margin: 'auto' }} onClick={() => signInWithRedirect(auth, googleProvider)}>
            Sign in with Google
          </Button>
          <Button variant="dark" style={{ width: '40vw', margin: 'auto' }}
            onClick={() => setEstaRegistrandose(!estaRegistrandose)}
          >
            {estaRegistrandose ? "Do you already have an account? log in " : "Don't have an account? Sign up"}
          </Button>




        </Stack>
      </Container>

    </div>
  )
}

export default Login
