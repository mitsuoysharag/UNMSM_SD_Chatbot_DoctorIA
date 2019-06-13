<template>
  <div>
    <Navegacion/>
    <v-content>
      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex sx12 md6 lg4 v-for="resultado in resultados" :key=resultado.id>
            <v-card elevation=3>
              <v-card-text>  
                <h2 class="pb-3">Descanso</h2>
                <p>Completado {{resultado.completado}}/{{totalPreguntas}}</p>
                <v-progress-linear color="success" height="5" :value="porcentajeCompletado(resultado.completado)"></v-progress-linear>
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
      totalPreguntas: 6,
      resultados: [
        new Resultado(1, Math.round(Math.random()*7))
      ]
    }
  },
  methods: {
    ingresarFormulario() {
      this.$router.push('formulario')
    },
    porcentajeCompletado(n) {
      return n*100/this.totalPreguntas
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
