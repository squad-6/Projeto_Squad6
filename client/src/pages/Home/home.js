import './home.css'
import { Link } from 'react-router-dom'
import Logo from '../../components/images/Acesso 10.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown, faIdCard, faUsers, faBell, faHome, faHandshake } from '@fortawesome/free-solid-svg-icons'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import Axios from 'axios'
import { MemoryRouter } from 'react-router-dom'


export default function Home() {

  const handleClickMensagem = (values) => {
    Axios.post("http://localhost:8080/faleconosco", {
      nome: values.nome,
      email: values.email,
      mensagem: values.mensagem,
    }).then((response) => {
      console.log(response);
    });
  };

  const validationMensagem = yup.object().shape({
    nome: yup.string().required("Este campo é obrigatório."),
    email: yup.string().email("Não é um email").required("Este campo é obrigatório."),
    mensagem: yup.string().required("Este campo é obrigatório."),
  });

  /*const handleClickEmail = (values) => {
    Axios.post("http://localhost:3001/email", {
      email: values.email,
    }).then((response) => {
      console.log(response);
    }); 
  };

  const validationEmail = yup.object().shape({
    email: yup.string().email("Não é um email").required("Este campo é obrigatório.")
  });*/

  return (
    <MemoryRouter>
      <div className='tela-home'>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
        <title>Início</title>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Ibarra+Real+Nova&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight&display=swap" rel="stylesheet" />
        {/* Links Uso Bootstrap, CSS e Font */}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossOrigin="anonymous" />
        <link rel="stylesheet" href="../../components/fontawesome/font-awesome.min.css" />
        <link rel="stylesheet" href="./css/styleHome.css" />
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
          <section className="bg-top">
            {/*Primeira Seção*/}
            <div className="overlay" />
            <div className="container fix-zindex">
              <div className="texto-bg">
                <div className="row">
                  <div className="col-md-6 padding30">
                    <div className="custom-title-top">
                      <div />
                      <h2>Bem vindos ao AcessoEscola</h2>
                    </div>
                    <p>Somos uma plataforma com intuito de facilitar o acesso de entidades
                      interessadas (pessoas físicas, ONG’s e empresas) em realizar doações para escolas da rede
                      pública brasileira, que necessitam de algum apoio em material didático, voluntariado, mão de
                      obra, equipamentos, serviços e afins.</p>
                  </div>
                  <div className="col-md-6">
                    <div className="custom-title-top">
                      <div />
                      <h2>Como funciona</h2>
                    </div>
                    <p>O <b>AcessoEscola</b> reune em um banco de dados, informações das
                      instituições de ensino da rede pública, que se cadastram na plataforma, e disponibiliza para
                      doadores interessados em um painel de indicação para membros do site, a inscrição é gratuita
                      tanto para a escola, quanto para os benfeitores. Os filantropos tem a possibilidade de pesquisar
                      as escolas por categoria de região (bairro, cidade e estado), ou ponto de apoio (material
                      didático, voluntariado, mão de obra, equipamentos, serviços e outros), facilitando a doação.
                      O AcessoEscola não garante que todas as escolas cadastradas receberão doações e não
                      intervém no processo, esta plataforma apenas facilita o acesso entre, interessados em doar e
                      escolas da rede pública que desejam receber ajuda.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Fim Primeira Seção*/}
          <section className="chamada">
            {/*Segunda Seção Chamada*/}
            <div className="container">
              <h2 className="text-center"><FontAwesomeIcon icon={faArrowAltCircleDown} /></h2>
            </div>
          </section>
          {/*Fim Segunda Seção Chamada*/}
          <section className="sobre-cima">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="custom-title">
                    <div />
                    <h2>Como participar</h2>
                  </div>
                  {/*custom-title*/}
                  <p className="texto-sobre">Junte-se a nossa plataforma e descubra as vantagens de
                    participar do <b>AcessoEscola</b>. Transforme vidas sendo um voluntário ou doador e tenha sua escola
                    transformada recebendo doações ou voluntários.
                  </p>
                  {/*Botão com Modal*/}
                  <div className="text-center"><button style={{ background: '#0487D9' }} type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal">Saiba mais!</button></div>
                </div>
                {/*col*/}
              </div>
            </div>
            {/*container*/}
            {/* Modal */}
            <div id="myModal" className="modal fade" role="dialog">
              <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <h3 className="modal-title"><strong>Veja como participar</strong></h3>
                  </div>
                  <div className="modal-body">
                    <h4><strong>Para Escolas</strong></h4>
                    <p>A inscrição é gratuita, basta acessar a opção “Entrar”,
                      localizada no canto superior direito do site e selecionar a opção “Cadastre-se aqui”. Fornecer as
                      informações solicitadas, logar na plataforma e preencher o formulário de Interesse de Apoio,
                      informando o endereço da instituição, telefone e e-mail para contatos, além das categorias que
                      deseja receber doações. <br />
                      Lembre-se, quanto mais descritivo e completo o formulário de Interesse de Apoio estiver, maior
                      as chances de receber uma doação. <br />
                    </p>
                    <h4><strong>Para Doadores</strong></h4>
                    <p>
                      A inscrição também é gratuita, basta acessar a opção “Entrar”, localizada
                      no
                      canto
                      superior direito do site e selecionar a opção “Cadastre-se aqui”. Fornecer as informações
                      solicitadas, logar na plataforma e preencher o formulário de Interesse em Apoiar, informando os
                      Pontos de Apoio (categorias) que deseja ajudar. Lembre-se, em caso de voluntariado é
                      importante especificar quanto tempo estará disponível para voluntariar. <br />
                      Pronto, agora é só navegar no painel de indicação, encontrar a escola mais próxima de você que
                      deseja ajuda e se encaixa com sua proposta de apadrinhamento.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Fechar</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Fim Terceira Seção Sobre*/}
          <section className="diferenciais">
            {/*Quarta Seção*/}
            <div className="container">
              <div className="custom-title">
                <div style={{ top: '10px', left: '12px' }} />
                <h2 style={{ borderBottom: 0 }}>Dicas</h2>
              </div>
              {/*custom-title*/}
              <div className="row">
                <div className="col-md-6 text-center">
                  <h2><FontAwesomeIcon icon={faIdCard} /></h2>
                  <p>A plataforma oferece como recurso a emissão de certificado,
                    presente na sessão de usuário para preenchimento com as informações do voluntário e da
                    instituição de ensino, para ser assinado pela autoridade máxima dentro da escola e entregue no
                    fim do período de apoio, garantindo para o filantropo a certificação das horas de voluntariado. O
                    AcessoEscola recomenda a realização desta prática para garantia de maior interesse e atração
                    de novos voluntários.</p>
                </div>
                {/*col-md-4*/}
                <div className="col-md-6 text-center">
                  <h2><FontAwesomeIcon icon={faUsers} /></h2>
                  <p>Para empresas, ONG’s e outras entidades que realizaram alguma doação de bens, serviços,
                    equipamentos e materiais didáticos, recomendamos que entre em contato com nossa equipe no
                    campo “Fale Conosco” localizado na página inicial, informe o nome da escola que recebeu os
                    donativos e qual foi o apoio prestado pela entidade doadora. Após confirmarmos com a
                    instituição de ensino o ato de benfeitoria, a entidade será exibida na aba “Parceiros” do nosso
                    site com uma mensagem de gratificação pelo apoio.</p>
                </div>
                {/*col-md-4*/}
              </div>
              {/*row*/}
            </div>
            {/*container*/}
          </section>
          {/*Fim Quarta Seção Diferenciais*/}
          <section className="convite">
            {/*Quinta Seção*/}
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center">
                  <h2><FontAwesomeIcon icon={faBell} /> Receba nossas novidades!</h2>
                </div>
                {/*col*/}
                <div className="col-md-6 text-center">
                  <form>
                    <div className="form-group">
                      <input name="email" type="email" placeholder=" Informe o seu email" />
                      <button type="submit" className="btn btn-default">Enviar</button>
                    </div>
                  </form>
                </div>
              </div>
              {/*row*/}
            </div>
            {/*container*/}
          </section>
          {/*Fim Quinta Seção Convite*/}
          <section className="contato">
            {/*Sexta Seção*/}
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="custom-title">
                    <div />
                    <h2>Fale conosco</h2>
                  </div>
                  <Formik initialValues={{}} onSubmit={handleClickMensagem} validationSchema={validationMensagem}>
                    <Form className='contato-form'>
                      <div className="form-group">
                        <label>Nome:</label>
                        <Field name="nome" className="form-control"></Field>
                        <ErrorMessage component="span" name="nome" className="form-error" />
                      </div>
                      <div className="form-group">
                        <label>E-mail:</label>
                        <Field name="email" className="form-control"></Field>
                        <ErrorMessage component="span" name="email" className="form-error" />
                      </div>
                      <div className="form-group">
                        <label>Sua mensagem:</label>
                        <Field name="mensagem" className="form-control" as="textarea"></Field>
                        <ErrorMessage component="span" name="mensagem" className="form-error" />
                      </div>
                      <button style={{ background: '#0487D9', color: 'white' }} type="submit" className="btn btn-default">Enviar</button>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </section>
          {/*Fim Sexta seção Contato*/}
          <footer>
            {/*Footer 1*/}
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="title-footer">Redes sociais</h2>
                  <div className="group-btns">
                    <a href><FaFacebookF /></a>
                    <a href><FaInstagram /></a>
                  </div>
                  {/*group-btns*/}
                </div>
                <div className="col-md-6">
                  <h2 className="title-footer">Links úteis</h2>
                  <ul>
                    <li><FontAwesomeIcon icon={faUsers} /><Link to={'/quem-somos'}><a href="quemSomos.html"> Conheça os idealizadores do projeto</a></Link></li>
                    <li><FontAwesomeIcon icon={faHandshake} /><Link to={'/parceiros'}><a href="parceiros.html"> Nossos parceiros</a></Link></li>
                    <li><FontAwesomeIcon icon={faHome} /><Link to={'/'}><a href="index.html"> Central de suporte</a></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
          {/*Fim Footer 1*/}
          <footer id="footer-fim" className="text-center">
            {/*Footer 2*/}
            <p style={{ margin: 0 }}>©Todos os direitos reservados.</p>
          </footer>
          {/*Fim footer 2*/}
        </div>
        {/*box-fix*/}
        {/* Links Opcionais do Template */}
      </div>
    </MemoryRouter>
  );
}