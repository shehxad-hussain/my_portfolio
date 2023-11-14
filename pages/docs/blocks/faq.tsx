import { NextPage } from 'next';
import { FC, ReactNode } from 'react';
import BlockLayout from 'components/layouts/BlockLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import * as All from 'components/blocks/faq';

const Faq: NextPage = () => {
  return (
    <BlockLayout title="FAQ">
      <Block id={1}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.FAQ1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="pb-13 pb-md-15">
          <All.FAQ2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.FAQ3 />
        </div>
      </Block>

      {/* <Block id={4}>
        <div className="container pt-18 pt-md-20">
          <All.FAQ4 />
        </div>
      </Block> */}

      <Block id={5}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.FAQ5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="pt-15 pt-md-17 pb-13 pb-md-15">
          <All.FAQ6 />
        </div>
      </Block>

      <Block id={7}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.FAQ7 />
        </div>
      </Block>
    </BlockLayout>
  );
};

type BlockProps = { id: number; children: ReactNode };

const Block: FC<BlockProps> = ({ id, children }) => {
  // markup
  const markup = `import { FAQ${id} } from 'components/blocks/faq';

<FAQ${id} />
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

export default Faq;
