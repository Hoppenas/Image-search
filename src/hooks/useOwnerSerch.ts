import { useState, useEffect } from "react";
import { ownerUrl } from "../utils";
import { TOwnerResponse } from "../types";

const useOwnerSearch = (ownerId: string): TOwnerResponse => {
  const [error, setError] = useState(false);
  const [owner, setOwner] = useState("");

  useEffect(() => {
    setError(false);

    if (ownerId) {
      fetch(ownerUrl(ownerId))
        .then((response) => response.json())
        .then((data) => {
          setOwner(data.person.realname._content);
        })
        .catch((e) => setError(e.message));
    }
  }, [ownerId]);
  return { error, owner };
};

export default useOwnerSearch;
