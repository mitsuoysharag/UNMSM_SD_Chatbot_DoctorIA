<template>
  <v-layout class="componente-login" align-center justify-center>
    <v-flex xs12 sm7 md5 lg3 px-2>
      <v-card class="px-3">
        <v-form ref="form" action="formulario">
        <v-card-text>
          <h3 class="headline mt-2 mb-4 text-xs-center">Iniciar Sesión</h3>
          <v-text-field
            v-model="usuario"
            :rules="usuarioRules"
            label="Usuario"
          ></v-text-field>
          <v-text-field
            v-model="contraseña"
            :rules="contraseñaRules"
            label="Contraseña"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn class="mb-2" @click='iniciarSesion' block flat color="blue" >Iniciar Sesión</v-btn>
        </v-card-actions>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      usuario: '',
      contraseña: '',
      usuarioRules: [v => !!v || 'Usuario es requerido'],
      contraseñaRules: [v => !!v || 'Contraseña es requerida'],
    }
  },
  methods: {
    iniciarSesion() {
      if (this.$refs.form.validate()) {
        this.$router.push('inicio')
      }
    }
  }
}
</script>

<style scoped>
.componente-login::before {
  content: "";
  position: absolute;
  width: 100%; height: 100%;
  background-image: url('~@/assets/background.jpg');
  background-size: cover;
  filter: blur(1.5px) sepia(30%)
}
</style>
