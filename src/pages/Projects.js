import { useLocation } from 'react-router-dom';

function Projects() {
  const location = useLocation();
  const message = location.state?.message || '';

  return (
    <div>
      {message && <p>{message}</p>}
      <h2>Projects</h2>
      {}
    </div>
  );
}

export default Projects;


