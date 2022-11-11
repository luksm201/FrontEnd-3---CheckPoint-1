//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import "./style.scss"

export function Card(props) {
  const {cor} = props
      return (
          <div className="card-cores" style={{backgroundColor:cor.hexaCor}}>
                  <h1>{cor.nomeCor}</h1>
                  <p>{cor.hexaCor}</p>
          </div>
      )
  }