import React from "react";

// Components
import { Icon } from "../Icon";

// Styles
import { ContainerPrimary, ContainerTransparent } from "./Button.style";

export const ButtonPrimary = ({ text, icon, color, onClick }) => (
  <ContainerPrimary color={color} onClick={onClick}>
    {icon && (
      <Icon icon={icon} style={{ marginRight: text ? "12px" : "0px" }} />
    )}
    {text}
  </ContainerPrimary>
);

export const ButtonTransparent = ({ text, icon, color, onClick }) => (
  <ContainerTransparent color={color} onClick={onClick}>
    {text}
    {icon && <Icon icon={icon} style={{ marginLeft: text ? "12px" : "0px" }} />}
  </ContainerTransparent>
);
