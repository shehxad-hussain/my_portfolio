import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markups -------- //
import { borderMarkup, anglesMarkup, wavesMarkup } from 'markups/elements/dividers';
// -------- data -------- //
const quickAccess = [
  { title: 'Borders', url: 'snippet-1' },
  { title: 'Angles', url: 'snippet-2' },
  { title: 'Waves', url: 'snippet-3' }
];

const Dividers: FC = () => {
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
        <h2 className="mb-5">Borders</h2>
        <div className="card">
          <div className="card-body">
            <hr className="my-8" />
            <hr className="double my-12" />
            <div className="divider-icon mt-8 mb-15">
              <i className="uil uil-heart" />
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
                <CodeHighlight language="jsx">{borderMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Angles</h2>
        <div className="card">
          <div className="card-body">
            <figure className="position-relative mb-10">
              <img className="img-fluid" src="/img/docs/angle-lower-start.jpg" alt="" />
              <span
                className="display-6 text-navy"
                style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              >
                Lower Start
              </span>
            </figure>

            <figure className="position-relative">
              <img className="img-fluid" src="/img/docs/angle-lower-end.jpg" alt="" />
              <span
                className="display-6 text-navy"
                style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              >
                Lower End
              </span>
            </figure>

            <figure className="position-relative mb-10">
              <img className="img-fluid" src="/img/docs/angle-upper-start.jpg" alt="" />
              <span
                className="display-6 text-navy"
                style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              >
                Upper Start
              </span>
            </figure>

            <figure className="position-relative mb-10">
              <img className="img-fluid" src="/img/docs/angle-upper-end.jpg" alt="" />
              <span
                className="display-6 text-navy"
                style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              >
                Upper End
              </span>
            </figure>

            <figure className="position-relative mb-10">
              <img className="img-fluid" src="/img/docs/angle-upper-end-lower-start.jpg" alt="" />
              <span
                className="display-6 text-navy"
                style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              >
                Upper End & Lower Start
              </span>
            </figure>

            <figure className="position-relative">
              <img className="img-fluid" src="/img/docs/angle-upper-start-lower-end.jpg" alt="" />
              <span
                className="display-6 text-navy"
                style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              >
                Upper Start & Lower End
              </span>
            </figure>

            <figure className="position-relative">
              <img className="img-fluid" src="/img/docs/angle-upper-start-lower-start.jpg" alt="" />
              <span
                className="display-6 text-navy"
                style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              >
                Upper Start & Lower Start
              </span>
            </figure>

            <figure className="position-relative">
              <img className="img-fluid" src="/img/docs/angle-upper-end-lower-end.jpg" alt="" />
              <span
                className="display-6 text-navy"
                style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              >
                Upper End & Lower End
              </span>
            </figure>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>
        </div>

        <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
          <div className="code-wrapper">
            <div className="code-wrapper-inner">
              <CodeHighlight language="jsx">{anglesMarkup}</CodeHighlight>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper py-16">
        <h2 className="mb-5">Waves</h2>
        <div className="card">
          <div className="card-body">
            <section className="wrapper bg-soft-primary mb-5">
              <div className="container py-5 py-md-7">
                <h2 className="h6 text-center mb-0">Wave 1</h2>
              </div>

              <div className="overflow-hidden">
                <div className="divider text-white mx-n2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70">
                    <path fill="currentColor" d="M1440,70H0V45.16a5762.49,5762.49,0,0,1,1440,0Z" />
                  </svg>
                </div>
              </div>
            </section>

            <section className="wrapper bg-soft-primary mb-5">
              <div className="container py-5 py-md-7">
                <h2 className="h6 text-center mb-0">Wave 2</h2>
              </div>

              <div className="overflow-hidden">
                <div className="divider text-white mx-n2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
                    <path fill="currentColor" d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z" />
                  </svg>
                </div>
              </div>
            </section>

            <section className="wrapper bg-soft-primary mb-5">
              <div className="container py-5 py-md-7">
                <h2 className="h6 text-center mb-0">Wave 3</h2>
              </div>

              <div className="overflow-hidden">
                <div className="divider text-white mx-n2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 92.26">
                    <path
                      fill="currentColor"
                      d="M1206,21.2c-60-5-119-36.92-291-5C772,51.11,768,48.42,708,43.13c-60-5.68-108-29.92-168-30.22-60,.3-147,27.93-207,28.23-60-.3-122-25.94-182-36.91S30,5.93,0,16.2V92.26H1440v-87l-30,5.29C1348.94,22.29,1266,26.19,1206,21.2Z"
                    />
                  </svg>
                </div>
              </div>
            </section>

            <section className="wrapper bg-soft-primary mb-5">
              <div className="container py-5 py-md-7">
                <h2 className="h6 text-center mb-0">Wave 4</h2>
              </div>

              <div className="overflow-hidden">
                <div className="divider text-white mx-n2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                    <path
                      fill="currentColor"
                      d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
                    />
                  </svg>
                </div>
              </div>
            </section>

            <section className="wrapper bg-soft-primary mb-5">
              <div className="container py-5 py-md-7">
                <h2 className="h6 text-center mb-0">Wave 5</h2>
              </div>

              <div className="overflow-hidden">
                <div className="divider text-white mx-n2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                    <path
                      fill="currentColor"
                      d="M1260.2,37.86c-60-10-120-20.07-180-16.76-60,3.71-120,19.77-180,18.47-60-1.71-120-21.78-180-31.82s-120-10-180-1.7c-60,8.73-120,24.79-180,28.5-60,3.31-120-6.73-180-11.74s-120-5-150-5H0V100H1440V49.63C1380.07,57.9,1320.13,47.88,1260.2,37.86Z"
                    />
                  </svg>
                </div>
              </div>
            </section>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-3">
              View example's code
            </a>
          </div>

          <div id="collapse-3" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{wavesMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Dividers;
