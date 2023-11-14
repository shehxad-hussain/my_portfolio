import { NextPage } from 'next';
import DocLayout from 'components/layouts/DocLayout';
// -------- data -------- //
const quickAccess = [
  { title: 'Overview', url: 'snippet-1' },
  { title: 'File Structure', url: 'snippet-2' },
  { title: 'Installation', url: 'snippet-3' }
];

const Documentation: NextPage = () => {
  return (
    <DocLayout
      pageTitle="Get Started"
      quickAccssLinks={quickAccess}
      description="Guide to get started with Sandbox Modern & Multipurpose Bootstrap 5 Template."
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Overview</h2>
        <div className="card">
          <div className="card-body">
            <p>
              This guide will help you get started with Sandbox. All the information regarding file structure, build
              tools, components, credits, license and FAQ can be found here.
            </p>

            <p>
              If you have any questions that are beyond the scope of this help documentation, please feel free to
              contact us with the links below and please don't forget to provide your website URL.
            </p>

            <a
              href="mailto:support@ui-lib.com"
              className="btn btn-primary rounded-pill me-2"
              target="_blank"
              rel="noreferrer"
            >
              Contact Support
            </a>

            <a
              href="http://support.ui-lib.com/"
              className="btn btn-soft-primary rounded-pill"
              target="_blank"
              rel="noreferrer"
            >
              Create Support ticket
            </a>

            <div className="card bg-soft-blue shadow-lg card-border-start border-soft-blue text-navy mt-10">
              <div className="card-body">
                <p>
                  <strong>Please remember...</strong>
                </p>

                <ul className="unordered-list mb-0">
                  <li>Requests sent during weekends or on holidays will be replied on business days.</li>
                  <li>
                    We only provide support for the issues related to the features that are included in the template.
                    Debugging or providing guides on how to make custom modifications are not part of our support. Thank
                    you for understanding.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">File Structure</h2>
        <div className="card">
          <div className="card-body">
            <ul className="list-unstyled mb-0">
              <li>
                <code className="folder bg-pale-primary">pages</code> All pages exist inside this folder.{' '}
                <strong>Use this folder</strong> if you want to create new page or edit any page.
              </li>

              <li>
                <code className="folder bg-pale-primary">public</code> All template files like Fonts / CSS / IMG / Media
                exist inside in this folder
                <ul>
                  <li>
                    <code className="folder bg-pale-primary">public/css</code> Contains main{' '}
                    <code className="file">theme.js</code> and JS vendor files. If you don't wish to use all included
                    plugins and scripts, just remove unwanted vendor JS files from{' '}
                  </li>

                  <li>
                    <code className="folder bg-pale-primary">public/fonts</code> Contains Fonts files inside this folder
                  </li>

                  <li>
                    <code className="folder bg-pale-primary">public/img</code> All{' '}
                    <mark className="doc">image, svg</mark> files inside this folder we used in the demos
                  </li>

                  <li>
                    <code className="folder bg-pale-primary">public/media</code> All videos inside this folder we used
                    in the demos
                  </li>
                </ul>
              </li>

              <li>
                <code className="folder bg-pale-primary">src</code> All template source files like Components / SCSS /
                Data / Icon / Hooks that are exist inside this folder.
                <ul>
                  <li>
                    <code className="folder bg-pale-primary">src/assets</code> Contains main{' '}
                    <code className="file">theme.js</code> and JS vendor files. If you don't wish to use all included
                    plugins and scripts, just remove unwanted vendor JS files from{' '}
                    <code className="folder">src/assets/js/vendor</code> then remove unwanted functions from{' '}
                    <code className="file">src/assets/js/theme.js</code> and recompile.
                  </li>

                  <li>
                    <code className="folder bg-pale-primary">src/components</code> Contains all components inside this
                    folder. If you want to need any component modification find from here.
                    <ul>
                      <li>
                        <code className="folder bg-pale-primary">src/components/block</code> Contains all pages sections
                        or blocks inside here
                      </li>

                      <li>
                        <code className="folder bg-pale-primary">src/components/reusable</code> Contains all resuable
                        components inside here
                      </li>

                      <li>
                        <code className="folder bg-pale-primary">src/components/common</code> Contains all common static
                        component or blocks exists here.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <code className="folder bg-pale-primary">src/data</code> Contains all project dummy data inside this
                    folder.
                  </li>

                  <li>
                    <code className="folder bg-pale-primary">src/hooks</code> In this template, we create some custom
                    reusable hooks for features such as like useIstope, useSticky etc. All hooks exist inside this
                    folder
                  </li>

                  <li>
                    <code className="folder bg-pale-primary">src/icons</code> Contains all project icon components
                    inside this folder. If you need to customize any icon component you can find from here.
                  </li>

                  <li>
                    <code className="folder bg-pale-primary">src/plugins</code> Inside this folder are some custom
                    libraries for using this template.
                  </li>

                  <li>
                    <code className="folder bg-pale-primary">src/utils</code> It contains all utility functions inside
                    this folder. In this template we used some utility all function exist here
                  </li>
                </ul>
              </li>

              <li>
                <code className="file bg-pale-primary">package.json</code> Includes the list of dependencies to install
                from npm.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper py-16">
        <h2 className="mb-5">Installation</h2>

        <div className="card">
          <div className="card-body">
            <ol className="mb-0">
              <li>
                Install{' '}
                <a href="https://nodejs.org/en/" className="external" target="_blank" rel="noreferrer">
                  Node.js
                </a>{' '}
                if you don’t have it yet.
              </li>

              <li>
                Unzip the template package and in the root project folder <code className="folder">sandbox</code>, go to
                your command line and run <kbd className="terminal">npm install</kbd>. This will install the npm
                packages listed in the <code className="file">package.json</code> file.
              </li>

              <li>
                Run <kbd className="terminal">npm run dev</kbd> command.
              </li>

              <li>You should now have the project files set up and all the npm packages installed.</li>
            </ol>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default Documentation;
