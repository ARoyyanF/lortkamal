import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const TextInput = ({ name, label, placeholder, form }) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-white font-black">{label}</FormLabel>
        <FormControl>
          <Input
            placeholder={placeholder}
            {...field}
            className="font-bold bg-transparent border-4 border-blue-400 rounded-lg focus:border-blue-200 px-2 text-white"
          />
        </FormControl>
      </FormItem>
    )}
  />
);

export const CheckboxGroup = ({ name, label, options, form }) => (
  <FormField
    control={form.control}
    name={name}
    render={() => (
      <FormItem className="">
        <FormLabel className="text-lg mb-4 text-white font-semibold">
          {label}
        </FormLabel>
        <div className="space-y-3 ">
          {options.map((option) => (
            <FormField
              key={option.id}
              control={form.control}
              name={name}
              render={({ field }) => {
                return (
                  <FormItem
                    key={option.id}
                    className=" flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        className=" border-x-2 text-white border-blue-400 bg-white ring-2 ring-blue-600"
                        checked={field.value?.includes(option.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, option.id])
                            : field.onChange(
                                field.value?.filter(
                                  (value) => value !== option.id
                                )
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-sm text-white font-semibold">
                      {option.label}
                    </FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
        </div>
      </FormItem>
    )}
  />
);

export const RadioButtonGroup = ({ name, label, options, form }) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-lg mb-4 text-white font-semibold">
          {label}
        </FormLabel>
        <FormControl>
          <RadioGroup
            onValueChange={field.onChange}
            defaultValue={field.value}
            className=""
          >
            {options.map((option) => (
              <FormItem key={option.value} className="flex gap-4 items-center">
                <div></div>
                <FormControl>
                  <RadioGroupItem
                    value={option.value}
                    className=" border-2 text-black border-blue-400 bg-white ring-2 ring-blue-600"
                  />
                </FormControl>
                <FormLabel className="font-semibold text-white mt-0">
                  {option.value}
                </FormLabel>
              </FormItem>
            ))}
          </RadioGroup>
        </FormControl>
      </FormItem>
    )}
  />
);

export const RatingScale = ({ name, label, min, max, form }) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-lg mb-4 text-white font-semibold">
          {label}
        </FormLabel>
        <div className="flex justify-between items-center mt-4 md:flex-row flex-col">
          <span className="text-sm text-white">Sangat tidak setuju</span>
          <div className="flex gap-2 md:flex-row flex-col">
            {[...Array(max - min + 1)].map((_, i) => (
              <Button
                key={i + min}
                type="button"
                className={`w-8 h-8 p-0 rounded-full border-4 border-blue-700 bg-white text-black font-bold hover:bg-blue-500 ${
                  field.value === String(i + min)
                    ? "bg-blue-700 text-white"
                    : ""
                }`}
                onClick={() => field.onChange(String(i + min))}
              >
                {i + min}
              </Button>
            ))}
          </div>
          <span className="text-sm text-white">Sangat setuju</span>
        </div>
      </FormItem>
    )}
  />
);

export const FormCard = ({ children }) => (
  <Card className="bg-gradient-to-tr from-[#111142] to-[#071532] border-none ">
    <CardContent className="p-6">{children}</CardContent>
  </Card>
);
