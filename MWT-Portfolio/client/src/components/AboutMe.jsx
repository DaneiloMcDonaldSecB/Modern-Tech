import { useEffect, useState } from "react";
import { fetchOverview } from "../services/api";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./AboutMe.css";

const AboutMe = () => {
  const [overview, setOverview] = useState({});

  useEffect(() => {
    fetchOverview().then(data => setOverview(data));
  }, []);

  return (
    <Container className="about-me-section mt-5">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <Card className="about-card p-4">
            <Card.Body>
              <h2 className="about-title">{overview.name}</h2>
              <p className="about-bio">{overview.bio}</p>
              <Button variant="primary" className="about-button">View Portfolio</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;