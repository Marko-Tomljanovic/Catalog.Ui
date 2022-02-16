<template>
  <b-container class="bv-example-row">
    <b-row align-h="center">
      <b-col cols="7">
        <div>
          <b-card
            title="Morate se prijaviti za nastavak"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 40rem"
            class="mb-2 mt-4"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button v-b-modal.modal-center variant="primary">PRIJAVA</b-button
            ><Prijava />
          </b-card></div
      ></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {}
</script>
