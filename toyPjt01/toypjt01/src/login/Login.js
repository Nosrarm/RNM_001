import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Login() {
  const [inputId , setInputId] = useState('');
  const [inputPw , setInputPw] = useState('');

  const handleInputId = (e) => {
    setInputId(e.target.value);
  }

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  }

  const actLogin = (e) => {
      alert('id: '+ inputId + '\npw: '+ inputPw);
  }

  useEffect(() => {
    //axios.get('/')
  }, [])

  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="bg-light center">로그인</h1>
        <Form>
          <Form.Group className="mb-3" controlId={inputId} onChange={handleInputId}>
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text" placeholder="아이디를 입력하세요." />
          </Form.Group>
          <Form.Group className="mb-3" controlId={inputPw} onChange={handleInputPw}>
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="아이디 저장" />
          </Form.Group>

          <Button variant="primary" type="button" onClick={actLogin}>
            Login
          </Button>
      </Form>
    </Container>
  </Container>
  );
}

export default Login;
