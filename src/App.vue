<template>
  <v-app id="app">
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Pilar de Descanso</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <Formulario/>
    </v-content>
  </v-app>
</template>

<script>
import Formulario from './components/Formulario'

export default {
  components: {
    Formulario
  }
}
</script>

<style>
#app {
  
}

h2 {
  color: #4e4e4e
}
</style>
