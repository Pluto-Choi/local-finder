import { categoryMeta, categoryStyle } from "../lib/categories";
import type { ServiceCategory } from "../lib/types";

export default function CategoryBadge({ category }: { category: ServiceCategory }) {
  const meta = categoryMeta(category);
  const style = categoryStyle(category);
  return (
    <span
      className={
        "inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold " +
        style.badge
      }
    >
      <span aria-hidden>{meta.emoji}</span>
      {meta.label}
    </span>
  );
}
