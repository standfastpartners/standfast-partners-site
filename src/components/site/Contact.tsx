import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  firstName: z.string().trim().min(1, "Required").max(80),
  lastName: z.string().trim().min(1, "Required").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  area: z.string().min(1, "Please choose one").max(80),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

type FormValues = z.infer<typeof schema>;

export const Contact = () => {
  const { toast } = useToast();
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    // Placeholder: integrate Lovable Cloud or email service later.
    await new Promise((r) => setTimeout(r, 600));
    console.info("Contact form submission received");
    void values;
    setSent(true);
    reset();
    toast({ title: "Message sent", description: "We'll be in touch within one business day." });
  };

  const fieldClass =
    "bg-primary-foreground/5 border border-white/10 text-primary-foreground placeholder:text-primary-foreground/25 px-5 py-4 text-sm outline-none focus:border-gold/50 transition-colors w-full";
  const labelClass =
    "text-[10px] uppercase tracking-[0.18em] text-primary-foreground/55 mb-2 block";

  return (
    <section id="contact" className="bg-primary py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Left */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.22em] text-gold mb-4 block">
            Get in touch
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-primary-foreground leading-[1.05] mb-8">
            Let's talk about{" "}
            <em className="font-serif-italic text-gold">what matters.</em>
          </h2>
          <p className="text-base leading-[1.8] text-primary-foreground/70 mb-12 max-w-md">
            Tell us what you need built or solved. We'll tell you honestly whether we're the
            right partner, and what delivery would look like. No pitch. No pressure. Just a
            real conversation.
          </p>
          <div className="flex flex-col gap-5">
            <Detail label="Email" value="hello@standfast.partners" />
            <Detail label="Based in" value="Ireland · Working globally" />
          </div>
        </div>

        {/* Form */}
        <div>
          {sent ? (
            <div className="bg-gold/10 border border-gold/25 p-10 text-center">
              <p className="font-accent text-primary-foreground/85 text-base leading-relaxed">
                Thank you. We've received your message and will be in touch within one
                business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="First name" error={errors.firstName?.message} labelClass={labelClass}>
                  <input className={fieldClass} placeholder="Jane" {...register("firstName")} />
                </Field>
                <Field label="Last name" error={errors.lastName?.message} labelClass={labelClass}>
                  <input className={fieldClass} placeholder="Doe" {...register("lastName")} />
                </Field>
              </div>
              <Field label="Email address" error={errors.email?.message} labelClass={labelClass}>
                <input
                  type="email"
                  className={fieldClass}
                  placeholder="you@company.com"
                  {...register("email")}
                />
              </Field>
              <Field label="Company" error={errors.company?.message} labelClass={labelClass}>
                <input className={fieldClass} placeholder="Acme Inc." {...register("company")} />
              </Field>
              <Field label="What are you working on?" error={errors.area?.message} labelClass={labelClass}>
                <select className={fieldClass} defaultValue="" {...register("area")}>
                  <option value="" disabled>
                    Select a solution area
                  </option>
                  <option>AI Discovery</option>
                  <option>Strategy &amp; Architecture</option>
                  <option>AI Solutions &amp; Services</option>
                  <option>Support &amp; Training</option>
                  <option>Not sure yet — let's talk</option>
                </select>
              </Field>
              <Field label="Tell us about your challenge" error={errors.message?.message} labelClass={labelClass}>
                <textarea
                  rows={5}
                  className={fieldClass + " resize-none"}
                  placeholder="A short paragraph is plenty."
                  {...register("message")}
                />
              </Field>
              <div className="flex items-center justify-between mt-2 gap-4 flex-wrap">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-xs uppercase tracking-[0.16em] font-medium bg-gold text-gold-foreground px-10 py-4 hover:bg-gold/90 transition-colors disabled:opacity-60"
                >
                  {isSubmitting ? "Sending…" : "Send message"}
                </button>
                <span className="text-[11px] text-primary-foreground/35 tracking-wide">
                  We respond within one business day
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Detail = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center gap-4">
    <div className="w-9 h-9 border border-white/10 flex items-center justify-center flex-shrink-0">
      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
    </div>
    <div>
      <div className="text-[10px] uppercase tracking-[0.16em] text-primary-foreground/40 mb-1">
        {label}
      </div>
      <div className="text-sm text-primary-foreground/80">{value}</div>
    </div>
  </div>
);

const Field = ({
  label,
  error,
  labelClass,
  children,
}: {
  label: string;
  error?: string;
  labelClass: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col">
    <label className={labelClass}>{label}</label>
    {children}
    {error && <span className="text-[11px] text-destructive mt-1.5">{error}</span>}
  </div>
);
