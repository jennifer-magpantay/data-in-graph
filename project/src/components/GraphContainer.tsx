interface Props {
  children: React.ReactNode;
  legend?: string;
}

export const GraphContainer = ({ children, legend }: Props) => {
  return (
    <div className="graph--container">
      {children}
      <p className="caption">{legend}</p>
      <p className="caption">
        Data for 2022 is partial and updated until 04/2022
      </p>
    </div>
  );
};
