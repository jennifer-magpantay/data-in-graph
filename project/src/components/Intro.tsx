export const Intro = () => {
  return (
    <div className="intro">
      <p>
        This section of the Statistical Information Panel of the Labor
        Inspection in Brazil
        <a href="https://sit.trabalho.gov.br/radar/" target="_blank">
          (Radar SIT)
        </a>
        presents data related to inspection actions carried out by the Labor Tax
        Audit in which Child Labor was found.
      </p>
      <p>Child labor, for the purposes of the data presented here, is:</p>
      <ul className="list-disc">
        <li className="ml-5">
          work performed by children and adolescents under 16 years of age,
          except in the condition of apprentices from 14 years of age;
        </li>
        <li className="ml-5">
          work performed by adolescents aged 16 and 17 in activities or
          conditions prohibited by law.
        </li>
      </ul>
    </div>
  );
};
