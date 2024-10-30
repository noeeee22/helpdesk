import router from "@/router/index.js"
import { defineStore } from "pinia";


export const AuthStore = defineStore("authStore", {
    state: () => ({
        authToken: localStorage.getItem("authToken") ? {
            ...JSON.parse(localStorage.getItem("authToken"))
        } : null,
    }),

    actions: {
        async login(data){
            this.authToken = data;
            localStorage.setItem('authToken', JSON.stringify(data))
            await router.push({name: 'panelPrincipal'})
        },
        async logout(){
            this.authToken = null;
            localStorage.removeItem('authToken');
            await router.push({ name: "login" });

            // this.authToken = null;
            // this.infoCollector = null;
            // useCookie.remove("authToken", { path:"/" });
            // useCookie.remove("infoCollector", { path: "/" });
            // await router.push({ name: "login" });

            // const cookies = useCookies(["authToken"]);
            // cookies.remove("authToken", { path: "/" });
            // cookies.remove("infoCollector", { path: "/" });
            // localStorage.clear();
        }
    }
})