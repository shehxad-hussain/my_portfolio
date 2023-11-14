import { FC } from 'react';
import currency from 'utils/currency';
import NextLink from '../links/NextLink';
import ratingGenerate from 'utils/ratings';

// =========================================
type ProductCardProps = {
  image: string;
  title: string;
  new?: boolean;
  sale?: boolean;
  rating: number;
  category: string;
  salePrice?: number;
  className?: string;
  regularPrice: number;
};
// =========================================

const ProductCard: FC<ProductCardProps> = (props) => {
  const { image, title, new: newProduct, sale, category, salePrice, regularPrice, rating, className = '' } = props;

  const badge = (title: string, color: string) => {
    return (
      <span
        style={{ top: '1rem', left: '1rem' }}
        className={`avatar ${color} text-white w-10 h-10 position-absolute text-uppercase fs-13`}
      >
        <span>{title}</span>
      </span>
    );
  };

  return (
    <div className={`project item ${className}`}>
      <figure className="rounded mb-6 position-relative overflow-hidden">
        <img src={`/img/photos/${image}.jpg`} srcSet={`/img/photos/${image}@2x.jpg 2x`} alt="" />

        <a
          href="#"
          title=""
          className="item-like"
          aria-label="Add to wishlist"
          data-bs-toggle="white-tooltip"
          data-bs-original-title="Add to wishlist"
        >
          <i className="uil uil-heart" />
        </a>

        <a
          href="#"
          title=""
          className="item-view"
          aria-label="Quick view"
          data-bs-toggle="white-tooltip"
          data-bs-original-title="Quick view"
        >
          <i className="uil uil-eye" />
        </a>

        <a className="item-cart">
          <i className="uil uil-shopping-bag" /> Add to Cart
        </a>

        {newProduct && badge('New!', 'bg-aqua')}
        {sale && badge('Sale!', 'bg-pink')}
      </figure>

      <div className="post-header">
        <div className="d-flex flex-row align-items-center justify-content-between mb-2">
          <div className="post-category text-ash mb-0">{category}</div>
          <span className={`ratings ${ratingGenerate(rating)}`} />
        </div>

        <h2 className="post-title h3 fs-22">
          <NextLink title={title} href="#" className="link-dark" />
        </h2>

        <p className="price">
          {salePrice && salePrice > 0 ? (
            <>
              <del>
                <span className="amount">{currency(salePrice)}</span>
              </del>{' '}
              <ins>
                <span className="amount">{currency(regularPrice)}</span>
              </ins>
            </>
          ) : (
            <span className="amount">{currency(regularPrice)}</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
