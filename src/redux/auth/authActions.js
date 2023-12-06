import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line no-undef
const backendURL = import.meta.env.VITE_BASE_URL;

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.post(
        `${backendURL}/auth/signIn`,
        { email, password },
        config
      );
      return res.data;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
