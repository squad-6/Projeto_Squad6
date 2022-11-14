import './cadastroparceiros.css'
import { Link } from 'react-router-dom'
import People from '../../components/images/Connecting-teams-cuate.png'

export default function Cadastroescola(){
    return (
        <div className="tela-cadastroparceiros">
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Formulário de Cadastro</title>
          <link href="https://fonts.googleapis.com/css2?family=Anton&family=Ibarra+Real+Nova&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossOrigin="anonymous" />
          <link rel="stylesheet" href="css/styleCadastroParceiros.css" />
          <nav className="navbar navbar-expand-md navbar-dark fixed-top">
            {/*Inicio NavBar*/}
            <div className="container">
              <Link className='link' to={'/'}><a className="navbar-brand" href="index.html">AcessoEscola</a></Link>
              <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className='link' to={'/'}><a className="nav-link" href="index.html">Início<span className="sr-only">(current)</span></a></Link>
                  </li>
                  <li className="nav-item">
                    <Link className='link' to={'/parceiros'}><a className="nav-link" href="parceiros.html">Parceiros</a></Link>
                  </li>
                  <li className="nav-item">
                  <Link className='link' to={'/quem-somos'}><a className="nav-link" href="quemSomos.html">Quem Somos</a></Link>
                  </li>
                  <li className="nav-item">
                  <Link className='linkk' to={'/login'}><a className="nav-link" href="login.html">Entrar</a></Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/*Fim NavBar*/}
          <div className="containerr">
            <div className="form-image">
              <img src={People} alt="imagem fundo" />
            </div>
            <div className="form">
              <form action="#">
                <div className="form-header">
                  <div className="title">
                    <h1>Seja um dos nossos parceiros</h1>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-box">
                    <label htmlFor="firstname">Nome</label>
                    <input id="firstname" type="text" name="firstname" placeholder="Digite o nome" required />
                  </div>
                  <div className="input-box">
                    <label htmlFor="lastname">Estado</label>
                    <input id="firstname" type="text" name="lasstname" placeholder="Digite seu estado" required />
                  </div>
                  <div className="input-box">
                    <label htmlFor="lastname">Cidade </label>
                    <input id="firstname" type="text" name="lasstname" placeholder="Digite sua cidade" required />
                  </div>
                  <div className="input-box">
                    <label htmlFor="email">E-mail </label>
                    <input id="email" type="text" name="email" placeholder="Digite seu email" required />
                  </div>
                  <div className="input-box">
                    <label htmlFor="password">Senha</label>
                    <input id="password" type="password" name="password" placeholder="Digite aqui" required />
                  </div>
                  <div className="input-box">
                    <label htmlFor="email">Ponto de atividade </label>
                    <input id="email" type="text" name="email" placeholder="Digite sua atividade" required />
                  </div>
                  <fieldset>
                    <div className="colaboracao">
                      <label> Tipo de colaboração</label><br /><br />
                      <input type="checkbox" name="colaboracao1" id="colaboracao1" defaultValue="Adoacao" />
                      <label htmlFor="colaboracao1">Doação</label>
                      <input type="checkbox" name="colaboracao2" id="colaboracao2" defaultValue="voluntariado" />
                      <label htmlFor="colaboracao2">Voluntariado</label>
                    </div>
                  </fieldset>
                </div>
                <div className="gender-inputs">
                  <div className="continue-button">
                    <button><a href="#">Registrar</a></button>
                  </div>
                </div></form>
            </div>
            {/* Links Opcionais do Template */}
          </div></div>
      );
}