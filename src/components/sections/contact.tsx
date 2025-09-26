"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Mail,
  MessageSquare,
  Send,
  User,
  XCircle,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof ContactFormValidation>>({
    resolver: zodResolver(ContactFormValidation),
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
        handleServerResponse(true, "Message sent successfully!", null);
      } else {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }
    } catch (err) {
      if (err instanceof Error) {
        handleServerResponse(false, err.message, null);
      } else {
        handleServerResponse(false, "An unknown error occurred", null);
      }
    }
  };

  return (
    <section
      id="contact"
      className="flex-center min-h-screen w-full snap-start snap-always py-12 sm:py-20"
    >
      <div className="w-full max-w-7xl">
        <div className="section-padding-x mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 text-center"
          >
            <h3>{t("contact")}</h3>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
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
            <div className="rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 shadow-xl dark:from-neutral-900 dark:to-neutral-800">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                  >
                    <User className="size-4" />
                    {t("Contact.name")}
                  </label>
                  <div>
                    <Input
                      id="name"
                      type="text"
                      {...register("name")}
                      className="h-12 border-0 bg-white px-4 shadow-sm transition-all duration-200 focus:shadow-md dark:bg-neutral-800"
                      placeholder="Your full name"
                    />
                  </div>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 text-sm text-red-500"
                    >
                      <XCircle className="size-4" />
                      {errors.name.message}
                    </motion.p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                  >
                    <Mail className="size-4" />
                    {t("Contact.email")}
                  </label>
                  <div>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="h-12 border-0 bg-white px-4 shadow-sm transition-all duration-200 focus:shadow-md dark:bg-neutral-800"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 text-sm text-red-500"
                    >
                      <XCircle className="size-4" />
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                  >
                    <MessageSquare className="size-4" />
                    {t("Contact.message")}
                  </label>
                  <div>
                    <Textarea
                      id="message"
                      {...register("message")}
                      className="min-h-[20px] border-0 bg-white px-4 py-3 shadow-sm transition-all duration-200 focus:shadow-md dark:bg-neutral-800"
                      placeholder="Tell me about your project, ideas, or just say hello..."
                    />
                  </div>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 text-sm text-red-500"
                    >
                      <XCircle className="size-4" />
                      {errors.message.message}
                    </motion.p>
                  )}
                </div>

                {serverState.status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 rounded-lg p-3 text-sm font-medium ${
                      serverState.status.ok
                        ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                        : "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                    }`}
                  >
                    {serverState.status.ok ? (
                      <CheckCircle className="size-4" />
                    ) : (
                      <XCircle className="size-4" />
                    )}
                    {serverState.status.msg}
                  </motion.div>
                )}

                <Button
                  type="submit"
                  className="group h-12 w-full bg-gradient-to-r from-neutral-600 to-neutral-700 text-white shadow-lg transition-all duration-200 hover:from-neutral-700 hover:to-neutral-800 hover:shadow-xl disabled:opacity-50 dark:from-neutral-400 dark:to-neutral-500 dark:hover:from-neutral-300 dark:hover:to-neutral-400"
                  disabled={serverState.submitting}
                >
                  {serverState.submitting ? (
                    <>
                      <Send className="mr-2 size-4 animate-spin" />
                      {t("Contact.sending")}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 size-4 transition-transform group-hover:translate-x-1" />
                      {t("Contact.send")}
                    </>
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
