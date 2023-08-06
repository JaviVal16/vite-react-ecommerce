const SideCardProduct = () => {
    return (
        <>
            <div className='w-full h-full bg-black opacity-50 fixed top-0 left-0 z-20'></div>
            <aside className='w-96 flex flex-col fixed right-0 top-0 border border-black rounded-lg h-full bg-slate-300 z-30'>
                <header className='flex items-center justify-between pd-'>
                    <p>Detalles del producto</p>
                    <span>X</span>
                </header>
            </aside>
        </>
    );
}

export default SideCardProduct;