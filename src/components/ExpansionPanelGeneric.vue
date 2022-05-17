<template>
  <div>
    - {{ panel }}
    <v-expansion-panels :multiple="multiple" v-model="panel">
      <v-expansion-panel v-for="(panel, i) in schema" :key="i">
        <v-expansion-panel-header>
          {{ panel.title }} {{ $attrs }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <component :is="panel.componentType" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
export default {
  props: ['schema', 'multiple'],
  data() {
    return { panel: [], allowmultiple: this.multiple }
  },
  watch: {
    multiple(newVal) {
      this.panel =
        newVal === true ? [this.panel] : this.panel[this.panel.length - 1]
    }
  }
}
</script>