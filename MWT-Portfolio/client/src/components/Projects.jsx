import { useEffect, useState } from "react";
import { fetchProjects } from "../services/api";
import { Container, Card, Row, Col } from "react-bootstrap";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects().then(data => setProjects(data));
  }, []);

  return (
    <Container className="mt-4">
      <h2>Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={6} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
