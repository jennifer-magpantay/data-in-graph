import { Footer } from "./Footer";
import { Intro } from "./Intro";

interface Props {
  children: React.ReactNode;
}

export const Main = ({ children }: Props) => {
  return (
    <main className="main">
      <div className="main--header">
        <h1 className="title">
          Child Labor : Statistics and Information Dashboard of Labor Inspection
          in Brazil
        </h1>
      </div>

      <div className="main--body">
        <Intro />
        <div className="main--content">{children}</div>
        <Footer />
      </div>
    </main>
  );
};
