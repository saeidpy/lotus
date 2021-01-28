import React from 'react';

import BackgroundLinerDivComponent from "./BackgroundLinerDivComponent";


export default {
  title: 'Components/BackgroundLinerDiv',
  component: BackgroundLinerDivComponent,
};

const Template = (args) => <BackgroundLinerDivComponent {...args} />;

// SAMPLE FOR POROPS COMPONENT
export const TEST = Template.bind({});
TEST.args = {
  text: "hello"
};
