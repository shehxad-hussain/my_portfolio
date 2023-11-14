import { NextPage } from 'next';
import { FC, ReactNode } from 'react';
import BlockLayout from 'components/layouts/BlockLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import * as All from 'components/blocks/blog';

const Blog: NextPage = () => {
  return (
    <BlockLayout title="Blog">
      <hr className="border-0 mb-0" />
      <Block id={1}>
        <All.Blog1 />
      </Block>

      <Block id={2}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Blog2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Blog3 />
        </div>
      </Block>

      <Block id={4}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n17 mb-md-n20">
          <All.Blog4 />
        </div>
      </Block>

      <Block id={5}>
        <div className="mb-12">
          <All.Blog5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="container pb-13 pb-md-15">
          <All.Blog6 />
        </div>
      </Block>
    </BlockLayout>
  );
};

type BlockProps = { id: number; children: ReactNode };

const Block: FC<BlockProps> = ({ id, children }) => {
  // markup
  const markup = `import { Blog${id} } from 'components/blocks/blog';

<Blog${id} />
`;

  return (
    <div id={`snippet-${id}`} className="wrapper bg-light wrapper-border">
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
    </div>
  );
};

export default Blog;
