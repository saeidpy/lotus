import React from 'react';

import SearchComponent from "./SearchComponent";


export default {
  title: 'Components/Search',
  component: SearchComponent,
};

const Template = (args) => <SearchComponent {...args} />;

// SAMPLE FOR POROPS COMPONENT
export const TEST = Template.bind({});
TEST.args = {
  text: "hello"
};
