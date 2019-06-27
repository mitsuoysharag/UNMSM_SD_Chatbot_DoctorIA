<template>
<div>
  <v-toolbar app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title class=" text-uppercase">
      <h3>DOCTOR IA</h3>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="redirect('/')">Cerrar Sesión</v-btn>
    </v-toolbar-items>
  </v-toolbar>

  <v-layout wrap>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Usuario Anónimo</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" v-ripple @click="redirect(item.redirect)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</div>
</template>

<script>
export default {
  data () {
      return {
        drawer: null,
        items: [
          { title: 'Inicio', icon: 'home', redirect: 'inicio'},
          { title: 'Formulario', icon: 'receipt', redirect: 'formulario'},
          { title: 'Chat', icon: 'question_answer', redirect: 'chat'},
          { title: 'Cerrar Sesión', icon: 'exit_to_app', redirect: '/'}
        ]
      }
    },
  methods: {
    redirect(path) {
      this.$router.push(path)
    }
  },
}
</script>

<style>

</style>
