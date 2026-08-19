import Link from "next/link";
import { HonestyNote } from "@/components/shared/demo-badge";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

export default function OverviewPage() {
  const layers = [
    {
      title: "ما نعرفه علناً",
      items: [siteConfig.parentAr, siteConfig.industry, siteConfig.addressAr, "واتساب وبريد حسب البطاقة/الموقع"],
    },
    {
      title: "ما لا نعرفه بعد",
      items: ["طاقة الخطوط الداخلية", "خريطة العملاء الحقيقية", "من يعتمد السعر يومياً", "أنظمة غير ظاهرة للزائر"],
    },
    {
      title: "ماذا نقترح",
      items: ["التقاط واتساب", siteConfig.engine, "كتالوج عربي من المصدر", "اعتماد بشري للسعر"],
    },
  ];
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        eyebrow="Executive brief"
        title={`تصور تنفيذي: ${siteConfig.nameAr}`}
        description={siteConfig.hero}
      />
      <HonestyNote>{siteConfig.gap}</HonestyNote>
      <div className="grid gap-4 md:grid-cols-3">
        {layers.map((layer) => (
          <Card key={layer.title} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{layer.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pr-4 text-sm leading-7 text-muted-foreground">
                {layer.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <HumanInTheLoop />
      <SalesCallBar extra="التصور التنفيذي — أريد بدء التجريب" />
      <div className="flex flex-wrap gap-2">
        <Button asChild className="cursor-pointer">
          <Link href="/contests">المحرّك</Link>
        </Button>
        <Button asChild variant="outline" className="cursor-pointer">
          <Link href="/assessment">الاكتشاف</Link>
        </Button>
      </div>
    </div>
  );
}
