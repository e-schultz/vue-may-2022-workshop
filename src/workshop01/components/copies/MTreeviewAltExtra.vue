<template>
  <v-card>
    <v-treeview :items="treeViewItems" v-bind="$attrs" v-on="$listeners">
      <template v-slot:label="{ item }">
        <!-- since the api for v-treeview uses label here as the
    slot name going to expose it as label to the consumer so things are
    consistent -->

        <slot v-bind:item="item" name="label"> {{ item.name }} </slot>
      </template>
    </v-treeview>
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
/*
export default {
  props: {
    items: Object,
    activatable: {
      type: Boolean,
      default: false,
    },
    multipleActive: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    treeViewItems() {
      return transformTree(this.items);
    },
  },
};*/

let full = {
  inheritAttrs: false,
  props: ["items", "openAll"],
  data() {
    return {
      active: [],
      open: [],
      value: [],
    };
  },
  watch: {
    openAll(newValue) {
      this.open = !newValue ? [] : this.treeViewItems.reduce(getNestedIds, []);
      // this.$refs.treeRef.updateAll(newValue);
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => {
          console.log(event);
          this.$emit("input", event);
        },
      };
    },
    treeViewItems() {
      return transformTree(this.items);
    },
  },
};
function getNestedIds(acc, cur) {
  let childIds = cur.children ? cur.children.reduce(getNestedIds, []) : [];

  return [...acc, cur.id, ...childIds];
}
/* <!-- since the api for v-treeview uses label here as the
    slot name going to expose it as label to the consumer so things are
    consistent -->
      <!--<template v-slot:label="{ item }">
     

        <slot v-bind:item="item" name="label"> {{ item.name }} </slot>
      </template>-->
*/
/*
 <v-treeview
      :items="treeViewItems"
      :active.sync="active"
      :open.sync="open"
      v-on="listeners"
      v-bind="$attrs"
    >
*/
/*
Since this has been extracted to it's own method, and passing in the items - we can make
this a pure function that does not rely on 'this'
- this could be moved to it's own file if it's reusable
- this could be exported to test the data transformation without needing
  to mount the component
*/
/*
function transformTree(tree) {
  return Object.entries(tree).reduce((acc, currentItem) => {
    let [key, value] = currentItem;
    let { label, properties, id, ...rest } = value;

    let children = properties ? transformTree(properties) : undefined;

    ///  let id = value.id;
    // console.log({ key, value });

    return [...acc, { key, id, name: label, children: children, ...rest }];
  }, []);
}*/
</script>
