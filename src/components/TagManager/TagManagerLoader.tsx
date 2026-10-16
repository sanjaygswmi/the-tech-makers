"use client";

import { useEffect } from "react";
import TagManager from "react-gtm-module";

const TagManagerLoader = () => {
    useEffect(() => {
        TagManager.initialize({ gtmId: "GTM-TVXH3WT" });
    }, []);

    return null;
};

export default TagManagerLoader;
