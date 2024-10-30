<script setup>
import { ref } from 'vue';
const date = ref()

const value = ref('');
const agentt = ref('');

async function GetInfoAgents(){
    loadingTable.value= true;
    const apiRes = await Get({
        route: "agent"
    });
    if(apiRes.status){
        dataForTable.value = apiRes.response.data.results;
    } else{
        dataForTable.value = []
    }
    loadingTable.value = false;
}
// onMounted(()=>{
//     GetInfoAgents()
// });

</script>

<template>
    <div class="items-center">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 mb-3">
            <div class="col-span-12 flex flex-col">
                <div class="grid grid-cols-12 gap-4 my-4">
                    <div class="flex flex-col col-span-12 md:col-span-6">
                        <label for="name">Nombres</label>
                        <InputText id="name" v-model="agentt" aria-describedby="username-help" class="col-span-10" />
                    </div>
                    <div class="flex flex-col col-span-12 md:col-span-6">
                        <label for="last_name">Apellidos</label>
                        <InputText id="last_name" v-model="agentt" aria-describedby="username-help" class="col-span-10" />                       
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-4 my-4">
                    <div class="flex flex-col col-span-12 md:col-span-4">
                        <label for="phone">Telefono</label>
                        <InputText id="phone" v-model="agentt" aria-describedby="username-help" class="col-span-10" />                        
                    </div>
                    <div class="flex flex-col col-span-12 md:col-span-4">
                        <label for="user">Usuario</label>
                        <InputText id="user" v-model="agentt" aria-describedby="username-help" class="col-span-10" />
                        <!-- <DatePicker v-model="date" dateFormat="dd/mm/yy"/> -->
                    </div>
                    <div class="flex flex-col col-span-12 md:col-span-4">
                        <label for="occupation">Ocupacion</label>
                        <InputText id="occupation" v-model="agentt" aria-describedby="username-help" class="col-span-10" />
                    </div>
                </div>
            </div>
        </div>
        
        <Button label="Registrar" class=" w-full !bg-cyan-600 !border-none hover:!bg-cyan-500" @click="GetInfoAgents"/>
    </div>
</template>