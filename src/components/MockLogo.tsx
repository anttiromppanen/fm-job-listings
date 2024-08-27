import { getRandomPastelColor } from "@/lib/helpers";

export default function MockLogo({ companyName }: { companyName: string }) {
  const randomColor = getRandomPastelColor();

  return (
    <div
      className="rounded-full text-userVeryDarkGrayishCyan flex-shrink-0 size-[88px] font-semibold select-none flex justify-center items-center text-xs text-center p-1"
      style={{
        backgroundColor: randomColor,
        boxShadow: `inset 0px 0px 48px 0px #ababab`,
      }}
    >
      {companyName}
    </div>
  );
}
