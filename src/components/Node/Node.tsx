import * as styles from "./Node.css";

type Props = {
  title: string;
  attributes: TAttribute[];
  reference?: {
    title: string;
    contents: TReferenceContent[];
  };
  status?: "NORMAL" | "ALLOW" | "DENY" | "PASS";
};

type TAttribute = {
  title: string;
  value: string | number;
};

type TReferenceContent = {
  content: string | number;
  suffix?: string;
};

export default function Node({
  title,
  attributes,
  reference,
  status = "NORMAL",
}: Props) {
  return (
    <div className={styles.Node({ status })}>
      <div className={styles.Header}>{title}</div>
      <div className={styles.Attribute}>
        {attributes.map(({ title, value }: TAttribute) => {
          return <Attribute key={title} title={title} value={value} />;
        })}
      </div>
      {reference && (
        <div className={styles.Reference}>
          <div>{reference.title}</div>
          {reference.contents.map(({ content, suffix }: TReferenceContent) => {
            return (
              <Reference
                key={`${content}/${suffix}`}
                content={content}
                suffix={suffix}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

function Attribute({ title, value }: TAttribute) {
  return (
    <div>
      <div className={styles.AttributeTitle}>{title}</div>
      <div className={styles.AttributeValue}>{value}</div>
    </div>
  );
}

function Reference({ content, suffix }: TReferenceContent) {
  return (
    <div>
      <span className={styles.ReferenceContent}>{content}</span>
      {suffix}
    </div>
  );
}
