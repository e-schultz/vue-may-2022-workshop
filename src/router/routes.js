import SchemaTransformTest from '../views/SchemaTransformTest.vue';
import PropMutation from '../views/PropMutation.vue';
import TabDemoOne from '../views/TabDemoOne.vue';
import SimpleForm from '../views/FormGeneratorSimple.vue';
import ExpansionPanelTest from '../views/ExpansionPanelTest.vue';
import GridDemo from '../views/GridDemo.vue';
import HomeView from '../views/HomeView.vue';
import ComponentStartOne from '../workshop01/views/ComponentStartOneView.vue';
import TreeviewStart from '../workshop01/views/TreeviewStartView.vue';
import TreeviewDetailView from '../workshop01/views/TreeviewDetailView.vue';
import MenusStartView from '../workshop01/views/MenusStartView.vue';
export default [
  {
    path: '/',
    component: HomeView,
    meta: { title: 'Welcome', order: -1 },
  },
  {
    path: '/schema-transform',
    component: SchemaTransformTest,
    meta: { title: 'Schema Transform Test ', order: 5 },
  },
  {
    path: '/prop-mutation',
    component: PropMutation,
    meta: { title: 'Prop Mutation', order: 6 },
  },
  {
    path: '/tab-demo-one',
    component: TabDemoOne,
    meta: { title: 'Generic Tab Demo', order: 7 },
  },
  {
    path: '/simple-form',
    component: SimpleForm,
    meta: { title: 'Simple Form', order: 8 },
  },

  {
    path: '/expansion-panel',
    component: ExpansionPanelTest,
    meta: { title: 'Expabsion Panel Examples', order: 9 },
  },
  {
    path: '/grid-demo',
    component: GridDemo,
    meta: { title: 'Grid Demo and v-row', order: 10 },
  },
  {
    path: '/workshop-01-1',
    component: ComponentStartOne,
    meta: { title: 'Workshop Start', order: 2 },
  },
  {
    path: '/workshop-01-2',
    component: TreeviewStart,
    name: 'TreeViewHome',
    meta: { title: 'Treeview Example', order: 3 },
    children: [
      {
        name: 'TreeViewSelected',
        path: ':selectedItem/:selectedName',
        component: TreeviewDetailView,
        props: true,
      },
    ],
  },
  {
    path: '/workshop-01-3',
    component: MenusStartView,
    name: 'MenuStart',
    meta: { title: 'Menus Example', order: 4 },
    children: [
      {
        name: 'MenuSelected',
        path: ':selectedItem/:selectedName',
        component: TreeviewDetailView,
        props: true,
      },
    ],
  },
];
