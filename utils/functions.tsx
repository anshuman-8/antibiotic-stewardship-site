export const toyyyymmdd = (date: Date) => {
  date = new Date(date);

  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();
  if (dd < 10) {
    dd = 0 + dd;
  }
  if (mm < 10) {
    mm = 0 + mm;
  }
  return (yyyy + "-" + mm + "-" + dd).toString();
};

const to_dd_mm_yyyy = (date: Date) => {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    if (dd < 10) {
      dd = 0 + dd;
    }
    if (mm < 10) {
      mm = 0 + mm;
    }
    return dd + "/" + mm + "/" + yyyy;
  };