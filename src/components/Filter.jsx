import { UsecountryContext } from "../CountryProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Filter({ countrydata }) {
  let { countryresults, setcountryresults } = UsecountryContext();

  return (
    <>
      <div className="relative inline-flex text-sm">
        <svg
          className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 412 232"
        >
          <path
            d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
            fill="#648299"
            fillRule="nonzero"
          />
        </svg>
        <select
          onChange={(e) => handlefilterchange(e)}
          className="border border-gray-300 rounded-full h-10 pl-5 pr-10 bg-white
         hover:border-gray-400 focus:outline-none appearance-none"
        >
          <option className="text-emerald-400 font-semibold" value={"fbrc"}>
            Filter By Region (clear)
          </option>
          <option className="font-extrabold" value={"Africa"}>
            Africa
          </option>
          <option className="font-extrabold" value={"Americas"}>
            America
          </option>
          <option className="font-extrabold" value={"Asia"}>
            Asia
          </option>
          <option className="font-extrabold" value={"Europe"}>
            Europe
          </option>
          <option className="font-extrabold" value={"Oceania"}>
            Oceania
          </option>
        </select>
      </div>
      <div>
        <ToastContainer autoClose={3000} style={{ fontSize: "12px" }} />
      </div>
    </>
  );

  function handlefilterchange(e) {
    console.log(e.target.value);
    let filter = e.target.value.trim();

    if (filter === "fbrc") {
      setcountryresults((prev) => {
        prev = [];
        let curr = prev;
        curr = [...countrydata];
        return curr;
      });
    } else {
      // eslint-disable-next-line react/prop-types
      let filteredcountries = countrydata.filter(
        (item) => item.region === filter
      );
      setcountryresults((prev) => {
        prev = [];
        let curr = prev;
        curr = [...filteredcountries];
        return curr;
      });
      toast(`${countryresults.length} countries found!`);
    }
  }
}
