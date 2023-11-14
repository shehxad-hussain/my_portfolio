import { NextPage } from 'next';
import { FC, ReactNode } from 'react';
import BlockLayout from 'components/layouts/BlockLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import * as All from 'components/blocks/portfolio';
import useIsotope from 'hooks/useIsotope';

const Portfolios: NextPage = () => {
  useIsotope();

  return (
    <BlockLayout title="Portfolio">
      <Block id={1}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n15 mb-md-n17">
          <All.Portfolio1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n9 mb-md-n14">
          <All.Portfolio2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Portfolio3 />
        </div>
      </Block>

      <Block id={4}>
        <All.Portfolio4 />
      </Block>

      <Block id={5}>
        <div className="pb-13 pb-md-15">
          <All.Portfolio5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Portfolio6 />
        </div>
      </Block>

      {/* <Block id={7}>
        <div className="">
          <All.Portfolio7 />
        </div>
      </Block> */}

      <Block id={8}>
        <All.Portfolio8 />
      </Block>

      <Block id={9}>
        <All.Portfolio9 />
      </Block>

      <Block id={10}>
        <div className="container pb-13 pb-md-15">
          <All.Portfolio10 />
        </div>
      </Block>

      <Block id={11}>
        <All.Portfolio11 />
      </Block>

      <Block id={12}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Portfolio12 />
        </div>
      </Block>
    </BlockLayout>
  );
};

type BlockProps = { id: number; children: ReactNode };

const Block: FC<BlockProps> = ({ id, children }) => {
  // markup
  const markup = `import { Portfolio${id} } from 'components/blocks/portfolio';

<Portfolio${id} />
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

export default Portfolios;
