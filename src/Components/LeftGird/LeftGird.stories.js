import React from 'react';

import LeftGirdComponent from "./LeftGirdComponent";


export default {
  title: 'Components/LeftGird',
  component: LeftGirdComponent,
};

const Template = (args) => <LeftGirdComponent {...args} />;

// SAMPLE FOR POROPS COMPONENT
export const TEST = Template.bind({});
TEST.args = {
  text: "hello"
};
