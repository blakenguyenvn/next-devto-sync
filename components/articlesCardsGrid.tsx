import { useState, useEffect } from 'react';
import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import { usePosts } from '../swr/hooks';
import { ArticleCard } from './articleCard';
import { articlesData } from '../config/articles';

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
  const { posts } = usePosts();

  const cards = posts?.map((post) => (
    <ArticleCard 
      key={post.id}
      pid={post.id}
      image={post.cover_image || post.social_image}
      category={post.category}
      title={post.title}
      footer={post.tags}
      author={{
        name: post.user?.name,
        description: post.user?.website_url,
        image: post.user?.profile_image
      }} 
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