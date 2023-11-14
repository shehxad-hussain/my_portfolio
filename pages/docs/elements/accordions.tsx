import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import Accordion from 'components/reuseable/accordion';
import AccordionList from 'components/common/AccordionList';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markups -------- //
import { simpleMarkup, cardMarkup, shadowMarkup } from 'markups/elements/accordions';
// -------- data -------- //
const accordions = [
  {
    no: 'One',
    expand: true,
    heading: 'Professional Design',
    body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.'
  },
  {
    no: 'Two',
    expand: false,
    heading: 'Top-Notch Support',
    body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.'
  },
  {
    no: 'Three',
    expand: false,
    heading: 'Header and Slider Options',
    body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.'
  }
];

const quickAccess = [
  { title: 'Simple', url: 'snippet-1' },
  { title: 'Background', url: 'snippet-2' },
  { title: 'Shadow', url: 'snippet-3' },
  { title: 'Props', url: 'snippet-4' }
];

const Accordions: FC = () => {
  return (
    <DocLayout
      pageTitle="Accordion"
      quickAccssLinks={quickAccess}
      headingColClass="col-md-9 col-lg-7 col-xl-6 mx-auto"
      description={
        <>
          Use our custom accordion element to build vertically collapsing accordions.{' '}
          <a
            href="https://getbootstrap.com/docs/5.2/components/accordion/"
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
        <h2 className="mb-3">Simple Accordion</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <AccordionList />
          </div>

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
        <h2 className="mb-3">Accordion with Background</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="accordion-wrapper" id="accordion">
              {accordions.map((item) => (
                <Accordion key={item.no} {...item} />
              ))}
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
                <CodeHighlight language="jsx">{cardMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-3">Accordion with Shadow</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="accordion-wrapper" id="accordion">
              {accordions.map((item) => (
                <Accordion type="shadow-lg" key={item.no} {...item} />
              ))}
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
                <CodeHighlight language="jsx">{shadowMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper py-16">
        <h2 className="mb-3">Props</h2>

        <hr className="my-6" />

        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead className="text-navy">
                  <tr>
                    <th scope="col" className="col-4">
                      Name
                    </th>
                    <th scope="col" className="col-4">
                      Type
                    </th>
                    <th scope="col" className="col-4">
                      Default
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      no<span className="text-danger">*</span>
                    </td>
                    <td>string</td>
                    <td>-</td>
                  </tr>

                  <tr>
                    <td>
                      heading<span className="text-danger">*</span>
                    </td>
                    <td>string</td>
                    <td>-</td>
                  </tr>

                  <tr>
                    <td>
                      body<span className="text-danger">*</span>
                    </td>
                    <td>string</td>
                    <td>-</td>
                  </tr>

                  <tr>
                    <td>
                      expand<span className="text-danger">*</span>
                    </td>
                    <td>boolean</td>
                    <td>-</td>
                  </tr>

                  <tr>
                    <td>type</td>
                    <td>plain | shadow-lg</td>
                    <td>empty</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Accordions;
