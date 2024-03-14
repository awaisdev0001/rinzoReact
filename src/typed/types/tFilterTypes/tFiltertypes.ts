export type tMenuNestedItem = {
  title: string;
  id: string;
  number: number;
};

export type tMenuItem = {
  title: string;
  id: string;
  hasRange?: boolean;
  hasSearch?: boolean;
  rangeColor?: string;
  items?: tMenuNestedItem[];
  hasHoverIcon?: boolean;
  hoverText?: string;
  isItems?: boolean;
  range?: number[];
};
