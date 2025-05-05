import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function QuestionAccordion() {
  return (
    <div>
      <Accordion sx={{ boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p>Raummeter (RM) vs. Schüttraummeter (SRM) – Was ist der Unterschied?</p>
        </AccordionSummary>
        <p>
        Raummeter (RM): <br />
        Ein Raummeter ist ein Kubikmeter sauber gestapeltes Holz – inklusive der Luftzwischenräume zwischen den Scheiten.
        <br />
        <br />
        Schüttraummeter (SRM): <br />
        Ein Schüttraummeter ist ein Kubikmeter lose geschüttetes Holz. Durch die Hohlräume zwischen den ungestapelten Scheiten hat ein SRM weniger Holzmasse als ein RM.
        </p>
      </Accordion>
      <Accordion sx={{ boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p>Was ist Sonderholz?</p>
        </AccordionSummary>
        <p>
          Für besondere Anwendungen bieten wir Sonderhölzer in 50 cm und 1 m Scheitlängen an. Geliefert wird in Raummetern (RM), meist Buche.
          Andere Holzarten sind auf Anfrage je nach Verfügbarkeit möglich.
        </p>
      </Accordion>
    </div>
  );
}
