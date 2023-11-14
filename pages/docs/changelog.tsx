import { NextPage } from 'next';
import DocLayout from 'components/layouts/DocLayout';

const Changelog: NextPage = () => {
  return (
    <DocLayout
      pageTitle="Changelog"
      description="Find out what is newly added, changed, fixed, improved or updated in the latest Sandbox versions."
    >
      <section id="snippet-1" className="wrapper py-16">
        <h2 className="mb-5">v1.0.0 - 1 November, 22</h2>
        <div className="card">
          <div className="card-body">
            <ul className="list-unstyled mb-0">
              <li>Initial release.</li>
            </ul>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Changelog;
