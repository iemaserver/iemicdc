import { cn } from "@/lib/utils";

export default function ShiningButton({ label, onClick }: { label: string, onClick: () => void }) {

  return (
    <button onClick={onClick} className="group cursor-pointer text-xs md:text-sm rounded-full border-4 border-primary border-opacity-0 bg-transparent p-1 transition-all duration-500 hover:border-opacity-100">
      <div className="relative flex items-center justify-center gap-4 overflow-hidden rounded-full bg-primary md:px-6 px-3 md:py-4 py-3 font-bold text-white">
        {label}
        {/* <ArrowRight className="transition-all group-hover:translate-x-2 group-hover:scale-125" /> */}
        <div
          className={cn(
            "absolute -left-16 top-0 h-full w-12 rotate-[30deg] scale-y-150 bg-white/10 transition-all duration-700 group-hover:left-[calc(100%+1rem)]",
          )}
        />
      </div>
    </button>
  );
}
