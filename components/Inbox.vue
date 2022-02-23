<template>
  <a @click="otvori">
    <b-row class="text-center mt-2 border">
      <b-col>{{ naslov }}</b-col>
      <b-col cols="5"> neka</b-col>
      <b-col>cija</b-col>
    </b-row>
  </a>
</template>

<script>
export default {
  props: ['naslov'],

  methods: {},
}
</script>
