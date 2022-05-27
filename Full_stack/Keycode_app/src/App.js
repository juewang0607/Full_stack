import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
    const [key, setKey] = useState("");
    const [location, setLocation] = useState("");
    const [which, setWhich] = useState("");
    const [code, setCode] = useState("");

  useEffect(() => {
    document.body.addEventListener("keydown", onKeyDown);
  }, []);

  const onKeyDown = (event) => {
    setKey(event.key);
    setLocation(event.location);
    setWhich(event.which);
    setCode(event.code);
  };

  return (
    <Container className="p-3">
      <Header />
      <Row>
        <Card title={"event.key"} value={key} />
        <Card title={"event.location"} value={location} />
        <Card title={"event.which"} value={which} />
        <Card title={"event.code"} value={code} />
      </Row>
    </Container>
  );
}

export default App;