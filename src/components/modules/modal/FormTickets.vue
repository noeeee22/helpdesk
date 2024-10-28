<script setup>
import { ref } from 'vue';

const value = ref('');
const ticket = ref('');

const selectedState = ref();
const state = ref([
    { name: 'Alta', code: 'NY' },
    { name: 'Media', code: 'RM' },
    { name: 'Baja', code: 'LDN' },
]);

const selectedAgent = ref();
const agent = ref([
    { name: 'Milaneso', code: 'NY' },
    { name: 'Naranjo', code: 'RM' },
    { name: 'igriega', code: 'LDN' },
]);

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
                <label for="username">Ticket</label>
                <InputText id="username" v-model="ticket" aria-describedby="username-help" class="col-span-10" />
            </div>
            <div class="flex flex-col col-span-12 md:col-span-6">
                <label for="username">Asunto</label>
                <InputText id="username" v-model="ticket" aria-describedby="username-help" class="col-span-10" />
            </div>
            <div class="flex flex-col col-span-12 md:col-span-6">
                <label for="username">Estado</label>
                <Select v-model="selectedState" :options="state" optionLabel="name" placeholder="Seleccione el estado"
                class="w-full"/>
            </div>
            <div class="flex flex-col col-span-12 md:col-span-6">
                <label for="username">Asignar Agente</label>
                <Select v-model="selectedAgent" :options="agent" optionLabel="name" placeholder="Seleccione un agente"
                class="w-full"/>
            </div>

        </div>
        <div>

            <label for="">Asunto</label>
            <Editor v-model="value" editorStyle="height: 240px" class="mb-3" />
        </div>
        <Button label="Registrar" class=" w-full !bg-cyan-600 !border-none hover:!bg-cyan-500"/>
    </div>
</template>