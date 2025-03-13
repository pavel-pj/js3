const removeFirstLevel = (tree) => tree.filter((item) => Array.isArray(item)).flat();

export { removeFirstLevel };
