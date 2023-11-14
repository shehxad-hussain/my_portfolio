import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import { TeamCard1, TeamCard2, TeamCard3 } from 'components/reuseable/team-cards';
// -------- markups -------- //
import { card1Markup, card2Markup, card3Markup } from 'markups/others/team-cards';
// -------- data -------- //
import teams from 'data/team-list';
import { teams as teams2 } from 'data/demo-8';

const quickAccess = [
  { title: 'Team Card 1', url: 'snippet-1' },
  { title: 'Team Card 2', url: 'snippet-2' },
  { title: 'Team Card 3', url: 'snippet-3' }
];

const TeamCards: FC = () => {
  return (
    <DocLayout
      pageTitle="Team Cards"
      quickAccssLinks={quickAccess}
      headingColClass="col-md-9 col-lg-7 col-xl-5 mx-auto"
      description="Use our custom team card components to build any custom blog section or blocks"
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-3">Team Card 1</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row gy-6 gy-lg-0">
              {teams.slice(0, 2).map((item) => (
                <div className="col-lg-6" key={item.id}>
                  <TeamCard1 {...item} />
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
        <h2 className="mb-3">Team Card 2</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row gy-6 gx-lg-14">
              {teams.slice(0, 2).map((team) => (
                <div className="col-lg-6" key={team.id}>
                  <TeamCard2 {...team} />
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
      <section id="snippet-3" className="wrapper py-16">
        <h2 className="mb-3">Team Card 3</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row gy-6 gx-lg-12">
              {teams2.slice(0, 2).map((item) => (
                <div className="col-md-6" key={item.id}>
                  <TeamCard3 {...item} />
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
    </DocLayout>
  );
};

export default TeamCards;
