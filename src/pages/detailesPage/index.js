import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Detailes = ({ theme }) => {
  const [countryInfo, setCountryInfo] = useState();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getCountry(params.name);
  }, [params.name]);

  const getCountry = (name) => {
    axios.get(`https://restcountries.com/v3.1/alpha/${name}`).then(
      (res) => {
        setCountryInfo(JSON.parse(JSON.stringify(res.data[0])));
      },
      [params.name]
    );
  };

  return (
    <>
      <GlobalStyle theme={theme} />
      <div className="container-detaile-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </button>
        {countryInfo ? (
          <div className="country-container">
            <img src={countryInfo?.flags.png} />
            <div className="country-info">
              <h1>{countryInfo?.name.common}</h1>
              <div className="country-detailes">
                <div className="column-1">
                  <p>
                    Native Name:
                    {Object?.values(countryInfo?.name.nativeName)[0].common}
                  </p>
                  <p>Population :{countryInfo?.population}</p>
                  <p>Region : {countryInfo?.region}</p>
                  <p>Sub Regin:{countryInfo?.subregion}</p>
                  <p>Capital:{countryInfo?.capital}</p>
                </div>
                <div className="column-2">
                  <p>Top Level Domain : {countryInfo?.tld}</p>
                  <p>
                    Currnecies :{Object.values(countryInfo?.currencies)[0].name}
                  </p>
                  <p>
                    Languages :
                    {Object?.values(countryInfo?.languages).toString()}
                  </p>
                </div>
              </div>

              <div className="border-countries">
                <p>Border Counties :</p>
                <div>
                  {countryInfo?.borders.map((border) => (
                    <button
                      className="border-button"
                      key={border}
                      onClick={() => navigate(`/${border}`)}
                    >
                      {border}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          "is loading ..."
        )}
      </div>
    </>
  );
};

export default Detailes;
