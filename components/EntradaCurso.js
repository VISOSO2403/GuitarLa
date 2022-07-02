import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "../helpers";
import styles from "../styles/EntradaCurso.module.css";

const EntradaCurso = ({ curso }) => {
  const { titulo, descripcion, fechainicio, fechafin, costo, imagen, url } =
    curso;
  
  return (
    <article>
      <Image
        priority="true"
        layout="responsive"
        width={800}
        height={600}
        src={imagen.url}
        alt={`Imagen curso ${titulo}`}
      />

      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.resumen}>{descripcion}</p>
        <p className={styles.fechas}>Inicio: {formatearFecha(fechainicio)}</p>
        <p className={styles.fechas}>Fin: {formatearFecha(fechafin)}</p>
        <p className={styles.costo}>${costo}</p>

        <Link href={`/cursos/${url}`}>
          <a className={styles.enlace}>Ver contenido</a>
        </Link>
      </div>
    </article>
  );
};

export default EntradaCurso;
