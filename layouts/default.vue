<template>
  <div>
    <div
      v-if="store.isLoggedIn"
      class="col sticky-top"
      style="background-color: black"
    >
      <p class="text-right">
        <NuxtLink style="color: silver" to="/korisnik">
          KORISNIK : {{ user }}</NuxtLink
        >
      </p>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import store from '@/store/store'
export default {
  data() {
    return {
      store,
    }
  },
  computed: {
    user() {
      return localStorage.getItem('user')
    },
  },
}
</script>

<style>
body {
  background: -webkit-linear-gradient(left, #4e7ada, #979edd, #4e7ada, #979edd);
}
</style>
