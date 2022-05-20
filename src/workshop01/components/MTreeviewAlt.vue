<template>
  <v-card>
    <v-treeview :items="treeViewItems"> </v-treeview>
  </v-card>
</template>

<script>
import transformTree from "../utils/transformTree";
export default {
  inheritAttrs: false,
  props: ["items"],
  computed: {
    treeViewItems() {
      return transformTree(this.items);
    },
  },
};
</script>
