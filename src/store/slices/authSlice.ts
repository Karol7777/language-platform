import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    email: string;
    name: string;
}

interface AuthState {
    user: User | null;
    initialized: boolean;
}

const initialState: AuthState = {
    user: null,
    initialized: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            if (typeof window !== 'undefined') {
                localStorage.setItem('user', JSON.stringify(action.payload));
            }
        },
        logout: (state) => {
            state.user = null;
            if (typeof window !== 'undefined') {
                localStorage.removeItem('user');
            }
        },
        loadUserFromStorage: (state) => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                state.user = JSON.parse(storedUser);
            }
            state.initialized = true; // ✅ najważniejsze!
        }
    },
});

export const { login, logout, loadUserFromStorage } = authSlice.actions;
export default authSlice.reducer;
