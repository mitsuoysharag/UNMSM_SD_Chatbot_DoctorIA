<template>
  <div>
    <Navegacion/>
    <v-content>
      <v-container grid-list-xl pt-2>
        <v-layout wrap>
          <v-flex xs12 md6 v-for="pregunta in preguntas" :key=pregunta.enunciado>
            <v-card elevation=3>
              <v-card-text>  
                <h2>{{pregunta.enunciado}}</h2>
                <v-radio-group v-model='pregunta.respuesta'>
                  <v-radio v-for="(alternativa, index) in pregunta.alternativas" :key=alternativa :label=alternativa :value='[index, pregunta.enunciado, alternativa]' color="primary"></v-radio>
                </v-radio-group>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

        <div class="text-xs-center mt-3">
          <v-btn color="info" large @click='enviarDatosFormulario'>Guardar</v-btn>
        </div>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Navegacion from '../components/Navegacion'
export default {
  data(){
    return {
      preguntas: [
        new Pregunta('Considera que su descanso es:', ['Prolongado y reparador', 'Intermitente o insomnio', 'Insuficiente']),
        new Pregunta('¿Siente Ud. estrés al dormir?', ['Nunca', 'Rara vez', 'Frecuentemente']),
        new Pregunta('Sus horas de descanso son:', ['8 o más horas', 'De 6 a 7 horas', 'Menos de 6 horas']),
        new Pregunta('¿Siente Ud. somnolencia durante el día?', ['Nunca', 'Rara vez', 'Frecuentemente']),
        new Pregunta('¿Tiene Ud. ronquidos durante el sueño?', ['Nunca', 'Rara vez', 'Frecuentemente']),
        new Pregunta('¿Presenta mal humor e irritabilidad?', ['Nunca', 'Rara vez', 'Frecuentemente'])
        /*new Pregunta('¿Últimamente, ha sentido mucha ansiedad?', ['Si', 'No']),
        new Pregunta('¿Sufre de enfermedades respiratorias?', ['Si', 'No']),
        new Pregunta('¿Usa el movil/PC antes de dormir?', ['Si', 'No']),
        new Pregunta('¿Tiene problemas en el trabajo por sobresueño?', ['Si', 'No']),
        new Pregunta('¿Se siente adormilado durante el día aunque haya dormido toda la noche?', ['Si', 'No']),*/
      ]
    }
  },
  methods: {
    enviarDatosFormulario() {
      console.log(this.preguntas.map(pregunta => pregunta.respuesta[0]))
      this.$router.push('chat')
    }
  },
  components: {
    Navegacion
  }
}
class Pregunta {
  constructor(enunciado, alternativas) {
    this.enunciado = enunciado;
    this.alternativas = alternativas;
    this.respuesta = ['', '', ''];
  }
}
</script>

<style scoped>

</style>
