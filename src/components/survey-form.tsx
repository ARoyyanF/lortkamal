'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"

const formSchema = z.object({
  nama: z.string().min(1, "Nama is required"),
  nim: z.string().min(1, "NIM is required"),
  sigmaQuestion: z.array(z.string()).min(1, "Please select at least one option"),
  shadowboxQuestion: z.string().min(1, "Please select an option"),
  rating: z.string().min(1, "Please select a rating")
})

export default function SurveyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sigmaQuestion: [],
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const sigmaOptions = [
    { id: "1", label: "Bintang skibidi" },
    { id: "2", label: "Bintang skibidi yang paling tertinggi itu" },
    { id: "3", label: "Kocuali skibidi lima hanyalah mewing kecil" },
    { id: "4", label: "Sigma kan" },
    { id: "5", label: "Aku juga pingin dulu mewing lima, tapi ya takdir tidak mengizinkan. Tidak ada sigma" },
    { id: "6", label: "Gibran teman saya ada yang pernah mewing di posisi nge rizz" },
  ]

  return (
    <div className="max-w-4xl mx-auto py-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-white">
          {/* Personal Info Fields */}
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="nama"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      placeholder="Nama" 
                      {...field}
                      className="bg-transparent border-b border-blue-400 rounded-none focus:border-blue-500 px-0"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nim"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      placeholder="NIM" 
                      {...field}
                      className="bg-transparent border-b border-blue-400 rounded-none focus:border-blue-500 px-0"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <p className="text-gray-400 italic">
            Berikut ini adalah pertanyaan terkait HIMAFI. Mohon diisi sejujur-jujurnya. Kerahasiaan jawaban terjamin.
          </p>

          {/* Sigma Question */}
          <Card className="bg-[#0088ff33] border-none">
            <CardContent className="p-6">
              <FormField
                control={form.control}
                name="sigmaQuestion"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-lg mb-4">1. Apa yang dicari oleh orang sigma?</FormLabel>
                    <div className="space-y-3">
                      {sigmaOptions.map((option) => (
                        <FormField
                          key={option.id}
                          control={form.control}
                          name="sigmaQuestion"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={option.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(option.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, option.id])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== option.id
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  {option.label}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Shadowbox Question */}
          <Card className="bg-[#0088ff33] border-none">
            <CardContent className="p-6">
              <FormField
                control={form.control}
                name="shadowboxQuestion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg mb-4">2. Gan slek shadowblox kan kenapa jadi itu dota apa ada d?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="space-y-3"
                      >
                        <FormItem className="flex items-center space-x-3">
                          <FormControl>
                            <RadioGroupItem value="ya" />
                          </FormControl>
                          <FormLabel className="font-normal">Ya</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3">
                          <FormControl>
                            <RadioGroupItem value="tidak" />
                          </FormControl>
                          <FormLabel className="font-normal">Tidak</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3">
                          <FormControl>
                            <RadioGroupItem value="hah" />
                          </FormControl>
                          <FormLabel className="font-normal">Hah</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Rating Scale */}
          <Card className="bg-[#0088ff33] border-none">
            <CardContent className="p-6">
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg mb-4">3. Vote kamal yay or nay</FormLabel>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm">Sangat tidak setuju</span>
                      <div className="flex gap-2">
                        {[...Array(10)].map((_, i) => (
                          <Button
                            key={i + 1}
                            type="button"
                            variant={field.value === String(i + 1) ? "default" : "outline"}
                            className={`w-8 h-8 p-0 rounded-full ${
                              field.value === String(i + 1) ? "bg-blue-500" : ""
                            }`}
                            onClick={() => field.onChange(String(i + 1))}
                          >
                            {i + 1}
                          </Button>
                        ))}
                      </div>
                      <span className="text-sm">Sangat setuju</span>
                    </div>
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <p className="text-center text-gray-400 italic">
            Terima kasih telah mengisi analikan singkat ini. Semoga kita dapat membawa{" "}
            <span className="text-blue-400">HIMAFI</span> menuju arah yang lebih baik.
          </p>

          <div className="text-center text-blue-400 font-bold">
            HIDUP HIMAFI!
          </div>

          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}

