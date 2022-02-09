<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group id="input-group-1" label="Email" label-for="email">
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Lozinka:" label-for="input-2">
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
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'registracija',
  data() {
    return {
      email: '',
      password: '',
      passwordConfirmation: '',
    }
  },
  methods: {
    onSubmit() {
      axios
        .post(
          'http://10.42.206.52:3344/register',
          {
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
