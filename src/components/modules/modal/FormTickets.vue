<script setup>
import { ref } from 'vue';

const value = ref('');
const ticket = ref('');

const Tickets = ref ({
    title: null,
    description: null,
    client: null,
    image: null,
})

async function GetInfoTickets(){
    loadingTable.value= true;
    const apiRes = await Get({
        route: "ticket"
    });
    if(apiRes.status){
        dataForTable.value = apiRes.response.data.results;
    } else{
        dataForTable.value = []
    }
    loadingTable.value = false;
}
// onMounted(()=>{
//     GetInfoTickets()
// });

</script>

<template>
    <div class="items-center">
        <!-- <div class="grid grid-cols-1 md:grid-cols-12 gap-4 mb-3">
            <div class="col-span-12 flex flex-col">
                <label for="username">Ticket</label>
                <InputText id="username" v-model="ticket" aria-describedby="username-help" class="col-span-10" />
            </div>
        </div> -->
        <div class="grid grid-cols-12 gap-4 my-4">
            <div class="flex flex-col col-span-12 md:col-span-6">
                <label for="title">Titulo</label>
                <InputText id="title" v-model="ticket" aria-describedby="username-help" class="col-span-10" />
            </div>
            <div class="flex flex-col col-span-12 md:col-span-6">
                <label for="client">Cliente</label>
                <InputText id="client" v-model="ticket" aria-describedby="username-help" class="col-span-10" />
            </div>
            <div class="flex flex-col col-span-12 md:col-span-6">
                <label for="description">Descripcion</label>
                <InputText id="description" v-model="ticket" aria-describedby="username-help" class="col-span-10" />
            </div>
            <div class="flex flex-col col-span-12 md:col-span-6">
                <label for="Image">Imagen</label>
                <InputText id="Image" v-model="ticket" aria-describedby="username-help" class="col-span-10" />
            </div>

        </div>
        <!-- <div>

            <label for="">Asunto</label>
            <Editor v-model="value" editorStyle="height: 240px" class="mb-3" />
        </div> -->
        <Button label="Registrar" class=" w-full !bg-cyan-600 !border-none hover:!bg-cyan-500" @click="GetInfoAgents"/>
    </div>
</template>