import { FC, Fragment } from 'react';
// -------- icons -------- //
import Rocket from 'icons/lineal/Rocket';
import Shield from 'icons/lineal/Shield';
import Savings from 'icons/lineal/Savings';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';

const Services12: FC = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
          <h2 className="fs-15 text-uppercase text-muted mb-3">Why Choose Sandbox?</h2>
          <h3 className="display-4 mb-10 px-xl-10 px-xxl-15">
            Here are a few reasons why our customers choose Sandbox.
          </h3>
        </div>
      </div>

      <ul
        role="tablist"
        className="nav nav-tabs nav-tabs-bg nav-tabs-shadow-lg d-flex justify-content-between nav-justified flex-lg-row flex-column"
      >
        <li className="nav-item" role="presentation">
          <a
            role="tab"
            href="#tab2-1"
            data-bs-toggle="tab"
            aria-selected="true"
            className="nav-link d-flex flex-row active"
          >
            <div>
              <Rocket className="icon-svg-md text-yellow me-4" />
            </div>
            <div>
              <h4 className="mb-1">Easy Usage</h4>
              <p>Duis mollis commodo luctus cursus commodo tortor mauris.</p>
            </div>
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a
            role="tab"
            tabIndex={-1}
            href="#tab2-2"
            data-bs-toggle="tab"
            aria-selected="false"
            className="nav-link d-flex flex-row"
          >
            <div>
              <Savings className="icon-svg-md text-green me-4" />
            </div>
            <div>
              <h4 className="mb-1">Fast Transactions</h4>
              <p>Vivamus sagittis lacus augue fusce dapibus tellus nibh.</p>
            </div>
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a
            role="tab"
            tabIndex={-1}
            href="#tab2-3"
            data-bs-toggle="tab"
            aria-selected="false"
            className="nav-link d-flex flex-row"
          >
            <div>
              <Shield className="icon-svg-md text-red me-4" />
            </div>
            <div>
              <h4 className="mb-1">Secure Payments</h4>
              <p>Vestibulum ligula porta felis maecenas faucibus mollis.</p>
            </div>
          </a>
        </li>
      </ul>

      {/* ========== tab content ========== */}
      <div className="tab-content mt-6 mt-lg-8 mb-md-9">
        <div className="tab-pane fade active show" id="tab2-1" role="tabpanel">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
              <div className="row gx-md-5 gy-5 align-items-center">
                <div className="col-6">
                  <img
                    alt=""
                    src="/img/photos/sa13.jpg"
                    srcSet="/img/photos/sa13@2x.jpg 2x"
                    className="img-fluid rounded shadow-lg d-flex ms-auto"
                  />
                </div>

                <div className="col-6">
                  <img
                    alt=""
                    src="/img/photos/sa14.jpg"
                    srcSet="/img/photos/sa14@2x.jpg 2x"
                    className="img-fluid rounded shadow-lg mb-5"
                  />
                  <img
                    alt=""
                    src="/img/photos/sa15.jpg"
                    srcSet="/img/photos/sa15@2x.jpg 2x"
                    className="img-fluid rounded shadow-lg d-flex col-10"
                  />
                </div>
              </div>
            </div>

            <List title="Easy Usage" color="yellow" />
          </div>
        </div>

        <div className="tab-pane fade" id="tab2-2" role="tabpanel">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="row gx-md-5 gy-5">
                <div className="col-5">
                  <img
                    alt=""
                    src="/img/photos/sa9.jpg"
                    srcSet="/img/photos/sa9@2x.jpg 2x"
                    className="img-fluid rounded shadow-lg my-5 d-flex ms-auto"
                  />
                  <img
                    alt=""
                    src="/img/photos/sa10.jpg"
                    srcSet="/img/photos/sa10@2x.jpg 2x"
                    className="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                  />
                </div>

                <div className="col-7">
                  <img
                    alt=""
                    src="/img/photos/sa11.jpg"
                    srcSet="/img/photos/sa11@2x.jpg 2x"
                    className="img-fluid rounded shadow-lg mb-5"
                  />
                  <img
                    alt=""
                    src="/img/photos/sa12.jpg"
                    srcSet="/img/photos/sa12@2x.jpg 2x"
                    className="img-fluid rounded shadow-lg d-flex col-11"
                  />
                </div>
              </div>
            </div>

            <List title="Fast Transactions" color="green" />
          </div>
        </div>

        <div className="tab-pane fade" id="tab2-3" role="tabpanel">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
              <div className="row gx-md-5 gy-5">
                <div className="col-6">
                  <img
                    alt=""
                    src="/img/photos/sa5.jpg"
                    srcSet="/img/photos/sa5@2x.jpg 2x"
                    className="img-fluid rounded shadow-lg mb-5"
                  />
                  <img
                    alt=""
                    src="/img/photos/sa6.jpg"
                    srcSet="/img/photos/sa6@2x.jpg 2x"
                    className="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                  />
                </div>

                <div className="col-6">
                  <img
                    alt=""
                    src="/img/photos/sa7.jpg"
                    srcSet="/img/photos/sa7@2x.jpg 2x"
                    className="img-fluid rounded shadow-lg my-5"
                  />
                  <img
                    alt=""
                    src="/img/photos/sa8.jpg"
                    srcSet="/img/photos/sa8@2x.jpg 2x"
                    className="img-fluid rounded shadow-lg d-flex col-10"
                  />
                </div>
              </div>
            </div>

            <List title="Secure Payments" color="red" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

type ListProps = { color: 'red' | 'yellow' | 'green'; title: string };
const List = ({ color, title }: ListProps) => {
  return (
    <div className="col-lg-6">
      <h2 className="mb-3">{title}</h2>
      <p>
        Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo
        risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris
        condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna.
      </p>

      <ul className={`icon-list bullet-bg bullet-soft-${color}`}>
        <li>
          <i className="uil uil-check" /> Aenean eu leo quam. Pellentesque ornare.
        </li>
        <li>
          <i className="uil uil-check" /> Nullam quis risus eget urna mollis ornare.
        </li>
        <li>
          <i className="uil uil-check" /> Donec id elit non mi porta gravida at eget.
        </li>
      </ul>

      <NextLink title="Learn More" href="#" className={`btn btn-${color} mt-2`} />
    </div>
  );
};

export default Services12;
