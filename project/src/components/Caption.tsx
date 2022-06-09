interface Props {
  children: React.ReactNode;
}

export function Caption({ children }: Props) {
  return <p className="caption">{children}</p>;
}
