import { FC, useState } from 'react';
// -------- custom component -------- //
import Switch from 'components/reuseable/Switch';
import NextLink from 'components/reuseable/links/NextLink';
import { PricingCard1 } from 'components/reuseable/pricing-cards';
// -------- data -------- //
import { pricingList1 } from 'data/pricing';

const Pricing5: FC = () => {
  const [activeYearly, setActiveYearly] = useState(false);

  return (
    <div className="row gy-6 align-items-center mb-14 mb-md-18">
      <div className="col-lg-4">
        <h3 className="display-4 mb-5">We offer great and premium prices.</h3>
        <p className="lead fs-lg mb-5">
          Enjoy a <span className="underline">free 30-day trial</span> and experience the full service. No credit card
          required!
        </p>

        <NextLink title="See All Prices" href="#" className="btn btn-primary rounded-pill mt-2" />
      </div>

      <div className="col-lg-7 offset-lg-1 pricing-wrapper">
        <div className="pricing-switcher-wrapper switcher justify-content-start justify-content-lg-end">
          <p className="mb-0 pe-3">Monthly</p>
          <Switch value={activeYearly} onChange={setActiveYearly} />
          <p className="mb-0 ps-3">
            Yearly <span className="text-red">(Save 30%)</span>
          </p>
        </div>

        <div className="row gy-6 mt-5">
          {pricingList1.map((item, i) => (
            <div className={`col-md-6 ${i === 1 && 'popular'}`} key={i}>
              <PricingCard1 bulletBg {...item} activeYearly={activeYearly} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing5;
