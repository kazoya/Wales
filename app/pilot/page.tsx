import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

const weeks = [
  { t: "الأسبوع 1", d: "مراجعة ما هو منشور على الموقع + أرقام التواصل المعتمدة." },
  { t: "الأسبوع 2", d: "قائمة جهات تجريبية. رسالة واتساب موحّدة. اعتماد جملة الإغلاق." },
  { t: "الأسبوع 3–4", d: "تشغيل محرّك «ليبل خاص». عرض واحد معتمد يُرسل بشرياً." },
  { t: "الشهر 2", d: "التقاط طلب واتساب. نشرات عربية للخطوط المعلنة فقط." },
];

export default function PilotPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="خطة التنفيذ" description={`تجريب ضيق يمكن لـ ${siteConfig.recipient} قيادته.`} demo={false} />
      <HonestyNote>الخطة مقترح نقاش. المواعيد تُحدَّد بعد التقييم.</HonestyNote>
      {weeks.map((week) => (
        <Card key={week.t} className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">{week.t}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-muted-foreground">{week.d}</CardContent>
        </Card>
      ))}
      <SalesCallBar extra="خطة التنفيذ — نبدأ الأسبوع الأول بمكالمة اكتشاف" />
    </div>
  );
}
