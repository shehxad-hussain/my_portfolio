import Link from 'next/link';
import Image from 'next/image';
import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
// -------- custom hook -------- //
import useIsotope from 'hooks/useIsotope';
// -------- data -------- //
const projectList = [
  {
    id: 1,
    link: '#',
    color: 'purple',
    type: 'product',
    category: 'COSMETIC',
    title: 'Cras Fermentum Sem',
    image: { width: 1300, height: 1262, url: '/img/photos/cs16.jpg' }
  },
  {
    id: 2,
    link: '#',
    color: 'leaf',
    type: 'workshop',
    category: 'COFFEE',
    title: 'Mollis Ipsum Mattis',
    image: { width: 1300, height: 1435, url: '/img/photos/cs17.jpg' }
  },
  {
    id: 3,
    link: '#',
    color: 'violet',
    type: 'still-life',
    category: 'STILL LIFE',
    title: 'Ipsum Ultricies Cursus',
    image: { width: 1200, height: 923, url: '/img/photos/cs18.jpg' }
  },
  {
    id: 4,
    link: '#',
    color: 'yellow',
    type: 'product',
    category: 'PRODUCT',
    title: 'Sollicitudin Ornare Porta',
    image: { width: 1200, height: 919, url: '/img/photos/cs19.jpg' }
  },
  {
    id: 5,
    link: '#',
    color: 'orange',
    type: 'product',
    category: 'PRODUCT',
    title: 'Inceptos Euismod Egestas',
    image: { width: 1300, height: 1365, url: '/img/photos/cs20.jpg' }
  },
  {
    id: 6,
    link: '#',
    color: 'green',
    type: 'workshop',
    category: 'WORKSHOP',
    title: 'Ipsum Mollis Vulputate',
    image: { width: 1200, height: 960, url: '/img/photos/cs21.jpg' }
  },
  {
    id: 7,
    link: '#',
    color: 'aqua',
    type: 'concept',
    category: 'CONCEPT',
    title: 'Vulputate Sollicitudin',
    image: { width: 1200, height: 1294, url: '/img/photos/cs23.jpg' }
  },
  {
    id: 8,
    link: '#',
    color: 'red',
    type: 'concept',
    category: 'CONCEPT',
    title: 'Porta Ornare Cras',
    image: { width: 1200, height: 1200, url: '/img/photos/cs22.jpg' }
  },
  {
    id: 9,
    link: '#',
    color: 'pink',
    type: 'product',
    category: 'PRODUCT',
    title: 'Ridiculus Elit',
    image: { width: 1200, height: 800, url: '/img/photos/cs25.jpg' }
  },
  {
    id: 10,
    link: '#',
    color: 'purple',
    type: 'product',
    category: 'PRODUCT',
    title: 'Magna Tristique Inceptos',
    image: { width: 1200, height: 830, url: '/img/photos/cs24.jpg' }
  }
];

const filterItems = [
  { id: 1, title: 'All', value: '*' },
  { id: 2, title: 'Concept', value: '.concept' },
  { id: 3, title: 'Product', value: '.product' },
  { id: 4, title: 'Workshop', value: '.workshop' },
  { id: 5, title: 'Still Life', value: '.still-life' }
];

const ProjectsThree: NextPage = () => {
  const { handleFilterKeyChange, filterKey } = useIsotope();

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="wrapper bg-light">
          <div className="container pt-10 pt-md-14">
            <div className="row">
              <div className="col-lg-10 col-xxl-8">
                <h1 className="display-1 mb-0">Check out some of our awesome projects with creative ideas.</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="grid grid-view projects-masonry">
              {/* ========== filter section ========== */}
              <div className="isotope-filter filter mb-10">
                <p>Filter:</p>
                <ul>
                  {filterItems.map(({ id, title, value }) => (
                    <li key={id}>
                      <a
                        onClick={handleFilterKeyChange(value)}
                        className={`filter-item ${value === filterKey ? 'active' : ''}`}
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ========== projects section ========== */}
              <div className="row gx-md-10 gy-10 gy-md-13 isotope">
                {projectList.map(({ id, image, title, category, color, link, type }) => (
                  <div className={`project item col-md-6 ${type}`} key={id}>
                    <Link href={link}>
                      <a>
                        <figure className="lift rounded mb-6">
                          <Image
                            alt={title}
                            src={image.url}
                            width={image.width}
                            layout="responsive"
                            height={image.height}
                          />
                        </figure>
                      </a>
                    </Link>

                    <div className="project-details d-flex justify-content-center flex-column">
                      <div className="post-header">
                        <div className={`post-category text-line mb-3 text-${color}`}>{category}</div>
                        <h3 className="post-title">{title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default ProjectsThree;
