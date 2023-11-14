import NextLink from 'components/reuseable/links/NextLink';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import currency from 'utils/currency';

const cartItems = [
  {
    id: 1,
    stock: 5,
    quantity: 1,
    name: 'Nike Air Sneakers',
    image: '/img/photos/sth1.jpg',
    price: { sales: 45, regular: 55 }
  },
  {
    id: 2,
    stock: 5,
    quantity: 1,
    name: 'Colorful Sneakers',
    image: '/img/photos/sth2.jpg',
    price: { sales: 0, regular: 45 }
  },
  {
    id: 3,
    stock: 5,
    quantity: 1,
    name: 'Polaroid Camera',
    image: '/img/photos/sth3.jpg',
    price: { sales: 0, regular: 45 }
  }
];

const MiniCart: FC = () => {
  return (
    <div className="offcanvas offcanvas-end bg-light" id="offcanvas-cart" data-bs-scroll="true">
      <div className="offcanvas-header">
        <h3 className="mb-0">Your Cart</h3>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>

      <div className="offcanvas-body d-flex flex-column">
        <div className="shopping-cart">
          {cartItems.map(({ id, price, image, quantity, name }) => (
            <div className="shopping-cart-item d-flex justify-content-between mb-4" key={id}>
              <div className="d-flex flex-row">
                <figure className="rounded w-17">
                  <Link href="/products/1" passHref>
                    <a>
                      <Image src={image} width={90} height={100} layout="responsive" alt={name} />
                    </a>
                  </Link>
                </figure>

                <div className="w-100 ms-4">
                  <h3 className="post-title fs-16 lh-xs mb-1">
                    <NextLink title={name} href="/products/1" className="link-dark" />
                  </h3>

                  <p className="price fs-sm">
                    {price.sales ? (
                      <>
                        <del>
                          <span className="amount">{currency(price.regular)}</span>
                        </del>{' '}
                        <ins>
                          <span className="amount">{currency(price.sales)}</span>
                        </ins>
                      </>
                    ) : (
                      <span className="amount">{currency(price.regular)}</span>
                    )}
                  </p>

                  <div className="form-select-wrapper">
                    <select className="form-select form-select-sm" defaultValue={quantity}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="ms-2">
                <a href="#" className="link-dark">
                  <i className="uil uil-trash-alt" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="offcanvas-footer flex-column text-center">
          <div className="d-flex w-100 justify-content-between mb-4">
            <span>Subtotal:</span>
            <span className="h6 mb-0">$135.99</span>
          </div>

          <Link href="/checkout" passHref>
            <a className="btn btn-primary btn-icon btn-icon-start rounded w-100 mb-4">
              <i className="uil uil-credit-card fs-18" /> Checkout
            </a>
          </Link>

          <p className="fs-14 mb-0">Free shipping on all orders over $50</p>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
