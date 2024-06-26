import React from 'react';
import ProjectPreview from './../components/ProjectPreview';

const projects = [
  {
    image: "./post_images/hatvp-rag-assistant-capture.gif", 
    title: "HATVP RAG Assistant",
    description: "An assistant to help discover french representative data using RAG to prevent hallucinations",
    link: "https://hatvp-rag.thefrenchartist.dev/"
  },
  {
    image: "./post_images/dataviz_homepage.webp", 
    title: "HATVP DATAVIZ",
    description: "A website to see plots about french representative data to act on open data possibilities",
    link: "https://hatvp-dataviz.thefrenchartist.dev/"
  },
    {
    image: "./project_placeholder.webp", 
    title: "New project coming soon!",
    description: "If you click you'll go back home.",
    link: ""
  }
];

const Projects = () => {
  return (
    <div className="container mx-auto p-4">
    <div className="mb-8" >
      <h1 className="text-6xl font-bold text-center mb-4">Live projects</h1>
      <p className="text-center mb-4"> All projects shown below are accessible <b>right now!</b> </p>
    </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectPreview
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
