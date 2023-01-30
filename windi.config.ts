import { defineConfig } from '@windicss/plugin-utils'
import commonTheme from '../common/commonTheme'
import commonShortcuts from '../common/commonShortcuts'
import merge from 'lodash/merge'

export default defineConfig({
  theme: {
    extend: merge(commonTheme, {
      // * Write other config
    }),
  },
  plugins: [require('@windicss/plugin-scrollbar')],
  /**
   * Write windi classes in html attributes.
   * @see https://windicss.org/features/attributify.html
   */
  attributify: true,
  shortcuts: merge(commonShortcuts, {
    // * Write other config
  }),
})
