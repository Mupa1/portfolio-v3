"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle,
  Mail,
  MessageSquare,
  Send,
  User,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trackFormSubmission } from "@/lib/analytics";
import { ContactFormValidation } from "@/lib/validations/contact";

type ServerState = {
  submitting: boolean;
  status?: {
    ok: boolean;
    msg: string;
  };
};

const Contact = () => {
  const t = useTranslations();
  const [serverState, setServerState] = useState<ServerState>({
    submitting: false,
  });

  // Helper function to safely get validation error messages
  const getValidationError = (errorKey: string | undefined): string => {
    if (!errorKey) return "";
    try {
      const translationKey = `Contact.validation.${errorKey}`;
      return t(translationKey as Parameters<typeof t>[0]);
    } catch {
      return errorKey;
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof ContactFormValidation>>({
    resolver: zodResolver(ContactFormValidation),
    mode: "onBlur", // Validate on blur for better UX
  });

  const handleServerResponse = (
    ok: boolean,
    msg: string,
    form?: HTMLFormElement | null
  ) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form?.reset();
    }
  };

  const onSubmit = async (data: z.infer<typeof ContactFormValidation>) => {
    setServerState({ submitting: true });

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    try {
      const response = await fetch("https://formspree.io/maypayal", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        await response.json();
        reset();
        trackFormSubmission("contact_form");
        handleServerResponse(true, t("Contact.success"), null);
      } else {
        const data = await response.json();
        throw new Error(data.error || t("Contact.error"));
      }
    } catch (err) {
      if (err instanceof Error) {
        handleServerResponse(false, err.message || t("Contact.error"), null);
      } else {
        handleServerResponse(false, t("Contact.error"), null);
      }
    }
  };

  return (
    <section
      id="contact"
      className="flex-center min-h-screen w-full snap-start snap-always py-12 sm:py-20"
      aria-labelledby="contact-title"
    >
      <div className="w-full max-w-7xl">
        <div className="section-padding-x mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 text-center sm:mb-16"
          >
            <h3 id="contact-title">{t("contact")}</h3>
            <p className="mx-auto max-w-2xl px-4 text-neutral-700 dark:text-foreground-dark-secondary sm:px-6">
              {t("Contact.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-2xl"
          >
            <div className="bg-neutral-50 rounded-3xl border border-neutral-200 p-6 shadow-2xl shadow-primary-500/10 dark:border-border-dark/50 dark:bg-background-dark-secondary/70 dark:shadow-primary-500/10 sm:p-8">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                aria-label={t("Accessibility.contactForm")}
                noValidate
                aria-describedby="contact-form-description"
              >
                <p id="contact-form-description" className="sr-only">
                  {t("Accessibility.contactFormDescription")}
                </p>
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-foreground-dark-secondary"
                  >
                          <User className="icon-sm" aria-hidden="true" />
                    {t("Contact.name")}
                    <span className="text-destructive" aria-label={t("Accessibility.required")}>
                      *
                    </span>
                  </label>
                  <div>
                    <Input
                      id="name"
                      type="text"
                      {...register("name")}
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className="bg-white min-h-[44px] border border-neutral-300 px-4 shadow-sm transition-all duration-200 focus:border-primary-600 focus:shadow-md focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:border-border-dark/50 dark:bg-background-dark-muted/80 dark:focus:border-primary-400 dark:focus-visible:ring-offset-background-dark"
                      placeholder={t("Contact.name")}
                      autoComplete="name"
                    />
                  </div>
                  {errors.name && (
                    <motion.p
                      id="name-error"
                      role="alert"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 text-sm text-destructive"
                    >
                            <XCircle className="icon-sm" aria-hidden="true" />
                      {getValidationError(errors.name.message)}
                    </motion.p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-foreground-dark-secondary"
                  >
                          <Mail className="icon-sm" aria-hidden="true" />
                    {t("Contact.email")}
                    <span className="text-destructive" aria-label={t("Accessibility.required")}>
                      *
                    </span>
                  </label>
                  <div>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      autoComplete="email"
                      className="bg-white min-h-[44px] border border-neutral-300 px-4 shadow-sm transition-all duration-200 focus:border-primary-600 focus:shadow-md focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:border-border-dark/50 dark:bg-background-dark-muted/80 dark:focus:border-primary-400 dark:focus-visible:ring-offset-background-dark"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errors.email && (
                    <motion.p
                      id="email-error"
                      role="alert"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 text-sm text-destructive"
                    >
                            <XCircle className="icon-sm" aria-hidden="true" />
                      {getValidationError(errors.email.message)}
                    </motion.p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-foreground-dark-secondary"
                  >
                          <MessageSquare className="icon-sm" aria-hidden="true" />
                    {t("Contact.message")}
                    <span className="text-destructive" aria-label={t("Accessibility.required")}>
                      *
                    </span>
                  </label>
                  <div>
                    <Textarea
                      id="message"
                      {...register("message")}
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className="bg-white min-h-[120px] border border-neutral-300 px-4 py-3 shadow-sm transition-all duration-200 focus:border-primary-600 focus:shadow-md focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:border-border-dark/50 dark:bg-background-dark-muted/80 dark:focus:border-primary-400 dark:focus-visible:ring-offset-background-dark"
                      placeholder={t("Contact.message")}
                      rows={6}
                    />
                  </div>
                  {errors.message && (
                    <motion.p
                      id="message-error"
                      role="alert"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 text-sm text-destructive"
                    >
                            <XCircle className="icon-sm" aria-hidden="true" />
                      {getValidationError(errors.message.message)}
                    </motion.p>
                  )}
                </div>

                {serverState.status && (
                  <motion.div
                    role="alert"
                    aria-live="polite"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 rounded-md p-3 text-sm font-medium ${
                      serverState.status.ok
                        ? "bg-success/10 text-success-dark dark:bg-success/20 dark:text-success-light"
                        : "bg-destructive/10 text-destructive-dark dark:bg-destructive/20 dark:text-destructive-light"
                    }`}
                  >
                    {serverState.status.ok ? (
                            <CheckCircle className="icon-sm" aria-hidden="true" />
                    ) : (
                            <XCircle className="icon-sm" aria-hidden="true" />
                    )}
                    <span>{serverState.status.msg}</span>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  className="gradient-primary group relative min-h-[48px] w-full overflow-hidden rounded-xl text-white shadow-lg shadow-primary-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-primary-500/20 dark:hover:shadow-primary-500/30 dark:focus-visible:ring-offset-background-dark"
                  disabled={serverState.submitting}
                  aria-busy={serverState.submitting}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {serverState.submitting ? (
                      <>
                              <Send className="icon-sm mr-2 animate-spin" aria-hidden="true" />
                        <span className="font-semibold">{t("Contact.sending")}</span>
                      </>
                    ) : (
                      <>
                              <Send className="icon-sm mr-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        <span className="font-semibold">{t("Contact.send")}</span>
                      </>
                    )}
                  </span>
                  {!serverState.submitting && (
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
