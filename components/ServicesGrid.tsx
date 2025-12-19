"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import type Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

type Service = {
  key: string;
  title: string;
  short: string;
  icon: string;
  detailsTitle: string;
  detailsText: string[];
};

const SERVICES: Service[] = [
  {
    key: "it-outsourcing",
    title: "IT Outsourcing",
    short:
      "Comprehensive technology services managed by our experts, allowing you to focus on your core business while we handle your IT needs.",
    icon: "/iconIToutsourcing.png",
    detailsTitle: "IT Outsourcing",
    detailsText: [
      "We handle your IT operations end-to-end, so your team can stay focused on the business.",
      "From support to infrastructure, we build a reliable, secure and scalable foundation.",
    ],
  },
  {
    key: "custom-software",
    title: "Custom Software Development",
    short:
      "Tailored software solutions designed to meet your business needs and drive efficiency.",
    icon: "/iconCustomsoftware.png",
    detailsTitle: "Custom Software Development",
    detailsText: [
      "We design and build custom applications aligned with your processes and growth strategy.",
      "Clean architecture, performance-first approach, and maintainable codebases.",
    ],
  },
  {
    key: "tech-consulting",
    title: "Technology Consulting",
    short:
      "Expert guidance to help you make the right technology decisions for sustainable growth.",
    icon: "/iconTechnology.png",
    detailsTitle: "Technology Consulting",
    detailsText: [
      "We help you choose the right stack, architecture, and roadmap.",
      "Decisions focused on delivery, cost, and long-term sustainability.",
    ],
  },
  {
    key: "system-integration",
    title: "System Integration",
    short:
      "Seamlessly connect your systems to improve workflows and boost productivity.",
    icon: "/iconSystem.png",
    detailsTitle: "System Integration",
    detailsText: [
      "We connect platforms, ERPs, CRMs and internal systems with reliable integrations.",
      "Less manual work, fewer errors, more visibility across operations.",
    ],
  },
  {
    key: "cloud-migration",
    title: "Cloud Migration",
    short:
      "Smooth transition of your applications and data to secure, scalable cloud environments.",
    icon: "/iconCloud.png",
    detailsTitle: "Cloud Migration",
    detailsText: [
      "We plan and execute migrations with minimal downtime.",
      "Your environment becomes scalable, resilient, and cost-optimized.",
    ],
  },
  {
    key: "support-maintenance",
    title: "Support & Maintenance",
    short:
      "Reliable technical support to keep your systems running at peak performance.",
    icon: "/iconSupport.png",
    detailsTitle: "Support & Maintenance",
    detailsText: [
      "We monitor, maintain and improve your systems continuously.",
      "Fast response, clear SLA options, and proactive improvements.",
    ],
  },
];

