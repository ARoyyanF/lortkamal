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
  q1a: z.number().min(0).max(100),
  q1b: z.number().min(0).max(100),
  q1c: z.number().min(0).max(100),
  q1d: z.number().min(0).max(100),
  q1e: z.number().min(0).max(100),
  q1f: z.number().min(0).max(100),
  q1g: z.number().min(0).max(100),
  q1h: z.number().min(0).max(100),
  q1i: z.number().min(0).max(100),
  q1j: z.array(z.string()).min(1, "Pilih setidaknya satu opsi atau lebih"),
  q1k: z.string().min(1, "Pilih salah satu opsi"),
  q1l: z.string().min(1, "Pilih salah satu opsi"),
  q1m: z.array(DraggablePreferenceTableSchema),
  q1n: z.string().min(1, "Mohon diisi 🙏"),
  q2a: z.number().min(0).max(100),
  q2b: z.number().min(0).max(100),
  q2c: z.number().min(0).max(100),
  q2d: z.string().min(1, "Pilih salah satu opsi"),
  q2e: z.string().min(1, "Pilih salah satu opsi"),
  q2f: z.array(z.string()).min(1, "Pilih setidaknya satu opsi atau lebih"),
  q2g: z.array(DraggablePreferenceTableSchema),
  q2h: z.string().min(1, "Pilih salah satu opsi"),
  q2i: z.array(DraggablePreferenceTableSchema),
  q2j: z.array(z.string()).min(1, "Pilih setidaknya satu opsi atau lebih"),
  q2k: z.string().min(1, "Mohon diisi 🙏"),

  // sigmaQuestion: z
  //   .array(z.string())
  //   .min(1, "Pilih setidaknya satu opsi atau lebih"),
  // shadowboxQuestion: z.string().min(1, "Pilih salah satu opsi"),
  // rating: z.string().min(1, "Pilih rentang"),
  // yapping: z.string().min(1, "Mohon diisi 🙏"),
  // slider: z.number().min(0).max(100),
  // preference1: z.array(DraggablePreferenceTableSchema),
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
  q1a: 30,
  q1b: 30,
  q1c: 30,
  q1d: 30,
  q1e: 30,
  q1f: 30,
  q1g: 30,
  q1h: 30,
  q1i: 30,
  q1j: [],
  q1k: "",
  q1l: "",
  q1m: [
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
  q1n: "",
  q2a: 30,
  q2b: 30,
  q2c: 30,
  q2d: "",
  q2e: "",
  q2f: [],
  q2g: [
    { id: "1", description: "Merevisi AD/ART dan Regulasi lainnya" },
    { id: "2", description: "Membuat SOP di setiap bagian organisasi" },
    {
      id: "3",
      description:
        "Melibatkan anggota lebih banyak, contohnya dengan menyelenggarakan forum rutin untuk masukan anggota",
    },
    {
      id: "4",
      description: "Melaksanakan audit keuangan internal secara berkala",
    },
    { id: "5", description: "Mengadakan pelatihan manajemen organisasi" },
    {
      id: "6",
      description:
        "Membangun sistem digital untuk pengelolaan data dan transparansi, misalnya website",
    },
    {
      id: "7",
      description:
        "Menetapkan indikator kinerja utama (Key Performance Indicators/KPI)",
    },
    {
      id: "8",
      description:
        "Melaksanakan evaluasi program secara berkala (laporan 100 hari kerja, 200 hari kerja, dan semacamnya)",
    },
    {
      id: "9",
      description: "Meningkatkan Koordinasi dan Kolaborasi Antar-Divisi",
    },
    {
      id: "10",
      description:
        "Memperkuat Jaringan Eksternal (Alumni, Departemen, dan Industri)",
    },
  ],
  q2h: "",
  q2i: [
    { id: "1", description: "Meningkatkan kemampuan komunikasi pribadi" },
    { id: "2", description: "Meningkatkan soft skill pribadi" },
    {
      id: "3",
      description: "Memperkuat rasa tanggung jawab",
    },
    {
      id: "4",
      description: "Mempersiapkan diri untuk kepemimpinan profesional",
    },
    { id: "5", description: "Memperluas relasi antaranggota" },
    {
      id: "6",
      description: "Memperluas relasi antarorganisasi",
    },
    {
      id: "7",
      description: "Memberikan benefit untuk mempercantik CV dan resume",
    },
    {
      id: "8",
      description: "Memberikan kesempatan untuk berkontribusi untuk HIMAFI ITB",
    },
  ],
  q2j: [],
  q2k: "",
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
                name="q1a"
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
                name="q1b"
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
                name="q1c"
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
                name="q1d"
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
                name="q1e"
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
                name="q1f"
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
                name="q1g"
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
                name="q1h"
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
                name="q1i"
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
                name="q1j"
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
              <RadioButtonGroup
                name="q1k"
                label="Seberapa besar dampak dari pelatihan rutin HIMAFI ITB terhadap pemahaman Anda di bidang keprofesionalitasan?"
                options={[
                  { value: "1", label: "Tidak terasa" },
                  { value: "2", label: "Cukup terasa" },
                  { value: "3", label: "Terasa signifikan" },
                  { value: "5", label: "Sangat berdampak" },
                ]}
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <RadioButtonGroup
                name="q1l"
                label="Seberapa puas Anda terhadap program pelatihan akademik, nonakademik, dan keprofesionalitasan yang diadakan HIMAFI ITB?"
                options={[
                  { value: "1", label: "Sangat tidak puas" },
                  { value: "2", label: "Tidak puas" },
                  { value: "3", label: "Puas" },
                  { value: "5", label: "Sangat puas" },
                ]}
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <DraggablePreferenceTable
                name="q1m"
                label="Urutkan faktor berikut yang paling memengaruhi keinginan Anda untuk mengikuti program pelatihan di HIMAFI ITB:"
                sensors={sensors}
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <TextBox
                name="q1n"
                label="Silakan berikan aspirasi yang berhubungan dengan bagian pelatihan dan akademik! (Aspirasi bersifat umum dan bisa berhubungan dengan kritik, saran, masukan, dan kendala yang selama ini dimiliki terhadap bagian ini)"
                placeholder="Tulis jawaban di sini"
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
                name="q2a"
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
                name="q2b"
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
                name="q2c"
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
                name="q2d"
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
                name="q2e"
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
                name="q2f"
                label="Dalam hal transparansi keuangan, informasi mana saja yang perlu secara rutin dipublikasikan kepada anggota?"
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
                name="q2g"
                label="Urutkan langkah yang menurut Anda paling penting untuk memperbaiki tata kelola HIMAFI ITB:"
                sensors={sensors}
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <RadioButtonGroup
                name="q2h"
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
                name="q2i"
                label="Urutkan tujuan utama Anda dalam mengikuti program kepemimpinan di HIMAFI ITB:"
                sensors={sensors}
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <CheckboxGroup
                name="q2j"
                label="Aspek kepemimpinan apa saja yang paling Anda ingin kembangkan?"
                options={[
                  {
                    id: "1",
                    label: "Public Speaking",
                  },
                  { id: "2", label: "Time Management" },
                  {
                    id: "3",
                    label: "Team Coordination",
                  },
                  {
                    id: "4",
                    label: "Conflict Resolution",
                  },
                  {
                    id: "5",
                    label: "Decision Making",
                  },
                  {
                    id: "6",
                    label: "Strategic Thinking",
                  },
                  {
                    id: "7",
                    label: "Visionary Leadership",
                  },
                  {
                    id: "8",
                    label: "Emotional Intelligence",
                  },
                  {
                    id: "9",
                    label: "Delegation",
                  },
                  {
                    id: "10",
                    label: "Mentoring & Coaching",
                  },
                  {
                    id: "11",
                    label: "Adaptability & Change Management",
                  },
                  {
                    id: "12",
                    label: "Networking & Collaboration",
                  },
                  {
                    id: "13",
                    label: "Resilience",
                  },
                ]}
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <TextBox
                name="q2k"
                label="Silakan berikan aspirasi yang berhubungan dengan bagian kepemimpinan dan keorganisasian! (Aspirasi bersifat umum dan bisa berhubungan dengan kritik, saran, masukan, dan kendala yang selama ini dimiliki terhadap bagian ini)"
                placeholder="Tulis jawaban di sini"
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
