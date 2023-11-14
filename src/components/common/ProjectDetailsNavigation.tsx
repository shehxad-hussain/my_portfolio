import { FC } from 'react';
import ShareButton from './ShareButton';

const ProjectDetailsNavigation: FC = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container py-10">
        <div className="row gx-md-6 gy-3 gy-md-0">
          <div className="col-md-8 align-self-center text-center text-md-start navigation">
            <button className="btn btn-soft-ash rounded-pill btn-icon btn-icon-start mb-0 me-1">
              <i className="uil uil-arrow-left" /> Prev Post
            </button>

            <button className="btn btn-soft-ash rounded-pill btn-icon btn-icon-end mb-0">
              Next Post <i className="uil uil-arrow-right" />
            </button>
          </div>

          <aside className="col-md-4 sidebar text-center text-md-end">
            <ShareButton />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsNavigation;
