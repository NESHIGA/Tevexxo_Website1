import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <span className={cn('relative inline-flex aspect-square', className)}>
      <Image
        src="/tevexxo-logo.svg"
        alt="Tevexxo logo"
        fill
        priority={priority}
        className="object-contain"
        sizes="48px"
      />
    </span>
  );
}

export function Brand({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <Logo className="h-8 w-8" />
      <span
        className={cn(
          'text-lg font-extrabold tracking-tight',
          light ? 'text-white' : 'text-slate-950',
        )}
      >
        Tevexxo
      </span>
    </span>
  );
}
