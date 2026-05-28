const images = {
  restaurant:
    "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80')",
  dental:
    "url('https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=80')",
  ecommerce:
    "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80')",
  service:
    "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80')",
  manufacturing:
    "url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=80')",
  realEstate:
    "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80')",
};

const listings = [
  ["sac-dental-lab", "Profitable Sacramento Specialty Dental Lab", "Healthcare Services", "Sacramento", "CA", 850000, 1420000, 310000, 245000, 68000, 210000, 0, 7200, 2012, 18, true, true, false, true, false, false, true, "CPA reviewed", 95],
  ["austin-smokehouse", "Absentee-Owned Austin Smokehouse", "Restaurants", "Austin", "TX", 620000, 1850000, 240000, 190000, 42000, 155000, 0, 9800, 2016, 32, true, true, false, false, true, false, true, "Broker verified", 82],
  ["denver-hvac", "Denver Commercial HVAC Service Route", "Service Businesses", "Denver", "CO", 1120000, 2280000, 455000, 390000, 35000, 310000, 0, 6800, 2009, 24, true, true, false, true, false, false, true, "CPA reviewed", 100],
  ["phoenix-ecom", "Growing Home Goods E-Commerce Brand", "E-commerce", "Phoenix", "AZ", 730000, 2640000, 280000, 220000, 215000, 35000, 0, 0, 2019, 9, false, false, true, true, false, true, true, "Seller-submitted", 76],
  ["tampa-machine", "Precision Machine Shop With Real Estate", "Manufacturing", "Tampa", "FL", 2350000, 3610000, 715000, 640000, 180000, 940000, 1250000, 0, 1998, 41, true, true, true, false, false, false, true, "CPA reviewed", 100],
  ["portland-coffee", "Portland Neighborhood Coffee Group", "Restaurants", "Portland", "OR", 480000, 1320000, 165000, 118000, 26000, 88000, 0, 6200, 2015, 27, true, false, false, false, false, false, false, "Seller-submitted", 61],
  ["miami-medspa", "Miami Medical Spa With Manager In Place", "Dental/Medical", "Miami", "FL", 990000, 1740000, 365000, 300000, 55000, 260000, 0, 11800, 2018, 16, true, true, false, true, true, false, true, "CPA reviewed", 92],
  ["nashville-cleaning", "Recurring Commercial Cleaning Accounts", "Service Businesses", "Nashville", "TN", 390000, 910000, 172000, 135000, 9000, 46000, 0, 2200, 2014, 42, true, false, false, true, true, true, true, "Broker verified", 87],
  ["boise-saas", "Vertical SaaS Add-On With Seller Support", "E-commerce", "Boise", "ID", 680000, 810000, 235000, 210000, 0, 18000, 0, 0, 2020, 6, false, false, false, true, false, true, true, "CPA reviewed", 90],
  ["charlotte-print", "Charlotte B2B Print and Signage Shop", "Manufacturing", "Charlotte", "NC", 560000, 1210000, 220000, 176000, 74000, 185000, 0, 5400, 2007, 15, true, true, false, false, false, false, false, "Seller-submitted", 68],
  ["san-diego-pet", "San Diego Pet Services Franchise", "Service Businesses", "San Diego", "CA", 430000, 780000, 155000, 124000, 12000, 64000, 0, 4100, 2017, 22, true, true, false, true, false, false, true, "Broker verified", 84],
  ["columbus-auto", "Auto Repair Shop Including Property", "Real Estate Included", "Columbus", "OH", 1580000, 1920000, 410000, 345000, 62000, 340000, 850000, 0, 2003, 19, true, true, true, false, false, false, true, "CPA reviewed", 96],
  ["las-vegas-dental", "Las Vegas Dental Practice Expansion Deal", "Dental/Medical", "Las Vegas", "NV", 1450000, 2100000, 505000, 445000, 38000, 390000, 0, 14200, 2011, 21, true, true, false, false, false, false, true, "CPA reviewed", 95],
  ["salt-lake-metal", "Specialty Metal Fabrication Company", "Manufacturing", "Salt Lake City", "UT", 1840000, 3180000, 610000, 555000, 240000, 770000, 0, 16300, 2001, 36, true, true, false, true, false, false, true, "CPA reviewed", 100],
  ["seattle-fba", "Seattle Amazon FBA Portfolio", "E-commerce", "Seattle", "WA", 510000, 1480000, 182000, 150000, 160000, 22000, 0, 0, 2021, 4, false, false, false, true, false, true, false, "Seller-submitted", 66],
  ["raleigh-childcare", "Raleigh Childcare Center With Property", "Real Estate Included", "Raleigh", "NC", 1290000, 1180000, 286000, 238000, 15000, 125000, 720000, 0, 2006, 33, true, true, true, false, false, false, true, "Broker verified", 90],
  ["brooklyn-bakery", "Brooklyn Wholesale Bakery", "Restaurants", "Brooklyn", "NY", 780000, 2260000, 265000, 220000, 33000, 275000, 0, 18200, 2013, 44, true, false, false, false, false, false, true, "Seller-submitted", 74],
  ["minneapolis-plumbing", "Minneapolis Plumbing and Drain Company", "Service Businesses", "Minneapolis", "MN", 970000, 1760000, 390000, 335000, 28000, 180000, 0, 5200, 2010, 20, true, true, false, true, false, false, true, "CPA reviewed", 100],
  ["orlando-storage", "Orlando Boat and RV Storage Facility", "Real Estate Included", "Orlando", "FL", 3250000, 890000, 520000, 470000, 0, 60000, 2650000, 0, 1996, 7, true, true, true, true, true, false, true, "Broker verified", 88],
  ["chicago-staffing", "Chicago Light Industrial Staffing Firm", "Service Businesses", "Chicago", "IL", 1180000, 4100000, 430000, 360000, 0, 25000, 0, 8600, 2014, 12, true, true, false, false, true, false, true, "CPA reviewed", 91],
].map((row, index) => {
  const [
    id,
    title,
    industry,
    city,
    state,
    askingPrice,
    grossRevenue,
    cashFlowSDE,
    ebitda,
    inventoryValue,
    ffeValue,
    realEstateValue,
    rent,
    establishedYear,
    employees,
    sellerFinancingAvailable,
    sbaEligible,
    realEstateIncluded,
    absenteeOwner,
    franchise,
    homeBased,
    documentsAvailable,
    verificationStatus,
    transparencyScore,
  ] = row;
  const key = industry.includes("Restaurant")
    ? "restaurant"
    : industry.includes("Dental") || industry.includes("Healthcare")
      ? "dental"
      : industry.includes("commerce")
        ? "ecommerce"
        : industry.includes("Manufacturing")
          ? "manufacturing"
          : industry.includes("Real Estate")
            ? "realEstate"
            : "service";
  const growth = 0.04 + (index % 5) * 0.018;
  const history = [2023, 2024, 2025].map((year, historyIndex) => {
    const factor = 1 - growth * (2 - historyIndex);
    return {
      year,
      revenue: Math.round(grossRevenue * factor),
      grossProfit: Math.round(grossRevenue * factor * (0.46 + (index % 4) * 0.04)),
      sde: Math.round(cashFlowSDE * factor),
      ebitda: Math.round(ebitda * factor),
      netIncome: Math.round(ebitda * factor * 0.72),
    };
  });
  return {
    id,
    sellerId: `seller-${index + 1}`,
    title,
    industry,
    city,
    state,
    askingPrice,
    grossRevenue,
    cashFlowSDE,
    ebitda,
    inventoryValue,
    ffeValue,
    realEstateValue,
    rent,
    establishedYear,
    employees,
    ownerHoursPerWeek: absenteeOwner ? 8 + (index % 3) * 4 : 34 + (index % 4) * 5,
    managerInPlace: absenteeOwner || index % 3 === 0,
    sellerFinancingAvailable,
    sbaEligible,
    realEstateIncluded,
    absenteeOwner,
    franchise,
    relocatable: homeBased || key === "ecommerce",
    homeBased,
    inventoryIncluded: inventoryValue > 0,
    ffeIncluded: ffeValue > 0,
    leaseExpiration: realEstateIncluded ? "Owned property" : `${2028 + (index % 5)}-12-31`,
    reasonForSelling: ["Retirement", "Partner buyout", "Family relocation", "Refocusing portfolio"][index % 4],
    description:
      "Disabled veteran-owned opportunity with normalized earnings, operating notes, document visibility, and deal metrics prepared for qualified buyer diligence.",
    growthOpportunities:
      "Add outbound sales, tighten pricing, launch local partnerships, and modernize digital acquisition channels.",
    risks:
      "Key-person transition, lease transfer timing, and customer retention should be validated during diligence.",
    verificationStatus,
    transparencyScore,
    status: "active",
    createdAt: `2026-05-${String(6 + index).padStart(2, "0")}`,
    image: images[key],
    revenueTrend: `${Math.round(growth * 100)}% YoY revenue`,
    profitTrend: `${Math.round((growth + 0.012) * 100)}% YoY SDE`,
    customerConcentration: `${14 + (index % 6) * 5}% top customer`,
    recurringRevenue: `${18 + (index % 7) * 9}%`,
    onlineRevenue: `${key === "ecommerce" ? 92 : 14 + (index % 4) * 8}%`,
    grossMargin: `${46 + (index % 5) * 6}%`,
    netMargin: `${Math.round((ebitda / grossRevenue) * 100)}%`,
    workingCapitalRequirement: Math.round(grossRevenue * 0.045),
    sellerFinancingTerms: sellerFinancingAvailable ? "10% seller note over 36 months" : "Not currently offered",
    sbaPrequalification: sbaEligible ? "Lender screen complete" : "Not yet screened",
    supportTraining: "Four weeks included plus optional advisory transition.",
    competition: "Fragmented local competitors with limited verified financial disclosure.",
    facilities: realEstateIncluded ? "Real estate included in asking package." : `Leased facility, rent ${money(rent)} per month.`,
    documents: makeDocuments(documentsAvailable, index),
    dvbaMember: index % 5 !== 1,
    disabledVeteranOwned: true,
    buyerEligibility: "Qualified disabled veteran buyers only",
    transitionPriority: index % 3 === 0 ? "Service-disabled veteran succession preferred" : "Disabled veteran buyer qualification required",
    veteranCertification: index % 4 === 0 ? "SDVOSB transfer review ready" : "DVBE/DVBA seller attestation on file",
    history,
  };
});

