import { createClient } from "contentful";
import { getPages, getSiteConfig, getNavigationLinks } from "@/utils/content";
import localization from "@/utils/localization";
import { getRCLMessages } from "@/utils/rclUtils";
import Skeleton from "@/components/Skeleton";
import Layout from "@/components/Layout";
import { ArticleConnector } from "@/components/Article";

const client = createClient({
	space: process.env.CONTENTFUL_CORPORATENEWS_SPACE_ID,
	accessToken: process.env.CONTENTFUL_CORPORATENEWS_ACCESS_TOKEN,
	environment: process.env.CONTENTFUL_CORPORATENEWS_ENVIRONMENT || "master",
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: "newsContainer",
		"fields.brands.sys.id[in]": process.env.CONTENTFUL_CORPORATENEWS_SWG_ID,
	});

	const paths = res.items.map((item) => {
		return {
			params: { slug: item.fields.slug },
			locale: item.sys.locale.split("-")[0],
		};
	});
	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps = async ({ params, locale }) => {
	const pageLocale = locale || localization.defaultLocale;

	const { items } = await client.getEntries({
		content_type: "newsContainer",
		"fields.slug": params.slug,
		locale: localization.getContentfulLocale(pageLocale),
	});

	const [siteConfig, allPages] = await Promise.all([getSiteConfig(pageLocale), getPages(pageLocale)]);
	const navigationLinks = getNavigationLinks(allPages, pageLocale);
	//RCL
	const rclMessages = await getRCLMessages(locale);

	if (!items.length) {
		return {
			redirect: {
				destination: pageLocale === "fr" ? "/fr/media" : "/media",
				permanent: false,
			},
		};
	}

	return {
		props: {
			siteConfig,
			navigationLinks,
			pageLocale,
			rclMessages,
			media: items[0],
		},
		revalidate: 1,
	};
};

export default function NewsItem({ pageLocale, siteConfig, navigationLinks, media, rclMessages }) {
	if (!media) return <Skeleton />;

	const { body, subjectTitle, postDate } = media.fields;
	const pageHeading = {
		heading: subjectTitle,
		as: "h1",
		size: "h1",
	};
	return (
		<Layout
			page={{
				title: subjectTitle,
				metaData: {
					pageTitle: subjectTitle,
				},
				locale: pageLocale,
			}}
			siteConfig={siteConfig}
			navigationLinks={navigationLinks}
			rclMessages={rclMessages}
		>
			<ArticleConnector body={body} date={postDate} title={pageHeading} locale={pageLocale} />
		</Layout>
	);
}
