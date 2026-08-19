import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

export default function CompanyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        eyebrow="Company"
        title={`${siteConfig.parentAr} — ${siteConfig.nameAr}`}
        description={siteConfig.industry}
        demo={false}
      />
      <HonestyNote>
        الربط بين الاسم التجاري والشركة الأم كما ظهر في الفحص العام. لا تفاصيل مالية مخترعة.
      </HonestyNote>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">{siteConfig.parentAr}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-7 text-muted-foreground">
          <p>{siteConfig.promiseAr}</p>
          <p>المشتري يريد رفّاً باسمه لا باسم المصنع. المنصة تعرض التشكيلة وأنت تعتمد الهامش</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{siteConfig.city}</Badge>
            <Badge variant="secondary">صنع في الأردن</Badge>
          </div>
        </CardContent>
      </Card>
      <SalesCallBar extra="الشركة — أريد زيارة أو مكالمة اكتشاف" />
    </div>
  );
}
