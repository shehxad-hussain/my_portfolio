// page breadcrumb
const breadcrumb = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Shop', url: '/shop' },
  { id: 3, title: 'Cosmetics', url: '#' },
  { id: 4, title: 'Cleansers', url: '#' }
];

// product sizes
const sizeList = [
  { value: 'sx', title: 'SX' },
  { value: 's', title: 'S' },
  { value: 'm', title: 'M' },
  { value: 'l', title: 'L' },
  { value: 'xl', title: 'XL' }
];

// product colors
const productColors = [
  { value: '#fab758', id: 'color-1' },
  { value: '#e2626b', id: 'color-2' },
  { value: '#7cb798', id: 'color-3' },
  { value: '#3f78e0', id: 'color-4' },
  { value: '#a07cc5', id: 'color-5' }
];

// product information tabs
const tabList = [
  { id: '#tab-1', title: 'Product Details' },
  { id: '#tab-2', title: 'Additional Info' },
  { id: '#tab-3', title: 'Delivery' }
];

// product reviews
const ratings = [
  { star: 5, value: 82 },
  { star: 4, value: 8 },
  { star: 3, value: 5 },
  { star: 2, value: 3 },
  { star: 1, value: 2 }
];

// all reviews and comments
const reviewList = [
  {
    createdAt: '14 Jan 2022',
    id: '62f6346b77abd48296fda52f',
    actions: { like: 5, dislike: 5 },
    user: { id: 1, name: 'Connor Gibson', image: '/img/avatars/u1.jpg' },
    review: {
      rating: 5,
      title: 'Highly recommended!',
      body: `Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis integer posuere erat ante.`
    }
  },
  {
    createdAt: '21 Feb 2022',
    id: '62f6356a11cba4578f702093',
    actions: { like: 5, dislike: 5 },
    user: { id: 2, name: 'Nikolas Brooten', image: '/img/avatars/u2.jpg' },
    review: {
      rating: 4,
      title: 'Great product',
      body: `Quisque tristique tincidunt metus non aliquam. Quisque ac risus sit amet quam sollicitudin vestibulum vitae malesuada libero. Mauris magna elit, suscipit non ornare et, blandit a tellus. Pellentesque dignissim ornare faucibus mollis.`
    }
  },
  {
    createdAt: '22 Feb 2022',
    id: '62f635d79684ca204e3c4873',
    actions: { like: 5, dislike: 5 },
    user: { id: 3, name: 'Pearce Frye', image: '/img/avatars/u3.jpg' },
    review: {
      rating: 3,
      title: 'Could be better',
      body: `Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis.`
    }
  },
  {
    createdAt: '4 Apr 2022',
    id: '62f63607ad515d3d26d003b6',
    actions: { like: 5, dislike: 5 },
    user: { id: 4, name: 'Nikolas Brooten', image: '/img/avatars/u4.jpg' },
    review: {
      rating: 1,
      title: 'I am going to return it',
      body: `Nullam id dolor id nibh ultricies vehicula ut id. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia aenean bibendum nulla consectetur.`
    }
  },
  {
    createdAt: '3 May 2022',
    id: '62f63607ad515d3d26d003b7',
    actions: { like: 5, dislike: 5 },
    user: { id: 5, name: 'Lou Bloxham', image: '/img/avatars/u4.jpg' },
    review: {
      rating: 3,
      title: null,
      body: `Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`
    }
  }
];

// filter options
const options = [
  { id: 1, title: 'Sort by popularity', value: 'popular' },
  { id: 2, title: 'Sort by average rating', value: 'rating' },
  { id: 3, title: 'Sort by newness', value: 'new' },
  { id: 4, title: 'Sort by price: low to high', value: 'low-to-high' },
  { id: 5, title: 'Sort by price: high to low', value: 'high-to-low' }
];

export default { sizeList, productColors, tabList, ratings, reviewList, options, breadcrumb };
