import { GlobalStyle } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const Filter = ({ filterCountries, theme, region }) => {
  const [isOpenList, setIsOpenList] = useState(false);

  return (
    <>
      <GlobalStyle theme={theme} />
      <div className="filter-container">
        <div className="filterbar" onClick={() => setIsOpenList(!isOpenList)}>
          <p> Filter by {region || "Reigon"} </p>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <div className={isOpenList ? "list" : "d-none"}>
          <ul>
            {Regions.map((region) => (
              <li
                key={region}
                onClick={() => {
                  filterCountries({ region });
                  setIsOpenList(false);
                }}
              >
                {region}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filter;
