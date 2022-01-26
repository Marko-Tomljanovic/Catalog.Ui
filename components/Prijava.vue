<template>
  <b-modal id="modal-center" no-close-on-backdrop centered title="Prijava">
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form-group
        label-for="username"
        invalid-feedback="Korisnicko ime je potrebno"
      >
        <b-form-input
          type="email"
          id="username"
          v-model="username"
          placeholder="korisničko ime"
          required
        ></b-form-input>
        <b-form-input
          type="password"
          id="text-password"
          v-model="password"
          placeholder="lozinka"
          class="mt-3"
          aria-describedby="password-help-block"
        ></b-form-input>
        <b-form-text id="password-help-block">
          Lozinka mora sadrzavati minimalno 6 znakova.<br />
          Nemaš račun, registriraj se <NuxtLink to="/"> OVDJE </NuxtLink>
        </b-form-text>
      </b-form-group>

      <b-form-checkbox
        v-model="checked"
        id="zapamtiMe"
        switch
        value="rememberMe"
      >
        Zapamti me
      </b-form-checkbox>
    </form>

    <template #modal-footer="{ prijava, odustani }">
      <b-button size="sm" variant="success" @click="prijava()">
        PRIJAVA
      </b-button>
      <b-button size="sm" variant="info" @click="odustani()">
        ODUSTANI
      </b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'Prijava',
  data() {
    return {
      username: '',
      password: '',
      checked: false,
    }
  },
}
</script>
