import { SearchCardProps } from "../../shared/constants/types";
import { Wrapper } from "./style";

export const SearchCard: React.FC<SearchCardProps> = ({ title, permalink }) => {
  return <Wrapper>{title}</Wrapper>;
};
