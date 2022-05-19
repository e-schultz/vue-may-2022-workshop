<template>
  <v-card class="mt-5">
    <v-toolbar color="purple" dark flat dense>
      <v-toolbar-title>Tree Demos</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-treeview :items="items" />
  </v-card>
</template>
<script>
export default {
  props: ["items"],
};
</script>
