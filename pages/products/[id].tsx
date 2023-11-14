import { NextPage } from 'next';
import { FormEvent, Fragment, useState } from 'react';
// -------- custom component -------- //
import { Footer8 } from 'components/blocks/footer';
import { Navbar } from 'components/blocks/navbar';
import { ProductCard } from 'components/reuseable/product-cards';
import Select from 'components/reuseable/Select';
import Carousel from 'components/reuseable/Carousel';
import ShopService from 'components/common/ShopService';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import Pagination from 'components/reuseable/Pagination';
import ReviewCard from 'components/reuseable/ReviewCard';
import PageProgress from 'components/common/PageProgress';
import ThumbsCarousel from 'components/reuseable/ThumbsCarousel';
// -------- hook -------- //
import useProgressbar from 'hooks/useProgressbar';
// -------- data -------- //
import products from 'data/product-list';
import data from 'data/product-details-page';

const ProductDetails: NextPage = () => {
  useProgressbar();

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(data.sizeList[0].value);
  const [color, setColor] = useState(data.productColors[0].value);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(quantity, color, size);
  };

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar search cart navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light" />
      </header>

      <main className="content-wrapper">
        {/* ========== breadcumb section ========== */}
        <section className="wrapper bg-gray">
          <div className="container py-3 py-md-5">
            <Breadcrumb data={data.breadcrumb} className="mb-0" />
          </div>
        </section>

        {/* ========== product info section ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row gx-md-8 gx-xl-12 gy-8">
              <div className="col-lg-6">
                <ThumbsCarousel />
              </div>

              <div className="col-lg-6">
                <div className="post-header mb-5">
                  <h2 className="post-title display-5">
                    <a href="#" className="link-dark">
                      Curology Skincare Set
                    </a>
                  </h2>

                  <p className="price fs-20 mb-2">
                    <span className="amount">$55.00</span>
                  </p>

                  <a href="#" className="link-body ratings-wrapper">
                    <span className="ratings four" />
                    <span>(3 Reviews)</span>
                  </a>
                </div>

                <p className="mb-6">
                  Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Duis mollis, est
                  non commodo luctus. Nulla vitae elit libero pharetra augue. Donec id elit non mi porta gravida at eget
                  metus.
                </p>

                <form onSubmit={handleFormSubmit}>
                  <fieldset className="picker">
                    <legend className="h6 fs-16 text-body mb-3">Choose a size</legend>

                    {data.sizeList.map(({ value, title }) => (
                      <label htmlFor={`size-${value}`} key={title}>
                        <input
                          type="radio"
                          name="sizes"
                          value={value}
                          id={`size-${value}`}
                          checked={value === size}
                          onChange={(e) => setSize(e.target.value)}
                        />
                        <span>{title}</span>
                      </label>
                    ))}
                  </fieldset>

                  <fieldset className="picker">
                    <legend className="h6 fs-16 text-body mb-3">Choose a color</legend>

                    {data.productColors.map(({ id, value }) => (
                      <label htmlFor={id} key={id}>
                        <input
                          id={id}
                          type="radio"
                          name="colors"
                          value={value}
                          checked={value === color}
                          onChange={(e) => setColor(e.target.value)}
                        />
                        <span style={{ color: value }}>Yellow</span>
                      </label>
                    ))}
                  </fieldset>

                  <div className="row">
                    <div className="col-lg-9 d-flex flex-row pt-2">
                      <div>
                        <div className="form-select-wrapper">
                          <select
                            value={quantity}
                            className="form-select"
                            onChange={(e) => setQuantity(+e.currentTarget.value)}
                          >
                            {[1, 2, 3, 4, 5].map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="flex-grow-1 mx-2">
                        <button
                          type="submit"
                          className="btn btn-primary btn-icon btn-icon-start rounded w-100 flex-grow-1"
                        >
                          <i className="uil uil-shopping-bag" /> Add to Cart
                        </button>
                      </div>

                      <div>
                        <button className="btn btn-block btn-red btn-icon rounded px-3 w-100 h-100">
                          <i className="uil uil-heart" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <ul className="nav nav-tabs nav-tabs-basic mt-12">
              {data.tabList.map(({ id, title }, i) => (
                <li className="nav-item" key={id}>
                  <a className={`nav-link ${i === 0 ? 'active' : ''}`} data-bs-toggle="tab" href={id}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="tab-content mt-0 mt-md-5">
              <div className="tab-pane fade show active" id="tab-1">
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac
                  consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                  vestibulum. Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Nulla
                  vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget
                  risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit
                  aliquet. Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis
                  euismod semper.
                </p>
                <p>
                  Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum
                  sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
              </div>

              <div className="tab-pane fade" id="tab-2">
                <p>
                  Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>

              <div className="tab-pane fade" id="tab-3">
                <p>
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                  amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis
                  consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.
                  Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Aenean lacinia bibendum
                  nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac
                  consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                  et.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== liked products section ========== */}
        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-16">
            <h3 className="h2 mb-6 text-center">You Might Also Like</h3>

            <Carousel
              navigation={false}
              breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }}
            >
              {products.slice(0, 5).map((item) => (
                <ProductCard {...item} key={item.id} />
              ))}
            </Carousel>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row gx-md-8 gx-xl-12 gy-10">
              {/* ========== sidebar section ========== */}
              <aside className="col-lg-4 sidebar">
                <div className="widget mt-1">
                  <h4 className="widget-title mb-3">Ratings Distribution</h4>

                  <div className="mb-5">
                    <span className="ratings four" />
                    <span>4.2 out of 5</span>
                  </div>

                  <ul className="progress-list">
                    {data.ratings.map(({ star, value }) => (
                      <li key={star}>
                        <p>{star} Stars</p>
                        <div className="progressbar line blue" data-value={value} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="widget mt-10">
                  <h4 className="widget-title mb-3">Review this product</h4>
                  <p className="mb-5">Aenean eu leo quam ornare sem lacinia quam.</p>
                  <a href="#" className="btn btn-primary rounded w-100">
                    Write a Review
                  </a>
                </div>
              </aside>

              {/* ========== reviews section ========== */}
              <div className="col-lg-8">
                <div className="row align-items-center mb-10 position-relative zindex-1">
                  <div className="col-md-7 col-xl-8 pe-xl-20">
                    <h2 className="display-6 mb-0">Ratings &amp; Reviews</h2>
                  </div>

                  <div className="col-md-5 col-xl-4 ms-md-auto text-md-end mt-5 mt-md-0">
                    <div className="form-select-wrapper">
                      <Select options={data.options} />
                    </div>
                  </div>
                </div>

                <div id="comments">
                  <ol id="singlecomments" className="commentlist">
                    {data.reviewList.map((item) => (
                      <ReviewCard key={item.id} {...item} />
                    ))}
                  </ol>
                </div>

                {/* ========== pagination section ========== */}
                <Pagination className="mt-10" />
              </div>
            </div>
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

export default ProductDetails;
