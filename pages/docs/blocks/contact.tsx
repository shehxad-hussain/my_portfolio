import { NextPage } from 'next';
import { FC, ReactNode } from 'react';
import BlockLayout from 'components/layouts/BlockLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import * as All from 'components/blocks/contact';

const Contact: NextPage = () => {
  return (
    <BlockLayout title="Contact">
      <Block id={1}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Contact1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Contact2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Contact3 />
        </div>
      </Block>

      <Block id={4}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n10 mb-md-n14">
          <All.Contact4 />
        </div>
      </Block>

      <Block id={5}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n10 mb-md-n14">
          <All.Contact5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="pb-13 pb-md-15">
          <All.Contact6 />
        </div>
      </Block>

      <Block id={7}>
        <All.Contact7 />
      </Block>

      <Block id={8}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Contact8 />
        </div>
      </Block>

      <Block id={9}>
        <div className="pb-13 pb-md-15">
          <All.Contact9 />
        </div>
      </Block>

      <Block id={10}>
        <All.Contact10 />
      </Block>

      <Block id={11}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n15 mb-md-n18">
          <All.Contact11 />
        </div>
      </Block>

      <Block id={12}>
        <div className="pb-13 pb-md-15">
          <All.Contact12 />
        </div>
      </Block>

      <Block id={13}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Contact13 />
        </div>
      </Block>
    </BlockLayout>
  );
};

type BlockProps = { id: number; children: ReactNode };

const Block: FC<BlockProps> = ({ id, children }) => {
  // markup
  const markup = `import { Contact${id} } from 'components/blocks/contact';

<Contact${id} />
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

export default Contact;
