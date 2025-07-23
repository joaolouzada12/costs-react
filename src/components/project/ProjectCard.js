import styles from './ProjectCard.module.css'
import {Link} from 'react-router-dom'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard({id, name, budget, category, handleRemove}){
  return (
    <div className={styles.project_card}>
      <h4>
  <Link to={`/project/${id}`} className={styles.project_link}>
    {name}
  </Link>
</h4>

      <p>
        <span>Orçamento</span> R${Number(budget).toLocaleString('pt-BR')}
      </p>
      <p className={styles.category_text}>
        <span className={styles[category.toLowerCase()]}></span>{category}
        </p>
      <div className={styles.project_card_actions}>
      <Link to={`/project/${id}`}>
           <BsPencil /> Editar
      </Link>
        <button onClick={() => handleRemove(id)}>
          <BsFillTrashFill /> Excluir     
        </button>

      </div>
    </div>
    )
}

export default ProjectCard