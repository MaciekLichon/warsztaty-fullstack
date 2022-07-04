
export const sortObjByDate = (arr) => {
  return arr.sort((objA, objB) => Number(objA.publishedDate) - Number(objB.publishedDate))
};
