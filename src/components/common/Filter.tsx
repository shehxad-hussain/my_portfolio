import { FC } from 'react';
import Collapse from 'components/reuseable/Collapse';
// -------- data -------- //
const collapseList = [
  {
    total: 21,
    expanded: true,
    title: 'Clothing',
    id: 'clothing-collapse',
    items: [
      { title: 'Dresses', url: '#' },
      { title: 'Knitwear', url: '#' },
      { title: 'Jeans', url: '#' }
    ]
  },
  {
    total: 19,
    expanded: false,
    title: 'Electronics',
    id: 'electronics-collapse',
    items: [
      { title: 'Headphones', url: '#' },
      { title: 'Computers', url: '#' },
      { title: 'Cameras', url: '#' },
      { title: 'Annually', url: '#' }
    ]
  },
  {
    total: 12,
    title: 'Shoes',
    expanded: false,
    id: 'shoes-collapse',
    items: [
      { title: 'Sneakers', url: '#' },
      { title: 'Sandals', url: '#' },
      { title: 'Boots', url: '#' }
    ]
  },
  {
    total: 16,
    expanded: false,
    title: 'Home & Kitchen ',
    id: 'home-kitchen-collapse',
    items: [
      { title: 'Clocks', url: '#' },
      { title: 'Kettles', url: '#' },
      { title: 'Kitchenware', url: '#' }
    ]
  }
];

const ratings = [
  { value: 5, id: 'rating5', className: 'five' },
  { value: 4, id: 'rating4', className: 'four' },
  { value: 3, id: 'rating3', className: 'three' },
  { value: 2, id: 'rating2', className: 'two' },
  { value: 1, id: 'rating1', className: 'one' }
];

const sizeList = [
  { value: 23, id: 'sx', title: 'SX' },
  { value: 253, id: 's', title: 'S' },
  { value: 65, id: 'm', title: 'M' },
  { value: 156, id: 'l', title: 'L' },
  { value: 74, id: 'xl', title: 'XL' }
];

const priceRanges = [
  { id: 'price1', title: '$0.00 - $50.00', value: { start: 0, end: 50 } },
  { id: 'price2', title: '$50.00 - $100.00', value: { start: 50, end: 100 } },
  { id: 'price3', title: '$100.00 - $150.00', value: { start: 100, end: 150 } },
  { id: 'price4', title: '$150.00 - $200.00', value: { start: 150, end: 200 } }
];

const Filter: FC = () => {
  const Title = (title: string) => <h4 className="widget-title mb-3">{title}</h4>;

  return (
    <aside className="col-lg-3 sidebar">
      <div className="widget mt-1">
        <h4 className="widget-title mb-3">Categories</h4>
        <ul className="list-unstyled ps-0">
          {collapseList.map((item) => (
            <li className="mb-1" key={item.id}>
              <Collapse {...item} />
            </li>
          ))}
        </ul>
      </div>

      <div className="widget">
        {Title('Rating')}

        {ratings.map(({ id, className, value }) => (
          <div className="form-check mb-1" key={id}>
            <input className="form-check-input" type="radio" name="rating" id={id} />
            <label className="form-check-label" htmlFor={id}>
              <span className={`ratings ${className}`} />
            </label>
          </div>
        ))}
      </div>

      <div className="widget">
        {Title('Size')}

        {sizeList.map(({ id, value, title }) => (
          <div className="form-check mb-1" key={id}>
            <input className="form-check-input" type="checkbox" id={id} />
            <label className="form-check-label" htmlFor={id}>
              {title} <span className="fs-sm text-muted ms-1">({value})</span>
            </label>
          </div>
        ))}
      </div>

      <div className="widget">
        {Title('Price')}

        {priceRanges.map(({ id, value, title }) => (
          <div className="form-check mb-1" key={id}>
            <input className="form-check-input" type="radio" name="price" id={id} />
            <label className="form-check-label" htmlFor={id}>
              {title}
            </label>
          </div>
        ))}

        <div className="row">
          <div className="col-7 col-md-5 col-lg-12 col-xl-10 col-xxl-10">
            <div className="d-flex align-items-center mt-4">
              <input type="number" className="form-control form-control-sm" placeholder="$0.00" min="0" />
              <div className="text-muted mx-2">‒</div>
              <input type="number" className="form-control form-control-sm" placeholder="$50.00" max="50" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Filter;
