import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from '@mantine/core';
import { Inter } from '@next/font/google';
import { HeaderMiddle } from 'components/headerMiddle';
import { FooterSocial } from 'components/footerSocial';
import { HeroBullets } from 'components/heroBullets';
import { UserCardImage } from 'components/userCardImage';
import { IntroductionImages } from 'components/introductionImages';
import { ProjectsCardsGrid } from 'components/projectsCardsGrid';
import { DefaultHead } from 'components/Head';
import { headersConfig, profile, introductionData } from 'config/information';
import { usePost } from '../../swr/hooks';
import { markdownToHtml } from '../../utils/markdown';

import styles from '../../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;
  const { post } = usePost(pid);
  console.log(post);
  return (
    <>
      <DefaultHead pageTitle={`SimflexCloud`} />
      <main className={styles.main}>
        <HeaderMiddle links={headersConfig.links} />
        <Link href={post?.url || ''}>
          <Text weight={700} mt="xs">
            {`Original Post`}
          </Text>
        </Link>
        <div className={'crayons-layout crayons-layout--3-cols crayons-layout--article'}>
          <aside></aside>
          <div id="main-content" className={`main-content`}>
            <div className={`article-wrapper`}>
              <article className={`crayons-card crayons-article mb-4`}>
                <div className={`crayons-article__main`} dangerouslySetInnerHTML={{ __html: post?.body_html }} />
              </article>
            </div>
          </div>
          <aside></aside>
        </div>
        <FooterSocial />
      </main>
    </>
  )
}
