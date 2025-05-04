/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      persistLocalState: false,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;