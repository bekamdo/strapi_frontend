import React, { FC } from "react";
import Card from "../Card/Card";
import useFetch from "./../../hooks/useFetch";
import IDataItem from "./../FeaturedProducts/FeaturedProducts";
import { Alert, CircularProgress } from "@mui/material";

interface ListProps {
  catId: number;
  maxPrice: number;
  sort: string;
  subCats: string[];
}

const List: FC<ListProps> = ({ catId, maxPrice, sort, subCats }) => {
  const { data, loading, error } = useFetch<IDataItem[]>(
    `/products?populate=*&[filters][categories][id]=${catId}
    ${subCats.map((item) => `&[filters][sub_categories][id][$eq]=${item}`)}
    &[filters][price][$lte]=${maxPrice}&sort=price:${sort}`.replace(/,/g, "")
  );

  return (
    <div className="flex  justify-center md:flex-wrap">
      <div className="flex min-w-[300px] flex-wrap justify-center gap-0   md:flex-row  md:gap-12 ">
        {error ? (
          <Alert severity="error">Something went wrong</Alert>
        ) : loading ? (
          <CircularProgress />
        ) : (
          data?.map((item) => <Card {...item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default List;
