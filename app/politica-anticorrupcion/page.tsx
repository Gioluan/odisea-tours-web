import Link from "next/link";
import type { Metadata } from "next";

// Página privada: no aparece en el menú, el footer ni el sitemap, y lleva noindex.
// Complementa el Código Ético (/codigo-etico) y se comparte por enlace directo.

const VERSION = "1.0";
const APPROVED = "30 de septiembre de 2026";
const OFFICER = "Juan Bautista Sánchez Fernández";
const CHANNEL = "juan@odisea-tours.com";

export const metadata: Metadata = {
  title: "Política Anticorrupción | Odisea Tours",
  description:
    "Política Anticorrupción de Ground Agents Solutions, S.L. (Odisea Tours).",
  alternates: { canonical: "/politica-anticorrupcion" },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

const SECTIONS = [
  { id: "compromiso", label: "01. Compromiso y objeto" },
  { id: "ambito", label: "02. Ámbito de aplicación" },
  { id: "definiciones", label: "03. Definiciones" },
  { id: "prohibiciones", label: "04. Conductas prohibidas" },
  { id: "funcionarios", label: "05. Relación con funcionarios y entidades públicas" },
  { id: "deporte", label: "06. Integridad en el deporte" },
  { id: "regalos", label: "07. Regalos, invitaciones y hospitalidad" },
  { id: "intermediarios", label: "08. Agentes, intermediarios y proveedores" },
  { id: "donaciones", label: "09. Donaciones y patrocinios" },
  { id: "pagos", label: "10. Pagos y registros contables" },
  { id: "senales", label: "11. Señales de alerta" },
  { id: "formacion", label: "12. Comunicación y formación" },
  { id: "denuncias", label: "13. Comunicación de incumplimientos" },
  { id: "sanciones", label: "14. Incumplimiento" },
  { id: "revision", label: "15. Responsable, aprobación y revisión" },
];

export default function PoliticaAnticorrupcionPage() {
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
            <span className="text-paper/50">Política Anticorrupción</span>
          </nav>
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            Compliance
          </div>
          <h1 className="font-display text-[clamp(2.4rem,6vw,5rem)] uppercase leading-[0.95] max-w-[22ch]">
            Política{" "}
            <span className="font-display-italic text-gold">Anticorrupción.</span>
          </h1>
          <p className="mt-6 max-w-[64ch] text-paper/85 text-lg leading-relaxed">
            Las normas que aplica Ground Agents Solutions, S.L. (Odisea Tours) para prevenir el soborno y la corrupción en su relación con clientes, clubes, proveedores, intermediarios e instituciones públicas. Desarrolla el capítulo 04 de nuestro{" "}
            <Link href="/codigo-etico" className="underline decoration-gold underline-offset-4">
              Código Ético y de Conducta
            </Link>
            .
          </p>
          <p className="mt-6 font-mono-editorial text-[0.62rem] tracking-[0.26em] uppercase text-paper/55">
            Versión {VERSION} · Aprobada el {APPROVED}
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
          <Section id="compromiso" title="01. Compromiso y objeto">
            <p>
              <strong>Ground Agents Solutions, S.L.</strong> (NIF <strong>B40274763</strong>), que opera bajo el nombre comercial <strong>Odisea Tours</strong> (la &quot;<strong>Empresa</strong>&quot;), aplica una política de <strong>tolerancia cero</strong> frente a cualquier forma de corrupción y soborno, tanto en el sector público como en el privado y en el ámbito deportivo.
            </p>
            <p>
              Esta Política concreta cómo se aplica ese compromiso en el día a día de nuestra actividad (organización de viajes deportivos, educativos y culturales, contratación de alojamientos, transporte, entradas, instalaciones y experiencias con clubes) y da cumplimiento a los artículos 31 bis, 286 bis a 286 quater y 419 a 427 bis del Código Penal español. La Empresa respeta igualmente la normativa anticorrupción de los países de origen de sus clientes, como la Foreign Corrupt Practices Act (Estados Unidos) o la Bribery Act 2010 (Reino Unido), cuando resulte aplicable.
            </p>
          </Section>

          <Section id="ambito" title="02. Ámbito de aplicación">
            <p>
              Esta Política obliga al órgano de administración, la dirección, los empleados, los colaboradores, los representantes comerciales, los guías y los coordinadores que actúen en nombre de la Empresa, en España y en cualquier otro país. La Empresa exige a sus agentes, intermediarios, proveedores y subcontratistas el cumplimiento de principios equivalentes.
            </p>
          </Section>

          <Section id="definiciones" title="03. Definiciones">
            <ul className="list-disc pl-6 space-y-2 marker:text-gold-deep">
              <li><strong>Soborno:</strong> ofrecer, prometer, entregar, solicitar o aceptar cualquier beneficio o ventaja indebida, directamente o a través de terceros, para influir en la actuación de una persona en el desempeño de su cargo o función.</li>
              <li><strong>Cualquier cosa de valor:</strong> dinero, equivalentes de efectivo, regalos, viajes, alojamiento, comidas, entradas, invitaciones, descuentos no comerciales, empleo o prácticas, préstamos, donaciones o favores personales.</li>
              <li><strong>Funcionario o empleado público:</strong> toda persona que ejerza una función pública, nacional o extranjera, incluidos los empleados de empresas públicas, organismos internacionales, centros educativos públicos y los cargos o candidatos de partidos políticos.</li>
              <li><strong>Pago de facilitación:</strong> pago de pequeña cuantía a un funcionario para agilizar un trámite rutinario al que se tiene derecho.</li>
            </ul>
          </Section>

          <Section id="prohibiciones" title="04. Conductas prohibidas">
            <p>Queda prohibido, directamente o a través de terceros:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-gold-deep">
              <li>Ofrecer, prometer o entregar cualquier cosa de valor para obtener o conservar un negocio, una adjudicación, una reserva, entradas o instalaciones, o cualquier trato de favor.</li>
              <li>Solicitar o aceptar cualquier cosa de valor de un cliente, proveedor o tercero a cambio de favorecerle en la contratación, en los precios o en la adjudicación de servicios.</li>
              <li>Realizar pagos de facilitación, aunque sean de pequeña cuantía o se consideren habituales en algún país.</li>
              <li>Ofrecer comisiones ocultas o &quot;retornos&quot; a responsables de clubes, colegios, federaciones o asociaciones por elegir a la Empresa como organizador de un viaje.</li>
              <li>Ocultar o disfrazar un pago indebido como comisión, gasto de viaje, descuento, donación o cualquier otro concepto.</li>
            </ul>
            <p>
              La única excepción es un pago exigido bajo amenaza inminente para la vida, la salud o la libertad de una persona. En ese caso se informará inmediatamente al Compliance Officer y el pago se registrará como tal.
            </p>
          </Section>

          <Section id="funcionarios" title="05. Relación con funcionarios y entidades públicas">
            <p>
              Toda relación con administraciones, organismos públicos, centros educativos públicos, ayuntamientos, fuerzas de seguridad o autoridades de fronteras se basa en la transparencia y en los procedimientos oficiales. No se ofrecerán regalos, invitaciones, viajes ni plazas gratuitas en los tours a funcionarios o empleados públicos que tengan capacidad de decisión sobre asuntos de la Empresa, salvo cuando formen parte del programa oficial acordado por escrito con la entidad (por ejemplo, profesores acompañantes de un grupo escolar) y figuren en el contrato y en la factura.
            </p>
          </Section>

          <Section id="deporte" title="06. Integridad en el deporte">
            <p>
              La Empresa trabaja con clubes, academias, federaciones y competiciones. Queda prohibido ofrecer o entregar ventajas a directivos, empleados, entrenadores, árbitros, jugadores o personal de clubes y competiciones con el fin de:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-gold-deep">
              <li>Alterar el resultado de un partido, torneo o competición, o facilitar información privilegiada para apuestas.</li>
              <li>Obtener entradas, abonos, visitas, partidos amistosos, sesiones de entrenamiento o instalaciones por vías distintas a los canales oficiales del club.</li>
              <li>Revender entradas en contra de las condiciones fijadas por el club o la competición.</li>
            </ul>
            <p>
              Las entradas, visitas a estadios y experiencias con clubes se contratan siempre a través de los canales oficiales o de proveedores autorizados, con factura.
            </p>
          </Section>

          <Section id="regalos" title="07. Regalos, invitaciones y hospitalidad">
            <p>Solo se permiten regalos, invitaciones y hospitalidad que cumplan todas estas condiciones:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-gold-deep">
              <li>Valor simbólico o moderado, orientativamente no superior a <strong>150 €</strong> por persona y ocasión, y no más de dos veces al año con la misma persona o entidad.</li>
              <li>Nunca en efectivo o equivalentes (tarjetas regalo, vales, transferencias).</li>
              <li>Ofrecidos de forma abierta, con una finalidad comercial legítima, y nunca durante un proceso de licitación, adjudicación o negociación con el destinatario.</li>
              <li>Permitidos por las normas internas del destinatario.</li>
            </ul>
            <p>
              Los viajes de familiarización (fam trips) o inspecciones ofrecidos a clientes o a la Empresa por proveedores deben tener una finalidad profesional real, limitarse a los gastos razonables y comunicarse previamente al Compliance Officer. Todo regalo o invitación que supere estos límites se rechazará o se comunicará al Compliance Officer, que lo anotará en el registro de regalos.
            </p>
          </Section>

          <Section id="intermediarios" title="08. Agentes, intermediarios y proveedores">
            <p>
              La Empresa responde de lo que hacen en su nombre sus agentes e intermediarios. Antes de trabajar con un agente comercial, intermediario o proveedor relevante, la Empresa:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-gold-deep">
              <li>Verifica su identidad, su actividad real y, si es una sociedad, quiénes son sus titulares reales.</li>
              <li>Comprueba que no figura en listas de sanciones internacionales (UE, ONU, OFAC).</li>
              <li>Formaliza la relación por escrito, con una descripción clara del servicio y de la remuneración, y con un compromiso de cumplir esta Política.</li>
              <li>Paga únicamente comisiones proporcionales a un servicio real, contra factura, mediante transferencia a una cuenta a nombre del propio agente en su país de residencia o de actividad.</li>
            </ul>
            <p>
              Cualquier sobreprecio o comisión que un intermediario añada al precio que cobra a su cliente final es una relación entre ellos y debe ser conocida por ese cliente. La Empresa no pagará cantidades destinadas a terceros no identificados.
            </p>
          </Section>

          <Section id="donaciones" title="09. Donaciones y patrocinios">
            <p>
              La Empresa no realiza aportaciones a partidos políticos, cargos públicos ni entidades vinculadas a ellos. Las donaciones benéficas y los patrocinios (por ejemplo, a clubes de base o torneos juveniles) se aprueban por escrito, se entregan a la entidad y nunca a una persona física, se documentan con recibo o contrato y no pueden estar vinculados a la obtención de un negocio.
            </p>
          </Section>

          <Section id="pagos" title="10. Pagos y registros contables">
            <ul className="list-disc pl-6 space-y-2 marker:text-gold-deep">
              <li>Todos los cobros y pagos se realizan preferentemente por transferencia bancaria y respetan los límites legales al uso de efectivo.</li>
              <li>Cada operación se registra de forma fiel y completa en la contabilidad, con su factura o justificante.</li>
              <li>No se permiten cuentas ni fondos fuera de la contabilidad, facturas que no respondan a un servicio real ni pagos a cuentas de terceros ajenos a la operación.</li>
              <li>Los justificantes se conservan durante un mínimo de seis años.</li>
            </ul>
          </Section>

          <Section id="senales" title="11. Señales de alerta">
            <p>Deben comunicarse al Compliance Officer situaciones como las siguientes:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-gold-deep">
              <li>Solicitudes de pago en efectivo, a cuentas de terceros o en paraísos fiscales.</li>
              <li>Comisiones desproporcionadas o solicitadas sin un servicio claro.</li>
              <li>Un intermediario recomendado por un funcionario o por un responsable del cliente con quien tiene una relación personal.</li>
              <li>Peticiones de plazas gratuitas, regalos o invitaciones a personas que deciden la contratación.</li>
              <li>Facturas con conceptos vagos o importes que no se corresponden con el servicio.</li>
            </ul>
          </Section>

          <Section id="formacion" title="12. Comunicación y formación">
            <p>
              La Empresa entrega esta Política a toda persona que se incorpore o colabore con ella y la pone a disposición de sus proveedores, clientes y socios. El Compliance Officer resolverá cualquier duda sobre su aplicación antes de actuar.
            </p>
          </Section>

          <Section id="denuncias" title="13. Comunicación de incumplimientos">
            <p>
              Cualquier persona puede comunicar, de buena fe y también de forma anónima, un posible incumplimiento de esta Política escribiendo a{" "}
              <a href={`mailto:${CHANNEL}`} className="underline decoration-gold-deep underline-offset-4">
                {CHANNEL}
              </a>{" "}
              con el asunto &quot;Compliance&quot;. La Empresa garantiza la confidencialidad y prohíbe cualquier represalia contra el informante, conforme a la Ley 2/2023.
            </p>
          </Section>

          <Section id="sanciones" title="14. Incumplimiento">
            <p>
              El incumplimiento de esta Política podrá dar lugar a medidas disciplinarias, a la resolución inmediata de los contratos con colaboradores, agentes o proveedores y a la comunicación de los hechos a las autoridades competentes.
            </p>
          </Section>

          <Section id="revision" title="15. Responsable, aprobación y revisión">
            <p>
              El responsable de la aplicación y supervisión de esta Política es el <strong>Compliance Officer</strong> de la Empresa, <strong>D. {OFFICER}</strong>. Esta Política ha sido aprobada por el Administrador Único de Ground Agents Solutions, S.L. el {APPROVED}, entra en vigor en esa fecha y se revisará al menos una vez al año.
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
