import Link from "next/link";
import styles from '../styles/Home.module.css'

const navigation = () => {
  return (
    <>

    <div className={styles.menu}>
      <Link href="/">
        <a className = {styles.nav}> Home</a>
      </Link>
      <Link href="/blog">
        <a className = {styles.nav}> Blog</a>
      </Link>
      <Link href="/albums">
        <a className = {styles.nav}> Albums</a>
      </Link>
    </div>
    </>
    );
  
}
export default navigation;