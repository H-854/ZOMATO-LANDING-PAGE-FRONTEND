import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import pic from "./Pic.avif"

export default function Template(){
    return (
        <div className='cards'>
            <Card sx={{ maxWidth: 550 }} className='m-5'>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="192"
                    image={pic}
                    alt="picture"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Order Online
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Stay home and order to your doorstep
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}