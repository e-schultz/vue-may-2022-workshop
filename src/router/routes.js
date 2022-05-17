import SchemaTransformTest from '../views/SchemaTransformTest.vue';
import PropMutation from '../views/PropMutation.vue';
import TabDemoOne from '../views/TabDemoOne.vue';
import SimpleForm from '../views/FormGeneratorSimple.vue';
import ExpansionPanelTest from '../views/ExpansionPanelTest.vue';
import GridDemo from '../views/GridDemo.vue';
import HomeView from '../views/HomeView.vue';
import ComponentStartOne from '../workshop01/views/ComponentStartOne.vue';
export default [
  {
    path: '/',
    component: HomeView,
    meta: { title: 'Welcome ' },
  },
  {
    path: '/schema-transform',
    component: SchemaTransformTest,
    meta: { title: 'Schema Transform Test ' },
  },
  {
    path: '/prop-mutation',
    component: PropMutation,
    meta: { title: 'Prop Mutation ' },
  },
  {
    path: '/tab-demo-one',
    component: TabDemoOne,
    meta: { title: 'Generic Tab Demo ' },
  },
  {
    path: '/simple-form',
    component: SimpleForm,
    meta: { title: 'Simple Form ' },
  },

  {
    path: '/expansion-panel',
    component: ExpansionPanelTest,
    meta: { title: 'Expabsion Panel Examples ' },
  },
  {
    path: '/grid-demo',
    component: GridDemo,
    meta: { title: 'Grid Demo and v-row ' },
  },
  {
    path: '/workshop-01',
    component: ComponentStartOne,
    meta: { title: 'Workshop Start' },
  },
];
