import { useEffect, useState } from "react";
import { fetchEducation } from "../services/api";
import { Container, ListGroup } from "react-bootstrap";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetchEducation().then(data => setEducation(data));
  }, []);

  return (
    <Container className="mt-4">
      <h2>Education</h2>
      <ListGroup>
        {education.map((edu, index) => (
          <ListGroup.Item key={index}>
            <strong>{edu.degree}</strong> - {edu.school} ({edu.year})
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Education;