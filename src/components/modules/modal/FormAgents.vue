<script setup>
import { ref } from 'vue';
const date = ref()

const value = ref('');
const ticket = ref('');

const selectedAvailability = ref();
const availability = ref([
    { name: 'Disponible', code: 'Ds' },
    { name: 'Ocupado', code: 'Oc' },
]);

const selectedAgent = ref();
const agent = ref([
    { name: 'Milaneso', code: 'NY' },
    { name: 'Naranjo', code: 'RM' },
    { name: 'igriega', code: 'LDN' },
]);

const selectedRol = ref();
const rol = ref([
    { name: 'Admin', code: 'AM' },
    { name: 'Agente', code: 'AG' },
    { name: 'Usuario', code: 'US' },
]);

</script>

<template>
    <div class="items-center">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 mb-3">
            <div class="col-span-12 flex flex-col">
                <div class="grid grid-cols-12 gap-4 my-4">
                    <div class="flex flex-col col-span-12 md:col-span-6">
                        <label for="username">Asignar Agente</label>
                        <Select v-model="selectedAgent" :options="agent" optionLabel="name" placeholder="Seleccione un agente"
                        class="w-full"/>
                    </div>
                    <div class="flex flex-col col-span-12 md:col-span-6">
                        <label for="username">Rol</label>
                        <Select v-model="selectedRol" :options="rol" optionLabel="name" placeholder="Seleccione el estado"
                        class="w-full"/>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-4 my-4">
                    <div class="flex flex-col col-span-12 md:col-span-4">
                        <label for="username">Tickets Asignados</label>
                        <Select optionLabel="name" placeholder="Seleccione un agente"
                        class="w-full"/>
                    </div>
                    <div class="flex flex-col col-span-12 md:col-span-4">
                        <label for="username">Ultima asignación</label>
                        <DatePicker v-model="date" dateFormat="dd/mm/yy"/>
                    </div>
                    <div class="flex flex-col col-span-12 md:col-span-4">
                        <label for="username">Disponiblidad</label>
                        <Select v-model="selectedAvailability" :options="availability" optionLabel="name" placeholder="Seleccione el estado"
                        class="w-full"/>
                    </div>
                </div>
            </div>
        </div>
        
        <Button label="Registrar" class=" w-full !bg-cyan-600 !border-none hover:!bg-cyan-500" />
    </div>
</template>