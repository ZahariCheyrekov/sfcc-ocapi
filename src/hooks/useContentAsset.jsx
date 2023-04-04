import { useEffect, useState } from "react";

import { getContentAsset } from "../services/ocapi-service";

const useContentAsset = (cid) => {
  const [contentAsset, setContentAsset] = useState(null);

  useEffect(() => {
    const fetchAsset = async () => {
      const asset = await getContentAsset(cid);
      setContentAsset(asset);
    };
    fetchAsset();
  }, [cid]);

  return { contentAsset };
};

export default useContentAsset;
