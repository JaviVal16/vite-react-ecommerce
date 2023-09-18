import "./style.css";
import { XMarkIcon } from "@heroicons/react/24/solid";

const SideCardProduct = () => {
  return (
    <>
      <div
        id="layout"
        className="layout w-full h-full bg-black opacity-50 fixed top-0 left-0 z-20 hidden"
      ></div>
      <aside
        id="cardProduct"
        className="w-96 flex flex-col fixed right-0 top-0 border border-black rounded-lg h-full bg-slate-300 z-30 hidden"
      >
        <header className="flex items-center justify-between p-4">
          <p>Detalles del producto</p>
          <span
            className="cursor-pointer"
            onClick={() => {
              document.body.style.overflowY = "scroll";
              document.getElementById("layout").classList.add("hidden");
              document.getElementById("cardProduct").classList.add("hidden");
            }}
          >
            <XMarkIcon className="h-6 w-6 text-black" />
          </span>
        </header>
        <hr></hr>
        <main>
          <section></section>
        </main>
      </aside>
    </>
  );
};

export default SideCardProduct;
