import { FC } from 'react';
import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
// -------- markups -------- //
import {
  inputMarkup,
  checkMarkup,
  radioMarkup,
  selectMarkup,
  disabledMarkup,
  textareaMarkup
} from 'markups/elements/from-elements';
// -------- data -------- //
const quickAccess = [
  { title: 'Input', url: 'snippet-1' },
  { title: 'Textarea', url: 'snippet-2' },
  { title: 'Checks', url: 'snippet-3' },
  { title: 'Radios', url: 'snippet-4' },
  { title: 'Disabled', url: 'snippet-5' },
  { title: 'Select', url: 'snippet-6' }
];

const FormElements: FC = () => {
  return (
    <DocLayout
      pageTitle="Form Elements"
      quickAccssLinks={quickAccess}
      description={
        <>
          Some examples for form control styles. For more detailed examples and guidelines please visit
          <a
            href="https://getbootstrap.com/docs/5.2/forms/overview/"
            className="hover more"
            rel="noreferrer"
            target="_blank"
          >
            Bootstrap docs
          </a>
        </>
      }
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Input</h2>
        <div className="card">
          <div className="card-body">
            <div className="form-floating">
              <input id="textInputExample" type="text" className="form-control" placeholder="Text Input" />
              <label htmlFor="textInputExample">Text Input</label>
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
                <CodeHighlight language="jsx">{inputMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Textarea</h2>
        <div className="card">
          <div className="card-body">
            <div className="form-floating">
              <textarea
                required
                id="textareaExample"
                placeholder="Textarea"
                className="form-control"
                style={{ height: 150 }}
              />
              <label htmlFor="textareaExample">Textarea</label>
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
                <CodeHighlight language="jsx">{textareaMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper pt-16">
        <h2 className="mb-5">Checks</h2>
        <div className="card">
          <div className="card-body">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Default checkbox
              </label>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="flexCheckChecked" defaultChecked />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Checked checkbox
              </label>
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
                <CodeHighlight language="jsx">{checkMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper pt-16">
        <h2 className="mb-5">Radios</h2>
        <div className="card">
          <div className="card-body">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Default radio
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Default checked radio
              </label>
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
                <CodeHighlight language="jsx">{radioMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 5 ========== */}
      <section id="snippet-5" className="wrapper pt-16">
        <h2 className="mb-5">Disabled</h2>
        <div className="card">
          <div className="card-body">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="flexCheckDisabled" disabled />
              <label className="form-check-label" htmlFor="flexCheckDisabled">
                Disabled checkbox
              </label>
            </div>

            <div className="form-check">
              <input
                disabled
                type="radio"
                id="flexRadioDisabled"
                name="flexRadioDisabled"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="flexRadioDisabled">
                Disabled radio
              </label>
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
                <CodeHighlight language="jsx">{disabledMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 6 ========== */}
      <section id="snippet-6" className="wrapper py-16">
        <h2 className="mb-5">Select</h2>
        <div className="card">
          <div className="card-body">
            <div className="form-select-wrapper">
              <select className="form-select" aria-label="Default select example">
                <option defaultChecked>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
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
                <CodeHighlight language="jsx">{selectMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default FormElements;
