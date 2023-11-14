import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markups -------- //
import {
  standardMarkup,
  dataDelayMarkup,
  groupWrapMarkup,
  parentWrapMarkup,
  dataDurationMarkup,
  dataIntervalMarkup
} from 'markups/elements/animations';
// -------- data -------- //
const quickAccess = [
  { title: 'Standard Example', url: 'snippet-1' },
  { title: 'Parent Wrap', url: 'snippet-2' },
  { title: 'Group Wrap', url: 'snippet-3' },
  { title: '[data-duration]', url: 'snippet-4' },
  { title: '[data-interval]', url: 'snippet-5' },
  { title: '[data-delay]', url: 'snippet-6' }
];

const Animations: FC = () => {
  return (
    <DocLayout
      pageTitle="Animations"
      quickAccssLinks={quickAccess}
      headingColClass="col-md-9 col-lg-7 col-xl-6 mx-auto"
      description={
        <>
          Add animations to elements to show them by scrolling. For further plugin documentation please visit{' '}
          <a href="https://prjct-samwest.github.io/scrollCue/" target="_blank" className="hover more" rel="noreferrer">
            scrollCue.js docs
          </a>
        </>
      }
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-3">Standard Example</h2>
        <p className="lead mb-8">
          Set the <code className="code">data-cue</code> attribute in the target element and specify the animation type.
        </p>
        <div className="card">
          <div className="card-body">
            <div className="row g-4">
              <div className="col" data-cue="fadeIn">
                <figure className="rounded">
                  <img src="/img/photos/p1.jpg" srcSet="/img/photos/p1@2x.jpg 2x" alt="" />
                </figure>
              </div>

              <div className="col" data-cue="fadeIn">
                <figure className="rounded">
                  <img src="/img/photos/p2.jpg" srcSet="/img/photos/p2@2x.jpg 2x" alt="" />
                </figure>
              </div>

              <div className="col" data-cue="fadeIn">
                <figure className="rounded">
                  <img src="/img/photos/p3.jpg" srcSet="/img/photos/p3@2x.jpg 2x" alt="" />
                </figure>
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
                <CodeHighlight language="jsx">{standardMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-3">Parent Wrap</h2>
        <p className="lead mb-8">
          You can wrap it in a parent element by setting the <code className="code">data-cues</code> attribute.
        </p>
        <div className="card">
          <div className="card-body">
            <div className="row g-4" data-cues="fadeIn">
              <div className="col" data-cue="fadeIn">
                <figure className="rounded">
                  <img src="/img/photos/p1.jpg" srcSet="/img/photos/p1@2x.jpg 2x" alt="" />
                </figure>
              </div>

              <div className="col" data-cue="fadeIn">
                <figure className="rounded">
                  <img src="/img/photos/p2.jpg" srcSet="/img/photos/p2@2x.jpg 2x" alt="" />
                </figure>
              </div>

              <div className="col" data-cue="fadeIn">
                <figure className="rounded">
                  <img src="/img/photos/p3.jpg" srcSet="/img/photos/p3@2x.jpg 2x" alt="" />
                </figure>
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
                <CodeHighlight language="jsx">{parentWrapMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-3">Group Wrap</h2>
        <p className="lead mb-8">
          You can group target elements by setting the <code className="code">data-group</code> attribute. With
          grouping, when the first element is triggered, the remaining elements are also triggered sequentially,
          regardless of the scroll amount.
        </p>
        <div className="card">
          <div className="card-body">
            <div className="row g-4" data-cues="fadeIn" data-group="images">
              <div className="col" data-cue="fadeIn">
                <figure className="rounded">
                  <img src="/img/photos/p1.jpg" srcSet="/img/photos/p1@2x.jpg 2x" alt="" />
                </figure>
              </div>

              <div className="col" data-cue="fadeIn">
                <figure className="rounded">
                  <img src="/img/photos/p2.jpg" srcSet="/img/photos/p2@2x.jpg 2x" alt="" />
                </figure>
              </div>

              <div className="col" data-cue="fadeIn">
                <figure className="rounded">
                  <img src="/img/photos/p3.jpg" srcSet="/img/photos/p3@2x.jpg 2x" alt="" />
                </figure>
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
                <CodeHighlight language="jsx">{groupWrapMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper pt-16">
        <h2 className="mb-3">[data-duration]</h2>
        <p className="lead mb-8">You can set the showing time of the element. (ms)</p>
        <div className="card">
          <div className="card-body">
            <div className="row g-4" data-cues="fadeIn" data-duration="2000">
              <div className="col" data-cue="fadeIn">
                <figure className="rounded">
                  <img src="/img/photos/p1.jpg" srcSet="/img/photos/p1@2x.jpg 2x" alt="" />
                </figure>
              </div>

              <div className="col" data-cue="fadeIn" data-duration="500">
                <figure className="rounded">
                  <img src="/img/photos/p2.jpg" srcSet="/img/photos/p2@2x.jpg 2x" alt="" />
                </figure>
              </div>

              <div className="col" data-cue="fadeIn" data-duration="500">
                <figure className="rounded">
                  <img src="/img/photos/p3.jpg" srcSet="/img/photos/p3@2x.jpg 2x" alt="" />
                </figure>
              </div>
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
                <CodeHighlight language="jsx">{dataDurationMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 5 ========== */}
      <section id="snippet-5" className="wrapper pt-16">
        <h2 className="mb-3">[data-interval]</h2>
        <p className="lead mb-8">You can set the showing interval time of the element. (ms)</p>
        <div className="card">
          <div className="card-body">
            <div className="row g-4" data-cues="fadeIn" data-interval="-200">
              <div className="col" data-cue="fadeIn">
                <figure className="rounded">
                  <img src="/img/photos/p1.jpg" srcSet="/img/photos/p1@2x.jpg 2x" alt="" />
                </figure>
              </div>

              <div className="col" data-cue="fadeIn" data-interval="1000">
                <figure className="rounded">
                  <img src="/img/photos/p2.jpg" srcSet="/img/photos/p2@2x.jpg 2x" alt="" />
                </figure>
              </div>

              <div className="col" data-cue="fadeIn" data-interval="-0.2">
                <figure className="rounded">
                  <img src="/img/photos/p3.jpg" srcSet="/img/photos/p3@2x.jpg 2x" alt="" />
                </figure>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-5">
              View example's code
            </a>
          </div>

          <div id="collapse-5" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{dataIntervalMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 6 ========== */}
      <section id="snippet-6" className="wrapper py-16">
        <h2 className="mb-3">[data-delay]</h2>
        <p className="mb-8">You can set the showing delay time of the element. (ms)</p>
        <div className="card">
          <div className="card-body">
            <div className="row g-4" data-cues="fadeIn" data-delay="1000">
              <div className="col" data-cue="fadeIn">
                <figure className="rounded">
                  <img src="/img/photos/p1.jpg" srcSet="/img/photos/p1@2x.jpg 2x" alt="" />
                </figure>
              </div>

              <div className="col" data-cue="fadeIn" data-delay="2000">
                <figure className="rounded">
                  <img src="/img/photos/p2.jpg" srcSet="/img/photos/p2@2x.jpg 2x" alt="" />
                </figure>
              </div>

              <div className="col" data-cue="fadeIn">
                <figure className="rounded">
                  <img src="/img/photos/p3.jpg" srcSet="/img/photos/p3@2x.jpg 2x" alt="" />
                </figure>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-6">
              View example's code
            </a>
          </div>

          <div id="collapse-6" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{dataDelayMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Animations;
