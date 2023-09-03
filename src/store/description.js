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

export const fetchMovieCast = createAsyncThunk("cast", async (id) => {
    const configs = {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTJmMjhjNDI2YjIxYWUzZDE3MTE2MzkwYmNhNWJjZCIsInN1YiI6IjY0ZjQ1M2MwN2Q0MWFhMDExYjg4ZjZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.repgwQuEId5RF0dL2RIpL8Q_w_md5jkj6kQIP3z4WMw",
      },
    };

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      configs
    );
    return response.data;
  });
  


export const description = createSlice({
  name: "description",
  initialState: {
    movie: null,
    movies: {
      items: [],
      count: 0,
    },
    casts: {
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
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.movies.items = action.payload;
    });
    builder.addCase(fetchMovieCast.fulfilled, (state, action) => {
        state.casts.items = action.payload;
      });
  },
});
export default description.reducer;
