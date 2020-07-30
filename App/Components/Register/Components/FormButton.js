import React from 'react'
import { Button } from 'react-native-elements'

const FormButton = ({ title, buttonType, buttonColor, ...rest }) => (
  <Button
    {...rest}
    type={buttonType}
    title={title}
    buttonStyle={{ backgroundColor: buttonColor, borderRadius: 20 }}
    titleStyle={{ color: 'white' }}
  />
)

export default FormButton
