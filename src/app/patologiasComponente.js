import { Box, Fab, Typography } from "@mui/material";


export default function PatologiasComponente(patologia) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
        {patologia.label}
      </Typography>
        <Fab color="primary" aria-label="add">
            +
        </Fab>
      </Box>
    );
  }