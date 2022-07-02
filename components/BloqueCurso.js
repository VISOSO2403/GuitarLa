import Link from "next/link";
import style from "../styles/BloqueCurso.module.css"

const Curso = ({ bloquecurso }) => {
  const { titulo, contenido, imagen } = bloquecurso;
  return (
    <section>
      <div className={`contenedor ${style.grid}`}>
        <div className={style.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p className={style.texto}>{contenido}</p>
          <Link href="/curso">
            <a className={style.enlace}>Mas Informacion</a>
          </Link>
        </div>
      </div>

      <style jsx>
        {`
          section {
            padding: 10rem 0;
            margin-top: 10rem;
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / .65),
                rgb(0 0 0 / .7)
              ),
              url(${imagen.url});
            background-size: cover;
            background-position: 50%;
          }
        `}
      </style>
    </section>
  );
};

export default Curso;
