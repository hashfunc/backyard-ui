import * as styles from "./Layout.css";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.Layout}>
      {children}
    </div>
  );
}
