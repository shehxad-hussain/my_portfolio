const jobMeta = [
  { id: 1, icon: 'uil-clock', title: 'Full time' },
  { id: 2, icon: 'uil-location-arrow', title: 'Manchester, UK' },
  { id: 3, icon: 'uil-building', title: 'Design Department' }
];

const responsiblities = [
  ['Aenean eu leo quam ornare curabitur blandit tempus.', 'Nullam quis risus eget urna mollis ornare donec elit.'],
  ['Etiam porta sem malesuada magna mollis euismod.', 'Fermentum massa vivamus faucibus amet euismod.']
];

const requirements = [
  ['Aenean eu leo quam ornare curabitur blandit tempus.', 'Nullam quis risus eget urna mollis ornare donec elit.'],
  ['Etiam porta sem malesuada magna mollis euismod.', 'Fermentum massa vivamus faucibus amet euismod.']
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

// eslint-disable-next-line import/no-anonymous-default-export
export default { jobList, jobMeta, requirements, responsiblities };
