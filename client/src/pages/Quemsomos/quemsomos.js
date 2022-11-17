import './quemsomos.css'
import Logo from '../../components/images/Acesso 10.png'
import { Link } from 'react-router-dom'
import { MemoryRouter } from 'react-router-dom';

export default function Quemsomos() {
  return (
    <MemoryRouter>
      <div className='tela-quemsomos'>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Quem Somos</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Ibarra+Real+Nova&display=swap" rel="stylesheet" />
        {/*link com css */}
        <link rel="stylesheet" type="text/css" href="css/styleQuemSomos.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <nav className="navbar navbar-expand-md navbar-dark fixed-top">
          {/*Inicio NavBar*/}
          <div className="container">
            <Link className='link' to={'/'}><a className="navbar-brand" href="index.html">AcessoEscola</a></Link>
            <img src={Logo} className="logo-9" alt='Gráficos com nome acesso escola' />
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
        <div className="box-fix">
          <div className="container-fluid">
            <h2 className="title">&nbsp;&nbsp;&nbsp;&nbsp; Quem Somos</h2>
            <main>
              {/*-Inicio da mudança*/}
              {/*-fim da mudança*/}
              <article className="content-C">
                <div>
                  <h2>"Nós"</h2>
                </div>
                <div>
                  <p> Somos o Squad 006, grupo de estudantes do bootcamp de Desenvolvimento Full Stack - Recode
                    Pro, organizado e ministrado pela ONG Recode, uma instituição de ensino em tecnologia para
                    pessoas em situação de vulnerabilidade social. Além disso, somos usuários do sistema público
                    de ensino brasileiro, nossa equipe é composta por pessoas diversas, como pais, jovens
                    recém-formados no ensino médio, acadêmicos de instituições federais de ensino superior, e
                    acima de tudo, cidadãos que se importam com o futuro da educação no nosso país.</p>
                </div>
                <div>
                  <p>Recebemos o desafio de abordar uma das problemáticas para o alcance efetivo do ODS 4 -
                    Educação de Qualidade, contribuindo com a sociedade no alcance desse objetivo de forma
                    inovadora, através da tecnologia, o <b>AcessoEscola</b> é a nossa proposta de intervenção
                    para
                    agregar na solução desse problema.</p>
                </div>
              </article>
              <div className="list-membro">
                <div className="membro-julio">
                </div>
              </div>
            </main>
          </div>
          <div className="espaço" />
          <footer id="footer-fim" className="text-center">
            {/*Footer 2*/}
            <p style={{ margin: 0 }}>©Todos os direitos reservados.</p>
          </footer>
          {/*Fim footer 2*/}
        </div>
        &gt;&gt;&gt;&gt;&gt;&gt;&gt; 5b736940e5c71fc1e2950fc8ba5fba5dc1325179
      </div>
    </MemoryRouter>
  );
}