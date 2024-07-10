export type NodeProperty<T> = {
  id: string;
  type: string;
  width: number;
  height: number;
  data: T;
};

export const metadata = {
  RuleGroup: {
    width: 300,
    height: 65,
  },
  Rule: {
    width: 300,
    height: 200,
  },
  VPC: {
    width: 300,
    height: 200,
  },
};
