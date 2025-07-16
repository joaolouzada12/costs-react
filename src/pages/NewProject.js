import styles from './NewProject.module.css'
import ProjectForm from '../components/project/ProjectForm';
function NewProject() {
  return  (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar o serviço</p>
      <ProjectForm btnText="Criar Projeto" />
    </div>
  )
}

export default NewProject;