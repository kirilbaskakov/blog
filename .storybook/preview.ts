import type { Preview } from '@storybook/react';
import withI18next from './withI18next';
import '../src/app/[locale]/globals.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export const decorators = [withI18next];

export default preview;
