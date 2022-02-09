<template>
  <div v-if="knjige">
    <div v-if="samoNaslovi.includes($route.params.profilKnjige)">
      <p>Ime knjige : {{ knjigaProfila.naslov }}</p>
      <p>Stanje : {{ knjigaProfila.stanje }}</p>
      <p>Cijena : {{ knjigaProfila.cijena }}</p>
      <p>Opis : {{ knjigaProfila.opis }}</p>
      <p>Itd..</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '@/store/store'

export default {
  name: 'profil',
  data() {
    return {
      store,
      knjige: null,
    }
  },
  computed: {
    samoNaslovi() {
      return this.knjige.map((a) => a.naslov.replace(/\s/g, '').toLowerCase())
    },
    knjigaProfila() {
      return this.knjige.find(
        ({ naslov }) =>
          naslov.replace(/\s/g, '').toLowerCase() ===
          this.$route.params.profilKnjige
      )
    },
  },
  mounted() {
    axios
      .get('http://10.42.206.52:3344/books', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then((response) => {
        this.knjige = response.data
        console.log($route.params)
      })
      .catch((error) => console.log(error))
  },
}
</script>
