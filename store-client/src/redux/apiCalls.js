import { publicRequest, privateRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";

export const login = async (dispatch, user) => {
    console.log(user);
    dispatch(loginStart());
    try {
        //const res = await publicRequest.post("/auth/login", user);
        //const res = await publicRequest.post("/auth/local", user, { withCredentials: true });
        const res = await privateRequest.post("/auth/local", user);
        dispatch(loginSuccess(res.data));
        /*const res = {
            username: "Baraka",
            email: "i@i.com",
            isAdmin: false
        };
        dispatch(loginSuccess(res));*/
    } catch(err){
        dispatch(loginFailure(err.data.code));
    }
};

export const register = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await privateRequest.post("/auth/register", user);
        dispatch(loginSuccess(res.data));
    } catch(err){
        console.log("codigo de erro: ", err.response.data.code);
        const code = err.response.data.code || 0;
        dispatch(loginFailure(code));
    }
};