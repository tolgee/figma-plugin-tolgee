import { EventHandler } from "@create-figma-plugin/utilities";

export interface SetupHandle extends EventHandler {
  name: "SETUP";
  handler: (config: Partial<TolgeeConfig>) => void;
}

export interface SetLanguageHandler extends EventHandler {
  name: "SET_LANGUAGE";
  handler: (language: string) => void;
}

export interface ConfigChangeHandler extends EventHandler {
  name: "CONFIG_CHANGE";
  handler: (config: Partial<TolgeeConfig>) => void;
}

export interface CloseHandler extends EventHandler {
  name: "CLOSE";
  handler: () => void;
}

export interface SyncCompleteHandler extends EventHandler {
  name: "SYNC_COMPLETE";
  handler: () => void;
}

export interface TranslationsUpdateHandler extends EventHandler {
  name: "UPDATE_NODES";
  handler: (nodes: Node[]) => void;
}

export interface ResizeHandler extends EventHandler {
  name: "RESIZE";
  handler: (size: WindowSize) => void;
}

export interface SelectionChangeHandler extends EventHandler {
  name: "SELECTION_CHANGE";
  handler: (data: Node[]) => void;
}

export interface Node {
  name: string;
  characters: string;
  id: string;
}

export interface TolgeeConfig extends Record<string, string> {
  apiUrl: string;
  apiKey: string;
  lang: string;
}
export interface FormattedNode {
  characters: string;
  id: string;
  name: string;
}

export type WindowSize = {
  width: number;
  height: number;
};
