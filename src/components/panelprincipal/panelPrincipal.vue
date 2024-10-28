<script setup>
import panel from './panel.vue';
import list from './list.vue';
</script>
<template>
    <div class="flex flex-col md:flex-row md:mx-8 md:items-start md:gap-4">
        <div class="md:w-3/5">
      <panel />
    </div>
    <div class="md:w-2/5 mt-4 md:mt-4">
      <list />
    </div>
    </div>
</template>