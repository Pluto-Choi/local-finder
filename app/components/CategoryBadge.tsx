import { categoryMeta } from "../lib/categories";
import type { ServiceCategory } from "../lib/types";

export default function CategoryBadge({ category }: { category: ServiceCategory }) {
  const meta = categoryMeta(category);
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300">
      <span aria-hidden>{meta.emoji}</span>
      {meta.label}
    </span>
  );
}
