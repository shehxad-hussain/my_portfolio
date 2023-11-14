import { FC } from 'react';
import Image from 'next/image';
import NextLink from '../links/NextLink';

// ==============================================================================
type ProjectCard1Props = {
  link: string;
  title: string;
  category: string;
  description: string;
  images: { width: number; height: number; url: string; tooltip?: string; full: string }[];
};
// ==============================================================================

const ProjectCard1: FC<ProjectCard1Props> = (props) => {
  const { link, title, category, description, images } = props;

  return (
    <div className="project grid grid-view">
      <div className="row g-6 isotope">
        <div className="item col-md-6">
          <div className="project-details d-flex justify-content-center flex-column">
            <div className="post-header">
              <div className="post-category text-red mb-3">{category}</div>
              <h2 className="post-title mb-3">{title}</h2>
            </div>

            <div className="post-content">
              <p>{description}</p>
              <NextLink title="See Project" href={link} className="more hover link-red" />
            </div>
          </div>
        </div>

        {images.map(({ url, height, width, tooltip, full }, i) => (
          <div className="item col-md-6" key={url + i}>
            <figure className="itooltip itooltip-light hover-scale rounded" title={tooltip}>
              <a href={full} data-glightbox={`title: ${tooltip}`} data-gallery="project-2">
                <Image alt={title} src={url} layout="responsive" width={width} height={height} />
              </a>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard1;
