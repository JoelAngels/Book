import { fetchResults } from "@/lib/fetchResults";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  searchParams: SearchParams;
};

export type SearchParams = {
  url: URL;
  group_adults: string;
  group_children: string;
  no_rooms: string;
  checkin: string;
  checkout: string;
};

// Distructure props to get the searchParams
async function SearchPage({ searchParams }: Props) {
  // if their is no search url, return not found
  if (!searchParams.url) return notFound;

  const results = await fetchResults(searchParams);

  //   if (!results) return <div>Search Page</div>;
  return <div>Search Page</div>;
}

export default SearchPage;
