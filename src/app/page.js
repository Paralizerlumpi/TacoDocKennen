'use client'
import Image from "next/image";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { Box, Button, Card, CardContent, CardMedia, Container, Fab, FormControl, Grid, Grid2, InputLabel, MenuItem, Select, SendIcon, Stack, Typography } from "@mui/material";
import DoctorTaco from "./doctorKennenTaco";

export default function Home() {
  const [respiratoria, setRespiratoria] = useState(0);
  const [gastrointestinal, setGastrointestinal] = useState(0);
  const [cardiovascular, setCardiovascular] = useState(0);
  const [musculoesqueletica, setMusculoesqueletica] = useState(0);
  const [neurologica, setNeurologica] = useState(0);
  const [dermatologica, setDermatologica] = useState(0);
  const [trastornosPsicologicos, setTrastornosPsicologicos] = useState(0);
  const [otrasCausas, setOtrasCausas] = useState(0);

  function PatologiasComponente({ patologia }) {
    return <Box>
    <Typography variant="h4" gutterBottom>
    {patologia}
  </Typography>
    <Fab color="primary" aria-label="add">
        +
    </Fab>
  </Box>
  }

  return (<Box sx={{ padding:'5vh', alignItems:'center'}}>
    <Grid2 container spacing={0}>
    <Grid2 size={5}>
    </Grid2>
    <Grid2 size={2}>
      <DoctorTaco/>
    </Grid2>
<Grid container spacing={2} direction="row" justifyContent="space-around">
        {/* Respiratoria */}
        <Grid item>
          <Typography variant="h5" gutterBottom sx={{ paddingTop: 0.5 }}>
            Respiratoria
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setRespiratoria(respiratoria + 1)}
            >
              +
            </Fab>
            <Typography variant="body1" sx={{ marginLeft: 1, marginRight:1 }}>
              : {respiratoria}
            </Typography>
            {/* <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setRespiratoria(respiratoria - 1)}
            >
              -
            </Fab> */}
          </Box>
        </Grid>

        {/* Gastrointestinal */}
        <Grid item>
          <Typography variant="h5" gutterBottom sx={{ paddingTop: 0.5 }}>
            Gastrointestinal
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setGastrointestinal(gastrointestinal + 1)}
            >
              +
            </Fab>
            <Typography variant="body1" sx={{ marginLeft: 1 }}>
              : {gastrointestinal}
            </Typography>
          </Box>
        </Grid>

        {/* Cardiovascular */}
        <Grid item>
          <Typography variant="h5" gutterBottom sx={{ paddingTop: 0.5 }}>
            Cardiovascular
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setCardiovascular(cardiovascular + 1)}
            >
              +
            </Fab>
            <Typography variant="body1" sx={{ marginLeft: 1 }}>
              : {cardiovascular}
            </Typography>
          </Box>
        </Grid>

        {/* Musculoesqueletica */}
        <Grid item>
          <Typography variant="h5" gutterBottom sx={{ paddingTop: 0.5 }}>
            Musculoesqueletica
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setMusculoesqueletica(musculoesqueletica + 1)}
            >
              +
            </Fab>
            <Typography variant="body1" sx={{ marginLeft: 1 }}>
              : {musculoesqueletica}
            </Typography>
          </Box>
        </Grid>

        {/* Neurologica */}
        <Grid item>
          <Typography variant="h5" gutterBottom sx={{ paddingTop: 0.5 }}>
            Neurologica
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setNeurologica(neurologica + 1)}
            >
              +
            </Fab>
            <Typography variant="body1" sx={{ marginLeft: 1 }}>
              : {neurologica}
            </Typography>
          </Box>
        </Grid>

        {/* Dermatologica */}
        <Grid item>
          <Typography variant="h5" gutterBottom sx={{ paddingTop: 0.5 }}>
            Dermatologica
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setDermatologica(dermatologica + 1)}
            >
              +
            </Fab>
            <Typography variant="body1" sx={{ marginLeft: 1 }}>
              : {dermatologica}
            </Typography>
          </Box>
        </Grid>

        {/* Trastornos Psicologicos */}
        <Grid item>
          <Typography variant="h5" gutterBottom sx={{ paddingTop: 0.5 }}>
            Trastornos Psicologicos
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setTrastornosPsicologicos(trastornosPsicologicos + 1)}
            >
              +
            </Fab>
            <Typography variant="body1" sx={{ marginLeft: 1 }}>
              : {trastornosPsicologicos}
            </Typography>
          </Box>
        </Grid>

        {/* Otras causas */}
        <Grid item>
          <Typography variant="h5" gutterBottom sx={{ paddingTop: 0.5 }}>
            Otras causas
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setOtrasCausas(otrasCausas + 1)}
            >
              +
            </Fab>
            <Typography variant="body1" sx={{ marginLeft: 1 }}>
              : {otrasCausas}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      </Grid2>
      
      </Box>
  );
}
