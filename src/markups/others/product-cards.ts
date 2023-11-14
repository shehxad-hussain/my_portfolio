const card1Markup = `import { ProductCard } from 'components/reuseable/product-cards';

<ProductCard 
  image="..."
  title="..."
  new={true}
  rating={5}
  sale={false}
  category="..."
  className="..."
  salePrice={12.00}
  regularPrice={14.00}
/>
`;

const card2Markup = `import { ProductCard2 } from 'components/reuseable/product-cards';

<ProductCard2 
  size="..."
  image="..."
  title="..."
  price="..."
  color="..."
/>
`;

export { card1Markup, card2Markup };
