import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

const items = [
  { title: "جملة الإغلاق", text: "المشتري يريد رفّاً باسمه لا باسم المصنع. المنصة تعرض التشكيلة وأنت تعتمد الهامش" },
  { title: "ما يدرَّب عليه المندوب", text: "يعيد الوعد كما هو: تشكيلة ليبل خاص للسوبرماركت لا تُسعَّر إلا باعتمادك ثم يحول الرسالة بطاقة." },
  { title: "ما لا يُقال", text: "لا طاقة إنتاج ولا شهادات ولا أسعار إن لم تُعتمد. المصدر أو الاعتذار." },
];

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="تمكين الفريق" description={siteConfig.engine} demo={false} />
      <HonestyNote>التدريب هنا على جملة صادقة ومسار اعتماد، لا على حفظ كتالوج مخترع.</HonestyNote>
      {items.map((item) => (
        <Card key={item.title} className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">{item.text}</CardContent>
        </Card>
      ))}
      <SalesCallBar extra="تمكين الفريق — أريد تدريب المندوبين على الجملة" />
    </div>
  );
}
