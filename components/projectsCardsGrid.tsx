import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import { ProjectCard } from './projectCard';
import { projectsData } from '../config/projects'

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export function ProjectsCardsGrid() {
  const { classes } = useStyles();

  const cards = projectsData.map((project) => (
    <ProjectCard 
      key={project.id}
      title={project.title}
      image={project.image}
      country={project.country}
      description={project.description}
      badges={project.badges}
    />
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}