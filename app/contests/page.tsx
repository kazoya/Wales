import { ContestBoard } from "@/components/contests/contest-board";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contestRules } from "@/data/contests";
import { siteConfig } from "@/lib/config";

export default function ContestsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        eyebrow="Sales engine"
        title={`محرّك ${siteConfig.engine} — الاقتراح يظهر والاعتماد بيدك`}
        description={siteConfig.promiseAr}
        demoLabel="جهات تجريبية"
      />
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {contestRules.map((rule) => (
          <Card key={rule.title} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{rule.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">{rule.text}</CardContent>
          </Card>
        ))}
      </div>
      <ContestBoard />
    </div>
  );
}
