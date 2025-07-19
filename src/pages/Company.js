import styles from './Company.module.css'

function Company() {
  return (
    <section className={styles.company}>
      <h2>Sobre a Empresa</h2>
      <p>
        A <strong>Costs</strong> é uma plataforma dedicada ao gerenciamento eficiente de projetos e orçamentos.
        Nosso objetivo é fornecer uma interface simples e intuitiva, permitindo que você crie, edite e controle
        seus projetos com total transparência e organização.
      </p>
      <p>
        Com o Costs, você consegue visualizar seus gastos, acompanhar o progresso dos projetos e tomar decisões
        baseadas em dados reais. Ideal para freelancers, equipes pequenas e empresas que prezam pelo controle financeiro.
      </p>
    </section>
  )
}

export default Company

