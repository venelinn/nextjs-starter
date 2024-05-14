import { Hero } from "./Hero/Hero";
import { ImageContentConnector } from "./ImageContent";
import { SliderConnector } from "./Slider";
import { GridConnector } from "./Grid";
import { CareersConnector } from "./Careers";
import { ContactsConnector } from "./Contacts";
import { GenericConnector } from "./Generic";
import { ArticleConnector } from "./Article";

// Map components which are dynamically resolved by content type in the CMS
export const componentMap = {
  hero: Hero,
	slider: SliderConnector,
	generic: GenericConnector,
	sliderItem: ArticleConnector,
	ImageContent: ImageContentConnector,
	grid: GridConnector,
};
