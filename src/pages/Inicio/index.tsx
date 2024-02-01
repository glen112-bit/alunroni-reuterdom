import cardapio from '../../data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from '../../styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const navigate = useNavigate();
  function redireccionarDetalle(prato: Prato) {
    navigate(`/prato/${prato.id}`, {state: {prato}, replace: true});
  }
  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(item => (
          <div className={styles.recomendado} key={item.id}>
            <div className={styles.imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recomendado__botao}
              onClick={() =>redireccionarDetalle(item)}
            >ver mas</button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa Casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="casa do aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua bla bla bla <br/> <br/> vila no se donde
        </div>
      </div>
    </section>
  );
}
