import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

export default function MediaCard() {
    return (
        <Card sx={{ maxWidth: 345, marginTop: "15px", marginBottom: "15px" }}>
            <CardMedia
                sx={{ height: 250, width: 250 }}
                image="https://mofusand-mofumofu-market.jp/cdn/shop/files/4970381663407_800x.jpg?v=1686628364"
                title="title"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    mofusand
                </Typography>
                <Typography variant="body2" color="text.secondary">
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="like">
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}