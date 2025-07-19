import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Message from '../components/layout/msg/Message';
import styles from '../pages/Projects.module.css'
import Container from '../components/layout/Container'
import LinkButton from '../components/layout/LinkButton';
import ProjectCard from '../components/project/ProjectCard';

function Projects() {

  const [projects, setProjects] = useState([])
  const [removeMessage, setRemoveMessage] = useState('');

  const location = useLocation();
  let message = '';
  if(location.state) {
    message = location.state.message
  }

  useEffect(() => {
   fetch('http://localhost:5000/projects', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data)
    setProjects(data); 
  
  })
  .catch((err) => console.log(err));
}, []);

function removeProject(id) {
  fetch(`http://localhost:5000/projects/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resp.json())
    .then(() => {
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== id)
      ); 
      setRemoveMessage('Projeto removido com sucesso!');

    })
    .catch((err) => console.log(err));
}

  
  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
         <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} /> }
      {removeMessage && <Message type="success" msg={removeMessage} />}
        <Container customClass="start">
          <div className={styles.cards_container}>
            {projects.length > 0 &&
            projects.map((project) => (
              <ProjectCard 
                id={project.id} 
                name={project.name}
                budget={project.budget} 
                category={project.category?.name || 'Sem categoria'}
                handleRemove={removeProject}
                key={project.id} 
              />

      ))
    }
  </div>
</Container>


    </div>
  );
}

export default Projects;


