const typerMarkup = `import Typewriter from 'typewriter-effect';

<Typewriter
  options={{
    loop: true,
    autoStart: true,
    strings: ['easy usage', 'fast transactions', 'secure payments']
  }}
/>
`;

const replaceMeMarkup = `<span class="rotator-fade text-primary">easy usage,fast transactions,secure payments</span>

<span class="rotator-zoom text-primary">easy usage,fast transactions,secure payments</span>
`;

export { typerMarkup, replaceMeMarkup };
