const basicMarkup = `<ul className="nav nav-tabs nav-tabs-basic">
<li className="nav-item">
  <a className="nav-link active" data-bs-toggle="tab" href="#tab3-1">
    Tab 1
  </a>
</li>
<li className="nav-item">
  <a className="nav-link" data-bs-toggle="tab" href="#tab3-2">
    Tab 2
  </a>
</li>
<li className="nav-item">
  <a className="nav-link" data-bs-toggle="tab" href="#tab3-3">
    Tab 3
  </a>
</li>
</ul>

<div className="tab-content mt-0 mt-md-5">
<div className="tab-pane fade show active" id="tab3-1">
  ...
</div>

<div className="tab-pane fade" id="tab3-2">
  ...
</div>

<div className="tab-pane fade" id="tab3-3">
  ...
</div>
</div>
`;

const pillMarkup = `<ul className="nav nav-tabs nav-pills">
  <li className="nav-item">
      <a className="nav-link active" data-bs-toggle="tab" href="#tab1-1">
          <i className="uil uil-phone-volume pe-1" />
          <span>Tab 1</span>
      </a>
  </li>

  <li className="nav-item">
      <a className="nav-link" data-bs-toggle="tab" href="#tab1-2">
          <i className="uil uil-shield-exclamation pe-1" />
          <span>Tab 2</span>
      </a>
  </li>

  <li className="nav-item">
      <a className="nav-link" data-bs-toggle="tab" href="#tab1-3">
          <i className="uil uil-laptop-cloud pe-1" />
          <span>Tab 3</span>
      </a>
  </li>
</ul>

<div className="tab-content">
  <div className="tab-pane fade show active" id="tab1-1">...</div>
  <div className="tab-pane fade" id="tab1-2">...</div>
  <div className="tab-pane fade" id="tab1-3">...</div>
</div>
`;

const justifiedMarkup = `<ul className="nav nav-tabs nav-tabs-bg nav-tabs-shadow-lg d-flex justify-content-between nav-justified flex-lg-row flex-column">
<li className="nav-item">
  <a className="nav-link d-flex flex-row active" data-bs-toggle="tab" href="#tab2-1">
    <div>
      <Rocket className="icon-svg-md text-yellow me-4" />
    </div>

    <div>
      <h4 className="mb-1">Tab</h4>
      <p>Description</p>
    </div>
  </a>
</li>
<li className="nav-item">
  <a className="nav-link d-flex flex-row" data-bs-toggle="tab" href="#tab2-2">
    <div>
      <Savings className="icon-svg-md text-green me-4" />
    </div>

    <div>
      <h4 className="mb-1">Tab</h4>
      <p>Description</p>
    </div>
  </a>
</li>
</ul>

<div className="tab-content">
<div className="tab-pane fade show active" id="tab2-1">
  <p className="mb-0">...</p>
</div>

<div className="tab-pane fade" id="tab2-2">
  <p className="mb-0">...</p>
</div>
</div>
`;

export { basicMarkup, pillMarkup, justifiedMarkup };
