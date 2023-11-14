const card1Markup = `import { BlogCard1 } from 'components/reuseable/blog-cards';

<BlogCard1 date="..." category="..." image="..." title="..." />
`;

const card2Markup = `import { BlogCard2 } from 'components/reuseable/blog-cards';

<BlogCard2
  link="..."
  category="..."
  title="..."
  description="..."
  cardTop={<></>}
/>
`;

const card3Markup = `import { BlogCard3 } from 'components/reuseable/blog-cards';

<BlogCard3 link="..." title="..." image="..." category="..." description="..." />
`;

const card4Markup = `import { BlogCard4 } from 'components/reuseable/blog-cards';

<BlogCard4 date="..." title="..." image="..." category="..." description="..." />
`;

const card5Markup = `import { BlogCard5 } from 'components/reuseable/blog-cards';

<BlogCard4
  image="..."
  title="..."
  author="..."
  category="..."
  comments="..."
  createdAt="..."
/>
`;

export { card1Markup, card2Markup, card3Markup, card4Markup, card5Markup };
