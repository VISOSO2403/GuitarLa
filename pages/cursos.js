import Layout from "../components/Layout";
import ListadoCurso from "../components/ListadoCurso";

const Curso = ({ cursos }) => {
  return (
    <Layout pagina="Cursos">
      <main className="contenedor">
        <h1 className="heading">Cursos</h1>

        <ListadoCurso cursos={cursos} />
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/cursos`;
  const respuesta = await fetch(url);
  const cursos = await respuesta.json();

  return {
    props: {
      cursos,
    },
  };
}

export default Curso;
