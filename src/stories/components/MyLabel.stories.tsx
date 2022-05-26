import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from "../../components/MyLabel";

export default {

  // storyRoot/group
  title: 'UI/MyLabel',

  // Reference to component
  component: MyLabel,

  // Type of controls
  argTypes: {
     size: { control: 'select' },
    color: { control: 'select' },
  }
} as ComponentMeta<typeof MyLabel>

// Generate template
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

// Group variants
export const Basic = Template.bind({});
Basic.args ={
  size: 'normal',
  allCaps: false
}

export const AllCaps = Template.bind({});
AllCaps.args ={
  size: 'normal',
  allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'normal',
  color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'normal',
  color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: 'h1',
  fontColor: '#5517ac'
}