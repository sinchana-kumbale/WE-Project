import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import BackButton from '../components/BackButton'

export default function ThankYou({ navigation, route}) {
  const {name} = route.params
  return (
    <Background>
    <BackButton goBack = {navigation.goBack} />
      <Logo />
      <Header>Thank you for choosing us!</Header>
      <Paragraph>
        You have Choosen : { name }
      </Paragraph>
      <Paragraph>
        Hope you enjoy your ride!
      </Paragraph>
    </Background>
  )
}
