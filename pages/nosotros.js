import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
      pagina="Nosotros"
    >
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>

        <div className={styles.contenido}>

          <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt='Imagen sobre nosotros' />

          <div>
            <p>Duis rhoncus massa vel velit elementum, eget viverra nisl lacinia. Aenean quis ultrices tortor, sed gravida dui. Cras nec magna ac sem gravida faucibus. Aenean in mollis odio, quis efficitur sem. Donec nec arcu turpis. Praesent sit amet efficitur purus. Morbi id accumsan diam, et lobortis urna. Maecenas dapibus et neque nec facilisis. Cras in odio ipsum. Etiam consectetur purus vitae eros rutrum, nec vehicula nulla euismod.</p>

            <p>Duis rhoncus massa vel velit elementum, eget viverra nisl lacinia. Aenean quis ultrices tortor, sed gravida dui. Cras nec magna ac sem gravida faucibus. Aenean in mollis odio, quis efficitur sem. Donec nec arcu turpis. Praesent sit amet efficitur purus. Morbi id accumsan diam, et lobortis urna. Maecenas dapibus et neque nec facilisis. Cras in odio ipsum. Etiam consectetur purus vitae eros rutrum, nec vehicula nulla euismod.</p>

          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros