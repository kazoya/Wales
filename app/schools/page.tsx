import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { salesScripts } from "@/data/scripts";
import { siteConfig } from "@/lib/config";

export default function ChannelPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        title={`قناة ${siteConfig.engine}`}
        description="المشتري هنا ليس زبوناً عشوائياً على الرف. له جملة، وطلب، واعتماد سعر."
      />
      <HonestyNote>لا قائمة عملاء حقيقية في هذا التصور. التجريب يبدأ بجهات تجريبية.</HonestyNote>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">لماذا تُغلق المكالمة</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm leading-7 text-muted-foreground">
          <p>1) {siteConfig.hero}</p>
          <p>2) {siteConfig.promiseAr}</p>
          <p>3) الاقتراح يظهر هنا والتنفيذ يبقى بيدك.</p>
          <p>4) شركة أردنية يمكن الاتصال بها اليوم.</p>
        </CardContent>
      </Card>
      <div className="grid gap-4">
        {salesScripts.map((script) => (
          <Card key={script.id} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{script.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-7 text-muted-foreground">
              <p>{script.opener}</p>
              <p>{script.ask}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <SalesCallBar extra={`قناة ${siteConfig.engine} — أرسل قائمة جهات للتجريب`} />
    </div>
  );
}
