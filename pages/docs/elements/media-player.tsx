import { FC } from 'react';
import Plyr from 'plyr-react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markups -------- //
import { htmlMarkup, vimeoMarkup, youtubeMarkup, embededMarkup } from 'markups/elements/media-player';

// -------- data -------- //
const quickAccess = [
  { title: 'HTML5 Video - plyr', url: 'snippet-1' },
  { title: 'Vimeo - plyr', url: 'snippet-2' },
  { title: 'YouTube - plyr', url: 'snippet-3' },
  { title: 'Embed', url: 'snippet-4' }
];

const MediaPlayer: FC = () => {
  return (
    <DocLayout
      pageTitle="Media Player"
      quickAccssLinks={quickAccess}
      descriptionClass="lead px-xxl-10"
      headingColClass="col-md-9 col-lg-7 col-xl-7 mx-auto"
      description={
        <>
          Examples on how to add videos with the included responsive media player. For further instructions on the
          plugin please visit{' '}
          <a href="https://github.com/chintan9/plyr-react" target="_blank" className="hover more" rel="noreferrer">
            Plyr docs
          </a>
        </>
      }
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">HTML5 Video - plyr</h2>
        <div className="card">
          <div className="card-body">
            <Plyr
              options={{ loadSprite: true, clickToPlay: true }}
              source={{ type: 'video', sources: [{ src: '/media/movie.mp4', provider: 'html5' }] }}
            />
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-1">
              View example's code
            </a>
          </div>

          <div id="collapse-1" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{htmlMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Vimeo - plyr</h2>
        <div className="card">
          <div className="card-body">
            <Plyr
              options={{ loadSprite: true, clickToPlay: true }}
              source={{ type: 'video', sources: [{ src: '15801179', provider: 'vimeo' }] }}
            />
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-1">
              View example's code
            </a>
          </div>

          <div id="collapse-1" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{vimeoMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-5">YouTube - plyr</h2>
        <div className="card">
          <div className="card-body">
            <Plyr
              options={{ loadSprite: true, clickToPlay: true }}
              source={{ type: 'video', sources: [{ src: 'j_Y2Gwaj7Gs', provider: 'youtube' }] }}
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
                <CodeHighlight language="jsx">{youtubeMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper py-16">
        <h2 className="mb-5">Responsive Embed</h2>
        <div className="card">
          <div className="card-body">
            <div className="ratio ratio-16x9">
              <iframe
                className="rounded"
                src="https://www.youtube.com/embed/j_Y2Gwaj7Gs?rel=0"
                title="YouTube video"
                allowFullScreen
              />
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
                <CodeHighlight language="jsx">{embededMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default MediaPlayer;
