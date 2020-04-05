import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import Button from ".";

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs],
};

export const Default = () => (
  <Button
    children={text("Text", "Button Text")}
    disabled={boolean("Disabled", false)}
    onClick={action("onClick")}
  />
);
