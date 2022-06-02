interface Props {
  title: string;
  content: number | string;
}

export const Card = ({ title, content }: Props) => {
  return (
    <div className="card">
      <p className="card--title">{title}</p>
      <p className="card--content">{content}</p>
    </div>
  );
};
