import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { ProjectCard2 } from 'components/reuseable/project-cards';
import Pagination from 'components/reuseable/Pagination';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
const projectList = [
  {
    id: 1,
    link: '#',
    color: 'purple',
    category: 'COSMETIC',
    title: 'Cras Fermentum Sem',
    imageClassName: 'col-lg-8 col-xl-7 offset-xl-1 rounded',
    description: `Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`,
    cardStyle: { transform: 'translate(0px, -23px, 0px)' },
    detailsStyle: { right: '10%', bottom: '25%' },
    image: { width: 1300, height: 1262, url: '/img/photos/cs16.jpg' }
  },
  {
    id: 2,
    link: '#',
    color: 'leaf',
    category: 'COFFEE',
    title: 'Mollis Ipsum Mattis',
    imageClassName: 'col-lg-7 offset-lg-5 col-xl-6 offset-xl-5 rounded',
    description: `Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula.`,
    cardStyle: { transform: 'translate(0px, 80px, 0px)' },
    detailsStyle: { left: '18%', bottom: '25%' },
    image: { width: 1300, height: 1435, url: '/img/photos/cs17.jpg' }
  },
  {
    id: 3,
    link: '#',
    color: 'violet',
    category: 'STILL LIFE',
    title: 'Ipsum Ultricies Cursus',
    imageClassName: 'col-lg-9 col-xl-7 offset-xl-2 rounded',
    description: `Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`,
    cardStyle: { transform: 'translate(0px, 32px, 0px)' },
    detailsStyle: { right: '3%', bottom: '25%' },
    image: { width: 1200, height: 923, url: '/img/photos/cs18.jpg' }
  },
  {
    id: 4,
    link: '#',
    color: 'yellow',
    category: 'PRODUCT',
    title: 'Sollicitudin Ornare Porta',
    imageClassName: 'col-lg-9 offset-lg-3 col-xl-7 offset-xl-4 rounded',
    description: `Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`,
    cardStyle: { transform: 'translate(0px, 23px, 0px)' },
    detailsStyle: { left: '12%', bottom: '25%' },
    image: { width: 1200, height: 919, url: '/img/photos/cs19.jpg' }
  },
  {
    id: 5,
    link: '#',
    color: 'orange',
    category: 'PRODUCT',
    title: 'Inceptos Euismod Egestas',
    imageClassName: 'col-lg-8 col-xl-6 offset-xl-1 rounded',
    description: `Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula.`,
    cardStyle: { transform: 'translate(0px, 2px, 0px)' },
    detailsStyle: { right: '15%', bottom: '25%' },
    image: { width: 1300, height: 1365, url: '/img/photos/cs20.jpg' }
  },
  {
    id: 6,
    link: '#',
    color: 'green',
    category: 'WORKSHOP',
    title: 'Ipsum Mollis Vulputate',
    imageClassName: 'col-lg-9 offset-lg-3 col-xl-7 offset-xl-5 rounded',
    description: `Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`,
    cardStyle: { transform: 'translate(0px, 9px, 0px)' },
    detailsStyle: { left: '18%', bottom: '25%' },
    image: { width: 1200, height: 960, url: '/img/photos/cs21.jpg' }
  },
  {
    id: 7,
    link: '#',
    color: 'red',
    category: 'CONCEPT',
    title: 'Porta Ornare Cras',
    imageClassName: 'col-lg-8 col-xl-6 offset-xl-1 rounded',
    description: `Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`,
    cardStyle: { transform: 'translate(0px, 14px, 0px)' },
    detailsStyle: { right: '15%', bottom: '25%' },
    image: { width: 1200, height: 1200, url: '/img/photos/cs22.jpg' }
  }
];

const ProjectsTwo: NextPage = () => {
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
          <div className="container pt-10 pt-md-14 text-center">
            <div className="row">
              <div className="col-md-8 col-lg-7 col-xl-6 col-xxl-5 mx-auto">
                <h1 className="display-1 mb-3">Projects</h1>
                <p className="lead fs-lg px-lg-10 px-xxl-8">
                  Check out some of our awesome projects with creative ideas and great design.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container pt-9 pt-md-11 pb-14 pb-md-16">
            {/* ========== projects section ========== */}
            <div className="projects-overflow mt-md-10 mb-10 mb-lg-15">
              {projectList.map((item) => (
                <ProjectCard2 {...item} key={item.id} />
              ))}
            </div>

            {/* ========== pagination section ========== */}
            <Pagination />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default ProjectsTwo;
