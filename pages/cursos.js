import Layout from "../components/Layout"
import EntradaCurso from "../components/EntradaCurso"
import styles from "../styles/Curso.module.css"

const Curso = ({cursos}) => {
  return (
    <Layout pagina="Cursos">
      <main className="contenedor">
        <h2 className="heading">Cursos</h2>

        <div className={styles.curso}>
          {cursos.map(curso => (
            <EntradaCurso 
              key={curso.id}
              curso={curso}
            />
            
          ))}
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const url = "http://localhost:1337/cursos"
  const respuesta = await fetch(url)
  const cursos = await respuesta.json()

  return {
    props: {
      cursos,
    }
  }
}

export default Curso