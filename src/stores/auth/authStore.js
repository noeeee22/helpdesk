import router from "@/router/index.js"
import { defineStore } from "pinia";

const useCookie = useCookies(["authToken"]);
export const AuthStore = defineStore("authStore", {

    state: () => ({
        authToken: localStorage.getItem("authToken") ? {
            ...JSON.parse(localStorage.getItem("authToken")) || null
        } : null,
    }),

    actions: {
        async login(data){
            this.authToken = data;
            localStorage.setItem('authToken', JSON.stringify(data))
            await router.push({name: 'home'})//cambiar
        },
        async logout(){
            this.authToken = null;
            this.infoCollector = null;
            useCookie.remove("authToken", { path:"/" });
            useCookie.remove("infoCollector", { path: "/" });
            await router.push({ name: "login" });
            localStorage.clear();
        }
    }
})