import { HonestyNote } from "@/components/shared/demo-badge";
import { HumanInTheLoop } from "@/components/shared/human-loop";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

const claims = [
  { title: "المصدر أو الاعتذار", text: "لا نشرة صنف إن لم تُنشر. الصفحات الرقيقة تُعلن رقيقة." },
  { title: "المواصفة بشرية", text: "أي ادعاء جودة أو مطابقة يمر على الاعتماد قبل أن يُرسل للعميل." },
  { title: "صنع في الأردن", text: "جملة الإغلاق: مصنع/شركة أردنية يمكن التواصل معها اليوم — لا وكيل مجهول." },
];

export default function QualityPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        eyebrow="Trust"
        title="الصدق يبيع أسرع من المبالغة"
        description={siteConfig.promiseAr}
        demo={false}
      />
      <HonestyNote>{siteConfig.gap}</HonestyNote>
      <div className="grid gap-4">
        {claims.map((claim) => (
          <Card key={claim.title} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{claim.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">{claim.text}</CardContent>
          </Card>
        ))}
      </div>
      <HumanInTheLoop />
      <SalesCallBar extra="الجودة — أريد ورقة المواصفة المعتمدة قبل الإرسال" />
    </div>
  );
}
