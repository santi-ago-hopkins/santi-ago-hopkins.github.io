import React from 'react';
import Image from '../components/Image';
import Prose from '../components/Prose';
import config from '../../site.config';
import { pageTitle } from '../title';

const Project = ({ title, company, description, image, imageAlt }) => (
  <div className="project-entry">
    <h2 className="project-title">{title}</h2>
    {company && <p className="project-company">{company}</p>}
    <div className="project-description">
      <Prose text={description} />
    </div>
    {image && (
      <div className="project-image">
        <Image src={image} alt={imageAlt || title} />
      </div>
    )}
  </div>
);

export default function Projects() {
  return (
    <div className="container">
      {config.projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </div>
  );
}

export const Head = () => <title>{pageTitle('/projects')}</title>;
