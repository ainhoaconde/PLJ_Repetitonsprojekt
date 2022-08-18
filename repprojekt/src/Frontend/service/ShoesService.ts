import { defaultAxiosInstance } from "../../Api";

type Movie = {
  shoesId: string;
  movieName: string;
  movieGenre: string;
  moviePrice: number;
};
export default async function getMovie() {
  console.log(defaultAxiosInstance.get("movies/"), "ksjhdsdgfs");
  const data = await defaultAxiosInstance.get("movies/").catch((error) =>{throw error})
  console.log("after fetch");
  console.log(data);
  return data["data"];
}