import type { ReadinessRow } from "@/types";

export const readiness: ReadinessRow[] = [
  { source: "موقع wales.jo", exists: "yes", digital: "yes", structured: "partial", historicalDepth: "غير معروف", api: "unknown", aiReadiness: "نصوص عامة فقط" },
  { source: "واتساب المبيعات", exists: "yes", digital: "partial", structured: "no", historicalDepth: "غير معروف", api: "no", aiReadiness: "يحتاج أرشفة" },
  { source: "قائمة العملاء", exists: "unknown", digital: "unknown", structured: "unknown", historicalDepth: "غير معروف", api: "unknown", aiReadiness: "اكتشاف" },
];
