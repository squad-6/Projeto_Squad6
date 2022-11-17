import './cadastroparceiros.css'
import { Link } from 'react-router-dom'
import Logo from '../../components/images/Acesso 10.png'
import People from '../../components/images/Connecting-teams-cuate.png'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import Axios from 'axios'
import { MemoryRouter } from 'react-router-dom'

export default function Cadastroescola() {

  const handleClickRegister = (values) => {
    Axios.post("http://localhost:8080/parceiro", {

      cidade_parceiro: values.cidade_parceiro,
      email_parceiro: values.email_parceiro,
      estado_parceiro: values.estado_parceiro,
      item_parceiro: values.item_parceiro,
      nome_parceiro: values.nome_parceiro,
      ramo_atividade_parceiro: values.ramo_atividade_parceiro,
      senha_parceiro: values.senha_parceiro,

    }).then((response) => {
      console.log(response);
    });
  };

  const validationRegister = yup.object().shape({
    email_parceiro: yup.string().email("Não é um email").required("Este campo é obrigatório."),
    senha_parceiro: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Este campo é obrigatório."),
    confirmPassword: yup.string().oneOf([yup.ref("senha_parceiro"), null], "As senhas devem ser iguais.")
  })

  return (
    <div className="tela-cadastroparceiros">
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Formulário de Cadastro</title>
      <MemoryRouter>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Ibarra+Real+Nova&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossOrigin="anonymous" />
        <link rel="stylesheet" href="css/styleCadastroParceiros.css" />
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
      </MemoryRouter>
      {/*Fim NavBar*/}
      <div className="containerr">
        <div className="form-image">
          <img src={People} alt="imagem fundo" />
        </div>
        <div className="form">
          <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister}>
            <Form>
              <div className="form-header">
                <div className="title">
                  <h1>Seja um dos nossos parceiros</h1>
                </div>
              </div>
              <div className="input-group">
                <div className="input-box">
                  <label htmlFor="firstname">Nome</label>
                  <Field name="nome_parceiro" type="text" className="form-field" placeholder="Digite o nome" required></Field>
                  <ErrorMessage component="span" name="nome_parceiro" className="form-error" />
                </div>
                <div className="input-box">
                  <label htmlFor="lastname">Estado</label>
                  <Field name="estado_parceiro" type="text" className="form-field" placeholder="Digite seu estado" required></Field>
                  <ErrorMessage component="span" name="estado_parceiro" className="form-error" />
                </div>
                <div className="input-box">
                  <label htmlFor="lastname">Cidade </label>
                  <Field name="cidade_parceiro" type="text" className="form-field" placeholder="Digite sua cidade" required></Field>
                  <ErrorMessage component="span" name="cidade_parceiro" className="form-error" />
                </div>
                <div className="input-box">
                  <label>E-mail </label>
                  <Field name="email_parceiro" type="email" className="form-field" placeholder="Digite seu E-mail" required></Field>
                  <ErrorMessage component="span" name="email_parceiro" className="form-error" />
                </div>
                <div className="input-box">
                  <label>Senha</label>
                  <Field name="senha_parceiro" type="password" className="form-field" placeholder="Digite uma senha" required></Field>
                  <ErrorMessage component="span" name="senha_parceiro" className="form-error" />
                </div>
                <div className="input-box">
                  <label>Confirme sua senha</label>
                  <Field name="confirmPassword" type="password" className="form-field" placeholder="Confirme a senha" required></Field>
                  <ErrorMessage component="span" name="confirmPassword" className="form-error" />
                </div>
                <div className="input-box">
                  <label>Ponto de atividade </label>
                  <Field name="ramo_atividade_parceiro" type="text" className="form-field" placeholder="Digite sua atividade" required></Field>
                  <ErrorMessage component="span" name="ramo_atividade_parceiro" className="form-error" />
                </div>
                <fieldset>
                  <div className="colaboracao">
                    <label> Tipo de colaboração</label><br /><br />
                    <Field name="item_parceiro" type="checkbox" className="form-field"></Field>
                    <label name="item_parceiro">Doação </label>
                    <Field name="item_parceiro" type="checkbox" className="form-field"></Field>
                    <label name="item_parceiro">Voluntariado</label>
                  </div>
                </fieldset>
                <div className="gender-inputs">
                  <div className="continue-button">
                    <button className='button' type="submit"><a href="#">Registrar</a></button>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
        {/* Links Opcionais do Template */}
      </div>
    </div>
  );
}