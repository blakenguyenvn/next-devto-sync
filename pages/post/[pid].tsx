import { useRouter } from 'next/router';
import Link from 'next/link';
import { Text, Image } from '@mantine/core';
import { Inter } from '@next/font/google';
import { HeaderMiddle } from 'components/headerMiddle';
import { FooterSocial } from 'components/footerSocial';
import { HeroBullets } from 'components/heroBullets';
import { UserCardImage } from 'components/userCardImage';
import { IntroductionImages } from 'components/introductionImages';
import { ProjectsCardsGrid } from 'components/projectsCardsGrid';
import { DefaultHead } from 'components/head';
import { Tags } from 'components/tags';
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
        <div className={`crayons-article__main`}>
          <div className={`crayons-article__body text-styles spec__body`}>
            <div className={'crayons-layout'}>
              <div id="main-content" className={`main-content`}>
                <div className={`article-wrapper`}>
                  <article className={`crayons-card crayons-article mb-4`}>
                  <header className={"crayons-article__header"} id="main-title">
                    <div className={"crayons-article__cover"}>
                      <Image src={post?.cover_image} width={1000} height={420} />
                    </div>
                    <div className={"crayons-article__header__meta"}>
                      <div className={"flex s:items-start flex-col s:flex-row"}>
                        <div
                          id="action-space"
                          className={"crayons-article__actions mb-4 s:mb-0 s:order-last"}
                        ></div>
                      </div>

                      <h1
                        className={"fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-2 longer"}
                      >
                        {post?.title}
                      </h1>

                      <div className={"spec__tags flex flex-wrap"}>
                        <Tags tags={post?.tags || []} />
                      </div>
                    </div>

                  </header>
                    <div className={`crayons-article__main`} dangerouslySetInnerHTML={{ __html: post?.body_html }} />
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterSocial />
      </main>
    </>
  )
}
