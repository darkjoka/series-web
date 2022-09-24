import Link from "next/link";
import { SearchCardProps } from "../../shared/constants/types";
import { Wrapper } from "./style";

export const SearchCard = ({ title, permalink }: SearchCardProps) => {
  return (
    <Link href={`/detail/${permalink}`} passHref>
      <Wrapper>{title}</Wrapper>
    </Link>
  );
};
