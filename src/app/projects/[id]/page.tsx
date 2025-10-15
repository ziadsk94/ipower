import { notFound } from 'next/navigation';
import ProjectDetail from '@/app/components/ProjectDetail';
import Footer from '@/app/components/Footer';
import { getProjectById, getRelatedProjects } from '@/app/data/projects';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id);
  
  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(params.id);

  return (
    <>
      <ProjectDetail project={project} relatedProjects={relatedProjects} />
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const { projects } = await import('@/app/data/projects');
  
  return projects.map((project) => ({
    id: project.id,
  }));
}
