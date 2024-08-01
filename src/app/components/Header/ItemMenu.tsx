import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface ItemMenuProps {
  url: string;
  title: string;
  hasDropdown?: boolean;
}
export function ItemMenu({ url, title, hasDropdown }: ItemMenuProps) {
  return (
    <Link href={url} className="hidden xl:flex items-center gap-2 font-semibold text-purple-900 transition-colors">
      {title} {hasDropdown && <ChevronDown className="text-red-500"/>}
    </Link>
  );
}
