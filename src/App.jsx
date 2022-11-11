import { useState } from "react"
import "./style.scss"
import { Card } from "./Card"

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente



function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [nomeCor, setNomeCor] = useState('')
    const [hexaCor, setHexaCor] = useState('')
    const [formularioErro, setFormularioErro] = useState(false)
    
    const [listaCores, setListaCores] = useState([
        {
            nomeCor: 'Ciano',
            hexaCor: '#00BFFF',
        },
        {
          nomeCor: 'NavyBlue',
          hexaCor: '#000080',
        },
        {
          nomeCor: 'Magenta',
          hexaCor: '#FF00FF',
        }  
    ])



  function adicionarCor(event){
    event.preventDefault()

    const novaCor = {
      nomeCor: nomeCor,
      hexaCor: hexaCor,
  }

  let eCor = /^#[0-9A-F]{6}$/i.test(hexaCor)

  if (nomeCor === '' || !eCor || nomeCor.length<3) {

      setFormularioErro(true)

  } else {

      setFormularioErro(false)

      setListaCores([...listaCores, novaCor])

      setNomeCor('')
      setHexaCor('')
  }
  }

  return (
    <div className="app">
      <div className="card-cadastro">
        <h1>ADICIONAR NOVA COR</h1>
        <form className="formulario" onSubmit={event => adicionarCor(event)}>
          <div>
            <label htmlFor="nomeCor">Nome</label>
            <input type="text" id="nomeCor" value={nomeCor.trim()} placeholder='Insira o nome da cor (mínimo: 3 letras).' onChange={event => setNomeCor(event.target.value)} />
          </div>
          <div>
            <label htmlFor="hexaCor">Cor</label>
            <input type="text" id="hexaCor" placeholder="Insira uma cor (#000000)" value={hexaCor.trim()} onChange={event => setHexaCor(event.target.value)}/>
          </div>
          <input className="botao" type="submit" value="Adicionar" /> 
        </form>
        {
              formularioErro ? (
              <span>Preencha corretamente os campos</span>
              ) : null
          }
      </div>
     <h1>CORES FAVORITAS</h1>
     <section className='cores'>
      {
        listaCores.map(
          (cor, index) => {
            return (
                <Card key={index}
                cor={cor}
                />
            )
        })
        }
      </section>
    </div>
    
  )
}

export default App