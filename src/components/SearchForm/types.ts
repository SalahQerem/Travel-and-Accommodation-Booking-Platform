export type CounterName = "adults" | "children" | "numberOfRooms";

export interface Counter {
  name: CounterName;
  label: string;
  min?: number;
}

export interface SearchFormProps {
  isInSearchPage?: boolean;
  isFetching?: boolean;
}
