import { useFetch } from '../../Hooks/useFetch'

import Card from "../../Components/Card";
import SideCardProduct from '../../Components/SideCardProduct';

function Home() {

  const { data, loading, error } = useFetch('https://fakestoreapi.com/products');

  // console.log(data);

  return (
    <div className='w-full flex flex-col items-center '>
      <h1 className='text-3xl font-bold underline'>Home</h1>
      <section className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        <SideCardProduct />
        {loading && <h2>Loading...</h2>}
        {error && <h2>ERROR: {error}</h2>}
        {
          data?.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              category={item.category}
              image={item.image}
            />
          ))

        }
      </section>
    </div>
  )
}

export default Home;
