import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

export default function OrderSteps() {
    return (
        <div
          className="grid gap-4 bg-light-secondary rounded-xl p-6"
          style={{ color: "white" }}
        >
          <h2 style={{ color: "white" }}>
            Bestellen leicht gemacht!
          </h2>
          <p style={{ color: "white" }}>
            Sie möchten Brennholz bestellen? Schicken Sie uns einfach eine
            Anfrage per E-Mail. Wir bestätigen Ihre Bestellung und kümmern uns
            um eine schnelle Lieferung. Kontaktieren Sie uns für Ihre Bestellung
            oder weitere Informationen. Wir freuen uns auf Sie!
          </p>
          <p className="font-bold" style={{ color: "white" }}>
            So funktionierts:
          </p>
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <div className="flex flex-col items-center gap-2 p-2 border-2 border-stroke rounded-xl h-full">
              <EmailOutlinedIcon />
              <p style={{ color: "white" }}>Schicken Sie uns Ihre Anfrage</p>
            </div>
            <ArrowForwardOutlinedIcon />
            <div className="flex flex-col items-center gap-2 p-2 border-2 border-stroke rounded-xl h-full">
              <PhoneIcon />
              <p style={{ color: "white" }}>
                Wir melden uns mit einem Angebot zurück
              </p>
            </div>
            <ArrowForwardOutlinedIcon />
            <div className="flex flex-col items-center gap-2 p-2 border-2 border-stroke rounded-xl h-full">
              <CalendarMonthIcon />
              <p style={{ color: "white" }}>
                Gemeinsam wird ein Termin vereinbart
              </p>
            </div>
            <ArrowForwardOutlinedIcon />
            <div className="flex flex-col items-center gap-2 p-2 border-2 border-stroke rounded-xl h-full">
              <LocalShippingOutlinedIcon />
              <p style={{ color: "white" }}>
                Die Zustellung erfolgt termingerecht
              </p>
            </div>
          </div>
        </div>
    );
}