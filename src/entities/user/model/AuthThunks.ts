import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../api/AuthService';
import axios from 'axios';
import { API_URL } from '../../../shared/lib/apiConsts';

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.accessToken);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response?.data?.message || 'Login failed');
    }
  }
);

export const registration = createAsyncThunk(
  'user/registration',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem('token', response.data.accessToken);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response?.data?.message || 'Registration failed');
    }
  }
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
    } catch (e) {
      return rejectWithValue(e.response?.data?.message || 'Logout failed');
    }
  }
);

export const checkAuth = createAsyncThunk(
  'user/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
      localStorage.setItem('token', response.data.accessToken);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response?.data?.message || 'Auth check failed');
    }
  }
);