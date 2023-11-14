import { NextPage } from 'next';
import useClipboard from 'hooks/useClipboard';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';

const FAQ: NextPage = () => {
  // copy button for code copy
  useClipboard();

  return (
    <DocLayout pageTitle="FAQ" description="Find answers to some frequently asked questions here.">
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper py-16">
        <h2 className="mb-3">Frequently Asked Questions</h2>
        <p className="lead mb-5">
          If you don't see an answer to your question here, please feel free to contact us with the links below:
        </p>
        <a
          href="https://support.ui-lib.com"
          className="btn btn-primary rounded-pill me-2"
          target="_blank"
          rel="noreferrer"
        >
          Contact Form
        </a>

        <a
          href="https://themeforest.net/item/sandbox-modern-multipurpose-react-template/40486293/comments"
          className="btn btn-soft-primary rounded-pill"
          target="_blank"
          rel="noreferrer"
        >
          Discussions Page
        </a>

        <div className="accordion accordion-wrapper mt-10" id="accordion">
          <div className="card accordion-item">
            <div className="card-header" id="faq-2">
              <button
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapse-2"
                aria-expanded="false"
                aria-controls="faq-collapse-2"
              >
                How can I remove unwanted package or library?
              </button>
            </div>

            <div id="faq-collapse-2" className="accordion-collapse collapse" aria-labelledby="faq-2">
              <div className="card-body">
                <p>
                  All third-party plugin JS files are located in{' '}
                  <kbd className="terminal">npm uninstall package-name</kbd>
                </p>
              </div>
            </div>
          </div>

          <div className="card accordion-item">
            <div className="card-header" id="faq-6">
              <button
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapse-6"
                aria-expanded="false"
                aria-controls="faq-collapse-6"
              >
                How can I remove unwanted CSS?
              </button>
            </div>

            <div id="faq-collapse-6" className="accordion-collapse collapse" aria-labelledby="faq-6">
              <div className="card-body">
                <p>
                  Bootstrap SCSS imports are located in <code className="file">src/assets/scss/_bootstrap.scss</code>{' '}
                  and theme SCSS imports are in <code className="file">src/assets/scss/theme/_theme.scss</code>. Remove
                  or comment any unwanted code.
                </p>
              </div>
            </div>
          </div>

          <div className="card accordion-item">
            <div className="card-header" id="faq-3">
              <button
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapse-3"
                aria-expanded="false"
                aria-controls="faq-collapse-3"
              >
                Does Sandbox support RTL?
              </button>
            </div>

            <div id="faq-collapse-3" className="accordion-collapse collapse" aria-labelledby="faq-3">
              <div className="card-body">
                <p>
                  No, not currently. Although with the use of{' '}
                  <a
                    href="https://rtlcss.com/learn/usage-guide/install/"
                    target="_blank"
                    className="external"
                    rel="noreferrer"
                  >
                    RTLCSS
                  </a>{' '}
                  project you can generate RTL version of <code className="file">style.css</code>, however some template
                  specific styles won’t have support for RTL out of the box.
                </p>
              </div>
            </div>
          </div>

          <div className="card accordion-item">
            <div className="card-header" id="faq-8">
              <button
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapse-8"
                aria-expanded="false"
                aria-controls="faq-collapse-8"
              >
                Why am I getting an error while installing to Wordpress?
              </button>
            </div>

            <div id="faq-collapse-8" className="accordion-collapse collapse" aria-labelledby="faq-8">
              <div className="card-body">
                <p>Sandbox is an nextjs template, not a Wordpress theme. So it cannot be installed in Wordpress.</p>
              </div>
            </div>
          </div>

          <div className="card accordion-item">
            <div className="card-header" id="faq-9">
              <button
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapse-9"
                aria-expanded="false"
                aria-controls="faq-collapse-9"
              >
                Why the image mask doesn't work on my copy of the item?
              </button>
            </div>

            <div id="faq-collapse-9" className="accordion-collapse collapse" aria-labelledby="faq-9">
              <div className="card-body">
                <p>
                  There is a known browsers-spesific issue regarding image-mask that prevents them from working on local
                  environments. (Running from a filesystem is now restricted, so you can no longer reference one file
                  from another.) If you upload the template on a working server image masks should work properly.
                </p>
              </div>
            </div>
          </div>

          <div className="card accordion-item">
            <div className="card-header" id="faq-11">
              <button
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapse-11"
                aria-expanded="true"
                aria-controls="faq-collapse-11"
              >
                How to add a link to dropdown parent?
              </button>
            </div>

            <div id="faq-collapse-11" className="accordion-collapse collapse" aria-labelledby="faq-11">
              <div className="card-body">
                <p>Use the code below to add link to dropdown parent:</p>
              </div>

              <div className="code-wrapper">
                <button type="button" className="btn btn-sm btn-white rounded-pill btn-clipboard">
                  Copy
                </button>

                <div className="code-wrapper-inner overflow-hidden">
                  <CodeHighlight language="html">
                    {`<li className="nav-item dropdown dropdown-mega parent-link">
    <a className="nav-link" href="PARENT LINK">
      Dropdown
    </a>
    <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
      <span className="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul className="dropdown-menu mega-menu"> ... </ul>
</li>`}
                  </CodeHighlight>
                </div>
              </div>
            </div>
          </div>

          <div className="card accordion-item">
            <div className="card-header" id="faq-12">
              <button
                className="collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapse-12"
                aria-expanded="true"
                aria-controls="faq-collapse-12"
              >
                {' '}
                What font is used on the Sandbox logo?{' '}
              </button>
            </div>

            <div id="faq-collapse-12" className="accordion-collapse collapse" aria-labelledby="faq-12">
              <div className="card-body">
                <p>
                  The font used in the Sandbox logo is{' '}
                  <a
                    className="external my-0"
                    href="https://fonts.google.com/specimen/Manrope"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Manrope
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default FAQ;
