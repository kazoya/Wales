import { HonestyNote } from "@/components/shared/demo-badge";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/data/products";
import { siteConfig } from "@/lib/config";

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title={`كتالوج ${siteConfig.nameAr} كما نُشر`}
        description="نفرق بين ما نُشر بوضوح وما هو رقيق. لا نختلق فرقاً تسويقياً لصنف غير مفصّل."
      />
      <HonestyNote>{siteConfig.gap}</HonestyNote>
      <div className="grid gap-4 md:grid-cols-2">
        {products.map((product) => (
          <Card key={product.id} className="shadow-sm">
            <CardHeader>
              <div className="flex flex-wrap gap-2">
                <Badge>{siteConfig.industry}</Badge>
                <Badge variant={product.contentStatus === "published" ? "secondary" : "outline"}>
                  {product.contentStatus === "published" ? "وصف منشور" : "محتوى رقيق"}
                </Badge>
              </div>
              <CardTitle className="text-base">
                {product.nameAr} 
                <span className="text-sm font-normal text-muted-foreground" dir="ltr">
                  {product.nameEn}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-7 text-muted-foreground">
              <p>{product.notes}</p>
              <a href={product.sourceUrl} className="text-copper underline-offset-4 hover:underline" target="_blank" rel="noreferrer">
                المصدر
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
      <SalesCallBar extra="الكتالوج — أريد نشرة عربية لكل خط معلن" />
    </div>
  );
}
