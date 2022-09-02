import axios from "axios";
import React, { useEffect, useState } from "react";
//styles
import { HomeStyle } from "./styles";
//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Filter from "../../components/filterComponent";
import { useSearchParams } from "react-router-dom";
import Skeleton from "../../components/skeleton";
import LoadingComponent from "../../components/Loading";

const Home = ({ theme }) => {
  const [allCountries, setAllCountries] = useState([]);
  const [chunkOfCountries, setChunkOfCountries] = useState([]);
  const [nameCountry, setNameCountry] = useState("");
  const [loading, setloading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [filter, setFilter] = useSearchParams();
  const navigate = useNavigate();
  const region = filter?.get("region");

  useEffect(() => {
    if (!nameCountry) {
      getCountries();
    }
  }, [region]);

  const getCountries = (name) => {
    setloading(true);

    let url = name
      ? `https://restcountries.com/v3.1/name/${name}`
      : region
      ? `https://restcountries.com/v3.1/region/${region}`
      : "https://restcountries.com/v3.1/all";

    try {
      axios.get(url).then((res) => {
        setAllCountries(JSON.parse(JSON.stringify(res.data)));
        setChunkOfCountries(res.data.slice(0, 24));
        setloading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const searchCountry = (e) => {
    if (e.key == "Enter") {
      getCountries(e.target.value);
      setFilter("");
    }
  };

  const filterCountries = (region) => {
    setFilter(region);
    setNameCountry("");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [chunkOfCountries]);

  const handleScroll = () => {
    const isbottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (isbottom && chunkOfCountries.length != allCountries.length) {
      setIsFetching(true);
      fetchMoreListItems();
    }
  };

  function fetchMoreListItems() {
    const startSlice = chunkOfCountries.length;
    const endSlice =
      allCountries.length > startSlice + 24
        ? startSlice + 24
        : allCountries.length;

    setTimeout(() => {
      const newCountry = allCountries.slice(startSlice, endSlice);
      setChunkOfCountries([...chunkOfCountries, ...newCountry]);
      setIsFetching(false);
    }, 2500);
  }

  return (
    <>
      <HomeStyle theme={theme} />
      <div>
        <div className="header">
          <div className="searchbar">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              value={nameCountry}
              placeholder="Search for a country ..."
              onKeyDown={searchCountry}
              onChange={(e) => setNameCountry(e.target.value)}
            />
          </div>
          <Filter
            region={region}
            theme={theme}
            filterCountries={filterCountries}
          />
        </div>
        {loading ? (
          <Skeleton theme={theme} count={4} />
        ) : (
          <div className="country-container">
            {chunkOfCountries.map((country) => {
              return (
                <div
                  key={country.area}
                  className="country-card-container"
                  onClick={() => navigate(`/${country.cioc}`)}
                >
                  <div className="country-card">
                    <div>
                      <img src={country.flags.png} />
                      <div className="country-card-content">
                        <h1>{country.name.common}</h1>
                        <p className="description">
                          population: <span>{country.population}</span>
                        </p>
                        <p className="description">
                          region: <span>{country.region}</span>
                        </p>
                        <p className="description">
                          capital: <span>{country.capital}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {isFetching ? <LoadingComponent /> : null}
      </div>
    </>
  );
};

export default Home;
