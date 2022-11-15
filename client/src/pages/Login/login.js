import './login.css'
import { Link } from 'react-router-dom'
import Menina from '../../components/images/raising-hand-animate.png'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import Axios from 'axios'

export default function Login(){
  const handleClickLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
    });
  };

  const validationLogin = yup.object().shape({
    email: yup.string().email("Não é um email").required("Este campo é obrigatório."),
    password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Este campo é obrigatório."),
  })
    return (
        <div className='tela-login'>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Anton&family=Ibarra+Real+Nova&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Serif:opsz,wght@8..144,700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="./css/styleLogin.css" />
          <title>Entrar</title>
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
          <div className="box-fix">
            <div className="main-login">
              <div className="login-esquerda">
                <h1>Faça login.<br />E entre para nosso time!</h1>
                <img src={Menina} className="login-imagem" alt="menina com a mão levantada" />
              </div>
              <div className="login-direita">
                <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
                  <Form className='card-login'>
                    <h1>Login</h1>
                      <div className="textfield">
                        <label htmlFor="usuario">Email</label>
                        <Field name="email" className="form-field" placeholder="E-mail"></Field>
                        <ErrorMessage component="span" name="email" className="form-error"/>
                      </div>

                      <div className="textfield">
                        <label htmlFor="usuario">Senha</label>
                        <Field name="password" type="password" className="form-field" placeholder="Senha"></Field>
                        <ErrorMessage component="span" name="password" className="form-error"/>
                      </div>
                      <div>
                        <p> </p>
                      </div>
                      <button className="btn-login" type="submit">Entrar</button>
                      <h6 style={{ textAlign: 'left' }}><a style={{ color: 'white' }} href="#">Esqueci a Senha.</a></h6>
                      <hr className="linha" />
                      <h6><Link className='link' to={'/cadastro-escola'}><a style={{ color: 'white' }} href="cadastro_escola.html">Cadastre a sua Escola.</a></Link></h6>
                      <h6><Link className='link' to={'/cadastro-parceiros'}><a style={{ color: 'white' }} href="cadastro_parceiros.html">Cadastre-se como Parceiro.</a></Link></h6>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
          {/* Links Opcionais do Template */}
        </div>
      );
}