export const toyyyymmdd = (date: Date) => {
  // date = new Date(date);

  let dd = (date.getDate()).toString();
  let mm = (date.getMonth() + 1).toString();
  const yyyy = date.getFullYear();
  if (dd.length < 2) {
    dd = 0 + dd;
  }
  if (mm.length < 2) {
    mm = 0 + mm;
  }
  return (yyyy + "-" + mm + "-" + dd).toString();
};

export const toStringDate = (date: Date) => {
  date = new Date(date);
  let dd = date.getDate();
  let mm = date.getMonth();
  const yyyy = date.getFullYear();
  if (dd < 10) {
    dd = 0 + dd;
  }
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${dd} ${months[mm]} ${yyyy}`;
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


export const calculate_age = (dob) => {
  var today = new Date();
  var birthDate = new Date(dob);
  var age_now = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age_now--;
  }
  return age_now;
};