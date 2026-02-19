'use client';

import { HTMLAttributes } from 'react';

interface SkeletonLoaderProps extends HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  className?: string;
  rounded?: boolean;
}

export default function SkeletonLoader({ 
  width = 'w-full', 
  height = 'h-4', 
  className = '',
  rounded = false,
  ...props 
}: SkeletonLoaderProps) {
  return (
    <div
      className={`
        animate-pulse bg-gray-200 dark:bg-gray-700
        ${width}
        ${height}
        ${rounded ? 'rounded-full' : 'rounded'}
        ${className}
      `}
      {...props}
    />
  );
}

// Skeleton pour les cards avec le design du site
export function CardSkeleton() {
  return (
    <div className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
      <SkeletonLoader width="w-12 h-12" rounded className="mb-4" />
      <SkeletonLoader width="w-3/4 h-6 mb-2" />
      <SkeletonLoader width="w-full h-4 mb-2" />
      <SkeletonLoader width="w-5/6 h-4" />
    </div>
  );
}

// Skeleton pour les articles
export function ArticleSkeleton() {
  return (
    <div className="space-y-4">
      <SkeletonLoader width="w-full h-48 rounded-lg" />
      <SkeletonLoader width="w-3/4 h-6 mb-2" />
      <SkeletonLoader width="w-full h-4 mb-2" />
      <SkeletonLoader width="w-5/6 h-4 mb-2" />
      <SkeletonLoader width="w-4/5 h-4" />
    </div>
  );
}

// Skeleton pour les listes
export function ListItemSkeleton() {
  return (
    <div className="flex items-center gap-4 p-4">
      <SkeletonLoader width="w-10 h-10" rounded />
      <div className="flex-1 space-y-2">
        <SkeletonLoader width="w-1/3 h-4" />
        <SkeletonLoader width="w-2/3 h-3" />
      </div>
    </div>
  );
}
