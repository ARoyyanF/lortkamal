import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { DndContext, closestCenter, type DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Table, TableBody } from "@/components/ui/table";
import { SortableItem } from "./sortableitem";

export const DraggablePreferenceTable = ({ name, label, form, sensors }) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-lg mb-4 text-white font-semibold">
          {label}
        </FormLabel>
        <div className="pt-4 text-white font-bold">
          Preferensi teratas / Paling penting
        </div>
        <FormControl>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={(event: DragEndEvent) => {
              const { active, over } = event;

              if (active.id !== over?.id) {
                const oldIndex = field.value.findIndex(
                  (item) => item.id === active.id
                );
                const newIndex = field.value.findIndex(
                  (item) => item.id === over?.id
                );

                field.onChange(arrayMove(field.value, oldIndex, newIndex));
              }
            }}
          >
            <Table className="overflow-hidden text-white ">
              <TableBody>
                <SortableContext
                  items={field.value.map((p) => p.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {field.value.map((preference, index) => (
                    <SortableItem
                      key={preference.id}
                      id={preference.id}
                      preference={preference}
                    />
                  ))}
                </SortableContext>
              </TableBody>
            </Table>
          </DndContext>
        </FormControl>
        <FormMessage className="font-black" />
        <div className="text-white font-bold">
          Preferensi terbawah / Paling tidak penting
        </div>
      </FormItem>
    )}
  />
);

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
        <FormMessage className="font-black" />
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
        <FormMessage className="font-black" />
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
            value={field.value || ""}
            className=""
          >
            {options.map((option) => (
              <FormItem key={option.value} className="flex gap-4 items-center ">
                <div></div>
                <FormControl>
                  <RadioGroupItem
                    value={option.value}
                    className=" border-2 border-blue-400 bg-white ring-2 ring-blue-600"
                  />
                </FormControl>
                <FormLabel className="font-semibold text-white mt-0">
                  {option.label}
                </FormLabel>
              </FormItem>
            ))}
          </RadioGroup>
        </FormControl>
        <FormMessage className="font-black" />
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
          <div className="flex flex-grow px-12 py-6 gap-1 md:flex-row flex-col">
            {[...Array(max - min + 1)].map((_, i) => (
              <Button
                key={i + min}
                type="button"
                className={`flex-1 min-w-32 md:min-w-0 rounded-xl border-4 border-blue-700 bg-white text-black font-bold hover:bg-blue-500 ${
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
        <FormMessage className="font-black" />
      </FormItem>
    )}
  />
);

export const TextBox = ({ name, label, placeholder, form }) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-lg mb-4 text-white font-semibold">
          {label}
        </FormLabel>
        <FormControl>
          <Textarea
            placeholder={placeholder}
            {...field}
            className="text-white bg-transparent border border-input ring-offset-background file:border-0 file:bg-transparent focus-visible:outline-none ring-0"
          />
        </FormControl>
        <FormMessage className="font-black" />
      </FormItem>
    )}
  />
);

export const SliderScale = ({
  name,
  label,
  min,
  max,
  mintext,
  maxtext,
  form,
}) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-lg mb-4 text-white font-semibold">
          {label}
        </FormLabel>
        <FormControl>
          <div>
            <Slider
              defaultValue={[field.value]}
              onValueChange={(value) => field.onChange(value[0])}
              step={0.01}
              min={min}
              max={max}
            />
            {/* <div className="flex  items-center mt-4 flex-col">
              <div className="flex-none"></div> */}
            <div className="flex justify-between flex-row py-3">
              <span className="text-sm text-secondary">{mintext}</span>
              <span className="text-sm text-secondary text-right">
                {maxtext}
              </span>
            </div>
            {/* </div> */}
          </div>
        </FormControl>
        <FormMessage className="font-black" />
      </FormItem>
    )}
  />
);

export const FormCard = ({ children }) => (
  <Card className="bg-gradient-to-tr from-[#21217c] to-[#214a9b] border-none ">
    <CardContent className="p-6">{children}</CardContent>
  </Card>
);
