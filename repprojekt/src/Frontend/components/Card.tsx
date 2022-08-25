import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/joy/Badge';
import Checkbox from '@mui/joy/Checkbox';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';

export default function ShoesCard() {
    

  const imageStyle = {
    height: "16vw",
    width: "70%",
  };
  const cardStyle = {
    backgroundColor: '#C6E2FF',
    display: "block",
    height: "30vw",
    width: "30vw",
  };
  const [count, setCount] = React.useState(0);
  const [showZero, setShowZero] = React.useState(false);

  return (
    <Card style={cardStyle}>
        
      <AspectRatio style={imageStyle}>
        <img
          src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/9b34192e-3fc7-428b-a986-51497ba15a72/air-max-plus-damenschuh-RdTmzW.png"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography level="h2" fontSize="md" sx={{ alignSelf: 'flex-start' }}>
          Yosemite National Park
        </Typography>
        <Typography level="body2">April 24 to May 02, 2021</Typography>
      </Box>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <AddShoppingCartIcon />
      </IconButton>

      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">price:</Typography>
          <Typography fontSize="lg" fontWeight="lg" >
            $2900
          </Typography>
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
        <Typography fontWeight="md" textColor="text.secondary">
          {count}
        </Typography>
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
  );
}