function chunk<T>(arr: T[], size: number) {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

type ScrollMode = "url" | "manual" | null;

export default function ServicesGrid() {
  const searchParams = useSearchParams();

  // ✅ activeKey controla qual card está “aberto” (seta/linha ativa/empurrão)
  const [activeKey, setActiveKey] = useState<string | null>(null);

  // ✅ renderKey controla qual conteúdo está renderizado no painel (pra animar o fechamento)
  const [renderKey, setRenderKey] = useState<string | null>(null);

  const [isClosing, setIsClosing] = useState(false);

  const rows = useMemo(() => chunk(SERVICES, 3), []);
  const activeRowIndex = useMemo(
    () => rows.findIndex((r) => r.some((s) => s.key === activeKey)),
    [rows, activeKey]
  );

  const activeService = useMemo(
    () => SERVICES.find((s) => s.key === activeKey) ?? null,
    [activeKey]
  );

  const renderService = useMemo(
    () => SERVICES.find((s) => s.key === renderKey) ?? null,
    [renderKey]
  );

  const contentRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const [height, setHeight] = useState(0);

  // marca se vai auto-scroll (url/manual)
  const scrollModeRef = useRef<ScrollMode>(null);

  const CLOSE_MS = 800; // tem que bater com duration do height transition (800ms)

  function openService(key: string, mode: Exclude<ScrollMode, null>) {
    // abrindo: renderiza e ativa
    setIsClosing(false);
    setRenderKey(key);
    setActiveKey(key);
    scrollModeRef.current = mode;
  }

  function closeService() {
    if (!activeKey) return;

    // fecha com animação: primeiro recolhe, depois limpa
    setIsClosing(true);
    scrollModeRef.current = null; // nunca rolar ao fechar
    setHeight(0);

    window.setTimeout(() => {
      setActiveKey(null);
      setRenderKey(null);
      setIsClosing(false);
    }, CLOSE_MS);
  }

  // abre via URL (?open=...)
  useEffect(() => {
    const open = searchParams.get("open");
    if (!open) return;

    const exists = SERVICES.some((s) => s.key === open);
    if (!exists) return;

    openService(open, "url");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // mede altura quando renderKey muda (abrindo)
  useEffect(() => {
    if (!renderService || !contentRef.current) return;
    if (isClosing) return;

    // mede depois do paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!contentRef.current) return;
        setHeight(contentRef.current.scrollHeight);
      });
    });
  }, [renderService, isClosing]);

  // scroll suave (Lenis) até o DETALHAMENTO ao abrir
  useEffect(() => {
    if (!renderService) return;
    if (!panelRef.current) return;
    if (!scrollModeRef.current) return;

    const mode = scrollModeRef.current;
    const lenis = window.__lenis;

    const delay = mode === "manual" ? 260 : 110; // manual mais “cinema”
    const duration = mode === "manual" ? 1.25 : 0.95;

    const t = window.setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(panelRef.current as HTMLElement, {
          offset: -120,
          duration,
          immediate: false,
        });
      } else {
        const rect = panelRef.current!.getBoundingClientRect();
        const top = window.scrollY + rect.top - 120;
        window.scrollTo({ top, behavior: "smooth" });
      }

      scrollModeRef.current = null;
    }, delay);

    return () => window.clearTimeout(t);
  }, [renderService, height]);

  return (
    <section className="w-full bg-white py-20 md:py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rows.map((row, rowIndex) => {
            const isActiveRow = rowIndex === activeRowIndex;
            const pushDown = activeRowIndex !== -1 && rowIndex > activeRowIndex;

            return (
              <div
                key={rowIndex}
                className={`contents transition-transform duration-[800ms] ease-[cubic-bezier(.22,1,.36,1)]
                  ${pushDown ? "translate-y-[160px]" : "translate-y-0"}`}
              >
                {row.map((s) => {
                  const isActive = s.key === activeKey;

                  return (
                    <div
                      key={s.key}
                      className="relative rounded-[28px] min-h-[330px] bg-[#070B2A]
                        shadow-[0_14px_35px_rgba(0,0,0,0.18)]
                        transition-all duration-200 hover:-translate-y-[2px]"
                    >
                      <div className="px-10 pt-10 pb-8 flex flex-col h-full">
                        <div className="h-[92px] flex justify-center">
                          <Image src={s.icon} alt={s.title} width={96} height={96} />
                        </div>

                        <h3 className="mt-6 text-white text-[15px] font-extrabold text-center">
                          {s.title}
                        </h3>

                        <p className="mt-4 text-white/75 text-[12px] text-center leading-relaxed">
                          {s.short}
                        </p>

                        <button
                          type="button"
                          onMouseDown={(e) => e.preventDefault()} // evita focus scroll
                          onClick={(e) => {
                            // blur ao clicar com mouse (remove “puxão” de foco)
                            if ((e as any).detail > 0) (e.currentTarget as HTMLButtonElement).blur();

                            if (isActive) {
                              closeService();
                            } else {
                              openService(s.key, "manual");
                            }
                          }}
                          className="mt-auto mx-auto text-white text-[34px]
                            transition-transform duration-300 hover:scale-[1.12]"
                          aria-label={isActive ? "Close details" : "Open details"}
                        >
                          <span
                            className={`inline-block transition-transform duration-300 ${
                              isActive ? "rotate-90" : ""
                            }`}
                          >
                            →
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                })}

                {/* painel só na linha ativa */}
                <div className="hidden lg:block lg:col-span-3">
                  {isActiveRow && (
                    <div
                      ref={panelRef}
                      className="overflow-hidden rounded-[28px]
                        transition-[height] duration-[800ms]
                        ease-[cubic-bezier(.22,1,.36,1)]"
                      style={{ height }}
                    >
                      <div
                        ref={contentRef}
                        className="bg-[#070B2A] px-10 py-10
                          transition-[opacity,transform] duration-[500ms]
                          ease-[cubic-bezier(.22,1,.36,1)]"
                        style={{
                          //  animar entrada e saída
                          opacity: renderService && !isClosing ? 1 : 0,
                          transform: renderService && !isClosing ? "translateY(0)" : "translateY(-16px)",
                        }}
                      >
                        {renderService && (
                          <>
                            <h4 className="text-white text-2xl font-extrabold">
                              {renderService.detailsTitle}
                            </h4>

                            <div className="mt-5 space-y-4 text-white/80">
                              {renderService.detailsText.map((t, i) => (
                                <p key={i}>{t}</p>
                              ))}
                            </div>

                            <Link
                              href="/contact"
                              className="inline-block mt-8 px-8 py-3 bg-white text-[#0B0B23] rounded-xl font-semibold"
                            >
                              Talk to Us
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
