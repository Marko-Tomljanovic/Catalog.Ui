<template>
  <b-container class="bv-example-row">
    <b-row align-h="center">
      <b-col cols="5">
        <div>
          <b-card
            title="Morate se prijaviti za nastavak"
            img-src="https://us.123rf.com/450wm/tvectoricons/tvectoricons1811/tvectoricons181107118/112415662-account-icon-account-design-concept-from-collection-simple-element-vector-illustration-on-white-back.jpg?ver=6"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 30rem"
            class="mb-2 mt-4"
          >
            <b-card-text>
              Ako nemate kreiran profil možete ga napraviti ovdje
              <nuxt-link to="/registracija">OVDJE</nuxt-link>
            </b-card-text>

            <b-button v-b-modal.modal-center variant="primary" class="col"
              >PRIJAVA</b-button
            ><Prijava />
          </b-card></div
      ></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {}
</script>
