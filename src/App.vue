<script setup>
import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';
</script>

<template>

  <div class="grid">
    <router-view />
  </div>
  <Toast />
  <Dialog />

</template>
