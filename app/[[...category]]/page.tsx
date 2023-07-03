"use client"
import HomeContainer from "@/containers/home"
import Movies from '@/mocks/movies.json'

export default function Home({params}:any) {
  let selectedCategory;

  if (params.category && params.category.length > 0) {
    selectedCategory = true;
  }
  
  console.log("BURASIIII" ,params)
  console.log(params.category)  
  return (
  <HomeContainer
  selectedCategory = {{
    id: params.category?.[0] ?? "",
    movies : selectedCategory ? Movies.results.slice(0,7) : [],
  }}
  ></HomeContainer>
  )
}
