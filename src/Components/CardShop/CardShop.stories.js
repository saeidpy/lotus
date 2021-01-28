import React from 'react';

import CardShopComponent from "./CardShopComponent";


export default {
  title: 'Components/CardShop',
  component: CardShopComponent,
};

const Template = (args) => <CardShopComponent {...args} />;

// SAMPLE FOR POROPS COMPONENT
export const TEST = Template.bind({});
TEST.args = {
  text: "hello"
};
