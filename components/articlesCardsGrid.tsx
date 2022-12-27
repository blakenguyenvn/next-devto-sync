import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import { ArticleCard } from './articleCard';
import { articlesData } from 'config/articles'

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

export function ArticlesCardsGrid() {
  const { classes } = useStyles();

  const cards = articlesData.map((article) => (
    <ArticleCard 
      key={article.id}
      image={article.image}
      category={article.category}
      title={article.title}
      footer={article.footer}
      author={article.author} 
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