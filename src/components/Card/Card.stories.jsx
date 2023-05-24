import { Card } from './Card'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Cards',
  component: Card,
  argTypes: {
    variant: {
      type: 'string',
      options: ['light', 'dark'],
      control: {
        type: 'radio',
      },
    },
  },
}

const Template = (arg) => <Card {...arg} />

export const Cards = Template.bind({})

Cards.args = {
  variant: 'light',
}
