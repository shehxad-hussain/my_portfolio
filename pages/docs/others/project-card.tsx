import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import { ProjectCard1, ProjectCard2, ProjectCard3 } from 'components/reuseable/project-cards';
// -------- markups -------- //
import { card1Markup, card2Markup, card3Markup } from 'markups/others/project-cards';
// -------- hooks -------- //
import useIsotope from 'hooks/useIsotope';
import useLightBox from 'hooks/useLightBox';

// -------- data -------- //
const projectList = [
  {
    id: 1,
    link: '#',
    category: 'IDEAS',
    title: 'Cras Fermentum Sem',
    description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
    images: [
      {
        width: 900,
        height: 800,
        url: '/img/photos/cs1.jpg',
        tooltip: 'Purus Tellus Magna',
        full: '/img/photos/cs1-full.jpg'
      },
      {
        width: 900,
        height: 900,
        url: '/img/photos/cs2.jpg',
        full: '/img/photos/cs2-full.jpg',
        tooltip: 'Fusce Ipsum Vestibulum'
      },
      {
        width: 900,
        height: 718,
        url: '/img/photos/cs3.jpg',
        full: '/img/photos/cs3-full.jpg',
        tooltip: 'Condimentum Parturient Ligula'
      }
    ]
  }
];

const projectList2 = [
  {
    id: 1,
    link: '#',
    color: 'purple',
    category: 'COSMETIC',
    title: 'Cras Fermentum Sem',
    imageClassName: 'col-lg-8 col-xl-7 rounded',
    description: `Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`,
    cardStyle: { transform: 'translate(0px, -23px, 0px)' },
    detailsStyle: { right: '0%', bottom: '15%' },
    image: { width: 1300, height: 1262, url: '/img/photos/cs16.jpg' }
  }
];

const projectList3 = [
  {
    id: 1,
    category: 'Stationary',
    link: '/single-project-1',
    title: 'Cras Fermentum Sem',
    image: '/img/photos/pd7.jpg',
    fullImage: '/img/photos/pd7-full.jpg'
  },
  {
    id: 2,
    link: '/single-project-1',
    category: 'Magazine, Book',
    title: 'Mollis Ipsum Mattis',
    image: '/img/photos/pd8.jpg',
    fullImage: '/img/photos/pd8-full.jpg'
  }
];

const quickAccess = [
  { title: 'Project Card 1', url: 'snippet-1' },
  { title: 'Project Card 2', url: 'snippet-2' },
  { title: 'Project Card 3', url: 'snippet-3' }
];

const ProductCards: FC = () => {
  useIsotope();
  useLightBox();

  return (
    <DocLayout
      pageTitle="Project Cards"
      quickAccssLinks={quickAccess}
      headingColClass="col-md-9 col-lg-7 col-xl-5 mx-auto"
      description="Use our custom project card components to build any custom section or blocks"
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-3">Project Card 1</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="projects-tiles">
              {projectList.map((item) => (
                <ProjectCard1 {...item} key={item.id} />
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
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-3">Project Card 2</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="projects-overflow">
              {projectList2.map((item) => (
                <ProjectCard2 {...item} key={item.id} />
              ))}
            </div>
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

      {/* ========== section 3 ========== */}
      <section id="snippet-2" className="wrapper py-16">
        <h2 className="mb-3">Project Card 3</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="grid grid-view projects-masonry">
              <div className="row gx-md-8 gy-10 gy-md-13 isotope">
                {projectList3.map((item) => (
                  <div className="project item col-lg-6" key={item.id}>
                    <ProjectCard3 {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-3">
              View example's code
            </a>
          </div>

          <div id="collapse-3" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{card3Markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default ProductCards;
