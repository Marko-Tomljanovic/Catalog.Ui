<template>
  <div>
    <div
      v-if="store.isLoggedIn"
      class="col sticky-top"
      style="background-color: black"
    >
      <p class="text-right">
        <NuxtLink id="korisnik" style="color: silver" to="/korisnik">
          KORISNIK : {{ store.user }}</NuxtLink
        >
        <b-tooltip
          v-if="$route.fullPath != '/korisnik'"
          target="korisnik"
          triggers="hover"
        >
          Pogledaj svoj <b>profil</b> gdje se nalaze tvoje knjige
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
      .get('http://10.42.206.52:3344/check', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then((response) => {
        // console.log(response.data.user)
        this.store.isLoggedIn = response.data.isValid
        this.store.user = response.data.user.email
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
