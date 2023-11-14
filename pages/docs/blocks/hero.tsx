import { NextPage } from 'next';
import { FC, ReactNode } from 'react';
import BlockLayout from 'components/layouts/BlockLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import * as All from 'components/blocks/hero';

const Heros: NextPage = () => {
  return (
    <BlockLayout title="Hero">
      <Block id={1}>
        <div className="pb-13 pb-md-15">
          <All.Hero1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n7 mb-md-n10 mb-lg-n16">
          <All.Hero2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="pb-17 pb-md-19">
          <All.Hero3 />
        </div>
      </Block>

      <Block id={4}>
        <div className="pb-13 pb-md-15">
          <All.Hero4 />
        </div>
      </Block>

      <Block id={5}>
        <div className="pb-13 pb-md-15">
          <All.Hero5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="pb-13 pb-md-15">
          <All.Hero6 />
        </div>
      </Block>

      <Block id={7}>
        <All.Hero7 />
      </Block>

      <Block id={8}>
        <div className="container pb-13 pb-md-15 mt-n2 mb-n13 mb-md-n17">
          <All.Hero8 />
        </div>
      </Block>

      <Block id={9}>
        <div className="pb-13 pb-md-15">
          <All.Hero9 />
        </div>
      </Block>

      <Block id={10}>
        <div className="pb-13 pb-md-15 mb-n11 mb-md-n19 mb-lg-n22">
          <All.Hero10 />
        </div>
      </Block>

      <Block id={11}>
        <div className="pb-13 pb-md-15">
          <All.Hero11 />
        </div>
      </Block>

      <Block id={12}>
        <div className="pb-13 pb-md-15">
          <All.Hero12 />
        </div>
      </Block>

      <Block id={13}>
        <div className="pb-13 pb-md-15">
          <All.Hero13 />
        </div>
      </Block>

      {/* <Block id={14}>
        <div className="">
          <All.Hero14 />
        </div>
      </Block> */}

      <Block id={15}>
        <div className="pb-13 pb-md-15">
          <All.Hero15 />
        </div>
      </Block>

      <Block id={16}>
        <div className="pb-13 pb-md-15">
          <All.Hero16 />
        </div>
      </Block>

      <Block id={17}>
        <div className="pb-13 pb-md-15">
          <All.Hero17 />
        </div>
      </Block>

      <Block id={18}>
        <div className="pb-13 pb-md-15">
          <All.Hero18 />
        </div>
      </Block>

      <Block id={19}>
        <div className="pb-13 pb-md-15">
          <All.Hero19 />
        </div>
      </Block>

      <Block id={20}>
        <div className="pb-13 pb-md-15">
          <All.Hero20 />
        </div>
      </Block>

      <Block id={21}>
        <div className="pb-13 pb-md-15">
          <All.Hero21 />
        </div>
      </Block>

      <Block id={22}>
        <div className="pb-13 pb-md-15">
          <All.Hero22 />
        </div>
      </Block>

      {/* <Block id={23}>
        <div className="pb-13 pb-md-15">
          <All.Hero23 />
        </div>
      </Block> */}

      <Block id={24}>
        <div className="pb-13 pb-md-15">
          <All.Hero24 />
        </div>
      </Block>

      <Block id={25}>
        <div className="pb-13 pb-md-15">
          <All.Hero25 />
        </div>
      </Block>

      <Block id={26}>
        <div className="pb-13 pb-md-15">
          <All.Hero26 />
        </div>
      </Block>

      <Block id={27}>
        <div className="pb-13 pb-md-15">
          <All.Hero27 />
        </div>
      </Block>
    </BlockLayout>
  );
};

type BlockProps = { id: number; children: ReactNode };

const Block: FC<BlockProps> = ({ id, children }) => {
  // markup
  const markup = `import { Hero${id} } from 'components/blocks/hero';

<Hero${id} />
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

export default Heros;
