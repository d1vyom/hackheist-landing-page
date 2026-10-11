import {
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { event } from "@/lib/event";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  const Icon = diagonal ? ArrowUpRightIcon : ArrowRightIcon;
  return <Icon size={22} weight="regular" aria-hidden="true" />;
}

export function RegisterLink({ className = "" }: { className?: string }) {
  return (
    <a href={event.registrationHref} className={`register-link ${className}`}>
      Register Now <Arrow diagonal />
    </a>
  );
}
