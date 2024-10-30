<script setup>
import navbar from "@/components/modules/menu/navbar.vue";

</script>

<template>
  <div class="w-full h-screen">
    <navbar class="sticky top-0 right-0" />
    <div class="w-full flex-1 overflow-auto">
      <div class="m-2 p-2">
        <RouterView v-slot="{ Component }">
          <component :is="Component" />
        </RouterView>
      </div>
    </div>  
  </div>
</template>
<style>
::-webkit-scrollbar {
  display: none;
}
</style>
