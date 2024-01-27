import React from 'react'
import { Card, Text } from '@ui-kitten/components';

const ServicesCard = (props) => {
  return (
    <Card>
      <Text>{props.type}</Text>

  </Card>
  )
}

export default ServicesCard