<template>
  <v-card>
    <v-toolbar color="cyan" dark flat>
      <v-toolbar-title>Tree Demos</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-row>
      <v-col>
        <v-card class="mx-auto mb-3">
          <MTreeviewAlt :items="items" />
        </v-card>

        <v-card class="mx-auto mb-3">
          <!--  {{ treeOneActive }}
          <v-btn @click="openAll = !openAll">Open! {{ openAll }}</v-btn>-->

          <MTreeviewAlt
            selectable
            activatable
            :items="items"
            @input="onInput('onInput', $event)"
            @update:active="onInput('onActive', $event)"
            @update:open="onInput('onOpen', $event)"
          />
        </v-card>

        <v-card class="mb-3">
          <MNavigationTree
            selectable
            activatable
            :items="items"
            :routeName="'TreeViewSelected'"
            @update:active="onInput('onActive', $event)"
          />
        </v-card>

        <v-card class="mb-3">
          <MTreeviewAlt :items="items" selectable>
            <template v-slot:label="{ item }">
              <router-link
                :to="{
                  params: { selectedItem: item.id, selectedName: item.name },
                  name: 'TreeViewSelected',
                }"
                :append="true"
              >
                {{ item.name }}
              </router-link>
            </template>
          </MTreeviewAlt>
        </v-card>
      </v-col>
      <v-col> <router-view /> </v-col>
    </v-row>
  </v-card>
</template>
<script>
import { INITIAL_TREE } from "../data.js";
import MTreeview from "../components/MTreeview.vue";
import MTreeviewAlt from "../components/MTreeviewAlt.vue";
import MNavigationTree from "../components/MNavigationTree.vue";
/* tree view expects 
({
      items: [
        {
          id: 1,
          name: 'Applications :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
        },
*/

function transformTree(tree) {
  return Object.entries(tree).reduce((acc, currentItem) => {
    let [, value] = currentItem;
    let name = value.label;
    let children = value.properties
      ? transformTree(value.properties)
      : undefined;

    let id = value.id;

    return [...acc, { id, name, children: children }];
  }, []);
}

export default {
  data() {
    return {
      treeOneActive: [],
      openAll: true,
      items: JSON.parse(JSON.stringify(INITIAL_TREE)),
    };
  },
  methods: {
    onActivate(event) {
      console.log("onActivate", { event });
    },
    onInput(eventName, event) {
      console.log(eventName, { event });
    },
    onOpen(event) {
      console.log("onOpen", { event });
    },
  },
  computed: {
    treeItems() {
      return transformTree(this.items);
    },
  },
  components: {
    MTreeview,
    MTreeviewAlt,
    MNavigationTree,
  },
};
/** 
 <!--   <v-card class="mx-auto mb-3">
          <MTreeviewAlt :items="items">
            <template v-slot:label="{ item }">
              <router-link
                :to="{
                  params: { selectedItem: item.id, selectedName: item.name },
                  name: 'TreeViewSelected',
                }"
                :append="true"
              >
                {{ item.name }}
              </router-link>
            </template>
          </MTreeviewAlt>
        </v-card> -->
  */
</script>

