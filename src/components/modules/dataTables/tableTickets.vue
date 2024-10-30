<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/tetas';
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';
import FormTickets from '../modal/FormTickets.vue';
import { Get } from '@/api';

const loadingTable = ref(false);
const dataForTable = ref([]);

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
onMounted(()=>{
    GetInfoTickets()
});


// const formatDate = (value) => {
//     return value.toLocaleDateString('es-PE', {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric'
//     });
// };

</script>

<template>
    <Card>
        <template #content>
            <div class="">
                <DataTable paginator :rows="14" dataKey="id" size="small" :data="Tickets" :model="GetInfoTickets">
                    <template #header>
                        <div class="flex justify-between items-center mb-4">
                            <div>
                                <span class="font-bold text-xl">LISTA TICKETS</span>
                            </div>
                            <div class="flex justify-end gap-5">
                                <div>
                                    <modal
                                        :title="'Agregar Ticket'"
                                        :width="80"
                                        :component="FormTickets"
                                       />
                                </div>
                                <IconField>
                                    <InputIcon>
                                        <i class="pi pi-search" />
                                    </InputIcon>
                                    <InputText placeholder="Búsqueda" />
                                </IconField>
                            </div>
                        </div>
                    </template>
                    <template #empty> No se encontraron tickets. </template>
                    <Column field="title" header="Titulo" style="min-width: 12rem"/>
                    <Column field="phone" header="Cliente" style="min-width: 12rem"/>
                    <Column field="last_name" header="Descripción" style="min-width: 12rem"/>
                    <Column field="user" header="Imagen" style="min-width: 12rem"/>
                </DataTable>
            </div>
        </template>
    </Card>
</template>
