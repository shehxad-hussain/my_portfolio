type NavLink = {
  title: string;
  url: string | null;
  id: number | string;
};

type ColNav = {
  [key: string]: { title: string; child: NavLink[] };
};

export interface NavItem extends NavLink {
  children: NavItem[] | ColNav | null;
}

const navigations = [
  {
    id: 1,
    url: null,
    title: 'Demos',
    children: [
      { id: 11, title: 'Demo 1', url: '/' },
      { id: 12, title: 'Demo 2', url: '/demo-2' },
      { id: 13, title: 'Demo 3', url: '/demo-3' },
      { id: 14, title: 'Demo 4', url: '/demo-4' },
      { id: 15, title: 'Demo 5', url: '/demo-5' },
      { id: 16, title: 'Demo 6', url: '/demo-6' }
    ]
  },
  {
    id: 2,
    url: null,
    title: 'Pages',
    children: [
      {
        id: 21,
        url: null,
        title: 'Services',
        children: [
          { id: 211, title: 'Services I', url: '/services-1' },
          { id: 212, title: 'Services II', url: '/services-2' }
        ]
      },
      {
        id: 22,
        url: null,
        title: 'About',
        children: [
          { id: 221, title: 'About I', url: '/about-1' },
          { id: 222, title: 'About II', url: '/about-2' }
        ]
      },
      {
        id: 23,
        url: null,
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
        url: null,
        title: 'Contact',
        children: [
          { id: 241, title: 'Contact I', url: '/contact-1' },
          { id: 242, title: 'Contact II', url: '/contact-2' },
          { id: 243, title: 'Contact III', url: '/contact-3' }
        ]
      },
      {
        id: 25,
        url: null,
        title: 'Career',
        children: [
          { id: 251, title: 'Job Listing I', url: '/career-1' },
          { id: 252, title: 'Job Listing II', url: '/career-2' },
          { id: 253, title: 'Job Description', url: '/jobs/1' }
        ]
      },
      {
        id: 26,
        url: null,
        title: 'Utility',
        children: [
          { id: 261, title: '404 Not Found', url: '/asdasdasdasd' },
          { id: 262, title: 'Login I', url: '/login-1' },
          { id: 263, title: 'Login II', url: '/login-2' },
          { id: 264, title: 'Register I', url: '/register-1' },
          { id: 265, title: 'Register II', url: '/register-2' },
          { id: 266, title: 'Terms & Condition', url: '/terms' }
        ]
      },
      { id: 27, title: 'Pricing', url: '/pricing' }
    ]
  },
  {
    id: 3,
    url: null,
    title: 'Projects',
    children: {
      col1: {
        title: 'PROJECT PAGES',
        child: [
          { id: 31, title: 'Project I', url: '/projects-1' },
          { id: 32, title: 'Project II', url: '/projects-2' },
          { id: 33, title: 'Project III', url: '/projects-3' },
          { id: 34, title: 'Project IV', url: '/projects-4' }
        ]
      },
      col2: {
        title: 'SINGLE PROJECTS',
        child: [
          { id: 31, title: 'Single Project I', url: '/single-project-1' },
          { id: 32, title: 'Single Project II', url: '/single-project-2' },
          { id: 33, title: 'Single Project III', url: '/single-project-3' },
          { id: 34, title: 'Single Project VI', url: '/single-project-4' }
        ]
      }
    }
  },
  {
    id: 4,
    url: null,
    title: 'Blog',
    children: [
      { id: 41, title: 'Blog without Sidebar', url: '/blog-1' },
      { id: 42, title: 'Blog with Sidebar', url: '/blog-2' },
      { id: 43, title: 'Blog with Left Sidebar', url: '/blog-3' },
      {
        id: 44,
        title: 'Blog Posts',
        url: null,
        children: [
          { id: 441, title: 'Post without Sidebar', url: '/blog-details-1' },
          { id: 442, title: 'Post with Sidebar', url: '/blog-details-2' },
          { id: 443, title: 'Post with Left Sidebar', url: '/blog-details-3' }
        ]
      }
    ]
  }
];

export default navigations;
