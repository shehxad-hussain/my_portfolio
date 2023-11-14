import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markups -------- //
import {
  simpleMarkup,
  stripedMarkup,
  borderedMarkup,
  hoverableMarkup,
  simpleDarkMarkup,
  borderlessMarkup,
  responsiveMarkup
} from 'markups/elements/tables';
// -------- data -------- //
const quickAccess = [
  { title: 'Simple', url: 'snippet-1' },
  { title: 'Simple Dark', url: 'snippet-2' },
  { title: 'Striped', url: 'snippet-3' },
  { title: 'Bordered', url: 'snippet-4' },
  { title: 'Borderless', url: 'snippet-5' },
  { title: 'Hoverable', url: 'snippet-6' },
  { title: 'Responsive', url: 'snippet-7' }
];

const Tables: FC = () => {
  const Table = (className: string = '') => {
    return (
      <table className={`table ${className}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <DocLayout
      pageTitle="Tables"
      quickAccssLinks={quickAccess}
      description={
        <>
          Some examples for displaying tables. For more detailed examples and guidelines please visit{' '}
          <a
            href="https://getbootstrap.com/docs/5.2/content/tables"
            target="_blank"
            rel="noreferrer"
            className="hover more"
          >
            Bootstrap docs
          </a>
        </>
      }
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Simple</h2>
        <div className="card">
          <div className="card-body">{Table()}</div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-1">
              View example's code
            </a>
          </div>

          <div id="collapse-1" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{simpleMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Simple Dark</h2>
        <div className="card">
          <div className="card-body">{Table('table-dark')}</div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>

          <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{simpleDarkMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-3">Striped</h2>

        <div className="card">
          <div className="card-body">{Table('table-striped')}</div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-3">
              View example's code
            </a>
          </div>

          <div id="collapse-3" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{stripedMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper pt-16">
        <h2 className="mb-3">Bordered</h2>

        <div className="card">
          <div className="card-body">{Table('table-bordered')}</div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-4">
              View example's code
            </a>
          </div>

          <div id="collapse-4" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{borderedMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 5 ========== */}
      <section id="snippet-5" className="wrapper pt-16">
        <h2 className="mb-3">Borderless</h2>

        <div className="card">
          <div className="card-body">{Table('table-borderless')}</div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-5">
              View example's code
            </a>
          </div>

          <div id="collapse-5" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{borderlessMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 6 ========== */}
      <section id="snippet-6" className="wrapper pt-16">
        <h2 className="mb-3">Hoverable Rows</h2>

        <div className="card">
          <div className="card-body">{Table('table-hover')}</div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-6">
              View example's code
            </a>
          </div>

          <div id="collapse-6" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{hoverableMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 7 ========== */}
      <section id="snippet-7" className="wrapper py-16">
        <h2 className="mb-3">Responsive</h2>

        <div className="card">
          <div className="card-body">{Table('table-responsive')}</div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-7">
              View example's code
            </a>
          </div>

          <div id="collapse-7" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{responsiveMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Tables;
