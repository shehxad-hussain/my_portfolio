const card1Markup = `import { ProjectCard1 } from 'components/reuseable/project-cards';

<ProjectCard1   
  link="#"
  title='Cras Fermentum Sem'
  category='COSMETIC'
  description='Duis mollis, est non commodo luctus'
  images={[{ width: 900, height: 800, url: '/img/photos/cs1.jpg', tooltip: 'Purus Tellus Magna' }]}
/>
`;

const card2Markup = `import { ProjectCard2 } from 'components/reuseable/project-cards';

<ProjectCard2   
  link='#'
  color='purple'
  category='COSMETIC'
  title='Cras Fermentum Sem'
  imageClassName='col-lg-8 col-xl-7 offset-xl-1 rounded'
  description='Duis mollis, est non commodo luctus.'
  cardStyle={{ transform: 'translate(0px, -23px, 0px)' }}
  detailsStyle={{ right: '10%', bottom: '25%' }}
  image={{ width: 1300, height: 1262, url: '/img/photos/cs16.jpg' }}
/>
`;

const card3Markup = `import { ProjectCard3 } from 'components/reuseable/project-cards';

<ProjectCard3   
  link='/single-project-1'
  category='Magazine, Book'
  title='Mollis Ipsum Mattis'
  image='/img/photos/pd8.jpg'
  fullImage='/img/photos/pd8-full.jpg'
/>
`;

export { card1Markup, card2Markup, card3Markup };
