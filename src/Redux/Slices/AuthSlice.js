import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance"


const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') !== undefined ? JSON.stringify(localStorage.getItem('data')) : {},
    resetToken:localStorage.getItem('resetToken') || "",
};

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    try {
        const res = axiosInstance.post("/user/register", data);
        toast.promise(res, {
            loading: "Wait! creating your account",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create account"
        });
        return (await res)?.data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
})

export const login = createAsyncThunk("/auth/login", async (data) => {
    try {
        const res = axiosInstance.post("/user/login", data);
        toast.promise(res, {
            loading: "Wait! authentication in progress...",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Password incorrect"
        });
        return (await res).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
});

export const logout = createAsyncThunk("/auth/logout", async () => {
    try {
        const res = axiosInstance.post("/user/logout");
        toast.promise(res, {
            loading: "Wait! logout in progress...",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to log out"
        });
        return (await res).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
});

export const updateProfile = createAsyncThunk("/user/update/profile", async (data) => {
    try {
        const formData = new FormData();
        formData.append("fullName", data.fullName);
        formData.append("avatar", data.avatar);


        console.log("Form data inside thunk",formData)
        console.log("data inside thunk",data)
        const res = axiosInstance.put(`/user/update`,data);
        toast.promise(res, {
            loading: "Wait! profile update in progress...",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to update profile"
        });
        return (await res).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
})

export const getUserData = createAsyncThunk("/user/details", async () => {
    try {
        const res = axiosInstance.get("user/me");
        return (await res).data;
    } catch(error) {
        toast.error(error.message);
    }
})

export const changePassword = createAsyncThunk("/user/changePassword", async (data) => {
    try {
        const response = axiosInstance.post("/user/change-password",data);
        toast.promise(response,{
            loading:"Changing password",
            success:(data)=>{
                return data?.data?.message
              },
              error:"Failed to change password"
          })
        return (await response).data;
    } catch(error) {
        toast.error(error.message);
    }
})

export const forgotPassword= createAsyncThunk('/user/forgotPassword',async(data)=>{
    try {
        console.log("Email in thunk ",data)
        const formData=new FormData()
        formData.append("email",data)
        console.log(formData)
        const res= axiosInstance.post('/user/forgot-password',data)
        toast.promise(res,{
            loading:"Foegotting password....",
            success:(data)=>{
                return data?.data?.message
              },
              error:"Failed to forgot password"
          })
        return (await res).data;
    } catch (error) {
        toast.error(error.message);
    }
})

export const resetPassword= createAsyncThunk('/user/resetPassword',async(data)=>{
    try {
        console.log("Data send to be server ",data)
        const res= axiosInstance.post(`/user/reset${data[0]}`,data[1])
        toast.promise(res,{
            loading:"Resetting password....",
            success:(data)=>{
                return data?.data?.message
              },
              error:"Failed to Reaset password"
          })
        return (await res).data;
    } catch (error) {
        toast.error(error.message);
    }
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(login.fulfilled, (state, action) => {
            localStorage.setItem("data", JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", action?.payload?.user?.role);
            state.isLoggedIn = true;
            state.data = action?.payload?.user;
            state.role = action?.payload?.user?.role
        })
        .addCase(logout.fulfilled, (state) => {
            localStorage.clear();
            state.data = {};
            state.isLoggedIn = false;
            state.role = "";
        })
        .addCase(getUserData.fulfilled, (state, action) => {
            if(!action?.payload?.user) return;
            localStorage.setItem("data", JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", action?.payload?.user?.role);
            state.isLoggedIn = true;
            state.data = action?.payload?.user;
            state.role = action?.payload?.user?.role
        })
        .addCase(forgotPassword.fulfilled,(state,action)=>{
            localStorage.setItem("resetToken", action?.payload?.resetToken);
            state.resetToken=action?.payload?.resetToken
        })
    }
});

// export const {} = authSlice.actions;
export default authSlice.reducer;