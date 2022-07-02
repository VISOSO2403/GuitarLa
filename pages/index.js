import Layout from "../components/Layout";
import ListadoGuitarras from "../components/ListadoGuitarras";
import BloqueCurso from "../components/BloqueCurso";
import ListadoBlog from "../components/ListadoBlog";

export default function Home({ guitarras, bloquecurso, entradas }) {
  return (
    <Layout 
      pagina="Inicio"
      guitarra={guitarras[3]}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra coleccion</h1>
        <ListadoGuitarras guitarras={guitarras} />
      </main>

      <BloqueCurso bloquecurso={bloquecurso} />

      <section className="contenedor">
        <ListadoBlog entradas={entradas} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?_limit=6`;
  const urlBloqueCursos = `${process.env.API_URL}/bloque-cursos`;
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

  const [resGuitarras, resBloqueCursos, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlBloqueCursos),
    fetch(urlBlog),
  ]);

  const [guitarras, bloquecurso, entradas] = await Promise.all([
    resGuitarras.json(),
    resBloqueCursos.json(),
    resBlog.json(),
  ]);

  return {
    props: {
      guitarras,
      bloquecurso,
      entradas,
    },
  };
}
