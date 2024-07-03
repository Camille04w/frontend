import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/login.module.scss';
import Logo from '../img/logo.png';

export default function Login() {
  return (
    <>
    <div className={styles.all}>
      <div className={styles.body}>
        <Head>
          <title>Biblioteca Next</title>
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
            <a href='#' className={styles.link}>Não tem uma conta?</a>
          </div>
        </div>
      </div>
      </div>
    </>

  );
}