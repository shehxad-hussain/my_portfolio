import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import currency from 'utils/currency';
import NextLink from '../links/NextLink';

// ======================================================================
type ProductCard2Props = {
  size?: number;
  image: string;
  title: string;
  price: number;
  color?: string;
};
// ======================================================================

const ProductCard2: FC<ProductCard2Props> = (props) => {
  const { size, image, title, color, price } = props;

  return (
    <div className="shopping-cart-item d-flex justify-content-between mb-4">
      <div className="d-flex flex-row d-flex align-items-center">
        <figure className="rounded w-17">
          <Link href="#">
            <a>
              <Image width={90} height={100} src={image} alt="product" />
            </a>
          </Link>
        </figure>

        <div className="w-100 ms-4">
          <h3 className="post-title h6 lh-xs mb-1">
            <NextLink title={title} href="#" className="link-dark" />
          </h3>

          {color && <div className="small">Color: {color}</div>}
          {size && <div className="small">Size: {size}</div>}
        </div>
      </div>

      <div className="ms-2 d-flex align-items-center">
        <p className="price fs-sm">
          <span className="amount">{currency(price)}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard2;
