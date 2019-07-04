<template>
  <v-layout class="componente-login" align-center justify-center>
    <div class="componente-color"></div>
    <v-flex xs12 sm7 md5 lg3 px-2>
      <v-card style="max-width: 600px" class="pa-4">
        <v-form ref="form" @submit.prevent="iniciarSesion">
          <v-card-text class="pb-1">
            <h1 class="text-xs-center pb-3">Bienvenido</h1>
            <img
              class="mt-1 mb-5"
              src="../assets/bot.png"
              width="80px"
              style="display: block; margin: 0 auto"
            />
            <v-alert class="mb-4" v-model="alert" dismissible outline color="error">Usuario o contraseña incorrecta</v-alert>
            <v-text-field v-model="usuario" :rules="usuarioRules" label="Usuario"></v-text-field>
            <v-text-field
              v-model="contraseña"
              :rules="contraseñaRules"
              label="Contraseña"
              type="password"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn
              class="mt-4"
              @click="iniciarSesion"
              round
              block
              dark
              color="blue"
              type="submit"
            >Iniciar Sesión</v-btn>
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
      alert: false,
      usuario: "",
      contraseña: "",
      usuarioRules: [v => !!v || "Usuario es requerido"],
      contraseñaRules: [v => !!v || "Contraseña es requerida"]
    };
  },
  methods: {
    iniciarSesion() {
      if (this.$refs.form.validate()) {
        if (this.usuario == "usuario" && this.contraseña == "123") {
          this.$router.push("inicio");
        } else {
          this.alert = true;
        }
      }
    }
  }
};
</script>

<style scoped>
.componente-login::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/background.jpg");
  background-size: cover;
  filter: blur(2px);
}
.componente-color {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(4, 1, 68, 0.9);
}
</style>
