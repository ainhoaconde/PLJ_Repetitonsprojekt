import { Button, Card } from "@mui/material";
import React, { Component, useEffect, useState } from "react";
import getShoe from "../service/ShoesService";

type Shoe = {
    shoesId: string;
    price: number;
    name: string;
    brand: string;
    color: string;
    size: string;
  };
export default function ShoeCard() {
  const [shoeN, setShoeName] = useState<Shoe[]>([]);
  useEffect(() => {
    getShoe()
      .then((response) => setShoeName(response))
      .catch((error) => console.log(error));
  }, []);

  const imageStyle = {
    height: "15vw",
    width: "50%",
  };
  const cardStyle = {
    backgroundColor: '#C6E2FF',
    display: "block",
    height: "30vw",
    width: "30vw",
  };

  return (
    <div>
      {shoeN.map((shoe: Shoe) => {
        return (
          <div>
            <Card style={cardStyle}>
              <img
                src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/9b34192e-3fc7-428b-a986-51497ba15a72/air-max-plus-damenschuh-RdTmzW.png"
                alt=""
                style={imageStyle}
              />
              <p>Name: {shoe.name}</p>
              <p>Price: {shoe.price} CHF</p>
              <p>Brand: {shoe.brand}</p>
              <p>Color:{shoe.color}</p>
              <p>Size:{shoe.size} </p>
           
            </Card>
          </div>
        );
      })}
    </div>
  );
}