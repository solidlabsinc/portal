import Image from "next/image";

export default async function PartnersSection() {
  return (
    <div className="bg-[#000914] py-20">
      <div className="container pr-0 lg:pl-10">
        <div className="scroll-hidden flex w-full snap-x snap-mandatory gap-2.5 overflow-x-auto">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="relative m-10 size-32 shrink-0 snap-start scroll-mx-10"
            >
              <Image
                src={`/sec-partner-0${idx}.webp`}
                alt="Partner"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
