import { FeaturedMovie } from "@/components/featurd-movie";
import React from "react";

function MovieContainer({ movie }:any) {
  console.log("JJJJJJJJ",movie)
  return <FeaturedMovie movie={movie} isCompact={false} />;
}

export { MovieContainer };