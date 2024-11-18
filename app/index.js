import { Redirect } from "expo-router";
import { useEffect } from "react";
import dataHandler from "@dataHandler";

export default function IndexScreen() {
  useEffect(() => {
    dataHandler.loadData;
  }, []);
  return <Redirect href="/home" />;
}
