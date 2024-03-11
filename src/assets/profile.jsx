import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { Button, Container, Stack } from '@mui/material'


export default function Profile() {
    return (
        <Container sx={{ display: 'flex', flexWrap: "wrap", justifyContent: "center", marginTop: "5px" }}>
            <Card sx={{ maxWidth: 345, height: 400, width: 340 }}>
                <CardMedia
                    sx={{ height: 250, width: 400 }}
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
            <Card sx={{ maxWidth: 345, height: 400, width: 340 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        About
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Super cute cat from Japan.
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}