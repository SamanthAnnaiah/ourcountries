import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="w-full py-3 border-b-slate-400/40 border-b-2 text-lg">
      <div className="flex justify-between px-14 items-center font-semibold">
        <Link to={"/"}>
          <div className="flex flex-row items-center">
            <img
              src="/cimg.jpeg"
              alt="Website logo"
              className="rounded-full"
              width={70}
              height={70}
            />
            <span className="inline-block font-bold m-3 shadow-lg text-2xl text-orange-950">
              OurCountries
            </span>
          </div>
        </Link>
        <div className="flex xl:gap-36 md:gap-5 gap-10 text-lg">
          <Link to="population">Population</Link>
          <Link to="area">Area</Link>
        </div>
        <div>
          <button className="py-2 px-6 bg-black text-white rounded-3xl font-semibold">
            <Link to="about">About</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}
