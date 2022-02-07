<template>
  <div>
    <div v-if="knjige == null" class="text-center pt-5">
      <b-spinner style="width: 3rem; height: 3rem" variant="info"></b-spinner>
    </div>
    <div v-if="knjige">
      <b-form-input
        id="trazi"
        v-model="store.trazi"
        placeholder="Pretraži.."
        class="col-8 mx-auto mt-3 mb-3"
        autocomplete="off"
        type="search"
      >
      </b-form-input>

      <div class="row mx-auto">
        <Knjiga
          class="mx-auto"
          v-for="(card, idx) in pretrazi"
          :key="idx"
          :naslov="card.naslov"
          :url="card.naslov.replace(/\s/g, '').toLowerCase()"
          :slika="card.image"
          :marko="card.naslov"
        ></Knjiga>
      </div>
    </div>
    <div v-if="!knjige.length > 0" class="container">
      <p class="text-center text-muted">Nema jos knjiga u kategoriji</p>
      <br />
      <b-overlay :show="true" class="d-inline-block" rounded="circle">
        <b-img
          thumbnail
          rounded="circle"
          fluid
          src="@/assets/bookCard.jpg"
          alt="bookCard"
        ></b-img>
      </b-overlay>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '@/store/store'
import kategorije from '@/store/kategorije'

export default {
  name: 'kategorija',
  data() {
    return {
      kategorije,
      store,
      knjige: [],
    }
  },
  computed: {
    pretrazi() {
      let termin = this.store.trazi
      return this.knjige.filter((card) =>
        card.naslov.toLowerCase().includes(termin.toLowerCase())
      )
    },
  },
  mounted() {
    axios
      .get('http://10.42.206.52:3344/books')
      .then((response) => {
        this.knjige = response.data.filter(
          (item) =>
            item.kategorija
              .replace(/\s/g, '')
              .toLowerCase()
              .includes(this.$route.params.knjige) === true
        )
      })
      .catch((error) => console.log(error))
  },
}
</script>
