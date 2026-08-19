import type { ContestSchool } from "@/types";

export const contestSchools: ContestSchool[] = [
  { id: "s1", name: "جهة تجريبية أ — عمّان", type: "مدرسة", city: "عمّان", wrappers: 120, lastOrderCartons: 14, coordinator: "منسّق أ", status: "جاهزة للجائزة" },
  { id: "s2", name: "جهة تجريبية ب — الزرقاء", type: "روضة", city: "الزرقاء", wrappers: 88, lastOrderCartons: 6, coordinator: "منسّق ب", status: "بانتظار الاعتماد" },
  { id: "s3", name: "جهة تجريبية ج — إربد", type: "مدرسة", city: "إربد", wrappers: 40, lastOrderCartons: 3, coordinator: "منسّق ج", status: "نشطة" },
];

export const contestRules = [
  { title: "التسجيل", text: "التسجيل من واتساب المبيعات. تُفتح بطاقة ليبل خاص." },
  { title: "العدّ", text: "كل طلب أو زيارة تُسجَّل كنقاط تجريبية في هذا اللوح." },
  { title: "العتبة", text: "عند العتبة يُقترح إجراء (عرض، جائزة تجارية، زيارة). لا يُنفَّذ إلا باعتماد مدير المبيعات." },
  { title: "البيع", text: "تشكيلة ليبل خاص للسوبرماركت لا تُسعَّر إلا باعتمادك" },
  { title: "الصدق", text: "الموقع يخلط أسماء المجموعة. الكتالوج التفصيلي للموزّع غير ظاهر كطلب." },
];
