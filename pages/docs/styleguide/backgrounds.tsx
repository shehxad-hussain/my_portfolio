import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
// -------- data -------- //
const quickAccess = [
  { title: 'Abstract', url: 'snippet-1' },
  { title: 'Gradient', url: 'snippet-2' }
];

const Backgrounds: FC = () => {
  return (
    <DocLayout
      pageTitle="Backgrounds"
      quickAccssLinks={quickAccess}
      description="Below you can find the list of abstract and gradient background images that come bundled with Sandbox."
    >
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Abstract</h2>
        <ul className="glyphs glyphs-svg row gy-6">
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-0 rounded-top">
                <figure>
                  <img className="img-fluid rounded-top" src="/img/photos/bg2.jpg" alt="" />
                </figure>
                <span className="py-3">bg2.jpg</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;section className="wrapper image-wrapper bg-image bg-overlay text-white" style={{backgroundImage: "url(/img/photos/bg2.jpg)"}}&gt;&lt;/section&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-0 rounded-top">
                <figure>
                  <img className="img-fluid rounded-top" src="/img/photos/bg3.jpg" alt="" />
                </figure>
                <span className="py-3">bg3.jpg</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;section className="wrapper image-wrapper bg-image bg-overlay text-white" data-image-src="/img/photos/bg3.jpg"&gt;&lt;/section&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-0 rounded-top">
                <figure>
                  <img className="img-fluid rounded-top" src="/img/photos/bg4.jpg" alt="" />
                </figure>
                <span className="py-3">bg4.jpg</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;section className="wrapper image-wrapper bg-image bg-overlay text-white" data-image-src="/img/photos/bg4.jpg"&gt;&lt;/section&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-0 rounded-top">
                <figure>
                  <img className="img-fluid rounded-top" src="/img/photos/bg13.jpg" alt="" />
                </figure>
                <span className="py-3">bg13.jpg</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;section className="wrapper image-wrapper bg-image bg-overlay text-white" data-image-src="/img/photos/bg13.jpg"&gt;&lt;/section&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="snippet-2" className="wrapper py-16">
        <h2 className="mb-5">Gradient</h2>
        <ul className="glyphs glyphs-svg row gy-6">
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-0 rounded-top">
                <figure>
                  <img className="img-fluid rounded-top" src="/img/photos/bg14.png" alt="" />
                </figure>
                <span className="py-3">bg14.png</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;section className="wrapper image-wrapper bg-image bg-overlay text-white" data-image-src="/img/photos/bg14.png"&gt;&lt;/section&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-0 rounded-top">
                <figure>
                  <img className="img-fluid rounded-top" src="/img/photos/bg15.png" alt="" />
                </figure>
                <span className="py-3">bg15.png</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;section className="wrapper image-wrapper bg-image bg-overlay text-white" data-image-src="/img/photos/bg15.png"&gt;&lt;/section&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-0 rounded-top">
                <figure>
                  <img className="img-fluid rounded-top" src="/img/photos/bg16.png" alt="" />
                </figure>
                <span className="py-3">bg16.png</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;section className="wrapper image-wrapper bg-image bg-overlay text-white" data-image-src="/img/photos/bg16.png"&gt;&lt;/section&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-0 rounded-top">
                <figure>
                  <img className="img-fluid rounded-top" src="/img/photos/bg17.png" alt="" />
                </figure>
                <span className="py-3">bg17.png</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;section className="wrapper image-wrapper bg-image bg-overlay text-white" data-image-src="/img/photos/bg17.png"&gt;&lt;/section&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-0 rounded-top">
                <figure>
                  <img className="img-fluid rounded-top" src="/img/photos/bg18.png" alt="" />
                </figure>
                <span className="py-3">bg18.png</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;section className="wrapper image-wrapper bg-image bg-overlay text-white" data-image-src="/img/photos/bg18.png"&gt;&lt;/section&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-0 rounded-top">
                <figure>
                  <img className="img-fluid rounded-top" src="/img/photos/bg19.png" alt="" />
                </figure>
                <span className="py-3">bg19.png</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;section className="wrapper image-wrapper bg-image bg-overlay text-white" data-image-src="/img/photos/bg19.png"&gt;&lt;/section&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-0 rounded-top">
                <figure>
                  <img className="img-fluid rounded-top" src="/img/photos/bg20.png" alt="" />
                </figure>
                <span className="py-3">bg20.png</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;section className="wrapper image-wrapper bg-image bg-overlay text-white" data-image-src="/img/photos/bg20.png"&gt;&lt;/section&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-0 rounded-top">
                <figure>
                  <img className="img-fluid rounded-top" src="/img/photos/bg21.png" alt="" />
                </figure>
                <span className="py-3">bg21.png</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;section className="wrapper image-wrapper bg-image bg-overlay text-white" data-image-src="/img/photos/bg21.png"&gt;&lt;/section&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-0 rounded-top">
                <figure>
                  <img className="img-fluid rounded-top" src="/img/photos/bg22.png" alt="" />
                </figure>
                <span className="py-3">bg22.png</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;section className="wrapper image-wrapper bg-image bg-overlay text-white" data-image-src="/img/photos/bg22.png"&gt;&lt;/section&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-0 rounded-top">
                <figure>
                  <img className="img-fluid rounded-top" src="/img/photos/bg23.png" alt="" />
                </figure>
                <span className="py-3">bg23.png</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;section className="wrapper image-wrapper bg-image bg-overlay text-white" data-image-src="/img/photos/bg23.png"&gt;&lt;/section&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-0 rounded-top">
                <figure>
                  <img className="img-fluid rounded-top" src="/img/photos/bg24.png" alt="" />
                </figure>
                <span className="py-3">bg24.png</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;section className="wrapper image-wrapper bg-image bg-overlay text-white" data-image-src="/img/photos/bg24.png"&gt;&lt;/section&gt;'
                >
                  Copy
                </a>
              </div>
            </div>
          </li>
          <li className="col-6 text-center">
            <div className="card h-100">
              <div className="card-body p-0 rounded-top">
                <figure>
                  <img className="img-fluid rounded-top" src="/img/photos/bg25.png" alt="" />
                </figure>
                <span className="py-3">bg25.png</span>
              </div>
              <div className="card-footer position-relative">
                <a
                  className="stretched-link link-body btn-copy-icon"
                  data-clipboard-text='&lt;section className="wrapper image-wrapper bg-image bg-overlay text-white" data-image-src="/img/photos/bg25.png"&gt;&lt;/section&gt;'
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

export default Backgrounds;
