import { api } from "..";

export const authController = {
    // login
    login: (data) => {
        console.log(data);
        return api.post('/api/v1/auth/login', data);
    },
    register: (data) => {
        console.log(data);
        return api.post('/api/v1/auth/register', data);
    }

}