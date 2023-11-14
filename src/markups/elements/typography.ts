const headingMarkup = `<h1>h1. heading</h1>
<h2>h2. heading</h2>
<h3>h3. heading</h3>
<h4>h4. heading</h4>
<h5>h5. heading</h5>
<h6>h6. heading</h6>

<h1 className="text-uppercase">h1. heading</h1>
<h2 className="text-uppercase">h2. heading</h2>
<h3 className="text-uppercase">h3. heading</h3>
<h4 className="text-uppercase">h4. heading</h4>
<h5 className="text-uppercase">h5. heading</h5>
<h6 className="text-uppercase">h6. heading</h6>`;

const displayMarkup = `<h1 className="display-1">Display 1</h1>
<h1 className="display-2">Display 2</h1>
<h1 className="display-3">Display 3</h1>
<h1 className="display-4">Display 4</h1>
<h1 className="display-5">Display 5</h1>
<h1 className="display-6">Display 6</h1>`;

const tinyMarkup = `<h2 className="fs-15 text-uppercase text-navy">Tiny heading</h2>
<h2 className="fs-15 text-uppercase text-line text-navy">Tiny heading with line</h2>`;

const leadMarkup = `<p className="lead">Lead</p>
<p className="lead fs-lg mb-0">Lead Larger</p>`;

const listMarkup = `<ul className="unordered-list bullet-primary mb-0">
  <li>Aenean eu leo quam.</li>
  <li>Nullam quis risus eget.</li>
  <li>Donec id elit non mi porta.</li>
</ul>

<ul className="icon-list bullet-primary mb-0">
  <li>
    <span><i className="uil uil-arrow-right" /></span>
    <span>Aenean eu leo quam.</span>
  </li>
  <li>
    <span><i className="uil uil-arrow-right" /></span>
    <span>Nullam quis risus eget.</span>
  </li>
  <li>
    <span><i className="uil uil-arrow-right" /></span>
    <span>Donec id elit non mi porta.</span>
  </li>
</ul>

<ul className="icon-list bullet-bg bullet-soft-green mb-0">
  <li>
    <span><i className="uil uil-check" /></span>
    <span>Aenean eu leo quam.</span>
  </li>
  <li>
    <span><i className="uil uil-check" /></span>
    <span>Nullam quis risus eget.</span>
  </li>
  <li>
    <span><i className="uil uil-check" /></span>
    <span>Donec id elit non mi porta.</span>
  </li>
</ul>`;

const quoteMarkup = `<figure>
  <blockquote className="fs-lg">
    <p>...</p>
  </blockquote>
  <figcaption className="blockquote-footer">Connor Gibson</figcaption>
</figure>

<div className="card mb-0">
  <div className="card-body">
    <figure className=" mb-0">
      <blockquote className="icon fs-lg">
        <p>...</p>
      </blockquote>
      <figcaption className="blockquote-footer mb-0">Connor Gibson</figcaption>
    </figure>
  </div>
</div>`;

const dropcapMarkup = `<span className="dropcap text-dark">A</span>
<span className="dropcap text-primary">A</span>
<span className="dropcap rounded-circle text-primary bg-pale-primary">A</span>`;

const linksMarkup = `import NextLink from 'components/reuseable/links/NextLink';

<NextLink title="Link example" href="#" className="hover link-body me-4 ms-1 mb-5" />
<NextLink title="Link example" href="#" className="hover me-4 mb-5" />
<NextLink title="Link example" href="#" className="hover more me-4 mb-5" />

<NextLink title="Link example" href="#" className="hover-2 link-body me-4 mb-5" />
<NextLink title="Link example" href="#" className="hover-2 me-4 mb-5" />
<NextLink title="Link example" href="#" className="hover-2 more me-4 mb-5" />

<NextLink title="Link example" href="#" className="hover-3 link-body me-4" />
<NextLink title="Link example" href="#" className="hover-3 me-4" />
<NextLink title="Link example" href="#" className="hover-3 more me-4" />`;

export { headingMarkup, displayMarkup, tinyMarkup, leadMarkup, listMarkup, quoteMarkup, dropcapMarkup, linksMarkup };
