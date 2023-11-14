import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
// -------- data -------- //
const quickAccess = [
  { title: 'Set-1', url: 'snippet-1' },
  { title: 'Set-2', url: 'snippet-2' },
  { title: 'Set-3', url: 'snippet-3' },
  { title: 'Set-4', url: 'snippet-4' },
  { title: 'Set-5', url: 'snippet-5' }
];

const Illustrations: FC = () => {
  return (
    <DocLayout
      pageTitle="Illustrations"
      quickAccssLinks={quickAccess}
      descriptionClass="lead px-xxl-12"
      headingColClass="col-md-9 col-lg-7 col-xl-5 mx-auto"
      description="Below you can find the list of illustrations that come bundled with Sandbox."
    >
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Set 1</h2>
        <ul className="glyphs glyphs-svg row gy-6">
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i1.png"
                    srcSet="/img/illustrations/i1@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/growing-up-landing-page-design_4238115.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i1.png" srcset="/img/illustrations/i1@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i2.png"
                    srcSet="/img/illustrations/i2@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/startup-landing-page_4237363.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i2.png" srcset="/img/illustrations/i2@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i3.png"
                    srcSet="/img/illustrations/i3@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/teamwork-landing-page_4238239.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i3.png" srcset="/img/illustrations/i3@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i4.png"
                    srcSet="/img/illustrations/i4@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/about-us-landing-page-design_4238455.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i4.png" srcset="/img/illustrations/i4@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i5.png"
                    srcSet="/img/illustrations/i5@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/data-protection-landing-page-design_4237696.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i5.png" srcset="/img/illustrations/i5@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i6.png"
                    srcSet="/img/illustrations/i6@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/digital-marketing-landing-page-web-design_4237912.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i6.png" srcset="/img/illustrations/i6@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i7.png"
                    srcSet="/img/illustrations/i7@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/online-shopping-landing-page_4237971.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i7.png" srcset="/img/illustrations/i7@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i8.png"
                    srcSet="/img/illustrations/i8@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/seo-optimization-landing-page-design_4237777.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i8.png" srcset="/img/illustrations/i8@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Set 2</h2>
        <ul className="glyphs glyphs-svg row gy-6">
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i9.png"
                    srcSet="/img/illustrations/i9@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/app-development-landing-page_3103245.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i9.png" srcset="/img/illustrations/i9@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i10.png"
                    srcSet="/img/illustrations/i10@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/web-design-landing-page_3103246.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i10.png" srcset="/img/illustrations/i10@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i11.png"
                    srcSet="/img/illustrations/i11@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/data-analysis-landing-page_3103247.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i11.png" srcset="/img/illustrations/i11@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i12.png"
                    srcSet="/img/illustrations/i12@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/teamwork-design-landing-page_3103248.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i12.png" srcset="/img/illustrations/i12@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i13.png"
                    srcSet="/img/illustrations/i13@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/time-management-landing-page_3103250.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i13.png" srcset="/img/illustrations/i13@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i14.png"
                    srcSet="/img/illustrations/i14@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/workspace-design-landing-page_3103252.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i14.png" srcset="/img/illustrations/i14@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i15.png"
                    srcSet="/img/illustrations/i15@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/online-shopping-landing-page_3103253.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i15.png" srcset="/img/illustrations/i15@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i16.png"
                    srcSet="/img/illustrations/i16@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/responsive-design-landing-page_3103254.htm#page=56&query=landing+page&position=41"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i16.png" srcset="/img/illustrations/i16@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i17.png"
                    srcSet="/img/illustrations/i17@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/creative-process-landing-page_4405718.htm#page=9&query=landing+page&position=37"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i17.png" srcset="/img/illustrations/i17@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-5">Set 3</h2>
        <ul className="glyphs glyphs-svg row gy-6">
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i18.png"
                    srcSet="/img/illustrations/i18@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-vector/3d-printing-technology-web-banner-landing-page-set_12447938.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i18.png" srcset="/img/illustrations/i18@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i19.png"
                    srcSet="/img/illustrations/i19@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-vector/advert-designer-illustrator-web-banner-landing-page_12447940.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i19.png" srcset="/img/illustrations/i19@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i20.png"
                    srcSet="/img/illustrations/i20@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-vector/cyber-web-security-specialist-web-banner-landing-page-set_12447948.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i20.png" srcset="/img/illustrations/i20@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i21.png"
                    srcSet="/img/illustrations/i21@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-vector/graphic-designer-digital-illustrator-web-banner-landing-page-set_12447958.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i21.png" srcset="/img/illustrations/i21@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i22.png"
                    srcSet="/img/illustrations/i22@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-vector/graphic-designer-digital-illustrator-web-banner-landing-page-set_12447958.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i22.png" srcset="/img/illustrations/i22@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i23.png"
                    srcSet="/img/illustrations/i23@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-vector/system-administrator-web-banner-landing-page-set_12447983.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i23.png" srcset="/img/illustrations/i23@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i24.png"
                    srcSet="/img/illustrations/i24@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-vector/web-design-web-layout-landing-page-set-presenting-content-web-pages-website-layout-composition-color-development-idea-computer-technology_13137171.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i24.png" srcset="/img/illustrations/i24@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i25.png"
                    srcSet="/img/illustrations/i25@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-vector/web-programming-web-layout-landing-page-set-coding-testing-writing-program-website-using-internet-different-software-website-development_13137173.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i25.png" srcset="/img/illustrations/i25@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i26.png"
                    srcSet="/img/illustrations/i26@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-vector/mobile-app-development-web-layout-landing-page-set-modern-technology-smartphone-interface-design-application-building-programming_13137153.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i26.png" srcset="/img/illustrations/i26@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/i27.png"
                    srcSet="/img/illustrations/i27@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-vector/director-web-banner-landing-page_12447955.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/i27.png" srcset="/img/illustrations/i27@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="snippet-4" className="wrapper pt-16">
        <h2 className="mb-5">Set 4</h2>
        <ul className="glyphs glyphs-svg row gy-6">
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/ui1.png"
                    srcSet="/img/illustrations/ui1@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/mobile-phone-interface-3d-concepts-landing-page_6721408.htm#page=1&query=Seo%20company&position=36&from_view=keyword"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/ui1.png" srcset="/img/illustrations/ui1@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/ui2.png"
                    srcSet="/img/illustrations/ui2@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/digital-screens-plants-3d-concepts-landing-page_6721403.htm#page=1&query=3d&position=9&from_view=search"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/ui2.png" srcset="/img/illustrations/ui2@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/ui3.png"
                    srcSet="/img/illustrations/ui3@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/online-purchases-from-home-3d-concepts-landing-page_6721402.htm#page=1&query=3d&position=48&from_view=search"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/ui3.png" srcset="/img/illustrations/ui3@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/ui4.png"
                    srcSet="/img/illustrations/ui4@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/free-vector/social-online-interaction-3d-concepts-landing-page_6721405.htm#page=1&position=9&from_view=user"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/ui4.png" srcset="/img/illustrations/ui4@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/ui5.png"
                    srcSet="/img/illustrations/ui5@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-vector/landing-page-template-with-easy-shipping_12392824.htm#page=1&position=21&from_view=user"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/ui5.png" srcset="/img/illustrations/ui5@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="snippet-5" className="wrapper py-16">
        <h2 className="mb-5">Set 5</h2>
        <ul className="glyphs glyphs-svg row gy-6">
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/3d1.png"
                    srcSet="/img/illustrations/3d1@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-psd/3-email-campaign-with-mobile-phone_15751106.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/3d1.png" srcset="/img/illustrations/3d1@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/3d2.png"
                    srcSet="/img/illustrations/3d2@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-psd/great-idea-3d-illustration-concept_14514386.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/3d2.png" srcset="/img/illustrations/3d2@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/3d3.png"
                    srcSet="/img/illustrations/3d3@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-psd/3d-email-campaign-with-laptop_15751105.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/3d3.png" srcset="/img/illustrations/3d3@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/3d4.png"
                    srcSet="/img/illustrations/3d4@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-psd/3d-illustration-concept-man-looking-ideas_14514382.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/3d4.png" srcset="/img/illustrations/3d4@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/3d5.png"
                    srcSet="/img/illustrations/3d5@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-psd/3d-new-employee-interview-with-applicants-identity_16069636.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/3d5.png" srcset="/img/illustrations/3d5@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/3d6.png"
                    srcSet="/img/illustrations/3d6@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-psd/3d-online-connection-with-male-character_15751113.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/3d6.png" srcset="/img/illustrations/3d6@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/3d7.png"
                    srcSet="/img/illustrations/3d7@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-psd/3d-online-shopping-illustration_16523091.htm#page=1&query=online%20shopping%20illustration&position=7&from_view=search"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/3d7.png" srcset="/img/illustrations/3d7@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/3d8.png"
                    srcSet="/img/illustrations/3d8@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-psd/3d-working-time-with-male-female-characters_16644661.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/3d8.png" srcset="/img/illustrations/3d8@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/3d9.png"
                    srcSet="/img/illustrations/3d9@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-psd/3d-startup-life-with-man-standing-rocket_16644633.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/3d9.png" srcset="/img/illustrations/3d9@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/3d10.png"
                    srcSet="/img/illustrations/3d10@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-psd/3d-hosting-with-male-character-using-laptop_16428910.htm#page=1&position=21&from_view=detail#&position=21&from_view=detail"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/3d10.png" srcset="/img/illustrations/3d10@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/3d11.png"
                    srcSet="/img/illustrations/3d11@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-psd/3d-startup-life-with-man-holding-notes_16644607.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/3d11.png" srcset="/img/illustrations/3d11@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-10 pb-6">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/3d12.png"
                    srcSet="/img/illustrations/3d12@2x.png 2x"
                    alt=""
                  />
                </figure>
                <a
                  href="https://www.freepik.com/premium-psd/3d-think-illustration_14902775.htm"
                  className="external mt-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resource
                </a>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;img className="img-fluid" src="/img/illustrations/3d12.png" srcset="/img/illustrations/3d12@2x.png 2x" alt="" /&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </DocLayout>
  );
};

export default Illustrations;
