<template>
  <NuxtLink style="text-decoration: none" :to="`/profil/${url}`">
    <b-card :img-src="slika" img-top class="mb-2 mt-3" style="max-width: 20rem">
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
