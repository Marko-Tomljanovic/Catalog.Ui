<template>
  <b-link to="/poruke/inbox" style="color: black">
    <b-row class="text-center mt-2 border">
      <b-col>{{ naslov }}</b-col>
      <b-col cols="5"> neka</b-col>
      <b-col>cija</b-col>
    </b-row>
  </b-link>
</template>

<script>
export default {
  props: ['naslov'],

  methods: {},
}
</script>
