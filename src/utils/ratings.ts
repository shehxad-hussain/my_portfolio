const ratingGenerate = (value: number) => {
  switch (value) {
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
    case 4:
      return 'four';
    default:
      return 'five';
  }
};

export default ratingGenerate;
