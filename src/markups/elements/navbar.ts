const markup1 = `import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar language button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />} />
`;

const markup2 = `import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar
  language
  logoAlt="logo-light"
  navClassName="navbar navbar-expand-lg center-nav transparent navbar-dark"
  button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />}
/>
`;

const markup3 = `import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar
  language
  navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light"
  button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />}
/>
`;

const markup4 = `import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar
  language
  logoAlt="logo-light"
  navClassName="navbar navbar-expand-lg center-nav navbar-dark navbar-bg-dark"
  button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />}
/>
`;

const markup5 = `import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar
  fancy
  language
  logoAlt="logo-purple"
  navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none"
  button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />}
/>
`;

const markup6 = `import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar
  info
  navOtherClass="navbar-other ms-lg-4"
  navClassName="navbar navbar-expand-lg classic transparent navbar-light"
  button={
    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-signin" className="btn btn-sm btn-primary rounded-pill">
      Sign In
    </a>
  }
/>
`;

const markup7 = `import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar
  info
  logoAlt="logo-light"
  navOtherClass="navbar-other ms-lg-4"
  navClassName="navbar navbar-expand-lg classic transparent navbar-dark"
  button={
    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-signin" className="btn btn-sm btn-white rounded-pill">
      Sign In
    </a>
  }
/>
`;

const markup8 = `import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar
  info
  navOtherClass="navbar-other ms-lg-4"
  navClassName="navbar navbar-expand-lg classic navbar-light navbar-bg-light"
  button={
    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-signin" className="btn btn-sm btn-primary rounded-pill">
      Sign In
    </a>
  }
/>
`;

const markup9 = `import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar
  info
  logoAlt="logo-light"
  navOtherClass="navbar-other ms-lg-4"
  navClassName="navbar navbar-expand-lg classic navbar-dark navbar-bg-dark"
  button={
    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-signin" className="btn btn-sm btn-primary rounded-pill">
      Sign In
    </a>
  }
/>
`;

const markup10 = `import { Navbar } from 'components/blocks/navbar';
import NextLink from 'components/reuseable/links/NextLink';

<Navbar
  info
  fancy
  navOtherClass="navbar-other ms-lg-4"
  navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light"
  button={
    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-signin" className="btn btn-sm btn-primary rounded-pill">
      Sign In
    </a>
  }
/>
`;

const markup11 = `import { Navbar3 } from 'components/blocks/navbar';

<Navbar3 logoAlt="logo-purple" navClassName="navbar navbar-expand-lg center-logo transparent navbar-light" />
`;

const markup12 = `import { Navbar3 } from 'components/blocks/navbar';

<Navbar3 logoAlt="logo-light" navClassName="navbar navbar-expand-lg center-logo transparent navbar-dark" />
`;

const markup13 = `import { Navbar3 } from 'components/blocks/navbar';

<Navbar3 logoAlt="logo-dark" navClassName="navbar navbar-expand-lg center-logo navbar-light navbar-bg-light" />
`;

const markup14 = `import { Navbar3 } from 'components/blocks/navbar';

<Navbar3 logoAlt="logo-light" navClassName="navbar navbar-expand-lg center-logo navbar-dark navbar-bg-dark" />
`;

const markup15 = `import { Navbar2 } from 'components/blocks/navbar';

<Navbar2 />
`;

const markup16 = `import { Navbar4 } from 'components/blocks/navbar';

<Navbar4 />
`;

export {
  markup1,
  markup2,
  markup3,
  markup4,
  markup5,
  markup6,
  markup7,
  markup8,
  markup9,
  markup10,
  markup11,
  markup12,
  markup13,
  markup14,
  markup15,
  markup16
};
