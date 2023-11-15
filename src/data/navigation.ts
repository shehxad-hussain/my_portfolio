
// pages navigations
const pages = [
  {
    id: 21,
    title: 'Services',
    children: [
      { id: 211, title: 'Services I', url: '/services-1' },
      { id: 212, title: 'Services II', url: '/services-2' }
    ]
  },
  {
    id: 22,
    title: 'About',
    children: [
      { id: 221, title: 'About I', url: '/about-1' },
      { id: 222, title: 'About II', url: '/about-2' }
    ]
  },
  {
    id: 23,
    title: 'Shop',
    children: [
      { id: 231, title: 'Shop I', url: '/shop-1' },
      { id: 232, title: 'Shop II', url: '/shop-2' },
      { id: 233, title: 'Product Page', url: '/products/1' },
      { id: 234, title: 'Shopping Cart', url: '/cart' },
      { id: 235, title: 'Checkout', url: '/checkout' }
    ]
  },
  {
    id: 24,
    title: 'Contact',
    children: [
      { id: 241, title: 'Contact I', url: '/contact-1' },
      { id: 242, title: 'Contact II', url: '/contact-2' },
      { id: 243, title: 'Contact III', url: '/contact-3' }
    ]
  },
  {
    id: 25,
    title: 'Career',
    children: [
      { id: 251, title: 'Job Listing I', url: '/career-1' },
      { id: 252, title: 'Job Listing II', url: '/career-2' },
      { id: 253, title: 'Job Description', url: '/jobs/1' }
    ]
  },
  {
    id: 26,
    title: 'Utility',
    children: [
      { id: 261, title: '404 Not Found', url: '/asdasdasdasd' },
      { id: 262, title: 'Login I', url: '/login-1' },
      { id: 263, title: 'Login II', url: '/login-2' },
      { id: 264, title: 'Register I', url: '/register-1' },
      { id: 265, title: 'Register II', url: '/register-2' },
      { id: 266, title: 'Terms & Condition', url: '/terms' }
    ]
  }
];


export { pages };
