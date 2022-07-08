import EntradaCurso from "./EntradaCurso";
import styles from "../styles/Curso.module.css";

const ListadoCurso = ({ cursos }) => {
  return (
    <div className={styles.curso}>
      {cursos.map((curso) => (
        <EntradaCurso 
          key={curso.id} 
          curso={curso} />
      ))}
    </div>
  );
};

export default ListadoCurso;
