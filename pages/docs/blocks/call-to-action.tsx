import { NextPage } from 'next';
import { FC, ReactNode } from 'react';
import BlockLayout from 'components/layouts/BlockLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import { CTA1, CTA10, CTA2, CTA3, CTA4, CTA5, CTA6, CTA7, CTA8, CTA9 } from 'components/blocks/call-to-action';

const Blog: NextPage = () => {
  return (
    <BlockLayout title="Call to Action">
      <Block id={1}>
        <div className="pb-14 pb-md-16">
          <CTA1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="py-14 py-md-16">
          <CTA2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="py-14 py-md-16 mb-n14 mb-md-n16">
          <CTA3 />
        </div>
      </Block>

      <Block id={4}>
        <div className="py-14 py-md-16">
          <CTA4 />
        </div>
      </Block>

      <Block id={5}>
        <div className="py-14 py-md-16">
          <CTA5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="py-14 py-md-16">
          <CTA6 />
        </div>
      </Block>

      <Block id={7}>
        <div className="py-14 py-md-16 mb-n14">
          <CTA7 />
        </div>
      </Block>

      <Block id={8}>
        <div className="py-14 py-md-16 mb-n14">
          <CTA8 />
        </div>
      </Block>

      <Block id={9}>
        <div className="py-14 py-md-16">
          <CTA9 />
        </div>
      </Block>

      <Block id={10}>
        <CTA10 />
      </Block>
    </BlockLayout>
  );
};

type BlockProps = { id: number; children: ReactNode };

const Block: FC<BlockProps> = ({ id, children }) => {
  // markup
  const markup = `import { CTA${id} } from 'components/blocks/call-to-action';

<CTA${id} />
`;

  return (
    <section id={`snippet-${id}`} className="wrapper bg-light wrapper-border">
      {children}

      <div className="container pb-15 pb-md-17">
        <div className="card">
          <div className="card-footer border-0 position-relative" style={{ zIndex: 3 }}>
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

export default Blog;
