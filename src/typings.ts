export type VariadicBooleanFn = (...args: any[]) => boolean;
export type Json = object | any[] | null;

export type Shrinkpack = (options: { decompress: boolean; projectPath: string }) => Promise<void>;

export interface IShrinkwrapIndex {
  [name: string]: IShrinkwrap;
}

export interface IShrinkwrap {
  bundled: boolean;
  dependencies: IShrinkwrapIndex;
  dev: boolean;
  integrity: string;
  optional: boolean;
  requires: { [name: string]: string };
  resolved: string;
  version: string;
}

export interface IPackage {
  key: string;
  node: IShrinkwrap;
}

export interface IShrinkwrapFragmentIndex {
  [name: string]: IShrinkwrapFragment;
}

export interface IShrinkwrapFragment {
  dependencies: IShrinkwrapFragmentIndex;
  from: string;
  name: string;
  resolved: string;
  version: string;
}

export interface IFragment {
  key: string;
  node: IShrinkwrapFragment;
}

export interface ILockfilePointer {
  data: IShrinkwrap;
  filePath: string;
}