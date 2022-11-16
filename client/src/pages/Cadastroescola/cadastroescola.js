import './cadastroescola.css'
import { Link } from 'react-router-dom'
import Logo from '../../components/images/Acesso 10.png'
import School from '../../components/images/High-School-cuate.png'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import  Axios from 'axios'

export default function Cadastroescola(){
 const handleClickRegister = (values) => {

    Axios.post("http://localhost:8080/escola", {

      cep_escola: values.cep_escola,
      cidade_escola: values.cidade_escola,
      email_escola: values.email_escola,
      estado_escola: values.estado_escola,
      nome_escola: values.nome_escola,
      numero_escola: values.numero_escola,
      telefone_escola: values.telefone_escola,
      senha_escola: values.senha_escola,
   
    }).then((response) => {

      console.log(response);

    });

   /* Axios.get("http://localhost:8080/escola", {

      cep_escola: values.cep_escola,

      cidade_escola: values.cidade_escola,

      email_escola: values.email_escola,

      estado_escola: values.estado_escola,

      nome_escola: values.nome_escola,

      numero_escola: values.numero_escola,
      
      telefone_escola: values.telefone_escola,

      senha_escola: values.senha_escola,
   

    }).then((response) => {

      console.log(response);

    });

    Axios.put("http://localhost:8080/escola", {

      cep_escola: values.cep_escola,

      cidade_escola: values.cidade_escola,

      email_escola: values.email_escola,

      estado_escola: values.estado_escola,

      nome_escola: values.nome_escola,

      numero_escola: values.numero_escola,
      
      telefone_escola: values.telefone_escola,

      senha_escola: values.senha_escola,
   

    }).then((response) => {

      console.log(response);

    });
  
   
    Axios.delete("http://localhost:8080/escola", {

      cep_escola: values.cep_escola,

      cidade_escola: values.cidade_escola,

      email_escola: values.email_escola,

      estado_escola: values.estado_escola,

      nome_escola: values.nome_escola,

      numero_escola: values.numero_escola,
      
      telefone_escola: values.telefone_escola,

      senha_escola: values.senha_escola,
   

    }).then((response) => {

      console.log(response);

    });*/

  };
  
  const validationRegister = yup.object().shape({

    email_escola: yup.string().email("Não é um email").required("Este campo é obrigatório."),

    senha_escola: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Este campo é obrigatório."),

    confirmPassword: yup.string().oneOf([yup.ref("senha_escola"), null], "As senhas devem ser iguais.")

  });

  function myFunction(){

  }

    return (
        <div className='tela-cadastroescola'>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Formulário de Cadastro</title>
          <link href="https://fonts.googleapis.com/css2?family=Anton&family=Ibarra+Real+Nova&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossOrigin="anonymous" />
          <link rel="stylesheet" href="css/styleCadastroEscola.css" />
          <nav className="navbar navbar-expand-md navbar-dark fixed-top">
            {/*Inicio NavBar*/}
            <div className="container">
              <Link className='link' to={'/'}><a className="navbar-brand" href="index.html">AcessoEscola</a></Link>
              <img src={Logo} className="logo-9"  alt='Gráficos com nome acesso escola'/>
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
              <img src={School} alt="imagem fundo" />
            </div>
            <div className="form">
            <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister}>
              <Form>
                <div className="form-header">
                  <div className="title">
                    <h1>Cadastre sua escola</h1>
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-box">
                    <label htmlFor="firstname">Nome da Escola</label>
                    <Field name="nome_escola" type="text" className="form-field" placeholder="Digite o nome" required></Field>
                    <ErrorMessage component="span" name="nome_escola" className="form-error"/>
                  </div>
                  <div className="input-box">

                    <label>Numero escola</label>

                    <Field name="numero_escola" type="text" className="form-field" placeholder="Nº" required maxLength={8}></Field>

                    <ErrorMessage component="span" name="numero_escola" className="form-error"/>

                  </div>
                  <div className="input-box">
                    <label htmlFor="lastname">Estado</label>
                    <Field name="estado_escola" type="text" className="form-field" placeholder="Digite seu Estado" required></Field>
                    <ErrorMessage component="span" name="estado" className="form-error"/>
                  </div>
                  <div className="input-box">
                    <label htmlFor="lastname">Cidade </label>
                    <Field name="cidade_escola" type="text" className="form-field" placeholder="Digite sua cidade" required></Field>
                    <ErrorMessage component="span" name="cidade" className="form-error"/>
                  </div>
                  <div className="input-box">
                    <label>E-mail institucional </label>
                    <Field name="email_escola" type="email" className="form-field" placeholder="Digite seu E-mail" required></Field>
                    <ErrorMessage component="span" name="email" className="form-error"/>
                  </div>
                  <div className="input-box">
                    <label>Senha</label>
                    <Field name="senha_escola" type="password" className="form-field" placeholder="Digite uma senha" required></Field>
                    <ErrorMessage component="span" name="password" className="form-error"/>
                  </div>
                  <div className="input-box">
                    <label>Confirme sua senha</label>
                    <Field name="confirmPassword" type="password" className="form-field" placeholder="Confirme sua senha" required></Field>
                    <ErrorMessage component="span" name="confirmPassword" className="form-error"/>
                  </div>
                  <div className="input-box">
                    <label htmlFor="password">Telefone</label>
                    <Field name="telefone_escola" type="text" className="form-field" placeholder="(00) 00000-0000" maxLength={11} required></Field>
                    <ErrorMessage component="span" name="telefone" className="form-error"/>
                  </div>
                  <div className="input-box">
                    <label htmlFor="Confirmpassword">CEP</label>
                    <Field name="cep_escola" type="text" className="form-field" placeholder="00000-000" required maxLength={8}></Field>
                    <ErrorMessage component="span" name="cep_escola" className="form-error"/>
                  </div>
                  
                  <div className="gender-inputs">
                  <div className="continue-button">
                    <button className='button' type="submit" onclick="myFunction()"><a>Registrar</a></button>
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