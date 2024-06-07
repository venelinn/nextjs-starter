import { getPages, getContentItems, getSiteConfig, getNavigationLinks } from "../../utils/content";
import localization from "../../utils/localization";
import Layout from "../../components/Layout";

export default function PortfolioItemPage({ pageLocale, portfolioItem, siteConfig, navigationLinks }) {
	console.log(portfolioItem)
	return (
    <Layout
			siteConfig={siteConfig}
			navigationLinks={navigationLinks}
			page={{
				title: portfolioItem.title,
				locale: pageLocale,
			}}>
      <div>
        <h1>{portfolioItem.title}</h1>
      </div>
    </Layout>
  );
}

export async function getStaticPaths({ locales }) {
  const paths = [];

  for (const locale of locales) {
    const portfolioItems = await getContentItems("portfolio", locale);
    const localePaths = portfolioItems.map(item => {
      const slug = item.slug.split('/').filter(Boolean).join('/'); // Ensure slug is a string
      return {
        params: { slug }, // Pass slug as a string
        locale,
      };
    });
    paths.push(...localePaths);
  }

  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const pageLocale = locale || localization.defaultLocale;
  const slug = params.slug; // params.slug should be a string directly

  const [siteConfig, allPages, portfolioItems] = await Promise.all([
    getSiteConfig(pageLocale),
    getPages(pageLocale),
    getContentItems("portfolio", pageLocale),
  ]);

  const navigationLinks = await getNavigationLinks(allPages, pageLocale);

  if (slug) {
    const portfolioItem = portfolioItems.find(item => item.slug === slug);
    if (!portfolioItem) {
      return { notFound: true };
    }
    return {
      props: {
        portfolioItem,
        siteConfig,
				pageLocale,
        navigationLinks,
      },
      revalidate: 60,
    };
  }

  return {
    notFound: true,
  };
}
