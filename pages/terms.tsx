import { NextPage } from 'next';
import { FC, Fragment } from 'react';
import { Element, Link as ScrollLink } from 'react-scroll';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
const linkList = [
  { id: 1, title: '1. Terms & Conditions', to: 'terms-conditions' },
  { id: 2, title: '2. Privacy Policy', to: 'privacy-policy' },
  { id: 3, title: '3. User Policy', to: 'user-policy' },
  { id: 4, title: '4. Copyrights', to: 'copyrights' },
  { id: 5, title: '5. Cookies', to: 'cookies' },
  { id: 6, title: '6. Account & Billing', to: 'account-billing' }
];

const breadcrumb = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Terms and Conditions', url: '/terms' }
];

const Terms: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                <h1 className="display-1 mb-3">Terms and Conditions</h1>
                <Breadcrumb data={breadcrumb} />
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row gx-0">
            <aside className="col-xl-3 sidebar sticky-sidebar mt-md-0 py-16 d-none d-xl-block">
              <div className="widget">
                <nav id="sidebar-nav">
                  <ul className="list-unstyled text-reset">
                    {linkList.map(({ id, title, to }) => (
                      <li key={id}>
                        <ScrollLink smooth spy activeClass="active" to={to} className="nav-link">
                          {title}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            <div className="col-xl-8">
              <Element name="terms-conditions" className="wrapper pt-16">
                <div className="card">
                  <div className="card-body p-10">
                    <h2 className="mb-3">1. Terms and Conditions</h2>
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque
                      nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget
                      urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    </p>
                    <p>
                      Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Cum sociis natoque
                      penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta
                      gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis
                      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                    <p>
                      Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit
                      sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id
                      dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis
                      euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit
                      libero, a pharetra augue. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac
                      facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare
                      sem.
                    </p>

                    <List
                      data={[
                        'Aenean eu leo quam ornare curabitur blandit tempus.',
                        'Nullam quis risus eget urna mollis ornare donec elit.',
                        'Etiam porta sem malesuada magna mollis euismod.',
                        'Fermentum massa vivamus faucibus amet euismod.'
                      ]}
                    />
                  </div>
                </div>
              </Element>

              <Element name="privacy-policy" className="wrapper pt-16">
                <div className="card">
                  <div className="card-body p-10">
                    <h2 className="mb-3">2. Privacy Policy</h2>
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque
                      nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget
                      urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    </p>
                    <p>
                      Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Cum sociis natoque
                      penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta
                      gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis
                      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>

                    <List
                      data={[
                        'Aenean eu leo quam ornare curabitur blandit tempus.',
                        'Nullam quis risus eget urna mollis ornare donec elit.',
                        'Etiam porta sem malesuada magna mollis euismod.',
                        'Fermentum massa vivamus faucibus amet euismod.'
                      ]}
                    />

                    <p className="mb-0 mt-5">
                      Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit
                      sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id
                      dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis
                      euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit
                      libero, a pharetra augue. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac
                      facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare
                      sem.
                    </p>
                  </div>
                </div>
              </Element>

              <Element name="user-policy" className="wrapper pt-16">
                <div className="card">
                  <div className="card-body p-10">
                    <h2 className="mb-3">3. User Policy</h2>
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque
                      nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget
                      urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    </p>
                    <p>
                      Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Cum sociis natoque
                      penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta
                      gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis
                      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                    <p className="mb-0">
                      Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit
                      sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id
                      dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis
                      euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit
                      libero, a pharetra augue. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac
                      facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare
                      sem.
                    </p>
                  </div>
                </div>
              </Element>

              <Element name="copyrights" className="wrapper pt-16">
                <div className="card">
                  <div className="card-body p-10">
                    <h2 className="mb-3">4. Copyrights</h2>
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque
                      nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget
                      urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    </p>
                    <p>
                      Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Cum sociis natoque
                      penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta
                      gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis
                      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>

                    <List
                      data={[
                        'Aenean eu leo quam ornare curabitur blandit tempus.',
                        'Nullam quis risus eget urna mollis ornare donec elit.',
                        'Etiam porta sem malesuada magna mollis euismod.',
                        'Fermentum massa vivamus faucibus amet euismod.'
                      ]}
                    />

                    <p className="mb-0 mt-5">
                      Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit
                      sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id
                      dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis
                      euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit
                      libero, a pharetra augue. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac
                      facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare
                      sem.
                    </p>
                  </div>
                </div>
              </Element>

              <Element name="cookies" className="wrapper pt-16">
                <div className="card">
                  <div className="card-body p-10">
                    <h2 className="mb-3">5. Cookies</h2>
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque
                      nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget
                      urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    </p>
                    <p>
                      Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Cum sociis natoque
                      penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta
                      gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis
                      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                    <p className="mb-0">
                      Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit
                      sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id
                      dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis
                      euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit
                      libero, a pharetra augue. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac
                      facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare
                      sem.
                    </p>
                  </div>
                </div>
              </Element>

              <Element name="account-billing" className="wrapper py-16">
                <div className="card">
                  <div className="card-body p-10">
                    <h2 className="mb-3">6. Account &amp; Billing</h2>
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque
                      nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget
                      urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    </p>
                    <p>
                      Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Cum sociis natoque
                      penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta
                      gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis
                      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                    <p className="mb-0">
                      Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit
                      sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id
                      dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis
                      euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit
                      libero, a pharetra augue. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac
                      facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare
                      sem.
                    </p>
                  </div>
                </div>
              </Element>
            </div>
          </div>
        </div>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

const List: FC<{ data: string[] }> = ({ data }) => {
  return (
    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
      {data.map((item) => {
        return (
          <li key={item}>
            <span>
              <i className="uil uil-check" />
            </span>
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Terms;
