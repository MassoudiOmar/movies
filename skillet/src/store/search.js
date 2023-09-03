import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovie = createAsyncThunk("details", async (id) => {
  const configs = {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTJmMjhjNDI2YjIxYWUzZDE3MTE2MzkwYmNhNWJjZCIsInN1YiI6IjY0ZjQ1M2MwN2Q0MWFhMDExYjg4ZjZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.repgwQuEId5RF0dL2RIpL8Q_w_md5jkj6kQIP3z4WMw",
    },
  };
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    configs
  );
  return response.data;
});

export const fetchMoviesBySearch = createAsyncThunk(
  "search",
  async (search) => {
    const configs = {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTJmMjhjNDI2YjIxYWUzZDE3MTE2MzkwYmNhNWJjZCIsInN1YiI6IjY0ZjQ1M2MwN2Q0MWFhMDExYjg4ZjZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.repgwQuEId5RF0dL2RIpL8Q_w_md5jkj6kQIP3z4WMw",
      },
    };

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
      configs
    );
    return response.data;
  }
);

export const Search = createSlice({
  name: "description",
  initialState: {
    movie: null,
    movies: {
      items: [],
      count: 0,
    },
    error: null,
    deleteError: null,
    saveError: null,
    createArticleError: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMoviesBySearch.fulfilled, (state, action) => {
      state.movies.items = action.payload;
    });
  },
});
export default Search.reducer;
