<template>
  <div>
    <div v-if="!store.isLoggedIn"><MustLogIn /></div>
    <b-container v-if="store.isLoggedIn">
      <b-row class="text-center mt-5">
        <b-col></b-col>
        <b-col cols="11">
          <b-card title="Prikaz">
            <template #header>
              <h6 class="mb-0">Dodane knjige</h6>
            </template>
            <b-form @submit.prevent="onSubmit">
              <div class="row mx-auto">
                <Knjiga
                  class="mx-auto"
                  v-for="(card, idx) in knjige"
                  :key="idx"
                  :naslov="card.naslov"
                  :url="
                    `kategorija/profil/` +
                    card.naslov.replace(/\s/g, '').toLowerCase()
                  "
                  :slika="card.image"
                ></Knjiga>
              </div>
              <b-button
                variant="outline-info"
                class="col-3 mt-4"
                @click="$router.back()"
                >POVRATAK</b-button
              >
            </b-form>
          </b-card>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
import store from '@/store/store'

export default {
  name: 'korisnik',
  data() {
    return {
      knjige: [],
      store,
    }
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
      })
      .catch((error) => {
        console.log(error)
        localStorage.clear()
      })
  },
}
</script>
