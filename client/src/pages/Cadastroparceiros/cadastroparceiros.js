import './cadastroparceiros.css'
import { Link } from 'react-router-dom'
import People from '../../components/images/Connecting-teams-cuate.png'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

export default function Cadastroescola(){
  const handleClickRegister = (values) => console.log(values);

  const validationRegister = yup.object().shape({
    email: yup.string().email("Não é um email").required("Este campo é obrigatório."),
    password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Este campo é obrigatório."),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas devem ser iguais.")
  })

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
                      <ErrorMessage component="span" name="nome_parceiro" className="form-error"/>
                    </div>
                    <div className="input-box">
                      <label htmlFor="lastname">Estado</label>
                      <Field name="estado" type="text" className="form-field" placeholder="Digite seu estado" required></Field>
                      <ErrorMessage component="span" name="estado" className="form-error"/>
                    </div>
                    <div className="input-box">
                      <label htmlFor="lastname">Cidade </label>
                      <Field name="cidade" type="text" className="form-field" placeholder="Digite sua cidade" required></Field>
                      <ErrorMessage component="span" name="cidade" className="form-error"/>
                    </div>
                    <div className="input-box">
                      <label htmlFor="email">E-mail </label>
                      <Field name="email" type="email" className="form-field" placeholder="Digite seu E-mail" required></Field>
                      <ErrorMessage component="span" name="email" className="form-error"/>
                    </div>
                    <div className="input-box">
                      <label>Senha</label>
                      <Field name="password" type="password" className="form-field" placeholder="Digite uma senha" required></Field>
                      <ErrorMessage component="span" name="password" className="form-error"/>
                    </div>
                    <div className="input-box">
                      <label>Confirme sua senha</label>
                      <Field name="confirmPassword" type="password" className="form-field" placeholder="Confirme a senha" required></Field>
                      <ErrorMessage component="span" name="confirmPassword" className="form-error"/>
                    </div>
                    <div className="input-box">
                      <label htmlFor="email">Ponto de atividade </label>
                      <Field name="atividade" type="text" className="form-field" placeholder="Digite sua atividade" required></Field>
                      <ErrorMessage component="span" name="atividade" className="form-error"/>
                    </div>
                    <fieldset>
                      <div className="colaboracao">
                        <label> Tipo de colaboração</label><br /><br />
                        <Field name="doacao" type="checkbox" className="form-field"></Field>
                        <label htmlFor="colaboracao1">Doação </label>
                        <Field name="voluntario" type="checkbox" className="form-field"></Field>
                        <label htmlFor="colaboracao2">Voluntariado</label>
                      </div>
                    </fieldset>
                    <div className="gender-inputs">
                      <div className="continue-button">
                        <button><a href="#">Registrar</a></button>
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