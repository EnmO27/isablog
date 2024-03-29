<template>
  <div id="app">
    <nav>
      <b-row class="pr-5 pl-5" style="background-color: #02023b">
        <b-col class="p-4" md="2">
          <img @click="$router.push({path: '/blog/1'})" src="./assets/HUMAN.png" style="width: 60%; cursor: pointer;" />
        </b-col>

        <b-col class="p-5 d-flex justify-content-end align-items-center" md="10">
          <router-link class="mr-3" to="/blog/1">Inicio</router-link> |
          <router-link class="mr-3" to="/about">Sobre nosotros</router-link>
          <router-link class="mr-3" to="/about">Contacto</router-link>
        </b-col>
      </b-row>
    </nav>
    <div>
      <b-row>
        <b-col md="8">
          <router-view />
        </b-col>

        <b-col class="p-5" style="background-color: #df5aff" md="4">
          <div class="d-flex">
            <b-form-input v-model="searchTerm" placeholder="Buscar"></b-form-input>
            <b-button @click="searchMethod">Buscar</b-button>
          </div>
          <hr>

          <div>
            <h5 style="text-align: start" class="font-weight-bolder text-white">Subscribete por Email</h5>
          </div>

          <div class="d-flex">
            <b-form-input placeholder="Email"></b-form-input>
            <b-button>Ir</b-button>
          </div>

          <hr>

          <h5 style="text-align: start" class="font-weight-bolder text-white">Posts destacados</h5>
          <div class="w-100" style="height: 600px; background-color: white; border-radius: 20px;">

          </div>
        </b-col>

        
      </b-row>
    </div>
  </div>
</template>

<script>
import { BCol, BRow, BFormInput, BButton } from 'bootstrap-vue'

export default {
  data(){
    return {
      searchTerm: null,

    }
  },

  mounted(){
  },

  components: {
    BCol,
    BRow,
    BFormInput,
    BButton
  },

  methods: {
    searchMethod(){
      if(this.searchTerm){
        this.$router.push({ path: `/blog/1`, query: { searchTerm: this.searchTerm } })
      }

      else{
        this.$router.push({ path: `/blog/1` })
      }
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #FFFFFF;
}

nav a.router-link-exact-active {
  color: #f84fff;
}
</style>
