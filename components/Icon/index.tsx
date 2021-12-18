import React from "react";
import * as eva from "eva-icons";

export const Icon = ({ icon }) => {
  React.useEffect(() => {
    eva.replace();
  });
  return <i data-eva={icon} />;
};
