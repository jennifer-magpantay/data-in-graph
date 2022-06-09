import { Caption } from "./Caption";

interface Props {
  children: React.ReactNode;
  legend?: string;
}

export const GraphContainer = ({ children, legend }: Props) => {
  return (
    <div className="graph--container">
      {children}
      <Caption>{legend}</Caption>
      <Caption>Data for 2022 is partial and updated until 04/2022</Caption>
    </div>
  );
};
