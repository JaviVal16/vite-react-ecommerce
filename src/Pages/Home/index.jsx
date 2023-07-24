// import { useFetch } from '../../Hooks/useFetch'

import Card from "../../Components/Card";

function Home() {

  // const { data, loading, error } = useFetch('https://fakestoreapi.com/products');

  // console.log(data);

  return (
    <div>
      {/* {loading && <h2>Loading...</h2>} */}
      {/* {error && <h2>ERROR: {error}</h2>} */}
      <h1 className='text-3xl font-bold underline'>Home</h1>
      <Card />
    </div>
  )
}

export default Home;
