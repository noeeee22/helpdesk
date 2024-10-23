<script setup>
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';

</script>


<template>
    <div class="container mx-auto p-4 md:my-5 ">
        <div class="justify-center items-center" style="width: 25rem">
            <Card>
                <template #title>
                    <div class="flex flex-col">
                        <Tag severity="danger" value="Danger" class="w-16"></Tag>
                        <span class="justify-center items-center"> Simple Card</span>
                    </div>
                </template>
                <template #subtitle>
                    <span class="m-0">
                        ghgjghg
                    </span>
                </template>
                <template #footer>
                    <div class="flex">
                        <Avatar icon="pi pi-user" class="mr-2" size="large"
                            style="background-color: #ece9fc; color: #2a1261" shape="circle" />

                        <div class="flex flex-col">
                            <span>Nombre</span>
                            <span>nombrecito</span>
                        </div>
                    </div>
                </template>
            </Card>
        </div>
    </div>





    <template>
        <div class="card">
            <Toast />
            <Panel toggleable>
                <template #header>
                    <div class="flex items-center gap-2">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="large"
                            shape="circle" />
                        <span class="font-bold">Amy Elsner</span>
                    </div>
                </template>
                <template #footer>
                    <div class="flex flex-wrap items-center justify-between gap-4">
                        <div class="flex items-center gap-2">
                            <Button icon="pi pi-user" rounded text></Button>
                            <Button icon="pi pi-bookmark" severity="secondary" rounded text></Button>
                        </div>
                        <span class="text-surface-500 dark:text-surface-400">Updated 2 hours ago</span>
                    </div>
                </template>
                <template #icons>
                    <Button icon="pi pi-cog" severity="secondary" rounded text @click="toggle" />
                    <Menu ref="menu" id="config_menu" :model="items" popup />
                </template>
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut
                    aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit
                    anim id est laborum.
                </p>
            </Panel>
        </div>
    </template>





</template>
