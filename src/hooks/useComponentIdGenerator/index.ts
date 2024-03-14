import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useComponentIdGenerator = () => {
  const [componentId, setComponentId] = useState<string>('');

  useEffect(() => {
    if (!componentId) {
      const newId = uuidv4();
      setComponentId(newId);
    }
  }, [componentId]);

  const memoizedComponentId = useMemo(() => {
    // if (componentId) {
    //   console.log("exist", componentId);
    //   return componentId;
    // } else {
    //   const newId = uuidv4();
    //   console.log("newId", newId);
    //   return newId;
    // }
    return componentId;
  }, [componentId]);

  return memoizedComponentId;
};

export default useComponentIdGenerator;
