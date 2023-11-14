const lineMarkup = `<ul className="progress-list">
<li>
  <p>Marketing</p>
  <div className="progressbar line blue" data-value="100" />
</li>
<li>
  <p>Strategy</p>
  <div className="progressbar line green" data-value="80" />
</li>
<li>
  <p>Development</p>
  <div className="progressbar line red" data-value="85" />
</li>
<li>
  <p>Stabilization</p>
  <div className="progressbar line yellow" data-value="75" />
</li>
</ul>
`;

const circleMarkup = `<div className="progressbar semi-circle blue" data-value="40" />

<div className="progressbar semi-circle green" data-value="80" />

<div className="progressbar semi-circle soft-red" data-value="65" />

<div className="progressbar semi-circle soft-yellow" data-value="45" />
`;

export { lineMarkup, circleMarkup };
