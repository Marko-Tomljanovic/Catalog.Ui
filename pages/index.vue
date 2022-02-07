<template>
  <b-container
    ><div class="pt-3"></div>
    <b-card
      overlay
      img-src="https://picsum.photos/900/250/?image=24"
      img-alt="Card Image"
      text-variant="white"
      title="Knjigoteka"
      ><b-button
        variant="outline-info"
        style="color: white"
        class="float-right"
        v-b-modal.modal-center
        >PRIJAVI SE</b-button
      >

      <Prijava />
      <b-card-text> Zamjeni knjigu s nekim ili prodaj. </b-card-text>
      <b-button to="/novaknjiga">DODAJ KNJIGU</b-button>
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
import kategorije from '../store/kategorije'
export default {
  name: 'IndexPage',
  data() {
    return {
      kategorije,
      info: null,
    }
  },
  mounted() {
    axios
      .get('http://10.42.206.52:3344/books')
      .then((response) => (this.info = response.data))
      .catch((error) => console.log(error))
  },
}
</script>
