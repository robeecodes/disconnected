export type PanelType = {
  panelBackground: string;
  panelForeground: string | Array<string>;
  dialogue?: string;
  options?: Array<Record<string, string>>;
  onOptionSelect?: (optionIndex: number) => void;
  activity?: React.ComponentType<any>;
  nextPanel?: string;
  entryAnimation?: string;
  handleContinue?: () => void;
};
