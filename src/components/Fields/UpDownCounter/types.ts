export interface UpDownCounterProps {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  max?: number;
}
