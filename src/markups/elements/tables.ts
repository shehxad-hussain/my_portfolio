const simpleMarkup = `<table className="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">First</th>
    <th scope="col">Last</th>
    <th scope="col">Handle</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
  <tr>
    <th scope="row">2</th>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
  </tr>
  <tr>
    <th scope="row">3</th>
    <td colSpan={2}>Larry the Bird</td>
    <td>@twitter</td>
  </tr>
</tbody>
</table>
`;

const simpleDarkMarkup = `<table className="table table-dark">
...
</table>
`;

const stripedMarkup = `<table className="table table-striped">
...
</table>
`;

const borderedMarkup = `<table className="table table-bordered">
...
</table>
`;

const borderlessMarkup = `<table className="table table-borderless">
...
</table>
`;

const hoverableMarkup = `<table className="table table-hover">
...
</table>
`;

const responsiveMarkup = `<table className="table table-responsive">
...
</table>
`;

export {
  simpleMarkup,
  stripedMarkup,
  borderedMarkup,
  hoverableMarkup,
  simpleDarkMarkup,
  borderlessMarkup,
  responsiveMarkup
};
