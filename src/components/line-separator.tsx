export default function Separator({ width = "w-[30rem]" ,className}: { width?: string ,className?: string }) {
    return (
      <div
        className={`${width} relative left-1/2 right-1/2 -ml-[100vw] -mr-[100vw] border-b border-border dark:border-[#333333] ${className}`}
      />
    );
  }