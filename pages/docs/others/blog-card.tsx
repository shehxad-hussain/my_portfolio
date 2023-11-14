import { FC } from 'react';
import Image from 'next/image';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import { BlogCard1, BlogCard2, BlogCard3, BlogCard4, BlogCard5 } from 'components/reuseable/blog-cards';
// -------- markups -------- //
import { card1Markup, card2Markup, card3Markup, card4Markup, card5Markup } from 'markups/others/blog-cards';
// -------- data -------- //
import { blogList } from 'data/demo-11';
import { blogList1, blogList4, blogList5 } from 'data/blog';

const quickAccess = [
  { title: 'Blog Card 1', url: 'snippet-1' },
  { title: 'Blog Card 2', url: 'snippet-2' },
  { title: 'Blog Card 3', url: 'snippet-3' },
  { title: 'Blog Card 4', url: 'snippet-4' },
  { title: 'Blog Card 5', url: 'snippet-5' }
];

const BlogCards: FC = () => {
  return (
    <DocLayout
      pageTitle="Blog Cards"
      quickAccssLinks={quickAccess}
      headingColClass="col-md-9 col-lg-7 col-xl-5 mx-auto"
      description="Use our custom blog card components to build any custom blog section or blocks"
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-3">Blog Card 1</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row gy-6">
              {blogList1.slice(0, 2).map((item) => (
                <div className="col-lg-6" key={item.id}>
                  <BlogCard1 {...item} />
                </div>
              ))}
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-1">
              View example's code
            </a>
          </div>

          <div id="collapse-1" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{card1Markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-3">Blog Card 2</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <BlogCard2
              link="#"
              category="Restaurants"
              title="Fringilla Ligula Pharetra Amet"
              description="Duis mollis, est non commodo luctus, nisi erat porttitor ligula"
              cardTop={
                <figure className="card-img-top overlay overlay-1 hover-scale">
                  <a className="link-dark" href="#">
                    <Image width={960} height={600} src="/img/photos/tb9.jpg" alt="blog" layout="responsive" />
                    <span className="bg" />
                  </a>

                  <figcaption>
                    <h5 className="from-top mb-0">Read More</h5>
                  </figcaption>
                </figure>
              }
            />
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>

          <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{card2Markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-3">Blog Card 3</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row gy-6">
              {blogList4.slice(0, 2).map((item) => (
                <BlogCard3 {...item} key={item.id} />
              ))}
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-3">
              View example's code
            </a>
          </div>

          <div id="collapse-3" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{card3Markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper pt-16">
        <h2 className="mb-3">Blog Card 4</h2>

        <div className="card">
          <div className="card-body mb-n2">
            <div className="row gy-6">
              {blogList.slice(0, 2).map((item) => (
                <div className="col-lg-6" key={item.id}>
                  <BlogCard4 {...item} />
                </div>
              ))}
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-4">
              View example's code
            </a>
          </div>

          <div id="collapse-4" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{card4Markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 5 ========== */}
      <section id="snippet-5" className="wrapper py-16">
        <h2 className="mb-3">Blog Card 5</h2>

        <div className="card">
          <div className="card-body mb-n2">
            {blogList5.slice(0, 1).map((item) => (
              <BlogCard5 key={item.id} {...item} />
            ))}
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-5">
              View example's code
            </a>
          </div>

          <div id="collapse-5" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{card5Markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default BlogCards;
