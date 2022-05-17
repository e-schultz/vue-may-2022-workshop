<template>
  <v-radio-group v-model="radioValue" row>
    <template v-for="option in options">
      <v-radio
        :label="option.text"
        :value="option.value"
        :key="option.value"
      ></v-radio>
    </template>
  </v-radio-group>
</template>
<script>
export default {
  props: ['options'],
  data() {
    return {
      radioValue: ''
    }
  }
}
</script>