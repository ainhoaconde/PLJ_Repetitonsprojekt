
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
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAAClpaUrKyswMDD19fW3t7f5+fnk5OTf39/MzMzu7u78/Pzb29vDw8OxsbHQ0NDW1tYkJCSLi4utra3q6uqTk5Obm5s6Ojq7u7uBgYFXV1dHR0dnZ2eIiIh2dnZfX19OTk5ubm49PT0VFRVKSkodHR0NDQ0TExN8fHwlJSWXl5dra2txOjY8AAALBElEQVR4nO2c2YKiOhCGFQHZZFGUTQW01Xb0/Z/vuCSQhATQBpmeU99Vt2z5TaWqUgmORgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/K1okeNLvuNaQzekF7zVelywX82Gbk/X+IS8J4k7dJu6xAtZfXfioZvVHQFP351/pRu3IoHjsT102zpBEgscj6OhW9cBM0bTnP7XGLp9PycpxOxXrvL4yAsImcuB2/djii6ckGNuWpru+reH/wUSspnSn+tFNy6GaVhnoEg4qfSUImOJ+hDt6g6kQqoeWX5hO/18q7oEqeDFduOfCBkKEuHxDsbooPzpVnUKEsFNXizcic6nW9UltQ7TQUfD3xwxrrWGmNR18ZBotur7vhO5ZuOpOLRXvInnnw8hdqd5L818F/t8KnOu8eQs6UrN2RpO2cgPLW9xHFP8RVN+lTOZPSWxOxVdgA2x7MSpJFduIf8tEUNJKm1DzHeCsRThE5A3sYIj9wb7v2I67Ir0PdlwReIOuz7+q5ktxsN7VHaqV+W4qCaZuBPH6m0MV+2TYDL0aCwSyVpyh3U8eOSejE3TxQOH/j3VW/zR9OBKDylR109SKQhi+j6rgbQ9KCtmeYTioOlF8Zrbs1vP4l1Zkqu4qxWHNN0BS4w4sI2PjGM3PSnjSJBjW8OnVI6fqRGnxMSh9DNyOBRj6IvjTUyVO8TC61aybTvY0x8n5A2UaEMbavYpRQxLshF7p+rYLTXnieTIJstrBifAHoTZQ6+wZd2YU3vQgtpg8ODol+ebwZx7Ttic7naPUvUnGa/U6Z7rBa7KUKKnwrPmGufWPWPwGrLmJZOKU1lmKtiUxVG9PjZ+Pk0Vfd8+b8yYElfkteyZGc/7HmXisk/XGKeT53P3lZadVtyitSZl9JjcEx5Yv7J3+coC934fInImdXOy7sFpSTRaVvvnzC94TpfqNk3C22RyvlnNSue7rNhDbBRqfKJLPzrxxzOCR3/NKt4k45bSnlgWFVkU1iknkYUOhJub77KJQ58M/uhrxxP1afCHaedebWVUyortfzw2n/H2Fkp0ooLw9bk545H9Ui2HyVPGp23j3GcqnehLiDG8e350c1zmgTgl/tRoRM/zyc+MnDXWvVS3VDZlJvcniWw9+vARY0lD/lb70FNhRj6f+LjiE8f7QLDOYrL2yaxkIM/7HNDkYBznnwj/KnpYxWSW8WnMcjz7GnOiYjPx/bRi4+gzTkzwfSmHHfefxWFXyjlkBrz54TFJL5E703VN0zx1x6afW06T785sUhoA3eWXvpNxNH/j120tn58/C0n5o3Um2YWO2xk6lTF8+9xrOgNlMsL45KVVYxWxaV64vw+Kq8WUBk5+n6U4NCou4jMUVVhJpfXV5AaYp5/JbqlfTl17lPqzVRTfOQu5BPriu0lf2mpBG31X93MjOsDML335HGSDjbU+d1U3JHn+peZpj7TUYqtY7b6kV8ELuW1SYc3Z8bbpffPr4VzQqEdh0Nwxt8rt7o0Vl9nahl7NCM7k5Gmdqq9Y13Pt4Fr8P2Mny3NOLexn4JQmtV9o6FQxzeXM9Wbmy6mlcbP1LfacM8lZ6hU3lquddqRHfn0fXiJ6RH5/5OUVw0/aTWdaQS85Hal6ds+g+tDNKl1OYSd7yfqbH1MS8ksXPYAm28H9by1m29GZSF6hrU3o7gDkSFFdSuGuPu5XP97CafPuO5Y5hW8SpYbWbgLNasrBb/Nzp0Pg/cT18BXepgI1KUB0EFz04LhpG3keo49akNIugsr6ZmXUbpqoAa3iflcTFuEGA7VyKkvb4aPGW9YILUNYLp/nqWMsX+5OpHAy0vyKjYTcMWBNGhWeWz3asoP0EMrhJqA9ihXxasolxzBJF4HkG+2+SKzwPu4UhxWZcW6iNwochy0ebFAy5BVl2lOn1ar7OLuIt8JgVELhjWXA9FB1dmo2Pzxr1OdVhzK5ScCo70WSP+eGPIVReLednH5wJTzyQhdNY27Ev8V3JtnezHV2zQt5FGHtxKii8IZOf4MBe4146exJ00xsmrdufKLYC+5rRww1dUmeQnb9qLKQohk1uE1e3WpXMrgjP/yAaSyypm4Vb7tC20BlNsJT6fCx0+0+7KRQzKR0dNOlcUnZWjyFaM1OpJDY73Snw+0+DnHb5CIFKfldUmSVRllTT5WC1fmac0KWzE+oxQpHFukP+CFuWoNAoFLcMixSCjfmNHjSVDkw7S0zRLnxu0Yh/W7hujK8lO1hIouYyBm/hcXXtqU+NhjbPaitpnGaT4nkVV5rFY4sYjmR3UVhNfp0nmkXO1sqe8AUY5E/D83T2mUgBptcJeCUDOsVUpn5nH6s8N3KEo6l4qsywfOm5utTcIPIQaoSmxSOlLy4+kT1You0gzPPxF94p9Ns0tQqY6NR4cgqR8iElNgU98e8Ah4u7XW9ic8ulx7Yr7VZYfmO2m0sEnbXsKl4zF3twbsVOq8ilDvX2BfN2igkdlGsuZ/yOXCSG+RJ20w+XsQsHN+VPtBKIeFvdsSnS0MVE3G7KazepSvMwqfSQ7GdQmJeX8nDXwLdpJcF/MJQaTttqZAwyR9t9kH36Ocd6KJuSC0VYoWNlxfFvu8fFDGxK+3p1dJi+ZxsIlL4p25E2YbreeWGw+T9JmD/21fROecMJTLTb0u4zrNdvJKim3ZPeyUJwQr72mRSRDCiTe8orHKarJPdNpB8x3Z1hdnuRoDXgXrbRoMTLcKVNRc/31Isr7M0Xlwk1Zhpy2WxCIfX8npTiAuBRLLBbmfqhaO8TrJNug3w0/pb/NmwT/BEjeqXubxPrueV70Q3q+50hwKuTBRm2r4o1C8nOd/Eq0ByoptiRRFWCJpBN9ygf8vXlubC2bo8ObYrQHfI981zXdPzIvAjdzbTtdtIbqsZTXlwXoPDeKIp4oKLoiimaS7vaDPXdqRgtdimm3z/p/1uqZ/ydbPrdZ5k1/P2It2N+4ZhuK43Y9DxFFunjPT4tk3cEl7dtVVfupw3eVjzztvHQfVTtKZWvyHqJZR7N9uqtDhvksNann+umxlQWoOe39s7Hpay1PSZZzvBIk532Vr+3IiePGMu+u9j7wbcB7U5MyI/uCzSpM2CxA/whlDIgB4fR46/Ol+TvTw/dmnV2vAKUeGBLJ0qS91zjbtZn69ZcggnP7DrQ71CTUSHW4pQFW8jPsO67y/TNN0zIke6LLbxeZfl+7ayA7FC6yy2ltOuM42oiJe9fmWxpfIeqmk0taie/hErrK/2dvbTSFljH4qYoqbwVw1d3MeGSGFTPt5RmQU3843X2OsVFrXBrUhh06Sxo831uGr+RuWtQSFO1pJh+7Ao372x2QlXDkWL0yjhngjHYV4rsJuKdTGvuTafWwEXDkVTaWymQoVK3Zu8SSdTVrPY/f9OSQOPo6ZFwZp4qOgiutm9W+4de6uIjqzwS3S8hcK+KcZB9tblyEkdRMeHV1isSR7fq1cgC9iKjg+usFx0fXOnDrpaGLYcbMUDKSyXj998suC10BKUuIU9zPHbUAp8dyMSDqWi4zhc7kZoD+Rnf76x3Fbw9lpkhruIzxQXSdXRBWv94I8clALf//UIZHv8hNayi0hkEunZcfIhiHpc+O495nWNJh5w36qWj/9l7jkd95db/hWec5ZF84m/FZwOtNja9DspQ2CLHXi/kDWZDCybN9//NpJK2cB1pH8HxxjmJ9MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P/AfykwohJznvelAAAAAElFTkSuQmCC"
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
