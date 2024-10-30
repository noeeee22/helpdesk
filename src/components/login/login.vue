<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { Post } from "@/api";
import {AuthStore}  from "@/stores/auth/authStore";
import loginn from '@/assets/loginn.jpg'

const router = useRouter();
const pizza = ref();

const errors = ref({});
const email = ref('');
const password = ref('');

const validateemail = () => {
  if (email.value === '') {
    errors.value.email = 'El nombre de usuario es obligatorio';
  } else if (email.value.length < 3) {
    errors.value.email = 'El nombre de usuario debe tener al menos 3 caracteres';
  } else {
    errors.value.email = '';
  }
};

const validatePassword = () => {
  if (password.value === '') {
    errors.value.password = 'La contraseña es obligatoria';
  } else if (password.value.length < 6) {
    errors.value.password = 'La contraseña debe tener al menos 6 caracteres';
  } else {
    errors.value.password = '';
  }
};


const clearError = (field) => {
  errors.value[field] = '';
};

const login = async () => {
  try {
    const apiRes = await Post({
      route: "login",
      data: {
        email: email.value,
        password: password.value,
      },
    });

    if (apiRes.status) {
      const authStore = AuthStore();
      await authStore.login(apiRes.response.data); 
      toast.add({ severity: "success", summary: "Autenticación exitosa", detail: "Iniciando sesión...", life: 3000 });
      // alert("Autenticación exitosa");
      router.push('/panelPrincipal');
    } else {
      errors.value.general = apiRes.error || 'Credenciales incorrectas';
      console.error(apiRes.error);
    }
  } catch (error) {
    errors.value.general = 'Ocurrió un error durante la autenticación';
    console.error(error);
  }
}

// const submitForm = () => {
//   validateemail();
//   validatePassword();
//   if (!errors.value.email && !errors.value.password) {
//     // alert("Formulario enviado con éxito!");
//     login();
//   }
// };
</script>

<template>
  <div class="w-full h-screen flex overflow-hidden">
    <div class="w-full md:w-1/2 h-full flex flex-col justify-center self-center p-6 ">
      <div class="flex flex-col justify-center self-center">
        <div class="flex flex-col mb-3 md:mx-0 mx-8 gap-2 md:text-start text-center">
          <span class="text-3xl font-bold">¡Bienvenido!</span>
          <span class="text-base">Ingresa tus credenciales para acceder</span>
        </div>
        <div class="flex flex-col justify-center gap-4 my-4 md:mx-0 mx-8">
          <div class="flex flex-col gap-2">
            <label for="email">email</label>
            <InputText id="email" type="text" v-model="email" @input="clearError('email')" @blur="validateemail" :class="{'p-invalid': errors.email}" @keydown.enter="login()" autocomplete="false"/>
            <small v-if="errors.email" class="p-error">{{ errors.email }}</small>
        </div>
        <div class="flex flex-col gap-2">
            <label for="password">Password</label>
            <InputText id="password" type="password" v-model="password" @input="clearError('password')" @blur="validatePassword" :class="{'p-invalid': errors.password}" @keydown.enter="login()"/>
            <small v-if="errors.password" class="p-error">{{ errors.password }}</small>
          </div>
        </div>
        <!-- <div class="flex gap-2 my-3 md:mx-0 mx-8">
          <Checkbox inputId="ingredient1" name="pizza" value="Cheese" v-model="pizza"/>
          <label for="ingredient1" class="ml-2 text-sm">Recordarme Contraseña</label>
        </div> -->
        <div class="flex my-2 justify-center md:mx-0 mx-8">
            <Button label="Ingresar" icon="pi pi-user" class="!w-full shadow-md"  style="background-color:#41c3f7; border-color: #41c3f7;" @click="login"/>
        </div>
      </div>
    </div>
    <div class="hidden md:block md:w-1/2 h-full">
      <img
        :src="loginn"
        alt="" class="w-full h-full object-cover">
    </div>


  </div>  
</template>

<style scoped>
.p-error {
  color: red;
  font-size: 0.875em;
}
.p-invalid {
  border-color: red;
}
</style>
