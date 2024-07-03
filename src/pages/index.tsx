import styles from '../../styles/home.module.scss';


export default function Home() {
  return (
    <>
      <div className={styles.body}>
        <a href="/login">
        <button className={styles.submit}>Login</button>
        </a>
      </div>
    </>

  );
}