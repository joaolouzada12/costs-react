import styles from './ProjectForm.module.css'
import Input from '../Form/Input'
import Select from '../Form/Select'
import SubmitButton from '../Form/SubmitButton'

function ProjectForm ({btnText}){
  return (
    <form  className={styles.form}>
      <Input 
        type="text"
        text="Nome do projeto" 
        name="name" 
         placeholder="Insira o nome do projeto" />
      <Input 
        type="number"
        text="Orçamento" 
        name="budget" 
        placeholder="Insira o orçamento" />
      <div>
      <Select name="category_id" text="Selecione a categoria" />
      </div>
      <SubmitButton text={btnText}/>
    </form>
  )
}
export default ProjectForm