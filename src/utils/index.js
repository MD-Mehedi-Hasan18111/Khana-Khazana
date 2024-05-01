export const replaceMongoIdInArray = (array) => {
  const mappedArray = array
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);

  return mappedArray;
};

export const replaceMongoIdInObject = (obj) => {
  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
  return updatedObj;
};

export const extractUniqueCategories = (recipesAra) => {
  const uniqueCategories = new Set();
  recipesAra.forEach((recipe) => {
    uniqueCategories.add(recipe.category);
  });

  const uniqueCategoryNames = [...uniqueCategories];
  return uniqueCategoryNames;
};
