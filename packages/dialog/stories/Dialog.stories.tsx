import { Button } from '@retail-ui/button'
import * as React from 'react'

import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogProps,
} from '../src'

const meta = {
  title: 'Retail-UI/Dialog',
  component: Dialog,
}

export default meta

const Template = (args: DialogProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <React.Fragment>
      <Button onClick={() => setIsOpen(!isOpen)}>Open dialog</Button>
      <Dialog
        data-testid={meta.title}
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={() => {}}
      >
        <DialogHeader>Basic: Dialog Title</DialogHeader>
        <DialogBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          eius fugiat illum repudiandae commodi inventore magnam unde vero
          cupiditate molestiae?
        </DialogBody>
        <DialogFooter />
      </Dialog>
    </React.Fragment>
  )
}

export const Simple = Template.bind({})
// @ts-ignore
Simple.args = {}
