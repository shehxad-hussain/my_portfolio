import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markups -------- //
import { basicMarkup, colorMarkup, borderMarkup, imageMarkup } from 'markups/elements/card';
// -------- data -------- //
const quickAccess = [
  { title: 'Basic', url: 'snippet-1' },
  { title: 'Color', url: 'snippet-2' },
  { title: 'Border', url: 'snippet-3' },
  { title: 'Image', url: 'snippet-4' }
];

const Card: FC = () => {
  return (
    <DocLayout
      pageTitle="Card"
      quickAccssLinks={quickAccess}
      description={
        <>
          Cards provide a flexible and extensible content container with multiple variants and options. For further
          instructions on Bootstrap cards please visit{' '}
          <a
            href="https://getbootstrap.com/docs/5.2/components/card/"
            target="_blank"
            className="hover more"
            rel="noreferrer"
          >
            Bootstrap docs
          </a>
        </>
      }
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Basic</h2>
        <div className="card">
          <div className="card-body">
            <div className="row g-6">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Default</h5>
                    <p className="card-text">
                      Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit
                      amet non magna. Vivamus sagittis lacus augue.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title">Shadow</h5>
                    <p className="card-text">
                      Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit
                      amet non magna. Vivamus sagittis lacus augue.
                    </p>
                  </div>
                </div>
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
                <CodeHighlight language="jsx">{basicMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Color</h2>
        <div className="card">
          <div className="card-body">
            <div className="row g-6">
              <div className="col-lg-4">
                <div className="card shadow-none bg-primary text-white">
                  <div className="card-body">
                    <h5 className="card-title text-white">Solid</h5>
                    <p className="card-text">Sed posuere consectetur est at lobortis. Duis mollis, commodo luctus.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card shadow-none bg-pale-primary">
                  <div className="card-body">
                    <h5 className="card-title">Pale</h5>
                    <p className="card-text">Sed posuere consectetur est at lobortis. Duis mollis, commodo luctus.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card shadow-none bg-soft-primary">
                  <div className="card-body">
                    <h5 className="card-title">Soft</h5>
                    <p className="card-text">Sed posuere consectetur est at lobortis. Duis mollis, commodo luctus.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>

          <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{colorMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-3">Border</h2>
        <p className="lead">Available options:</p>
        <p className="lead mb-8">
          <code className="code">border-primary</code>, <code className="code">border-aqua</code>,{' '}
          <code className="code">border-green</code>, <code className="code">border-leaf</code>,{' '}
          <code className="code">border-navy</code>, <code className="code">border-orange</code>,{' '}
          <code className="code">border-pink</code>, <code className="code">border-purple</code>,{' '}
          <code className="code">border-red</code>, <code className="code">border-violet</code>,{' '}
          <code className="code">border-yellow</code>, <code className="code">border-fuchsia</code>,{' '}
          <code className="code">border-sky</code>, <code className="code">border-grape</code>,{' '}
          <code className="code">border-soft-primary</code>, <code className="code">border-soft-aqua</code>,{' '}
          <code className="code">border-soft-green</code>, <code className="code">border-soft-leaf</code>,{' '}
          <code className="code">border-soft-navy</code>, <code className="code">border-soft-orange</code>,{' '}
          <code className="code">border-soft-pink</code>, <code className="code">border-soft-purple</code>,{' '}
          <code className="code">border-soft-red</code>, <code className="code">border-soft-violet</code>,{' '}
          <code className="code">border-soft-yellow</code>, <code className="code">border-soft-fuchsia</code>,{' '}
          <code className="code">border-soft-sky</code>, <code className="code">border-soft-grape</code>.
        </p>

        <div className="card">
          <div className="card-body">
            <div className="row g-6">
              <div className="col-lg-6">
                <div className="card shadow-lg card-border-start border-soft-blue">
                  <div className="card-body">
                    <h5 className="card-title">Start</h5>
                    <p className="card-text">
                      Sed posuere consectetur est at lobortis. Duis mollis, commodo luctus, nisi erat porttitor ligula,
                      eget lacinia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card shadow-lg card-border-top border-green">
                  <div className="card-body">
                    <h5 className="card-title">Top</h5>
                    <p className="card-text">
                      Sed posuere consectetur est at lobortis. Duis mollis, commodo luctus, nisi erat porttitor ligula,
                      eget lacinia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card bg-soft-yellow card-border-bottom border-soft-yellow">
                  <div className="card-body">
                    <h5 className="card-title">Bottom</h5>
                    <p className="card-text">
                      Sed posuere consectetur est at lobortis. Duis mollis, commodo luctus, nisi erat porttitor ligula,
                      eget lacinia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card bg-soft-red card-border-end border-red">
                  <div className="card-body">
                    <h5 className="card-title">End</h5>
                    <p className="card-text">
                      Sed posuere consectetur est at lobortis. Duis mollis, commodo luctus, nisi erat porttitor ligula,
                      eget lacinia.
                    </p>
                  </div>
                </div>
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
                <CodeHighlight language="jsx">{borderMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper py-16">
        <h2 className="mb-5">Image</h2>
        <div className="card">
          <div className="card-body">
            <div className="row g-6">
              <div className="col-lg-6">
                <div className="card">
                  <img className="card-img-top" src="/img/photos/p1.jpg" srcSet="/img/photos/p1@2x.jpg 2x" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Image Cap Top</h5>
                    <p className="card-text">
                      Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit
                      amet non magna. Vivamus sagittis lacus augue.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Image Cap Bottom</h5>
                    <p className="card-text">
                      Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit
                      amet non magna. Vivamus sagittis lacus augue.
                    </p>
                  </div>

                  <img className="card-img-bottom" src="/img/photos/p2.jpg" srcSet="/img/photos/p2@2x.jpg 2x" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-4">
              View example's code
            </a>
          </div>

          <div id="collapse-4" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{imageMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Card;
