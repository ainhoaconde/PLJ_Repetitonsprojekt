import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "../../Api";

type Shoe = {
  shoesId: string;
  price: number;
  name: string;
  brand: string;
  color: string;
  size: string;
};
export default async function getShoe1() {
   const data = await defaultAxiosInstance.get("shoes/", {auth:{username:'ainhoa', password:'Ronaldo'}}).catch((error) =>{throw error})
  console.log("after fetch");
  console.log(data);
  return data["data"];
}


const ShoesService = (api: AxiosInstance = defaultAxiosInstance) => ({
  getShoeById: async (id: string) => {
      const data = await api.get(`/shoes/${id}`);
      return data['data'];
  },
  getAllShoes: async () => {
      const data = await api.get<Shoe[]>(`/shoes`);
      return data['data'];
  },
 /* createShoes: async (params: addShoeRequest) => {
    const res = await defaultAxiosInstance.post("/shoes", params);
    if (res && res.status === 200) {
   
    }
  },*/
  removeShoe: async (id: string) => {
    const res = await api.delete(`/shoes/${id}`)
    if (res && res.status === 200) {

    }
  },
  updateShoe:async (params: Shoe) => {
    const res = await defaultAxiosInstance.put(`/shoes/${params.shoesId}`, params);
    if(res && res.status === 200) {
     
  }
}});