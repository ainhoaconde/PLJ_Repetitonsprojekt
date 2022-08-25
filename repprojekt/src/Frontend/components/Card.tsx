
import React, { Component, useEffect, useState } from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/joy/Badge'
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import getShoe from '../service/ShoesService';
import Typography from "@mui/material/Typography/Typography";

type Shoe = {
  shoesId: string;
  price: number;
  name: string;
  brand: string;
  color: string;
  size: string;
};

export default function ShoesCard() {
  const [shoeN, setShoeName] = useState<Shoe[]>([]);
  useEffect(() => {
    getShoe()
      .then((response) => setShoeName(response))
      .catch((error) => console.log(error));
  }, []);
  
  const imageStyle = {
    height: "16vw",
    width: "90%",
  };
  const cardStyle = {
    backgroundColor: '#C6E2FF',
    display: "flex",
    height: "35vw",
    width: "20vw",
  };
  const [count, setCount] = React.useState(0);

  return (
    
    <div>
       {shoeN.map((shoe: Shoe) => {
         return (
          <div style={{float:'left'}}>
    <Card style={cardStyle}>
        
      <AspectRatio style={imageStyle}>
        <img
          src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/9b34192e-3fc7-428b-a986-51497ba15a72/air-max-plus-damenschuh-RdTmzW.png"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
      </Box>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <FavoriteBorderIcon />
      </IconButton>

      <Box sx={{ display: 'flex' }}>
        <div>
        <p>Name: {shoe.name}</p>
        <p>Price: {shoe.price} CHF</p>
        <p>Brand: {shoe.brand}</p>
        <p>Color: {shoe.color}</p>
        <p>Size:{shoe.size} </p>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          
        </Button>
      </Box>
      <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
    >
      <Badge badgeContent={count}>
      <Typography fontSize="xl">🛒</Typography>
      </Badge>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          pt: 4,
          borderTop: '1px solid',
          borderColor: 'background.level1',
        }}
      >
        <IconButton
          size="sm"
          variant="outlined"
          onClick={() => setCount((c) => c - 1)}
        >
          <Remove />
        </IconButton>
        <IconButton
          size="sm"
          variant="outlined"
          onClick={() => setCount((c) => c + 1)}
        >
          <Add />
        </IconButton>
      </Box>
    </Box>
    </Card>
      </div>
      );
    })}
    </div>
  );
} 