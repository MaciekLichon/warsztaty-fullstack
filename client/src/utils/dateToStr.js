
export const dateToStr = date => {

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    `${month}/${day}/${year}`
  );
};
