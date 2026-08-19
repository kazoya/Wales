import { OpportunityGrid } from "@/components/shared/opportunity-grid";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { automationOpportunities } from "@/data/opportunities";
import { siteConfig } from "@/lib/config";

export default function AutomationPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="فرص الأتمتة"
        description={`نبدأ بما يغلق الصفقة هذا الشهر: واتساب، ${siteConfig.engine}، وكتالوج من المصدر.`}
      />
      <OpportunityGrid items={automationOpportunities} />
      <SalesCallBar extra="فرص الأتمتة — أريد تجريب التقاط طلب واتساب" />
    </div>
  );
}