const app = document.querySelector("#app");
const saved = new Set(JSON.parse(localStorage.getItem("savedListings") || "[]"));
const compared = new Set(JSON.parse(localStorage.getItem("compareListings") || "[]"));
let sellerStep = 0;
let marketplaceSearchTimer;

const filters = {
  query: "",
  industry: "Any industry",
  price: "Any price",
  cashFlow: "Any cash flow",
  flags: new Set(),
};

const quickFilters = [
  "Restaurants",
  "E-commerce",
  "Service Businesses",
  "Dental/Medical",
  "Manufacturing",
  "Real Estate Included",
  "Absentee Owner",
  "SBA Eligible",
  "DVBA Member",
  "Disabled Veteran-Owned",
  "Under $500K",
  "High Cash Flow",
];

const buyerServices = [
  {
    title: "Disabled Veteran Buyer Verification",
    category: "Eligibility",
    description: "Confirm buyer qualification before private seller contact, NDA access, and document release.",
    cta: "Start verification",
  },
  {
    title: "SBA Loan Readiness",
    category: "Financing",
    description: "Package personal financials, buyer resume, deal summary, projections, and lender questions for SBA review.",
    cta: "Build loan packet",
  },
  {
    title: "Veteran-Friendly Lender Matching",
    category: "Financing",
    description: "Route qualified buyers to lenders comfortable with acquisition financing, SBA loans, seller notes, and working capital.",
    cta: "Match lenders",
  },
  {
    title: "Seller Financing Structuring",
    category: "Deal Terms",
    description: "Model seller notes, earnouts, standby debt, and down-payment scenarios that make the acquisition easier to close.",
    cta: "Structure terms",
  },
  {
    title: "Due Diligence Review",
    category: "Diligence",
    description: "Review P&Ls, tax returns, bank statements, leases, customer concentration, payroll, assets, liabilities, and legal standing.",
    cta: "Review documents",
  },
  {
    title: "CPA Quality of Earnings Lite",
    category: "Diligence",
    description: "Normalize SDE, verify add-backs, compare deposits to reported revenue, and flag cash-flow risks before LOI.",
    cta: "Check earnings",
  },
  {
    title: "LOI and Purchase Agreement Support",
    category: "Legal",
    description: "Coordinate buyer-side legal review for LOIs, asset purchase agreements, lease assignments, licenses, and closing conditions.",
    cta: "Get legal help",
  },
  {
    title: "Business Insurance Setup",
    category: "Operations",
    description: "Line up general liability, workers comp, property, cyber, professional liability, and key-person coverage as needed.",
    cta: "Plan coverage",
  },
  {
    title: "Transition and Operator Onboarding",
    category: "Operations",
    description: "Create a 90-day takeover plan for employees, vendors, customers, training, systems access, and seller handoff.",
    cta: "Plan transition",
  },
  {
    title: "Veteran Certification Transfer Support",
    category: "Certification",
    description: "Track DVBE, SDVOSB, DVBA, local procurement, and ownership-control requirements after the transaction closes.",
    cta: "Review certification",
  },
  {
    title: "Working Capital Planning",
    category: "Financing",
    description: "Estimate cash needed for payroll, inventory, rent, seasonality, taxes, repairs, and the first 120 days of ownership.",
    cta: "Estimate capital",
  },
  {
    title: "Post-Close Growth Plan",
    category: "Growth",
    description: "Prioritize pricing, sales, recruiting, vendor renegotiation, government contracting, and local veteran networks.",
    cta: "Map growth",
  },
];

const membershipPlans = [
  {
    name: "Free Explorer",
    price: "$0",
    audience: "Curious buyers",
    features: ["Browse limited listing summaries", "Save public listings", "See basic asking price and industry", "Receive public weekly deal drops"],
    cta: "Start browsing",
  },
  {
    name: "Buyer Pro",
    price: "$49/mo",
    audience: "Active disabled veteran buyers",
    features: ["Full financial snapshots", "Deal fit scores", "Save and compare listings", "Watchlist alerts", "Buyer return calculators"],
    cta: "Unlock deal analysis",
  },
  {
    name: "Verified Buyer",
    price: "$149/mo",
    audience: "NDA-ready buyers",
    features: ["Disabled veteran verification", "Request NDAs and seller contact", "Access private documents", "Lender packet builder", "Weekly matched deal drops"],
    cta: "Get verified",
  },
  {
    name: "Acquisition Concierge",
    price: "$750+/mo",
    audience: "Buyers preparing LOIs",
    features: ["Lender matching", "Diligence coordination", "LOI support", "Transition planning", "Certification transfer checklist"],
    cta: "Talk to an advisor",
  },
  {
    name: "Seller Pro",
    price: "$199/mo",
    audience: "DVBA sellers",
    features: ["Valuation estimator", "Listing readiness score", "Secure document room", "Qualified buyer leads", "Exit-to-veteran positioning"],
    cta: "Prepare listing",
  },
  {
    name: "Broker / Advisor",
    price: "$399/mo",
    audience: "Deal professionals",
    features: ["Manage multiple listings", "Buyer pipeline tracking", "Document gating", "Lead qualification", "Deal analytics"],
    cta: "Manage deals",
  },
];

const readinessQuestions = [
  ["cash", "Cash available for down payment", 180000, "$"],
  ["credit", "Credit score", 705, ""],
  ["income", "Target owner income", 140000, "$"],
  ["hours", "Hours per week available", 35, ""],
  ["experience", "Relevant operating experience years", 6, ""],
  ["timeline", "Months until purchase", 6, ""],
];

const cityPositions = {
  Austin: [48, 68],
  Boise: [27, 34],
  Brooklyn: [84, 36],
  Charlotte: [73, 56],
  Chicago: [62, 38],
  Columbus: [68, 42],
  Denver: [41, 46],
  "Las Vegas": [24, 52],
  Miami: [78, 82],
  Minneapolis: [55, 27],
  Nashville: [63, 58],
  Orlando: [76, 77],
  Phoenix: [29, 61],
  Portland: [17, 24],
  Raleigh: [76, 54],
  Sacramento: [15, 45],
  "Salt Lake City": [31, 41],
  "San Diego": [19, 60],
  Seattle: [18, 17],
  Tampa: [74, 80],
};

function makeDocuments(available, index) {
  const docs = [
    ["P&L statements", "nda_required"],
    ["Tax returns", "seller_approved"],
    ["Bank statements", "seller_approved"],
    ["Lease", "nda_required"],
    ["Equipment list", "public"],
    ["Inventory list", "nda_required"],
    ["Customer/revenue breakdown", "seller_approved"],
    ["Seller memorandum", "nda_required"],
  ];
  return docs.slice(0, available ? 8 : 4 + (index % 3)).map(([type, visibility], docIndex) => ({
    id: `doc-${index}-${docIndex}`,
    type,
    fileUrl: "#",
    visibility,
    verified: available && docIndex < 5,
    uploadedAt: `2026-04-${String(10 + docIndex).padStart(2, "0")}`,
  }));
}

function money(value) {
  if (value === 0) return "$0";
  if (Math.abs(value) >= 1000000) return `$${(value / 1000000).toFixed(value % 1000000 ? 2 : 1)}M`;
  if (Math.abs(value) >= 1000) return `$${Math.round(value / 1000)}K`;
  return `$${Math.round(value).toLocaleString()}`;
}

function number(value) {
  return Math.round(value).toLocaleString();
}

function multiple(listing) {
  return `${(listing.askingPrice / listing.cashFlowSDE).toFixed(1)}x SDE`;
}

function badges(listing) {
  return [
    listing.transparencyScore >= 85 && ["Transparent Listing", "verified"],
    listing.verificationStatus.includes("CPA") && ["CPA Reviewed", "verified"],
    listing.verificationStatus.includes("Broker") && ["Broker Verified", "verified"],
    listing.sbaEligible && ["SBA Eligible", "sba"],
    listing.dvbaMember && ["DVBA Member", "verified"],
    listing.disabledVeteranOwned && ["Disabled Veteran-Owned", "verified"],
    ["Qualified DV Buyer", "sba"],
    listing.realEstateIncluded && ["Real Estate Included", "asset"],
    listing.absenteeOwner && ["Absentee Owner", "asset"],
    listing.sellerFinancingAvailable && ["Seller Financing", "sba"],
    listing.documents.length >= 6 && ["Financials Uploaded", "verified"],
    listing.transparencyScore < 70 && ["Needs More Info", ""],
  ].filter(Boolean);
}

