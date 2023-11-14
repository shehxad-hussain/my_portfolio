import Shield from 'icons/lineal/Shield';
import Design from 'icons/lineal/Design';
import Target from 'icons/lineal/Target';
import Wallet from 'icons/lineal/Wallet';
import ChatTwo from 'icons/lineal/ChatTwo';
import Loyalty from 'icons/lineal/Loyalty';
import Padlock from 'icons/lineal/Padlock';
import AwardTwo from 'icons/lineal/AwardTwo';
import CheckList from 'icons/lineal/CheckList';
import Insurance from 'icons/lineal/Insurance';
import Telephone from 'icons/lineal/Telephone';
import Analytics from 'icons/lineal/Analytics';
import Megaphone from 'icons/lineal/Megaphone';
import LightBulb from 'icons/lineal/LightBulb';
import PieChartTwo from 'icons/lineal/PieChartTwo';
import CloudComputingTwo from 'icons/lineal/CloudComputingTwo';
import color from 'utils/color';

const serviceList = [
  {
    id: 1,
    Icon: Telephone,
    color: color.blue,
    title: '24/7 Support',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 2,
    Icon: Shield,
    color: color.yellow,
    title: 'Secure Payments',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 3,
    color: color.orange,
    Icon: CloudComputingTwo,
    title: 'Daily Updates',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 4,
    Icon: Analytics,
    color: color.pink,
    title: 'Market Research',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 5,
    Icon: ChatTwo,
    color: color.green,
    title: 'Social Engagement',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 6,
    Icon: Megaphone,
    color: color.purple,
    title: 'Content Marketing',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  }
];

const processList = [
  {
    id: 1,
    Icon: LightBulb,
    title: 'Collect Ideas',
    description: 'Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus.'
  },
  {
    id: 2,
    Icon: PieChartTwo,
    title: 'Data Analysis',
    description: 'Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna.'
  },
  {
    id: 3,
    Icon: Design,
    title: 'Magic Touch',
    description: 'Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed.'
  }
];

const abouts = [
  {
    id: 1,
    Icon: Target,
    color: color.blue,
    title: 'Our Vision',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus
        tellus.`
  },
  {
    id: 2,
    Icon: AwardTwo,
    color: color.green,
    title: 'Our Mission',
    description: `Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere  consectetur.`
  },
  {
    id: 3,
    Icon: Loyalty,
    color: color.yellow,
    title: 'Our Values',
    description: `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.`
  }
];

const pricingList = [
  {
    price: 9,
    plan: 'Basic',
    features: ['2 Projects', '100K API Access', '100MB Storage', 'Weekly Reports', '7/24 Support']
  },
  {
    price: 19,
    plan: 'Premium',
    features: ['5 Projects', '200K API Access', '300MB Storage', 'Weekly Reports', '7/24 Support']
  },
  {
    price: 29,
    plan: 'Corporate',
    features: ['20 Projects', '300K API Access', '500MB Storage', 'Weekly Reports', '7/24 Support']
  },
  {
    price: 49,
    plan: 'Community',
    features: ['90 Projects', '900K API Access', '900MB Storage', 'Weekly Reports', '7/24 Support']
  }
];

const faqList = [
  {
    id: 1,
    Icon: CheckList,
    title: 'Can I cancel my subscription?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`
  },
  {
    id: 2,
    Icon: Wallet,
    title: 'Which payment methods do you accept?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`
  },
  {
    id: 3,
    Icon: Insurance,
    title: 'How can I manage my Account?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`
  },
  {
    id: 4,
    Icon: Padlock,
    title: 'Is my credit card information secure?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`
  }
];

export default { serviceList, processList, abouts, pricingList, faqList };
