<script setup>
import { ref } from "vue";
import Dialog from 'primevue/dialog';
const date = ref()

const visible = ref(false);

const props = defineProps({ 
    title: "String",
    width: Number,
    component: Object,
});

</script>
<template>
    <div class="card flex justify-center">
        <Button icon="pi pi-plus-circle" severity="contrast" @click="visible = true" class="!bg-cyan-600 !border-none" />
        <Dialog v-model:visible="visible" modal :header="props.title" :style="{ width: props.width + 'vh'}">
               <component :is="props.component" />
        </Dialog>
    </div>
</template>
