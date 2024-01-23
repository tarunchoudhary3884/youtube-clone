const useFormattedNumber = (number) => {
  const formatNumber = (num) => {
    num = parseInt(num, 10);

    if (num < 1000) {
      return `${num}`;
    } else if (num < 1000000) {
      return `${Math.floor(num / 1000)}K`;
    } else if (num < 1000000000) {
      return `${Math.floor(num / 1000000)}M`;
    } else {
      return `${Math.floor(num / 1000000000)}B`;
    }
  };

  return formatNumber(number);
};
export default useFormattedNumber;
