<script setup>
import { ref, onMounted } from 'vue';
import FormAgents from '../modal/FormAgents.vue';
import { Get } from '@/api';

const loadingTable = ref(false);
const dataForTable = ref([]);

const Agents = ref ({
    name: null,
    last_name: null,
    phone: null,
    registered_date: null,
    user: null,
    occupation: null
})

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
onMounted(()=>{
    GetInfoAgents()
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
                <DataTable  paginator :rows="14" dataKey="id" size="small" :data="Agents" :model="GetInfoAgents">
                    <template #header>
                        <div class="flex justify-between items-center mb-4">
                            <div>
                                <span class="font-bold text-xl">LISTA AGENTES</span>
                            </div>
                            <div class="flex justify-end gap-5">
                                <div>
                                    <modal
                                        :title="'Agregar Usuario'"
                                        :width="96"
                                        :component="FormAgents"
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
                    <template #empty>No se encontraron Agentes. </template>
                    <Column field="name" key="name" header="Nombre" style="min-width: 12rem"/>
                    <Column field="last_name" header="Apellidos" style="min-width: 12rem"/>
                    <Column field="phone" header="Telefono" style="min-width: 12rem"/>
                    <Column field="user" header="Usuario" style="min-width: 12rem"/>
                    <Column field="occupation" header="Ocupacion" style="min-width: 12rem"/>
                </DataTable>
            </div>
        </template>
    </Card>
</template>
