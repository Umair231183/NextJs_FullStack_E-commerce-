// swr-provider.tsx
'use client';
import { SWRConfig } from 'swr';

export function SWRProvider({ children, value }:any) {
  return <SWRConfig value={value}>{children}</SWRConfig>;
}
