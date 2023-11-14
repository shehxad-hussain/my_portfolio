import { FC } from 'react';
import useIsotope from 'hooks/useIsotope';
import { portfolioList4 } from 'data/portfolio';

const Portfolio5: FC = () => {
  const { filterKey, handleFilterKeyChange } = useIsotope();
  // filter list
  const filterList = [
    { id: 1, title: 'All', value: '*' },
    { id: 2, title: 'Foods', value: '.foods' },
    { id: 3, title: 'Drinks', value: '.drinks' },
    { id: 4, title: 'Events', value: '.events' },
    { id: 5, title: 'Pastries', value: '.pastries' }
  ];

  return (
    <section id="portfolio">
      <div className="wrapper bg-gray">
        <div className="container py-15 py-md-17 text-center">
          <div className="row">
            <div className="col-lg-10 col-xl-8 col-xxl-7 mx-auto mb-8">
              <h2 className="display-5 mb-3">My Selected Shots</h2>
              <p className="lead fs-lg">Photography is my passion and I love to turn ideas into beautiful things.</p>
            </div>
          </div>

          <div className="grid grid-view projects-masonry">
            <div className="isotope-filter filter mb-10">
              <ul>
                {filterList.map(({ id, title, value }) => (
                  <li key={id}>
                    <a
                      onClick={handleFilterKeyChange(value)}
                      className={`filter-item ${filterKey === value ? 'active' : ''}`}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="row gx-md-6 gy-6 isotope">
              {portfolioList4.map(({ category, id, image, title }) => (
                <div className={`project item col-md-6 col-xl-4 ${category}`} key={id}>
                  <figure className="overlay overlay-1 rounded">
                    <a href={`/img/photos/${image}-full.jpg`} data-glightbox data-gallery="shots-group">
                      <img src={`/img/photos/${image}.jpg`} alt={title} />
                      <span className="bg" />
                    </a>
                    <figcaption>
                      <h5 className="from-top mb-0">{title}</h5>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio5;
