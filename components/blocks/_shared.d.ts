import { ComponentType } from 'react';

export type BlockProps<TData> = {
  data: TData
  parentField: string
}

export type BlockComponent<TData> = ComponentType<BlockProps<TData>>
