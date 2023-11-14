const inputMarkup = `<div className="form-floating">
  <input id="textInputExample" type="text" className="form-control" placeholder="Text Input" />
  <label htmlFor="textInputExample">Text Input</label>
</div>
`;

const textareaMarkup = `<div className="form-floating">
  <textarea
    required
    id="textareaExample"
    placeholder="Textarea"
    className="form-control"
    style={{ height: 150 }}
  />
  <label htmlFor="textareaExample">Textarea</label>
</div>
`;

const checkMarkup = `<div className="form-check">
  <input className="form-check-input" type="checkbox" id="flexCheck" />
  <label className="form-check-label" htmlFor="flexCheck">
    Default checkbox
  </label>
</div>
`;

const radioMarkup = `<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label className="form-check-label" htmlFor="flexRadioDefault1">Default radio</label>
</div>
`;

const disabledMarkup = `<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled />
  <label className="form-check-label" htmlFor="flexCheckDisabled">Disabled checkbox</label>
</div>

<div className="form-check">
  <input disabled type="radio" id="flexRadioDisabled" name="flexRadioDisabled" className="form-check-input" />
  <label className="form-check-label" htmlFor="flexRadioDisabled">Disabled radio</label>
</div>
`;

const selectMarkup = `<div className="form-select-wrapper">
  <select className="form-select" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
`;

export { inputMarkup, textareaMarkup, checkMarkup, radioMarkup, disabledMarkup, selectMarkup };
