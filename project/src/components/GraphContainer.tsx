interface Props {
  children: React.ReactNode;
  legend?: string;
}

export const GraphContainer = ({ children, legend }: Props) => {
  return (
    <div className="graph--container">
      {children}
      <p className="caption">{legend}</p>
    </div>
  );
};
