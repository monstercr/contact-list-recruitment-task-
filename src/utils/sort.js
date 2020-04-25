export const sortUsers = (arr) => {
  const sorted = (a, b) => {
    const nameA = a.last_name.toLowerCase();
    const nameB = b.last_name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  };

  return arr.sort(sorted);
};
