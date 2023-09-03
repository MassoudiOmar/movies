import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMostRatedMovies = createAsyncThunk(
  "fetchMostRatedMovies",
  async (id) => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

    const configs = {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTJmMjhjNDI2YjIxYWUzZDE3MTE2MzkwYmNhNWJjZCIsInN1YiI6IjY0ZjQ1M2MwN2Q0MWFhMDExYjg4ZjZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.repgwQuEId5RF0dL2RIpL8Q_w_md5jkj6kQIP3z4WMw",
      },
    };
    const response = await axios.get(
      url,
      configs
    );
    return response.data;
  }
);

export const fetchUpCommingMovies = createAsyncThunk(
  "fetchUpCommingMovies",
  async (id) => {
    const configs = {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTJmMjhjNDI2YjIxYWUzZDE3MTE2MzkwYmNhNWJjZCIsInN1YiI6IjY0ZjQ1M2MwN2Q0MWFhMDExYjg4ZjZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.repgwQuEId5RF0dL2RIpL8Q_w_md5jkj6kQIP3z4WMw",
      },
    };
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
      configs
    );
    return response.data;
  }
);




export const nowPlyiungMovies = createAsyncThunk(
    "nowPlyiungMovies",
    async (id) => {
      const configs = {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTJmMjhjNDI2YjIxYWUzZDE3MTE2MzkwYmNhNWJjZCIsInN1YiI6IjY0ZjQ1M2MwN2Q0MWFhMDExYjg4ZjZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.repgwQuEId5RF0dL2RIpL8Q_w_md5jkj6kQIP3z4WMw",
        },
      };

      const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
        configs
      );
      
      return response.data;
    }
  );

export const mainPageSlice = createSlice({
  name: "mainPage",
  initialState: {
    movie: null,
    movies: {
      items: [],
      count: 0,
    },
    upcomming: {
        items: [],
        count: 0,
      },
      nowPlyiungMovies: {
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
    builder.addCase(fetchMostRatedMovies.fulfilled, (state, action) => {
      state.movies.items = action.payload;
    });
    builder.addCase(fetchUpCommingMovies.fulfilled, (state, action) => {
      state.upcomming.items = action.payload;
    });
    builder.addCase(nowPlyiungMovies.fulfilled, (state, action) => {
        state.nowPlyiungMovies.items = action.payload;
      });
  },
});
export default mainPageSlice.reducer;
