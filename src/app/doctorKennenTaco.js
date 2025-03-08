import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function DoctorTaco(patologia) {
    return (
        <Card sx={{ maxWidth: 545 }}>
        <CardMedia
          sx={{ height: 190 }}
          image="https://www.lolvvv.com/_next/image?url=https%3A%2F%2Fddragon.leagueoflegends.com%2Fcdn%2Fimg%2Fchampion%2Fsplash%2FKennen_4.jpg&w=1200&q=75"
          title="Doctor kennen taco"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            DOCTOR KENNEN TACO
          </Typography>
        </CardContent>
      </Card>
    );
  }