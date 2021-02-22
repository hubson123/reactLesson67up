import { useContext } from "react";
import { StoreContext } from "./StoreProvider";

export function useCommentsStore() {
  const rootStore = useContext(StoreContext);
  if (!rootStore) {
    throw new Error(
      "Nie znaleziono root, sprawdz czy masz Provider który go dostarcza."
    );
  }
  return rootStore.commentsStore;
}
