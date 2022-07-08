import Image from "next/image";
import Layout from "../../components/Layout";
import { formatearFecha } from "../../helpers";
import styles from "../../styles/URLCurso.module.css";

const cursourl = ({ curso }) => {
  const { titulo, descripcion, fechainicio, fechafin, costo, imagen, url } =
    curso[0];

  return (
    <Layout pagina={`Curso ${titulo}`}>
      <div className={styles.curso}>
        <Image
          layout="responsive"
          width={800}
          height={600}
          src={imagen.url}
          alt={`Imagen Curso ${titulo}`}
        />
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.fechas}>{formatearFecha(fechainicio)}</p>
          <p className={styles.fechas}>{formatearFecha(fechafin)}</p>
          <p className={styles.precio}>${costo}</p>

          <form className={styles.formulario}>
            <input type="submit" value="Inscribirse" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const urlCurso = `${process.env.API_URL}/cursos?url=${url}`;
  const respuesta = await fetch(urlCurso);
  const curso = await respuesta.json();

  return {
    props: {
      curso,
    },
  };
}

export default cursourl;
