


export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  const data = await res.json();
  const paths = data.map(album => {
  return {
    params: { pageNo: album.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {

  const id = context.params.pageNo;
  // Call an external API endpoint to get albums.
  // You can use any data fetching library
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
  const albums = await res.json()

  // By returning { props: { albums } }, the Albums component
  // will receive `albums` as a prop at build time
  return {
    props: {
      albums,
    },
  }
}

const mydata = ({albums}) => {

  return (
  <>
    <div className="container">
      <div className="detail-card">
        <h1>Details </h1>
        <h3>{albums.title}</h3>
        <p>{albums.id}</p>
        <p>{albums.userId}</p>
      </div>
    </div>
  </>
  );
};

export default mydata;