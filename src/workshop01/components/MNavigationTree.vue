<template>
  <MTreeviewAlt :items="items">
    <template v-slot:label="{ item }">
      <!-- we might want to make this more flexible in the future
    but for this example, this will do -->
      <router-link :to="`${routePrefix}/${item.id}/${item.name}`">
        {{ item.name }}
      </router-link>
    </template>
  </MTreeviewAlt>
</template>
<script>
import MTreeviewAlt from "./MTreeviewAlt.vue";
export default {
  props: {
    items: Object,
    routePrefix: {
      type: String,
      default: "",
    },
  },

  components: {
    MTreeviewAlt,
  },
};
</script>

<!-- 
 <MTreeviewAlt :items="items" />
-->

<!-- 
 <MTreeviewAlt :items="items">
    <template v-slot:label="{ item }">
    <router-link :to="`/workshop-02/${item.id}/${item.name}`">
        {{ item.name }}
    </router-link>
    </template>
</MTreeviewAlt>
-->