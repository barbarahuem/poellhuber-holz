import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

export default function OrderSteps({
  hasText,
  hasInfoSteps,
}: {
  hasText?: boolean;
  hasInfoSteps?: boolean;
}) {
  return (
    <>
      {hasInfoSteps && (
        <div className="grid gap-5">
          <h3 className="text-left">So funktioniert die Lieferung</h3>
          <ul className="list-disc text-left ml-3">
            <li>
              Kostenfreie Lieferung ab 10 SRM innerhalb unserer definierten
              Zonen
            </li>
            <li>
              Flexible Versandberechnung nach Postleitzahlen oder per
              Entfernungsmessung
            </li>
          </ul>
        </div>
      )}
      <div
        className="grid gap-4 bg-light-secondary rounded-xl p-6"
        style={{ color: "white" }}
      >
        {hasText && (
          <div className="flex flex-col items-center gap-5">
            <h2 style={{ color: "white" }}>Bestellen leicht gemacht!</h2>
            <p style={{ color: "white" }}>
              Sie möchten Brennholz bestellen? Schicken Sie uns einfach eine
              Anfrage per E-Mail. Wir bestätigen Ihre Bestellung und kümmern uns
              um eine schnelle Lieferung. Kontaktieren Sie uns für Ihre
              Bestellung oder weitere Informationen. Wir freuen uns auf Sie!
            </p>
          </div>
        )}
        <p className="font-bold" style={{ color: "white" }}>
          So funktionierts:
        </p>
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="flex flex-col items-center gap-2 p-2 border-2 border-stroke rounded-xl h-full w-full">
            <EmailOutlinedIcon />
            <p style={{ color: "white" }}>Schicken Sie uns Ihre Anfrage</p>
          </div>
          <ArrowForwardOutlinedIcon className="rotate-[90deg] md:rotate-none" />
          <div className="flex flex-col items-center gap-2 p-2 border-2 border-stroke rounded-xl h-full w-full">
            <PhoneIcon />
            <p style={{ color: "white" }}>
              Wir melden uns mit einem Angebot zurück
            </p>
          </div>
          <ArrowForwardOutlinedIcon className="rotate-[90deg] md:rotate-none" />
          <div className="flex flex-col items-center gap-2 p-2 border-2 border-stroke rounded-xl h-full w-full">
            <CalendarMonthIcon />
            <p style={{ color: "white" }}>
              Gemeinsam wird ein Termin vereinbart
            </p>
          </div>
          <ArrowForwardOutlinedIcon className="rotate-[90deg] md:rotate-none" />
          <div className="flex flex-col items-center gap-2 p-2 border-2 border-stroke rounded-xl h-full w-full">
            <LocalShippingOutlinedIcon />
            <p style={{ color: "white" }}>
              Die Zustellung erfolgt termingerecht
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
