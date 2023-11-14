import { FC } from 'react';
// -------- icons -------- //
import Verify from 'icons/solid-mono/Verify';
import PushCart from 'icons/solid-mono/PushCart';
import Shipment from 'icons/solid-mono/Shipment';
// -------- data -------- //
const services = [
  {
    id: 1,
    Icon: Shipment,
    title: 'Free Shipping',
    description: 'Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem.'
  },
  {
    id: 2,
    Icon: PushCart,
    title: '30 Days Return',
    description: 'Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem.'
  },
  {
    id: 3,
    Icon: Verify,
    title: '2-Years Warranty',
    description: 'Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem.'
  }
];

const ShopService: FC = () => {
  return (
    <section className="wrapper bg-gray">
      <div className="container py-12 py-md-14">
        <div className="row gx-lg-8 gx-xl-12 gy-8">
          {services.map(({ id, Icon, title, description }) => (
            <div className="col-md-6 col-lg-4" key={id}>
              <div className="d-flex flex-row">
                <div>
                  <Icon />
                </div>

                <div>
                  <h4 className="mb-1">{title}</h4>
                  <p className="mb-0">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopService;