function saveState() {
  localStorage.setItem("savedListings", JSON.stringify([...saved]));
  localStorage.setItem("compareListings", JSON.stringify([...compared]));
}

function toast(message) {
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  document.body.append(node);
  setTimeout(() => node.remove(), 2200);
}

function setRoute(hash) {
  location.hash = hash;
}

function render() {
  const [route, id] = (location.hash || "#home").replace("#", "").split("/");
  if (route === "marketplace") renderMarketplace();
  else if (route === "listing") renderDetail(id || listings[0].id);
  else if (route === "sell") renderSellerFlow();
  else if (route === "saved") renderSaved();
  else if (route === "compare") renderCompare();
  else if (route === "services") renderServices();
  else if (route === "buyers") renderBuyers();
  else if (route === "sellers") renderSellers();
  else if (route === "qualification") renderQualification();
  else if (route === "readiness") renderReadiness();
  else if (route === "valuation") renderValuation();
  else if (route === "pricing") renderPricing();
  else renderHome();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function renderHome() {
  app.innerHTML = `
    <section class="hero">
      <div class="hero-content">
        <h1>Business ownership for disabled veterans.</h1>
        <p>A private acquisition platform for buying, financing, and transitioning DVBA-aligned businesses.</p>
        <div class="search-panel">
          <div class="search-row">
            <input class="search-input" id="home-search" placeholder="Search by industry, city, price, cash flow, revenue, or keyword" />
            <button class="button primary" id="home-search-button" type="button">Search deals</button>
          </div>
          <div class="quick-filter-row">
            ${quickFilters.map((filter) => `<button class="chip" data-quick="${filter}" type="button">${filter}</button>`).join("")}
          </div>
        </div>
      </div>
    </section>
    <section class="page">
      ${homeSignalSection()}
      ${trackSection()}
      ${homeSection("Featured Verified Opportunities", listings.filter((item) => item.transparencyScore >= 90).slice(0, 3))}
      <section class="section quiet-band">
        <div class="section-header">
          <div>
            <h2>Compare by Industry</h2>
            <p>Scan acquisition categories by typical price, earnings, and financing readiness.</p>
          </div>
          <a class="button quiet" href="#marketplace">Open marketplace</a>
        </div>
        <div class="industry-grid">
          ${industryTiles()}
        </div>
      </section>
    </section>
  `;

  document.querySelector("#home-search-button").addEventListener("click", () => {
    filters.query = document.querySelector("#home-search").value;
    setRoute("marketplace");
  });
  document.querySelector("#home-search").addEventListener("keydown", (event) => {
    if (event.key === "Enter") document.querySelector("#home-search-button").click();
  });
  document.querySelectorAll("[data-quick]").forEach((button) => {
    button.addEventListener("click", () => {
      applyQuickFilter(button.dataset.quick);
      setRoute("marketplace");
    });
  });
  wireCards();
}

function homeSignalSection() {
  return `
    <section class="section signal-strip">
      <div><strong>${listings.length}</strong><span>verified opportunities</span></div>
      <div><strong>${money(avg(listings, "cashFlowSDE"))}</strong><span>average SDE</span></div>
      <div><strong>${Math.round(avg(listings, "transparencyScore"))}/100</strong><span>average transparency</span></div>
      <div><strong>${listings.filter((item) => item.dvbaMember).length}</strong><span>DVBA member listings</span></div>
    </section>
  `;
}

function homeSection(title, items) {
  return `
    <section class="section">
      <div class="section-header">
        <div>
          <h2>${title}</h2>
          <p>Verified DVBA-aligned deal cards surface price, revenue, SDE, EBITDA, multiples, trends, eligibility, and diligence status upfront.</p>
        </div>
      </div>
      <div class="listing-grid">${items.map(cardHTML).join("")}</div>
    </section>
  `;
}

function industryTiles() {
  const industries = [...new Set(listings.map((item) => item.industry))];
  return industries
    .map((industry) => {
      const items = listings.filter((item) => item.industry === industry);
      return `
        <button class="industry-tile" data-industry="${industry}" type="button">
          <strong>${industry}</strong>
          <span class="muted">${items.length} listings</span><br />
          <span>${money(avg(items, "cashFlowSDE"))} avg SDE</span>
        </button>
      `;
    })
    .join("");
}

function trackSection() {
  return `
    <section class="section track-section">
      <a class="track-card buyer-track" href="#buyers">
        <span class="listing-kicker">Buyer track</span>
        <h2>Find a business you can afford, finance, and operate.</h2>
        <p>Readiness scoring, deal-fit analysis, lender preparation, NDA access, alerts, and acquisition support for qualified disabled veteran buyers.</p>
        <span class="button primary">Explore buyer tools</span>
      </a>
      <a class="track-card seller-track" href="#sellers">
        <span class="listing-kicker">Seller track</span>
        <h2>Exit to a verified disabled veteran buyer.</h2>
        <p>Valuation, listing readiness, confidential document rooms, buyer demand signals, and qualified lead flow for DVBA-aligned sellers.</p>
        <span class="button dark">Explore seller tools</span>
      </a>
    </section>
  `;
}

function renderBuyers() {
  renderReadiness();
}

function renderSellers() {
  renderValuation();
}

function qualificationContent() {
  return `
    <section class="page">
      <div class="section section-header">
        <div>
          <h1>Qualified Disabled Veteran Buyer Access</h1>
          <p>VetBuys specializes in Disabled Veterans Business Alliance businesses and gates seller contact, NDA access, and private documents to verified disabled veteran buyers.</p>
        </div>
        <a class="button primary" href="#marketplace">Browse eligible deals</a>
      </div>
      <div class="section qualification-grid">
        <div class="stat-card"><strong>1</strong><span class="muted">Verify disabled veteran buyer status before seller contact and NDA access.</span></div>
        <div class="stat-card"><strong>2</strong><span class="muted">Review DVBA member status, veteran ownership, and transfer readiness on every listing.</span></div>
        <div class="stat-card"><strong>3</strong><span class="muted">Compare financial fit, debt service, transition support, and certification requirements.</span></div>
      </div>
    </section>
  `;
}

function renderQualification() {
  app.innerHTML = qualificationContent();
}

function renderServices() {
  const buyerSide = buyerServices.filter((service) => ["Eligibility", "Financing", "Deal Terms", "Diligence", "Legal", "Operations", "Certification", "Growth"].includes(service.category));
  const sellerSide = [
    {
      title: "Seller Valuation",
      category: "Seller",
      description: "Estimate SDE multiple range, buyer confidence, and value drivers before deciding to list.",
      cta: "Estimate value",
    },
    {
      title: "Listing Readiness",
      category: "Seller",
      description: "Identify missing financial records, leases, asset lists, risk notes, and transition details.",
      cta: "Score listing",
    },
    {
      title: "Confidential Document Room",
      category: "Seller",
      description: "Gate tax returns, bank statements, customer details, and leases behind verification and NDA approval.",
      cta: "Prepare room",
    },
    {
      title: "Qualified Buyer Leads",
      category: "Seller",
      description: "Surface disabled veteran buyer demand by industry, geography, price band, and financing readiness.",
      cta: "View demand",
    },
  ];
  app.innerHTML = `
    <section class="page">
      <div class="section section-header">
        <div>
          <h1>Services</h1>
          <p>Separated support tracks for buyers trying to close and sellers preparing a trusted, confidential transfer.</p>
        </div>
        <a class="button primary" href="#pricing">View memberships</a>
      </div>
      <div class="section split-service-layout">
        <section class="service-track buyer-service-track">
          <div class="track-heading">
            <span class="listing-kicker">For buyers</span>
            <h2>Get from interested to financeable.</h2>
            <p>Verification, lender readiness, diligence, legal support, insurance, and transition planning.</p>
          </div>
          <div class="service-list">${buyerSide.slice(0, 7).map(serviceRow).join("")}</div>
          <a class="button primary" href="#buyers">Open buyer readiness</a>
        </section>
        <section class="service-track seller-service-track">
          <div class="track-heading">
            <span class="listing-kicker">For sellers</span>
            <h2>Prepare a cleaner, more credible exit.</h2>
            <p>Valuation, readiness, document gating, qualified buyer demand, and confidential listing support.</p>
          </div>
          <div class="service-list">${sellerSide.map(serviceRow).join("")}</div>
          <a class="button dark" href="#sellers">Open seller valuation</a>
        </section>
      </div>
    </section>
  `;
  wireServices();
}

function serviceRow(service) {
  return `
    <button class="service-row" type="button" data-service="${service.title}">
      <span>${service.category}</span>
      <strong>${service.title}</strong>
      <small>${service.description}</small>
    </button>
  `;
}

function renderReadiness() {
  const matched = [...listings]
    .sort((a, b) => dealFitScore(b) - dealFitScore(a))
    .slice(0, 3);
  app.innerHTML = `
    <section class="page">
      <div class="section section-header">
        <div>
          <h1>Acquisition Readiness</h1>
          <p>Help buyers answer the question that matters first: can I buy this, finance it, and replace my income after debt service?</p>
        </div>
        <a class="button primary" href="#pricing">See membership options</a>
      </div>
      <div class="section readiness-layout">
        <section class="panel">
          <div class="panel-header">
            <h2>Can I Buy This?</h2>
            <span class="badge verified">Live readiness score</span>
          </div>
          <div class="form-grid">
            ${readinessQuestions.map(([id, label, value, prefix]) => readinessInput(id, label, value, prefix)).join("")}
            <label>Disabled veteran verified?
              <select id="ready-veteran"><option value="yes">Yes</option><option value="soon">Not yet</option></select>
            </label>
            <label>Preferred involvement
              <select id="ready-involvement"><option value="operator">Owner-operator</option><option value="manager">Manager in place</option><option value="absentee">Absentee preferred</option></select>
            </label>
          </div>
          <div class="readiness-score" id="readiness-score"></div>
        </section>
        <aside class="panel">
          <h2>Next Best Steps</h2>
          <div class="checklist">
            <label><input type="checkbox" checked /> Verify disabled veteran buyer status</label>
            <label><input type="checkbox" /> Upload buyer resume and proof of funds</label>
            <label><input type="checkbox" /> Build SBA lender packet</label>
            <label><input type="checkbox" /> Join weekly matched deal drops</label>
            <label><input type="checkbox" /> Request first NDA after lender screen</label>
          </div>
        </aside>
      </div>
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Best Fit Deals</h2>
            <p>Listings ranked by affordability, SDE coverage, buyer involvement, and documentation readiness.</p>
          </div>
          <a class="button quiet" href="#marketplace">Open marketplace</a>
        </div>
        <div class="listing-grid">${matched.map(cardHTML).join("")}</div>
      </section>
    </section>
  `;
  wireReadiness();
  wireCards();
}

function readinessInput(id, label, value, prefix) {
  return `<label>${label}<input id="ready-${id}" data-prefix="${prefix}" type="number" value="${value}" /></label>`;
}

function wireReadiness() {
  const update = () => {
    const cash = Number(document.querySelector("#ready-cash").value || 0);
    const credit = Number(document.querySelector("#ready-credit").value || 0);
    const income = Number(document.querySelector("#ready-income").value || 0);
    const hours = Number(document.querySelector("#ready-hours").value || 0);
    const experience = Number(document.querySelector("#ready-experience").value || 0);
    const timeline = Number(document.querySelector("#ready-timeline").value || 0);
    const veteran = document.querySelector("#ready-veteran").value === "yes";
    const score = Math.min(
      100,
      Math.round(
        (cash >= 150000 ? 22 : cash / 6800) +
          (credit >= 700 ? 18 : credit / 45) +
          (income <= 160000 ? 14 : 8) +
          (hours >= 30 ? 14 : 8) +
          Math.min(experience * 3, 15) +
          (timeline <= 9 ? 9 : 5) +
          (veteran ? 8 : 0),
      ),
    );
    const buyingPower = cash * 5;
    const incomeCoverage = Math.max(0, Math.round((avg(listings, "cashFlowSDE") - income) / 1000));
    document.querySelector("#readiness-score").innerHTML = `
      ${metric("Readiness score", `${score}/100`)}
      ${metric("Estimated buying power", money(buyingPower))}
      ${metric("Income cushion", incomeCoverage > 0 ? `${money(incomeCoverage * 1000)} before debt` : "Needs more cash flow")}
      ${metric("Recommended tier", score >= 80 ? "Verified Buyer" : score >= 62 ? "Buyer Pro" : "Free Explorer")}
    `;
  };
  document.querySelectorAll("[id^='ready-']").forEach((input) => input.addEventListener("input", update));
  document.querySelectorAll("select[id^='ready-']").forEach((input) => input.addEventListener("change", update));
  update();
}

function dealFitScore(listing) {
  return Math.round(
    Math.min(35, listing.cashFlowSDE / 14000) +
      Math.min(20, listing.transparencyScore / 5) +
      (listing.sbaEligible ? 15 : 5) +
      (listing.sellerFinancingAvailable ? 12 : 4) +
      (listing.managerInPlace ? 8 : 4) +
      (listing.dvbaMember ? 10 : 5),
  );
}

function renderValuation() {
  app.innerHTML = `
    <section class="page">
      <div class="section section-header">
        <div>
          <h1>Seller Valuation and Readiness</h1>
          <p>Give DVBA sellers a reason to engage early: estimate value, improve trust, and see what verified disabled veteran buyers are looking for.</p>
        </div>
        <a class="button primary" href="#sell">Build listing</a>
      </div>
      <div class="section readiness-layout">
        <section class="panel">
          <div class="panel-header"><h2>What Is My Business Worth?</h2><span class="badge asset">SDE multiple estimate</span></div>
          <div class="form-grid">
            ${sellerInput("seller-sde", "Annual SDE / cash flow", 320000)}
            ${sellerInput("seller-revenue", "Gross revenue", 1400000)}
            ${sellerInput("seller-growth", "Annual revenue growth %", 7)}
            ${sellerInput("seller-owner", "Owner hours per week", 35)}
            <label>Industry
              <select id="seller-industry">
                <option>Service Businesses</option><option>Restaurants</option><option>Dental/Medical</option><option>Manufacturing</option><option>E-commerce</option>
              </select>
            </label>
            <label>Real estate included?
              <select id="seller-real-estate"><option value="no">No</option><option value="yes">Yes</option></select>
            </label>
          </div>
          <div class="readiness-score" id="valuation-output"></div>
        </section>
        <aside class="panel">
          <h2>Listing Readiness Score</h2>
          <div class="checklist" id="seller-checklist">
            ${["3 years of P&Ls", "Tax returns", "Bank statements", "Lease or real estate docs", "Asset list", "Customer concentration", "Seller notes and risks", "Training and transition plan"]
              .map((label, index) => `<label><input type="checkbox" ${index < 4 ? "checked" : ""} /> ${label}</label>`)
              .join("")}
          </div>
          <div class="readiness-score" id="seller-readiness-output"></div>
        </aside>
      </div>
      <section class="section service-hero">
        <div>
          <h2>Buyer Demand Signal</h2>
          <p class="muted">Verified disabled veteran buyers are strongest in service, healthcare, light manufacturing, home services, and real-estate-backed opportunities.</p>
        </div>
        <div class="metric-grid compact">
          ${metric("Verified buyers", "186")}
          ${metric("Seeking SBA deals", "72%")}
          ${metric("Avg target SDE", "$250K+")}
          ${metric("Top request", "Seller financing")}
        </div>
      </section>
    </section>
  `;
  wireValuation();
}

function sellerInput(id, label, value) {
  return `<label>${label}<input id="${id}" type="number" value="${value}" /></label>`;
}

function wireValuation() {
  const update = () => {
    const sde = Number(document.querySelector("#seller-sde").value || 0);
    const revenue = Number(document.querySelector("#seller-revenue").value || 0);
    const growth = Number(document.querySelector("#seller-growth").value || 0);
    const hours = Number(document.querySelector("#seller-owner").value || 0);
    const realEstate = document.querySelector("#seller-real-estate").value === "yes";
    const multipleLow = 2.2 + (growth > 8 ? 0.35 : 0) + (hours < 20 ? 0.25 : 0) + (realEstate ? 0.2 : 0);
    const multipleHigh = multipleLow + 0.75 + (revenue > 2000000 ? 0.2 : 0);
    document.querySelector("#valuation-output").innerHTML = `
      ${metric("Estimated value range", `${money(sde * multipleLow)} - ${money(sde * multipleHigh)}`)}
      ${metric("Likely multiple", `${multipleLow.toFixed(1)}x - ${multipleHigh.toFixed(1)}x SDE`)}
      ${metric("Buyer confidence", growth >= 5 && hours <= 40 ? "Strong" : "Needs support")}
      ${metric("Suggested listing tier", "Seller Pro")}
    `;
    const checked = document.querySelectorAll("#seller-checklist input:checked").length;
    document.querySelector("#seller-readiness-output").innerHTML = `
      ${metric("Readiness score", `${Math.round((checked / 8) * 100)}/100`)}
      ${metric("Missing items", `${8 - checked}`)}
      ${metric("Buyer trust lift", checked >= 7 ? "High" : checked >= 5 ? "Medium" : "Low")}
    `;
  };
  document.querySelectorAll("#seller-sde, #seller-revenue, #seller-growth, #seller-owner, #seller-real-estate, #seller-industry, #seller-checklist input").forEach((node) => {
    node.addEventListener("input", update);
    node.addEventListener("change", update);
  });
  update();
}

function renderPricing() {
  const buyerPlans = membershipPlans.slice(0, 4);
  const sellerPlans = membershipPlans.slice(4);
  app.innerHTML = `
    <section class="page">
      <div class="section section-header">
        <div>
          <h1>Membership</h1>
          <p>Clear subscription paths for buyers who need access and sellers who need qualified demand.</p>
        </div>
        <a class="button primary" href="#readiness">Check buyer readiness</a>
      </div>
      <div class="section pricing-split">
        <section>
          <div class="track-heading">
            <span class="listing-kicker">Buyer memberships</span>
            <h2>Access, analysis, and closing support.</h2>
          </div>
          <div class="pricing-grid">${buyerPlans.map(planCard).join("")}</div>
        </section>
        <section>
          <div class="track-heading">
            <span class="listing-kicker">Seller and advisor memberships</span>
            <h2>Preparation, privacy, and qualified leads.</h2>
          </div>
          <div class="pricing-grid seller-pricing">${sellerPlans.map(planCard).join("")}</div>
        </section>
      </div>
      <section class="section service-hero">
        <div>
          <h2>Keep Interest High</h2>
          <p class="muted">Membership unlocks weekly deal drops, watchlist alerts, price-change notices, new document alerts, seller-financing alerts, and cohort invitations.</p>
        </div>
        <div class="metric-grid compact">
          ${metric("Weekly deal drops", "Personalized")}
          ${metric("Watchlist alerts", "Real time")}
          ${metric("Buyer cohort", "4 weeks")}
          ${metric("Concierge", "LOI-ready")}
        </div>
      </section>
    </section>
  `;
  document.querySelectorAll("[data-plan]").forEach((button) => {
    button.addEventListener("click", () => toast(`${button.dataset.plan} selected. Membership checkout would start here.`));
  });
}

function planCard(plan) {
  return `
    <article class="pricing-card">
      <span class="listing-kicker">${plan.audience}</span>
      <h2>${plan.name}</h2>
      <strong class="price">${plan.price}</strong>
      <ul>${plan.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
      <button class="button primary" type="button" data-plan="${plan.name}">${plan.cta}</button>
    </article>
  `;
}

function serviceCard(service) {
  return `
    <article class="service-card">
      <span class="listing-kicker">${service.category}</span>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <button class="button quiet" type="button" data-service="${service.title}">${service.cta}</button>
    </article>
  `;
}

function avg(items, key) {
  return items.reduce((sum, item) => sum + item[key], 0) / Math.max(items.length, 1);
}

function cardHTML(listing) {
  return `
    <article class="listing-card" data-id="${listing.id}">
      <button class="save-button ${saved.has(listing.id) ? "active" : ""}" type="button" aria-label="Save ${listing.title}" data-save="${listing.id}"></button>
      <div class="listing-image" style="--image: ${listing.image}"></div>
      <div class="listing-body">
        <div class="listing-kicker">${listing.industry}</div>
        <h3>${listing.title}</h3>
        <p class="muted location">${listing.city}, ${listing.state} · ${listing.industry}</p>
        <div class="metric-grid compact">
          ${metric("Asking", money(listing.askingPrice))}
          ${metric("Revenue", money(listing.grossRevenue))}
          ${metric("SDE", money(listing.cashFlowSDE))}
          ${metric("Multiple", multiple(listing))}
        </div>
        <div class="trend-row">
          <span class="trend">${listing.revenueTrend}</span>
          <span class="trend">${listing.profitTrend}</span>
        </div>
        <p class="description">${listing.description}</p>
        <div class="badge-row">${badges(listing).slice(0, 4).map(([label, type]) => `<span class="badge ${type}">${label}</span>`).join("")}</div>
        <div class="card-actions">
          <a class="button primary detail-link" href="#listing/${listing.id}">View deal</a>
          <button class="button quiet compare-button" type="button" data-compare="${listing.id}">${compared.has(listing.id) ? "Remove" : "Add to compare"}</button>
        </div>
      </div>
    </article>
  `;
}

function metric(label, value) {
  return `<div class="metric"><small>${label}</small><strong>${value}</strong></div>`;
}

function renderMarketplace() {
  const filtered = getFilteredListings();
  app.innerHTML = `
    <section class="marketplace-shell">
      <div class="eligibility-banner">
        <strong>Disabled veteran buyer marketplace</strong>
        <span>Listings are disabled veteran-owned or DVBA-aligned. Seller contact, documents, and NDA access require verified disabled veteran buyer qualification.</span>
        <a class="button dark" href="#qualification">Check eligibility</a>
      </div>
      <div class="filter-bar">
        <input id="query-filter" placeholder="Location, industry, cash flow, keyword" value="${filters.query}" />
        ${select("industry-filter", ["Any industry", ...new Set(listings.map((item) => item.industry))], filters.industry)}
        ${select("price-filter", ["Any price", "Under $500K", "$500K-$1M", "$1M-$2M", "$2M+"], filters.price)}
        ${select("cash-filter", ["Any cash flow", "$150K+", "$300K+", "$500K+"], filters.cashFlow)}
        <button class="button quiet" id="more-filters" type="button">Filters</button>
        <button class="button primary" id="clear-filters" type="button">Clear</button>
      </div>
      <div class="market-layout">
        <section class="results-pane">
          <div class="results-topline">
            <div>
              <strong>${filtered.length} qualified-buyer opportunities</strong>
              <div class="fine-print">Filter by EBITDA, SDE multiple, employees, DVBA status, documents, real estate, financing, and verification status.</div>
            </div>
            <a class="button quiet" href="#compare">Compare ${compared.size}</a>
          </div>
          <div class="chip-row" id="flag-filters">
            ${[
              "Real Estate Included",
              "Inventory Included",
              "FF&E Included",
              "Seller Financing Available",
              "SBA Eligible",
              "DVBA Member",
              "Disabled Veteran-Owned",
              "Absentee Owner",
              "Franchise",
              "Relocatable",
              "Home-Based",
              "Verified Financials",
              "NDA Required",
              "Documents Available",
            ]
              .map((flag) => `<button class="chip ${filters.flags.has(flag) ? "active" : ""}" data-flag="${flag}" type="button">${flag}</button>`)
              .join("")}
          </div>
          <div class="results-list">
            ${filtered.length ? filtered.map(cardHTML).join("") : `<div class="empty-state"><div><h2>No listings match yet</h2><p class="muted">Try clearing a filter or widening the price and cash flow range.</p></div></div>`}
          </div>
        </section>
        ${mapHTML(filtered)}
      </div>
    </section>
  `;
  document.querySelector("#query-filter").addEventListener("input", (event) => {
    filters.query = event.target.value;
    scheduleMarketplaceSearchRender();
  });
  document.querySelector("#industry-filter").addEventListener("change", (event) => {
    filters.industry = event.target.value;
    renderMarketplace();
  });
  document.querySelector("#price-filter").addEventListener("change", (event) => {
    filters.price = event.target.value;
    renderMarketplace();
  });
  document.querySelector("#cash-filter").addEventListener("change", (event) => {
    filters.cashFlow = event.target.value;
    renderMarketplace();
  });
  document.querySelector("#clear-filters").addEventListener("click", () => {
    filters.query = "";
    filters.industry = "Any industry";
    filters.price = "Any price";
    filters.cashFlow = "Any cash flow";
    filters.flags.clear();
    renderMarketplace();
  });
  document.querySelector("#more-filters").addEventListener("click", () => {
    toast("All diligence filters are available as chips below the toolbar.");
  });
  document.querySelectorAll("[data-flag]").forEach((button) => {
    button.addEventListener("click", () => {
      const flag = button.dataset.flag;
      if (filters.flags.has(flag)) filters.flags.delete(flag);
      else filters.flags.add(flag);
      renderMarketplace();
    });
  });
  wireCards();
}

function scheduleMarketplaceSearchRender() {
  window.clearTimeout(marketplaceSearchTimer);
  marketplaceSearchTimer = window.setTimeout(() => {
    renderMarketplace();
    requestAnimationFrame(() => {
      const input = document.querySelector("#query-filter");
      if (!input) return;
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    });
  }, 350);
}

function select(id, options, selected) {
  return `<select id="${id}">${options.map((option) => `<option ${option === selected ? "selected" : ""}>${option}</option>`).join("")}</select>`;
}

function getFilteredListings() {
  return listings.filter((listing) => {
    const haystack = `${listing.title} ${listing.industry} ${listing.city} ${listing.state} ${listing.description}`.toLowerCase();
    const queryMatch = !filters.query || haystack.includes(filters.query.toLowerCase());
    const industryMatch = filters.industry === "Any industry" || listing.industry === filters.industry;
    const priceMatch =
      filters.price === "Any price" ||
      (filters.price === "Under $500K" && listing.askingPrice < 500000) ||
      (filters.price === "$500K-$1M" && listing.askingPrice >= 500000 && listing.askingPrice < 1000000) ||
      (filters.price === "$1M-$2M" && listing.askingPrice >= 1000000 && listing.askingPrice < 2000000) ||
      (filters.price === "$2M+" && listing.askingPrice >= 2000000);
    const cashMatch =
      filters.cashFlow === "Any cash flow" ||
      (filters.cashFlow === "$150K+" && listing.cashFlowSDE >= 150000) ||
      (filters.cashFlow === "$300K+" && listing.cashFlowSDE >= 300000) ||
      (filters.cashFlow === "$500K+" && listing.cashFlowSDE >= 500000);
    const flagMatch = [...filters.flags].every((flag) => flagApplies(flag, listing));
    return queryMatch && industryMatch && priceMatch && cashMatch && flagMatch;
  });
}

function flagApplies(flag, listing) {
  const checks = {
    "Real Estate Included": listing.realEstateIncluded,
    "Inventory Included": listing.inventoryIncluded,
    "FF&E Included": listing.ffeIncluded,
    "Seller Financing Available": listing.sellerFinancingAvailable,
    "SBA Eligible": listing.sbaEligible,
    "DVBA Member": listing.dvbaMember,
    "Disabled Veteran-Owned": listing.disabledVeteranOwned,
    "Absentee Owner": listing.absenteeOwner,
    Franchise: listing.franchise,
    Relocatable: listing.relocatable,
    "Home-Based": listing.homeBased,
    "Verified Financials": listing.transparencyScore >= 85,
    "NDA Required": listing.documents.some((doc) => doc.visibility !== "public"),
    "Documents Available": listing.documents.length >= 6,
  };
  return Boolean(checks[flag]);
}

function mapHTML(items) {
  const visibleItems = items.slice(0, 20);
  const byRegion = [
    ["West", visibleItems.filter((item) => ["CA", "OR", "WA", "NV", "AZ", "ID", "UT", "CO"].includes(item.state)).length],
    ["Central", visibleItems.filter((item) => ["TX", "MN", "IL", "OH", "TN"].includes(item.state)).length],
    ["Southeast", visibleItems.filter((item) => ["FL", "NC"].includes(item.state)).length],
    ["Northeast", visibleItems.filter((item) => ["NY"].includes(item.state)).length],
  ];
  return `
    <aside class="map-pane" aria-label="US market map">
      <div class="map-header">
        <div>
          <span class="listing-kicker">Market map</span>
          <h2>DVBA opportunities by region</h2>
        </div>
        <span class="badge verified">${visibleItems.length} shown</span>
      </div>
      <div class="us-market-map">
        <div class="region-label west">West</div>
        <div class="region-label central">Central</div>
        <div class="region-label southeast">Southeast</div>
        <div class="region-label northeast">Northeast</div>
        <div class="map-region region-west"></div>
        <div class="map-region region-central"></div>
        <div class="map-region region-southeast"></div>
        <div class="map-region region-northeast"></div>
        ${visibleItems.map((item, index) => {
          const [left, top] = cityPositions[item.city] || [50 + (index % 5) * 4, 50 + (index % 4) * 4];
          const score = dealFitScore(item);
          return `<a class="map-pin" href="#listing/${item.id}" style="left:${left}%;top:${top}%" title="${item.title}">
            <strong>${money(item.askingPrice)}</strong>
            <small>${item.city}, ${item.state}</small>
            <span>${score} fit</span>
          </a>`;
        }).join("")}
      </div>
      <div class="map-region-stats">
        ${byRegion.map(([region, count]) => `<div><strong>${count}</strong><span>${region}</span></div>`).join("")}
      </div>
    </aside>
  `;
}

function renderDetail(id) {
  const listing = listings.find((item) => item.id === id) || listings[0];
  app.innerHTML = `
    <section class="page">
      <div class="section detail-hero">
        <div class="detail-media" style="--image: ${listing.image}"></div>
        <div class="detail-title">
          ${heroBadgeStrip(listing)}
          <h1>${listing.title}</h1>
          <p>${listing.city}, ${listing.state} · ${listing.industry}</p>
          <p class="fine-print">${listing.buyerEligibility} · ${listing.veteranCertification}</p>
          <div class="card-actions">
            <button class="button primary" data-save="${listing.id}" type="button">${saved.has(listing.id) ? "Saved" : "Save"}</button>
            <button class="button" data-compare="${listing.id}" type="button">${compared.has(listing.id) ? "Remove from compare" : "Add to compare"}</button>
          </div>
        </div>
      </div>
      <div class="section detail-layout">
        <div class="detail-main">
          ${overviewPanel(listing)}
          ${financialPanel(listing)}
          ${trendsPanel(listing)}
          ${operationsPanel(listing)}
          ${assetsPanel(listing)}
          ${documentsPanel(listing)}
          ${comparablesPanel(listing)}
        </div>
        <aside class="side-stack">
          ${scorePanel(listing)}
          ${dealFitPanel(listing)}
          ${calculatorPanel(listing)}
          ${buyerServicesPanel(listing)}
          ${contactPanel(listing)}
        </aside>
      </div>
    </section>
  `;
  wireCards();
  wireCalculator(listing);
  document.querySelectorAll("[data-nda]").forEach((button) => {
    button.addEventListener("click", () => toast("NDA request submitted. Seller approval is now pending."));
  });
}

function heroBadgeStrip(listing) {
  const allBadges = badges(listing);
  const priorityLabels = ["Transparent Listing", "CPA Reviewed", "SBA Eligible"];
  const primary = priorityLabels
    .map((label) => allBadges.find(([badgeLabel]) => badgeLabel === label))
    .filter(Boolean);
  const fallback = allBadges.filter(([label]) => !priorityLabels.includes(label));
  const visible = [...primary, ...fallback].slice(0, 3);
  const remaining = Math.max(allBadges.length - visible.length, 0);
  return `
    <div class="detail-trust-strip">
      <span class="detail-eyebrow">Verified acquisition opportunity</span>
      <div class="badge-row detail-badge-row">
        ${visible.map(([label, type]) => `<span class="badge ${type}">${label}</span>`).join("")}
        ${remaining ? `<span class="badge muted-badge">+${remaining} more</span>` : ""}
      </div>
    </div>
  `;
}

function overviewPanel(listing) {
  return `
    <section class="panel">
      <div class="panel-header"><h2>Overview</h2><span class="badge verified">${listing.verificationStatus}</span></div>
      <p>${listing.description}</p>
      <div class="metric-grid">
        ${metric("Asking Price", money(listing.askingPrice))}
        ${metric("Cash Flow / SDE", money(listing.cashFlowSDE))}
        ${metric("Gross Revenue", money(listing.grossRevenue))}
        ${metric("EBITDA", money(listing.ebitda))}
        ${metric("Inventory", money(listing.inventoryValue))}
        ${metric("FF&E", money(listing.ffeValue))}
        ${metric("Real Estate", money(listing.realEstateValue))}
        ${metric("Rent", listing.rent ? money(listing.rent) : "Owned")}
      </div>
    </section>
  `;
}

function financialPanel(listing) {
  return `
    <section class="panel">
      <div class="panel-header"><h2>Financial Snapshot</h2><span class="badge asset">${multiple(listing)}</span></div>
      <div class="two-col">
        <div class="info-list">
          ${info("Established Year", listing.establishedYear)}
          ${info("Buyer Eligibility", listing.buyerEligibility)}
          ${info("Veteran Certification", listing.veteranCertification)}
          ${info("Gross Margin", listing.grossMargin)}
          ${info("Net Margin", listing.netMargin)}
          ${info("Working Capital Requirement", money(listing.workingCapitalRequirement))}
          ${info("Debt Included or Excluded", "Excluded unless assumed separately")}
          ${info("Seller Financing Terms", listing.sellerFinancingTerms)}
        </div>
        <div class="info-list">
          ${info("SBA Prequalification", listing.sbaPrequalification)}
          ${info("DVBA Member Status", listing.dvbaMember ? "Member listing" : "Partner listing")}
          ${info("Transition Priority", listing.transitionPriority)}
          ${info("Recurring Revenue", listing.recurringRevenue)}
          ${info("Online vs Offline Revenue", `${listing.onlineRevenue} online`)}
          ${info("Customer Concentration", listing.customerConcentration)}
          ${info("Document Verification Status", `${listing.documents.filter((doc) => doc.verified).length} verified docs`)}
          ${info("Reason for Selling", listing.reasonForSelling)}
        </div>
      </div>
    </section>
  `;
}

function trendsPanel(listing) {
  const maxRevenue = Math.max(...listing.history.map((item) => item.revenue));
  return `
    <section class="panel">
      <div class="panel-header"><h2>Revenue & Profit Trends</h2><span class="muted">3-year history plus monthly trend</span></div>
      <table class="table">
        <thead><tr><th>Year</th><th>Revenue</th><th>Gross Profit</th><th>SDE</th><th>EBITDA</th><th>Net Income</th></tr></thead>
        <tbody>${listing.history.map((row) => `<tr><td>${row.year}</td><td>${money(row.revenue)}</td><td>${money(row.grossProfit)}</td><td>${money(row.sde)}</td><td>${money(row.ebitda)}</td><td>${money(row.netIncome)}</td></tr>`).join("")}</tbody>
      </table>
      <div class="chart" aria-label="Monthly revenue trend">
        ${Array.from({ length: 12 }, (_, index) => {
          const height = 32 + ((index * 11 + listing.employees) % 58);
          const isProfit = index % 3 === 2;
          return `<div class="bar ${isProfit ? "profit" : ""}" title="Month ${index + 1}" style="height:${height + (listing.grossRevenue / maxRevenue) * 38}%"></div>`;
        }).join("")}
      </div>
    </section>
  `;
}

function operationsPanel(listing) {
  return `
    <section class="panel">
      <div class="panel-header"><h2>Operations</h2><span class="badge ${listing.managerInPlace ? "verified" : ""}">${listing.managerInPlace ? "Manager in place" : "Owner-operated"}</span></div>
      <div class="two-col">
        <div class="info-list">
          ${info("Employees", listing.employees)}
          ${info("Owner Hours Per Week", listing.ownerHoursPerWeek)}
          ${info("Training Offered", listing.supportTraining)}
          ${info("Support Period", "30 days included")}
          ${info("Licenses Required", listing.industry.includes("Dental") ? "Medical director and state permits" : "Standard local operating licenses")}
        </div>
        <div class="info-list">
          ${info("Key Vendors", "Top five vendor list available after NDA")}
          ${info("Competition", listing.competition)}
          ${info("Growth & Expansion", listing.growthOpportunities)}
          ${info("Risks & Seller Notes", listing.risks)}
          ${info("Customer Concentration", listing.customerConcentration)}
        </div>
      </div>
    </section>
  `;
}

function assetsPanel(listing) {
  return `
    <section class="panel">
      <div class="panel-header"><h2>Assets Included</h2><span class="muted">Lease, facilities, inventory, FF&E</span></div>
      <div class="info-list">
        ${info("Inventory Included", listing.inventoryIncluded ? money(listing.inventoryValue) : "No")}
        ${info("FF&E Included", listing.ffeIncluded ? money(listing.ffeValue) : "No")}
        ${info("Real Estate Included", listing.realEstateIncluded ? money(listing.realEstateValue) : "No")}
        ${info("Facilities", listing.facilities)}
        ${info("Lease Expiration", listing.leaseExpiration)}
        ${info("Lease Transferability", listing.realEstateIncluded ? "Not applicable" : "Transferable with landlord approval")}
      </div>
    </section>
  `;
}

function documentsPanel(listing) {
  return `
    <section class="panel">
      <div class="panel-header"><h2>Documents</h2><span class="badge verified">${listing.documents.length} uploaded</span></div>
      <div class="document-list">
        ${listing.documents.map((doc) => `
          <div class="document-row">
            <div>
              <strong>${doc.type}</strong>
              <div class="fine-print">${doc.verified ? "Verified" : "Unverified"} · Visibility: ${doc.visibility.replace("_", " ")}</div>
            </div>
            ${
              doc.visibility === "public"
                ? `<a class="button quiet" href="${doc.fileUrl}">View</a>`
                : `<button class="button quiet locked" data-nda="${doc.id}" type="button">Request NDA</button>`
            }
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function comparablesPanel(listing) {
  const items = listings
    .filter((item) => item.industry === listing.industry && item.id !== listing.id)
    .slice(0, 3);
  return `
    <section class="panel">
      <div class="panel-header"><h2>Comparable Deals</h2><span class="muted">${listing.industry}</span></div>
      <div class="listing-grid">${items.map(cardHTML).join("")}</div>
    </section>
  `;
}

function scorePanel(listing) {
  const items = [
    ["Asking price disclosed", 20, true],
    ["Revenue disclosed", 15, true],
    ["SDE/cash flow disclosed", 15, true],
    ["EBITDA disclosed", 10, true],
    ["3-year financials uploaded", 10, listing.history.length >= 3],
    ["Tax returns uploaded", 10, hasDoc(listing, "Tax returns")],
    ["Bank statements uploaded", 5, hasDoc(listing, "Bank statements")],
    ["Lease uploaded", 5, hasDoc(listing, "Lease")],
    ["Asset list uploaded", 5, hasDoc(listing, "Equipment list")],
    ["Seller notes / risks disclosed", 5, Boolean(listing.risks)],
  ];
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Financial Transparency Score</h2>
          <p class="muted">Score uses the 0-100 disclosure formula.</p>
        </div>
        <div class="score-ring" style="--score:${listing.transparencyScore}%"><span>${listing.transparencyScore}</span></div>
      </div>
      <div class="info-list">
        ${items.map(([label, points, ok]) => info(label, `${ok ? "+" : "0"}${ok ? points : ""}`)).join("")}
      </div>
    </section>
  `;
}

function dealFitPanel(listing) {
  const score = dealFitScore(listing);
  const ownerIncome = listing.cashFlowSDE - Math.round(listing.askingPrice * 0.8 * 0.163);
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Deal Fit Score</h2>
          <p class="muted">Affordability, financing, documentation, and operator fit.</p>
        </div>
        <div class="score-ring" style="--score:${score}%"><span>${score}</span></div>
      </div>
      <div class="info-list">
        ${info("Estimated income after debt", money(ownerIncome))}
        ${info("Likely down payment", money(Math.round(listing.askingPrice * 0.2)))}
        ${info("Financing path", listing.sbaEligible ? "SBA + buyer equity" : "Seller note or conventional")}
        ${info("Buyer fit", listing.managerInPlace ? "Manager-supported" : "Owner-operator")}
      </div>
      <a class="button primary full-button" href="#readiness">Check my fit</a>
    </section>
  `;
}

function hasDoc(listing, type) {
  return listing.documents.some((doc) => doc.type === type);
}

function calculatorPanel(listing) {
  return `
    <section class="panel">
      <div class="panel-header"><h2>Buyer Return Calculator</h2></div>
      <div class="calc-grid">
        ${calcInput("down", "Down payment", Math.round(listing.askingPrice * 0.2))}
        ${calcInput("loan", "Loan amount", Math.round(listing.askingPrice * 0.8))}
        ${calcInput("rate", "Interest rate %", 10.5)}
        ${calcInput("term", "Loan term years", 10)}
        ${calcInput("working", "Working capital", listing.workingCapitalRequirement)}
        ${calcInput("growth", "Revenue growth %", 4)}
        ${calcInput("margin", "Margin assumption %", Math.round((listing.cashFlowSDE / listing.grossRevenue) * 100))}
        ${calcInput("salary", "Owner salary replacement", 90000)}
      </div>
      <div class="calc-output" id="calc-output"></div>
      <button class="button primary full-button" id="loan-help" type="button">Get loan and down payment help</button>
    </section>
  `;
}

function buyerServicesPanel(listing) {
  return `
    <section class="panel">
      <div class="panel-header">
        <h2>Acquisition Services</h2>
        <a class="button quiet" href="#services">All services</a>
      </div>
      <div class="service-mini-list">
        ${["SBA Loan Readiness", "Veteran-Friendly Lender Matching", "Due Diligence Review", "Transition and Operator Onboarding"]
          .map((title) => {
            const service = buyerServices.find((item) => item.title === title);
            return `<button class="service-mini" type="button" data-service="${service.title}"><strong>${service.title}</strong><span>${service.description}</span></button>`;
          })
          .join("")}
      </div>
      <p class="fine-print">Suggested for ${listing.title}: confirm buyer status, model down payment, request lender screen, then review documents before LOI.</p>
    </section>
  `;
}

function calcInput(id, label, value) {
  return `<label>${label}<input id="calc-${id}" type="number" value="${value}" /></label>`;
}

function contactPanel(listing) {
  return `
    <section class="panel">
      <h2>Contact Seller / Broker</h2>
      <p class="muted">Disabled veteran buyer verification is required before seller contact, financing packets, or NDA approval.</p>
      <div class="form-grid">
        <label class="wide">Message<textarea rows="5">I am a qualified disabled veteran buyer interested in ${listing.title}. Please share the next diligence steps.</textarea></label>
      </div>
      <button class="button primary" id="send-inquiry" type="button">Request verified buyer contact</button>
    </section>
  `;
}

function wireCalculator(listing) {
  const inputs = [...document.querySelectorAll(".calc-grid input")];
  const calculate = () => {
    const down = value("down");
    const loan = value("loan");
    const rate = value("rate") / 100 / 12;
    const termMonths = value("term") * 12;
    const working = value("working");
    const growth = value("growth") / 100;
    const margin = value("margin") / 100;
    const salary = value("salary");
    const annualDebt = rate === 0 ? loan / (termMonths / 12) : ((loan * rate) / (1 - (1 + rate) ** -termMonths)) * 12;
    const projectedSde = listing.grossRevenue * (1 + growth) * margin;
    const buyerCashFlow = projectedSde - annualDebt - salary;
    const cashInvested = down + working;
    const payback = buyerCashFlow > 0 ? cashInvested / buyerCashFlow : 0;
    const coc = cashInvested > 0 ? (buyerCashFlow / cashInvested) * 100 : 0;
    const breakEvenRevenue = (annualDebt + salary) / Math.max(margin, 0.01);
    document.querySelector("#calc-output").innerHTML = `
      ${metric("Annual debt service", money(annualDebt))}
      ${metric("Cash flow after debt", money(buyerCashFlow))}
      ${metric("Payback period", buyerCashFlow > 0 ? `${payback.toFixed(1)} yrs` : "N/A")}
      ${metric("Cash-on-cash return", `${coc.toFixed(1)}%`)}
      ${metric("Break-even revenue", money(breakEvenRevenue))}
    `;
  };
  function value(id) {
    return Number(document.querySelector(`#calc-${id}`).value || 0);
  }
  inputs.forEach((input) => input.addEventListener("input", calculate));
  calculate();
  document.querySelector("#send-inquiry").addEventListener("click", () => toast("Buyer verification request sent before seller contact."));
  document.querySelector("#loan-help").addEventListener("click", () => toast("Loan readiness checklist started for this listing."));
  document.querySelectorAll("[data-service]").forEach((button) => {
    button.addEventListener("click", () => toast(`${button.dataset.service} request added to your buyer plan.`));
  });
}

function info(label, value) {
  return `<div class="info-row"><span>${label}</span><strong>${value}</strong></div>`;
}

function renderSellerFlow() {
  const steps = [
    ["Basic Info", basicInfoForm],
    ["Financials", financialsForm],
    ["Operations", operationsForm],
    ["Assets / Real Estate", assetsForm],
    ["Documents", documentsForm],
  ];
  app.innerHTML = `
    <section class="page">
      <div class="section section-header">
        <div>
          <h1>List a DVBA-aligned business</h1>
          <p>Structure the listing for qualified disabled veteran buyers with financials, transfer requirements, certification notes, leases, assets, legal standing, and seller notes.</p>
        </div>
      </div>
      <div class="section seller-shell">
        <aside class="stepper">
          ${steps.map(([label], index) => `<button class="button step-button ${index === sellerStep ? "active" : ""}" data-step="${index}" type="button">${index + 1}. ${label}</button>`).join("")}
        </aside>
        <section class="panel">
          <div class="panel-header">
            <h2>${steps[sellerStep][0]}</h2>
            <span class="badge verified">Draft transparency score: 72</span>
          </div>
          ${steps[sellerStep][1]()}
          <div class="card-actions">
            <button class="button quiet" id="prev-step" type="button">Back</button>
            <button class="button primary" id="next-step" type="button">${sellerStep === steps.length - 1 ? "Submit for review" : "Continue"}</button>
          </div>
        </section>
      </div>
    </section>
  `;
  document.querySelectorAll("[data-step]").forEach((button) => {
    button.addEventListener("click", () => {
      sellerStep = Number(button.dataset.step);
      renderSellerFlow();
    });
  });
  document.querySelector("#prev-step").addEventListener("click", () => {
    sellerStep = Math.max(0, sellerStep - 1);
    renderSellerFlow();
  });
  document.querySelector("#next-step").addEventListener("click", () => {
    if (sellerStep === steps.length - 1) toast("Listing submitted for verification review.");
    else sellerStep += 1;
    renderSellerFlow();
  });
}

function basicInfoForm() {
  return `
    <div class="form-grid">
      ${field("Business title")}
      ${field("Industry")}
      ${field("Location")}
      ${field("Year established", "number")}
      ${field("DVBA member ID")}
      ${field("Veteran ownership certification")}
      <label class="wide">Business description<textarea rows="5"></textarea></label>
      ${field("Reason for selling")}
    </div>
    <div class="toggle-row">${["Confidential address", "Disabled veteran-owned", "DVBA member", "Service-disabled veteran seller", "Franchise", "Home-based", "Relocatable"].map(toggle).join("")}</div>
  `;
}

function financialsForm() {
  return `
    <div class="form-grid">
      ${["Asking price", "Gross revenue", "SDE / cash flow", "EBITDA", "Net income", "Inventory value", "FF&E value", "Real estate value", "Rent", "Payroll", "Owner salary add-back", "Other add-backs"].map((label) => field(label, "number")).join("")}
      <label class="wide">Revenue by year<textarea rows="4" placeholder="2023: $..."></textarea></label>
      <label class="wide">Profit by year<textarea rows="4"></textarea></label>
    </div>
  `;
}

function operationsForm() {
  return `
    <div class="form-grid">
      ${["Employees", "Owner hours per week", "Support period", "Customer concentration", "Recurring revenue %", "Key vendors", "Licenses required", "Disabled veteran buyer transfer requirements"].map(field).join("")}
      <label class="wide">Training offered<textarea rows="4"></textarea></label>
    </div>
    <div class="toggle-row">${["Manager in place"].map(toggle).join("")}</div>
  `;
}

function assetsForm() {
  return `
    <div class="toggle-row">${["Inventory included", "FF&E included", "Real estate included", "Lease transferable"].map(toggle).join("")}</div>
    <div class="form-grid">
      ${["Lease terms", "Lease expiration", "Square footage", "Monthly rent"].map(field).join("")}
    </div>
  `;
}

function documentsForm() {
  return `
    <div class="document-list">
      ${["P&L statements", "Tax returns", "Bank statements", "Lease", "Equipment list", "Inventory list", "Customer/revenue breakdown", "Franchise agreement", "Licenses", "Seller memorandum"].map((doc) => `
        <div class="document-row">
          <strong>${doc}</strong>
          <button class="button quiet" type="button">Upload</button>
        </div>
      `).join("")}
    </div>
  `;
}

function field(label, type = "text") {
  return `<label>${label}<input type="${type}" /></label>`;
}

function toggle(label) {
  return `<label><input type="checkbox" />${label}</label>`;
}

function renderSaved() {
  const items = listings.filter((item) => saved.has(item.id));
  app.innerHTML = `
    <section class="page">
      <div class="section section-header">
        <div><h1>Saved Listings</h1><p>Your disabled veteran buyer watchlist across verified DVBA-aligned businesses, SBA deals, and NDA-ready opportunities.</p></div>
        <a class="button primary" href="#marketplace">Find more deals</a>
      </div>
      <div class="section ${items.length ? "listing-grid" : ""}">
        ${items.length ? items.map(cardHTML).join("") : empty("No saved listings yet", "Save listings from the marketplace to build your buyer shortlist.")}
      </div>
    </section>
  `;
  wireCards();
}

function renderCompare() {
  const items = listings.filter((item) => compared.has(item.id));
  const available = listings.filter((item) => !compared.has(item.id)).slice(0, 6);
  app.innerHTML = `
    <section class="page">
      <div class="section section-header">
        <div><h1>Compare Deals</h1><p>Side-by-side price, SDE, EBITDA, multiple, DVBA status, buyer eligibility, real estate, operations, and documents.</p></div>
        <a class="button primary" href="#marketplace">Browse marketplace</a>
      </div>
      <div class="section">
        ${
          items.length
            ? `<div class="compare-grid">${items.map(compareCard).join("")}</div>`
            : empty("Nothing to compare yet", "Use the picker below to add up to three listings side by side.")
        }
      </div>
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Add Listings to Compare</h2>
            <p>Select up to three opportunities. Added listings appear above immediately.</p>
          </div>
          <span class="badge verified">${compared.size}/3 selected</span>
        </div>
        <div class="compare-picker">
          ${available.map(comparePickerCard).join("")}
        </div>
      </section>
    </section>
  `;
  wireCards();
}

function comparePickerCard(listing) {
  return `
    <article class="compare-picker-card">
      <div>
        <span class="listing-kicker">${listing.industry}</span>
        <h3>${listing.title}</h3>
        <p class="muted">${listing.city}, ${listing.state} · ${money(listing.cashFlowSDE)} SDE · ${multiple(listing)}</p>
      </div>
      <button class="button primary" type="button" data-compare="${listing.id}">Add to compare</button>
    </article>
  `;
}

function compareCard(listing) {
  return `
    <article class="compare-card">
      <h2>${listing.title}</h2>
      <p class="muted">${listing.city}, ${listing.state} · ${listing.industry}</p>
      ${metric("Asking", money(listing.askingPrice))}
      ${metric("Revenue", money(listing.grossRevenue))}
      ${metric("SDE", money(listing.cashFlowSDE))}
      ${metric("EBITDA", money(listing.ebitda))}
      ${metric("Multiple", multiple(listing))}
      ${metric("Transparency", `${listing.transparencyScore}/100`)}
      ${metric("Buyer eligibility", "Disabled veteran")}
      <div class="badge-row">${badges(listing).slice(0, 4).map(([label, type]) => `<span class="badge ${type}">${label}</span>`).join("")}</div>
      <a class="button primary" href="#listing/${listing.id}">Open detail</a>
      <button class="button quiet" data-compare="${listing.id}" type="button">Remove</button>
    </article>
  `;
}

function empty(title, copy) {
  return `<div class="empty-state"><div><h2>${title}</h2><p class="muted">${copy}</p></div></div>`;
}

function applyQuickFilter(filter) {
  filters.query = "";
  filters.industry = "Any industry";
  filters.price = "Any price";
  filters.cashFlow = "Any cash flow";
  filters.flags.clear();
  if (["Restaurants", "E-commerce", "Service Businesses", "Manufacturing"].includes(filter)) filters.industry = filter;
  else if (filter === "Dental/Medical") filters.query = "Dental";
  else if (filter === "Under $500K") filters.price = "Under $500K";
  else if (filter === "High Cash Flow") filters.cashFlow = "$500K+";
  else filters.flags.add(filter);
}

function wireCards() {
  document.querySelectorAll("[data-save]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const id = button.dataset.save;
      if (saved.has(id)) {
        saved.delete(id);
        toast("Removed from saved listings.");
      } else {
        saved.add(id);
        toast("Saved to your buyer watchlist.");
      }
      saveState();
      render();
    });
  });
  document.querySelectorAll("[data-compare]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const id = button.dataset.compare;
      if (compared.has(id)) {
        compared.delete(id);
        toast("Removed from comparison.");
      } else if (compared.size >= 3) {
        toast("Comparison is capped at three listings.");
        return;
      } else {
        compared.add(id);
        toast("Added to comparison.");
      }
      saveState();
      render();
    });
  });
  document.querySelectorAll("[data-industry]").forEach((button) => {
    button.addEventListener("click", () => {
      filters.industry = button.dataset.industry;
      setRoute("marketplace");
    });
  });
}

function wireServices() {
  document.querySelectorAll("[data-service]").forEach((button) => {
    button.addEventListener("click", () => toast(`${button.dataset.service} request added to your buyer plan.`));
  });
}

window.addEventListener("hashchange", render);
render();
