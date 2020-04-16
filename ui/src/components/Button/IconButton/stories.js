import * as React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs";
import * as iconOptions from "@fortawesome/free-solid-svg-icons";
import Button from ".";

export default {
  title: "Components/Button/With Icon",
  component: Button,
  decorators: [withKnobs],
};

export const Default = () => (
  <Button
    text={text("Text", "Button Text")}
    icon={select("Icon", iconOptions, iconOptions.faHandPointUp)}
    disabled={boolean("Disabled", false)}
    onClick={action("onClick")}
  />
);
