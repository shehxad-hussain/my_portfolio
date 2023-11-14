import { NextPage } from 'next';
import { FC, ReactNode } from 'react';
import useProgressbar from 'hooks/useProgressbar';
import BlockLayout from 'components/layouts/BlockLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import * as All from 'components/blocks/facts';

const Facts: NextPage = () => {
  // used for the animated line
  useProgressbar();

  return (
    <BlockLayout title="Facts">
      <Block id={1}>
        <div className="pb-13 pb-md-15">
          <All.Facts1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Facts2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="container pt-18 pt-md-20">
          <All.Facts3 />
        </div>
      </Block>

      <Block id={4}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Facts4 />
        </div>
      </Block>

      <Block id={5}>
        <div className="pb-13 pb-md-15">
          <All.Facts5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n15 mb-lg-n18">
          <All.Facts6 />
        </div>
      </Block>

      <Block id={7}>
        <div className="pb-13 pb-md-15">
          <All.Facts7 />
        </div>
      </Block>

      <Block id={8}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Facts8 />
        </div>
      </Block>

      <Block id={9}>
        <div className="mt-20">
          <All.Facts9 />
        </div>
      </Block>

      <Block id={10}>
        <div className="pb-13 pb-md-15">
          <All.Facts10 />
        </div>
      </Block>

      <Block id={11}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n11">
          <All.Facts11 />
        </div>
      </Block>

      <Block id={12}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Facts12 />
        </div>
      </Block>

      <Block id={13}>
        <div className="pb-13 pb-md-15">
          <All.Facts13 />
        </div>
      </Block>

      <Block id={14}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Facts14 />
        </div>
      </Block>

      <Block id={15}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n11">
          <All.Facts15 />
        </div>
      </Block>

      <Block id={16}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Facts16 />
        </div>
      </Block>

      <Block id={17}>
        <div className="pb-13 pb-md-15">
          <All.Facts17 />
        </div>
      </Block>
    </BlockLayout>
  );
};

type BlockProps = { id: number; children: ReactNode };

const Block: FC<BlockProps> = ({ id, children }) => {
  // markup
  const markup = `import { Facts${id} } from 'components/blocks/facts';

<Facts${id} />
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

export default Facts;
