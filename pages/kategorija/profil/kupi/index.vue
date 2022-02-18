<template>
  <b-row class="text-center">
    <b-col></b-col>
    <b-col cols="6">
      <b-card style="max-width: 55rem">
        <template #header>
          <h6 class="mb-0">Kontaktiraj prodavača</h6> </template
        ><b-form-input
          type="text"
          required
          v-model="kupac"
          placeholder="upiši svoje ime"
          class="mt-2"
        >
        </b-form-input>
        <b-form-textarea
          id="textarea-no-resize"
          placeholder="poruka"
          rows="4"
          no-resize
          v-model="poruka"
          class="mt-3 mb-4"
        ></b-form-textarea>
        <b-button v-b-modal.modal-center variant="success">POŠALJI</b-button>
        <b-button variant="info" @click="$router.back()">ODUSTANI</b-button>
        <b-modal id="modal-center" centered title="Poruka - u izradi">
          <p class="my-4">Kupac: {{ kupac }}</p>
          <p class="my-4">{{ poruka }}</p>
        </b-modal>
      </b-card>
    </b-col>
    <b-col></b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      kupac: '',
      poruka: '',
    }
  },
}
</script>
