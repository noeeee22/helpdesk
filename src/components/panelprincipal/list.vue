<script setup>

</script>

<template>
    <div class="flex justify-start md:ml-10">
        <Card class="!md:w-96 !m-4 !p-2 ">
            <template #title >TICKETS NO RESUELTOS</template>
            <template #content>
                <div>
                    <div class="flex items-center justify-between mt-5">
                        <span>Melany Vasquez</span>
                        <Tag severity="warn" class="borde">Sin revisar</Tag>
                    </div>
                    <Divider type="solid" />
                </div>

            </template>
        </Card>
    </div>
</template>