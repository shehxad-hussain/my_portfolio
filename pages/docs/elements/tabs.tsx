import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- icons -------- //
import Rocket from 'icons/lineal/Rocket';
import Savings from 'icons/lineal/Savings';
// -------- markups -------- //
import { basicMarkup, pillMarkup, justifiedMarkup } from 'markups/elements/tabs';
// -------- data -------- //
const quickAccess = [
  { title: 'Basic', url: 'snippet-1' },
  { title: 'Pills', url: 'snippet-2' },
  { title: 'Justified', url: 'snippet-3' }
];

const Tabs: FC = () => {
  return (
    <DocLayout
      pageTitle="Tabs"
      quickAccssLinks={quickAccess}
      descriptionClass="lead px-xxl-15"
      description={
        <>
          Use our custom tabs to add tabbed interfaces on your website.{' '}
          <a
            href="https://getbootstrap.com/docs/5.2/components/navs-tabs/#javascript-behavior"
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
        <h2 className="mb-5">Basic</h2>
        <div className="card">
          <div className="card-body">
            <ul className="nav nav-tabs nav-tabs-basic">
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#tab3-1">
                  Support
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab3-2">
                  Payments
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab3-3">
                  Updates
                </a>
              </li>
            </ul>

            <div className="tab-content mt-0 mt-md-5">
              <div className="tab-pane fade show active" id="tab3-1">
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod
                  semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p>
                  Donec sed odio dui. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Maecenas faucibus mollis interdum.
                </p>
                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                  <li>
                    <i className="uil uil-check" />
                    Aenean eu leo quam. Pellentesque ornare.
                  </li>
                  <li>
                    <i className="uil uil-check" />
                    Nullam quis risus eget urna mollis ornare.
                  </li>
                  <li>
                    <i className="uil uil-check" />
                    Donec id elit non mi porta gravida at eget.
                  </li>
                  <li>
                    <i className="uil uil-check" />
                    Fusce dapibus, tellus ac cursus commodo.
                  </li>
                </ul>
              </div>

              <div className="tab-pane fade" id="tab3-2">
                <p>
                  Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                  dolor auctor. Maecenas faucibus mollis interdum. Maecenas faucibus mollis interdum. Sed posuere
                  consectetur est at lobortis. Vestibulum id ligula porta felis euismod.
                </p>
                <p> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor vel scelerisque nisl.</p>
                <p className="mb-0">
                  Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Maecenas sed diam eget
                  risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Curabitur
                  blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus.
                </p>
              </div>

              <div className="tab-pane fade" id="tab3-3">
                <p>
                  Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit
                  amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
                  massa justo sit amet risus.
                </p>

                <p className="mb-0">
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies
                  vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                  Maecenas sed diam eget risus varius blandit sit amet non magna.
                </p>
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
        <h2 className="mb-5">Pills</h2>
        <div className="card">
          <div className="card-body">
            <ul className="nav nav-tabs nav-pills">
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#tab1-1">
                  <i className="uil uil-phone-volume pe-1" />
                  <span>Support</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab1-2">
                  <i className="uil uil-shield-exclamation pe-1" />
                  <span>Payments</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab1-3">
                  <i className="uil uil-laptop-cloud pe-1" />
                  <span>Updates</span>
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab1-1">
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod
                  semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                </p>
                <p>
                  Donec sed odio dui. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Maecenas faucibus mollis interdum.
                </p>
                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                  <li>
                    <i className="uil uil-check" />
                    Aenean eu leo quam. Pellentesque ornare.
                  </li>

                  <li>
                    <i className="uil uil-check" />
                    Nullam quis risus eget urna mollis ornare.
                  </li>

                  <li>
                    <i className="uil uil-check" />
                    Donec id elit non mi porta gravida at eget.
                  </li>

                  <li>
                    <i className="uil uil-check" />
                    Fusce dapibus, tellus ac cursus commodo.
                  </li>
                </ul>
              </div>

              <div className="tab-pane fade" id="tab1-2">
                <p>
                  Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                  dolor auctor. Maecenas faucibus mollis interdum. Maecenas faucibus mollis interdum. Sed posuere
                  consectetur est at lobortis. Vestibulum id ligula porta felis euismod.
                </p>
                <p> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor vel scelerisque nisl.</p>
                <p className="mb-0">
                  Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Maecenas sed diam eget
                  risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Curabitur
                  blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus.
                </p>
              </div>

              <div className="tab-pane fade" id="tab1-3">
                <p>
                  Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit
                  amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
                  massa justo sit amet risus.
                </p>
                <p className="mb-0">
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies
                  vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                  Maecenas sed diam eget risus varius blandit sit amet non magna.
                </p>
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
                <CodeHighlight language="jsx">{pillMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper py-16">
        <h2 className="mb-3">Justified</h2>
        <p className="lead mb-8">
          Check out a live example:{' '}
          <a href="/demo-9" className="external" target="_blank">
            Demo 9
          </a>
          .
        </p>

        <div className="card">
          <div className="card-body">
            <ul className="nav nav-tabs nav-tabs-bg nav-tabs-shadow-lg d-flex justify-content-between nav-justified flex-lg-row flex-column">
              <li className="nav-item">
                <a className="nav-link d-flex flex-row active" data-bs-toggle="tab" href="#tab2-1">
                  <div>
                    <Rocket className="icon-svg-md text-yellow me-4" />
                  </div>

                  <div>
                    <h4 className="mb-1">Easy Usage</h4>
                    <p>Duis mollis commodo luctus cursus commodo tortor mauris.</p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex flex-row" data-bs-toggle="tab" href="#tab2-2">
                  <div>
                    <Savings className="icon-svg-md text-green me-4" />
                  </div>

                  <div>
                    <h4 className="mb-1">Fast Transactions</h4>
                    <p>Vivamus sagittis lacus augue fusce dapibus tellus nibh.</p>
                  </div>
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab2-1">
                <p className="mb-0">
                  Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo,
                  tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna.
                  Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                  et. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum.
                </p>
              </div>

              <div className="tab-pane fade" id="tab2-2">
                <p className="mb-0">
                  Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo,
                  tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna.
                  Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                  et. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum.
                </p>
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
                <CodeHighlight language="jsx">{justifiedMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Tabs;
