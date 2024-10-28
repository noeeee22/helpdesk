<script setup>

</script>

<template>
    <div class="flex md:justify-center w-full h-full p-5">
        <Card class="!w-full md:!mx-5 ">
            <template #title >TICKETS NO RESUELTOS</template>
            <template #content>
                <div>
                    <div class="flex items-center justify-between mt-5">
                        <span>Melany Vasquez</span>
                        <Tag severity="warn" class="borde">Sin revisar</Tag>
                    </div>
                    <Divider type="solid" />
                </div>
                <div>
                    <div class="flex items-center justify-between mt-5">
                        <span>panchita </span>
                        <Tag severity="warn" class="borde">Sin revisar</Tag>
                    </div>
                    <Divider type="solid" />
                </div>

            </template>
        </Card>
    </div>
</template>