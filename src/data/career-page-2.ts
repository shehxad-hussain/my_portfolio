import Alarm from 'icons/solid-mono/Alarm';
import Share from 'icons/solid-mono/Share';
import Target from 'icons/solid-mono/Target';
import Wallet from 'icons/solid-mono/Wallet';
import VideoCall from 'icons/solid-mono/VideoCall';
import PartnerShip from 'icons/solid-mono/PartnerShip';

const facilities = [
  {
    id: 1,
    Icon: Target,
    title: 'Career Growth',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 2,
    Icon: VideoCall,
    title: 'Work From Anywhere',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 3,
    Icon: Wallet,
    title: 'Smart Salary',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 4,
    Icon: Alarm,
    title: 'Flexible Hours',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  }
];

const services = [
  {
    id: 1,
    Icon: Share,
    title: 'Our Mission',
    description: 'Curabitur blandit lacus porttitor ridiculus mus.'
  },
  {
    id: 2,
    Icon: PartnerShip,
    title: 'Our Values',
    description: 'Curabitur blandit lacus porttitor ridiculus mus.'
  }
];

const designJobList = [
  {
    id: 1,
    link: '#',
    avatar: 'GD',
    time: 'Full Time',
    avatarColor: 'bg-red',
    location: 'San Francisco, US',
    title: 'Senior Graphic Designer'
  },
  {
    id: 2,
    link: '#',
    avatar: 'UX',
    time: 'Remote',
    location: 'Anywhere',
    title: 'UI/UX Designer',
    avatarColor: 'bg-green'
  },
  {
    id: 3,
    link: '#',
    avatar: 'AN',
    time: 'Full Time',
    avatarColor: 'bg-yellow',
    location: 'Birmingham, UK',
    title: 'Multimedia Artist & Animator'
  }
];

const developmentJobList = [
  {
    id: 1,
    link: '#',
    avatar: 'FD',
    time: 'Part Time',
    location: 'Sydney, AU',
    avatarColor: 'bg-purple',
    title: 'Front End Developer'
  },
  {
    id: 2,
    link: '#',
    avatar: 'MD',
    time: 'Full Time',
    avatarColor: 'bg-orange',
    title: 'Mobile Developer',
    location: 'San Francisco, US'
  },
  {
    id: 3,
    link: '#',
    avatar: 'NT',
    time: 'Full Time',
    avatarColor: 'bg-pink',
    title: '.NET Developer',
    location: 'Manchester, UK'
  }
];

const positionOptions = [
  { id: 0, title: 'Position', value: '' },
  { id: 1, title: 'Design', value: 'design' },
  { id: 2, title: 'Finance', value: 'finance' },
  { id: 3, title: 'Business', value: 'business' },
  { id: 4, title: 'Marketing', value: 'marketing' },
  { id: 5, title: 'Development', value: 'development' },
  { id: 6, title: 'Engineering', value: 'engineering' }
];

const typeOptions = [
  { id: 0, title: 'Type', value: '' },
  { id: 1, title: 'Full-time', value: 'full-time' },
  { id: 2, title: 'Part-time', value: 'part-time' },
  { id: 3, title: 'Remote', value: 'remote' }
];

const locationOptions = [
  { id: 0, title: 'Location', value: '' },
  { id: 1, title: 'Chicago, US', value: 'chicago' },
  { id: 2, title: 'Michigan, US', value: 'michigan' },
  { id: 3, title: 'New York, US', value: 'new-york' },
  { id: 4, title: 'Los Angles, US', value: 'los-angles' },
  { id: 5, title: 'Moscow, Russia', value: 'Moscow' },
  { id: 6, title: 'Sydney, Australia', value: 'sydney' },
  { id: 7, title: 'Birmingham, UK', value: 'birmingham' },
  { id: 8, title: 'Manchester, UK', value: 'manchester' },
  { id: 9, title: 'Beijing, China', value: 'beijing' }
];

export default {
  services,
  facilities,
  typeOptions,
  designJobList,
  positionOptions,
  locationOptions,
  developmentJobList
};
