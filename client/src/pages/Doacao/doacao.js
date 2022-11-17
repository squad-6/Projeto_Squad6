import './doacao.css'
import React, { useState, useEffect } from 'react';
import Logo from '../../components/images/Acesso 10.png'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';

export default function Doacao() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localholst:8080/escola").then((response) => {
      setPosts(response.data);
    }).catch(() => {
      console.log("Deu errado.");
    })
  }, [])


  return (
    <MemoryRouter>
      <div className='tela-doacao'>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* fonte*/}
        <link rel="stylesheet" href="./fontawesome/font-awesome.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Ibarra+Real+Nova&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight&display=swap" rel="stylesheet" />
        {/* final fonte*/}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossOrigin="anonymous" />
        <link rel="stylesheet" href="./css/styleDoacao.css" />
        <title>Doação</title>
        <header>
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
        </header>
        <main className='main-doacao'>
          <h1 className='titulo-doacao'>Doação ☜</h1>
          {/*Fim NavBar
            <form className="row g-3 needs-validation" noValidate id="box-doacao">
              <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">Cidade</label>
                <input type="text" className="form-control" id="input-1" required />
              </div>
              <div className="col-md-3" id="select-1">
                <label htmlFor="validationCustom04" className="form-label">Estado</label>
                <select className="form-select" id="validationCustom04" required>
                  <option selected disabled value>Escolha...</option>
                  <option value>Selecione</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espirito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                  <option>...</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>
              <div className="col-md-7">
                <select className="form-select" aria-label="Default select example">
                  <option selected>Tipo de doação</option>
                  <option value={1}>material didático</option>
                  <option value={2}>material básico</option>
                  <option value={3}>material de informática</option>
                  <option value={4}>material estrutural</option>
                  <option value={5}>material diversos</option>
                  <option value={6}>capital humano</option>
                </select>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">Filtrar</button>
              </div>
            </form>
            */}
          <section className='section-doacao'>
            <div>
              <h3 className="tituloBusca">Resultado da Busca</h3>
            </div>
            <div className='toldo'>
              <div className="table">
                <table className=" table table table-striped box-shadow " id="tabela-doacao">
                  <thead>
                    <tr>
                      <th scope="col ">Identificador</th>
                      <th scope="col">Instituição</th>
                      <th scope="col">Email</th>
                      <th scope="col">Telefone</th>
                      <th scope="col">Cidade</th>
                      <th scope="col">Estado</th>
                      <th scope="col"> </th>
                    </tr>
                  </thead>
                  {posts.map((post, key) => {
                    return (
                      <tbody key={key}>
                        <tr>
                          <th scope="row">{post.id_escola}</th>
                          <td>{post.nome_escola}</td>
                          <td>{post.email_escola}</td>
                          <td>{post.telefone_escola}</td>
                          <td>{post.cidade_escola}</td>
                          <td>{post.estado_escola}</td>
                          <td><button type="button" className="btn btn-primary">Selecionar</button> </td>
                        </tr>
                        <div className='box-resultado'>
                          <h2>{post.nome_escola}</h2>
                        </div>
                      </tbody>
                    )

                  })}

                </table>
              </div>
            </div>
          </section>
        </main>
        <footer />
      </div>
    </MemoryRouter>
  );
}