import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import { Counter1, Counter2, Counter3 } from 'components/reuseable/counter';
// -------- markups -------- //
import { counter1Markup, counter2Markup, counter3Markup } from 'markups/others/counters';
// -------- data -------- //
import { factList1, factList2 } from 'data/facts';

const quickAccess = [
  { title: 'Counter 1', url: 'snippet-1' },
  { title: 'Counter 2', url: 'snippet-2' },
  { title: 'Counter 3', url: 'snippet-3' }
];

const Counters: FC = () => {
  return (
    <DocLayout
      pageTitle="Counters"
      quickAccssLinks={quickAccess}
      headingColClass="col-md-9 col-lg-7 col-xl-5 mx-auto"
      description="Use our custom counter components to build any custom facts section or blocks"
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-3">Counter 1</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row align-items-center counter-wrapper gy-6 text-center mb-8">
              <Counter1 title="Completed Projects" number={1000} />
              <Counter1 title="Happy Clients" number={500} />
              <Counter1 title="Awards Won" number={150} />
            </div>

            <div className="row align-items-center counter-wrapper gy-6 text-center">
              <Counter1 title="Completed Projects" number={1000} titleColor="text-primary" />
              <Counter1 title="Happy Clients" number={500} titleColor="text-primary" />
              <Counter1 title="Awards Won" number={150} titleColor="text-primary" />
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
                <CodeHighlight language="jsx">{counter1Markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-3">Counter 2</h2>

        <div className="card overflow-hidden">
          <div className="card-body bg-dark mb-n2">
            <div className="row align-items-center counter-wrapper gy-4 text-center">
              {factList2.map((item) => (
                <Counter2 key={item.id} {...item} />
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
                <CodeHighlight language="jsx">{counter2Markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper py-16">
        <h2 className="mb-3">Blog Card 3</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row align-items-center counter-wrapper gy-6 text-center">
              {factList1.map(({ id, number, title, Icon }) => (
                <Counter3 title={title} number={number} Icon={<Icon />} key={id} />
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
                <CodeHighlight language="jsx">{counter3Markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Counters;
