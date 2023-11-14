import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import { JobPostCard2 } from 'components/reuseable/job-cards';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markups -------- //
import { job1Markup, job2Markup } from 'markups/others/job-cards';
// -------- data -------- //
import data from 'data/career-page-1';
import dataTwo from 'data/career-page-2';

const quickAccess = [
  { title: 'Job Card 1', url: 'snippet-1' },
  { title: 'Job Card 2', url: 'snippet-2' }
];

const JobCards: FC = () => {
  return (
    <DocLayout
      pageTitle="Job Cards"
      quickAccssLinks={quickAccess}
      headingColClass="col-md-9 col-lg-7 col-xl-5 mx-auto"
      description="Use our custom job card components to build any custom section or blocks"
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-3">Job Card 1</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row gy-6">
              {data.jobList.slice(0, 2).map((item) => (
                <div className="col-lg-6" key={item.id}>
                  <div className="card shadow-lg lift h-100">
                    <div className="card-body p-5 d-flex flex-row">
                      <div>
                        <span className={`avatar ${item.avatarColor} text-white w-11 h-11 fs-20 me-4`}>
                          {item.company}
                        </span>
                      </div>

                      <div>
                        <span className={`badge ${item.badgeColor} rounded py-1 mb-2`}>{item.time}</span>
                        <h4 className="mb-1">{item.title}</h4>
                        <p className="mb-0 text-body">{item.location}</p>
                      </div>
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
                <CodeHighlight language="jsx">{job1Markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper py-16">
        <h2 className="mb-3">Job Card 2</h2>

        <div className="card">
          <div className="card-body mb-n2">
            {dataTwo.designJobList.map((item) => (
              <JobPostCard2 {...item} key={item.id} />
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
                <CodeHighlight language="jsx">{job2Markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default JobCards;
