import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(120),
  company: z.string().trim().min(1, "Required").max(120),
  role: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
});

type FormValues = z.infer<typeof schema>;

interface Props {
  open: boolean;
  onClose: () => void;
}

export const FiresideInvite = ({ open, onClose }: Props) => {
  const { toast } = useToast();
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    console.info("Fireside invite request", values);
    setSent(true);
    reset();
    toast({
      title: "Request received",
      description: "We'll be in touch about Fireside.",
    });
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] bg-primary/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative bg-background max-w-lg w-full p-8 md:p-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-5 text-2xl text-primary/60 hover:text-primary"
        >
          ×
        </button>

        <span className="text-[10px] uppercase tracking-[0.22em] text-gold mb-3 block">
          Fireside · Invite only
        </span>
        <h3 className="font-display text-3xl md:text-4xl text-primary leading-[1.05] mb-4">
          Request an <span className="text-gold">invitation.</span>
        </h3>
        <p className="text-sm leading-[1.7] text-muted-foreground mb-6">
          Fireside is our annual outdoor thought leadership gathering for senior
          operators in retail, commerce, and consumer businesses. Strictly invite only.
          Tell us a little about you.
        </p>

        {sent ? (
          <div className="bg-gold/10 border border-gold/30 p-6 text-center">
            <p className="text-primary text-sm leading-relaxed">
              Thank you. We've received your request and will be in touch about
              Fireside.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <Field label="Full name" error={errors.name?.message}>
              <input className={inputClass} placeholder="Jane Doe" {...register("name")} />
            </Field>
            <Field label="Company" error={errors.company?.message}>
              <input className={inputClass} placeholder="Acme Inc." {...register("company")} />
            </Field>
            <Field label="Role" error={errors.role?.message}>
              <input className={inputClass} placeholder="CEO" {...register("role")} />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input
                type="email"
                className={inputClass}
                placeholder="you@company.com"
                {...register("email")}
              />
            </Field>
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-xs uppercase tracking-[0.16em] font-medium bg-gold text-gold-foreground px-8 py-4 hover:bg-gold/90 transition-colors disabled:opacity-60 mt-2"
            >
              {isSubmitting ? "Sending…" : "Request invitation"}
            </button>
            <span className="text-[11px] text-muted-foreground/70">
              Invitations are confirmed individually. No guarantees.
            </span>
          </form>
        )}
      </div>
    </div>
  );
};

const inputClass =
  "bg-secondary border border-border text-primary placeholder:text-primary/30 px-4 py-3 text-sm outline-none focus:border-gold transition-colors w-full";

const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col">
    <label className="text-[10px] uppercase tracking-[0.18em] text-primary/60 mb-1.5">
      {label}
    </label>
    {children}
    {error && <span className="text-[11px] text-destructive mt-1">{error}</span>}
  </div>
);
