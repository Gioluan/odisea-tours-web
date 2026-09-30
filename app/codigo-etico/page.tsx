import Link from "next/link";
import type { Metadata } from "next";

// Página privada: no aparece en el menú, el footer ni el sitemap, y lleva noindex.
// Se comparte por enlace directo con clientes, clubes y auditores de compliance.

const VERSION = "1.0";
const APPROVED = "30 de septiembre de 2026";
const OFFICER = "Juan Bautista Sánchez Fernández";
const CHANNEL = "juan@odisea-tours.com";

export const metadata: Metadata = {
  title: "Código Ético y de Conducta | Odisea Tours",
  description:
    "Código Ético y de Conducta de Ground Agents Solutions, S.L. (Odisea Tours), incluida su política anticorrupción.",
  alternates: { canonical: "/codigo-etico" },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

const SECTIONS = [
  { id: "objeto", label: "01. Objeto y ámbito de aplicación" },
  { id: "principios", label: "02. Principios generales" },
  { id: "legalidad", label: "03. Cumplimiento de la legalidad" },
  { id: "anticorrupcion", label: "04. Anticorrupción y soborno" },
  { id: "regalos", label: "05. Regalos, invitaciones y hospitalidad" },
  { id: "intereses", label: "06. Conflictos de interés" },
  { id: "blanqueo", label: "07. Blanqueo de capitales y pagos" },
  { id: "menores", label: "08. Protección de menores y participantes" },
  { id: "terceros", label: "09. Clientes, proveedores y socios" },
  { id: "competencia", label: "10. Libre competencia" },
  { id: "datos", label: "11. Protección de datos y confidencialidad" },
  { id: "personas", label: "12. Respeto, igualdad y seguridad" },
  { id: "medioambiente", label: "13. Medio ambiente" },
  { id: "registros", label: "14. Registros contables y transparencia" },
  { id: "compliance", label: "15. Compliance Officer" },
  { id: "canal", label: "16. Canal de comunicación y denuncias" },
  { id: "incumplimiento", label: "17. Incumplimiento y régimen disciplinario" },
  { id: "vigencia", label: "18. Aprobación, vigencia y revisión" },
];

export default function CodigoEticoPage() {
  return (
    <main className="bg-paper text-ink">
      {/* HERO */}
      <section className="bg-ink text-paper pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto">
          <nav
            aria-label="Breadcrumb"
            className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6"
          >
            <Link href="/" className="hover:text-gold">
              Odisea Tours
            </Link>
            <span className="mx-2">/</span>
            <span className="text-paper/50">Código Ético</span>
          </nav>
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            Compliance
          </div>
          <h1 className="font-display text-[clamp(2.4rem,6vw,5rem)] uppercase leading-[0.95] max-w-[22ch]">
            Código Ético{" "}
            <span className="font-display-italic text-gold">y de Conducta.</span>
          </h1>
          <p className="mt-6 max-w-[64ch] text-paper/85 text-lg leading-relaxed">
            Los principios y normas de conducta que rigen la actividad de Ground Agents Solutions, S.L. (Odisea Tours) con sus clientes, proveedores, clubes, instituciones y con los grupos que viajan con nosotros. Incluye nuestra política anticorrupción.
          </p>
          <p className="mt-6 font-mono-editorial text-[0.62rem] tracking-[0.26em] uppercase text-paper/55">
            Versión {VERSION} · Aprobado el {APPROVED}
          </p>
        </div>
      </section>

      {/* ÍNDICE */}
      <section className="paper-texture py-12 md:py-14 px-6 md:px-10 border-b border-ink/10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            Índice
          </div>
          <ol className="grid md:grid-cols-2 gap-x-10 gap-y-2">
            {SECTIONS.map((s) => (
              <li key={s.id} className="border-b border-ink/10 py-2">
                <a
                  href={`#${s.id}`}
                  className="font-mono-editorial text-[0.7rem] tracking-[0.18em] uppercase text-ink/75 hover:text-gold-deep"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CUERPO */}
      <article className="paper-texture py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[820px] mx-auto space-y-14 text-[1.02rem] leading-[1.7] text-ink/85">
          <Section id="objeto" title="01. Objeto y ámbito de aplicación">
            <p>
              Este Código Ético y de Conducta (el &quot;<strong>Código</strong>&quot;) establece los valores y las normas de comportamiento de <strong>Ground Agents Solutions, S.L.</strong>, con NIF <strong>B40274763</strong> y domicilio social en C/ José Bellido Mor, nº 1B, 12560 Benicàssim (Castellón), España, inscrita en el Registro Mercantil de Castellón, Tomo 1.781, Folio 46, Hoja CS-41837, que opera bajo el nombre comercial <strong>Odisea Tours</strong> (la &quot;<strong>Empresa</strong>&quot;).
            </p>
            <p>
              El Código es de obligado cumplimiento para el órgano de administración, la dirección, los empleados, colaboradores, representantes comerciales, guías y coordinadores que actúen en nombre de la Empresa, con independencia de su modalidad de contratación (las &quot;<strong>Personas de Odisea</strong>&quot;).
            </p>
            <p>
              La Empresa exige además a sus proveedores, subcontratistas, agentes e intermediarios que conozcan este Código y actúen conforme a principios equivalentes en toda relación con Odisea Tours.
            </p>
          </Section>

          <Section id="principios" title="02. Principios generales">
            <p>Toda la actividad de la Empresa se rige por los siguientes principios:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-gold-deep">
              <li><strong>Integridad:</strong> actuamos con honestidad y buena fe, y no obtenemos ventajas por medios indebidos.</li>
              <li><strong>Legalidad:</strong> cumplimos la ley en España y en todos los países donde operan nuestros clientes y proveedores.</li>
              <li><strong>Transparencia:</strong> la información que damos a clientes, socios e instituciones es veraz, completa y verificable.</li>
              <li><strong>Seguridad y cuidado:</strong> la seguridad y el bienestar de los grupos que viajan con nosotros, en especial de los menores, están por encima de cualquier interés comercial.</li>
              <li><strong>Respeto:</strong> tratamos a todas las personas con dignidad, sin discriminación de ningún tipo.</li>
              <li><strong>Responsabilidad:</strong> respondemos de nuestras decisiones y corregimos los errores en cuanto los detectamos.</li>
            </ul>
          </Section>

          <Section id="legalidad" title="03. Cumplimiento de la legalidad">
            <p>
              Las Personas de Odisea cumplirán la legislación vigente, en particular la normativa de viajes combinados (Real Decreto Legislativo 1/2007 y Real Decreto-ley 23/2018), turismo, transporte, consumo, fiscalidad, protección de datos, prevención del blanqueo de capitales y el Código Penal, incluido el régimen de responsabilidad penal de las personas jurídicas (artículo 31 bis).
            </p>
            <p>
              Nadie en la Empresa está autorizado a ordenar ni a tolerar una conducta ilegal, y ninguna instrucción de un superior, cliente o proveedor justifica incumplir la ley o este Código.
            </p>
          </Section>

          <Section id="anticorrupcion" title="04. Anticorrupción y soborno">
            <p>
              La Empresa aplica una política de <strong>tolerancia cero</strong> frente a la corrupción en todas sus formas, tanto en el sector público como entre particulares (artículos 286 bis y 419 a 427 bis del Código Penal) y en el ámbito deportivo.
            </p>
            <p>Queda expresamente prohibido:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-gold-deep">
              <li>Ofrecer, prometer, entregar, solicitar o aceptar, directamente o a través de terceros, cualquier pago, comisión, regalo o ventaja no justificada con el fin de obtener o conservar un negocio, una adjudicación, una entrada, una reserva o cualquier trato de favor.</li>
              <li>Realizar pagos de facilitación a funcionarios o empleados públicos, aunque sean de pequeña cuantía o se consideren habituales en algún país.</li>
              <li>Ofrecer ventajas a directivos, empleados, entrenadores, árbitros o jugadores de clubes, federaciones o competiciones con el fin de alterar de forma deliberada y fraudulenta el resultado de una prueba, encuentro o competición, o de obtener entradas, instalaciones o partidos amistosos por vías irregulares.</li>
              <li>Utilizar intermediarios, agentes o proveedores para hacer lo que la Empresa no puede hacer directamente.</li>
              <li>Realizar donaciones o patrocinios a partidos políticos, cargos públicos o entidades vinculadas a ellos en nombre de la Empresa.</li>
            </ul>
            <p>
              Toda comisión o remuneración a agentes e intermediarios debe estar documentada por escrito, responder a un servicio real y ser proporcional al mismo, y abonarse mediante transferencia a una cuenta a nombre del propio intermediario.
            </p>
          </Section>

          <Section id="regalos" title="05. Regalos, invitaciones y hospitalidad">
            <p>
              Solo se permiten regalos e invitaciones de cortesía que sean de valor simbólico o moderado (orientativamente, no superior a <strong>150 €</strong> por persona y ocasión), acordes con los usos comerciales, esporádicos, transparentes y que no puedan interpretarse como un intento de influir en una decisión.
            </p>
            <p>
              Nunca se ofrecerán ni aceptarán regalos en efectivo o equivalentes (tarjetas regalo, transferencias), ni regalos o invitaciones a funcionarios públicos o a personas que estén participando en un proceso de adjudicación con la Empresa. Cualquier regalo o invitación que supere estos límites o genere dudas se comunicará previamente al Compliance Officer.
            </p>
          </Section>

          <Section id="intereses" title="06. Conflictos de interés">
            <p>
              Las Personas de Odisea evitarán situaciones en que sus intereses personales, familiares o económicos entren en conflicto con los de la Empresa o con los de sus clientes. Cuando exista un posible conflicto (por ejemplo, una relación personal o una participación económica en un proveedor, club o cliente), se comunicará por escrito al Compliance Officer antes de tomar cualquier decisión, y la persona afectada se abstendrá de intervenir en ella.
            </p>
          </Section>

          <Section id="blanqueo" title="07. Blanqueo de capitales y pagos">
            <p>
              La Empresa colabora en la prevención del blanqueo de capitales y la financiación del terrorismo (Ley 10/2010). Para ello:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-gold-deep">
              <li>Identifica a sus clientes, proveedores e intermediarios antes de iniciar una relación comercial.</li>
              <li>Cobra y paga preferentemente por transferencia bancaria, respeta los límites legales de pago en efectivo y no acepta pagos de terceros ajenos a la operación sin justificación.</li>
              <li>No opera con personas o entidades incluidas en listas de sanciones internacionales (UE, ONU, OFAC).</li>
              <li>Comunica al Compliance Officer cualquier operación inusual, fraccionada o sin justificación económica aparente.</li>
            </ul>
          </Section>

          <Section id="menores" title="08. Protección de menores y participantes">
            <p>
              Buena parte de los grupos que viajan con Odisea Tours son equipos juveniles y escolares. La protección de los menores es una prioridad absoluta y se rige por la Ley Orgánica 8/2021, de protección integral a la infancia y la adolescencia frente a la violencia:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-gold-deep">
              <li>Todo guía, coordinador o colaborador de la Empresa que tenga contacto habitual con menores deberá aportar el certificado negativo del Registro Central de Delincuentes Sexuales.</li>
              <li>Los menores estarán siempre bajo la responsabilidad de los adultos designados por su club o centro. Las Personas de Odisea no se quedarán a solas con un menor salvo emergencia, y nunca mantendrán con ellos comunicaciones privadas ajenas al viaje.</li>
              <li>Solo se tomarán o publicarán imágenes de menores con el consentimiento de sus padres, madres o tutores.</li>
              <li>Cualquier indicio de abuso, maltrato o riesgo para un menor se comunicará de inmediato al responsable del grupo, al Compliance Officer y, cuando proceda, a las autoridades.</li>
            </ul>
            <p>
              La Empresa selecciona alojamientos, transportes y actividades que cumplan la normativa de seguridad aplicable, con proveedores autorizados y asegurados.
            </p>
          </Section>

          <Section id="terceros" title="09. Clientes, proveedores y socios">
            <p>
              Tratamos a clientes, clubes, federaciones e instituciones con lealtad y profesionalidad. Las propuestas y presupuestos reflejan con claridad lo que está incluido y lo que no, y no se usará el nombre, la marca ni la imagen de un club o institución sin la autorización correspondiente.
            </p>
            <p>
              Los proveedores se seleccionan por criterios objetivos de calidad, seguridad, precio y fiabilidad. La Empresa verifica que estén debidamente autorizados y asegurados, y espera de ellos un comportamiento acorde con este Código. Se podrá poner fin a la relación con cualquier proveedor que lo incumpla.
            </p>
          </Section>

          <Section id="competencia" title="10. Libre competencia">
            <p>
              La Empresa compite de forma leal. Queda prohibido acordar precios, repartirse clientes o mercados, o intercambiar información comercial sensible con competidores, así como difundir información falsa sobre ellos.
            </p>
          </Section>

          <Section id="datos" title="11. Protección de datos y confidencialidad">
            <p>
              Los datos personales de viajeros, clientes y colaboradores (incluidos pasaportes, datos de salud y datos de menores) se tratan conforme al Reglamento (UE) 2016/679 y la Ley Orgánica 3/2018, solo para la finalidad del viaje, con acceso limitado a quien lo necesite y con medidas de seguridad adecuadas.
            </p>
            <p>
              La información confidencial de la Empresa, de sus clientes y de sus socios no se divulgará a terceros ni se usará en beneficio propio, también una vez terminada la relación con la Empresa.
            </p>
          </Section>

          <Section id="personas" title="12. Respeto, igualdad y seguridad">
            <p>
              La Empresa no tolera la discriminación por razón de origen, nacionalidad, sexo, orientación sexual, identidad de género, religión, discapacidad, edad u opinión, ni ningún tipo de acoso, abuso de autoridad o violencia. Promueve condiciones de trabajo dignas y seguras y exige a sus proveedores el respeto a los derechos humanos y laborales, incluida la prohibición del trabajo infantil y forzoso.
            </p>
          </Section>

          <Section id="medioambiente" title="13. Medio ambiente">
            <p>
              La Empresa procura reducir el impacto ambiental de sus viajes: optimiza rutas y ocupación de autocares, favorece proveedores locales y respeta los espacios naturales, culturales y deportivos que visita.
            </p>
          </Section>

          <Section id="registros" title="14. Registros contables y transparencia">
            <p>
              Todas las operaciones se registran de forma fiel, completa y puntual en la contabilidad de la Empresa, con su soporte documental. Están prohibidas las cuentas o fondos no registrados, las facturas falsas o que no respondan a un servicio real y cualquier práctica de fraude fiscal o a la Seguridad Social.
            </p>
          </Section>

          <Section id="compliance" title="15. Compliance Officer">
            <p>
              La Empresa ha designado como <strong>Compliance Officer</strong> a <strong>D. {OFFICER}</strong>, Administrador Único de la Sociedad, quien asume las funciones de supervisión del funcionamiento y cumplimiento de este Código, conforme a lo previsto en el artículo 31 bis.3 del Código Penal para las personas jurídicas de pequeñas dimensiones.
            </p>
            <p>Sus funciones son:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-gold-deep">
              <li>Difundir el Código entre las Personas de Odisea y los proveedores principales, y resolver las dudas sobre su interpretación.</li>
              <li>Recibir y tramitar las comunicaciones y denuncias, y proponer las medidas que correspondan.</li>
              <li>Identificar los riesgos de incumplimiento propios de la actividad y revisar los controles para prevenirlos.</li>
              <li>Mantener un registro de regalos, conflictos de interés y comunicaciones recibidas.</li>
              <li>Revisar y actualizar el Código al menos una vez al año.</li>
            </ul>
          </Section>

          <Section id="canal" title="16. Canal de comunicación y denuncias">
            <p>
              Cualquier persona, sea o no de la Empresa, puede consultar dudas o comunicar de buena fe una posible infracción de la ley o de este Código escribiendo a{" "}
              <a href={`mailto:${CHANNEL}`} className="underline decoration-gold-deep underline-offset-4">
                {CHANNEL}
              </a>{" "}
              con el asunto &quot;Compliance&quot;. Las comunicaciones pueden realizarse de forma anónima.
            </p>
            <p>
              La Empresa garantiza la confidencialidad de la identidad del informante y de las personas afectadas, y prohíbe cualquier represalia contra quien comunique de buena fe, conforme a la Ley 2/2023, reguladora de la protección de las personas que informen sobre infracciones normativas. Se acusará recibo en un plazo de siete días y se dará respuesta en un plazo máximo de tres meses.
            </p>
          </Section>

          <Section id="incumplimiento" title="17. Incumplimiento y régimen disciplinario">
            <p>
              El incumplimiento de este Código podrá dar lugar a las medidas disciplinarias previstas en la legislación laboral, a la resolución del contrato de colaboración o de suministro y, en su caso, a las acciones legales que correspondan, sin perjuicio de la comunicación a las autoridades competentes.
            </p>
          </Section>

          <Section id="vigencia" title="18. Aprobación, vigencia y revisión">
            <p>
              Este Código ha sido aprobado por el Administrador Único de Ground Agents Solutions, S.L. el {APPROVED}, entra en vigor en esa misma fecha y permanecerá vigente mientras no sea modificado. Se revisará al menos una vez al año y siempre que cambien la actividad de la Empresa o la normativa aplicable.
            </p>
            <p className="pt-6 border-t border-ink/15">
              <strong>{OFFICER}</strong>
              <br />
              Administrador Único y Compliance Officer
              <br />
              Ground Agents Solutions, S.L. (Odisea Tours)
            </p>
          </Section>
        </div>
      </article>
    </main>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-display text-[clamp(1.4rem,2.6vw,2rem)] uppercase leading-[1.1] mb-5 text-ink">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
