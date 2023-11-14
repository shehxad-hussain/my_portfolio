const breadcrumb = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Shop', url: '/shop' },
  { id: 3, title: 'Cart', url: '/cart' },
  { id: 4, title: 'Checkout', url: '/checkout' }
];

const orderProducts = [
  {
    size: 43,
    price: 45,
    quantity: 1,
    color: 'Black',
    title: 'Nike Air Sneakers',
    image: '/img/photos/sth1.jpg',
    id: '62f3bac114a90b9c05bce066'
  },
  {
    size: 43,
    price: 55,
    quantity: 1,
    color: 'Misc',
    title: 'Headphones',
    image: '/img/photos/sth2.jpg',
    id: '62f3bad7afb837063e6e3de6'
  },
  {
    price: 55,
    quantity: 1,
    color: 'Black',
    title: 'Apple Watch',
    image: '/img/photos/sth3.jpg',
    id: '62f3bb3a8ee7c0fd2d072f52'
  }
];

const orderSummeryRow = [
  {
    name: 'Subtotal',
    value: { amount: 135.99, parentClass: 'pe-0 text-end', childClass: 'price' }
  },
  {
    name: 'Discount',
    value: { amount: 6.8, parentClass: 'pe-0 text-end', childClass: 'price text-red' }
  },
  {
    name: 'Shipping',
    value: { amount: 10, parentClass: 'pe-0 text-end', childClass: 'price' }
  },
  {
    name: 'Grand Total',
    value: { amount: 152.79, parentClass: 'pe-0 text-end', childClass: 'price text-dark fw-bold' }
  }
];

export { breadcrumb, orderProducts, orderSummeryRow };
