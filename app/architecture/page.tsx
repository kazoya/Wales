import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

const items = [
  { title: "الواجهة", text: "هذه المنصة العربية: كتالوج، محرّك مبيعات، رسائل، تقييم. لا تسجيل عملاء حقيقيين في التجريب." },
  { title: "القرار", text: "السعر والعرض يبقيان بشريين. المنصة تقترح فقط." },
  { title: "البيانات", text: "لاحقاً: بطاقات عملاء وشهادات. اليوم: تخزين محلي للتقييم فقط." },
];

export default function ArchitecturePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="البنية المقترحة" description={siteConfig.nameAr} />
      {items.map((item) => (
        <Card key={item.title} className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">{item.text}</CardContent>
        </Card>
      ))}
    </div>
  );
}
