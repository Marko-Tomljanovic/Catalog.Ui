<template>
  <NuxtLink style="text-decoration: none" :to="link">
    <b-card
      :img-src="slika"
      :img-alt="Ljubičasta"
      img-left
      img-height="110"
      class="mb-2 mt-3"
      style="border-color: grey"
    >
      <b-card-text class="font-weight-bold" style="margin-top: -5px">
        {{ naslov }}
      </b-card-text>
      <b-card-text class="text-muted" style="margin-top: -13px">
        {{ text }}
      </b-card-text>
    </b-card>
  </NuxtLink>
</template>

<script>
export default {
  props: ['link', 'slika', 'Ljubičasta', 'naslov', 'text'],
}
</script>
