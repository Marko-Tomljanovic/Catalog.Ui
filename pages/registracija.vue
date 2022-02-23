<template>
  <div>
    <div v-if="store.isLoggedIn">
      Već ste prijavljeni,
      <b-link style="color: white" @click="$router.back()">POVRATAK</b-link>
    </div>
    <b-container v-if="!store.isLoggedIn">
      <b-row class="text-center mt-5">
        <b-col></b-col>
        <b-col cols="7">
          <b-card title="Registriraj se" footer-tag="footer">
            <template #header>
              <h6 class="mb-0">Knjigoteka</h6>
            </template>
            <b-form @submit.prevent="onSubmit">
              <b-form-group
                id="korisnicko_ime"
                label="Korisničko ime"
                label-for="korisnicko_ime"
              >
                <b-form-input
                  id="korisnicko_ime"
                  v-model="korisnicko_ime"
                  type="text"
                  placeholder="usename"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-1" label="Grad" label-for="grad">
                <b-form-input
                  style="text-transform: capitalize"
                  id="grad"
                  v-model="grad"
                  type="text"
                  placeholder="npr Zagreb"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-1" label="Email" label-for="email">
                <b-form-input
                  id="input-1"
                  v-model="email"
                  type="email"
                  placeholder="Enter email"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Lozinka:"
                label-for="input-2"
              >
                <b-form-input
                  id="password"
                  type="password"
                  v-model="password"
                  placeholder="lozinka"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-3"
                label="Ponovljena lozinka:"
                label-for="input-3"
              >
                <b-form-input
                  id="password_confirmation"
                  type="password"
                  v-model="passwordConfirmation"
                  placeholder="lozinka"
                  required
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="success">POTVRDI</b-button>
              <b-button type="button" @click="$router.back()" variant="info"
                >ODUSTANI</b-button
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
  name: 'registracija',
  data() {
    return {
      grad: '',
      korisnicko_ime: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      store,
    }
  },
  methods: {
    onSubmit() {
      axios
        .post(
          'http://10.42.206.52:3333/register',
          {
            username: this.korisnicko_ime,
            city: this.grad,
            email: this.email,
            password: this.password,
            password_confirmation: this.passwordConfirmation,
          },
          {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
          }
        )
        .then((res) => {
          console.log('RESPONSE RECEIVED: ', res)
          $nuxt.$options.router.replace({
            path: '/',
          })
        })
        .catch((err) => {
          console.log('AXIOS ERROR: ', err)
        })
    },
  },
}
</script>
