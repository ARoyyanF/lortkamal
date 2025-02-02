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
  q3a: z.string().min(1, "Pilih salah satu opsi"),
  q3b: z.string().min(1, "Pilih salah satu opsi"),
  q3c: z.string().min(1, "Pilih salah satu opsi"),
  q3d: z.number().min(0).max(100),
  q3e: z.array(DraggablePreferenceTableSchema),
  q3f: z.string().min(1, "Mohon diisi 🙏"),
  q4a: z.number().min(0).max(100),
  q4b: z.array(z.string()).min(1, "Pilih setidaknya satu opsi atau lebih"),
  q4c: z.string().min(1, "Pilih salah satu opsi"),
  q4d: z.array(DraggablePreferenceTableSchema),
  q4e: z.string().min(1, "Mohon diisi 🙏"),
  q5a: z.number().min(0).max(100),
  q5b: z.number().min(0).max(100),
  q5c: z.number().min(0).max(100),
  q5d: z.number().min(0).max(100),
  q5e: z.number().min(0).max(100),
  q5f: z.number().min(0).max(100),
  q5g: z.number().min(0).max(100),
  q5h: z.array(DraggablePreferenceTableSchema),
  q5i: z.string().min(1, "Mohon diisi 🙏"),
  q6a: z.number().min(0).max(100),
  q6b: z.array(z.string()).min(1, "Pilih setidaknya satu opsi atau lebih"),
  q6c: z.string().min(1, "Pilih salah satu opsi"),
  q6d: z.array(DraggablePreferenceTableSchema),
  q6e: z.array(z.string()).min(1, "Pilih setidaknya satu opsi atau lebih"),
  q6f: z.string().min(1, "Mohon diisi 🙏"),

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
      description: "Jadwal yang sesuai (tidak bentrok dengan kuliah/ujian)",
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
  q3a: "",
  q3b: "",
  q3c: "",
  q3d: 30,
  q3e: [
    { id: "1", description: "Ingin membantu masyarakat secara langsung" },
    { id: "2", description: "Menambah pengalaman organisasi" },
    {
      id: "3",
      description: "Mendapat pengakuan/pencapaian pribadi",
    },
    {
      id: "4",
      description: "Memenuhi kewajiban moral/etika",
    },
    { id: "5", description: "Mengembangkan citra organisasi" },
  ],
  q3f: "",
  q4a: 30,
  q4b: [],
  q4c: "",
  q4d: [
    {
      id: "1",
      description:
        "Penyediaan fasilitas penunjang kuliah dan kegiatan di lingkungan fisika yang memadai",
    },
    {
      id: "2",
      description: "Keringanan finansial atau beasiswa untuk anggota",
    },
    {
      id: "3",
      description:
        "Bantuan penunjang kehidupan (makanan, pakaian, tempat tinggal) untuk anggota",
    },
    {
      id: "4",
      description: "Ruang diskusi dan kolaborasi antarmahasiswa",
    },
    { id: "5", description: "Pengembangan koneksi industri dan akademisi" },
    {
      id: "6",
      description:
        "Ruang penyampaian aspirasi umum (semacam Ngobrol Santai Bersama Kaprodi)",
    },
    {
      id: "7",
      description: "Dukungan Kesehatan Mental dan Kesejahteraan Mahasiswa",
    },
  ],
  q4e: "",
  q5a: 30,
  q5b: 30,
  q5c: 30,
  q5d: 30,
  q5e: 30,
  q5f: 30,
  q5g: 30,
  q5h: [
    {
      id: "1",
      description: "Kegiatan dengan tema menarik",
    },
    {
      id: "2",
      description: "Kegiatan dengan acara yang terstruktur dan jelas",
    },
    {
      id: "3",
      description:
        "Kegiatan dengan banyak orang yang ikut, khususnya teman dekat saya",
    },
    {
      id: "4",
      description: "Kegiatannya sesuai dengan minat saya",
    },
    {
      id: "5",
      description:
        "Kegiatan menjadi sarana untuk refreshing tanpa adanya beban lain",
    },
    {
      id: "6",
      description: "Kegiatan yang tidak mengganggu jadwal kuliah saya",
    },
    {
      id: "7",
      description:
        "Kegiatan yang menciptakan atmosfer dimana saya merasa terajak",
    },
  ],
  q5i: "",
  q6a: 30,
  q6b: [],
  q6c: "",
  q6d: [
    {
      id: "1",
      description: "Konsistensi konten media sosial",
    },
    {
      id: "2",
      description: "Prestasi anggota di bidang akademik/non-akademik",
    },
    {
      id: "3",
      description: "Dukungan dari Alumni atau Dosen",
    },
    {
      id: "4",
      description: "Pelaksanaan event-event besar secara rutin",
    },
    {
      id: "5",
      description:
        "Kontribusi dan keikutsertaan HIMAFI ITB pada acara besar ITB",
    },
    {
      id: "6",
      description: "Banyak menyediakan kontroversi",
    },
  ],
  q6e: [],
  q6f: "",
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
      <h1 className="font-montserrat intersect:animate-jump animate-duration-[2000ms] text-3xl lg:text-6xl font-bold text-center mb-6 text-white">
        Semua Aspirasi Berarti
      </h1>
      <p className="font-poppins intersect:animate-fade-up text-sm lg:text-lg text-center px-4 mb-6 text-white">
        Setiap suara adalah langkah menuju perubahan. Saya percaya bahwa setiap
        aspirasi, sekecil apapun, memiliki peran penting dalam membangun HIMAFI
        ITB yang lebih baik. Mari sampaikan pendapatmu dan jadilah bagian dari
        perubahan bersama.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onError)}
          className="space-y-6 text-white font-semibold font-poppins"
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
                      "Tour Industri Bersama HIMAFI (TURBO) atau Kunjungan Industri dan Pelatihan Untuk Massa (KUANTUM)",
                  },
                  {
                    id: "7",
                    label:
                      "Program Informasi dan Layanan Orientasi Karir (PILOT)",
                  },
                  {
                    id: "8",
                    label: "Masha (Main bareng Massa HIMAFI)",
                  },
                  {
                    id: "9",
                    label: "TiFi (Latihan bareng HIMAFI)",
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

          <div className="flex justify-center">
            <Divider>PENGABDIAN MASYARAKAT</Divider>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <RadioButtonGroup
                name="q3a"
                label="Apakah Anda mengetahui bahwa HIMAFI ITB memiliki program kerja yang berhubungan dengan pengabdian masyarakat?"
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
              <RadioButtonGroup
                name="q3b"
                label="Darimana Anda mengetahui keberadaan program kerja tersebut?"
                options={[
                  { value: "1", label: "Media Sosial HIMAFI ITB" },
                  { value: "2", label: "Broadcast di grup" },
                  { value: "3", label: "Informasi mulut ke mulut" },
                  { value: "4", label: "Tidak mengetahui" },
                ]}
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <RadioButtonGroup
                name="q3c"
                label="Apakah Anda mengikuti program kerja pengabdian masyarakat yang diadakan HIMAFI ITB?"
                options={[
                  { value: "1", label: "Ya" },
                  { value: "2", label: "Tidak" },
                ]}
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q3d"
                label="Seberapa efektif menurut Anda kegiatan pengabdian masyarakat HIMAFI ITB dalam memberi dampak ke masyarakat?"
                min={0}
                max={100}
                mintext="Tidak berdampak sama sekali"
                maxtext="Sangat berdampak"
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <DraggablePreferenceTable
                name="q3e"
                label="Urutkan alasan utama Anda mengikuti kegiatan pengabdian masyarakat:"
                sensors={sensors}
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <TextBox
                name="q3f"
                label="Silakan berikan aspirasi yang berhubungan dengan bagian pengabdian masyarakat! (Aspirasi bersifat umum dan bisa berhubungan dengan kritik, saran, masukan, dan kendala yang selama ini dimiliki terhadap bagian ini)"
                placeholder="Tulis jawaban di sini"
                form={form}
              />
            </FormCard>
          </div>

          <div className="flex justify-center">
            <Divider>
              KEBUTUHAN ANGGOTA, KOLABORASI, DAN ADVOKASI MASSA
            </Divider>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q4a"
                label="Seberapa baik menurut Anda HIMAFI ITB sudah mengadvokasi kebutuhan anggota, khususnya kebutuhan finansial dan kebutuhan primer, ke pihak yang bersangkutan?"
                min={0}
                max={100}
                mintext="Nonexistent"
                maxtext="Sangat baik dan sangat membantu"
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <CheckboxGroup
                name="q4b"
                label="Pihak eksternal mana saja yang menurut Anda harus diajak bekerja sama oleh HIMAFI ITB? "
                options={[
                  {
                    id: "1",
                    label: "Program Studi atau Fakultas",
                  },
                  { id: "2", label: "Lembaga Penelitian/Instansi Pemerintah" },
                  {
                    id: "3",
                    label: "Perusahaan Teknologi/Industri",
                  },
                  {
                    id: "4",
                    label: "Himpunan Mahasiswa Jurusan di ITB",
                  },
                  {
                    id: "5",
                    label: "Unit Kegiatan Mahasiswa di ITB",
                  },
                  {
                    id: "6",
                    label: "Himpunan Mahasiswa Jurusan di luar ITB",
                  },
                  {
                    id: "7",
                    label: "Unit Kegiatan Mahasiswa di luar ITB",
                  },
                  {
                    id: "8",
                    label:
                      "Alumni HIMAFI yang kompeten melalui Ikatan Alumni Fisika ITB",
                  },
                  {
                    id: "9",
                    label: "NGO Sosial/Lingkungan",
                  },
                ]}
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <RadioButtonGroup
                name="q4c"
                label="Sejauh ini, bagaimana dukungan program studi dan universitas terhadap kegiatan HIMAFI ITB?"
                options={[
                  { value: "1", label: "Tidak ada dukungan sama sekali" },
                  { value: "2", label: "Dukungan terbatas" },
                  { value: "3", label: "Dukungan cukup memadai" },
                  { value: "4", label: "Dukungan penuh" },
                ]}
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <DraggablePreferenceTable
                name="q4d"
                label="Urutkan fokus utama dalam advokasi HIMAFI ITB:"
                sensors={sensors}
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <TextBox
                name="q4e"
                label="Silakan berikan aspirasi yang berhubungan dengan bagian kebutuhan anggota, kolaborasi, dan advokasi massa! (Aspirasi bersifat umum dan bisa berhubungan dengan kritik, saran, masukan, dan kendala yang selama ini dimiliki terhadap bagian ini)"
                placeholder="Tulis jawaban di sini"
                form={form}
              />
            </FormCard>
          </div>

          <div className="flex justify-center">
            <Divider>SOSIAL, REKREASI, DAN KONEKSI ANGGOTA</Divider>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q5a"
                label="Bagaimana tingkat ketertarikan Anda pada bidang Fisika saat ini?"
                min={0}
                max={100}
                mintext="Sama sekali tidak tertarik"
                maxtext="Sangat tertarik"
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q5b"
                label="Bagaimana penilaian Anda terhadap kualitas interaksi sosial dan keakraban antaranggota HIMAFI ITB?"
                min={0}
                max={100}
                mintext="Sangat buruk"
                maxtext="Sangat baik"
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q5c"
                label="Seberapa penting dan berdampak menurut Anda keberadaan kegiatan sosial dan rekreasi terhadap diri Anda?"
                min={0}
                max={100}
                mintext="Tidak penting"
                maxtext="Sangat penting dan berdampak"
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q5d"
                label="Seberapa perlu menurut Anda keberadaan kegiatan sosial dan rekreasi untuk diadakan oleh HIMAFI ITB?"
                min={0}
                max={100}
                mintext="Tidak penting"
                maxtext="Sangat penting dan berdampak"
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q5e"
                label="Seberapa rutin menurut Anda HIMAFI ITB menyelenggarakan kegiatan sosial dan rekreasi?"
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
                name="q5f"
                label="Seberapa sering Anda berpartisipasi dalam berbagai acara dan program HIMAFI ITB?"
                min={0}
                max={100}
                mintext="Tidak pernah ikut"
                maxtext="Selalu ikut"
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q5g"
                label="Menurut Anda, seberapa tinggi semangat anggota HIMAFI ITB dalam meramaikan acara HIMAFI ITB?"
                min={0}
                max={100}
                mintext="Sangat rendah"
                maxtext="Sangat tinggi"
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <DraggablePreferenceTable
                name="q5h"
                label="Urutkan tujuan utama Anda dalam mengikuti kegiatan sosial dan rekreasi di HIMAFI ITB:"
                sensors={sensors}
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <TextBox
                name="q5i"
                label="Silakan berikan aspirasi yang berhubungan dengan bagian sosial, rekreasi, dan koneksi anggota! (Aspirasi bersifat umum dan bisa berhubungan dengan kritik, saran, masukan, dan kendala yang selama ini dimiliki terhadap bagian ini)"
                placeholder="Tulis jawaban di sini"
                form={form}
              />
            </FormCard>
          </div>

          <div className="flex justify-center">
            <Divider>CITRA ORGANISASI DAN KOMUNIKASI</Divider>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <SliderScale
                name="q6a"
                label="Seberapa dikenal HIMAFI ITB di kalangan mahasiswa ITB menurut Anda?"
                min={0}
                max={100}
                mintext="Sama sekali tidak dikenal"
                maxtext="Sangat dikenal"
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <CheckboxGroup
                name="q6b"
                label="Melalui media apa saja Anda paling sering mengetahui informasi terbaru tentang HIMAFI ITB?"
                options={[
                  {
                    id: "1",
                    label: "Facebook",
                  },
                  { id: "2", label: "Instagram" },
                  {
                    id: "3",
                    label: "Line/Kanal Chat Internal",
                  },
                  {
                    id: "4",
                    label: "Website",
                  },
                  {
                    id: "5",
                    label: "Mulut ke mulut",
                  },
                ]}
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <RadioButtonGroup
                name="q6c"
                label="Bagaimana Anda menilai reputasi HIMAFI ITB saat ini di mata publik kampus"
                options={[
                  { value: "1", label: "Biasa saja, tidak menonjol" },
                  { value: "2", label: "Mulai dikenal, tapi belum konsisten" },
                  { value: "3", label: "Cukup baik, memiliki citra positif" },
                  { value: "4", label: "Sangat baik dan berpengaruh" },
                ]}
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <DraggablePreferenceTable
                name="q6d"
                label="Urutkan faktor terpenting untuk membangun branding HIMAFI ITB:"
                sensors={sensors}
                form={form}
              />
            </FormCard>
          </div>
          <div className="intersect-once intersect:animate-fade-right">
            <FormCard>
              <CheckboxGroup
                name="q6e"
                label="Konten apa yang Anda ingin lihat tentang HIMAFI ITB?"
                options={[
                  {
                    id: "1",
                    label: "Konten Kajian Akademik",
                  },
                  { id: "2", label: "Konten Kajian Sosial" },
                  {
                    id: "3",
                    label: "Kegiatan yang dilaksanakan di internal HIMAFI ITB",
                  },
                  {
                    id: "4",
                    label: "Apresiasi Massa HIMAFI ITB",
                  },
                  {
                    id: "5",
                    label: "Sejarah HIMAFI ITB",
                  },
                  {
                    id: "6",
                    label:
                      "People’s of HIMAFI ITB (konten wawancara terhadap massa HIMAFI ITB) atau Cerita Sukses dari Anggota HIMAFI",
                  },
                  {
                    id: "7",
                    label: "Info dan Tips Beasiswa",
                  },
                  {
                    id: "8",
                    label: "Kolaborasi Riset dan Publikasi Mahasiswa",
                  },
                  {
                    id: "9",
                    label:
                      "Informasi Mengenai Agenda Workshop atau Seminar Fisika",
                  },
                  {
                    id: "10",
                    label: "Profil Alumni Berprestasi",
                  },
                  {
                    id: "11",
                    label: "Peluang Karier dan Magang di Bidang Fisika",
                  },
                  {
                    id: "12",
                    label: "Behind The Scenes Pengurus HIMAFI ITB",
                  },
                ]}
                form={form}
              />
            </FormCard>
          </div>
          <div className="space-y-4 intersect-once intersect:animate-fade-right">
            <FormCard>
              <TextBox
                name="q6f"
                label="Silakan berikan aspirasi yang berhubungan dengan bagian citra organisasi dan komunikasi! (Aspirasi bersifat umum dan bisa berhubungan dengan kritik, saran, masukan, dan kendala yang selama ini dimiliki terhadap bagian ini)"
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
