function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !(number >= start && number <= end); // Дополни эту строку

  return isNotInRange;
}