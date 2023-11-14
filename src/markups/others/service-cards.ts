const card1Markup = `import { ServiceCard1 } from 'components/reuseable/service-cards';
import Search from 'icons/Search';

<ServiceCard1
  linkUrl='#'
  Icon={Search}
  linkType='yellow'
  linkText='Learn More'
  title='SEO Services'
  description='Nulla vitae elit libero, a pharetra augue.'
/>
`;

const card2Markup = `import { ServiceCard2 } from 'components/reuseable/service-cards';

<ServiceCard2
  linkUrl='#'
  title='24/7 Support'
  icon='uil-phone-volume'
  description='Nulla vitae elit libero, a pharetra augue.'
/>
`;

const card3Markup = `import { ServiceCard3 } from 'components/reuseable/service-cards';
import Target from 'icons/Target';

<ServiceCard3
  Icon={Target}
  title='Career Growth'
  description='Duis mollis gravida commodo id luctus erat porttitor ligula.'
/>
`;

const card4Markup = `import { ServiceCard4 } from 'components/reuseable/service-cards';
import Telephone from 'icons/Telephone';

<ServiceCard4
  Icon={Telephone}
  color='yellow'
  title='24/7 Support'
  cardColor='bg-pale-yellow'
  columnClass='col-md-5 offset-md-1 align-self-end'
  description='Nulla vitae elit libero, a pharetra augue.'
/>
`;

const card5Markup = `import { ServiceCard5 } from 'components/reuseable/service-cards';

<ServiceCard5
  url="#"
  icon="uil-monitor"
  title="Web Design"
  description="Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida."
/>
`;

const card6Markup = `import { ServiceCard6 } from 'components/reuseable/service-cards';

<ServiceCard6
  linkUrl='#'
  title='24/7 Support'
  icon='uil-phone-volume'
  description='Nulla vitae elit libero, a pharetra augue.'
/>
`;

export { card1Markup, card2Markup, card3Markup, card4Markup, card5Markup, card6Markup };
