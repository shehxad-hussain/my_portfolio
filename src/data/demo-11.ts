const list = [
  ['Aenean quam ornare. Curabitur blandit.', 'Nullam quis risus eget urna mollis ornare.'],
  ['Etiam porta euismod malesuada mollis.', 'Vivamus sagittis lacus vel augue rutrum.']
];

const facts = [
  { id: 1, amount: 7518, title: 'Completed Projects' },
  { id: 2, amount: 3472, title: 'Satisfied Customers' },
  { id: 3, amount: 2184, title: 'Expert Employees' },
  { id: 4, amount: 4523, title: 'Awards Won' }
];

const blogList = [
  {
    id: 1,
    category: 'Coding',
    date: '14 Apr 2022',
    image: '/img/photos/b4.jpg',
    title: 'Ligula tristique quis risus',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.`
  },
  {
    id: 2,
    category: 'Workspace',
    date: '29 Mar 2022',
    image: '/img/photos/b5.jpg',
    title: 'ullam id dolor elit id nibh',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.`
  },
  {
    id: 3,
    category: 'Meeting',
    date: '26 Feb 2022',
    image: '/img/photos/b6.jpg',
    title: 'Ultricies fusce porta elit',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.`
  },
  {
    id: 4,
    category: 'Business Tips',
    date: '7 Jan 2022',
    image: '/img/photos/b7.jpg',
    title: 'Morbi leo risus porta eget',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.`
  }
];

const teams = [
  {
    id: 1,
    name: 'Coriss Ambady',
    designation: 'Financial Analyst',
    image: { '1x': '/img/avatars/t1.jpg', '2x': '/img/avatars/t1@2x.jpg 2x' }
  },
  {
    id: 2,
    name: 'Cory Zamora',
    designation: 'Marketing Specialist',
    image: { '1x': '/img/avatars/t2.jpg', '2x': '/img/avatars/t2@2x.jpg 2x' }
  },
  {
    id: 3,
    name: 'Nikolas Brooten',
    designation: 'Sales Manager',
    image: { '1x': '/img/avatars/t3.jpg', '2x': '/img/avatars/t3@2x.jpg 2x' }
  },
  {
    id: 4,
    name: 'Jackie Sanders',
    designation: 'Investment Planner',
    image: { '1x': '/img/avatars/t4.jpg', '2x': '/img/avatars/t4@2x.jpg 2x' }
  }
];

const testimonialList = [
  {
    id: 1,
    name: 'Coriss Ambady',
    image: '/img/avatars/te7.jpg',
    designation: 'Financial Analyst',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
  },
  {
    id: 2,
    name: 'Cory Zamora',
    image: '/img/avatars/te8.jpg',
    designation: 'Marketing Specialist',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
  },
  {
    id: 3,
    name: 'Barclay Widerski',
    image: '/img/avatars/te9.jpg',
    designation: 'Sales Specialist',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
  }
];

const faq = [
  {
    id: 1,
    title: 'Can I cancel my subscription?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.`
  },
  {
    id: 2,
    title: 'Which payment methods do you accept?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.`
  },
  {
    id: 3,
    title: 'How can I manage my Account?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.`
  },
  {
    id: 4,
    title: 'Is my credit card information secure?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.`
  }
];

export { list, facts, blogList, teams, testimonialList, faq };
