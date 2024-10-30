import axios from 'axios'
import { AuthStore } from './stores/auth/authStore';

let baseURL = import.meta.env.VITE_APP_URL;
const instance_axios = axios.create({ baseURL });
let has_server_connection = true

instance_axios.interceptors.request.use(
    async (conf)=>{
        if(localStorage.getItem('authToken')){
            conf.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('authToken').token || '')}`
        }else{
            conf.headers.Authorization="";
        }
        return conf;
    },
    async function (error){
        const useAuthStore = AuthStore();
        console.log(error);
        if(has_server_connection){
            message.error("Error de Servidor");
        }
        if (error.code === "ERR_NETWORK") {
            has_server_connection = false;
        }

        if (error.request.status === 401 && error.request.code === "token_not_valid") {
            await useAuthStore.logout();
        }
        return Promise.reject(error);
    });

instance_axios.interceptors.response.use(
    async (conf) => {
        has_server_connection = true
        return conf;
    },
    async function (error) {
        const useAuthStore = AuthStore();
        if (error.request.status === 401 && error.request.statusText === "Unauthorized") {
            console.log(error.request)
            await useAuthStore.logout();
        } else {
            if (error.response?.data && error.response.headers['content-type'] !== "text/html; charset=utf-8") {
                await GenerateErrorMessage(error.response.data);
            } else {
                if (error.code === "ERR_NETWORK") {
                    has_server_connection = false;
                }
            }
        }
    return Promise.reject(error);
})

async function GenerateErrorMessage(errors) {
    const getStore = storeLayout;
    const useAuthStore = AuthStore();
    const useSidebarStore = getStore.sidebarStore();

    const useGlobalDataInformationStore = getStore.globalInformationStore();

    for (const property in errors) {
        if (typeof errors[property] === "string") {
            if (property !== "code") {
                message.error(JSON.stringify(errors));
            } else {
                if (errors[property] === "user_inactive") {
                    useSidebarStore.ResetSideBarStore();
                    await useGlobalDataInformationStore.ResetGlobalStates();
                    return useAuthStore.logout();
                }
            }
        } else {
            if (Array.isArray(errors[property])) {
                message.error(JSON.stringify(errors));
            }
        }
    }
}

export async function Get (props) {
    let res = {};
    try{
        res.status=true;
        res.response= await instance_axios.get(`api/${props.route}/`,{params: props.params || {}});
    } catch(error){
        console.log(error);
        res.status = false;
        res.error = error;
    }
    return res;
}

export async function Post (props) {
    let res = {};
    try{
        res.status= true;
        res.response= await instance_axios.post(`api/${props.route}/`,props.data);
    } catch(error){
        console.log(error);
        res.error= error;
    }
}

export async function Put(props) {
    let res = {};
    try {
        res.response = await instance_axios.put(`api/${props.route}/`, props.data);
    } catch (error) {
        console.log(error);
        res.status = false;
        res.error = error;
    }
    return res;
}

export async function Destroy(props) {
    let res = {};
    try {
        res.status = true;
        res.response = await instance_axios.delete(`${props.route}/`);
    } catch (error) {
        console.log(error);
        res.status = false;
        res.error = error;
    }
    return res;
}