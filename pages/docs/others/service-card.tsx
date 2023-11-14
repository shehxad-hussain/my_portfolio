import { FC } from 'react';
import IconBox from 'components/reuseable/IconBox';
import DocLayout from 'components/layouts/DocLayout';
import NextLink from 'components/reuseable/links/NextLink';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import { ServiceCard3, ServiceCard4, ServiceCard5 } from 'components/reuseable/service-cards';
// -------- markups -------- //
import {
  card1Markup,
  card2Markup,
  card3Markup,
  card4Markup,
  card5Markup,
  card6Markup
} from 'markups/others/service-cards';
// -------- data -------- //
import data from 'data/career-page-1';
import { serviceList1, serviceList2, serviceList7 } from 'data/service';

const quickAccess = [
  { title: 'Service Card 1', url: 'snippet-1' },
  { title: 'Service Card 2', url: 'snippet-2' },
  { title: 'Service Card 3', url: 'snippet-3' },
  { title: 'Service Card 4', url: 'snippet-4' },
  { title: 'Service Card 5', url: 'snippet-5' },
  { title: 'Service Card 6', url: 'snippet-6' }
];

const ServiceCards: FC = () => {
  return (
    <DocLayout
      pageTitle="Service Cards"
      quickAccssLinks={quickAccess}
      headingColClass="col-md-9 col-lg-7 col-xl-5 mx-auto"
      description="Use our custom service card components to build any custom section or blocks"
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-3">Service Card 1</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row gx-md-5 gy-5 text-center">
              {serviceList1.slice(0, 2).map(({ id, icon: Icon, title, description, link, linkType }) => (
                <div className="col-lg-6" key={id}>
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <Icon />
                      <h4>{title}</h4>
                      <p className="mb-2">{description}</p>
                      <NextLink title="Learn More" href={link} className={`more hover link-${linkType}`} />
                    </div>
                  </div>
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
        <h2 className="mb-3">Service Card 2</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row gx-md-8 gy-8 text-center">
              {serviceList2.slice(0, 2).map(({ id, description, icon, linkUrl, title }) => (
                <div className="col-md-6" key={id}>
                  <IconBox icon={icon} className="icon btn btn-circle btn-lg btn-primary pe-none mb-5" />
                  <h4>{title}</h4>
                  <p className="mb-3">{description}</p>
                  <NextLink title="Learn More" href={linkUrl} className="more hover" />
                </div>
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
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-3">Service Card 3</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row gy-8">
              {data.facilities.slice(0, 2).map(({ Icon, id, ...item }) => (
                <div className="col-md-6" key={id}>
                  <ServiceCard3 {...item} Icon={<Icon className="icon-svg-sm solid-mono text-primary me-4" />} />
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
        <h2 className="mb-3">Service Card 4</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row gy-5">
              {serviceList7.map(({ id, Icon, color, ...item }) => (
                <ServiceCard4 key={id} Icon={<Icon className={`icon-svg-md text-${color} mb-3`} />} {...item} />
              ))}
            </div>
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
        <h2 className="mb-3">Service Card 5</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <ServiceCard5
                  url="#"
                  icon="uil-monitor"
                  title="Web Design"
                  description="Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida."
                />
              </div>
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
        <h2 className="mb-3">Service Card 6</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row gy-5 text-center">
              {serviceList2.slice(0, 2).map((item) => (
                <div className="col-lg-6" key={item.id}>
                  <div className="card">
                    <div className="card-body">
                      <IconBox icon={item.icon} className="icon btn btn-circle btn-lg btn-primary pe-none mb-5" />
                      <h4>{item.title}</h4>
                      <p className="mb-3">{item.description}</p>
                      <NextLink title="Learn More" href={item.linkUrl} className="more hover" />
                    </div>
                  </div>
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

export default ServiceCards;
