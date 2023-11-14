import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import Select from 'components/reuseable/Select';
import ShopService from 'components/common/ShopService';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import Pagination from 'components/reuseable/Pagination';
import PageProgress from 'components/common/PageProgress';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { ProductCard } from 'components/reuseable/product-cards';
// -------- data -------- //
import products from 'data/product-list';

const Shop: NextPage = () => {
  // filter options
  const options = [
    { id: 1, title: 'Sort by popularity', value: 'popular' },
    { id: 2, title: 'Sort by average rating', value: 'rating' },
    { id: 3, title: 'Sort by newness', value: 'new' },
    { id: 4, title: 'Sort by price: low to high', value: 'low-to-high' },
    { id: 5, title: 'Sort by price: high to low', value: 'high-to-low' }
  ];

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar cart search navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light" />
      </header>

      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        <section className="wrapper bg-gray">
          <div className="container py-12 py-md-16 text-center">
            <div className="row">
              <div className="col-lg-10 col-xxl-8 mx-auto">
                <h1 className="display-1 mb-3">Shop Layout</h1>
                <p className="lead mb-1">Integer posuere erat a ante venenatis dapibus.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== products section ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row align-items-center mb-10 position-relative zindex-1">
              <div className="col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20">
                <h2 className="display-6">New Arrivals</h2>
                <Breadcrumb className="mb-0" />
              </div>

              <div className="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
                <Select options={options} />
              </div>
            </div>

            <div className="row gx-md-8 gy-10 gy-md-13 mb-13">
              {products.map((item) => (
                <ProductCard {...item} key={item.id} className="col-md-6 col-xl-4" />
              ))}
            </div>

            {/* ========== pagination section ========== */}
            <Pagination />
          </div>
        </section>

        {/* ========== service section ========== */}
        <ShopService />
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default Shop;
