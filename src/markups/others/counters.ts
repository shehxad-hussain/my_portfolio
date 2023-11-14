const counter1Markup = `import { Counter1 } from 'components/reuseable/counter';

<Counter1 title="Completed Projects" number={1000} />
<Counter1 title="Completed Projects" number={1000} titleColor="text-primary" />
`;

const counter2Markup = `import { Counter2 } from 'components/reuseable/counter';

<Counter2 title="Completed Projects" amount={1000} />
`;

const counter3Markup = `import { Counter3 } from 'components/reuseable/counter';

<Counter3 title="Completed Projects" amount={1000} Icon={<Icon />} />
`;

export { counter1Markup, counter2Markup, counter3Markup };
