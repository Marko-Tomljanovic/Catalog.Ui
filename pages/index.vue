<template>
  <b-container>
    <b-card
      overlay
      img-src="https://picsum.photos/900/250/?image=8"
      img-alt="Card Image"
      text-variant="white"
      title="Knjigoteka"
      class="pt-2"
    >
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the
        card's content.
      </b-card-text>
    </b-card>
    <FixKategorija
      text="Razmjena knjiga"
      slika="https://placekitten.com/300/300?image=1"
    />
    <FixKategorija
      text="dora"
      slika="https://placekitten.com/300/300?image=2"
    />
    <FixKategorija
      text="marko"
      slika="https://placekitten.com/300/300?image=3"
    />
    <FixKategorija
      text="dora"
      slika="https://placekitten.com/300/300?image=4"
    />
    <FixKategorija
      text="marko"
      slika="https://placekitten.com/300/300?image=5"
    />
  </b-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {}
  },
}
</script>
