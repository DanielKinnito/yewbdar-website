import React from "react";
import { ArrowUpRight, Sofa, Refrigerator, Home, Trees, Building2, Hammer } from "lucide-react";

interface ServiceItem {
  id: string;
  step: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  description: string;
}

const services: ServiceItem[] = [
  {
    id: "furniture",
    step: "01",
    title: "Furniture Removal",
    category: "Residential",
    icon: Sofa,
    tags: ["Sectionals", "Mattresses", "Dressers", "Dining Sets"],
    description:
      "We carefully carry bulky sectionals, heavy bedroom furniture, and tables down stairs and out of narrow hallways without scuffing your walls.",
  },
  {
    id: "appliances",
    step: "02",
    title: "Appliance Recycling",
    category: "Eco-Disposal",
    icon: Refrigerator,
    tags: ["Refrigerators", "Washers & Dryers", "Stoves", "Freezers"],
    description:
      "Heavy appliances hauled safely and routed through certified Atlanta metal and freon recyclers rather than sent to landfills.",
  },
  {
    id: "cleanouts",
    step: "03",
    title: "Full Estates & Cleanouts",
    category: "Whole Property",
    icon: Home,
    tags: ["Whole Estates", "Full Garages", "Attics", "Basements"],
    description:
      "Compassionate, respectful, and thorough. We handle whole-house cleanouts, senior downsizing, and storage purges, sweeping every room clean.",
  },
  {
    id: "debris",
    step: "04",
    title: "Yard & Storm Debris",
    category: "Outdoor",
    icon: Trees,
    tags: ["Fallen Limbs", "Old Fencing", "Landscaping Waste", "Timber"],
    description:
      "Tree limbs, rotted fence panels, and heavy storm debris cleared fast so your lawn and driveway are immediately safe and usable.",
  },
  {
    id: "commercial",
    step: "05",
    title: "Commercial & Office Clearouts",
    category: "Commercial",
    icon: Building2,
    tags: ["Modular Cubicles", "E-Waste", "Filing Cabinets", "Retail Fixtures"],
    description:
      "Fast, discreet tenant clearouts and office decommissioning. We coordinate with building property managers and freight elevators seamlessly.",
  },
  {
    id: "demolition",
    step: "06",
    title: "Light Demolition & Haul",
    category: "Specialized",
    icon: Hammer,
    tags: ["Shed Teardown", "Hot Tub Removal", "Deck Dismantling", "Carpet"],
    description:
      "We dismantle rotting sheds, disconnect and haul away backyard hot tubs, and pull old decking, leaving the ground completely level and clean.",
  },
];

export function ServicesCatalog() {
  return (
    <section id="services" className="py-20 sm:py-32 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest bg-forest-light/80 px-3.5 py-1 rounded-full border border-forest/20 inline-block mb-3">
            What We Haul
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
            Full-Service Removal. From One Item to Everything.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-muted leading-relaxed">
            Every cleanout includes loading, heavy lifting from wherever it sits, broom-clean finish, and eco-conscious recycling or donation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="bezel-shell">
                <div className="bezel-core p-8 sm:p-9 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-forest-light text-forest flex items-center justify-center border border-forest/20 shadow-sm">
                        <Icon className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <span className="text-xs font-bold font-mono text-zinc-400">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-charcoal tracking-tight mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-muted leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Quick Item Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-surface-subtle border border-black/[0.04] text-[11px] font-medium text-zinc-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between">
                    <span className="text-xs font-semibold text-forest uppercase tracking-wider">
                      {item.category}
                    </span>
                    <a
                      href="#estimate-form"
                      className="group inline-flex items-center gap-1.5 text-xs font-bold text-charcoal hover:text-forest transition-colors apple-press"
                    >
                      <span>Book Free Estimate</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
