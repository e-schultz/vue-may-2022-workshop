export default function transformTree(tree) {
  return Object.entries(tree).reduce((acc, currentItem) => {
    let [key, value] = currentItem;
    let { label, properties, id, ...rest } = value;

    let children = properties ? transformTree(properties) : undefined;

    ///  let id = value.id;
    // console.log({ key, value });

    return [...acc, { key, id, name: label, children: children, ...rest }];
  }, []);
}
