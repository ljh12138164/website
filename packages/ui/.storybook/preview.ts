import type { Preview } from "@storybook/nextjs";
import "../src/styles/globals.css";
import { withI18n } from "storybook-addon-i18n";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    i18n: {
      defaultLocale: "zh-CN",
      locales: ["zh-CN", "en-US"],
    },
    locale: "zh-CN",
  },
  tags: ["autodocs"],
  decorators: [withI18n],
};

export default preview;

