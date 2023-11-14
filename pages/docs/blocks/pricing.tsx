import { NextPage } from 'next';
import { FC, ReactNode } from 'react';
import * as All from 'components/blocks/pricing';
import BlockLayout from 'components/layouts/BlockLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';

const Pricing: NextPage = () => {
  return (
    <BlockLayout title="Pricing">
      <Block id={1}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n18">
          <All.Pricing1 />
        </div>
      </Block>

      {/* <Block id={2}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Pricing2 />
        </div>
      </Block> */}

      <Block id={3}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n16 mb-md-n18">
          <All.Pricing3 />
        </div>
      </Block>

      <Block id={4}>
        <All.Pricing4 />
      </Block>

      <Block id={5}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n18">
          <All.Pricing5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Pricing6 />
        </div>
      </Block>

      <Block id={7}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n10 mb-md-n18">
          <All.Pricing7 />
        </div>
      </Block>

      <Block id={8}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Pricing8 />
        </div>
      </Block>

      <Block id={10}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Pricing10 />
        </div>
      </Block>
    </BlockLayout>
  );
};

type BlockProps = { id: number; children: ReactNode };

const Block: FC<BlockProps> = ({ id, children }) => {
  // markup
  const markup = `import { Pricing${id} } from 'components/blocks/pricing';

<Pricing${id} />
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

export default Pricing;
