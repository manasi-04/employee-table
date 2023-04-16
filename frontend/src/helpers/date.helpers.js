export const getDateInMMDDYYYY = (input) => {
    if (!input) {
      return '';
    }
    try {
      const date = new Date(input);
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      return (((month > 8) ? (month + 1) : ('0' + (month + 1))) + '/' + ((day > 9) ? day : ('0' + day)) + '/' + year);
    } catch (e) {
      return '';
    }
};