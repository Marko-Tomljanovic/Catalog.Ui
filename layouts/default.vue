<template>
  <div>
    <div
      v-if="store.isLoggedIn"
      class="col sticky-top"
      style="background-color: black"
    >
      <p class="text-right">
        <NuxtLink class="pr-5" id="poruke" style="color: silver" to="/poruke">
          <b> PORUKE</b></NuxtLink
        >
        <NuxtLink id="korisnik" style="color: silver" to="/korisnik">
          <b> KORISNIK :</b> {{ store.user.username }}</NuxtLink
        >

        <b-tooltip
          v-if="$route.fullPath != '/korisnik'"
          target="korisnik"
          triggers="hover"
        >
          Pogledaj svoj <b>profil</b> gdje se nalaze tvoje knjige
        </b-tooltip>
        <b-tooltip target="poruke" triggers="hover">
          Pogledaj nove poruke
        </b-tooltip>
      </p>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import store from '@/store/store'
import axios from 'axios'

export default {
  data() {
    return {
      store,
    }
  },

  mounted() {
    axios
      .get('http://127.0.0.1:3333/check', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then((response) => {
        // console.log(response.data.user)
        this.store.isLoggedIn = response.data.isValid
        this.store.user = response.data.user
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style>
body {
  background: -webkit-linear-gradient(left, #4e7ada, #979edd, #4e7ada, #979edd);
}
</style>
