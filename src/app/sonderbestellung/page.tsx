import OrderSteps from "@/components/OrderSteps";
import ProductContainer from "@/components/products/ProductContainer";
import products from "@/data/brennholz.json";
import { Accordion, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContactForm from "@/components/ContactForm";

export default function Sonderbestellung() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Sie benötigen spezielles Holz für besondere Anwendungen? Wir bieten
        verschiedene Holzsorten auf Anfrage an und können Spezialmaße nach
        individuellen Wünschen zuschneiden. Sonderholz eignet sich für
        Handwerksprojekte, Bauholz oder andere spezielle Anforderungen.
      </p>
      <Accordion sx={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p>Was ist Sonderholz?</p>
        </AccordionSummary>
        <p style={{ color: "grey" }}>
          Für besondere Anwendungen bieten wir Sonderhölzer in 50 cm und 1 m
          Scheitlängen an. Geliefert wird in Raummetern (RM), meist Buche.
          Andere Holzarten sind auf Anfrage je nach Verfügbarkeit möglich.
        </p>
      </Accordion>

      <hr
        className="m-auto w-full justify-center max-w-3xl"
        style={{
          borderColor: "var(--color-stroke-light)",
          borderWidth: "0.5px",
        }}
      />

      <ContactForm />
    </div>
  );
}
