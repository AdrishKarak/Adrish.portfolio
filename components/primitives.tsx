import { ReactNode } from "react";
export const Hatch = () => <div aria-hidden className="hatch"/>;
export const SectionTitle = ({children}:{children:ReactNode}) => <><div className="full-line"/><h2 className="section-title">{children}</h2><div className="full-line"/></>;
