import React from "react";

// Components
import { Icon } from "../Icon";

// Styles
import { ContainerPrimary, ContainerTransparent } from "./Button.style";

export const ButtonPrimary = ({ text, icon, color, onClick, style }) => (
  <ContainerPrimary color={color} onClick={onClick} style={style}>
    {icon && (
      <Icon icon={icon} style={{ marginRight: text ? "12px" : "0px" }} />
    )}
    {text}
  </ContainerPrimary>
);

export const ButtonTransparent = ({ style, text, icon, color, onClick }) => (
  <ContainerTransparent color={color} onClick={onClick} style={style}>
    {text}
    {icon && <Icon icon={icon} style={{ marginLeft: text ? "12px" : "0px" }} />}
  </ContainerTransparent>
);
