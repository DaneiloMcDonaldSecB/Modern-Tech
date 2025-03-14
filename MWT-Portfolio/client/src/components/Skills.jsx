import { useEffect, useState } from "react";
import { fetchSkills } from "../services/api";
import { Container, Badge } from "react-bootstrap";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchSkills().then(data => setSkills(data));
  }, []);

  return (
    <Container className="mt-4">
      <h2>Skills</h2>
      <div>
        {skills.map((skill, index) => (
          <Badge key={index} bg="primary" className="me-2">{skill}</Badge>
        ))}
      </div>
    </Container>
  );
};

export default Skills;