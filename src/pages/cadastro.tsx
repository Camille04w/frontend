import Head from 'next/head';
import Image from 'next/image';
import Logo from '../img/logo.png';
import styles from '../../styles/cadastro.module.scss';


export default function Cadastro() {
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
                            <h4>Cadastro</h4>
                            <form className={styles.form}>
                                <input type="email" placeholder="Digite seu email" className={styles.input} />
                                <input type="password" placeholder="Crie uma senha" className={styles.input} />
                                <input type="password" placeholder="Digite a senha novamente" className={styles.input} />
                                <button type="submit" className={styles.button}>Entrar</button>
                            </form>
                            <a href='/login' className={styles.link}>Já tem uma conta?</a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}