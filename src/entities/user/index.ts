export { default as userReducer } from './model/userSlice';
export { login, registration, logout, checkAuth } from './model/AuthThunks';
export { clearError } from './model/userSlice';
export type { IUser } from './model/types';