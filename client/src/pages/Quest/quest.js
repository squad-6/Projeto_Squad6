import './quest.css'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import Axios from 'axios'
import { useNavigate} from 'react-router-dom'

export default function Quest(){
  const navigate = useNavigate();

  const handleClickQuest = (values) => {
    Axios.post("http://localhost:8080/questionario", {
      pergunta1: values.pergunta1,
      pergunta2: values.pergunta2,
      pergunta3: values.pergunta3,
      pergunta4: values.pergunta4
    }).then((response) => {
      console.log(response);
      navigate("/", { replace: true} );
    }); 
  };

  const validationQuest = yup.object().shape({
    nome_escola: yup.string().required("Este campo é obrigatório."),
    email_escola: yup.string().email("Não é um email").required("Este campo é obrigatório."),
  });


    return (
        <div className='tela-questionario'>
          <meta charSet="UTF-8" />
          <title>Questionário</title>
          <link rel="stylesheet" href="./questonario.css" />
          <div className="container-principal">
            <header className="header-principal">
              <h1 id="title" className="text-center-1"> Ficha de Sugestões para Doação à Instituição de Ensino</h1>
              <p id="descriptionn" className="paragrafo">
              </p>
            </header>
            <Formik initialValues={{}} onSubmit={handleClickQuest} validationSchema={validationQuest}>
              <Form className="form-principal">
              <div className="form-card">
                <label className='text-label'>Nome da Escola</label>
                <Field name="nome_escola" type="text" className="form-control" placeholder=" Nome da instituição" required></Field>
                <ErrorMessage component="span" name="nome_escola" className="form-error"/>
              </div>
              <div className="form-group">
                <label className='text-label'>E-mail</label>
                <Field name="email_escola" type="email" className="form-control" placeholder=" E-mail da instituição" required></Field>
                <ErrorMessage component="span" name="email_escola" className="form-error"/>
              </div>
              <div className="form-group">
                <p className="paragrafo">Como conheceu o AcessoEscola?</p>
                <label className='text-label'><input name="user-recommend" defaultValue="definitely" type="radio" className="input-radio" default />Recode</label>
                <label className='text-label'><input name="user-recommend" defaultValue="maybe" type="radio" className="input-radio" />Notícias (TV, rádio,
                  jornal, redes
                  sociais etc.)</label>
                <label className='text-label'><input name="user-recommend" defaultValue="not-sure" type="radio" className="input-radio" />Amigos, parentes ou
                  conhecidos</label>
                <label className='text-label'><input name="user-recommend" defaultValue="not-sure" type="radio" className="input-radio" />Divulgação de
                  ONG's</label>
              </div>
              <div className="text-guide">
                <span><strong>Orientação de preenchimento:</strong> abaixo apresentamos um formulário amplo composto por 4 categorias para
                  avaliar
                  e compreender as necessidades da escola, expondo para o doador de forma objetiva e
                  detalhada o que pode ser ofertado, por isso orientamos preencher da forma mais completa possível, deixando em
                  branco apenas as categorias que a escola não necessita de apoio em donativos.</span>
              </div>
              <div className="form-group">
                <h2>Instalação escolar e manutenção</h2>
                <p className="paragrafo">
                  A instituição apresenta necessidades em receber doação de materiais direcionados a manutenção e/ou
                  aprimoramento da estrutura escolar?
                  <span className="clue">(Selecione uma ou mais opções)</span>
                </p>
                <span>
                  Exemplos: materiais de limpeza, materiais de construção, ferramentas, iluminação ou outros que se adequam em
                  semelhança de uso nos fins apresentados.
                </span>
                <div className="options-input">
                  <label className='text-label'><input name="prefer" defaultValue="front-end-projects" type="checkbox" className="input-checkbox" />Álcool</label>
                  <label className='text-label'><input name="prefer" defaultValue="back-end-projects" type="checkbox" className="input-checkbox" />Detergente</label>
                  <label className='text-label'><input name="prefer" defaultValue="data-visualization" type="checkbox" className="input-checkbox" />Perfex</label>
                  <label className='text-label'><input name="prefer" defaultValue="challenges" type="checkbox" className="input-checkbox" />Sabão</label>
                  <label className='text-label'><input name="prefer" defaultValue="open-source-community" type="checkbox" className="input-checkbox" />Desinfetante</label>
                  <label className='text-label'><input name="prefer" defaultValue="gitter-help-rooms" type="checkbox" className="input-checkbox" />Limpa-vidros</label>
                  <label className='text-label'><input name="prefer" defaultValue="videos" type="checkbox" className="input-checkbox" />Rodo</label>
                  <label className='text-label'><input name="prefer" defaultValue="city-meetups" type="checkbox" className="input-checkbox" />Vassoura</label>
                  <label className='text-label'><input name="prefer" defaultValue="wiki" type="checkbox" className="input-checkbox" />Cimento</label>
                  <label className='text-label'><input name="prefer" defaultValue="forum" type="checkbox" className="input-checkbox" />Areia</label>
                  <label className='text-label'><input name="prefer" defaultValue="front-end-projects" type="checkbox" className="input-checkbox" />Tijolo</label>
                  <label className='text-label'><input name="prefer" defaultValue="back-end-projects" type="checkbox" className="input-checkbox" />Brita</label>
                  <label className='text-label'><input name="prefer" defaultValue="data-visualization" type="checkbox" className="input-checkbox" />Madeira</label>
                  <label className='text-label'><input name="prefer" defaultValue="challenges" type="checkbox" className="input-checkbox" />Concreto</label>
                  <label className='text-label'><input name="prefer" defaultValue="open-source-community" type="checkbox" className="input-checkbox" />Cal</label>
                  <label className='text-label'><input name="prefer" defaultValue="gitter-help-rooms" type="checkbox" className="input-checkbox" />Aço</label>
                  <label className='text-label'><input name="prefer" defaultValue="videos" type="checkbox" className="input-checkbox" />Argamassa</label>
                  <label className='text-label'><input name="prefer" defaultValue="city-meetups" type="checkbox" className="input-checkbox" />Tinta</label>
                  <label className='text-label'><input name="prefer" defaultValue="forum" type="checkbox" className="input-checkbox" />Telhas</label>
                  <label className='text-label'><input name="prefer" defaultValue="front-end-projects" type="checkbox" className="input-checkbox" />Pisos</label>
                  <label className='text-label'><input name="prefer" defaultValue="back-end-projects" type="checkbox" className="input-checkbox" />Revestimentos</label>
                  <label className='text-label'><input name="prefer" defaultValue="data-visualization" type="checkbox" className="input-checkbox" />Torneiras</label>
                  <label className='text-label'><input name="prefer" defaultValue="challenges" type="checkbox" className="input-checkbox" />Tubulações</label>
                  <label className='text-label'><input name="prefer" defaultValue="open-source-community" type="checkbox" className="input-checkbox" />Ralos</label>
                  <label className='text-label'><input name="prefer" defaultValue="gitter-help-rooms" type="checkbox" className="input-checkbox" />Grelhas</label>
                  <label className='text-label'><input name="prefer" defaultValue="videos" type="checkbox" className="input-checkbox" />Filtros</label>
                  <label className='text-label'><input name="prefer" defaultValue="city-meetups" type="checkbox" className="input-checkbox" />Fios</label>
                  <label className='text-label'><input name="prefer" defaultValue="wiki" type="checkbox" className="input-checkbox" />Cabos</label>
                  <label className='text-label'><input name="prefer" defaultValue="forum" type="checkbox" className="input-checkbox" />Tomadas</label>
                  <label className='text-label'><input name="prefer" defaultValue="front-end-projects" type="checkbox" className="input-checkbox" />Interruptores</label>
                  <label className='text-label'><input name="prefer" defaultValue="back-end-projects" type="checkbox" className="input-checkbox" />Disjuntores</label>
                  <label className='text-label'><input name="prefer" defaultValue="data-visualization" type="checkbox" className="input-checkbox" />Lâmpadas</label>
                  <label className='text-label'><input name="prefer" defaultValue="challenges" type="checkbox" className="input-checkbox" />Extensões</label>
                  <label className='text-label'><input name="prefer" defaultValue="open-source-community" type="checkbox" className="input-checkbox" />Alicate</label>
                  <label className='text-label'><input name="prefer" defaultValue="gitter-help-rooms" type="checkbox" className="input-checkbox" />Andaimes</label>
                  <label className='text-label'><input name="prefer" defaultValue="videos" type="checkbox" className="input-checkbox" />Furadeira</label>
                  <label className='text-label'><input name="prefer" defaultValue="city-meetups" type="checkbox" className="input-checkbox" />Lixadeira</label>
                  <label className='text-label'><input name="prefer" defaultValue="forum" type="checkbox" className="input-checkbox" />Martelo</label>
                  <label className='text-label'><input name="prefer" defaultValue="city-meetups" type="checkbox" className="input-checkbox" />Parafusadeira</label>
                  <label className='text-label'><input name="prefer" defaultValue="wiki" type="checkbox" className="input-checkbox" />Trena</label>
                  <label className='text-label'><input name="prefer" defaultValue="forum" type="checkbox" className="input-checkbox" />Pá</label>
                  <label className='text-label'><input name="prefer" defaultValue="additional-courses" type="checkbox" className="input-checkbox" />Balde</label>
                  <label className='text-label'><input name="prefer" defaultValue="city-meetups" type="checkbox" className="input-checkbox" />Peneira</label>
                  <label className='text-label'><input name="prefer" defaultValue="wiki" type="checkbox" className="input-checkbox" />Carrinho</label>
                  <label className='text-label'><input name="prefer" defaultValue="forum" type="checkbox" className="input-checkbox" />Mangueira</label>
                </div>
              </div>
              <div className="form-group">
                <p className="paragrafo">Outros:</p>
                <Field name="pergunta1" className="input-textarea" as="textarea" placeholder=" Informe itens que não estão contemplados na lista acima, porém são necessários."></Field>
                <ErrorMessage component="span" name="pergunta1" className="form-error"/>
              </div>
              <div className="form-group">
                <h2>Material didático</h2>
                <p className="paragrafo">
                  A instituição apresenta necessidades em receber doação de materiais didáticos para auxiliar no processo de
                  aprendizagem dos estudantes?
                  <span className="clue">(Selecione uma ou mais opções)</span>
                </p>
                <span>
                  Exemplos: recursos visuais como livros (infanto-juvenil, literatura de ficção, livro científico,
                  enciclopédia, não ficção, história, ciências sociais, tecnologia e outros gêneros), jornais, revistas, mapas,
                  quadros, cartazes, exposições etc; recursos auditivos como aparelhos de som, CD's, discos, audiolivros e
                  outros; recursos audiovisuais como filmes, televisores, projetor, DVD's, acesso a internet, tablet's,
                  computadores e similares.
                </span>
                <div className="options-input">
                  <label className='text-label'><input name="prefer" defaultValue="front-end-projects" type="checkbox" className="input-checkbox" />Livros</label>
                  <label className='text-label'><input name="prefer" defaultValue="back-end-projects" type="checkbox" className="input-checkbox" />Jornais</label>
                  <label className='text-label'><input name="prefer" defaultValue="data-visualization" type="checkbox" className="input-checkbox" />Revistas</label>
                  <label className='text-label'><input name="prefer" defaultValue="challenges" type="checkbox" className="input-checkbox" />Mapas</label>
                  <label className='text-label'><input name="prefer" defaultValue="open-source-community" type="checkbox" className="input-checkbox" />Globo</label>
                  <label className='text-label'><input name="prefer" defaultValue="gitter-help-rooms" type="checkbox" className="input-checkbox" />Quadros</label>
                  <label className='text-label'><input name="prefer" defaultValue="videos" type="checkbox" className="input-checkbox" />Cartazes</label>
                  <label className='text-label'><input name="prefer" defaultValue="city-meetups" type="checkbox" className="input-checkbox" />Exposições</label>
                  <label className='text-label'><input name="prefer" defaultValue="wiki" type="checkbox" className="input-checkbox" />Excursões</label>
                  <label className='text-label'><input name="prefer" defaultValue="forum" type="checkbox" className="input-checkbox" />Aparelho de som</label>
                  <label className='text-label'><input name="prefer" defaultValue="front-end-projects" type="checkbox" className="input-checkbox" />DVD</label>
                  <label className='text-label'><input name="prefer" defaultValue="back-end-projects" type="checkbox" className="input-checkbox" />CD's</label>
                  <label className='text-label'><input name="prefer" defaultValue="data-visualization" type="checkbox" className="input-checkbox" />Audiolivros</label>
                  <label className='text-label'><input name="prefer" defaultValue="challenges" type="checkbox" className="input-checkbox" />Filmes</label>
                  <label className='text-label'><input name="prefer" defaultValue="open-source-community" type="checkbox" className="input-checkbox" />Televisores</label>
                  <label className='text-label'><input name="prefer" defaultValue="gitter-help-rooms" type="checkbox" className="input-checkbox" />Projetores</label>
                  <label className='text-label'><input name="prefer" defaultValue="videos" type="checkbox" className="input-checkbox" />Auto-falantes</label>
                  <label className='text-label'><input name="prefer" defaultValue="city-meetups" type="checkbox" className="input-checkbox" />Internet</label>
                  <label className='text-label'><input name="prefer" defaultValue="forum" type="checkbox" className="input-checkbox" />Computadores</label>
                  <label className='text-label'><input name="prefer" defaultValue="front-end-projects" type="checkbox" className="input-checkbox" />Tablet's</label>
                </div>
              </div>
              <div className="form-group">
                <p className="paragrafo">Outros:</p>
                <Field name="pergunta2" className="input-textarea" as="textarea" placeholder=" Informe itens que não estão contemplados na lista acima, porém são necessários."></Field>
                <ErrorMessage component="span" name="pergunta2" className="form-error"/>
              </div>
              <div className="form-group">
                <h2>Recursos de apoio operacional</h2>
                <p className="paragrafo">
                  A instituição apresenta necessidades em receber doações de materiais para apoio operacional no funcionamento
                  da unidade?
                  <span className="clue">(Selecione uma ou mais opções)</span>
                </p>
                <span>
                  Exemplos: mobiliário (mesas, cadeiras, lousas de pincel com pinceis etc), materiais de escritório (cadernos,
                  folha A4, tinta de impressora, lápis, canetas e similares) ou outros que se adequam em semelhança de uso nos
                  fins apresentados.
                </span>
                <div className="options-input">
                  <label className='text-label'><input name="prefer" defaultValue="front-end-projects" type="checkbox" className="input-checkbox" />Mesa de
                    trabalho</label>
                  <label className='text-label'><input name="prefer" defaultValue="back-end-projects" type="checkbox" className="input-checkbox" />Mesa de
                    reunião</label>
                  <label className='text-label'><input name="prefer" defaultValue="data-visualization" type="checkbox" className="input-checkbox" />Cadeira
                    giratória</label>
                  <label className='text-label'><input name="prefer" defaultValue="challenges" type="checkbox" className="input-checkbox" />Cadeira fixa</label>
                  <label className='text-label'><input name="prefer" defaultValue="open-source-community" type="checkbox" className="input-checkbox" />Arquivo em
                    aço</label>
                  <label className='text-label'><input name="prefer" defaultValue="gitter-help-rooms" type="checkbox" className="input-checkbox" />Armário em
                    aço</label>
                  <label className='text-label'><input name="prefer" defaultValue="videos" type="checkbox" className="input-checkbox" />Quadro de avisos</label>
                  <label className='text-label'><input name="prefer" defaultValue="forum" type="checkbox" className="input-checkbox" />Armário baixo</label>
                  <label className='text-label'><input name="prefer" defaultValue="front-end-projects" type="checkbox" className="input-checkbox" />Estante
                    baixa</label>
                  <label className='text-label'><input name="prefer" defaultValue="back-end-projects" type="checkbox" className="input-checkbox" />Tatame em
                    EVA</label>
                  <label className='text-label'><input name="prefer" defaultValue="data-visualization" type="checkbox" className="input-checkbox" />Quadro
                    branco</label>
                  <label className='text-label'><input name="prefer" defaultValue="open-source-community" type="checkbox" className="input-checkbox" />Geladeira
                    vertical</label>
                  <label className='text-label'><input name="prefer" defaultValue="gitter-help-rooms" type="checkbox" className="input-checkbox" />Freezer</label>
                  <label className='text-label'><input name="prefer" defaultValue="videos" type="checkbox" className="input-checkbox" />Fogão comercial</label>
                  <label className='text-label'><input name="prefer" defaultValue="city-meetups" type="checkbox" className="input-checkbox" />Microondas</label>
                  <label className='text-label'><input name="prefer" defaultValue="forum" type="checkbox" className="input-checkbox" />Liquidificador</label>
                  <label className='text-label'><input name="prefer" defaultValue="front-end-projects" type="checkbox" className="input-checkbox" />Balança de
                    cozinha</label>
                  <label className='text-label'><input name="prefer" defaultValue="back-end-projects" type="checkbox" className="input-checkbox" />Lixeira
                    seletiva</label>
                  <label className='text-label'><input name="prefer" defaultValue="data-visualization" type="checkbox" className="input-checkbox" />Bebedouro</label>
                  <label className='text-label'><input name="prefer" defaultValue="challenges" type="checkbox" className="input-checkbox" />Purificador de
                    água</label>
                  <label className='text-label'><input name="prefer" defaultValue="open-source-community" type="checkbox" className="input-checkbox" />Sabão de
                    uso escolar</label>
                  <label className='text-label'><input name="prefer" defaultValue="gitter-help-rooms" type="checkbox" className="input-checkbox" />Álcool
                    gel</label>
                  <label className='text-label'><input name="prefer" defaultValue="videos" type="checkbox" className="input-checkbox" />Papel higiênico</label>
                  <label className='text-label'><input name="prefer" defaultValue="city-meetups" type="checkbox" className="input-checkbox" />Papel toalha</label>
                  <label className='text-label'><input name="prefer" defaultValue="wiki" type="checkbox" className="input-checkbox" />Calculadora</label>
                  <label className='text-label'><input name="prefer" defaultValue="forum" type="checkbox" className="input-checkbox" />Folha A4</label>
                  <label className='text-label'><input name="prefer" defaultValue="front-end-projects" type="checkbox" className="input-checkbox" />Carimbo</label>
                  <label className='text-label'><input name="prefer" defaultValue="back-end-projects" type="checkbox" className="input-checkbox" />Tinta para
                    carimbo</label>
                  <label className='text-label'><input name="prefer" defaultValue="data-visualization" type="checkbox" className="input-checkbox" />Grampos</label>
                  <label className='text-label'><input name="prefer" defaultValue="challenges" type="checkbox" className="input-checkbox" />Caneta</label>
                  <label className='text-label'><input name="prefer" defaultValue="open-source-community" type="checkbox" className="input-checkbox" />Lápis</label>
                  <label className='text-label'><input name="prefer" defaultValue="gitter-help-rooms" type="checkbox" className="input-checkbox" />Borracha</label>
                  <label className='text-label'><input name="prefer" defaultValue="videos" type="checkbox" className="input-checkbox" />Grampeador</label>
                  <label className='text-label'><input name="prefer" defaultValue="city-meetups" type="checkbox" className="input-checkbox" />Corretivo</label>
                  <label className='text-label'><input name="prefer" defaultValue="forum" type="checkbox" className="input-checkbox" />Cola para papel</label>
                  <label className='text-label'><input name="prefer" defaultValue="wiki" type="checkbox" className="input-checkbox" />Pasta arquivo</label>
                  <label className='text-label'><input name="prefer" defaultValue="forum" type="checkbox" className="input-checkbox" />Envelope</label>
                  <label className='text-label'><input name="prefer" defaultValue="additional-courses" type="checkbox" className="input-checkbox" />Etiquetas</label>
                  <label className='text-label'><input name="prefer" defaultValue="city-meetups" type="checkbox" className="input-checkbox" />Caderno</label>
                  <label className='text-label'><input name="prefer" defaultValue="wiki" type="checkbox" className="input-checkbox" />Lápis de colorir</label>
                  <label className='text-label'><input name="prefer" defaultValue="forum" type="checkbox" className="input-checkbox" />Giz de cera</label>
                </div>
              </div>
              <div className="form-group">
                <p className="paragrafo">Outros:</p>
                <Field name="pergunta3" className="input-textarea" as="textarea" placeholder=" Informe itens que não estão contemplados na lista acima, porém são necessários."></Field>
                <ErrorMessage component="span" name="pergunta3" className="form-error"/>
              </div>
              <div className="form-group">
                <h2>Capital humano</h2>
                <p className="paragrafo">
                  A instituição apresenta necessidades de receber apoio em capital humano através de voluntariado?
                  <span className="clue">(Selecione uma ou mais opções)</span>
                </p>
                <span>
                  Exemplos: assistentes sociais, psicólogos, palestrantes, mão de obra em serviços de reforma/construção ou
                  outros que se adequam nas categorias de voluntariado atendendo aos pré-requisitos definidos pela escola.
                </span>
                <div className="form-obs">
                  <label className='text-label'><input name="prefer" defaultValue="front-end-projects" type="checkbox" className="input-checkbox" />Assistência social</label>
                  <label className='text-label'><input name="prefer" defaultValue="back-end-projects" type="checkbox" className="input-checkbox" />Assistência psicológica</label>
                  <label className='text-label'><input name="prefer" defaultValue="data-visualization" type="checkbox" className="input-checkbox" />Palestras</label>
                  <label className='text-label'><input name="prefer" defaultValue="challenges" type="checkbox" className="input-checkbox" />Mão de obra voluntária para serviços gerais ou serviços de construção/reforma</label>
                </div>
              </div>
              <div className="form-group">
                <p className="paragrafo">Outros</p>
                <Field name="pergunta4" className="input-textarea" as="textarea" placeholder=" Informe itens que não estão contemplados na lista acima, porém são necessários."></Field>
                <ErrorMessage component="span" name="pergunta4" className="form-error"/>
              </div>
              <div className="form-group">
                <button type="submit" id="submit" className="submit-button">
                  Enviar
                </button>
              </div>
              </Form>
            </Formik>
          </div>
        </div>
      );
}