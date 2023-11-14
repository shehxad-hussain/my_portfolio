import { NextPage } from 'next';
import { FC, ReactNode } from 'react';
import BlockLayout from 'components/layouts/BlockLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import * as All from 'components/blocks/footer';

const Footers: NextPage = () => {
  return (
    <BlockLayout title="Footer">
      <Block id={1}>
        <div className="pb-13 pb-md-15">
          <All.Footer1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="pb-13 pb-md-15 mt-16 mt-md-21">
          <All.Footer2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="pb-13 pb-md-15">
          <All.Footer3 />
        </div>
      </Block>

      <Block id={4}>
        <All.Footer4 />
      </Block>

      <Block id={5}>
        <div className="pb-13 pb-md-15">
          <All.Footer5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="pb-13 pb-md-15">
          <All.Footer6 />
        </div>
      </Block>

      <Block id={7}>
        <div className="pb-13 pb-md-15">
          <All.Footer7 />
        </div>
      </Block>

      <Block id={8}>
        <div className="pb-13 pb-md-15">
          <All.Footer8 />
        </div>
      </Block>

      <Block id={9}>
        <div className="pb-13 pb-md-15">
          <All.Footer9 />
        </div>
      </Block>

      <Block id={10}>
        <div className="pb-13 pb-md-15">
          <All.Footer10 />
        </div>
      </Block>

      <Block id={11}>
        <div className="pt-15 pt-md-17">
          <All.Footer11 />
        </div>
      </Block>

      <Block id={12}>
        <div className="pb-13 pb-md-15">
          <All.Footer12 />
        </div>
      </Block>

      <Block id={13}>
        <div className="pb-13 pb-md-15">
          <All.Footer13 />
        </div>
      </Block>

      <Block id={14}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Footer14 />
        </div>
      </Block>

      <Block id={15}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Footer15 />
        </div>
      </Block>

      <Block id={16}>
        <div className="pb-13 pb-md-15">
          <All.Footer16 />
        </div>
      </Block>

      <Block id={17}>
        <div className="pt-10 pt-md-12 pb-13 pb-md-15">
          <All.Footer17 />
        </div>
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

export default Footers;
