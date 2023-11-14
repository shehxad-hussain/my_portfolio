import Code from 'icons/solid-mono/Code';
import Team from 'icons/solid-mono/Team';
import Bulb from 'icons/solid-mono/Bulb';
import Lamp from 'icons/solid-mono/Lamp';
import Puzzle from 'icons/solid-mono/Puzzle';
import Devices from 'icons/solid-mono/Devices';
import GlobeTwo from 'icons/solid-mono/GlobeTwo';
import Headphone from 'icons/solid-mono/Headphone';

const serviceList = [
  {
    id: 1,
    url: '#',
    Icon: GlobeTwo,
    title: 'SEO Services',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.`
  },
  {
    id: 2,
    url: '#',
    Icon: Code,
    title: 'Web Design',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.`
  },
  {
    id: 3,
    url: '#',
    Icon: Team,
    title: 'Social Engagement',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.`
  },
  {
    id: 4,
    url: '#',
    Icon: Devices,
    title: 'App Development',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida eget metus cras justo.`
  }
];

const abouts = [
  {
    id: 1,
    Icon: Lamp,
    title: 'Creativity',
    description: 'Curabitur blandit lacus porttitor ridiculus mus.'
  },
  {
    id: 2,
    Icon: Bulb,
    title: 'Innovative Thinking',
    description: 'Curabitur blandit lacus porttitor ridiculus mus.'
  },
  {
    id: 3,
    Icon: Puzzle,
    title: 'Rapid Solutions',
    description: 'Curabitur blandit lacus porttitor ridiculus mus.'
  },
  {
    id: 4,
    Icon: Headphone,
    title: 'Top-Notch Support',
    description: 'Curabitur blandit lacus porttitor ridiculus mus.'
  }
];

const testimonialList = [
  {
    id: 1,
    name: 'Coriss Ambady',
    designation: 'Financial Analyst',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta
    felis euismod semper. Cras justo odio consectetur nulla dapibus curabitur blandit faucibus.`
  },
  {
    id: 2,
    name: 'Cory Zamora',
    designation: 'Marketing Specialist',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta
    felis euismod semper. Cras justo odio consectetur nulla dapibus curabitur blandit faucibus.`
  },
  {
    id: 3,
    name: 'Nikolas Brooten',
    designation: 'Sales Specialist',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta
    felis euismod semper. Cras justo odio consectetur nulla dapibus curabitur blandit faucibus.`
  }
];

export default { serviceList, abouts, testimonialList };
