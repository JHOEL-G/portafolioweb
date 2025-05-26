"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const ContactForm = () => {
  const [successForm, setSuccessForm] = useState(false);

  const formSchema = z.object({
    username: z.string().min(2, { message: "El nombre es requerido" }).max(50),
    email: z.string().email({ message: "Correo inválido" }),
    message: z.string()
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSuccessForm(true);
        form.reset();
      } else {
        // Podrías manejar errores aquí
        setSuccessForm(false);
      }
    } catch (error) {
      // Manejo de error de red o inesperado
      setSuccessForm(false);
      console.error("Error enviando formulario:", error);
    }
  };

  return (
    <Form {...form}>
      {successForm ? (
        <h4>EL FORMULARIO SE HA ENVIADO CON ÉXITO 😊</h4>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Tu nombre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="tu@correo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tu mensaje..." {...field} rows={4} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Enviar mensaje</Button>
        </form>
      )}
    </Form>
  );
};

export default ContactForm;
