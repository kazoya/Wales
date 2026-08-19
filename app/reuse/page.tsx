import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const uses = [
  { title: "الطلب لا يضيع", text: "الرسالة تتحول بطاقة. المتابعة لا تعتمد على ذاكرة شخص واحد." },
  { title: "العرض يبقى بيدك", text: "تشكيلة ليبل خاص للسوبرماركت لا تُسعَّر إلا باعتمادك" },
  { title: "العلاقة تتكرر", text: "بعد التسليم تبقى بطاقة الجهة جاهزة للطلب التالي." },
];

export default function ReusePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title="ما يبقى بعد الصفقة" description="الاستدامة هنا تشغيلية: طلب متكرر بلا فوضى دردشة." demo={false} />
      <HonestyNote>لا نختلق أثراً بيئياً أو اجتماعياً إن لم يُعلن على الموقع.</HonestyNote>
      <div className="grid gap-4 md:grid-cols-3">
        {uses.map((use) => (
          <Card key={use.title} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{use.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">{use.text}</CardContent>
          </Card>
        ))}
      </div>
      <SalesCallBar extra="المتابعة — أريد تجريب بطاقة الطلب المتكرر" />
    </div>
  );
}
