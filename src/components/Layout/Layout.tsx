import * as styles from "./Layout.css";

import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.Layout}>
      <div
        className={cn(
          styles.LayoutContent,
          "border",
          "rounded-lg",
          "shadow-sm",
        )}
      >
        {children}
      </div>
    </div>
  );
}
