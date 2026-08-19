import type { Bottleneck } from "@/types";

export const bottlenecks: Bottleneck[] = [
  {
    id: "b1",
    title: "الموقع لا يحوّل الزيارة طلباً",
    department: "marketing",
    description: "wales.jo — الموقع يخلط أسماء المجموعة. الكتالوج التفصيلي للموزّع غير ظاهر كطلب.",
    signalToInvestigate: "من يرد على النموذج/الهاتف خلال ساعة؟",
  },
  {
    id: "b2",
    title: "مدير المبيعات هو النظام",
    department: "sales",
    description: "الطلب يصل واتساباً أو مكالمة. لا طابور ظاهر ولا بطاقة متابعة. أي غياب شخصي يوقف الصفقة.",
    signalToInvestigate: "كم رسالة يومياً تُنسى بعد الدوام؟",
  },
  {
    id: "b3",
    title: "الكتالوج غير مربوط بمسار تسعير",
    department: "marketing",
    description: "مجال معلن: عناية شخصية ومنظفات وليبل خاص. التفاصيل الرقيقة لا تُختلق — المصدر أو الاعتذار.",
    signalToInvestigate: "هل توجد نشرة داخلية لكل خط؟",
  },
  {
    id: "b4",
    title: "السعر والعرض يبقيان بشريين — وهذا صحيح — لكن بلا مسار",
    department: "quality",
    description: "تشكيلة ليبل خاص للسوبرماركت لا تُسعَّر إلا باعتمادك",
    signalToInvestigate: "من يعتمد العرض النهائي اليوم؟ كم يستغرق؟",
  },
  {
    id: "b5",
    title: "لا مسار ظاهر لـ «ليبل خاص»",
    department: "schools",
    description: "المشتري يريد رفّاً باسمه لا باسم المصنع. المنصة تعرض التشكيلة وأنت تعتمد الهامش الموقع الحالي لا يُظهر هذا المسار كطابور.",
    signalToInvestigate: "أين تُحفظ طلبات هذا الأسبوع؟",
  },
];
