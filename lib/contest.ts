import type { ContestProposal, ContestSchool } from "@/types";

export const WRAPPER_PRIZE_THRESHOLD = 80;
export const CARTON_NUDGE_THRESHOLD = 8;

export function proposeContest(school: ContestSchool): ContestProposal {
  if (school.wrappers >= WRAPPER_PRIZE_THRESHOLD && school.status !== "نشطة") {
    return {
      schoolId: school.id,
      action: "prize",
      prize: "عرض/إجراء مقترح ضمن «ليبل خاص» — لا يُنفَّذ إلا بعد اعتماد مدير المبيعات",
      reasons: [
        `جُمعت ${school.wrappers} نقطة تجريبية — فوق عتبة الاقتراح.`,
        "التنفيذ لا يتم إلا بعد اعتماد بشري.",
      ],
      requiresApproval: true,
    };
  }
  if (school.lastOrderCartons < CARTON_NUDGE_THRESHOLD) {
    return {
      schoolId: school.id,
      action: "nudge",
      prize: "تذكير واتساب بشري بمتابعة الطلب",
      reasons: [
        `آخر كمية ${school.lastOrderCartons} — أقل من حد التفعيل التجريبي.`,
        "الرسالة تُقترح هنا، والإرسال يبقى من واتساب المبيعات.",
      ],
      requiresApproval: true,
    };
  }
  return {
    schoolId: school.id,
    action: "hold",
    prize: "الاستمرار في المتابعة دون عرض هذا الأسبوع",
    reasons: ["المشاركة منتظمة. لا عرض مبكر حتى لا يُفرَّغ الهامش."],
    requiresApproval: true,
  };
}
