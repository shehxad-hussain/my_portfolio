import { NextPage } from 'next';
import { FC, ReactNode } from 'react';
import * as All from 'components/blocks/process';
import BlockLayout from 'components/layouts/BlockLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';

const Process: NextPage = () => {
  return (
    <BlockLayout title="Pricing">
      <Block id={1}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n18">
          <All.Process1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n17 mb-lg-n19">
          <All.Process2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n16 mb-md-n18">
          <All.Process3 />
        </div>
      </Block>

      <Block id={4}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15 mt-lg-20 mt-xl-22">
          <All.Process4 />
        </div>
      </Block>

      <Block id={5}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-lg-n19 mb-xl-n22">
          <All.Process5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Process6 />
        </div>
      </Block>

      <Block id={7}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Process7 />
        </div>
      </Block>

      <Block id={8}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n16">
          <All.Process8 />
        </div>
      </Block>

      <Block id={9}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n19">
          <All.Process9 />
        </div>
      </Block>

      <Block id={10}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n17">
          <All.Process10 />
        </div>
      </Block>

      <Block id={11}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n17">
          <All.Process11 />
        </div>
      </Block>

      <Block id={12}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Process12 />
        </div>
      </Block>

      <Block id={13}>
        <All.Process13 />
      </Block>

      <Block id={14}>
        <div className="container pt-15 pt-md-17">
          <All.Process14 />
        </div>
      </Block>

      <Block id={15}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n15 mb-md-n17">
          <All.Process15 />
        </div>
      </Block>

      <Block id={16}>
        <div className="container pt-13 pt-md-15">
          <All.Process16 />
        </div>
      </Block>

      <Block id={17}>
        <div className=" pb-13 pb-md-15">
          <All.Process17 />
        </div>
      </Block>
    </BlockLayout>
  );
};

type BlockProps = { id: number; children: ReactNode };

const Block: FC<BlockProps> = ({ id, children }) => {
  // markup
  const markup = `import { Process${id} } from 'components/blocks/process';

<Process${id} />
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

export default Process;
