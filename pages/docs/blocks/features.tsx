import { NextPage } from 'next';
import { FC, ReactNode } from 'react';
import BlockLayout from 'components/layouts/BlockLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import * as All from 'components/blocks/services';

const Features: NextPage = () => {
  return (
    <BlockLayout title="Features">
      <Block id={1}>
        <div className="pb-13 pb-md-15">
          <All.Services1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Services2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n17">
          <All.Services3 />
        </div>
      </Block>

      <Block id={4}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n18">
          <All.Services4 />
        </div>
      </Block>

      <Block id={5}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Services5 />
        </div>
      </Block>

      <Block id={7}>
        <div className="container pt-15 pt-md-6 pb-13 pb-md-15 mb-n14 mb-md-n17">
          <All.Services7 />
        </div>
      </Block>

      <Block id={8}>
        <div className="container pt-6 pt-md-6 pb-13 pb-md-15 mb-n15">
          <All.Services8 />
        </div>
      </Block>

      <Block id={9}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-lg-n22 mb-xl-n24">
          <All.Services9 />
        </div>
      </Block>

      <Block id={10}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n15 mb-md-n18">
          <All.Services10 />
        </div>
      </Block>

      <Block id={11}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n20">
          <All.Services11 />
        </div>
      </Block>

      <Block id={12}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Services12 />
        </div>
      </Block>

      {/* <Block id={13}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Services13 />
        </div>
      </Block> */}

      <Block id={14}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n17">
          <All.Services14 />
        </div>
      </Block>

      <Block id={15}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-md-n15">
          <All.Services15 />
        </div>
      </Block>

      <Block id={16}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mt-18 mt-md-21 mb-n14 mb-md-n17">
          <All.Services16 />
        </div>
      </Block>

      {/* <Block id={17}>
        <All.Services17 />
      </Block> */}

      {/* <Block id={18}>
        <All.Services18 />
      </Block> */}

      <Block id={19}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n16">
          <All.Services19 />
        </div>
      </Block>

      <Block id={20}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n17">
          <All.Services20 />
        </div>
      </Block>

      <Block id={21}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mt-19 mb-n14 mb-md-n17">
          <All.Services21 />
        </div>
      </Block>

      <Block id={22}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Services22 />
        </div>
      </Block>

      <Block id={23}>
        <div className="container">
          <All.Services23 />
        </div>
      </Block>

      <Block id={24}>
        <All.Services24 />
      </Block>

      <Block id={25}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Services25 />
        </div>
      </Block>

      <Block id={26}>
        <All.Services26 />
      </Block>

      <Block id={27}>
        <div className="pb-13 pb-md-15">
          <All.Services27 />
        </div>
      </Block>

      <Block id={28}>
        <div className="container pt-13 pt-md-15">
          <All.Services28 />
        </div>
      </Block>

      <Block id={29}>
        <All.Services29 />
      </Block>
    </BlockLayout>
  );
};

type BlockProps = { id: number; children: ReactNode };

const Block: FC<BlockProps> = ({ id, children }) => {
  // markup
  const markup = `import { Services${id} } from 'components/blocks/services';

<Services${id} />
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

export default Features;
