import { NextPage } from 'next';
import { Fragment } from 'react';
import currency from 'utils/currency';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import ShopService from 'components/common/ShopService';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import PageProgress from 'components/common/PageProgress';
import CartListItem from 'components/reuseable/CartListItem';
// -------- data -------- //
import { breadcrumb, cartList, orderSummeryRow, tableHeading } from 'data/cart-page';

const Cart: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar search cart navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light" />
      </header>

      <main className="content-wrapper">
        {/* ========== breadcrumb section ========== */}
        <section className="wrapper bg-gray">
          <div className="container py-3 py-md-5">
            <Breadcrumb data={breadcrumb} className="mb-0" />
          </div>
        </section>

        <div className="wrapper bg-light">
          <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
            <div className="row gx-md-8 gx-xl-12 gy-12">
              <div className="col-lg-8">
                {/* ========== product list section ========== */}
                <div className="table-responsive">
                  <table className="table text-center shopping-cart">
                    <thead>
                      <tr>
                        {tableHeading.map(({ id, title }) => {
                          const firstChild = id === 1;

                          return (
                            <th className={firstChild ? 'ps-0 w-25' : ''} key={id}>
                              <div className={`h4 mb-0 ${firstChild ? 'text-start' : ''}`}>{title}</div>
                            </th>
                          );
                        })}

                        <th />
                      </tr>
                    </thead>

                    <tbody>
                      {cartList.map((item) => (
                        <CartListItem key={item.id} {...item} />
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* ========== coupon section ========== */}
                <div className="row mt-0 gy-4">
                  <div className="col-md-8 col-lg-7">
                    <div className="form-floating input-group">
                      <input type="url" className="form-control" placeholder="Enter promo code" id="seo-check" />
                      <label htmlFor="seo-check">Enter promo code</label>
                      <button className="btn btn-primary" type="button">
                        Apply
                      </button>
                    </div>
                  </div>

                  <div className="col-md-4 col-lg-5 ms-auto ms-lg-0 text-md-end">
                    <button className="btn btn-primary rounded">Update Cart</button>
                  </div>
                </div>
              </div>

              {/* ========== order summary section ========== */}
              <div className="col-lg-4">
                <h3 className="mb-4">Order Summary</h3>
                <div className="table-responsive">
                  <table className="table table-order">
                    <tbody>
                      {orderSummeryRow.map(({ name, value }) => (
                        <tr key={name}>
                          <td className="ps-0">
                            <strong className="text-dark">{name}</strong>
                          </td>

                          <td className={value.parentClass}>
                            <p className={value.childClass}>
                              {name === 'Discount' && '-'}
                              {currency(value.amount)}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <button className="btn btn-primary rounded w-100 mt-4">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>

        {/* ========== service section ========== */}
        <ShopService />
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default Cart;
