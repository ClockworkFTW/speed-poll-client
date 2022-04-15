import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(far, fab);

const Icon = ({ icon, style }) => <FontAwesomeIcon icon={icon} style={style} />;

export default Icon;
