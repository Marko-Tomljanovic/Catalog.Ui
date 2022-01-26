<template>
  <NuxtLink style="text-decoration: none; color: purple" to="/markom">
    <b-card
      :img-src="slika"
      :img-alt="Ljubičasta"
      img-left
      img-height="100"
      class="mb-2 mt-2"
    >
      <b-card-text>
        {{ text }}
      </b-card-text>
    </b-card>
  </NuxtLink>
</template>

<script>
export default {
  props: ['Ljubičasta', 'text', 'slika'],
}
</script>
