<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/tetas';
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';
import FormTickets from '../modal/FormTickets.vue';

const customers = ref();
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS }
});
const representatives = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png' },
    { name: 'Anna Fali', image: 'annafali.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    { name: 'Onyama Limba', image: 'onyamalimba.png' },
    { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    { name: 'XuXue Feng', image: 'xuxuefeng.png' }
]);
const statuses = ref(['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal']);
const loading = ref(true);

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => {
        customers.value = getCustomers(data);
        loading.value = false;
    });
});

const getCustomers = (data) => {
    return [...(data || [])].map((d) => {
        d.date = new Date(d.date);

        return d;
    });
};
const getSeverity = (status) => {
    switch (status) {
        case 'unqualified':
            return 'danger'; // Color rojo
        case 'qualified':
            return 'success'; // Color verde
        case 'new':
            return 'info'; // Color azul
        case 'negotiation':
            return 'warn'; // Color amarillo
        case 'renewal':
            return null; // Sin color
    }
}

const getStatusLabel = (status) => {
    switch (status) {
        case 'unqualified':
            return 'Alta'; // Muestra "Alta" en lugar de "unqualified"
        case 'qualified':
            return 'Baja'; // Muestra "Baja" en lugar de "qualified"
        case 'new':
            return 'Media'; // Muestra "Media" en lugar de "new"
        default:
            return status; // Muestra el estado tal como está si no coincide con ninguno de los anteriores
    }
}



const formatDate = (value) => {
    return value.toLocaleDateString('es-PE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};

</script>

<template>
    <Card>
        <template #content>
            <div class="">
                <DataTable v-model:filters="filters" :value="customers" paginator :rows="14" dataKey="id"
                    filterDisplay="row" :loading="loading"
                    :globalFilterFields="['name', 'country.name', 'representative.name', 'status']" size="small">
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
                                    <InputText v-model="filters['global'].value" placeholder="Búsqueda" />
                                </IconField>
                            </div>
                        </div>
                    </template>
                    <template #empty> No se encontraron clientes. </template>
                    <template #loading>Cargando datos de clientes. Por favor espere. </template>
                    <Column field="name" header="Nombre" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.name }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()"
                                placeholder="Buscar por Nombre" />
                        </template>
                    </Column>
                    <Column field="last_name" header="Asunto" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.last_name }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()"
                                placeholder="Buscar por Nombre" />
                        </template>
                    </Column>
                    <Column header="registered_date" filterField="date" dataType="date" style="min-width: 10rem">
                        <template #body="{ data }">
                            {{ formatDate(data.date) }}
                        </template>
                        <template #filter="{ filterModel }">
                            <DatePicker v-model="filterModel.value" dateFormat="dd/mm/yy" placeholder="mm/dd/yyyy" />
                        </template>
                    </Column>
                    <Column header="Agente" filterField="representative" :showFilterMenu="false"
                        style="min-width: 14rem">
                        <template #body="{ data }">
                            <div class="flex items-center gap-2">
                                <img :alt="data.representative.name"
                                    :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`"
                                    style="width: 32px" />
                                <span>{{ data.representative.name }}</span>
                            </div>
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()"
                                :options="representatives" optionLabel="name" placeholder="Any" style="min-width: 14rem"
                                :maxSelectedLabels="1">
                                <template #option="slotProps">
                                    <div class="flex items-center gap-2">
                                        <img :alt="slotProps.option.name"
                                            :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`"
                                            style="width: 32px" />
                                        <span>{{ slotProps.option.name }}</span>
                                    </div>
                                </template>
                            </MultiSelect>
                        </template>
                    </Column>
                    <Column field="status" header="Estado" :showFilterMenu="false" style="min-width: 12rem">
                        <template #body="{ data }">
                            <Tag :value="getStatusLabel(data.status)" :severity="getSeverity(data.status)" />
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <Select v-model="filterModel.value" @change="filterCallback()" :options="statuses"
                                placeholder="Seleciona uno" style="min-width: 12rem" :showClear="true">
                                <template #option="slotProps">
                                    <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                                </template>
                            </Select>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </template>
    </Card>
</template>
