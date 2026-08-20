import { authController } from "@/api/controllers/auth-controller";
import router from "@/router";
import { defineStore } from "pinia";
import { useNoteStore } from "./notes";


export const useAuthStore = defineStore("auth", {
    state: () => {
        return {
            username: "",
            password: "",
            error: ""
        }
    },
    actions: {
        reset () {
            this.username = '',
            this.password = '',
            this.error = ''
        },
        
        login() {

            if (this.username && this.password) {
                authController.login(
                    {
                        login: this.username,
                        password: this.password
                    }
                ).then(response => {
                    console.log(response)

                    localStorage.setItem('token', response.data.token)
                    console.log('Успешно!', response.data);
                    this.reset()
                    router.replace("/")

                }

                ).catch(e => {
                    this.error = e
                })
            }
        },
        register() {
            console.log("yes")
            if (this.username && this.password) {
                authController.register(
                    {
                        username: this.username,
                        password: this.password
                    }
                ).then(response => {
                    console.log(response)

                    localStorage.setItem('token', response.data.token)
                    console.log('Успешно!', response.data);
                    this.reset()
                    router.replace("/")

                }

                )
            }
        },
        checkAuth() {
            if (!localStorage.getItem("token")) {
                router.replace('/login')
            }
        },
        logout() {
            const noteStore = useNoteStore();
            noteStore.reset()
            localStorage.removeItem('token')
            router.replace('/login')
        }
    }
})