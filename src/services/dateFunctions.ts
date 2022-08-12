


export const lastday = (y: number, m: number) => {
    return new Date(y, m + 1, 0).getDate();
  };


  export const currentYear = new Date().getFullYear();

  export const currentMonth = new Date().getMonth() + 1;
  
  export const currentDay = new Date().getDate();
  
  export const currentMonthAndYear = [currentYear, currentMonth].join('-');
