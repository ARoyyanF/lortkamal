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
  DraggablePreferenceTable,
} from "./form-fields";
import {
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Divider } from "@/components/ui/divider";

const DraggablePreferenceTableSchema = z.object({
  id: z.string(),
  description: z.string(),
});

const formSchema = z.object({
  nama: z.string().min(1, "Nama kosong"),
  nim: z.string().min(1, "NIM kosong"),
  sigmaQuestion: z
    .array(z.string())
    .min(1, "Pilih setidaknya satu opsi atau lebih"),
  shadowboxQuestion: z.string().min(1, "Pilih salah satu opsi"),
  rating: z.string().min(1, "Pilih rentang"),
  yapping: z.string().min(1, "Mohon diisi 🙏"),
  slider: z.number().min(0).max(100),
  preference1: z.array(DraggablePreferenceTableSchema),
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
  q1: 30,
  q2: 30,
  q3: 30,
  q4: 30,
  q5: 30,
  q6: 30,
  q7: 30,
  q8: 30,
  q9: 30,
  q11: [
    {
      id: "1",
      description:
        "Relevansi topik yang dibawa dengan kurikulum dan mata kuliah",
    },
    {
      id: "2",
      description:
        "Relevansi topik yang dibawa dengan tujuan pengembangan diri",
    },
    {
      id: "3",
      description: "Jadwal yang sesuai (tidak bentrok dengan kuliah/ujian",
    },
    { id: "4", description: "Kualitas pemateri atau pembicara" },
    {
      id: "5",
      description:
        "Akses yang mudah dan fleksibel (bisa daring atau luring, tatap muka atau bisa diakses rekaman dan catatannya)",
    },
    {
      id: "6",
      description:
        "Informasi tentang program yang disebarkan dengan baik dan menyeluruh",
    },
    { id: "7", description: "Biaya yang murah atau bahkan gratis" },
    { id: "8", description: "Cepat dalam memenuhi kebutuhan mahasiswa" },
  ],
  q12: 30,
  q13: 30,
  q14: 30,
  q18: [
    { id: "1", description: "A hot caffeinated beverage" },
    { id: "2", description: "A soothing herbal drink" },
    { id: "3", description: "Essential for hydration" },
    { id: "4", description: "Fruity and refreshing" },
    { id: "5", description: "Blended fruits and vegetables" },
  ],
  q20: [
    { id: "1", description: "A hot caffeinated beverage" },
    { id: "2", description: "A soothing herbal drink" },
    { id: "3", description: "Essential for hydration" },
    { id: "4", description: "Fruity and refreshing" },
    { id: "5", description: "Blended fruits and vegetables" },
  ],
};

export default function SurveyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  const onError = (error) => {
    toast.warning("Formulir belum terisi penuh!");
  };

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
          onSubmit={form.handleSubmit(onSubmit, onError)}
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
          <div className="flex justify-center">
            <Divider>PELATIHAN & AKADEMIK</Divider>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q1"
                label="Seberapa penting dan berdampak menurut Anda keberadaan pelatihan/kelas pembelajaran akademik terhadap diri Anda?"
                min={0}
                max={100}
                mintext="Tidak penting"
                maxtext="Sangat penting"
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q2"
                label="Seberapa perlu menurut Anda keberadaan pelatihan/kelas pembelajaran akademik untuk diadakan oleh HIMAFI ITB?"
                min={0}
                max={100}
                mintext="Tidak perlu"
                maxtext="Sangat perlu"
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q3"
                label="Seberapa rutin menurut Anda HIMAFI ITB menyelenggarakan pelatihan/kelas pembelajaran akademik seperti tutor sebaya?"
                min={0}
                max={100}
                mintext="Tidak mengadakan sama sekali"
                maxtext="Sangat rutin diadakan"
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q4"
                label="Seberapa penting dan berdampak menurut Anda keberadaan program pengembangan nonakademik minat bakat terhadap diri Anda?"
                min={0}
                max={100}
                mintext="Tidak penting"
                maxtext="Sangat penitng"
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q5"
                label="Seberapa perlu menurut Anda keberadaan program pengembangan nonakademik minat bakat untuk diadakan oleh HIMAFI ITB?"
                min={0}
                max={100}
                mintext="Tidak Perlu"
                maxtext="Sangat Perlu"
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q6"
                label="Seberapa rutin menurut Anda HIMAFI ITB menyelenggarakan program pengembangan nonakademik minat bakat?"
                min={0}
                max={100}
                mintext="Tidak Mengadakan sama sekali"
                maxtext="Sangat rutin diadakan"
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q7"
                label={
                  <>
                    Seberapa penting dan berdampak menurut Anda keberadaan
                    program pengembangan kepemimpinan atau
                    <span className="italic"> soft skills </span> terhadap diri
                    Anda?
                  </>
                }
                min={0}
                max={100}
                mintext="Tidak Mengadakan sama sekali"
                maxtext="Sangat rutin diadakan"
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q8"
                label={
                  <>
                    Seberapa perlu menurut Anda keberadaan program pengembangan
                    kepemimpinan atau
                    <span className="italic"> soft skills </span> untuk diadakan
                    oleh HIMAFI ITB?
                  </>
                }
                min={0}
                max={100}
                mintext="Tidak perlu"
                maxtext="Sangat perlu"
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q9"
                label={
                  <>
                    Seberapa sering HIMAFI ITB mengadakan program pengembangan
                    kepemimpinan atau
                    <span className="italic"> soft skills? </span>
                  </>
                }
                min={0}
                max={100}
                mintext="Tidak Mengadakan sama sekali"
                maxtext="Sangat rutin diadakan"
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <CheckboxGroup
                name="q10"
                label="Program kerja pelatihan dan akademik yang diadakan HIMAFI ITB mana saja yang paling sering Anda ikuti atau gunakan? (Maksimal 5) "
                options={[
                  {
                    id: "1",
                    label:
                      "Tutor Sebaya Ujian atau Discussing and Reviewing with Academic (Dirac)",
                  },
                  { id: "2", label: "Folder Akademik HIMAFI ITB (Fermi)" },
                  {
                    id: "3",
                    label:
                      "Informasi akademik dan pelatihan keprofesionalitasan yang dibagikan melalui broadcast (Academic Corner, GARASI, atau INFO PROF!)",
                  },
                  {
                    id: "4",
                    label: "Bedah dan Olah Soal Tahunan (BOSON)",
                  },
                  {
                    id: "5",
                    label:
                      "Workshop mengenai wawasan ataupun softskill yang diperlukan untuk persiapan karir dan persiapan studi lanjut (REACTOR) atau Kunjungan Industri dan Pelatihan Untuk Massa (KUANTUM)",
                  },
                  {
                    id: "6",
                    label:
                      "Tour Industri Bersama HIMAFI (TURBO) atau Kunjungan Industri dan Pelatihan Untuk ",
                  },
                  {
                    id: "7",
                    label:
                      "Program Informasi dan Layanan Orientasi Karir (PILOT)",
                  },
                  {
                    id: "8",
                    label: "Masha (Main bareng Massa HIMAFI",
                  },
                  {
                    id: "9",
                    label: "TiFi (Latihan bareng HIMAFI",
                  },
                  {
                    id: "10",
                    label: "HIMAFI CUP",
                  },
                ]}
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <DraggablePreferenceTable
                name="q11"
                label="Urutkan faktor berikut yang paling memengaruhi keinginan Anda untuk mengikuti program pelatihan di HIMAFI ITB:"
                sensors={sensors}
                form={form}
              />
            </FormCard>
          </div>

          <div className="flex justify-center">
            <Divider>KEPEMIMPINAN & KEORGANISASIAN</Divider>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q12"
                label="Seberapa rutin menurut Anda HIMAFI ITB menyelenggarakan program kerja yang membutuhkan kepanitiaan atau anggota?"
                min={0}
                max={100}
                mintext="Tidak mengadakan sama sekali"
                maxtext="Sangat rutin diadakan"
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q13"
                label="Seberapa terbuka menurut Anda HIMAFI ITB dalam memberikan kesempatan bagi Anda untuk ikut serta dalam kepanitiaan atau anggota program kerja tersebut, khususnya dalam menjadi pemimpin?"
                min={0}
                max={100}
                mintext="Tidak terbuka sama sekali"
                maxtext="Sangat terbuka dan banyak kesempatan"
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q14"
                label="Seberapa terbuka Anda menilai struktur keanggotaan dan partisipasi dari massa terhadap program kerja dan kegiatan HIMAFI ITB saat ini?"
                min={0}
                max={100}
                mintext="Sangat buruk dan tertutup"
                maxtext="Sangat baik dan terbuka"
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <RadioButtonGroup
                name="q15"
                label="Bagaimana efektivitas proses pengambilan keputusan di HIMAFI ITB terhadap suatu masalah, isu, atau kebijakan?"
                options={[
                  { value: "1", label: "Lambat dan membingungkan" },
                  { value: "2", label: "Cukup cepat, tapi belum efisien" },
                  { value: "3", label: "Efisien dan transparan" },
                  { value: "4", label: "Sangat efisien dan transparan" },
                ]}
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <RadioButtonGroup
                name="q16"
                label="Apakah Anda mengetahui transparansi yang berhubungan dengan penggunaan dana HIMAFI ITB?"
                options={[
                  { value: "1", label: "Ya" },
                  { value: "2", label: "Tidak" },
                ]}
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <CheckboxGroup
                name="q17"
                label="Program kerja pelatihan dan akademik yang diadakan HIMAFI ITB mana saja yang paling sering Anda ikuti atau gunakan? (Maksimal 5) "
                options={[
                  {
                    id: "1",
                    label: "Laporan Pemasukan & Pengeluaran",
                  },
                  { id: "2", label: "Laporan Dana Sponsor & Donatur" },
                  {
                    id: "3",
                    label: "Rincian Penggunaan Dana Proyek/Acara Program Kerja",
                  },
                  {
                    id: "4",
                    label: "Rencana Anggaran Tahunan",
                  },
                ]}
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <DraggablePreferenceTable
                name="q18"
                label="6. Preference"
                sensors={sensors}
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <RadioButtonGroup
                name="q19"
                label="Bagaimana dampak program kepemimpinan dalam bentuk kepanitiaan dan program kerja di HIMAFI ITB terhadap kemampuan Anda memimpin tim?"
                options={[
                  { value: "1", label: "Tidak ada perubakan" },
                  { value: "2", label: "Sedikit meningkatkan" },
                  { value: "3", label: "Cukup meningkatkan" },
                  { value: "5", label: "Sangat meningkatkan" },
                ]}
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <DraggablePreferenceTable
                name="q20"
                label="Urutkan langkah yang menurut Anda paling penting untuk memperbaiki tata kelola HIMAFI ITB:"
                sensors={sensors}
                form={form}
              />
            </FormCard>
          </div>
          {/* <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <RadioButtonGroup
                name="shadowboxQuestion"
                label="2. Gan slek shadowblox kan kenapa jadi itu dota apa ada d?"
                options={shadowboxOptions}
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <TextBox
                name="yapping"
                label="Silakan berikan aspirasi yang berhubungan dengan bagian pelatihan dan akademik! (Aspirasi bersifat umum dan bisa berhubungan dengan kritik, saran, masukan, dan kendala yang selama ini dimiliki terhadap bagian ini)"
                placeholder="longtext mucho texto"
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
                label="Slider"
                min={0}
                max={100}
                mintext="Min value"
                maxtext="Max value"
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <DraggablePreferenceTable
                name="preference1"
                label="6. Preference"
                sensors={sensors}
                form={form}
              />
            </FormCard>
          </div> */}

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
