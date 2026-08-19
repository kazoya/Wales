import type { WorkflowNode } from "@/types";

export const workflow: WorkflowNode[] = [
  {
    id: "w1",
    title: "الطلب يصل",
    currentProcess: "هاتف أو واتساب أو نموذج موقع.",
    requiredData: ["اسم الجهة", "الصنف المطلوب"],
    possibleBottleneck: "الرسالة تضيع في الدردشة.",
    automationOpportunity: "بطاقة طلب خلال خمس دقائق.",
    aiOpportunity: "تصنيف أولي للرسالة — بلا تسعير آلي.",
    kpi: "وقت التقاط الطلب",
    integration: "واتساب",
  },
  {
    id: "w2",
    title: "ليبل خاص",
    currentProcess: "المشتري يريد رفّاً باسمه لا باسم المصنع. المنصة تعرض التشكيلة وأنت تعتمد الهامش",
    requiredData: ["مسؤول الاعتماد"],
    possibleBottleneck: "لا مسار ظاهر للاعتماد.",
    automationOpportunity: "اقتراح يظهر — تنفيذ بشري.",
    aiOpportunity: "لا يُعتمد السعر آلياً.",
    kpi: "عروض بانتظار اعتماد",
    integration: "لوح المحرّك",
  },
  {
    id: "w3",
    title: "التسليم والمتابعة",
    currentProcess: "غير منشور تفصيلاً على الموقع.",
    requiredData: ["تأكيد الشحن/الزيارة"],
    possibleBottleneck: "المتابعة شخص واحد.",
    automationOpportunity: "تذكير واتساب بشري.",
    aiOpportunity: "لاحقاً بعد تاريخ طلبات حقيقي.",
    kpi: "طلبات مغلقة أسبوعياً",
    integration: "CRM تجريبي",
  },
];
