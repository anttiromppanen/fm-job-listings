import { getRandomPastelColor } from "@/lib/helpers";

export default function MockLogo({ companyName }: { companyName: string }) {
  const randomColor = getRandomPastelColor();

  return (
    <div
      className="min-h-[88px] min-w-[88px] max-h-[88px] max-w-[88px] rounded-full text-userVeryDarkGrayishCyan font-semibold select-none flex justify-center items-center text-xs text-center p-1"
      style={{
        backgroundColor: randomColor,
        boxShadow: `inset 0px 0px 48px 0px #ababab`,
      }}
    >
      {companyName}
    </div>
  );
}
