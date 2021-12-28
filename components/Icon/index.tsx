import React from "react";
import * as eva from "eva-icons";

import useStore from "../../store/useStore";

export const Icon = ({ icon }) => {
  const theme = useStore((state) => state.theme);

  React.useEffect(() => {
    eva.replace();
  });
  return <i data-eva={icon} data-eva-fill={theme.primaryText} />;
};
