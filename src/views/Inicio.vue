<template>
  <div>
    <Navegacion/>
    <v-content>
      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex sx12 md6 lg4>
            <v-card elevation="3">
              <v-card-text>
                <h2 class="pb-3">Charla con Doctor IA</h2>
                <p>
                  Último diagnóstico:
                  &nbsp;&nbsp;<strong>{{fecha}}</strong>
                </p>
                <v-progress-linear :color="cuestionario_color" height="5" :value="cuestionario_diabetes">12</v-progress-linear>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="ingresarFormulario" flat color="blue">Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Navegacion from "../components/Navegacion";
export default {
  data() {
    return {
      cuestionario_diabetes: 0,
      cuestionario_color: "",
      fecha: "22/06/2019"
    };
  },
  mounted() {
    this.cuestionario_diabetes = Math.random() * 100;
    this.cuestionario_color =
      this.cuestionario_diabetes > 66
        ? "red"
        : this.cuestionario_diabetes > 33
        ? "#ff9b00"
        : "green";
  },
  methods: {
    ingresarFormulario() {
      this.$router.push("chat");
    }
  },
  components: {
    Navegacion
  }
};

class Resultado {
  constructor(id, completado) {
    this.id = id;
    this.completado = completado;
  }
}
</script>

<style>
</style>
