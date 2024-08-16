import { useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { Filter } from "../components/Filter";
import { UsecountryContext } from "../CountryProvider";
import { countrydata } from "../data/countrydata";

export function Countryload() {
  console.log("country load");
  const { countryresults, setcountryresults } = UsecountryContext();
  const effectcounter = useRef(1);

  // Memoize the computation of countrydata1
  const countrydata1 = useMemo(() => [...countrydata], []);

  useEffect(() => {
    if (effectcounter.current === 1) {
      setcountryresults([...countrydata1]);
      effectcounter.current += 1;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countrydata1]);

  return (
    <>
      <div className="flex flex-row justify-end items-end flex-wrap mr-24 rounded-sm mt-5">
        <Filter countrydata={countrydata} />
      </div>
      <div className="flex flex-row justify-center items-center flex-wrap text-lg">
        <Cload cresults={countryresults} />
      </div>
    </>
  );
}

function Cload({ cresults }) {
  // Optionally memoize the result of mapping over cresults
  const memoizedCresults = useMemo(
    () =>
      cresults.map((item, index) => {
        return (
          <Link
            key={item.alpha3Code || index}
            to={`/${item.alpha3Code}`}
            className="flex flex-col m-4 justify-center items-center bgshadow
              transform transition-transform duration-300 hover:scale-105 rounded-sm
              bg-gray-100 text-sm card-height w-1/5"
          >
            <div className="h-full">
              <div className="bg-slate-200 rounded-lg shadow-lg overflow-hidden max-w-lg w-full h-full">
                <img
                  src={item.flags.svg}
                  alt="Mountain"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {item.name}
                  </h2>
                  <div className="text-gray-700 leading-tight mb-4 flex flex-col justify-start">
                    <div className="bg-emerald-400 w-fit rounded-full px-3 py-1 text-gray-600 mb-1">
                      Population:{" "}
                      <span className="text-gray-900">{item.population}</span>
                    </div>
                    <div className="bg-emerald-400 w-fit rounded-full px-3 py-1 text-gray-600 mb-1">
                      Region:{" "}
                      <span className="text-gray-900">{item.region}</span>
                    </div>
                    <div className="bg-emerald-400 w-fit rounded-full px-3 py-1 text-gray-600">
                      Capital:{" "}
                      <span className="text-gray-900">{item.capital}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div
                      className="flex flex-col justify-center items-center bg-slate-500 text-white
                      rounded-lg border-2 border-slate-300 shadow-lg p-2"
                    >
                      <span className="rounded-full object-cover text-xl">
                        {item?.currencies?.[0]?.symbol || "None"}
                      </span>
                      <span className="font-semibold">
                        {item?.currencies?.[0]?.name || "None"}
                      </span>
                    </div>
                    <span className="text-gray-600">{item.timezones[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      }),
    [cresults]
  );

  return <>{memoizedCresults}</>;
}
