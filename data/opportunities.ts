import type { OpportunityCard } from "@/types";

export const automationOpportunities: OpportunityCard[] = [
  {
    id: "a1",
    title: "التقاط طلب واتساب",
    summary: "كل رسالة تصبح بطاقة: جهة، صنف، كمية، وحالة اعتماد السعر.",
    impact: "high",
    requiredData: ["رقم واتساب المبيعات", "قائمة أصناف معلنة"],
    difficulty: "low",
    dependencies: ["اعتماد بشري للسعر"],
    pilotFit: "strong",
  },
  {
    id: "a2",
    title: "محرّك ليبل خاص",
    summary: "تشكيلة ليبل خاص للسوبرماركت لا تُسعَّر إلا باعتمادك",
    impact: "high",
    requiredData: ["عتبة تجريبية", "مسؤول الاعتماد"],
    difficulty: "medium",
    dependencies: ["قرار مدير المبيعات"],
    pilotFit: "strong",
  },
  {
    id: "a3",
    title: "كتالوج عربي من المصدر فقط",
    summary: "نشرة قصيرة لكل خط معلن. الأصناف الرقيقة تُوسم رقيقة.",
    impact: "medium",
    requiredData: ["https://wales.jo/"],
    difficulty: "low",
    dependencies: [],
    pilotFit: "possible",
  },
];

export const aiOpportunities: OpportunityCard[] = [
  {
    id: "i1",
    title: "مساعد معرفة من الموقع",
    summary: "يجيب من الصفحات المنشورة ويعتذر إن غاب المصدر.",
    impact: "medium",
    requiredData: ["نصوص الموقع"],
    difficulty: "medium",
    dependencies: ["لا تعديل ادعاء مواصفة من الدردشة"],
    pilotFit: "possible",
    readiness: "available_now",
  },
];
