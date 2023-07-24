const Card = () => {
    return (
        <div className='bg-white cursor-pointer w-56 rounded-lg shadow-lg'>
            <figure className='relative mb-3 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-.5'>
                    Electronics
                </span>
                <img className='w-full h-full object-cover rounded-lg' src='https://th.bing.com/th/id/OIP.h6UyuKbMu8BRY7PvjH8H6wHaHa?pid=ImgDet&rs=1' alt='headphones' />
            </figure>
            <p className='flex justify-around items-center'>
                <span className='text-sm font-light'>
                    ATH-M50x
                </span>
                <strong className='text-lg'>
                    $49
                </strong>
            </p>
            <div className='w-full flex items-center justify-center'>
                <button type='button' className='btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-slate-600 hover:bg-slate-900 text-white font-normal py-1 px-3 m-1 rounded-lg'>
                    Add to cart
                </button>
            </div>
        </div>
    );
}

export default Card;