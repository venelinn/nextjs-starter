import React from "react";
import { Slider } from "./Slider";

export default {
  title: "Components/Slider",
  component: Slider,
};

export const SliderStory = {
	render: args => <Slider {...args} />,
	args: {
		items: "images",
		heading: "sample",
		subHeading: "sample"
	},
	argTypes: {
		heading: {
			options: ["none", "sample"],
			mapping: {
				none: null,
				sample: {
					"id":"XazqVUFBXz2LqkcTjuCnI",
					"type":"heading",
					"locale":"en",
					"title":"Media updates",
					"heading":"Media updates",
					"as":"h2",
					"size":"h2"
				}
			},
			control: {
				type: "radio",
			},
		},
		subHeading: {
			options: ["none", "sample"],
			mapping: {
				none: null,
				sample: "Team"
			},
			control: {
				type: "radio",
			},
		},
		items: {
			options: ["images", "blog", "testimonial"],
			mapping: {
				images: [
					{
							"id":"uiamRyRWHLt5ndPOCGke0",
							"type":"sliderItem",
							"locale":"en",
							"title":"The Hunter family in Toronto, establishes Sunwing Vacations.",
							"heading":{
								"id":"13JPhN9dtva7yPytxJAyR4",
								"title":"The Hunter family in Toronto, establishes Sunwing Vacations.",
								"heading":"The Hunter family in Toronto, establishes Sunwing Vacations.",
								"as":"h3",
								"size":"h3"
							},
							"date":"2002-08-15T00:00+03:00",
							"image":[
								{
										"id":"sunwing_vacations_group/hunter",
										"type":"image",
										"src":"https://res.cloudinary.com/dtnwfag6s/image/upload/f_auto/q_auto/v1692636320/sunwing_vacations_group/hunter.png",
										"alt":"",
										"locale":0,
										"width":620,
										"height":444
								}
							],
							"content":"This setting allows you to set a default value for this field, which will be automatically inserted to new content entries. It can help editors avoid content entry altogether, or just give them a helpful prompt for how to structure their content.",
							"variant":"images"
					},
					{
							"id":"uiamRyRWHLt5ndPOCGke0",
							"type":"sliderItem",
							"locale":"en",
							"title":"The Hunter family in Toronto, establishes Sunwing Vacations.",
							"heading":{
								"id":"13JPhN9dtva7yPytxJAyR4",
								"type":"heading",
								"locale":"en",
								"title":"The Hunter family in Toronto, establishes Sunwing Vacations.",
								"heading":"The Hunter family in Toronto, establishes Sunwing Vacations.",
								"as":"h3",
								"size":"h3"
							},
							"date":"2002-08-15T00:00+03:00",
							"image":[
								{
										"id":"sunwing_vacations_group/hunter",
										"type":"image",
										"src":"https://res.cloudinary.com/dtnwfag6s/image/upload/f_auto/q_auto/v1692636320/sunwing_vacations_group/hunter.png",
										"alt":"",
										"locale":0,
										"width":620,
										"height":444
								}
							],
							"content":"This setting allows you to set a default value for this field, which will be automatically inserted to new content entries. It can help editors avoid content entry altogether, or just give them a helpful prompt for how to structure their content.",
							"variant":"images"
					},
					{
							"id":"uiamRyRWHLt5ndPOCGke0",
							"type":"sliderItem",
							"locale":"en",
							"title":"The Hunter family in Toronto, establishes Sunwing Vacations.",
							"heading":{
								"id":"13JPhN9dtva7yPytxJAyR4",
								"type":"heading",
								"locale":"en",
								"title":"The Hunter family in Toronto, establishes Sunwing Vacations.",
								"heading":"The Hunter family in Toronto, establishes Sunwing Vacations.",
								"as":"h3",
								"size":"h3"
							},
							"date":"2002-08-15T00:00+03:00",
							"image":[
								{
										"id":"sunwing_vacations_group/hunter",
										"type":"image",
										"src":"https://res.cloudinary.com/dtnwfag6s/image/upload/f_auto/q_auto/v1692636320/sunwing_vacations_group/hunter.png",
										"alt":"",
										"locale":0,
										"width":620,
										"height":444
								}
							],
							"content":"This setting allows you to set a default value for this field, which will be automatically inserted to new content entries. It can help editors avoid content entry altogether, or just give them a helpful prompt for how to structure their content.",
							"variant":"images"
					},
					{
							"id":"uiamRyRWHLt5ndPOCGke0",
							"type":"sliderItem",
							"locale":"en",
							"title":"The Hunter family in Toronto, establishes Sunwing Vacations.",
							"heading":{
								"id":"13JPhN9dtva7yPytxJAyR4",
								"type":"heading",
								"locale":"en",
								"title":"The Hunter family in Toronto, establishes Sunwing Vacations.",
								"heading":"The Hunter family in Toronto, establishes Sunwing Vacations.",
								"as":"h3",
								"size":"h3"
							},
							"date":"2002-08-15T00:00+03:00",
							"image":[
								{
										"id":"sunwing_vacations_group/hunter",
										"type":"image",
										"src":"https://res.cloudinary.com/dtnwfag6s/image/upload/f_auto/q_auto/v1692636320/sunwing_vacations_group/hunter.png",
										"alt":"",
										"locale":0,
										"width":620,
										"height":444
								}
							],
							"content":"This setting allows you to set a default value for this field, which will be automatically inserted to new content entries. It can help editors avoid content entry altogether, or just give them a helpful prompt for how to structure their content.",
							"variant":"images"
					},
					{
							"id":"uiamRyRWHLt5ndPOCGke0",
							"type":"sliderItem",
							"locale":"en",
							"title":"The Hunter family in Toronto, establishes Sunwing Vacations.",
							"heading":{
								"id":"13JPhN9dtva7yPytxJAyR4",
								"type":"heading",
								"locale":"en",
								"title":"The Hunter family in Toronto, establishes Sunwing Vacations.",
								"heading":"The Hunter family in Toronto, establishes Sunwing Vacations.",
								"as":"h3",
								"size":"h3"
							},
							"date":"2002-08-15T00:00+03:00",
							"image":[
								{
										"id":"sunwing_vacations_group/hunter",
										"type":"image",
										"src":"https://res.cloudinary.com/dtnwfag6s/image/upload/f_auto/q_auto/v1692636320/sunwing_vacations_group/hunter.png",
										"alt":"",
										"locale":0,
										"width":620,
										"height":444
								}
							],
							"content":"This setting allows you to set a default value for this field, which will be automatically inserted to new content entries. It can help editors avoid content entry altogether, or just give them a helpful prompt for how to structure their content.",
							"variant":"images"
					},
					{
							"id":"uiamRyRWHLt5ndPOCGke0",
							"type":"sliderItem",
							"locale":"en",
							"title":"The Hunter family in Toronto, establishes Sunwing Vacations.",
							"heading":{
								"id":"13JPhN9dtva7yPytxJAyR4",
								"type":"heading",
								"locale":"en",
								"title":"The Hunter family in Toronto, establishes Sunwing Vacations.",
								"heading":"The Hunter family in Toronto, establishes Sunwing Vacations.",
								"as":"h3",
								"size":"h3"
							},
							"date":"2002-08-15T00:00+03:00",
							"image":[
								{
										"id":"sunwing_vacations_group/hunter",
										"type":"image",
										"src":"https://res.cloudinary.com/dtnwfag6s/image/upload/f_auto/q_auto/v1692636320/sunwing_vacations_group/hunter.png",
										"alt":"",
										"locale":0,
										"width":620,
										"height":444
								}
							],
							"content":"This setting allows you to set a default value for this field, which will be automatically inserted to new content entries. It can help editors avoid content entry altogether, or just give them a helpful prompt for how to structure their content.",
							"variant":"images"
					}
				],
				blog: [
					{
							"id":"58HlCU4uPwKv2vj04xTokk",
							"type":"sliderItem",
							"locale":"en",
							"title":"Slider Item",
							"heading":{
								"id":"1SW2um0yofWNjzcQrBjNql",
								"type":"heading",
								"locale":"en",
								"title":"Image Content",
								"heading":"Image Content",
								"as":"h2",
								"size":"h2"
							},
							"date":"2023-08-17T00:00+03:00",
							"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					},
					{
							"id":"58HlCU4uPwKv2vj04xTokk",
							"type":"sliderItem",
							"locale":"en",
							"title":"Slider Item",
							"heading":{
								"id":"1SW2um0yofWNjzcQrBjNql",
								"type":"heading",
								"locale":"en",
								"title":"Image Content",
								"heading":"Image Content",
								"as":"h2",
								"size":"h2"
							},
							"date":"2023-08-17T00:00+03:00",
							"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					},
					{
							"id":"58HlCU4uPwKv2vj04xTokk",
							"type":"sliderItem",
							"locale":"en",
							"title":"Slider Item",
							"heading":{
								"id":"1SW2um0yofWNjzcQrBjNql",
								"type":"heading",
								"locale":"en",
								"title":"Image Content",
								"heading":"Image Content",
								"as":"h2",
								"size":"h2"
							},
							"date":"2023-08-17T00:00+03:00",
							"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					},
					{
							"id":"58HlCU4uPwKv2vj04xTokk",
							"type":"sliderItem",
							"locale":"en",
							"title":"Slider Item",
							"heading":{
								"id":"1SW2um0yofWNjzcQrBjNql",
								"type":"heading",
								"locale":"en",
								"title":"Image Content",
								"heading":"Image Content",
								"as":"h2",
								"size":"h2"
							},
							"date":"2023-08-17T00:00+03:00",
							"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					},
					{
							"id":"58HlCU4uPwKv2vj04xTokk",
							"type":"sliderItem",
							"locale":"en",
							"title":"Slider Item",
							"heading":{
								"id":"1SW2um0yofWNjzcQrBjNql",
								"type":"heading",
								"locale":"en",
								"title":"Image Content",
								"heading":"Image Content",
								"as":"h2",
								"size":"h2"
							},
							"date":"2023-08-17T00:00+03:00",
							"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					}
				],
				testimonial: [
					{
							"id":"5NeHIQ5RSCsrFTGTR1rmbU",
							"type":"sliderItem",
							"locale":"en",
							"image":[
								{
										"id":"sunwing_vacations_group/testimonial",
										"type":"image",
										"src":"https://res.cloudinary.com/dtnwfag6s/image/upload/f_auto/q_auto/v1692622981/sunwing_vacations_group/testimonial.png",
										"alt":"",
										"locale":0,
										"width":628,
										"height":754
								}
							],
							"content":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliq Ut venenatis tellus in metus. Euismod lacinia at quis risus sed vulputate odio. (200 characters)",
							"name":{
								"id":"5p0fiAns8xccjBvuIPthZJ",
								"type":"name",
								"locale":"en",
								"fullName":"Joe Doe",
								"position":"Senior Product Manager"
							},
							"variant":"testimonial"
					},
					{
							"id":"5NeHIQ5RSCsrFTGTR1rmbU",
							"type":"sliderItem",
							"locale":"en",
							"image":[
								{
										"id":"sunwing_vacations_group/testimonial",
										"type":"image",
										"src":"https://res.cloudinary.com/dtnwfag6s/image/upload/f_auto/q_auto/v1692622981/sunwing_vacations_group/testimonial.png",
										"alt":"",
										"locale":0,
										"width":628,
										"height":754
								}
							],
							"content":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliq Ut venenatis tellus in metus. Euismod lacinia at quis risus sed vulputate odio. (200 characters)",
							"name":{
								"id":"5p0fiAns8xccjBvuIPthZJ",
								"type":"name",
								"locale":"en",
								"fullName":"Joe Doe",
								"position":"Senior Product Manager"
							},
							"variant":"testimonial"
					},
					{
							"id":"5NeHIQ5RSCsrFTGTR1rmbU",
							"type":"sliderItem",
							"locale":"en",
							"image":[
								{
										"id":"sunwing_vacations_group/testimonial",
										"type":"image",
										"src":"https://res.cloudinary.com/dtnwfag6s/image/upload/f_auto/q_auto/v1692622981/sunwing_vacations_group/testimonial.png",
										"alt":"",
										"locale":0,
										"width":628,
										"height":754
								}
							],
							"content":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliq Ut venenatis tellus in metus. Euismod lacinia at quis risus sed vulputate odio. (200 characters)",
							"name":{
								"id":"5p0fiAns8xccjBvuIPthZJ",
								"type":"name",
								"locale":"en",
								"fullName":"Joe Doe",
								"position":"Senior Product Manager"
							},
							"variant":"testimonial"
					}
				],
			},
			control: {
				type: "radio",
			},
		},
		itemsPerView: {
			options: [1, 2, 3, 4],
			control: {
				type: "radio",
			},
		},
  },
};
