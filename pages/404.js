import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NoEncontrado.module.css";

const NoEncontrado = () => {
  return (
    <div className={styles.no_encontrado}>
      <Image width={200} height={200} src="/img/error-404.png" alt="Error 404" />
      <h1 className="heading">Pagina no encontrada</h1>

      <Link href="/">Volver al Inicio</Link>
    </div>
  );
};

export default NoEncontrado;
