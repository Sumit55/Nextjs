import Link from "next/link";
import styles from '../../styles/Home.module.css';
import Navbar from '../../components/Navbar'

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get albums.
  // You can use any data fetching library
  const res = await fetch('https://jsonplaceholder.typicode.com/albums')
  const albums = await res.json()

  // By returning { props: { albums } }, the Albums component
  // will receive `albums` as a prop at build time
  return {
    props: {
      albums,
    },
  }
}

const albumsPage = ({albums}) => {
  return (
  <>
  <Navbar/>
    <div>
    <h1> Listing Albums</h1>
      <ul>
        {albums.map((album) => (
          <Link href={`/albums/${album.id}`}><li className={styles.albumlist}>{album.title}</li></Link>
        ))}
      </ul>
    </div>
  </>
  );
};

export default albumsPage;