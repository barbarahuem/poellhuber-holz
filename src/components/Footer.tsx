export default function Footer() {
  return (
    <footer className="bg-primary p-8 mt-10 flex flex-col">
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-30 text-left">
        <div>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "white" }}>
            Kontakt
          </h3>
          <p style={{ color: "white" }}>Pöllhuber Holz</p>
          <p style={{ color: "white" }}>Klaus an der Phyrnbahn 146</p>
          <p style={{ color: "white" }}>4564 Klaus an der Phyrnbahn</p>
          <p style={{ color: "white" }}>Tel: +43 7585 20069</p>
          <p style={{ color: "white" }}>E-Mail: mail@poellhuber-holz.at</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "white" }}>
            Rechtliches
          </h3>
          <p>
            <a
              href="/impressum"
              className="hover:underline"
              style={{ color: "white" }}
            >
              Impressum
            </a>
          </p>
          <p>
            <a
              href="/datenschutz"
              className="hover:underline"
              style={{ color: "white" }}
            >
              Datenschutz
            </a>
          </p>
        </div>
      </div>
      <div className="text-center text-sm mt-10 text-gray-300">
        © {new Date().getFullYear()} Pöllhuber Holz. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
