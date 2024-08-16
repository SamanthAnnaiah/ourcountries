import { useNavigate, useParams } from "react-router";
import { UsecountryContext } from "../CountryProvider";
import { Link } from "react-router-dom";

export function SelectCountryload() {
  let navigate = useNavigate();
  let { countryid } = useParams();
  let { countryresults } = UsecountryContext();
  let selectedcountry = countryresults.find(
    (item) => item.alpha3Code === countryid
  );
  return (
    <>
      <div className="bgshadow button-3 w-fit" onClick={() => navigate(-1)}>
        ⬅️ BACK
      </div>

      <div className="flex flex-row justify-start items-center text-sm">
        <div className="bgshadow w-fit h-fit m-16 border-2 border-black rounded-lg mr-36">
          <img
            src={selectedcountry?.flags?.svg || ""}
            alt="Mountain"
            className="w-full h-80"
          />
        </div>
        <div className="text-left">
          <div className="text-lg mb-10">{selectedcountry.name}</div>
          <div className="grid grid-cols-2 gap-4 place-items-start">
            <div className="bg-emerald-400 w-fit rounded-full px-3 py-1 text-gray-600">
              Native Name:{" "}
              <span className="text-gray-900">
                {selectedcountry.nativeName}
              </span>
            </div>
            <div className="bg-emerald-400 w-fit rounded-full px-3 py-1 text-gray-600">
              Top Level Domain:{" "}
              <span className="text-gray-900">
                {selectedcountry?.topLevelDomain[0] || ".com"}
              </span>
            </div>
            <div className="bg-emerald-400 w-fit rounded-full px-3 py-1 text-gray-600">
              Calling code:{" "}
              <span className="text-gray-900">
                {selectedcountry?.callingCodes[0] || "00"}
              </span>
            </div>
            <div className="bg-emerald-400 w-fit rounded-full px-3 py-1 text-gray-600">
              Demonym:{" "}
              <span className="text-gray-900">
                {selectedcountry?.demonym || "Human"}
              </span>
            </div>
            <div className="bg-emerald-400 w-fit rounded-full px-3 py-1 text-gray-600">
              Sub Region:{" "}
              <span className="text-gray-900">
                {selectedcountry?.subregion || "None"}
              </span>
            </div>
            <div className="bg-emerald-400 w-fit rounded-full px-3 py-1 text-gray-600">
              language:{" "}
              <span className="text-gray-900">
                {selectedcountry?.languages[0].name || "None"}
              </span>
            </div>
            <div className="bg-emerald-400 w-fit rounded-full px-3 py-1 text-gray-600">
              Country code:{" "}
              <span className="text-gray-900">
                {selectedcountry?.numericCode || "00"}
              </span>
            </div>
            <div className="bg-emerald-400 w-fit rounded-full px-3 py-1 text-gray-600">
              Independency:{" "}
              <span className="text-gray-900">
                {(selectedcountry?.independent ? "Yes" : "No") || "No"}
              </span>
            </div>
          </div>
          <div className="mt-6">
            Borders:{" "}
            {selectedcountry?.borders?.map((item) => {
              let thiscountry = countryresults.find(
                (allitem) => allitem.alpha3Code === item
              );
              return (
                <Link
                  key={item}
                  to={`/${thiscountry.alpha3Code}`}
                  className="w-full overflow-auto"
                >
                  <span className="bg-neutral-300 inline-block w-fit rounded-full m-2 px-3 text-gray-600">
                    {thiscountry ? thiscountry.name : "Unknown"}
                  </span>
                </Link>
              );
            }) || "None"}
          </div>
        </div>
      </div>
    </>
  );
}
