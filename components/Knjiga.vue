<template>
  <NuxtLink :to="url">
    <b-card
      :img-src="`http://10.42.206.52:3344${slika}`"
      img-top
      class="mb-2 mt-3 shadowH"
      style="max-width: 200px"
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
  props: ['url', 'slika', 'naslov', 'text'],
}
</script>
