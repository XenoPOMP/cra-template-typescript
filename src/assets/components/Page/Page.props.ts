import { ReactNode } from 'react';

export interface PageProps {
  meta: {
    pageTitle: string,
    pageDescription?: string,
    keywords: string,
  };
  children?: ReactNode;
}
