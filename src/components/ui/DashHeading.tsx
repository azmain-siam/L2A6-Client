import { ReactNode } from "react";

const DashHeading = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-2xl font-medium mb-5">{children}</h1>;
};

export default DashHeading;
