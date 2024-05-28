function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const getYear = getCurrentYear();
  const budget = {
    [`income-${getYear}`]: income,
    [`gdp-${getYear}`]: gdp,
    [`capita-${getYear}`]: capita,
  };

  return budget;
}
