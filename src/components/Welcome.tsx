import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import * as styels from "./Welcom.css";

export default function Welcome() {
  return (
    <div className={styels.PageLayout}>
      <div className={styels.Welcome}>
        <Card>
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
          </CardHeader>
          <CardContent>
            <p>backyard-ui</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
