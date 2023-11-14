import Alarm from 'icons/solid-mono/Alarm';
import Wallet from 'icons/solid-mono/Wallet';
import Target from 'icons/solid-mono/Target';
import Building from 'icons/solid-mono/Building';
import Employees from 'icons/solid-mono/Employees';
import VideoChat from 'icons/solid-mono/VideoChat';

const facilities = [
  {
    id: 1,
    Icon: Target,
    title: 'Career Growth',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 2,
    Icon: VideoChat,
    title: 'Work From Anywhere',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 3,
    Icon: Wallet,
    title: 'Smart Salary',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 4,
    Icon: Building,
    title: 'Medical Insurance',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 5,
    Icon: Alarm,
    title: 'Flexible Hours',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 6,
    Icon: Employees,
    title: 'Amazing Work Culture',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  }
];

const testimonialList = [
  {
    id: 1,
    name: 'Coriss Ambady',
    image: '/img/avatars/te1.jpg',
    designation: 'Financial Analyst',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis.`
  },
  {
    id: 2,
    name: 'Cory Zamora',
    image: '/img/avatars/te2.jpg',
    designation: 'Marketing Specialist',
    review: `Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia.`
  },
  {
    id: 3,
    name: 'Nikolas Brooten',
    image: '/img/avatars/te3.jpg',
    designation: 'Sales Manager',
    review: `Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum. Donec sed odio dui.`
  },
  {
    id: 4,
    name: 'Coriss Ambady',
    image: '/img/avatars/te4.jpg',
    designation: 'Financial Analyst',
    review: `Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor`
  },
  {
    id: 5,
    name: 'Laura Widerski',
    image: '/img/avatars/te5.jpg',
    designation: 'Sales Specialist',
    review: `Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient.`
  },
  {
    id: 6,
    name: 'Jackie Sanders',
    image: '/img/avatars/te6.jpg',
    designation: 'Jackie Sanders',
    review: `Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus magnis dis montes, nascetur ridiculus mus. Donec sed odio.`
  }
];

const jobList = [
  {
    id: 1,
    company: 'SD',
    time: 'Full Time',
    avatarColor: 'bg-red',
    location: 'San Francisco, US',
    title: 'Senior Graphic Designer',
    badgeColor: 'bg-pale-blue text-blue'
  },
  {
    id: 2,
    company: 'UX',
    time: 'Remote',
    location: 'Anywhere',
    title: 'UI/UX Designer',
    avatarColor: 'bg-green',
    badgeColor: 'bg-pale-aqua text-aqua'
  },
  {
    id: 3,
    company: 'AN',
    time: 'Full Time',
    avatarColor: 'bg-yellow',
    location: 'Birmingham, UK',
    badgeColor: 'bg-pale-blue text-blue',
    title: 'Multimedia Artist & Animator'
  },
  {
    id: 4,
    company: 'FD',
    time: 'Part Time',
    location: 'Sydney, AU',
    avatarColor: 'bg-purple',
    title: 'Front End Developer',
    badgeColor: 'bg-pale-violet text-violet'
  },
  {
    id: 5,
    company: 'MD',
    time: 'Full Time',
    avatarColor: 'bg-orange',
    title: 'Mobile Developer',
    location: 'San Francisco, US',
    badgeColor: 'bg-pale-blue text-blue'
  },
  {
    id: 6,
    company: 'MD',
    time: 'Full Time',
    avatarColor: 'bg-pink',
    title: '.NET Developer',
    location: 'Manchester, UK',
    badgeColor: 'bg-pale-blue text-blue'
  }
];

const accordionList = [
  {
    no: 'One',
    expand: false,
    heading: 'How do I get my subscription receipt?',
    body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
  },
  {
    no: 'Two',
    expand: false,
    heading: 'Are there any discounts for people in need?',
    body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
  },
  {
    no: 'Three',
    expand: false,
    heading: 'Do you offer a free trial edit?',
    body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
  },
  {
    no: 'Four',
    expand: false,
    heading: 'How do I reset my Account password?',
    body: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.`
  }
];

export default { facilities, testimonialList, jobList, accordionList };
