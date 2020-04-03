import { DogsStateType } from "./types";

interface SelectorsType {
  dogs: DogsStateType;
}

const getError = ({ dogs }: SelectorsType): string => dogs.error;
const getImageUrl = ({ dogs }: SelectorsType): string => dogs.imageUrl;
const getIsFetching = ({ dogs }: SelectorsType): boolean => dogs.isFetching;

export { getError, getImageUrl, getIsFetching };
