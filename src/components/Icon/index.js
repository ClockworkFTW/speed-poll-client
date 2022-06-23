import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Create library
library.add(fas, far, fab);

export const Icon = ({ icon, style }) => (
  <FontAwesomeIcon icon={icon} style={style} />
);
