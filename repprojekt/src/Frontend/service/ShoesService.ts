import { defaultAxiosInstance } from "../../Api";

type Shoe = {
  shoesId: string;
  price: number;
  name: string;
  brand: string;
  color: string;
  size: string;
};
export default async function getShoe() {
   const data = await defaultAxiosInstance.get("shoes/", {auth:{username:'ainhoa', password:'Ronaldo'}}).catch((error) =>{throw error})
  console.log("after fetch");
  console.log(data);
  return data["data"];
}