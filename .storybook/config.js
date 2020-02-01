import { addDecorator } from '@storybook/react'
import { withBackgrounds } from '@storybook/addon-backgrounds'
import { configure } from '@storybook/react'
import 'reset-css'
import '../src/styles/_fonts.scss'

/**
 * Storybook configuration overrides for Gatsby compatibility.
 * See https://www.gatsbyjs.org/docs/visual-testing-with-storybook/.
 */

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module)
// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ''
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname)
}

addDecorator(
  withBackgrounds([
    { name: 'tbx-accent', value: '#fd5765', default: true },
    { name: 'tbx-purple', value: '#231749' },
    { name: 'white', value: '#FFF' },
  ])
)
