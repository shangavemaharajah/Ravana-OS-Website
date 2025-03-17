import React, { useState } from 'react';

const categoryColors = {
  "Sales & Marketing": "#ff79c6",
  "Finance & Accounting": "#50fa7b",
  "Human Resources": "#f1fa8c",
  "Purchase & Procurement": "#ffb86c",
  "Production & Operations": "#bd93f9",
  "Service & Support": "#ff79c6",
  "Learning & Development": "#50fa7b",
  "Inventory Management": "#8be9fd",
  "Project Management": "#ff5555",
  "Business Intelligence": "#bd93f9"
};

const ModuleTab = ({ tab, isActive, onClick, color }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out backdrop-blur-sm
      ${isActive
        ? 'transform scale-105 shadow-lg'
        : 'hover:bg-neutral-800'
      }`}
    style={{
      backgroundColor: isActive ? color : 'transparent',
      color: isActive ? '#171717' : '#9ca3af',
      boxShadow: isActive ? `0 0 20px ${color}40` : 'none',
      transform: isActive ? 'scale(1.05)' : 'scale(1)',
      border: isActive ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'
    }}
  >
    {tab && (
      <span className="flex items-center gap-2">
        <span className="text-lg">{tab.emoji}</span>
        <span className="font-medium">{tab.name}</span>
      </span>
    )}
  </button>
);

const ModuleCard = ({ category, modules, index, activeIndex, setActiveIndex }) => {
  const [activeTab, setActiveTab] = useState(0);
  const isActive = index === activeIndex;
  const color = categoryColors[category] || '#ff79c6'; // Fallback color

  if (!modules || !modules.items) {
    return null;
  }

  return (
    <div
      className={`relative rounded-2xl transition-all duration-500 cursor-pointer
        ${isActive ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}`}
      onClick={() => !isActive && setActiveIndex(index)}
    >
      <div
        className={`w-full h-full rounded-2xl p-6 overflow-hidden transition-all duration-500
          ${isActive ? 'bg-neutral-800' : 'bg-neutral-800/50 hover:bg-neutral-800'}`}
        style={{
          borderLeft: `4px solid ${color}`,
          minHeight: isActive ? '400px' : '200px'
        }}
      >
        <div className="h-full flex flex-col">
          <h3
            className="text-xl font-bold mb-4 flex items-center gap-2 text-white"
            style={{ color: color }}
          >
            {modules.icon} {category}
          </h3>
          {isActive && (
            <div className="flex-1 transition-all duration-500">
              <div className="flex mb-6 overflow-x-auto">
                <div className="bg-neutral-900 rounded-full p-1 shadow-xl border border-neutral-700/50">
                  <div className="flex items-center space-x-1">
                    {modules.items.map((tab, idx) => (
                      <ModuleTab
                        key={idx}
                        tab={tab}
                        isActive={activeTab === idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTab(idx);
                        }}
                        color={color}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-700/50">
                {modules.items.map((tab, idx) => (
                  <div
                    key={idx}
                    className={`transition-all duration-300 ${
                      activeTab === idx ? 'block' : 'hidden'
                    }`}
                  >
                    <h4 className="text-lg font-semibold mb-3 text-white">
                      {tab.emoji} {tab.name}
                    </h4>
                    <p className="text-neutral-300 mb-4">{tab.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {tab.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-neutral-400"
                        >
                          <span className="text-sm" style={{ color: color }}>✦</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {!isActive && (
            <div className="absolute bottom-6 right-6">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${color}20` }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: color }}
                >
                  {modules.items.length}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const RavanaOS = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const modules = [
    {
      category: "Sales & Marketing",
      icon: "🎯",
      items: [
        {
          emoji: "🤝",
          name: "CRM",
          description: "Manage customer relationships and interactions effectively.",
          features: [
            "Contact Management",
            "Lead Tracking",
            "Sales Pipeline",
            "Customer Support"
          ]
        },
        {
          emoji: "💹",
          name: "Sales",
          description: "Track and optimize your sales operations.",
          features: [
            "Sales Analytics",
            "Order Management",
            "Quote Generation",
            "Commission Tracking"
          ]
        },
        {
          emoji: "🌐",
          name: "Website",
          description: "Build and manage your online presence.",
          features: [
            "Content Management",
            "E-commerce",
            "SEO Tools",
            "Analytics"
          ]
        }
      ]
    },
    {
      category: "Finance & Accounting",
      icon: "💰",
      items: [
        {
          emoji: "📊",
          name: "Accounts",
          description: "Comprehensive financial management system.",
          features: [
            "General Ledger",
            "Accounts Payable",
            "Accounts Receivable",
            "Financial Reports"
          ]
        },
        {
          emoji: "💳",
          name: "Asset Management",
          description: "Track and manage company assets effectively.",
          features: [
            "Asset Tracking",
            "Depreciation",
            "Maintenance",
            "Reporting"
          ]
        },
        {
          emoji: "💵",
          name: "Payroll",
          description: "Streamline employee compensation processes.",
          features: [
            "Salary Processing",
            "Tax Calculations",
            "Benefits Management",
            "Compliance"
          ]
        }
      ]
    },
    {
      category: "Human Resources",
      icon: "👥",
      items: [
        {
          emoji: "📋",
          name: "Recruitment",
          description: "Streamline your hiring and recruitment processes.",
          features: [
            "Job Postings",
            "Applicant Tracking",
            "Interview Management",
            "Onboarding"
          ]
        },
        {
          emoji: "📅",
          name: "Time & Attendance",
          description: "Track employee time and attendance efficiently.",
          features: [
            "Time Tracking",
            "Leave Management",
            "Shift Planning",
            "Attendance Reports"
          ]
        },
        {
          emoji: "📈",
          name: "Performance",
          description: "Manage employee performance and development.",
          features: [
            "Performance Reviews",
            "Goal Setting",
            "Feedback System",
            "Development Plans"
          ]
        }
      ]
    },
    {
      category: "Purchase & Procurement",
      icon: "🛍️",
      items: [
        {
          emoji: "📦",
          name: "Purchasing",
          description: "Manage your procurement processes effectively.",
          features: [
            "Purchase Orders",
            "Vendor Management",
            "Inventory Control",
            "Cost Analysis"
          ]
        },
        {
          emoji: "🤝",
          name: "Vendor Portal",
          description: "Collaborate with vendors seamlessly.",
          features: [
            "Vendor Registration",
            "Quote Management",
            "Document Sharing",
            "Payment Tracking"
          ]
        },
        {
          emoji: "📊",
          name: "Analytics",
          description: "Track and analyze procurement metrics.",
          features: [
            "Spend Analysis",
            "Vendor Performance",
            "Cost Savings",
            "Compliance Tracking"
          ]
        }
      ]
    },
    {
      category: "Production & Operations",
      icon: "⚙️",
      items: [
        {
          emoji: "🏭",
          name: "Manufacturing",
          description: "Optimize your production processes.",
          features: [
            "Production Planning",
            "Quality Control",
            "Resource Management",
            "Work Orders"
          ]
        },
        {
          emoji: "📦",
          name: "Inventory",
          description: "Manage your inventory efficiently.",
          features: [
            "Stock Control",
            "Warehouse Management",
            "Order Fulfillment",
            "Inventory Tracking"
          ]
        },
        {
          emoji: "🔧",
          name: "Maintenance",
          description: "Keep your equipment running smoothly.",
          features: [
            "Preventive Maintenance",
            "Work Orders",
            "Asset Tracking",
            "Maintenance Schedule"
          ]
        }
      ]
    },
    {
      category: "Service & Support",
      icon: "🎮",
      items: [
        {
          emoji: "🎯",
          name: "Help Desk",
          description: "Provide excellent customer support.",
          features: [
            "Ticket Management",
            "Knowledge Base",
            "SLA Tracking",
            "Customer Portal"
          ]
        },
        {
          emoji: "📱",
          name: "Field Service",
          description: "Manage on-site service operations.",
          features: [
            "Dispatch Management",
            "Mobile App",
            "Service History",
            "Parts Inventory"
          ]
        },
        {
          emoji: "🤖",
          name: "Self Service",
          description: "Empower customers with self-service options.",
          features: [
            "Customer Portal",
            "FAQ Management",
            "Ticket Submission",
            "Account Management"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)]" />
        </div>
        <div className="container relative py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="animate-fade-in text-4xl sm:text-6xl font-bold mb-6 text-white leading-tight">
              Transform Your Business Operations with Intelligent Connectivity
            </h1>
            <p className="animate-slide-up text-lg sm:text-xl text-neutral-300 max-w-4xl mx-auto mb-12">
              RavanaOS is an AI-powered, open-source business operating system that unifies your entire organization while seamlessly connecting you with partners, suppliers, and customers.
            </p>
            
            {/* Key Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-xl bg-neutral-800/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary-purple mb-2">40%</div>
                <div className="text-neutral-300">reduction in operational overhead</div>
              </div>
              <div className="p-6 rounded-xl bg-neutral-800/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary-pink mb-2">65%</div>
                <div className="text-neutral-300">faster inter-business processes</div>
              </div>
              <div className="p-6 rounded-xl bg-neutral-800/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary-purple mb-2">100%</div>
                <div className="text-neutral-300">transparent data sharing</div>
              </div>
              <div className="p-6 rounded-xl bg-neutral-800/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary-pink mb-2">Zero</div>
                <div className="text-neutral-300">vendor lock-in</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Features */}
      <section className="py-16 bg-neutral-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-pink">
              Core Platform Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              <div className="p-6 rounded-xl bg-neutral-800/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-white">Inter-Business Connectivity</h3>
                <p className="text-neutral-400 mb-4">Connect, Collaborate, and Scale</p>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Real-time data exchange</li>
                  <li>• Automated supply chain sync</li>
                  <li>• Smart contract management</li>
                  <li>• Collaborative planning</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-neutral-800/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-white">Intra-Business Integration</h3>
                <p className="text-neutral-400 mb-4">One Platform, Every Department</p>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Unified departments</li>
                  <li>• Automated workflows</li>
                  <li>• Real-time reporting</li>
                  <li>• Resource optimization</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-neutral-800/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-white">AI-Powered Intelligence</h3>
                <p className="text-neutral-400 mb-4">Your Digital Workforce</p>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Automated analysis</li>
                  <li>• Predictive analytics</li>
                  <li>• Smart automation</li>
                  <li>• Natural language UI</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-neutral-800/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-white">Open Source Advantage</h3>
                <p className="text-neutral-400 mb-4">Freedom to Innovate</p>
                <ul className="space-y-2 text-neutral-300">
                  <li>• Full source access</li>
                  <li>• Community-driven</li>
                  <li>• Custom modules</li>
                  <li>• No vendor lock-in</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Business Suite Section */}
      <section className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-pink">
              Unified Business Suite
            </h2>
            <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto px-4">
              One platform, endless possibilities. Discover how our comprehensive modules 
              work together to transform your business operations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {modules?.map((section, index) => (
              <ModuleCard
                key={index}
                category={section.category}
                modules={section}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            )) || null}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-pink">
              Industry Solutions
            </h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-12">
              RavanaOS adapts to your industry's specific needs with specialized modules
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Manufacturing",
                features: ["Production planning", "Quality control", "Supply chain optimization", "Equipment maintenance", "Compliance management"],
                icon: "🏭"
              },
              {
                title: "Healthcare",
                features: ["Patient management", "Medical records", "Appointment scheduling", "Inventory control", "Billing and insurance"],
                icon: "🏥"
              },
              {
                title: "Education",
                features: ["Student information system", "Course management", "Assessment tracking", "Library management", "Parent communication"],
                icon: "🎓"
              },
              {
                title: "Agriculture",
                features: ["Crop management", "Weather integration", "Supply chain tracking", "Resource planning", "Yield optimization"],
                icon: "🌾"
              },
              {
                title: "Non-profit",
                features: ["Donor management", "Fund accounting", "Volunteer coordination", "Grant tracking", "Impact measurement"],
                icon: "🤝"
              },
              {
                title: "More Domains Coming Soon",
                features: ["Retail & E-commerce", "Construction", "Logistics & Transportation", "Professional Services", "Hospitality"],
                icon: "✨"
              }
            ].map((industry, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 hover:bg-neutral-800 transition-all">
                <div className="text-3xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{industry.title}</h3>
                <ul className="space-y-2">
                  {industry.features.map((feature, fidx) => (
                    <li key={fidx} className="text-neutral-400 flex items-center gap-2">
                      <span className="text-primary-purple">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation & Integration */}
      <section className="py-16 bg-neutral-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-pink">
              Implementation & Integration
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50">
              <h3 className="text-xl font-bold mb-4 text-white">Getting Started</h3>
              <ol className="space-y-4">
                <li className="text-neutral-400">
                  <span className="font-bold text-primary-purple">1. Initial Assessment</span>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• Business process analysis</li>
                    <li>• Integration planning</li>
                    <li>• Custom requirements identification</li>
                  </ul>
                </li>
                <li className="text-neutral-400">
                  <span className="font-bold text-primary-purple">2. Deployment Options</span>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• Cloud-hosted (managed service)</li>
                    <li>• On-premise installation</li>
                    <li>• Hybrid deployment</li>
                  </ul>
                </li>
                <li className="text-neutral-400">
                  <span className="font-bold text-primary-purple">3. Integration Support</span>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• API documentation</li>
                    <li>• Implementation guides</li>
                    <li>• Developer resources</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="p-6 rounded-xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50">
              <h3 className="text-xl font-bold mb-4 text-white">Security & Compliance</h3>
              <ul className="space-y-2">
                {[
                  "End-to-end encryption",
                  "Role-based access control",
                  "Audit logging",
                  "Compliance frameworks",
                  "Data sovereignty options",
                  "Regular security audits"
                ].map((feature, idx) => (
                  <li key={idx} className="text-neutral-400 flex items-center gap-2">
                    <span className="text-primary-purple">🔒</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50">
              <h3 className="text-xl font-bold mb-4 text-white">Success Metrics</h3>
              <div className="space-y-6">
                {[
                  { label: "Average deployment time", value: "4-6 weeks" },
                  { label: "Typical ROI timeline", value: "6-8 months" },
                  { label: "Customer satisfaction", value: "95%" },
                  { label: "System uptime", value: "99.99%" }
                ].map((metric, idx) => (
                  <div key={idx} className="text-neutral-400">
                    <div className="text-sm mb-1">{metric.label}</div>
                    <div className="text-2xl font-bold text-primary-purple">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-pink">
              Plans & Pricing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Community Edition",
                features: ["Full platform access", "Community support", "Basic AI capabilities", "Self-hosted option"],
                highlight: false
              },
              {
                title: "Professional",
                features: ["Enhanced AI features", "Priority support", "Advanced analytics", "Cloud hosting included"],
                highlight: true
              },
              {
                title: "Enterprise",
                features: ["Custom AI development", "Dedicated support team", "Advanced security features", "Custom integrations", "SLA guarantees"],
                highlight: false
              }
            ].map((plan, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-xl backdrop-blur-sm border transition-all ${
                  plan.highlight 
                    ? 'bg-primary-purple/10 border-primary-purple' 
                    : 'bg-neutral-800/50 border-neutral-700/50'
                }`}
              >
                <h3 className="text-xl font-bold mb-4 text-white">{plan.title}</h3>
                <ul className="space-y-2">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="text-neutral-400 flex items-center gap-2">
                      <span className={plan.highlight ? 'text-primary-purple' : 'text-primary-pink'}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className={`mt-6 w-full py-2 px-4 rounded-full font-medium transition-all ${
                    plan.highlight
                      ? 'bg-primary-purple text-white hover:bg-primary-purple/90'
                      : 'bg-neutral-700 text-white hover:bg-neutral-600'
                  }`}
                >
                  Contact Sales
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-pink">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "How does RavanaOS differ from traditional ERP systems?",
                a: "RavanaOS is an open-source, AI-powered platform that focuses on inter-business connectivity and automation, unlike traditional ERPs that primarily handle internal operations."
              },
              {
                q: "What are the minimum technical requirements?",
                a: "RavanaOS can be deployed on any modern cloud platform or on-premise server with standard hardware requirements. Specific details are available in our documentation."
              },
              {
                q: "How do you ensure data privacy and security?",
                a: "We implement end-to-end encryption, role-based access control, and regular security audits. All data handling complies with major privacy regulations."
              },
              {
                q: "Can I migrate from my existing systems?",
                a: "Yes, RavanaOS provides comprehensive migration tools and professional services to ensure smooth transition from existing systems."
              }
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50">
                <h3 className="text-lg font-bold mb-2 text-white">{faq.q}</h3>
                <p className="text-neutral-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-neutral-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-pink">
              Get Started
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Ready to transform your business operations? Choose the best way to get started with RavanaOS.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Schedule a Demo", icon: "🎯" },
              { title: "Download Community Edition", icon: "⬇️" },
              { title: "Talk to an Expert", icon: "💬" },
              { title: "Join Developer Community", icon: "👥" }
            ].map((action, idx) => (
              <button
                key={idx}
                className="p-6 rounded-xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 hover:bg-neutral-700/50 transition-all text-left"
              >
                <span className="text-2xl mb-2 block">{action.icon}</span>
                <h3 className="text-lg font-bold text-white">{action.title}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RavanaOS;