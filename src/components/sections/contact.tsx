"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Send, User } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormValidation } from "@/lib/validations/contact";

import Footer from "./footer";
import AtSign from "../ui/at-sign";

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
      className="center-snap m-auto max-w-7xl py-12 sm:py-20"
    >
      <div className="section-padding-x mx-auto mt-8 max-w-7xl px-6">
        <motion.h3
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {t("contact")}
        </motion.h3>
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  {t("Contact.name")}
                </label>
                <div>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-neutral-600 dark:text-neutral-400" />
                    <Input
                      id="name"
                      type="text"
                      {...register("name")}
                      className="border-0 bg-neutral-50 pl-10 shadow-md dark:bg-neutral-900"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {t("Contact.email")}
                </label>
                <div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-neutral-600 dark:text-neutral-400" />
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="border-0 bg-neutral-50 pl-10 shadow-md dark:bg-neutral-900"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t("Contact.message")}
                </label>
                <Textarea
                  id="message"
                  {...register("message")}
                  className="min-h-[150px] border-0 bg-neutral-50 pl-10 shadow-md dark:bg-neutral-900"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>
              {serverState.status && (
                <p
                  className={`text-sm ${
                    serverState.status.ok ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {serverState.status.msg}
                </p>
              )}
              <Button
                type="submit"
                className="w-full bg-neutral-600 text-neutral-100 shadow-md hover:bg-neutral-700 dark:bg-neutral-400 dark:hover:bg-neutral-300"
                disabled={serverState.submitting}
              >
                {serverState.submitting ? (
                  <>
                    <Send className="mr-2 size-4 animate-spin" />
                    {t("Contact.sending")}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 size-4" />
                    {t("Contact.send")}
                  </>
                )}
              </Button>
            </form>
          </div>
          <div className="hidden items-center justify-center lg:flex">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] w-full"
            >
              <AtSign />
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
