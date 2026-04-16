export type PanelType = {
  panelBackground: string;
  panelForeground?: string | Array<string>;
  dialogue?: string;
  options?: Array<Record<string, string>>;
  onOptionSelect?: (optionIndex: number) => void;
  activity?: React.ComponentType<any>;
  nextPanel?: string;
  playSound?: string;
  foregroundAnimation?: ((elem: Element) => void) | Array<(elem: Element) => void | null>;
  handleContinue?: () => void;
};
