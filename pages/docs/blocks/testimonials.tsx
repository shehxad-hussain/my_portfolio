import { NextPage } from 'next';
import { FC, ReactNode } from 'react';
import * as All from 'components/blocks/testimonial';
import BlockLayout from 'components/layouts/BlockLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';

const Testimonials: NextPage = () => {
  return (
    <BlockLayout title="Testimonial">
      <Block id={1}>
        <div className="pb-13 pb-md-15">
          <All.Testimonial1 />
        </div>
      </Block>

      <Block id={2}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mt-18 mt-md-23 mb-n16 mb-md-n18">
          <All.Testimonial2 />
        </div>
      </Block>

      <Block id={3}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14">
          <All.Testimonial3 />
        </div>
      </Block>

      <Block id={4}>
        <All.Testimonial4 />
      </Block>

      <Block id={5}>
        <div className="pb-13 pb-md-15">
          <All.Testimonial5 />
        </div>
      </Block>

      <Block id={6}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Testimonial6 />
        </div>
      </Block>

      <Block id={7}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14">
          <All.Testimonial7 />
        </div>
      </Block>

      <Block id={8}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Testimonial8 />
        </div>
      </Block>

      <Block id={9}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n14 mb-md-n18">
          <All.Testimonial9 />
        </div>
      </Block>

      <Block id={10}>
        <div className="pb-13 pb-md-15 mt-md-25">
          <All.Testimonial10 />
        </div>
      </Block>

      {/* <Block id={11}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <All.Testimonial11 />
        </div>
      </Block> */}

      <Block id={12}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mt-19 mt-md-22 mb-n14 mb-md-n18">
          <All.Testimonial12 />
        </div>
      </Block>

      <Block id={13}>
        <div className="pb-13 pb-md-15">
          <All.Testimonial13 />
        </div>
      </Block>

      <Block id={14}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mt-19 mt-md-22 mb-n14 mb-md-n17">
          <All.Testimonial14 />
        </div>
      </Block>

      <Block id={15}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mt-18 mb-n18">
          <All.Testimonial15 />
        </div>
      </Block>

      <Block id={16}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mt-21 mt-md-23">
          <All.Testimonial16 />
        </div>
      </Block>

      <Block id={17}>
        <All.Testimonial17 />
      </Block>

      <Block id={18}>
        <div className="pb-13 pb-md-15">
          <All.Testimonial18 />
        </div>
      </Block>

      <Block id={19}>
        <div className="pb-13 pb-md-15">
          <All.Testimonial19 />
        </div>
      </Block>

      <Block id={20}>
        <div className="container pt-13 pt-md-15">
          <All.Testimonial20 />
        </div>
      </Block>

      <Block id={21}>
        <div className="container pt-13 pt-md-15">
          <All.Testimonial21 />
        </div>
      </Block>
    </BlockLayout>
  );
};

type BlockProps = { id: number; children: ReactNode };

const Block: FC<BlockProps> = ({ id, children }) => {
  // markup
  const markup = `import { Testimonial${id} } from 'components/blocks/testimonial';

<Testimonial${id} />
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

export default Testimonials;
