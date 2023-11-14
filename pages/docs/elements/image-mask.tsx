import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';

// -------- data -------- //
const quickAccess = [
  { title: 'Mask 1', url: 'snippet-1' },
  { title: 'Mask 2', url: 'snippet-2' },
  { title: 'Mask 3', url: 'snippet-3' }
];

const ImageMask: FC = () => {
  return (
    <DocLayout
      pageTitle="Image Mask"
      quickAccssLinks={quickAccess}
      description="Apply custom SVG shapes to your images."
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-" className="wrapper pt-16">
        <h2 className="mb-5">Mask 1</h2>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-7">
                <div className="img-mask mask-1">
                  <img src="/img/photos/about17.jpg" srcSet="/img/photos/about17@2x.jpg 2x" alt="" />
                </div>
              </div>
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
                <CodeHighlight language="jsx">
                  &lt;div className=&quot;img-mask mask-1&quot;&gt;&lt;img src=&quot;...&quot; alt=&quot;&quot;
                  /&gt;&lt;/div&gt;
                </CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Mask 2</h2>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-7">
                <div className="img-mask mask-2">
                  <img src="/img/photos/about17.jpg" srcSet="/img/photos/about17@2x.jpg 2x" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>

          <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">
                  &lt;div className=&quot;img-mask mask-2&quot;&gt;&lt;img src=&quot;...&quot; alt=&quot;&quot;
                  /&gt;&lt;/div&gt;
                </CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper py-16">
        <h2 className="mb-5">Mask 3</h2>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-7">
                <div className="img-mask mask-3">
                  <img src="/img/photos/about17.jpg" srcSet="/img/photos/about17@2x.jpg 2x" alt="" />
                </div>
              </div>
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
                <CodeHighlight language="jsx">
                  &lt;div className=&quot;img-mask mask-3&quot;&gt;&lt;img src=&quot;...&quot; alt=&quot;&quot;
                  /&gt;&lt;/div&gt;
                </CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default ImageMask;
