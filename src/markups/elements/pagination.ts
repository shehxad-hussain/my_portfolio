const defaultMarkup = `import Pagination from 'components/reuseable/Pagination';

<Pagination className="justify-content-start" />
`;

const alternativeMarkup = `import Pagination from 'components/reuseable/Pagination';

<Pagination className="justify-content-start" altStyle />
`;

const breadcrumbMarkup = `import Breadcrumb from 'components/reuseable/Breadcrumb';

<Breadcrumb data={[{ id: 1, title: 'Home', url: '#' }]} />

<Breadcrumb
  data={[{ id: 1, title: 'Home', url: '#' }, { id: 2, title: 'Library', url: '#' }]}
/>

<Breadcrumb
  className="mb-0"
  data={[
    { id: 1, title: 'Home', url: '#' },
    { id: 2, title: 'Library', url: '#' },
    { id: 3, title: 'Data', url: '#' }
  ]}
/>
`;

export { defaultMarkup, alternativeMarkup, breadcrumbMarkup };
