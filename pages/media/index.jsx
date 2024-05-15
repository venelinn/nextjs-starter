import { createClient } from "contentful";
import { getPages, getSiteConfig, getNavigationLinks } from "../../utils/content";
import localization from "../../utils/localization";
import { normalizeSlug } from "../../utils/common";
import { getRCLMessages } from "../../utils/rclUtils";
import { componentMap } from "../../components";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import ListItem from "../../components/Article";

export async function getStaticProps({ locale }) {
	const pageLocale = locale || localization.defaultLocale;

	const newsClient = createClient({
		space: process.env.CONTENTFUL_CORPORATENEWS_SPACE_ID,
		accessToken: process.env.CONTENTFUL_CORPORATENEWS_ACCESS_TOKEN,
		environment: process.env.CONTENTFUL_CORPORATENEWS_ENVIRONMENT || "master",
	});
	const res = await newsClient.getEntries({
		content_type: "newsContainer",
		"fields.brands.sys.id[in]": process.env.CONTENTFUL_CORPORATENEWS_SWG_ID,
		locale: localization.getContentfulLocale(pageLocale),
	});

	const [siteConfig, allPages] = await Promise.all([getSiteConfig(pageLocale), getPages(pageLocale)]);
	const page = allPages.find((e) => normalizeSlug(e.slug) === "/media" && e.locale === pageLocale);

	if (!page) {
		console.warn("Did not find page for: /media", "locale:", locale);
		return { notFound: true };
	}

	const navigationLinks = getNavigationLinks(allPages, pageLocale);

	//RCL
	const rclMessages = await getRCLMessages(locale);

	return {
		props: {
			page,
			siteConfig,
			navigationLinks,
			news: res.items,
			rclMessages,
		},
		revalidate: 1,
	};
}

export default function News({ news, page, siteConfig, navigationLinks, rclMessages }) {
	const pageHeading = {
		heading: page?.pageName,
		as: "h1",
		size: "h1",
	};

	return (
		<Layout
			page={page}
			siteConfig={siteConfig}
			navigationLinks={navigationLinks}
			rclMessages={rclMessages}
			>
			{!!page.sections?.length &&
				page.sections.map((section) => {
					const Component = componentMap[section.type];
					if (!Component) {
						return null;
					}
					return <Component key={section.id} {...section} pageName={page?.pageName} />;
				})}
			<Section heading={pageHeading}>
				{news.map((media) => (
					<ListItem key={media.sys.id} locale={page.locale} media={media} />
				))}
			</Section>
		</Layout>
	);
}
