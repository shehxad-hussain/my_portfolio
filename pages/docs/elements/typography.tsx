import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import NextLink from 'components/reuseable/links/NextLink';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markups -------- //
import {
  tinyMarkup,
  leadMarkup,
  listMarkup,
  quoteMarkup,
  linksMarkup,
  headingMarkup,
  displayMarkup,
  dropcapMarkup
} from 'markups/elements/typography';
// -------- data -------- //
const quickAccess = [
  { title: 'Headings', url: 'snippet-1' },
  { title: 'Display Headings', url: 'snippet-2' },
  { title: 'Tiny Headings', url: 'snippet-3' },
  { title: 'Lead', url: 'snippet-4' },
  { title: 'Lists', url: 'snippet-5' },
  { title: 'Blockquote', url: 'snippet-6' },
  { title: 'Dropcap', url: 'snippet-7' },
  { title: 'Links', url: 'snippet-8' }
];

const Typography: FC = () => {
  return (
    <DocLayout
      pageTitle="Tooltips & Popovers"
      quickAccssLinks={quickAccess}
      descriptionClass="lead px-xxl-13"
      headingColClass="col-md-9 col-lg-7 col-xl-7 mx-auto"
      description={
        <>
          Use Bootstrap{' '}
          <a
            href="https://getbootstrap.com/docs/5.2/components/tooltips/"
            className="hover more"
            rel="noreferrer"
            target="_blank"
          >
            Tooltips
          </a>{' '}
          and{' '}
          <a
            href="https://getbootstrap.com/docs/5.2/components/popovers/"
            className="hover more"
            rel="noreferrer"
            target="_blank"
          >
            Popovers
          </a>{' '}
          with our custom styles to add tooltips and popovers to any element on your website.
        </>
      }
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Headings</h2>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <h1>h1. heading</h1>
                <h2>h2. heading</h2>
                <h3>h3. heading</h3>
                <h4>h4. heading</h4>
                <h5>h5. heading</h5>
                <h6 className="mb-0">h6. heading</h6>
              </div>

              <div className="col-lg-6">
                <h1 className="text-uppercase">h1. heading</h1>
                <h2 className="text-uppercase">h2. heading</h2>
                <h3 className="text-uppercase">h3. heading</h3>
                <h4 className="text-uppercase">h4. heading</h4>
                <h5 className="text-uppercase">h5. heading</h5>
                <h6 className="text-uppercase mb-0">h6. heading</h6>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-1">
              View example's code
            </a>
          </div>

          <div id="collapse-1" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{headingMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Display Headings</h2>

        <div className="card">
          <div className="card-body">
            <h1 className="display-1">Display 1</h1>
            <h1 className="display-2">Display 2</h1>
            <h1 className="display-3">Display 3</h1>
            <h1 className="display-4">Display 4</h1>
            <h1 className="display-5">Display 5</h1>
            <h1 className="display-6 mb-0">Display 6</h1>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>

          <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{displayMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-5">Tiny Headings</h2>

        <div className="card">
          <div className="card-body">
            <div className="row gy-6">
              <div className="col-md-6">
                <h2 className="fs-15 text-uppercase text-navy mb-0">Tiny Heading</h2>
              </div>

              <div className="col-md-6">
                <h2 className="fs-15 text-uppercase text-line text-navy mb-0">Tiny Heading with Line</h2>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-3">
              View example's code
            </a>
          </div>

          <div id="collapse-3" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{tinyMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper pt-16">
        <h2 className="mb-5">Lead</h2>

        <div className="card">
          <div className="card-body">
            <p className="lead">Lead</p>
            <p className="lead fs-lg mb-0">Lead Larger</p>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-4">
              View example's code
            </a>
          </div>

          <div id="collapse-4" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{leadMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 5 ========== */}
      <section id="snippet-5" className="wrapper pt-16">
        <h2 className="mb-5">Lists</h2>

        <div className="card">
          <div className="card-body">
            <div className="row gy-6">
              <div className="col-lg-4">
                <ul className="unordered-list bullet-primary mb-0">
                  <li>Aenean eu leo quam.</li>
                  <li>Nullam quis risus eget.</li>
                  <li>Donec id elit non mi porta.</li>
                </ul>
              </div>

              <div className="col-lg-4">
                <ul className="icon-list bullet-primary mb-0">
                  <li>
                    <span>
                      <i className="uil uil-arrow-right" />
                    </span>
                    <span>Aenean eu leo quam.</span>
                  </li>
                  <li>
                    <span>
                      <i className="uil uil-arrow-right" />
                    </span>
                    <span>Nullam quis risus eget.</span>
                  </li>
                  <li>
                    <span>
                      <i className="uil uil-arrow-right" />
                    </span>
                    <span>Donec id elit non mi porta.</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4">
                <ul className="icon-list bullet-bg bullet-soft-green mb-0">
                  <li>
                    <span>
                      <i className="uil uil-check" />
                    </span>
                    <span>Aenean eu leo quam.</span>
                  </li>
                  <li>
                    <span>
                      <i className="uil uil-check" />
                    </span>
                    <span>Nullam quis risus eget.</span>
                  </li>
                  <li>
                    <span>
                      <i className="uil uil-check" />
                    </span>
                    <span>Donec id elit non mi porta.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-5">
              View example's code
            </a>
          </div>

          <div id="collapse-5" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{listMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 6 ========== */}
      <section id="snippet-6" className="wrapper pt-16">
        <h2 className="mb-5">Blockquote</h2>

        <div className="card">
          <div className="card-body">
            <div className="row gy-4 gy-md-0 align-items-center">
              <div className="col-md-6">
                <figure>
                  <blockquote className="fs-lg">
                    <p>
                      Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio.
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer">Connor Gibson</figcaption>
                </figure>
              </div>

              <div className="col-md-6">
                <div className="card mb-0">
                  <div className="card-body">
                    <figure className="mb-0">
                      <blockquote className="icon fs-lg">
                        <p>
                          Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Duis mollis, est non commodo luctus.
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">Connor Gibson</figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-6">
              View example's code
            </a>
          </div>

          <div id="collapse-6" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{quoteMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 7 ========== */}
      <section id="snippet-7" className="wrapper pt-16">
        <h2 className="mb-5">Dropcap</h2>

        <div className="card">
          <div className="card-body">
            <div className="row gx-lg-8 gx-xl-12">
              <div className="col-md-4">
                <p>
                  <span className="dropcap text-dark">A</span>enean non lectus sit amet est imperdiet cursus elementum
                  vitae eros. Cras quis odio in risus euismod suscipit. Fusce viverra ligula vel justo bibendum semper
                  amet.
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span className="dropcap text-primary">A</span>enean non lectus sit amet est imperdiet cursus
                  elementum vitae eros. Cras quis odio in risus euismod suscipit. Fusce viverra ligula vel justo
                  bibendum semper amet.
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span className="dropcap rounded-circle text-primary bg-pale-primary">A</span>enean non lectus sit
                  amet est imperdiet cursus elementum vitae eros. Cras quis odio in risus euismod suscipit. Fusce
                  viverra ligula vel justo bibendum semper amet.
                </p>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-7">
              View example's code
            </a>
          </div>

          <div id="collapse-7" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{dropcapMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 8 ========== */}
      <section id="snippet-8" className="wrapper py-16">
        <h2 className="mb-5">Links</h2>
        <p className="lead">Available options:</p>
        <p className="lead mb-8">
          <code className="code">link-body</code>, <code className="code">link-aqua</code>,{' '}
          <code className="code">link-green</code>, <code className="code">link-leaf</code>,{' '}
          <code className="code">link-navy</code>, <code className="code">link-orange</code>,{' '}
          <code className="code">link-pink</code>, <code className="code">link-purple</code>,{' '}
          <code className="code">link-red</code>, <code className="code">link-violet</code>,{' '}
          <code className="code">link-yellow</code>, <code className="code">link-fuchsia</code>,{' '}
          <code className="code">link-sky</code>, <code className="code">link-grape</code>.
        </p>

        <div className="card">
          <div className="card-body">
            <NextLink title="Link example" href="#" className="hover link-body me-4 ms-1 mb-5" />
            <NextLink title="Link example" href="#" className="hover me-4 mb-5" />
            <NextLink title="Link example" href="#" className="hover more me-4 mb-5" />

            <br />

            <NextLink title="Link example" href="#" className="hover-2 link-body me-4 mb-5" />
            <NextLink title="Link example" href="#" className="hover-2 me-4 mb-5" />
            <NextLink title="Link example" href="#" className="hover-2 more me-4 mb-5" />

            <br />

            <NextLink title="Link example" href="#" className="hover-3 link-body me-4" />
            <NextLink title="Link example" href="#" className="hover-3 me-4" />
            <NextLink title="Link example" href="#" className="hover-3 more me-4" />
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-8">
              View example's code
            </a>
          </div>

          <div id="collapse-8" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{linksMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Typography;
