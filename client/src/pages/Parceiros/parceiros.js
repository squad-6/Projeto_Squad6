import './parceiros.css'
import { Link } from 'react-router-dom'
import Livros2 from '../../components/images/livros2.jpg'
import Hightech from '../../components/images/hightech.jpg'
import Papel from '../../components/images/papel.jpg'
import Psico from '../../components/images/psico.jpg'


export default function Parceiros(){
    return (
        <div className="tela-parceiros">
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Parceiros</title>
          <link href="https://fonts.googleapis.com/css2?family=Anton&family=Ibarra+Real+Nova&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Inter+Tight&display=swap" rel="stylesheet" />
          {/* Links Uso Bootstrap, CSS e Font */}
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossOrigin="anonymous" />
          <link rel="stylesheet" href="./fontawesome/font-awesome.min.css" />
          <link rel="stylesheet" href="./css/styleParceiros.css" />
          <title>Parceiros</title>
          <header className="header">
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
          </header>
          <div className="titulo">
            <div className="custom-titlee">
              <div />
              <h2>Parceiros</h2>
            </div>
            <div className="paragrafo">
              <h5 className="lh-base" id="paragrafo1"> O trabalho da Acesso escola não
                seria possível sem o apoio das empresas parceiras. Unidos estão impactando e colaborando com milhares de
                alunos da rede publica de ensino. Conheça nossos heróis:
              </h5>
            </div>
          </div>
          <div className="conteudo">
            <div className="flex">
              <div className="card" style={{width: '10rem'}}>
                <img src={Livros2} className="card-img-top" alt="parceiros unindo pecas" />
                <div className="card-body">
                  <h5 className="card-title">Rica Leitura</h5>
                  <p className="card-text">A Rica Leitura colaborou com livros de literatura brasileira.</p>
                  <a href="#" className="btn btn-primary"> Rica Leitura</a>
                </div>
              </div>
              <div className="card" style={{width: '10rem'}}>
                <img src={Hightech} className="card-img-top" alt="parceiros unindo pecas" />
                <div className="card-body">
                  <h5 className="card-title">Hightech</h5>
                  <p className="card-text">A Hightech colaborarou com materiais tecnologicos
                    fornecendo equipamentos.</p>
                  <a href="#" className="btn        btn-primary">Hightech</a>
                </div>
              </div>
              <div className="card" style={{width: '10rem'}}>
                <img src={Papel} className="card-img-top" alt="parceiros unindo pecas" />
                <div className="card-body">
                  <h5 className="card-title">Cel-lose</h5>
                  <p className="card-text"> A Cel-lose colaborou realizando a reposição de materiais para reabastecer
                    materiais basicos</p>
                  <a href="#" className="btn btn-primary">Cel-lose</a>
                </div>
              </div>
              <div className="card" style={{width: '10rem'}}>
                <img src={Psico} className="card-img-top" alt="parceiros unindo pecas" />
                <div className="card-body">
                  <h5 className="card-title">Psico</h5>
                  <p className="card-text">A Psico ajudou os alunos a adquirir intelicgencia emocioanal e perspectiva
                    de vida.</p>
                  <a href="#" className="btn btn-primary">Psico</a>
                </div>
              </div>
              <div className="card" style={{width: '10rem'}}>
                <img src={Papel} className="card-img-top" alt="parceiros unindo pecas" />
                <div className="card-body">
                  <h5 className="card-title">Cel-lose</h5>
                  <p className="card-text"> A Cel-lose colaborou realizando a reposição de materiais para reabastecer
                    materiais basicos</p>
                  <a href="#" className="btn btn-primary">Cel-lose</a>
                </div>
              </div>
              <div className="card" style={{width: '10rem'}}>
                <img src={Papel} className="card-img-top" alt="parceiros unindo pecas" />
                <div className="card-body">
                  <h5 className="card-title">Cel-lose</h5>
                  <p className="card-text"> A Cel-lose colaborou realizando a reposição de materiais para reabastecer
                    materiais basicos</p>
                  <a href="#" className="btn btn-primary">Cel-lose</a>
                </div>
              </div>
              <div className="card" style={{width: '10rem'}}>
                <img src={Psico} className="card-img-top" alt="parceiros unindo pecas" />
                <div className="card-body">
                  <h5 className="card-title">Psico</h5>
                  <p className="card-text">A Psico ajudou os alunos a adquirir intelicgencia emocioanal e perspectiva
                    de vida.</p>
                  <a href="#" className="btn btn-primary">Psico</a>
                </div>
              </div>
              <div className="card" style={{width: '10rem'}}>
                <img src={Psico} className="card-img-top" alt="parceiros unindo pecas" />
                <div className="card-body">
                  <h5 className="card-title">Psico</h5>
                  <p className="card-text">A Psico ajudou os alunos a adquirir intelicgencia emocioanal e perspectiva
                    de vida.</p>
                  <a href="#" className="btn btn-primary">Psico</a>
                </div>
              </div>
            </div>
          </div>
          <section className="chamadaa">
            {/*Segunda Seção Chamada*/}
            <div className="container">
              <div className="citacao">
                <p className="mb-0">“A educação é a arma mais poderosa que você pode usar para mudar o mundo.”</p>
                <p>Nelson Mandela</p>
              </div>
            </div>
          </section>
          <footer id="footer-fim" className="text-center">
            {/*Footer 2*/}
            <p style={{margin: 0}}>©Todos os direitos reservados.</p>
          </footer>
          {/*Fim footer 2*/}
        </div>
      );
}