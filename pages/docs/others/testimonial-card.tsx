import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import {
  TestimonialCard1,
  TestimonialCard2,
  TestimonialCard3,
  TestimonialCard4,
  TestimonialCard5,
  TestimonialCard6
} from 'components/reuseable/testimonial-cards';
// -------- markups -------- //
import {
  card1Markup,
  card2Markup,
  card3Markup,
  card4Markup,
  card5Markup,
  card6Markup
} from 'markups/others/testimonial-cards';
// -------- data -------- //
import { testimonialList2 } from 'data/testimonial-list';

const quickAccess = [
  { title: 'Testimonial Card 1', url: 'snippet-1' },
  { title: 'Testimonial Card 2', url: 'snippet-2' },
  { title: 'Testimonial Card 3', url: 'snippet-3' },
  { title: 'Testimonial Card 4', url: 'snippet-4' },
  { title: 'Testimonial Card 5', url: 'snippet-5' },
  { title: 'Testimonial Card 6', url: 'snippet-6' }
];

const testimonialList1 = [
  {
    name: 'Coriss Ambady',
    designation: 'Financial Analyst',
    review: `Donec id elit non porta gravida at eget metus. Duis mollis est luctus commodo nisi erat.`
  },
  {
    name: 'Cory Zamora',
    designation: 'Marketing Specialist',
    review: `Donec id elit non porta gravida at eget metus. Duis mollis est luctus commodo nisi erat.`
  }
];

const testimonialList3 = [
  {
    id: 1,
    name: 'Coriss Ambady',
    image: '/img/avatars/te1.jpg',
    designation: 'Financial Analyst',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis.`
  },
  {
    id: 2,
    name: 'Cory Zamora',
    image: '/img/avatars/te2.jpg',
    designation: 'Marketing Specialist',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis.`
  }
];

const TestimonialCards: FC = () => {
  return (
    <DocLayout
      pageTitle="Tesimonial Cards"
      quickAccssLinks={quickAccess}
      headingColClass="col-md-9 col-lg-7 col-xl-5 mx-auto"
      description="Use our custom testimonial card components to build any custom blog section or blocks"
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-3">Testimonial Card 1</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row gx-md-5 gy-5">
              {testimonialList1.map((item, i) => (
                <div className="col-md-6" key={i}>
                  <TestimonialCard1 {...item} />
                </div>
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
        <h2 className="mb-3">Testimonial Card 2</h2>

        <div className="card">
          <div className="card-body mb-n2">
            {testimonialList2.slice(0, 1).map((item, i) => (
              <TestimonialCard2 key={i} {...item} />
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

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-3">Testimonial Card 3</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row isotope gy-6">
              {testimonialList3.map((item) => (
                <div className="item col-md-6" key={item.id}>
                  <TestimonialCard3 {...item} />
                </div>
              ))}
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

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper pt-16">
        <h2 className="mb-3">Testimonial Card 4</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <TestimonialCard4 />
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-4">
              View example's code
            </a>
          </div>

          <div id="collapse-4" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{card4Markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 5 ========== */}
      <section id="snippet-5" className="wrapper pt-16">
        <h2 className="mb-3">Testimonial Card 5</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row isotope gy-6">
              {testimonialList1.map((item) => (
                <div className="item col-md-6" key={item.name}>
                  <TestimonialCard5 {...item} />
                </div>
              ))}
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-5">
              View example's code
            </a>
          </div>

          <div id="collapse-5" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{card5Markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 6 ========== */}
      <section id="snippet-6" className="wrapper py-16">
        <h2 className="mb-3">Testimonial Card 6</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row isotope gy-6">
              {testimonialList1.map((item) => (
                <div className="item col-md-6" key={item.name}>
                  <TestimonialCard6 {...item} />
                </div>
              ))}
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-6">
              View example's code
            </a>
          </div>

          <div id="collapse-6" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{card6Markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default TestimonialCards;
