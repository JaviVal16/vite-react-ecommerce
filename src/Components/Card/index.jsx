import PropTypes from 'prop-types';

const Card = ({ title, price, category, image }) => {
    return (
        <div className='bg-white cursor-pointer w-56 rounded-lg shadow-lg'>
            <figure className='relative mb-3 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-.5'>
                    {category}
                </span>
                <img className='w-full h-full object-cover rounded-lg' src={image} alt={title} />
            </figure>
            <p className='flex flex-col justify-around items-center'>
                <span className='text-sm font-light text-center h-5 text-ellipsis overflow-hidden'>
                    {title}
                </span>
                <strong className='text-lg'>
                    ${price}
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

Card.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    image: PropTypes.string,
}

export default Card;