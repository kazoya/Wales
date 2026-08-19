import Link from "next/link";
import { ArrowLeft, Globe2, ShieldCheck, Trophy, Workflow } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { HonestyNote } from "@/components/shared/demo-badge";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Button } from "@/components/ui/button";
import { getCompanyWebsiteUrl, siteConfig } from "@/lib/config";

const pillars = [
  { title: "ليبل خاص", text: "تشكيلة ليبل خاص للسوبرماركت لا تُسعَّر إلا باعتمادك" },
  { title: "قرار بشري", text: "لا سعر ولا عرض نهائي ولا ادعاء مواصفة يُنشر دون اعتماد المبيعات والجودة." },
  { title: "صنع في الأردن", text: "بستان الخير / الكفاءة الدولية — عناية شخصية ومنظفات وليبل خاص" },
];

export default function HomePage() {
  const website = getCompanyWebsiteUrl();
  return (
    <div className="candy-glow play-grid -mx-4 rounded-2xl px-4 py-4 sm:-mx-6 sm:px-6">
      <section className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gold/40 bg-primary px-5 py-8 text-primary-foreground shadow-lg sm:px-10 sm:py-12">
        <div className="animate-brand-rise flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <span className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl border border-gold/70 bg-white p-2">
            <BrandLogo alt={siteConfig.nameAr} priority />
          </span>
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase">
              {siteConfig.parentAr} · {siteConfig.cityDetailAr}
            </p>
            <h1 className="mt-2 font-heading text-[1.65rem] font-bold text-balance sm:text-4xl">
              المشتري يريد رفّاً باسمه لا باسم المصنع. المنصة تعرض التشكيلة وأنت تعتمد الهامش
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-primary-foreground/85 sm:text-base">
              هذا تصور مستقل ل{siteConfig.nameAr}. الهدف أن يتصل مدير المبيعات بعد رؤية المحتوى — لا أن نختلق أرقام إنتاج.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm font-medium text-gold">إلى عناية {siteConfig.recipient}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a href={website} target="_blank" rel="noreferrer" className="inline-flex cursor-pointer items-center gap-1.5 text-gold underline-offset-4 hover:underline">
            <Globe2 className="size-3.5" /> الموقع الرسمي
          </a>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="cursor-pointer bg-ochre text-primary hover:bg-gold">
            <Link href="/contests">تشغيل محرّك ليبل خاص <ArrowLeft /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="cursor-pointer border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
            <Link href="/marketing">رسائل تُغلق الصفقة</Link>
          </Button>
        </div>
      </section>
      <section className="mx-auto -mt-5 grid max-w-5xl gap-3 px-1 md:grid-cols-3">
        {pillars.map((item) => (
          <div key={item.title} className="prize-panel rounded-2xl px-4 py-5 shadow-md">
            <h2 className="font-heading text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-white/95">{item.text}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto mt-8 max-w-5xl">
        <HonestyNote>الموقع يخلط أسماء المجموعة. الكتالوج التفصيلي للموزّع غير ظاهر كطلب. أرقام اللوح تجريبية.</HonestyNote>
      </section>
      <section className="mx-auto mt-6 grid max-w-5xl gap-3 md:grid-cols-3">
        <Link href="/quality" className="cursor-pointer rounded-2xl border bg-card p-4 shadow-sm hover:border-gold/50">
          <ShieldCheck className="size-4 text-copper" />
          <p className="mt-2 font-medium">الجودة والصدق</p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">المصدر أو الاعتذار. لا نشرة مخترعة.</p>
        </Link>
        <Link href="/products" className="cursor-pointer rounded-2xl border bg-card p-4 shadow-sm hover:border-gold/50">
          <Workflow className="size-4 text-copper" />
          <p className="mt-2 font-medium">كتالوج كما نُشر</p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">من الموقع العلني فقط.</p>
        </Link>
        <Link href="/contests" className="cursor-pointer rounded-2xl border bg-card p-4 shadow-sm hover:border-gold/50">
          <Trophy className="size-4 text-copper" />
          <p className="mt-2 font-medium">ليبل خاص</p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">اقتراح يظهر — التنفيذ باعتماد بشري.</p>
        </Link>
      </section>
      <section className="mx-auto mt-6 max-w-5xl">
        <SalesCallBar extra={`شاهدت تصور ${siteConfig.nameAr} وأريد التجريب`} />
      </section>
    </div>
  );
}
