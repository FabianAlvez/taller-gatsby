import Typography from 'typography'

import './global.scss'

const headerFontFamily = [
  `Futura PT`,
  `-apple-system`,
  `BlinkMacSystemFont`,
  `Segoe UI`,
  `Roboto`,
  `Oxygen`,
  `Ubuntu`,
  `Cantarell`,
  `Fira Sans`,
  `Droid Sans`,
  `Helvetica Neue`,
  `Arial`,
  `sans-serif`,
]

const _options = {
  headerFontFamily,
  bodyFontFamily: [`Spectral`, `Georgia`, `Times New Roman`, `Times`, `serif`],
  monospaceFontFamily: [
    `SFMono-Regular`,
    `Menlo`,
    `Monaco`,
    `Consolas`,
    `Liberation Mono`,
    `Courier New`,
    `monospace`,
  ],
  systemFontFamily: [
    `-apple-system`,
    `BlinkMacSystemFont`,
    `Segoe UI`,
    `Roboto`,
    `Oxygen`,
    `Ubuntu`,
    `Cantarell`,
    `Fira Sans`,
    `Droid Sans`,
    `Helvetica Neue`,
    `Arial`,
    `sans-serif`,
  ],
}

const typography = new Typography(_options)

export const { scale, rhythm, options } = typography
export default typography
