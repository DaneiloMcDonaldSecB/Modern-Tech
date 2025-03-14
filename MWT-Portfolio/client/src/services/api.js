const API_URL = "http://localhost:8000"; // Backend URL

export const fetchEducation = async () => {
  const response = await fetch(`${API_URL}/getEdu`);
  return response.json();
};

export const fetchExperience = async () => {
  const response = await fetch(`${API_URL}/getExp`);
  return response.json();
};

export const fetchOverview = async () => {
  const response = await fetch(`${API_URL}/getOverview`);
  return response.json();
};

export const fetchSkills = async () => {
  const response = await fetch(`${API_URL}/getSkills`);
  return response.json();
};

export const fetchProjects = async () => {
  const response = await fetch(`${API_URL}/getProjects`);
  return response.json();
};
