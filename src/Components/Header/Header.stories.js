import React from 'react';

import HeaderComponent from "./HeaderComponent";


export default {
  title: 'Components/Header',
  component: HeaderComponent,
};

const Template = (args) => <HeaderComponent {...args} />;

// SAMPLE FOR POROPS COMPONENT
export const TEST = Template.bind({});
TEST.args = {
  text: "hello"
};
