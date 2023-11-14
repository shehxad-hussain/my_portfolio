import { FC, Fragment, useState } from 'react';
// -------- custom component -------- //
import Switch from 'components/reuseable/Switch';
import { PricingCard1 } from 'components/reuseable/pricing-cards';
import { FAQ5 } from '../faq';
// -------- data-------- //
import { pricingList3 } from 'data/pricing';

const Pricing8: FC = () => {
  const [activeYearly, setActiveYearly] = useState(false);

  return (
    <Fragment>
      {/* ========== title section ========== */}
      <div className="row text-center">
        <div className="col-md-11 col-lg-9 col-xl-8 mx-auto">
          <h2 className="fs-16 text-uppercase text-muted mb-3">Our Pricing</h2>
          <h3 className="display-4 mb-10 px-xxl-10">
            We offer great prices, premium products and quality service for your business.
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-11 mx-auto">
          {/* ========== plan section ========== */}
          <div className="pricing-wrapper mb-10 mb-md-14">
            <div className="pricing-switcher-wrapper switcher">
              <p className="mb-0 pe-3">Monthly</p>
              <Switch value={activeYearly} onChange={setActiveYearly} />
              <p className="mb-0 ps-3">Yearly</p>
            </div>

            <div className="row gy-6 mt-3 mt-md-5">
              {pricingList3.map((item, i) => (
                <div className={`col-md-6 col-lg-4 ${i === 1 && 'popular'}`} key={i}>
                  <PricingCard1 roundedButton bulletBg {...item} activeYearly={activeYearly} />
                </div>
              ))}
            </div>
          </div>

          {/* ========== faq section ========== */}
          <FAQ5 />
        </div>
      </div>
    </Fragment>
  );
};

export default Pricing8;
