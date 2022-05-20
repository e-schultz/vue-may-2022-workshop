const INITIAL_TREE = {
  item1: {
    id: 0,
    label: 'Parent 1',
    type: 'object',
    properties: {
      child1: {
        id: 1,
        label: 'Child 1-1',
      },
      child2: {
        id: 2,
        label: 'Child 2-2',
      },
    },
  },
  item2: {
    id: 3,
    label: 'Parent 2',
    properties: {
      child1: {
        id: 4,
        label: 'Child 2-1',
      },
      child2: {
        id: 5,
        label: 'Child 2-2',
      },
    },
  },
  item3: {
    id: 6,
    label: 'Parent 3',
    properties: {
      child1: {
        id: 7,
        label: 'Child 3-1',
      },
      child2: {
        id: 8,
        label: 'Child 3-2',
      },
      child3: {
        id: 9,
        label: 'Nested Child',
        properties: {
          child4: {
            id: 10,
            label: 'child 3-2-1',
          },
        },
      },
    },
  },
};

export { INITIAL_TREE };
