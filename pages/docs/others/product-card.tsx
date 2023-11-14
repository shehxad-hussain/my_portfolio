import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import { ProductCard, ProductCard2 } from 'components/reuseable/product-cards';
// -------- markups -------- //
import { card1Markup, card2Markup } from 'markups/others/product-cards';
// -------- data -------- //
import products from 'data/product-list';
import { orderProducts } from 'data/checkout-page';

const quickAccess = [
  { title: 'Product Card 1', url: 'snippet-1' },
  { title: 'Product Card 2', url: 'snippet-2' }
];

const ProductCards: FC = () => {
  return (
    <DocLayout
      pageTitle="Product Cards"
      quickAccssLinks={quickAccess}
      headingColClass="col-md-9 col-lg-7 col-xl-5 mx-auto"
      description="Use our custom product card components to build any custom section or blocks"
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-3">Product Card 1</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row gy-10">
              {products.slice(0, 2).map((item) => (
                <ProductCard {...item} key={item.id} className="col-lg-6" />
              ))}
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
                <CodeHighlight language="jsx">{card1Markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper py-16">
        <h2 className="mb-3">Job Card 2</h2>

        <div className="card">
          <div className="card-body mb-n2">
            {orderProducts.slice(0, 2).map((item) => (
              <ProductCard2 {...item} key={item.id} />
            ))}
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>

          <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{card2Markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default ProductCards;
