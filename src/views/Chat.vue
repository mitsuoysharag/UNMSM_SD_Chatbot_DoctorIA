<template>
  <v-content class="chat-vista">
    <Navegacion/>
    <v-container fluid grid-list-xl style="height: 100%">
      <v-layout justify-center wrap style="height: 100%">
        <v-flex xs12 md5 style="height: 100%">
          <v-card class="elevation-6 fill-height">
            <div class="chat-componente" style="height: 100%">
              <v-container id="chat-ventana">
                <v-layout column>
                  <v-flex v-for="(mensaje, index) in mensajes" :key="index">
                    <v-card
                      v-ripple
                      @click="accionMensajeRecurso(mensaje.recurso)"
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
                  <v-text-field v-model="texto" class="mr-3"></v-text-field>
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

        <v-flex v-if="recurso_estado != 0" xs12 md7 style="height: 100%">
          <v-card class="elevation-6 fill-height">
            <div
              class="chat-recurso"
              :class="{ 'chat-recurso-maximizado':recurso_maximizado }"
              style="height: 100%"
            >
              <embed
                v-if="recurso && recurso.tipo==0"
                :src="recurso.enlace"
                width="100%"
                height="100%"
              >
              <iframe
                v-else-if="recurso && recurso.tipo==1"
                :src="recurso.enlace"
                width="100%"
                height="100%"
              ></iframe>
              <div v-else style="margin: auto">
                <v-progress-circular :size="70" :width="7" color="primary" indeterminate></v-progress-circular>
              </div>
              <div class="my-3">
                <v-btn
                  fab
                  dark
                  small
                  color="primary"
                  @click="recurso_maximizado = !recurso_maximizado"
                >
                  <v-icon v-if="!recurso_maximizado" dark>fullscreen</v-icon>
                  <v-icon v-else dark>fullscreen_exit</v-icon>
                </v-btn>
                <v-btn fab dark small color="error" @click="recurso_estado = 0">
                  <v-icon dark>close</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Navegacion from "../components/Navegacion";
export default {
  data() {
    return {
      enviar_mensaje: true,
      texto: "",
      recurso: null,
      recurso_estado: 0, //0: no hay, 1: cargando, 2: hay
      recurso_maximizado: false,
      mensajes: [
        new Mensaje(1, "Hola."),
        new Mensaje(0, "Hola, en qué puedo ayudarte?"),
        new Mensaje(
          1,
          "Tengo un problema, últimamente me duele mucho la espalda."
        ),
        new Mensaje(0, "¿Hace cuánto siente ese dolor?"),
        new Mensaje(1, "Desde hace tres días."),
        new Mensaje(0, "¿En qué zona específica te duele?")
      ]
    };
  },
  mounted() {
    this.scrollDown();
  },
  methods: {
    enviarMensaje() {
      if (this.texto.trim().length != 0 && this.enviar_mensaje) {
        this.enviar_mensaje = false;
        this.mensajes.push(new Mensaje(1, this.texto));
        this.texto = "";
        this.responderMensaje();
        this.scrollDown();
      }
    },
    responderMensaje() {
      setTimeout(() => {
        this.enviar_mensaje = true;
        this.mensajes.push(new Mensaje(0, "Esta información te puede ayudar: ..."));
        this.scrollDown();
      }, 1500);
    },
    accionMensajeRecurso(recurso) {
      if (recurso !== undefined) {
        this.recurso = null;
        this.recurso_estado = 1; //cargando
        setTimeout(() => {
          this.recurso = recurso;
          this.recurso_estado = 2; //hay
        }, 500);
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
  background: #f9e5cc !important;
}
.chat-mensaje-1 {
  float: right;
  background: #afdaff !important;
}
.chat-recurso {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.chat-recurso-maximizado {
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 60px;
  width: 100%;
  background: #fff;
}
.chat-no-recurso {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #ccc;
  overflow-y: auto;
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