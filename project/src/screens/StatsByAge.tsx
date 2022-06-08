import { useEffect, useState } from "react";

// data
import { minorsFoundByAgeAndGender } from "../data/minorsFoundByAgeAndGender";

// helpers
import { addId } from "../helpers/addId";
import { groupData } from "../helpers/groupData";

export function StatsByAge() {
  const [groupByAge, setGroupByAge] = useState<[]>([]);

  // once component is loaded, set status
  useEffect(() => {
    const data = groupData(
      minorsFoundByAgeAndGender,
      "idade",
      "quantidade",
      "idade"
    );
    // add an ID
    const dataWithId = addId(data);

    // set state
    setGroupByAge(dataWithId);
  }, []);

  return <div className="container-flex">{/* displey into bar graph */}</div>;
}
