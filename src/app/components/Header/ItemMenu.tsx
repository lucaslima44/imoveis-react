import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface ItemMenuProps {
  url: string;
  title: string;
  hasDropdown?: boolean;
}
export function ItemMenu({ url, title, hasDropdown }: ItemMenuProps) {
  return (
    <div>
      <Link
        href={url}
        className="hidden xl:flex items-center gap-2 font-semibold xl:text-xs text-purple-900 hover:opacity-90 hover:text-purple-700 "
      >
        {title} {hasDropdown && <ChevronDown className="text-gray-700" />}
      </Link>
    </div>
  );
}
