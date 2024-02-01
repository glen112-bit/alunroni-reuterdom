import styles from './Prato.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPrato from '../../components/TagsPrato';
import NotFound from 'pages/NotFound';
import Padron from 'components/Padron';

export default function Prato() {
  const navigate = useNavigate();
  const { id } = useParams();
  const prato = cardapio.find(item => item.id === Number(id));

  if (!prato) {
    return <NotFound />;
  }

  return (
    <Padron>
      <section className={styles.container}>
        <button onClick={() => navigate('/')} className={styles.voltar}>
          {'< voltar'}
        </button>
        <h1 className={styles.titulo}>{prato.title}</h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>{prato.description}</p>
          <TagsPrato {...prato} />
        </div>
      </section>
    </Padron>
  );
}
