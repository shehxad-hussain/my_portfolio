import { NextPage } from 'next';
import { FC, ReactNode } from 'react';
import * as All from 'components/blocks/team';
import BlockLayout from 'components/layouts/BlockLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';

const Teams: NextPage = () => {
  return (
    <BlockLayout title="Team">
      <Block id={1}>
        <div className="mt-n8 mt-lg-23 mt-xl-25">
          <All.Team1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n16 mb-md-n17 mb-xl-n20">
          <All.Team2 />
        </div>
      </Block>

      <Block id={3}>
        <All.Team3 />
      </Block>

      <Block id={4}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Team4 />
        </div>
      </Block>

      <Block id={5}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n16 mb-md-n19">
          <All.Team5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-md-n20">
          <All.Team6 />
        </div>
      </Block>

      <Block id={7}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n17">
          <All.Team7 />
        </div>
      </Block>
    </BlockLayout>
  );
};

type BlockProps = { id: number; children: ReactNode };

const Block: FC<BlockProps> = ({ id, children }) => {
  // markup
  const markup = `import { Team${id} } from 'components/blocks/team';

<Team${id} />
`;

  return (
    <section id={`snippet-${id}`} className="wrapper bg-light wrapper-border">
      {children}

      <div className="container pb-15 pb-md-17 position-relative" style={{ zIndex: 3 }}>
        <div className="card">
          <div className="card-footer border-0 position-relative">
            <a
              className="collapse-link collapsed stretched-link"
              data-bs-toggle="collapse"
              href={`#collapse-snippet-${id}`}
            >
              View example's code
            </a>
          </div>

          <div id={`collapse-snippet-${id}`} className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
