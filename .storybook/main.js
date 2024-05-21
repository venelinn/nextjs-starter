/** @type { import('@storybook/nextjs').StorybookConfig } */
import path from "path";
import dotenv from "dotenv";
import webpack from "webpack";
dotenv.config();
const config = {
  stories: [
		'../components/**/*.mdx',
		'../components/**/*.stories.@(js|jsx|ts|tsx)'
	],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
		options: {
      nextConfigPath: path.resolve(__dirname, "../next.config.js")
    }
  },
  docs: {
    autodocs: "tag",
  },
	webpackFinal: async storybookWebpackConfig => {
    const plugins = storybookWebpackConfig.plugins || [];
    const newConfig = {
      ...storybookWebpackConfig,
      plugins: [...plugins, new webpack.DefinePlugin({
        'process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME': JSON.stringify(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME)
      })]
    };
    return newConfig;
  }
};
export default config;
