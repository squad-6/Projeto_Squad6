import './dashboard.css'
import { Link } from 'react-router-dom'

export default function Dashboard(){
    return (
        <div>
          <meta charSet="UTF-8" />
          <title>Dashboard</title>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
          <link href="css/styleDashboard.css" rel="stylesheet" />
          <div className="sidebar">
            <div className="topo">
              <h3>Acesso.Escola</h3>
            </div>
            {/*topo*/}
            <div className="menu">
              <ul>
                <li><i className="fas fa-hand-holding-usd" /><a href> Doar</a></li>
                <li><i className="fas fa-clipboard-list" /><a href> Questionário</a></li>
                <li><i className="fas fa-angle-double-right" /><a href> Home</a></li>
                <li><i className="fas fa-angle-double-right" /><a href> Home</a></li>
              </ul>
            </div>
            {/*menu*/}
            <div className="menu">
              <ul>
                <li><i className="fas fa-home" /><a href="index.html"> Home</a></li>
                <li><i className="fas fa-handshake" /><a href="parceiros.html"> Parceiros</a></li>
                <li><i className="fas fa-users" /><a href="quemSomos.html"> Quem somos</a></li>
              </ul>
            </div>
            {/*menu*/}
          </div>
          {/*sidebar*/}
          {/*FIM DA SIDEBAR*/}
          <div className="main-content">
            <header>
              <div className="nome-usuario">
                <h2><i className="fas fa-align-justify" /></h2>
              </div>
              <div className="pesquisa-campo">
                <div className="icone-pesquisa"><i className="fas fa-search" /></div>
                <form><input type="text" /></form>
              </div>
              {/*pesquisa-campo*/}
              <div className="icone-alerta">
                <p>2</p>
                <i className="fas fa-bell" />
              </div>
              {/*icone-alerta*/}
              <div className="clear" />
            </header>
            <div className="content1">
              <div className="panel">
                <h2>Bem-vindo, Rian!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed purus libero. Nam iaculis felis sed
                  dignissim tincidunt. Sed eu odio enim. Morbi leo orci, ultricies eget pretium imperdiet, bibendum
                  sit amet dui. Aliquam sit amet consequat ligula. Nam accumsan quis nisl vel maximus. Quisque
                  malesuada mauris sit amet elit feugiat placerat. Vestibulum consequat vel diam a aliquam.
                  Pellentesque iaculis congue dui vitae hendrerit. Mauris consequat facilisis nisi non vulputate.
                  Integer et suscipit nisl. Sed nec ligula erat.</p>
              </div>
              {/*panel*/}
              <div style={{width: '49%', marginRight: '1%'}} className="panel">
                <canvas id="myChart" width={400} height={400} />
              </div>
              {/*panel*/}
              <div style={{width: '49%', marginLeft: '1%'}} className="panel">
                <canvas id="pyChart" width={400} height={400} />
              </div>
              {/*panel*/}
              <div className="clear" />
              <div className="panel">
                <canvas id="byChart" />
              </div>
              {/*panel*/}
            </div>
            {/*content1*/}
            <div className="ultimas-atividades">
              <div className="atividades-topo">
                <h2>Últimas atividades</h2>
              </div>
              {/*atividades-topo-*/}
              <br />
              <div className="atividade-registro">
                <div className="circle-atividade" />
                <h2>Há 2 minutos</h2>
                <p>Uma nova <b>página</b> foi inserida</p>
              </div>
              <div className="atividade-registro">
                <div className="circle-atividade" />
                <h2>Há 2 minutos</h2>
                <p>Uma nova <b>página</b> foi inserida</p>
              </div>
              <div className="atividade-registro">
                <div className="circle-atividade" />
                <h2>Há 2 minutos</h2>
                <p>Uma nova <b>página</b> foi inserida</p>
              </div>
              <div className="atividade-registro">
                <div className="circle-atividade" />
                <h2>Há 2 minutos</h2>
                <p>Uma nova <b>página</b> foi inserida</p>
              </div>
              <div className="atividade-registro">
                <div className="circle-atividade" />
                <h2>Há 2 minutos</h2>
                <p>Uma nova <b>página</b> foi inserida</p>
              </div>
            </div>
          </div>
          {/*main-content*/}
          <div className="clear" />
        </div>
      );
}