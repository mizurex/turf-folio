import LeetContributionGraph from "../components/leetcode-graph";

export default function LeetCodeGraphAnimateDemo() {
  return (
    <div className="flex flex-col gap-8 w-full items-center">
      <div className="space-y-2 w-full max-w-2xl">
        <h3 className="font-medium text-sm text-muted-foreground">Pulse Animation</h3>
        <LeetContributionGraph 
          username="dhananjaycw" 
          blockAnimate="pulse" 
          theme="blue"
          blockVariant="default"
        />
      </div>
      
      <div className="space-y-2 w-full max-w-2xl">
        <h3 className="font-medium text-sm text-muted-foreground">Bounce Animation</h3>
        <LeetContributionGraph 
          username="dhananjaycw" 
          blockAnimate="bounce" 
          theme="orange" 
        />
      </div>
    </div>
  )
}

