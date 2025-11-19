import { useState } from "react";
import { contributionsData, PalisaFoundationContributions, tamboContributionsData } from "@/data/contribution";
import { ContributionSection } from "./contribution-section";


export default function Contributions() {
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
        billing: true,
        tambo: false,
        palisa: false,
    });

    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

    const toggleSection = (section: string) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const toggleItem = (itemId: string) => {
        setOpenItems(prev => ({ ...prev, [itemId]: !prev[itemId] }));
    };

    return(
        <div className="space-y-2">
          {/* billingSDK Section */}
          <ContributionSection
            title="billingSDK"
            sectionId="billing"
            items={contributionsData}
            isOpen={openSections.billing}
            onToggle={() => toggleSection('billing')}
            openItems={openItems}
            onToggleItem={toggleItem}
            iconColor="#1c5db8"
          />

          {/* Tambo AI Section */}
          <ContributionSection
            title="tambo ai"
            sectionId="tambo"
            items={tamboContributionsData}
            isOpen={openSections.tambo}
            onToggle={() => toggleSection('tambo')}
            openItems={openItems}
            onToggleItem={toggleItem}
            iconColor="#3b82f6"
          />

          {/* Palisa Foundation Section */}
          <ContributionSection
            title="Palisa Foundation"
            sectionId="palisa"
            items={PalisaFoundationContributions}
            isOpen={openSections.palisa}
            onToggle={() => toggleSection('palisa')}
            openItems={openItems}
            onToggleItem={toggleItem}
             iconColor="#3b82f6"
          />
        </div>
    )
  }
