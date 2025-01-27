"use client";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  TextInput,
  CheckboxGroup,
  RadioButtonGroup,
  RatingScale,
  TextBox,
  FormCard,
  SliderScale,
} from "./form-fields";

const formSchema = z.object({
  nama: z.string().min(1, "Nama is required"),
  nim: z.string().min(1, "NIM is required"),
  sigmaQuestion: z
    .array(z.string())
    .min(1, "Please select at least one option"),
  shadowboxQuestion: z.string().min(1, "Please select an option"),
  rating: z.string().min(1, "Please select a rating"),
  yapping: z.string().min(1, "yapping cuk"),
  slider: z.number().min(0).max(100),
});

const sigmaOptions = [
  { id: "1", label: "Bintang skibidi" },
  { id: "2", label: "Bintang skibidi yang paling tertinggi itu" },
  { id: "3", label: "Kocuali skibidi lima hanyalah mewing kecil" },
  { id: "4", label: "Sigma kan" },
  {
    id: "5",
    label:
      "Aku juga pingin dulu mewing lima, tapi ya takdir tidak mengizinkan. Tidak ada sigma",
  },
  {
    id: "6",
    label: "Gibran teman saya ada yang pernah mewing di posisi nge rizz",
  },
];

const shadowboxOptions = [
  { value: "ya", label: "Ya" },
  { value: "tidak", label: "Tidak" },
  { value: "hah", label: "Hah" },
];

const defaultValues = {
  nama: "",
  nim: "",
  sigmaQuestion: [],
  shadowboxQuestion: "",
  rating: "",
  yapping: "",
  slider: 30,
};

export default function SurveyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submit-survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit survey");
      }

      toast.success("Survey Terkirim", {
        description: "Terimakasih banyak atas masukannya!",
      });
      form.reset(defaultValues);
    } catch (error) {
      console.error("Error submitting survey:", error);
      toast.error("Error", {
        description:
          error instanceof Error ? error.message : "Failed to submit survey",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="intersect:animate-jump animate-duration-[2000ms] text-3xl lg:text-6xl font-bold text-center mb-6 text-white">
        Semua Aspirasi Berarti
      </h1>
      <p className="intersect:animate-fade-up text-sm lg:text-lg text-center px-4 mb-6 text-white">
        Setiap suara adalah langkah menuju perubahan. Saya percaya bahwa setiap
        aspirasi, sekecil apapun, memiliki peran penting dalam membangun HIMAFI
        ITB yang lebih baik. Mari sampaikan pendapatmu dan jadilah bagian dari
        perubahan bersama.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 text-white font-semibold"
        >
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <TextInput
              name="nama"
              label="Nama"
              placeholder="Nama"
              form={form}
            />
            <TextInput name="nim" label="NIM" placeholder="NIM" form={form} />
          </div>

          <p className="intersect-once intersect:animate-jump text-gray-400 italic text-center">
            Berikut ini adalah pertanyaan terkait HIMAFI. Mohon diisi
            sejujur-jujurnya. Kerahasiaan jawaban terjamin.
          </p>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <CheckboxGroup
                name="sigmaQuestion"
                label="1. Apa yang dicari oleh orang sigma?"
                options={sigmaOptions}
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <RadioButtonGroup
                name="shadowboxQuestion"
                label="2. Gan slek shadowblox kan kenapa jadi itu dota apa ada d?"
                options={shadowboxOptions}
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <RatingScale
                name="rating"
                label="3. Vote kamal yay or nay"
                min={1}
                max={10}
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <TextBox
                name="yapping"
                label="4. Yapfest"
                placeholder="longtext mucho texto"
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="slider"
                label="5. Slider"
                min={0}
                max={100}
                form={form}
              />
            </FormCard>
          </div>

          <Button
            type="submit"
            className="intersect-once intersect:animate-jump w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>

          <p className="intersect:animate-fade-up text-center text-gray-400 italic">
            Terima kasih telah mengisi analikan singkat ini. Semoga kita dapat
            membawa <span className="text-blue-400">HIMAFI</span> menuju arah
            yang lebih baik.
          </p>
        </form>
      </Form>
    </div>
  );
}
