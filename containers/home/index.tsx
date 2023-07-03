import Movies from '@/mocks/movies.json'
import { FeaturedMovie } from '@/components/featurd-movie'
import Categories from '@/components/categories'
import Genres from '@/mocks/genres.json'
import { MoviesSection } from '@/components/movies-section'


export default function HomeContainer({ selectedCategory }:any) {
   console.log("AHAHHAHAHAHA", selectedCategory)
   return (
      <div>
         <FeaturedMovie movie={Movies.results[0]} ></FeaturedMovie>
         
         <Categories categories={Genres.genres.slice(0, 5)}></Categories>
         
         {selectedCategory.movies.length > 0 &&  (
         <MoviesSection 
         title={
            Genres.genres.find(genre => genre.id.toString() === selectedCategory.id)?.name

      } 
         movies={selectedCategory.movies}></MoviesSection>
         ) }

         <MoviesSection 
         title="Popular Fılms" 
         movies={Movies.results.slice(1, 7)}></MoviesSection>
         
         <MoviesSection 
         title="Your Favorıtes" 
         movies={Movies.results.slice(7, 10)}></MoviesSection>
      </div>
   )
}