import { css } from '@emotion/react'
import colors from '../../styles/colors.styles'
import mixins from '../../styles/mixins.styles'

const menuBarEntryStyles = {
  menuBarEntry: css`
    background-color: ${colors.baseGray};
    margin: 3px 0 3px 6px;
    padding: 2px;

    :hover {
      ${mixins.thinBorder}
    }

    :active {
      ${mixins.thinBorderInverted}
    }
  `,
}

export default menuBarEntryStyles