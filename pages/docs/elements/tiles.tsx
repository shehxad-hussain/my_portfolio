import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import { Tiles1, Tiles11, Tiles2, Tiles3, Tiles4, Tiles5, Tiles7, Tiles8, Tiles9 } from 'components/elements/tiles';
// -------- markups -------- //
import {
  markup1,
  markup2,
  markup3,
  markup4,
  markup5,
  markup6,
  markup7,
  markup8,
  markup9
} from 'markups/elements/tiles';

// -------- data -------- //
const quickAccess = [
  { title: 'Tiles 1', url: 'snippet-1' },
  { title: 'Tiles 2', url: 'snippet-2' },
  { title: 'Tiles 3', url: 'snippet-3' },
  { title: 'Tiles 4', url: 'snippet-4' },
  { title: 'Tiles 5', url: 'snippet-5' },
  { title: 'Tiles 6', url: 'snippet-6' },
  { title: 'Tiles 7', url: 'snippet-7' },
  { title: 'Tiles 8', url: 'snippet-8' },
  { title: 'Tiles 9', url: 'snippet-9' }
];

const Tiles: FC = () => {
  const tiles = [
    { id: 1, Component: Tiles1, markup: markup1 },
    { id: 2, Component: Tiles2, markup: markup2 },
    { id: 3, Component: Tiles3, markup: markup3 },
    { id: 4, Component: Tiles4, markup: markup4 },
    { id: 5, Component: Tiles5, markup: markup5 },
    { id: 6, Component: Tiles7, markup: markup6 },
    { id: 7, Component: Tiles8, markup: markup7 },
    { id: 8, Component: Tiles9, markup: markup8 },
    { id: 9, Component: Tiles11, markup: markup9 }
  ];

  return (
    <DocLayout
      pageTitle="Tiles"
      quickAccssLinks={quickAccess}
      headingColClass="col-md-9 col-lg-7 col-xl-4 mx-auto"
      description="Use our tile options to arrange images with appealing styles."
    >
      {/* ========== section 1 ========== */}

      {tiles.map(({ id, Component, markup }) => (
        <section id={`snippet-${id}`} className="wrapper pt-16" key={id}>
          <h2 className="mb-5">Tiles {id}</h2>
          <div className="card">
            <div className="card-body">
              <Component />
            </div>

            <div className="card-footer position-relative">
              <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href={`#collapse-${id}`}>
                View example's code
              </a>
            </div>

            <div id={`collapse-${id}`} className="card-footer bg-dark p-0 accordion-collapse collapse">
              <div className="code-wrapper">
                <div className="code-wrapper-inner">
                  <CodeHighlight language="jsx">{markup}</CodeHighlight>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </DocLayout>
  );
};

export default Tiles;
