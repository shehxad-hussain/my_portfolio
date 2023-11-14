import Link from 'next/link';
import { FC, Fragment } from 'react';
// -------- data -------- //
const data = [
  { id: 1, url: '#', title: 'About Me', subtitle: 'Read Details', image: '/img/photos/f1.jpg' },
  { id: 2, url: '#', title: 'Destinations', subtitle: 'See Destinations', image: '/img/photos/f2.jpg' },
  { id: 3, url: '#', title: 'Instagram', subtitle: 'Follow Me', image: '/img/photos/f3.jpg' }
];

const About26: FC = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-12 col-xl-10 col-xxl-8 mx-auto text-center">
          <h2 className="display-5 text-center mt-4 mb-10">
            Hello! I'm Caitlyn. Welcome to my blog. Here on this blog you will be able to find travel diary with
            traveling tips.
          </h2>
        </div>
      </div>

      <div className="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 text-center">
        {data.map(({ id, image, subtitle, title, url }) => (
          <div className="col-md-6 col-lg-4 mx-auto" key={id}>
            <div className="card shadow-lg">
              <figure className="card-img-top overlay overlay-1">
                <Link href={url}>
                  <a>
                    <img className="img-fluid" src={image} alt={title} />
                    <span className="bg" />
                  </a>
                </Link>

                <figcaption>
                  <h5 className="from-top mb-0">{subtitle}</h5>
                </figcaption>
              </figure>

              <div className="card-body p-5">
                <h4 className="mb-0">{title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default About26;
