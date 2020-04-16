import * as React from "react";
import Button from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import css from "@emotion/css/macro";

const IconButton = ({
  onClick = () => {},
  icon = faHandPointUp,
  disabled = false,
  text = "",
}: {
  onClick?: Function;
  icon: IconProp;
  disabled?: boolean;
  text?: string;
}) => (
  <Button disabled={disabled} onClick={() => onClick()} text={text}>
    <FontAwesomeIcon
      icon={icon}
      size="2x"
      css={css`
        "&::before": {
          content: " fatone ";
        }
      `}
    />
  </Button>
);

export default IconButton;
