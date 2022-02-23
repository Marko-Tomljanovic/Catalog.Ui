<template>
  <div>
    <div v-if="!store.isLoggedIn"><MustLogIn /></div>
    <b-container v-if="store.isLoggedIn">
      <b-row class="text-center mt-5">
        <b-col></b-col>
        <b-col cols="11">
          <b-card title="Inbox">
            <b-spinner
              v-if="showSpinner"
              style="width: 7rem; height: 7rem"
              class="mt-5"
              label="Large Spinner"
            ></b-spinner>
            <template #header>
              <h6 class="mb-0">
                (staviti ime korinsika s kojim se dopisujem)
              </h6> </template
            ><Inbox
              v-for="(card, idx) in knjige"
              :key="idx"
              :naslov="card.naslov"
            />
            <b-form @submit.prevent="onSubmit">
              <div class="row mx-auto"></div>
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
      showSpinner: true,
    }
  },

  mounted() {
    setTimeout(() => {
      axios
        .get(`http://10.42.206.52:3333/getByEmail?email=${store.user.email}`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        })
        .then((response) => {
          this.knjige = response.data
          this.showSpinner = false
        })
        .catch((error) => {
          console.log(error)
          localStorage.clear()
        })
    }, 350)
  },
}
</script>
