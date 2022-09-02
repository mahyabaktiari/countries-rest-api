import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DetailsStyle } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LoadingComponent from "../../components/Loading";

const Details = ({ theme }) => {
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
      <DetailsStyle theme={theme} />
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
              <div className="country-details">
                <div className="column-1">
                  <p>
                    Native Name:{" "}
                    <span>
                      {Object?.values(countryInfo?.name.nativeName)[0].common}
                    </span>
                  </p>
                  <p>
                    Population: <span>{countryInfo?.population}</span>
                  </p>
                  <p>
                    Region: <span>{countryInfo?.region}</span>
                  </p>
                  <p>
                    Sub Regin: <span>{countryInfo?.subregion}</span>
                  </p>
                  <p>
                    Capital: <span>{countryInfo?.capital}</span>
                  </p>
                </div>
                <div className="column-2">
                  <p>
                    Top Level Domain: <span>{countryInfo?.tld}</span>
                  </p>
                  <p>
                    Currnecies:{" "}
                    <span>
                      {Object.values(countryInfo?.currencies)[0].name}
                    </span>
                  </p>
                  <p>
                    Languages:{" "}
                    <span>
                      {Object?.values(countryInfo?.languages).toString()}
                    </span>
                  </p>
                </div>
              </div>

              <div className="border-countries">
                <p>Border Counties :</p>
                <div>
                  {countryInfo?.borders?.map((border) => (
                    <button
                      className="border-button"
                      key={border}
                      onClick={() => navigate(`/${border}`)}
                    >
                      {border}
                    </button>
                  )) || "---"}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <LoadingComponent />
        )}
      </div>
    </>
  );
};

export default Details;
