"use client";

import ContactForm from "@/components/ContactForm";

export default function Kontakt() {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="text-left mb-6">
            <h4>Standort</h4>
            <p>Klaus an der Pyhrnbahn 146</p>
            <p>4564 Klaus an der Pyhrnbahn</p>
          </div>

          <div className="text-left mb-6">
            <h4>Kontakt</h4>
            <p>+43 650 9506002</p>
            <p>mail@poellhuber-holz.at</p>
          </div>
        </div>

        <div className="w-full h-[200px] rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.1576865827967!2d14.171162145239641!3d47.84593923716951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4773df64c65dfe15%3A0x6c81e02a6ed4c27d!2sKlaus%20an%20der%20Pyhrnbahn%20146%2C%204564!5e1!3m2!1sde!2sat!4v1747588916661!5m2!1sde!2sat"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">Kontaktformular</h3>
        <p>
          Haben Sie Fragen zu unseren Produkten? Wir freuen uns auf Ihre
          Nachricht und beraten Sie gerne!
        </p>
        <ContactForm hasText={false} />
      </div>
    </div>
  );
}
