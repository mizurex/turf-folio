import LeetContributionGraph from "../components/leetcode-graph";

export default function LeetCodeGraphThemeDemo() {
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <LeetContributionGraph username="dhananjaycw" theme="green" />
      <LeetContributionGraph username="dhananjaycw" theme="blue" />
      <LeetContributionGraph username="dhananjaycw" theme="red" />
      <LeetContributionGraph username="dhananjaycw" theme="orange" />
      <LeetContributionGraph username="dhananjaycw" theme="purple" />
      <LeetContributionGraph username="dhananjaycw" theme="yellow" />
    </div>
  )
}

