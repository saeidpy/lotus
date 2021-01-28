import React from 'react';

import GridContentComponent from "./GridContentComponent";


export default {
  title: 'Components/GridContent',
  component: GridContentComponent,
};

const Template = (args) => <GridContentComponent {...args} />;

// SAMPLE FOR POROPS COMPONENT
export const TEST = Template.bind({});
TEST.args = {
  text: "hello"
};
