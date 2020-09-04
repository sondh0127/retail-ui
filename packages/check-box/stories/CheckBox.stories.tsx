import { Meta, Story } from '@storybook/react/types-6-0'
import * as React from 'react'

import { CheckBox, CheckBoxProps } from '../src'

const meta: Meta = {
  title: 'Retail-UI/CheckBox',
  component: CheckBox,
}

export default meta

const Template: Story<CheckBoxProps> = (args) => (
  <CheckBox
    data-testid={meta.title}
    isChecked={true}
    {...args}
    onChange={() => {}}
  />
)

export const Simple = Template.bind({})

Simple.args = {}
