<template>
  <v-container>
    <TabGeneric :schema="tabSchema" />
    <!--
    <v-tabs v-model="activeTab2">
      <v-tab v-for="tab in tabSchema.properties" :key="tab.title">
        {{ tab.title }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="activeTab2">
      <v-tab-item v-for="tab in tabSchema.properties" :key="tab.title">
        <component :is="tab.component" v-bind="tab.binds" />
      </v-tab-item>
    </v-tabs-items>-->
  </v-container>
</template>

<script>
import SomeComponent from "../components/SomeComponent.vue";
import SomeTest from "../components/SomeTest.vue";
import SomeForm from "../components/SomeForm.vue";
import TabGeneric from "../components/TabGeneric.vue";
import FormGenerator from "../components/FormGenerator.vue";

let schema = [
  {
    componentType: "v-text-field",
    binds: {
      label: "Input Label",
    },
  },
  {
    componentType: "radio-group",
    binds: {
      options: [
        { value: "radio-1", text: "Option 1" },
        { value: "radio-2", text: "Option 2" },
        { value: "radio-3", text: "Option 3" },
      ],
    },
  },
  {
    componentType: "v-text-field",
    binds: {
      label: "Input Label",
    },
  },
  {
    componentType: "select-list",
    binds: {
      options: [
        { value: "radio-6", text: "Config 1" },
        { value: "radio-7", text: "Config 2" },
        { value: "radio-9", text: "Config 3" },
      ],
    },
  },
  {
    componentType: "v-text-field",
    binds: {
      label: "Config 1 Description",
    },
    conditions: [{}],
  },
];

let childTabSchema = {
  type: "object",
  properties: {
    one: {
      title: "child 1",
      component: SomeForm,
    },
    two: {
      title: "child 2",
      component: SomeTest,
    },
  },
};
let tabSchema = {
  type: "object",
  properties: {
    one: {
      title: "Tab 1",
      component: SomeForm,
    },
    two: {
      title: "Tab 2",
      component: SomeTest,
    },
    three: {
      title: "Tab 3",
      component: SomeComponent,
    },
    four: {
      title: "Tab 4",
      component: FormGenerator,
      binds: {
        schema: schema,
      },
    },
    five: {
      title: "Tab 5",
      component: TabGeneric,
      binds: {
        schema: childTabSchema,
      },
    },
  },
};
export default {
  data() {
    return {
      textValue: "",
      radioValue: "",
      inputValue: "",
      schema: schema,
      tabSchema: tabSchema,
      activeTab: null,
      activeTab2: 0,
    };
  },
  components: {
    TabGeneric,
  },
};
</script>

<style>
.theme--light.v-application {
  background: #f9f9fa !important;
}
</style>