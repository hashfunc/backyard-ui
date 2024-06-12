import * as styles from "./RuleNode.css";

type Props = {
  name: string;
  priority: number;
  action: "ALLOW" | "ALERT" | "DENY";
  domain: {
    name: string;
    count: number;
  };
  status?: "NORMAL" | "ALLOW" | "DENY" | "PASS";
};

export default function RuleNode({
  name,
  action,
  priority,
  domain,
  status = "NORMAL",
}: Props) {
  return (
    <div className={styles.RuleNode({ status })}>
      <div className={styles.Header}>
        <div className={styles.Title}>Rule | {name}</div>
      </div>
      <div className={styles.Attribute}>
        <RuleAttribute title="Priority" value={priority} />
        <RuleAttribute title="Action" value={action} />
      </div>
      <div className={styles.Domain}>
        <div className={styles.Title}>Domain List | {domain.name}</div>
        <div>
          <span className={styles.DomainCount}>{domain.count}</span> domains
        </div>
      </div>
    </div>
  );
}

type RuleAttributeProps = {
  title: string;
  value: string | number;
};

function RuleAttribute({ title, value }: RuleAttributeProps) {
  return (
    <div>
      <div className={styles.AttributeTitle}>{title}</div>
      <div className={styles.AttributeValue}>{value}</div>
    </div>
  );
}
