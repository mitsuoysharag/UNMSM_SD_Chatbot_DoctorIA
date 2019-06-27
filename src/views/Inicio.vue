<template>
  <div>
    <Navegacion/>
    <v-content>
      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex sx12 md6 lg4>
            <v-card elevation=3>
              <v-card-text>  
                <h2 class="pb-3">Charla con Doctor IA</h2>
                <p>Último diagnóstico <strong>{{fecha}}</strong></p>
                <!-- <v-progress-linear color="success" height="5" :value="porcentajeCompletado(resultado.completado)"></v-progress-linear> -->
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click='ingresarFormulario' flat color="blue">Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Navegacion from '../components/Navegacion'
export default {
  data () {
    return {
      fecha: '22/06/2019'
    }
  },
  methods: {
    ingresarFormulario() {
      this.$router.push('chat')
    }
  },
  components: {
    Navegacion
  }
}

class Resultado {
  constructor(id, completado) {
    this.id = id
    this.completado = completado
  }
}
</script>

<style>

</style>
