import { useNavigate } from 'react-router-dom';
import styles from './NewProject.module.css'
import ProjectForm from '../components/project/ProjectForm';

function NewProject() {
  const navigate = useNavigate()

  function createPost(projectData){
    projectData.cost = 0;
    projectData.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projectData)
    })
      .then(resp => resp.json())
      .then(data => {
      console.log('Projeto criado:', data);
      navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } });

      })
      .catch(err => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar o serviço</p>
      <ProjectForm btnText="Criar Projeto" handleSubmit={createPost} />
    </div>
  )
}

export default NewProject;
