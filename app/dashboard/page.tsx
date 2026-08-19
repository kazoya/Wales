import { BarCompare } from "@/components/charts/bar-compare";
import { TrendChart } from "@/components/charts/trend-chart";
import { HonestyNote } from "@/components/shared/demo-badge";
import { KpiCard } from "@/components/shared/kpi-card";
import { PageHeader } from "@/components/shared/page-header";
import { SalesCallBar } from "@/components/shared/sales-call-bar";
import { siteConfig } from "@/lib/config";

const trend = [
  { m: "1", accounts: 2, orders: 8 },
  { m: "2", accounts: 4, orders: 18 },
  { m: "3", accounts: 7, orders: 31 },
  { m: "4", accounts: 12, orders: 54 },
];

const bars = [
  { ch: "واتساب", n: 40 },
  { ch: "هاتف", n: 28 },
  { ch: "موقع", n: 22 },
  { ch: "زيارة", n: 10 },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader title="لوحة القيادة" description={`مؤشرات تجريبية لشكل المتابعة — ${siteConfig.nameAr}.`} />
      <HonestyNote>كل رقم هنا افتراضي. لا نملأ أصفار الموقع تخميناً.</HonestyNote>
      <div className="grid gap-3 md:grid-cols-4">
        <KpiCard label="جهات تجريبية" value={12} delta="تجريبي" />
        <KpiCard label="عروض بانتظار اعتماد" value={2} />
        <KpiCard label="طلبات واتساب مفتوحة" value={9} />
        <KpiCard label="خطوط كتالوج معلنة" value="—" hint="من الموقع فقط" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-4">
          <p className="mb-2 text-sm font-medium">نمو الجهات والطلبات — سيناريو</p>
          <TrendChart
            data={trend}
            xKey="m"
            series={[
              { key: "accounts", name: "جهات", color: "#be185d" },
              { key: "orders", name: "طلبات", color: "#f59e0b" },
            ]}
          />
        </div>
        <div className="rounded-xl border bg-card p-4">
          <p className="mb-2 text-sm font-medium">مزيج القنوات — سيناريو ٪</p>
          <BarCompare data={bars} xKey="ch" yKey="n" />
        </div>
      </div>
      <SalesCallBar extra="لوحة القيادة — أريد أرقامنا الحقيقية بدل التجريبي" />
    </div>
  );
}
