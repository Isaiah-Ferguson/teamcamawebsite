"use client";

import Dialog from "./Dialog";
import ClassSchedule from "./ClassSchedule";

export default function ScheduleModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  return <Dialog title="Class schedule" onClose={onClose} wide><div className="p-5 sm:p-7"><ClassSchedule /></div></Dialog>;
}
