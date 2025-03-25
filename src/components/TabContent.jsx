import React, { useState } from 'react';
import { GitBranch, Cpu, Layout, Database } from 'lucide-react';

// Import all images
import adaptableImage from '../img/Adaptable.jpg';
import costEffectiveImage from '../img/Cost-Effective.jpg';
import ecosystemImage from '../img/Ecosystem.jpg';
import govPrivateImage from '../img/Gov-private-connect.jpg';
import interBusinessLevelImage from '../img/Inter-Business Level.jpg';
import interBusinessImage from '../img/Inter-bussiness-conect.jpg';
import intraBusinessImage from '../img/Intra-Business .jpg';
import intraBusinessConnectImage from '../img/Intra-bussiness-connect.jpg';
import nonCentralizedImage from '../img/Non-Centralized.jpg';
import personalAssistImage from '../img/Personal Assist.jpg';
import privacyFocusedImage from '../img/Privacy Focused.jpg';
import proAssistImage from '../img/Pro Assist.jpg';
import publicAssistImage from '../img/Public Assist.jpg';
import serviceAssistImage from '../img/Service Assist.jpg';
import societalEfficiencyImage from '../img/Societal Efficiency and Growth.jpg';
import userLevelImage from '../img/User Level .jpg';

const TabButton = ({ active, children, onClick, sectionColor }) => (
  <button
  onClick={onClick}
  className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out
    ${active
      ? 'transform scale-105 shadow-lg'
      : 'hover:bg-neutral-700'
    }
    sm:px-6 sm:py-3 md:px-8 md:py-4 xl:px-10 xl:py-5`}
  style={{
    backgroundColor: active ? sectionColor : 'transparent',
    color: active ? '#171717' : '#d4d4d4',
    boxShadow: active ? `0 0 20px ${sectionColor}40` : 'none',
    transform: active ? 'scale(1.05)' : 'scale(1)',
    border: active ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'
  }}
>
  {children}
</button>

);

const PillarSection = ({ pillar }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Updated image selection logic
  const getTabImage = (pillarTitle, tabTitle) => {
    // B2B Platform images
    if (tabTitle.includes("Inter-Business Connectivity")) return interBusinessImage;
    if (tabTitle.includes("Intra-Business Connectivity")) return intraBusinessConnectImage;
    if (tabTitle.includes("Government & Public")) return govPrivateImage;

    // Super App images
    if (tabTitle.includes("Personal Assist")) return personalAssistImage;
    if (tabTitle.includes("Pro Assist")) return proAssistImage;
    if (tabTitle.includes("Service Assist")) return serviceAssistImage;
    if (tabTitle.includes("Public Assist")) return publicAssistImage;

    // AI Integration images
    if (tabTitle.includes("Societal Efficiency")) return societalEfficiencyImage;
    if (tabTitle.includes("Inter-Business Level")) return interBusinessLevelImage;
    if (tabTitle.includes("Intra-Business Level")) return intraBusinessImage;
    if (tabTitle.includes("User Level")) return userLevelImage;

    // Open Source images
    if (tabTitle.includes("Non-Centralized")) return nonCentralizedImage;
    if (tabTitle.includes("Privacy Focused")) return privacyFocusedImage;
    if (tabTitle.includes("Adaptable")) return adaptableImage;
    if (tabTitle.includes("Cost-Effective")) return costEffectiveImage;

    // Default fallback
    return ecosystemImage;
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto mb-12 sm:mb-24">
      <div className="text-center mb-6 sm:mb-8 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 text-white" style={{ color: pillar.color }}>
          {pillar.title}
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-neutral-400 whitespace-nowrap">
          {pillar.description}
        </p>

      </div>

      <div className="relative h-[400px] sm:h-[600px] lg:h-[800px] mx-4 rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-lg transform transition-all duration-700 hover:scale-[1.01] hover:shadow-2xl border border-neutral-700/50">
        {/* Background Images */}
        {pillar.subtopics.map((tab, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
              activeTab === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-100'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out"
              style={{
                backgroundImage: `url(${getTabImage(pillar.title, tab.title)})`,
                transform: activeTab === idx ? 'scale(1.1)' : 'scale(1)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-neutral-900/50" />
          </div>
        ))}

        <div className="absolute inset-0">
          {/* Tab Navigation */}
            <div className="w-full max-w-2xl bg-neutral-800/90 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-x-auto hide-scrollbar border border-neutral-700/50">
              <div className=" flex-nowrap items-center justify-start sm:justify-center gap-4 px-3 ">
                {pillar.subtopics.map((tab, idx) => (
                  <TabButton
                  key={idx}
                  active={activeTab === idx}
                  onClick={() => setActiveTab(idx)}
                  sectionColor={pillar.color}
                  className={`p-2 whitespace-nowrap text-base ${
                    idx === 0 || idx === 1 ? 'w-[200px] justify-center' : ''
                  }`}
                >
                  {tab.title}
                </TabButton>
                
                ))}
              </div>
            </div>
          


          {/* Content Area */}
          <div className=" bottom-0 sm:bottom-8 lg:bottom-12 left-4 sm:left-8 lg:left-12 right-4 sm:right-8 lg:right-12">
            {pillar.subtopics.map((tab, idx) => (
              <div
                key={idx}
                className={`transition-all duration-300 ease-in-out ${
                  activeTab === idx 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 absolute pointer-events-none transform translate-y-4'
                }`}
              >
                <div className="space-y-3 sm:space-y-4 lg:space-y-6 p-4 sm:p-6 lg:p-8 rounded-xl bg-neutral-800/20 backdrop-blur-md border border-neutral-700/10">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                    {tab.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-xl text-neutral-300 leading-relaxed whitespace-pre-line">
                    {tab.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const KeyPillars = () => {
  const pillars = [
    {
      title: "RavanaOS (B2B Platform)",
      color: "#fc59a3",
      description: "A comprehensive platform connecting businesses, departments, and public institutions.",
      subtopics: [
        {
          title: "Inter-Business",
          content: "RavanaOS empowers companies by seamlessly connecting all departments across different organizations. Through real-time data exchange and a unified communication channel, businesses can coordinate supply chain logistics, share inventory data, and align procurement processes. This integration drives operational efficiency and fosters innovation by breaking down traditional silos."
        },
        {
          title: "Intra-Business",
          content: "Within a single enterprise, RavanaOS unites every function—from finance and HR to production and marketing—onto one platform. This internal integration creates a holistic view of operations, streamlines workflows, and enables advanced analytics for smarter, data-driven decision-making, resulting in increased productivity and agility."
        },
        {
          title: "Government & Public Institution",
          content: "RavanaOS bridges the gap between public and private sectors by integrating government services into the business ecosystem. This connection facilitates regulatory compliance, enhances public-private partnerships, and creates a collaborative environment where businesses and public institutions work together to drive economic growth and societal well-being."
        }
      ]
    },
    {
      title: "Solve Super App and Web",
      color: "#87c830",
      description: "Comprehensive digital assistance for personal, professional, and public services.",
      subtopics: [
        {
          title: "Personal Assist",
          content: "Personal Assist is designed to manage everyday life, offering a comprehensive solution for personal finance, banking, asset management, contracts, appointments, and payment processing. It serves as a digital assistant to organize daily tasks, making life more streamlined and stress-free."
        },
        {
          title: "Pro Assist",
          content: "Pro Assist caters to the professional and business realms by providing tools for managing appointments, leave, payroll, task tracking, deadlines, and financial oversight. This module acts as an efficient digital secretary, ensuring that all work-related processes are handled smoothly and effectively."
        },
        {
          title: "Service Assist",
          content: "Service Assist offers a centralized gateway to access a wide range of services from businesses running on RavanaOS. Whether it's insurance, education, transport, food, utilities, healthcare, or other essential services, users can conveniently find and manage these offerings in one place."
        },
        {
          title: "Public Assist",
          content: "Public Assist connects users to essential public services, including tax filings, pension management, healthcare, legal support, and education. This portal simplifies the process of interacting with government and public institutions, making public services more accessible and user-friendly."
        }
      ]
    },
    {
      title: "AI Integration",
      color: "#ffd400",
      description: "Intelligent AI agents enhancing efficiency across society, business, and individual levels.",
      subtopics: [
        {
          title: "Societal Efficiency",
          content: "Our platform harnesses the power of AI to enhance efficiency and drive growth across society. By leveraging collective, cross-domain data, RavanaOS creates an environment where AI can generate actionable insights and automate routine tasks, ultimately contributing to overall societal progress."
        },
        {
          title: "Inter-Business",
          content: "Within RavanaOS, AI agents operate like intelligent virtual colleagues. They assist with tasks such as preparing tax filings, coordinating procurement for pending orders, and sending payment reminders through intuitive chatbot interactions. This automation streamlines operations across different companies and improves overall collaboration."
        },
        {
          title: "Intra-Business",
          content: "At this level, AI agents continuously synchronize internal processes and supply chains. They automate recurring tasks like reordering packaging materials, calculating raw material requirements, selecting optimal suppliers, handling import tariffs and clearances, placing orders, and dispatching invoices. This comprehensive automation minimizes errors and maximizes operational efficiency."
        },
        {
          title: "User Level",
          content: "For individual users, AI-powered chatbots handle repetitive tasks, manage personal finances, and set up automated savings plans and schedules based on work-life commitments. These intelligent assistants provide tailored recommendations, ensuring that users receive a seamless, efficient, and personalized experience."
        }
      ]
    },
    {
      title: "Open Source Philosophy",
      color: "#fe7e0f",
      description: "Community-driven, privacy-focused, and adaptable platform for everyone.",
      subtopics: [
        {
          title: "Non-Centralized",
          content: "RavanaOS is built on a community-driven model where no single entity holds ultimate authority. The platform is designed, developed, and validated by its global community, ensuring that innovation and decision-making are a collective endeavor."
        },
        {
          title: "Privacy Focused",
          content: "Our commitment to privacy means that users have full control over their data. RavanaOS ensures that only the information you choose to share is accessible, protecting sensitive data while maintaining transparency and trust."
        },
        {
          title: "Fully Adaptable",
          content: "Designed with flexibility in mind, RavanaOS can be customized to comply with any legal or regulatory framework. This adaptability makes it an ideal solution for diverse markets and jurisdictions, ensuring its global applicability."
        },
        {
          title: "Cost-Effective",
          content: "We believe that advanced, integrated systems should be accessible to all. RavanaOS is developed as a cost-effective, open-source solution, making intelligent business and community management available to organizations of any size—and to individuals—anywhere in the world."
        }
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-neutral-900 py-16 px-4">
      {pillars.map((pillar, index) => (
        <PillarSection key={index} pillar={pillar} />
      ))}
    </div>
  );
};

export default KeyPillars;