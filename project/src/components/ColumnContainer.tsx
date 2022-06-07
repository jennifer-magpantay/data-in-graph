interface Props {
  children: React.ReactNode;
  width: string;
  style?: string;
}

export const ColumnContainer = ({ children, width, style }: Props) => {
  return <div className={`${width} ${style}`}>{children}</div>;
};
