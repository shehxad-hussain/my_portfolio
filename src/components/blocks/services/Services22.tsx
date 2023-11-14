import { FC, Fragment } from 'react';
// -------- icons -------- //
import Bulb from 'icons/solid-mono/Bulb';
import Compare from 'icons/solid-mono/Compare';
import DeliveryBox from 'icons/solid-mono/DeliveryBox';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';

const Services22: FC = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
          <h2 className="fs-16 text-uppercase text-muted mb-3">Why Choose Sandbox?</h2>
          <h3 className="display-3 mb-10 px-xl-10 px-xxl-15">
            Here are a few <span className="underline-3 style-2 yellow">reasons</span> why our customers choose Sandbox.
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
              <Bulb />
            </div>
            <div>
              <h4 className="mb-1">Collect Ideas</h4>
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
              <Compare />
            </div>
            <div>
              <h4 className="mb-1">Data Analysis</h4>
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
              <DeliveryBox className="icon-svg-sm solid-mono text-green me-4" />
            </div>
            <div>
              <h4 className="mb-1">Finalize Product</h4>
              <p>Vestibulum ligula porta felis maecenas faucibus mollis.</p>
            </div>
          </a>
        </li>
      </ul>

      {/* ========== tab content ========== */}
      <div className="tab-content mt-6 mt-lg-8">
        <div className="tab-pane fade active show" id="tab2-1" role="tabpanel">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
              <figure className="rounded shadow-lg">
                <img src="/img/photos/se5.jpg" srcSet="/img/photos/se5@2x.jpg 2x" alt="" />
              </figure>
            </div>

            <List title="Collect Ideas" color="fuchsia" />
          </div>
        </div>

        <div className="tab-pane fade" id="tab2-2" role="tabpanel">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <figure className="rounded shadow-lg">
                <img src="/img/photos/se6.jpg" srcSet="/img/photos/se6@2x.jpg 2x" alt="" />
              </figure>
            </div>

            <List title="Data Analysis" color="violet" />
          </div>
        </div>

        <div className="tab-pane fade" id="tab2-3" role="tabpanel">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
              <figure className="rounded shadow-lg">
                <img src="/img/photos/se7.jpg" srcSet="/img/photos/se7@2x.jpg 2x" alt="" />
              </figure>
            </div>

            <List title="Finalize Product" color="green" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

type ListProps = { color: 'fuchsia' | 'violet' | 'green'; title: string };
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

export default Services22;
