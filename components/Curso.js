
const Curso = ({curso}) => {
  const {titulo, contenido, imagen} = curso
  return (
    <section>
      <div className="contenedor">
        <div>
          <h2>{titulo}</h2>
        </div>
      </div>
    </section>
  )
}

export default Curso