import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/home.module.scss';
import Logo from '../img/logo.png';

export default function Home() {
  return (
    <>
      <div className={styles.body}>
        <Head>
          <title>BiblioNext - Biblioteca do futuro</title>
          <link rel="stylesheet" href="/styles/globals.scss" />
        </Head>
        <div className={styles.container}>
          <div className={styles.block}>
            <div className={styles.logo}>
            <Image src={Logo} alt="Logo da Biblioteca Next" layout="intrinsic" />
            </div>
            <form className={styles.form}>
              <input type="email" placeholder="Digite seu email" className={styles.input} />
              <input type="password" placeholder="Digite sua senha" className={styles.input} />
              <button type="submit" className={styles.button}>Entrar</button>
            </form>
            <p className={styles.link}>Não tem uma conta?</p>
          </div>
        </div>
      </div>
    </>

  );
}