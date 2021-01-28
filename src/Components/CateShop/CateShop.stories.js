import React from 'react';

import CateShopComponent from "./CateShopComponent";


export default {
  title: 'Components/CateShop',
  component: CateShopComponent,
};

const Template = (args) => <CateShopComponent {...args} />;

// SAMPLE FOR POROPS COMPONENT
export const TEST = Template.bind({});
TEST.args = {
  text: "hello"
};
