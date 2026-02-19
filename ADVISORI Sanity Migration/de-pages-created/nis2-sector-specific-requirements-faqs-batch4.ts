import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Helper function to generate unique keys
function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating NIS2 Sector-Specific Requirements page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-sector-specific-requirements' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-sector-specific-requirements" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie transformiert ADVISORI Forschungs- und Entwicklungs-Compliance für kritische R&D-Infrastrukturen in strategische Innovation-Assets, die C-Level-Führungskräften IP-Protection und Technology Leadership verschaffen?",
        answer: "Forschungs- und Entwicklungseinrichtungen sind die Innovation-Engines der modernen Wirtschaft und kritische Assets für Technology Leadership und Competitive Advantage. ADVISORI entwickelt hochspezialisierte R&D-Compliance-Frameworks, die nicht nur NIS2-Anforderungen erfüllen, sondern auch Innovation-Excellence, IP-Protection und Research Collaboration optimieren für nachhaltige Competitive Advantages.\n\n🔬 Research & Innovation Strategic Excellence:\n• Intellectual Property Fortress: Ultra-secure IP-Protection-Systeme, die kritische Research Assets, Patents und Innovation-Pipelines vor Cyber-Espionage und IP-Theft schützen für Competitive Advantage-Preservation.\n• Collaborative Research Security: Sichere Research Collaboration-Plattformen für internationale Forschungspartnerschaften, Joint Ventures und Academic-Industry-Cooperation bei maximaler IP-Protection.\n• Innovation Velocity Acceleration: Security-Frameworks, die Research & Development-Prozesse beschleunigen, Innovation Time-to-Market optimieren und R&D-Efficiency maximieren.\n• Critical Research Infrastructure: Specialized Protection für High-Value Research Equipment, Laboratory Systems und Scientific Infrastructure für Research Continuity und Asset Protection.\n\n🧬 Der ADVISORI Innovation Excellence-Ansatz:\n• Advanced Research Data Protection: State-of-the-Art Data Security für Research Data, Scientific Databases und Experimental Results mit Advanced Encryption und Access Control.\n• Scientific Collaboration Enablement: Sichere Integration in internationale Research Networks, Academic Partnerships und Industry Collaboration für Innovation Ecosystem-Participation.\n• Research Compliance Integration: Integrierte Compliance für NIS2, Data Protection, Research Ethics und Scientific Standards für Efficiency und Risk Minimization.\n• Innovation Pipeline Security: Comprehensive Protection von R&D-Roadmaps, Future Technologies und Strategic Research Directions für Long-term Competitive Advantage.\n• Technology Transfer Security: Secure Technology Transfer-Prozesse, Licensing-Frameworks und Commercialization-Pipelines für IP-Monetization und Innovation-Value-Creation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "In welcher Weise optimiert ADVISORI Abfallwirtschafts- und Environmental Services-Compliance für Circular Economy-Leadership und Sustainability Excellence bei gleichzeitiger Operational Efficiency?",
        answer: "Abfallwirtschaft und Environmental Services sind zentrale Komponenten der Circular Economy und kritische Enabler für Sustainability Transformation. ADVISORI positioniert Environmental Compliance als strategischen Catalyst für Circular Economy-Leadership, ESG Excellence und Sustainable Business Model-Innovation, der weit über reine Regulatory Adherence hinausgeht.\n\n♻️ Circular Economy Strategic Excellence:\n• Waste-to-Value Transformation: Cybersecurity für innovative Waste Management Technologies, Recycling Optimization und Circular Economy-Prozesse für Economic Value Creation und Environmental Impact.\n• Smart Environmental Monitoring: IoT-enabled Environmental Monitoring, Real-time Pollution Tracking und Predictive Environmental Analytics für Proactive Environmental Management und Regulatory Excellence.\n• Sustainability Data Intelligence: Advanced Analytics für Carbon Footprint Tracking, Environmental KPIs und Sustainability Reporting für ESG Leadership und Stakeholder Value.\n• Circular Supply Chain Integration: Secure Integration in Circular Supply Chains, Reverse Logistics und Sustainable Materials-Management für Ecosystem Excellence.\n\n🌱 ADVISORI's Environmental Excellence Strategy:\n• Industrial IoT Environmental Security: Specialized Security für Environmental Sensors, Waste Processing Systems und Industrial Control Systems für Operational Safety und Environmental Protection.\n• ESG Reporting & Compliance: Integrated ESG Reporting-Systems, Sustainability Analytics und Environmental Compliance-Management für Stakeholder Confidence und Regulatory Excellence.\n• Climate Resilience Integration: Cybersecurity-Frameworks, die Climate Adaptation, Extreme Weather Response und Environmental Crisis Management unterstützen für Business Resilience.\n• Green Technology Innovation: Security für Clean Technology R&D, Environmental Innovation-Projects und Sustainable Technology Development für Market Leadership.\n• Stakeholder Transparency Excellence: Secure Environmental Data Sharing, Public Reporting Platforms und Stakeholder Communication für Trust Building und Social License-to-Operate."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie strukturiert ADVISORI Manufacturing und Critical Products-Compliance für Supply Chain Resilience, Industry 4.0 Excellence und Global Manufacturing Leadership?",
        answer: "Manufacturing kritischer Produkte kombiniert Industrial Security-Anforderungen mit Supply Chain-Komplexität und Industry 4.0-Innovation. ADVISORI entwickelt innovative Manufacturing-Compliance-Frameworks, die nicht nur NIS2-Excellence sicherstellen, sondern auch Smart Manufacturing, Supply Chain Resilience und Industrial Innovation ermöglichen für Sustainable Manufacturing Leadership.\n\n🏭 Smart Manufacturing Strategic Excellence:\n• Industry 4.0 Security Leadership: State-of-the-Art Cybersecurity für Smart Factories, Industrial IoT und Automated Manufacturing-Systems für Innovation Leadership und Operational Excellence.\n• Critical Supply Chain Protection: End-to-End Supply Chain Security, Vendor Management und Third-Party Risk Management für Supply Chain Resilience und Business Continuity.\n• Manufacturing Intelligence Security: Advanced Protection für Manufacturing Data, Production Analytics und Operational Intelligence für Competitive Advantage und IP-Protection.\n• Product Lifecycle Security: Comprehensive Security für Product Development, Manufacturing Processes und Quality Management für Product Excellence und Brand Protection.\n\n⚙️ Der ADVISORI Manufacturing Excellence-Ansatz:\n• Cyber-Physical Systems Security: Specialized Security für Industrial Control Systems, Robotics und Cyber-Physical Production-Systems für Safety und Efficiency.\n• Digital Twin & Simulation Security: Advanced Protection für Digital Manufacturing Models, Simulation Systems und Virtual Production-Environments für Innovation Security.\n• Quality & Compliance Integration: Integrated Quality Management, Manufacturing Standards-Compliance und Regulatory Adherence für Operational Excellence.\n• Global Manufacturing Coordination: Secure Coordination von Multi-Site Manufacturing, Global Supply Chains und International Production-Networks für Scale und Efficiency.\n• Sustainable Manufacturing Excellence: Cybersecurity für Green Manufacturing, Energy Efficiency-Systems und Sustainable Production-Processes für Environmental Leadership und Cost Optimization."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie positioniert ADVISORI Space und Satellite Infrastructure-Compliance als strategischen Asset für Critical Communications, Navigation Services und Space Economy-Participation?",
        answer: "Space Infrastructure ist kritische Backbone-Technologie für moderne Kommunikation, Navigation und Earth Observation-Services. ADVISORI entwickelt hochspezialisierte Space-Compliance-Frameworks, die nicht nur NIS2-Anforderungen erfüllen, sondern auch Space Economy-Participation, Satellite Service-Excellence und Critical Infrastructure-Protection optimieren für Strategic Space Leadership.\n\n🛰️ Space Infrastructure Strategic Excellence:\n• Critical Space Services Protection: Ultra-secure Protection für Satellite Communications, GPS/Navigation Services und Earth Observation-Systems für National Security und Commercial Excellence.\n• Space-Ground Integration Security: Secure Integration von Space Infrastructure mit Terrestrial Networks, Ground Stations und User Equipment für Seamless Service Delivery.\n• Mission-Critical Reliability: Space-grade Cybersecurity für Ultra-High-Reliability Requirements, Fault Tolerance und Mission Success für Critical Space Operations.\n• Commercial Space Innovation: Security für Commercial Space Services, NewSpace Innovation und Space Economy-Participation für Market Leadership und Revenue Growth.\n\n🚀 ADVISORI's Space Excellence Strategy:\n• Satellite Cybersecurity Leadership: State-of-the-Art Space Cybersecurity für Satellite Constellations, On-board Systems und Space-to-Ground Communications für Operational Security.\n• Critical Infrastructure Dependencies: Comprehensive Management von Space Infrastructure-Dependencies für Telecommunications, Transportation und Financial Services für Ecosystem Resilience.\n• International Space Coordination: Secure Participation in International Space Cooperation, Regulatory Compliance und Cross-Border Space Services für Global Market Access.\n• Future Space Technologies: Security für Emerging Space Technologies, Quantum Communications und Next-Generation Space-Systems für Innovation Leadership.\n• Space Service Monetization: Secure Commercial Space Services, Data Monetization und Space-as-a-Service für Revenue Optimization und Business Model Innovation."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
