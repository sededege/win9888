import React from 'react'
import './StartButton.scss'
import logo from '../../../static/icons/w98-icon.png'
import Button from '../../Button/Button'
import Icon from '../../Icon/Icon'

const StartButton: React.FC = () => {
  return (
    <Button className="StartButton">
      <Icon src={logo} alt="Windows 98 Icon" />
      <span className="StartButtonText">Start</span>
    </Button>
  )
}

export default StartButton
