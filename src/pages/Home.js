import styles from './Home.module.css'
import savings from '../img/savings.svg'
import LinkButton from '../components/layout/LinkButton'

function Home() {
  return (
    <section className={styles.home_container}>
      <div className={styles.text_content}>
        <h1>
          Bem-vindo ao <span>Costs</span>
        </h1>
        <p>Comece a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      <div className={styles.image_container}>
        <img src={savings} alt="Costs" />
      </div>
    </section>
  )
}

export default Home
