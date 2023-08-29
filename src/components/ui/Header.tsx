import { PolkadotIcon } from "../Icons";
import ThemeSwitch from "./ThemeSwitch";

export function Header() {
  return (
    <div className="px-8 w-full flex items-start md:items-center justify-between sticky top-0 bg-background-default text-foreground-contrast py-6 md:py-10">
      <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
        <PolkadotIcon />
        <div className="h-6 w-[2px] bg-fill-separator hidden md:block" />
        <span className="text-lg md:text-xl font-unbounded font-medium">
          Asset Context Menu
        </span>
        <span className="text-lg md:text-xl font-unbounded">Demo</span>
      </div>
      <ThemeSwitch />
    </div>
  );
}
