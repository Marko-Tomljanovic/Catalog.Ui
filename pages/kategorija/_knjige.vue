<template>
  <div>
    <div v-if="kategorije.adrese.includes(this.$route.params.knjige)">
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
          v-for="(card, idx) in kategorije.katKnjiga"
          :key="idx"
          :naslov="card.naslov"
          :link="card.link"
          :slika="card.slika"
        ></Knjiga>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/store'
import kategorije from '@/store/kategorije'
export default {
  name: 'kategorija',
  data() {
    return { kategorije, store }
  },
}
</script>
