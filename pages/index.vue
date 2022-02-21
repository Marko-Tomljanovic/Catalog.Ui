<template>
  <b-container
    ><div class="pt-2"></div>
    <b-card
      class="shadowH"
      style="border: none"
      overlay
      img-src="https://picsum.photos/900/250/?image=24"
      img-alt="Card Image"
      text-variant="white"
      title="Knjigoteka"
      ><b-button
        v-if="!store.isLoggedIn"
        variant="outline-info"
        style="color: white"
        class="float-right"
        v-b-modal.modal-center
        >PRIJAVI SE</b-button
      >
      <b-button
        v-if="store.isLoggedIn"
        @click="odjava"
        variant="outline-info"
        style="color: white"
        class="float-right"
        >ODJAVA</b-button
      >

      <Prijava />
      <b-card-text> Zamjeni knjigu s nekim ili prodaj. </b-card-text>
      <b-button variant="info" to="/novaknjiga">DODAJ KNJIGU</b-button>
    </b-card>

    <div class="row mx-auto">
      <FixKategorija
        class="mx-auto"
        v-for="(card, idx) in kategorije.kat"
        :key="idx"
        :naslov="card.naslov"
        :text="card.text"
        :link="card.link"
        :slika="card.slika"
      ></FixKategorija>
    </div>
  </b-container>
</template>

<script>
import axios from 'axios'
import kategorije from '@/store/kategorije'
import store from '@/store/store'
export default {
  name: 'IndexPage',
  data() {
    return {
      kategorije,
      store,
      info: null,
    }
  },
  methods: {
    odjava() {
      axios
        .post(
          'http://10.42.206.52:3344/logout',
          {},
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((response) => {
          console.log(response.data)
          localStorage.clear('token')
          this.$nuxt.$options.router.go(0)
        })
        .catch((error) => console.log(error))
    },
  },
}
</script>
