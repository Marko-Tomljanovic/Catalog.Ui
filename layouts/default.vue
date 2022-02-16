<template>
  <div>
    <div
      v-if="store.isLoggedIn"
      class="col sticky-top"
      style="background-color: black"
    >
      <p style="color: silver" class="text-right">KORISNIK : {{ user }}</p>
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
