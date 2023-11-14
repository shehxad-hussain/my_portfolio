const simpleMarkup = `import Accordion from 'components/reuseable/accordion';

<Accordion 
  no="One"
  type="plain" 
  expand={false} 
  heading="Professional Design"
  body="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh"
/>
`;

const cardMarkup = `import Accordion from 'components/reuseable/accordion';

<Accordion 
  no="One" 
  expand={false} 
  heading="Professional Design"
  body="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh"
/>
`;

const shadowMarkup = `import Accordion from 'components/reuseable/accordion';

<Accordion 
  no="One" 
  expand={false} 
  type="shadow-lg" 
  heading="Professional Design"
  body="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh"
/>
`;

export { shadowMarkup, cardMarkup, simpleMarkup };
