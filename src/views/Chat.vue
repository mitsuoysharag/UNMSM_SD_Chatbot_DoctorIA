<template>
  <v-content class="chat-vista">
    <Navegacion />
    <v-container grid-list-xl style="height: 100%">
      <v-layout justify-center wrap style="height: 100%">
        <v-flex xs12 md6 style="height: 100%">
          <v-card class="elevation-6 fill-height">
            <div class="chat-componente" style="height: 100%">
              <v-container id="chat-ventana">
                <v-layout column>
                  <v-flex v-for="(mensaje, index) in mensajes" :key="index">
                    <v-card
                      v-ripple
                      class="chat-mensaje elevation-4"
                      :class="{ 'chat-mensaje-0':mensaje.autor==0, 'chat-mensaje-1':mensaje.autor==1 }"
                    >
                      <span>{{mensaje.texto}}</span>
                      <div v-if="mensaje.recurso" class="chat-mensaje-recurso">
                        <span>{{mensaje.recurso.nombre}}</span>
                      </div>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
              <div>
                <v-form class="chat-botones" @submit.prevent="enviarMensaje">
                  <v-text-field v-model="consulta" class="mr-3"></v-text-field>
                  <v-btn
                    v-if="enviar_mensaje"
                    fab
                    dark
                    small
                    color="primary"
                    @click="enviarMensaje"
                  >
                    <v-icon dark>send</v-icon>
                  </v-btn>
                  <v-progress-circular v-else class="ml-2 mr-2" indeterminate color="primary"></v-progress-circular>
                </v-form>
              </div>
            </div>
          </v-card>
        </v-flex>

        <v-scroll-x-transition>
          <v-flex v-if="mostrar_resultado" xs12 md6 style="height: 100%">
            <v-card class="elevation-6 fill-height">
              <div class="chat-estadistica" style="height: 100%">
                <div class="px-5 pt-5">
                  <p
                    style="font-size: 22px; font-weight: bold; color: #616161"
                    class="text-xs-center mb-0"
                  >Resultados del cuestionario</p>
                  <div
                    style="display: flex; flex-direction: column; justify-content: center; font-size: 14px"
                    class="mx-3"
                  >
                    <v-progress-circular
                      :rotate="360"
                      :size="150"
                      :width="15"
                      :value="cuestionario_diabetes_pc"
                      :color="cuestionario_color"
                      style="margin: 20px auto"
                    >
                      <h1>{{ cuestionario_diabetes_pc }}/100</h1>
                    </v-progress-circular>
                    <v-scroll-x-transition>
                      <div v-if="mostrar_resultado_detalle" class="text-xs-center">
                        <span>
                          Tu puntuación ha sido de
                          <strong>{{cuestionario_diabetes_pc}}</strong>.
                        </span>
                        <br />
                        <span>
                          Usted tiene un
                          <strong
                            :style="{color: cuestionario_color}"
                          >riesgo {{nivel_riesgo}}</strong> de desarrollar
                          <strong>diabetes</strong>.
                        </span>
                        <v-divider class="mt-4 mb-3"></v-divider>
                      </div>
                    </v-scroll-x-transition>
                  </div>
                  <v-scroll-x-transition>
                    <div v-if="mostrar_resultado_detalle_2" style="font-size: 13px">
                      <p>
                        Aún así, usted podría reducir su riesgo de desarrollar
                        <strong>diabetes</strong>. Le damos las siguientes recomendaciones:
                      </p>
                      <ul>
                        <li>
                          <p>Haga más actividad física. El ejercicio puede ayudarte a bajar de peso y bajar el azúcar en la sangre</p>
                        </li>
                        <li>
                          <p>Adelgaza los kilos de más. La prevención de la diabetes podría depender del adelgazamiento. Por cada kilo que pierdes, te sorprenderá cuánto mejorará su salud.</p>
                        </li>
                        <li>
                          <p>Consuma mucha fibra, la fibra puede ayudarte a reducir el riesgo de padecer diabetes</p>
                        </li>
                        <li>
                          <p>Evite las dietas de moda y elija opciones más saludables. Incluye en tu plan de alimentación saludable alimentos variados y porciones de tamaño controlado.</p>
                        </li>
                      </ul>
                      <v-divider class="my-3"></v-divider>
                    </div>
                  </v-scroll-x-transition>
                </div>
                <div class="px-2 pb-1">
                  <v-alert
                    :value="true"
                    type="info"
                    outline
                    style=" font-size: 12px"
                  >Este cuestionario no puede reemplazar un diagnóstico facultativo. Por este motivo, debería consultar con su médico el resultado obtenido.</v-alert>
                </div>
              </div>
            </v-card>
          </v-flex>
        </v-scroll-x-transition>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Navegacion from "../components/Navegacion";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      mostrar_resultado: false,
      mostrar_resultado_detalle: false,
      mostrar_resultado_detalle_2: false,
      cuestionario_diabetes_pc: 0,

      cuestionario_diabetes: 0,
      cuestionario_color: "primary",
      nivel_riesgo: "bajo",

      enviar_mensaje: true,
      mensajes: [new Mensaje(0, "Soy tu Doctor-IA. Escríbeme algo. :)")],

      consulta: "",
      contexto_previo: "",
      cuestionario_index: 0,
      cuestionario_activo: false,
      cuestionario_diabetes: 0
    };
  },
  mounted() {
    this.scrollDown();
  },
  methods: {
    enviarMensaje() {
      if (this.consulta.trim().length != 0 && this.enviar_mensaje) {
        this.enviar_mensaje = false;
        this.mensajes.push(new Mensaje(1, this.consulta));
        let consulta = this.consulta;
        this.consulta = "";
        this.responderMensaje(consulta);
        this.scrollDown();
      }
    },
    responderMensaje(consulta) {
      let data = {
        consulta: consulta,
        contexto_previo: this.contexto_previo,
        cuestionario_index: this.cuestionario_index,
        cuestionario_activo: this.cuestionario_activo,
        cuestionario_diabetes: this.cuestionario_diabetes
      };
      // console.log(data);
      // fetch("https://stchatbot.herokuapp.com/chatbot", {
      fetch("https://unmsm-sd-chatbot-doctoria.herokuapp.com/chatbot", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .catch(error => {
          console.error("Error:", error);
          this.enviar_mensaje = true;
        })
        .then(response => {
          console.log("Success:", response);
          this.enviar_mensaje = true;

          this.contexto_previo = response.contexto_previo;
          this.cuestionario_index = response.cuestionario_index;
          this.cuestionario_activo = response.cuestionario_activo;
          this.cuestionario_diabetes = response.cuestionario_diabetes;

          let respuesta = Array.isArray(response.respuesta)
            ? response.respuesta[
                Math.floor(Math.random() * response.respuesta.length)
              ]
            : response.respuesta;
          if (respuesta == "$fin_cuestionario") {
            this.mensajes.push(
              new Mensaje(0, "Te muestro los resultados de mi diagnóstico.")
            );
            this.ocultarResultado();
            this.mostrarResultado(
              this.cuestionario_diabetes,
              this.cuestionario_index
            );
          } else {
            this.mensajes.push(new Mensaje(0, respuesta));
          }
          this.scrollDown();
        });
    },
    ocultarResultado() {
      this.nivel_riesgo = "";
      this.mostrar_resultado = false;
      this.mostrar_resultado_detalle = false;
      this.mostrar_resultado_detalle_2 = false;
    },
    mostrarResultado(valor, valor_max) {
      let puntaje = (valor * 100) / valor_max;
      this.mostrar_resultado = true;

      this.nivel_riesgo =
        puntaje > 66 ? "alto" : puntaje > 33 ? "medio" : "bajo";
      this.cuestionario_color =
        puntaje > 66 ? "red" : puntaje > 33 ? "#ff9b00" : "green";
      this.mostrarResultadoAnimacion(0, puntaje);
    },
    mostrarResultadoAnimacion(actual, limite) {
      this.cuestionario_diabetes_pc = actual;
      if (actual < limite) {
        setTimeout(() => {
          this.mostrarResultadoAnimacion(actual + 1, limite);
        }, 10);
      } else {
        setTimeout(() => {
          this.mostrar_resultado_detalle = true;
        }, 800);
        setTimeout(() => {
          this.mostrar_resultado_detalle_2 = true;
        }, 1600);
      }
    },
    scrollDown() {
      var objDiv = document.getElementById("chat-ventana");
      setTimeout(() => {
        if (objDiv.scrollHeight - objDiv.scrollTop < 1100)
          objDiv.scrollTop = objDiv.scrollHeight;
      }, 0);
    }
  },
  components: {
    Navegacion
  }
};
class Mensaje {
  constructor(autor, texto) {
    this.autor = autor;
    this.texto = texto;
  }
}
</script>

<style scoped>
.chat-vista {
  height: 100vh;
}
.chat-componente {
  display: flex;
  flex-direction: column;
}
#chat-ventana {
  padding: 20px;
  overflow-y: auto;
}
.chat-botones {
  padding: 0px 10px 0px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: 0 -8px -8px -8px;
  background: #fff;
  box-shadow: -1px 4px 14px -2px rgba(0, 0, 0, 0.5);
}
.chat-mensaje {
  padding: 9px 14px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 10px;
  width: max-content;
  max-width: 80%;
}
.chat-mensaje-recurso {
  color: blue;
}
.chat-mensaje-0 {
  float: left;
  background: #fff !important;
}
.chat-mensaje-1 {
  float: right;
  color: #fff;
  background: #3f8edc !important;
}
.chat-estadistica {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/*Scrollbar*/
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: rgb(224, 223, 223);
}
::-webkit-scrollbar-thumb:hover {
  cursor: pointer;
  background: rgb(206, 206, 206);
}
</style>