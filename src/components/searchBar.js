import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { fetchMoviesBySearch } from "../store/search";
import { fetchUpCommingMovies } from "../store/main-page";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/searchBar.css";

export default function CountrySelect() {
  const dispatch = useDispatch();
  const [autocompleteValue, setAutocompleteValue] = useState(""); 

  const countries = [{ code: "AD", label: "Andorra", phone: "376" }];

  const movies = useSelector((state) => state.search);
  const handleAutocompleteChange = (event, newValue) => {
    setAutocompleteValue(newValue); 
  };

  const Allmovies = useSelector(
    (state) => state.MainPage.upcomming.items.results
  );

  useEffect(() => {
    dispatch(fetchUpCommingMovies());
  }, []);

  useEffect(() => {
    dispatch(fetchMoviesBySearch(autocompleteValue));
  }, [autocompleteValue]); 

  const updateCountriesWithMovies = () => {
    const updatedCountries = Allmovies?.map((movie) => ({
      id: movie.id,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      title: movie.title,
    }));
    return updatedCountries;
  };

  const updatedCountries = updateCountriesWithMovies();

  updatedCountries &&
    updatedCountries.push({
      id: "voir_tous_les_resultats",
      title: "Voir tous les résultats",
    });

  return (
    <Autocomplete
      id="country-select-demo"
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        backgroundColor: "#ffffff6e",
        color:"white"

      }} 
      options={updatedCountries}
      getOptionLabel={(option) => option.title}
      renderOption={(props, option) => (
        <Box
          className="d-flex"
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          {option.id === "voir_tous_les_resultats" ? (
            <a
              className="d-flex"
              href="/search" 
              style={{
                textDecoration: "none",
                color: "inherit", 
              }}
            >
              <img
                loading="lazy"
                width="50"
                style={{ marginRight: "20px" }}
                src={`https://image.tmdb.org/t/p/w185/${option?.poster_path}`}
                alt=""
              />
              <div className="mt-2">
                {option.label} {option.title}
                <br />
                {option?.release_date?.slice(0, 4)}
              </div>
            </a>
          ) : (
            <a
              className="d-flex"
              href={`/description/${option.id}`}
              style={{
                textDecoration: "none", 
                color: "inherit",
              }}
            >
              <img
                loading="lazy"
                width="50"
                style={{ marginRight: "20px" }}
                src={`https://image.tmdb.org/t/p/w185/${option?.poster_path}`}
                alt=""
              />
              <div className="mt-2">
                {option.label} {option.title}
                <br />
                {option?.release_date?.slice(0, 4)}
              </div>
            </a>
          )}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Rechercher un film, un réalisateur, un acteur"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
          style={{color:"white"}}
        />
      )}
    />
  );
}
