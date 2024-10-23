<script setup>
import "primeicons/primeicons.css";
import Avatar from "primevue/avatar";
import miau from "@/assets/miau.jpg";
import Tag from 'primevue/tag';


const props = defineProps({
    title: String,
    number: Number,
    icon: String,
    img: String,
});

const PlanesCard = [
    {
        icon: "pi pi-book",
        nombre: "Jade Ines",
        lastname: "Santos Rosa",
        title: "Nuevo diseño de formularios",
        img: miau,
        state: "success",
        contend: "Baja",
        subtitle: "Tickets que requieren atención",
        number: 10,
    },
    {
        icon: "pi pi-pencil",
        nombre: "Noah ",
        lastname: "Flores del Campo",
        title: "Endpoints de falabela",
        img: miau,
        state: "danger",
        contend: "Alta",
        subtitle: "Tickets en desarrollo",
        number: 67,
    },
    {
        icon: "pi pi-check-circle",
        nombre: "Marco Polo",
        lastname: "Diaz Muñoz",
        title: "Web de falabela",
        img: miau,
        state: "info",
        contend: "Media",
        subtitle: "Fecjsdsj 12323 565 ",
        number: 156,
    },

];
</script>

<template>
    <div class="container mx-auto p-4 md:my-5 ">
        <div class="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 gap-3 ">
            <div v-for="(plan, index) in PlanesCard" :key="index" class="col-span-4 ">
                <div class="h-48 w-full flex flex-col justify-between relative rounded-lg shadow-md gap-2 p-5"
                    style="background-color: rgba(255, 255, 255, 0.8);">
                    <div class="flex">
                        <img :src="plan.img" alt="Avatar" class="mr-2 w-16 h-16 rounded-full" />

                        <div class="flex flex-col">
                            <span>{{ plan.nombre }}</span>
                            <span>{{ plan.lastname }}</span>
                            <Tag :severity="plan.state" :value="plan.contend" class="w-16"></Tag>
                        </div>
                    </div>
                    <div class="flex flex-col items-end justify-end">
                        <span class="font-bold text-md ">{{ plan.title }}</span>

                        <span class="text-sm justify-center">{{ plan.subtitle }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
