import Link from 'next/link';
import Image from 'next/image';
import { FC, Fragment } from 'react';
import currency from 'utils/currency';
import NextLink from './links/NextLink';

// =============================================================
type CartListItemProps = {
  id: string;
  title: string;
  image: string;
  size?: number;
  color?: string;
  quantity: number;
  salePrice: number;
  regularPrice: number;
};
// =============================================================

const CartListItem: FC<CartListItemProps> = (props) => {
  const { id, title, image, size, color, quantity, salePrice, regularPrice } = props;

  const total = +quantity * (salePrice || regularPrice);

  return (
    <tr>
      <td className="option text-start d-flex flex-row align-items-center ps-0">
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
      </td>

      <td>
        <p className="price">
          {salePrice ? (
            <Fragment>
              <del>
                <span className="amount">{currency(regularPrice)}</span>
              </del>{' '}
              <ins>
                <span className="amount">{currency(salePrice)}</span>
              </ins>
            </Fragment>
          ) : (
            <span className="amount">{currency(regularPrice)}</span>
          )}
        </p>
      </td>

      <td>
        <div className="form-select-wrapper">
          <select className="form-select form-select-sm mx-auto" defaultValue={1}>
            {[1, 2, 3, 4, 5].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </td>

      <td>
        <p className="price">
          <span className="amount">{currency(total)}</span>
        </p>
      </td>

      <td className="pe-0">
        <NextLink title={<i className="uil uil-trash-alt" />} href="#" className="link-dark" />
      </td>
    </tr>
  );
};

export default CartListItem;
