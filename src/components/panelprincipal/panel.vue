<script setup>
import Card from "primevue/card";
import moradito from "@/assets/moradito.png";
import celestito from "@/assets/celestito.png";
import verdecito from "@/assets/verdecito.png";
import amarillito from "@/assets/amarillito.png";

import "primeicons/primeicons.css";

const props = defineProps({
  title: String,
  number: Number,
  icon: String,
  img: String,
});

const PlanesCard = [
  {
    icon: "pi pi-hourglass",
    title: "PENDIENTE",
    subtitle: "Tickets que requieren atención",
    number: 10,
    img: moradito,
  },
  {
    icon: "pi pi-sync",
    title: "EN PROCESO",
    subtitle: "Tickets en desarrollo",
    number: 67,
    img: amarillito,
  },
  {
    icon: "pi pi-check-circle",
    title: "CONCLUIDO",
    subtitle: "Tickets completados",
    number: 156,
    img: verdecito,
  },
  {
    icon: "pi pi-users",
    title: "AGENTES",
    subtitle: "Empleados activos",
    number: 10,
    img: celestito,
  },
];
</script>

<template>
  <div class="container mx-auto p-4 md:my-5 ">
    <div class="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 gap-4 ">
      <div v-for="(plan, index) in PlanesCard" :key="index" class="col-span-3 ">
        <div class="h-48 w-full flex flex-col justify-between relative rounded-lg shadow-md gap-2 p-5"
          style="background-color: rgba(255, 255, 255, 0.8);">
          <div class="flex items-center">
            <i :class="`mr-2 ${plan.icon}`" style="font-size: 1.5rem" />
            <span class="font-bold text-xl">{{ plan.title }}</span>
          </div>
          <p class="text-base justify-center text-gray-800">{{ plan.subtitle }}</p>

          <span class="text-gray-800 flex justify-end items-start font-semibold text-3xl z-10">{{ plan.number }}</span>
          <img :src="plan.img" alt="tetas"
            class="absolute bottom-0 right-0 left-0 w-full h-20 object-cover rounded-md" />
        </div>
      </div>
    </div>
  </div>
</template>
