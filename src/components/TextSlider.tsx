import { cn } from "@/lib/utils";
import { AlertCircle, Eye } from "lucide-react";
import { useState } from "react";

type TextSliderProps = {
  messages: { text: string; subtext: string }[];
};

export function TextSlider({ messages }: TextSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <section className="relative h-[257px] w-[240px] bg-purple-800 rounded-xl">
      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 z-20 rounded-full bg-purple-800 p-2">
        <AlertCircle className="w-[51.5px] h-[51.5px]" stroke="white" />
      </div>
      <div className="relative h-full w-full">
        {messages.map(({ text, subtext }, index) => (
          <div
            key={`${text}-${index}`}
            className={cn(
              "absolute top-0 left-0 w-full h-full flex flex-col items-center gap-3 py-10 px-5 transition-opacity duration-1000 ease-in-out",
              imageIndex === index ? "opacity-100" : "opacity-0"
            )}
          >
            <span className="text-base font-semibold text-white">{text}</span>
            <span className="text-xs text-white mb-3">{subtext}</span>
            <button className="w-fit bg-white rounded-3xl flex items-center gap-2 text-xs h-[27px] justify-center px-5">
              לצפייה בקריאות <Eye className="h-4 w-4" stroke="black" />
            </button>
          </div>
        ))}
      </div>

      <div
        className={cn(
          "absolute bottom-5 left-[50%] flex gap-1 transform -translate-x-1/2"
        )}
      >
        {messages.map((_, index) => (
          <button
            key={index}
            className={cn(
              "cursor-pointer w-4 h-4 rounded-full",
              index === imageIndex ? "bg-white" : "bg-gray-50 opacity-45"
            )}
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}
