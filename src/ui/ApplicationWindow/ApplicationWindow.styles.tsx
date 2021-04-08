import { css } from '@emotion/react'
import colors from '../../styles/colors.styles'
import mixins from '../../styles/mixins.styles'
import { modalRootZindex } from '../ModalRoot/ModalRoot.styles'

const applicationWindowStyles = {
  applicationWindow: (isFocused: boolean) => css`
    ${mixins.standardBorderAlt};
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: fit-content;
    width: fit-content;
    background-color: ${colors.baseGray};
    display: flex;
    flex-direction: column;
    ${isFocused
      ? css`
          z-index: ${modalRootZindex + 1};
        `
      : ''};
  `,
  // TODO the font is pretty bad here
  applicationWindowHeader: (isFocused: boolean) => css`
    padding: 2px 3px;
    background-color: ${isFocused ? colors.darkBlue : colors.darkGray};
    display: flex;
    align-items: center;

    > span {
      font-size: 13px;
      color: ${isFocused ? colors.white : colors.baseGray};
      margin-left: 3px;
    }

    > button:first-of-type {
      margin-left: auto;
      padding: 2px;
    }
  `,
  applicationWindowContents: css`
    width: 600px;
    height: 400px;
  `,
}

export default applicationWindowStyles
