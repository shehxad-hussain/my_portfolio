import User from 'icons/lineal/User';
import Gift from 'icons/lineal/Gift';
import Check from 'icons/lineal/Check';
import IdCard from 'icons/lineal/IdCard';
import ChatTwo from 'icons/lineal/ChatTwo';
import Browser from 'icons/lineal/Browser';
import { LinkType } from 'types/demo-1';
import BriefcaseTwo from 'icons/lineal/BriefcaseTwo';

const services = [
  {
    id: 1,
    link: '#',
    Icon: Browser,
    title: 'Content Marketing',
    linkType: LinkType.yellow,
    iconClassName: 'icon-svg-md text-yellow mb-3',
    cardClassName: 'card-border-bottom border-soft-yellow',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 2,
    link: '#',
    Icon: ChatTwo,
    title: 'Social Engagement',
    linkType: LinkType.green,
    iconClassName: 'icon-svg-md text-green mb-3',
    cardClassName: 'card-border-bottom border-soft-green',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 3,
    link: '#',
    Icon: IdCard,
    linkType: LinkType.orange,
    title: 'Identity & Branding',
    iconClassName: 'icon-svg-md text-orange mb-3',
    cardClassName: 'card-border-bottom border-soft-orange',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 4,
    link: '#',
    Icon: Gift,
    linkType: LinkType.blue,
    title: 'Product Design',
    iconClassName: 'icon-svg-md text-blue mb-3',
    cardClassName: 'card-border-bottom border-soft-blue',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  }
];

const processList = [
  {
    no: '1',
    className: 'me-lg-6',
    title: 'Collect Ideas',
    subtitle: 'Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus.'
  },
  {
    no: '2',
    title: 'Data Analysis',
    className: 'ms-lg-13 mt-6',
    subtitle: 'Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna.'
  },
  {
    no: '3',
    title: 'Finalize Product',
    className: 'mx-lg-6 mt-6',
    subtitle: 'Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed.'
  }
];

const factList = [
  { id: 1, number: 7518, title: 'Completed Projects', Icon: Check },
  { id: 2, number: 3472, title: 'Happy Customers', Icon: User },
  { id: 3, number: 2184, title: 'Expert Employees', Icon: BriefcaseTwo }
];

const reviews = [
  {
    id: 1,
    name: 'Coriss Ambady',
    designation: 'Financial Analyst',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta. Cras mattis consectetur.`
  },
  {
    id: 2,
    name: 'Cory Zamora',
    designation: 'Marketing Specialist',
    review: `Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet purus sit amet fermentum.`
  },
  {
    id: 3,
    name: 'Nikolas Brooten',
    designation: 'Sales Manager',
    review: `Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor eu rutrum. Nulla vitae libero.`
  },
  {
    id: 4,
    name: 'Coriss Ambady',
    designation: 'Financial Analyst',
    review: `Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus eu tincidunt auctor nullam rutrum, pharetra augue.`
  }
];

export { services, processList, factList, reviews };
