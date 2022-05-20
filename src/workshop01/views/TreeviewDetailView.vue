<template>
  <v-card-text> Yo! - {{ selectedItem }} - {{ selectedName }} </v-card-text>
</template>
<script>
export default {
  props: ["selectedItem", "selectedName"],
};
</script>
