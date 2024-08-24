import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import * as styles from "./Workspace.css";

export default function Workspace() {
  return (
    <Card className={styles.Workspace}>
      <CardHeader>
        <CardTitle>Workspace</CardTitle>
        <CardDescription>Hell, Workspace</CardDescription>
      </CardHeader>
      <CardContent>Workspace</CardContent>
    </Card>
  );
}
