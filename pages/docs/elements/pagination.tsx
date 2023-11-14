import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import Pagination from 'components/reuseable/Pagination';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markups -------- //
import { defaultMarkup, alternativeMarkup, breadcrumbMarkup } from 'markups/elements/pagination';
// -------- data -------- //
const quickAccess = [
  { title: 'Default', url: 'snippet-1' },
  { title: 'Alternative', url: 'snippet-2' },
  { title: 'Breadcrumb', url: 'snippet-3' },
  { title: 'Pagination Props', url: 'snippet-4' },
  { title: 'Breadcrumb Props', url: 'snippet-5' }
];

const PaginationDoc: FC = () => {
  return (
    <DocLayout
      pageTitle="Pagination"
      quickAccssLinks={quickAccess}
      descriptionClass="lead px-xxl-3"
      headingColClass="col-md-9 col-lg-7 col-xl-7 mx-auto"
      description="Use our pagination and breadcrumb examples to show that a series of related content exists across multiple pages and navigational hierarchy."
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Default</h2>
        <div className="card">
          <div className="card-body">
            <Pagination className="justify-content-start" />
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-1">
              View example's code
            </a>
          </div>

          <div id="collapse-1" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{defaultMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Pagination - Alternative</h2>
        <div className="card">
          <div className="card-body">
            <Pagination className="justify-content-start" altStyle />
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>

          <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{alternativeMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-5">Breadcrumb</h2>
        <div className="card">
          <div className="card-body">
            <div>
              <Breadcrumb data={[{ id: 1, title: 'Home', url: '#' }]} />
            </div>
            <div>
              <Breadcrumb
                data={[
                  { id: 1, title: 'Home', url: '#' },
                  { id: 2, title: 'Library', url: '#' }
                ]}
              />
            </div>
            <Breadcrumb
              className="mb-0"
              data={[
                { id: 1, title: 'Home', url: '#' },
                { id: 2, title: 'Library', url: '#' },
                { id: 3, title: 'Data', url: '#' }
              ]}
            />
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-3">
              View example's code
            </a>
          </div>

          <div id="collapse-3" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{breadcrumbMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper pt-16">
        <h2 className="mb-5">Pagination Props</h2>
        <div className="card">
          <div className="card-body">
            <table className="table">
              <thead className="text-navy">
                <tr>
                  <th scope="col" className="col-2">
                    Name
                  </th>
                  <th scope="col" className="col-4">
                    Default
                  </th>
                  <th scope="col">Type</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="ps-0">
                    <code className="code my-0">className</code>
                  </td>
                  <td>justify-content-center</td>
                  <td>string</td>
                  <td>Style the pagination nav with classname</td>
                </tr>
                <tr>
                  <td className="ps-0">
                    <code className="code my-0">altStyle</code>
                  </td>
                  <td>false</td>
                  <td>boolean</td>
                  <td>
                    When you pass <mark className="doc mt-n1">true</mark> then show alternative style
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-5" className="wrapper py-16">
        <h2 className="mb-5">Breadcrumb Props</h2>
        <div className="card">
          <div className="card-body">
            <table className="table">
              <thead className="text-navy">
                <tr>
                  <th scope="col" className="col-2">
                    Name
                  </th>
                  <th scope="col" className="col-4">
                    Default
                  </th>
                  <th scope="col">Type</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="ps-0">
                    <code className="code my-0">className</code>
                  </td>
                  <td>empty</td>
                  <td>string</td>
                  <td>Style the breadcrumb list with classname</td>
                </tr>
                <tr>
                  <td className="ps-0">
                    <code className="code my-0">data</code>
                  </td>
                  <td>dummy array</td>
                  <td>array</td>
                  <td>Actual breadcrumb data show in ui</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default PaginationDoc;
