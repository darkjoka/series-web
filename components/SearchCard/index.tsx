import { SearchCardProps } from "../../shared/constants/types";
import { Wrapper } from "./style";

export const SearchCard = ({ title, permalink }: SearchCardProps) => {
  return <Wrapper>{title}</Wrapper>;
};
