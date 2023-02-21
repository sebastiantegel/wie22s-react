import axios from "axios";
import { IProduct } from "../models/IProduct";
import { IProductSmall } from "../models/IProductSmall";

export const getProducts = async (): Promise<IProductSmall[]> => {
  let response = await axios.get<IProductSmall[]>(
    "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
  );

  return response.data;
};

export const getProductById = async (id: number) => {
  let response = await axios.get<IProduct>(
    "https://medieinstitutet-wie-products.azurewebsites.net/api/products/" + id
  );

  return response.data;
};
