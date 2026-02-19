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
    console.log('Updating NIS2 Sector-Specific Requirements page with C-Level FAQs batch 3 (German)...')
    
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
        question: "Wie entwickelt ADVISORI digitale Sektoren-Compliance für Cloud, ICT und Digitale Services, um C-Level-Führungskräften Innovation-Leadership und Digital Transformation-Advantages zu ermöglichen?",
        answer: "Digitale Sektoren stehen im Zentrum der NIS2-Transformation und bieten einzigartige Opportunities für Innovation-Leadership und Digital Excellence. ADVISORI positioniert digitale Sektoren-Compliance als strategischen Catalyst für Technology Leadership, Platform-Economy-Participation und Digital Transformation-Success, der weit über reine Regulatory Adherence hinausgeht.\n\n🚀 Digital Sectors Innovation Excellence:\n• Cloud-Native Security Architecture: Entwicklung hochmoderner Cloud-Security-Frameworks, die nicht nur NIS2-konform sind, sondern auch Cloud Innovation und Scalability maximieren für Competitive Technology Advantage.\n• Platform Economy Leadership: Strategic Positioning in Digital Platform-Ecosystems durch überlegene Cybersecurity-Kapazitäten für Premium Partnership-Opportunities und Market Leadership.\n• Digital Transformation Catalyst: Cybersecurity-Architekturen, die Digital Transformation beschleunigen und neue Digital Business Models ermöglichen statt behindern.\n• Innovation Velocity Optimization: Security-by-Design-Ansätze, die Development Velocity maximieren und Time-to-Market für Digital Innovations minimieren.\n\n💎 Der ADVISORI Digital Excellence Strategy:\n• DevSecOps Integration Excellence: Nahtlose Integration von Security in Development-Pipelines für maximale Innovation Speed bei optimaler Risk Management.\n• API Security Leadership: State-of-the-Art API Security und Digital Interface-Protection für sichere Digital Ecosystem-Participation und Partnership-Enablement.\n• Data-Driven Security Intelligence: Advanced Analytics und AI-powered Security-Insights für proaktive Threat Detection und Strategic Business Intelligence.\n• Digital Resilience Architecture: Ultra-resiliente digitale Architekturen, die High-Availability und Performance für Mission-Critical Digital Services gewährleisten.\n• Innovation Pipeline Security: Comprehensive Protection von Digital IP, R&D-Assets und Innovation-Pipelines für Sustainable Competitive Advantage."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "In welcher Weise strukturiert ADVISORI Gesundheits- und Life Sciences-Compliance für kritische Healthcare-Infrastrukturen, um Patient Safety, Regulatory Excellence und Business Continuity zu optimieren?",
        answer: "Der Gesundheitssektor kombiniert kritische Infrastructure-Anforderungen mit spezifischen Patient Safety-Obligations und komplexen regulatorischen Environments. ADVISORI entwickelt hochspezialisierte Healthcare-Compliance-Frameworks, die nicht nur NIS2-Excellence sicherstellen, sondern auch Patient Outcomes verbessern und Healthcare Innovation ermöglichen.\n\n🏥 Healthcare Critical Infrastructure Excellence:\n• Patient Safety-First Security: Cybersecurity-Architekturen, die Patient Safety als oberste Priorität positionieren und Medical Device Security, Clinical System Protection und Life-Critical Infrastructure-Resilienz gewährleisten.\n• Healthcare Interoperability Security: Sichere Integration von Healthcare-Ecosystems, Electronic Health Records und Medical IoT für optimierte Patient Care bei maximaler Data Protection.\n• Emergency Response Integration: Cybersecurity-Frameworks, die nahtlos in Medical Emergency Response und Healthcare Crisis Management integriert sind für Business Continuity und Patient Care Continuity.\n• Research & Innovation Protection: Comprehensive Protection von Medical Research, Clinical Trial Data und Healthcare Innovation-Assets für Competitive Advantage und IP-Security.\n\n💊 ADVISORI's Healthcare Excellence Approach:\n• Medical Device Cybersecurity: Spezialisierte Security für Medical IoT, Connected Health Devices und Healthcare Infrastructure für Patient Safety und Operational Excellence.\n• Clinical Data Sovereignty: Advanced Data Protection und Privacy-by-Design für Patient Data, Clinical Records und Healthcare Analytics bei optimaler Research-Enablement.\n• Healthcare Supply Chain Security: End-to-End Security für Medical Supply Chains, Pharmaceutical Distribution und Healthcare Logistics für Patient Safety und Business Continuity.\n• Telemedicine & Digital Health: Security Excellence für Digital Health Platforms, Remote Patient Monitoring und Telehealth-Services für Innovation-Enablement bei maximaler Trust.\n• Regulatory Multi-Compliance: Integrated Compliance-Management für NIS2, GDPR, Medical Device Regulation und Healthcare-spezifische Standards für Efficiency und Risk Minimization."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie optimiert ADVISORI Wasser- und Abwasser-Infrastrukturen für Environmental Resilience und Public Health Protection bei gleichzeitiger Gewährleistung operativer Effizienz und Sustainability?",
        answer: "Wasser- und Abwasser-Infrastrukturen sind fundamentale Public Services mit direkten Auswirkungen auf Public Health und Environmental Safety. ADVISORI entwickelt innovative Cybersecurity-Frameworks für Water Utilities, die nicht nur NIS2-Compliance sicherstellen, sondern auch Environmental Stewardship, Public Health Protection und Operational Sustainability optimieren.\n\n💧 Water Infrastructure Critical Excellence:\n• Public Health Protection Priority: Cybersecurity-Systeme, die Drinking Water Quality, Wastewater Treatment Integrity und Public Health Protection als oberste Priorität positionieren für Community Safety.\n• Environmental Compliance Integration: Integrated Cybersecurity und Environmental Management für Water Quality Monitoring, Environmental Reporting und Sustainability Compliance.\n• Industrial Process Security: Specialized Security für Water Treatment Processes, Chemical Management Systems und Industrial Control Systems für Operational Safety und Efficiency.\n• Emergency Water Services: Crisis-resiliente Water Infrastructure mit Business Continuity Planning für Emergency Water Supply und Disaster Response-Capability.\n\n🌊 Der ADVISORI Water Excellence Strategy:\n• SCADA & Industrial IoT Security: State-of-the-Art Security für Water Infrastructure Control Systems, Remote Monitoring und Industrial IoT für Operational Excellence und Cyber-Physical Security.\n• Smart Water Management: Cybersecurity für Smart Water Grids, IoT-enabled Infrastructure und Predictive Maintenance-Systems für Efficiency und Innovation-Enablement.\n• Climate Resilience Integration: Cybersecurity-Frameworks, die Climate Change Adaptation, Extreme Weather Response und Environmental Resilience unterstützen.\n• Cross-Utility Coordination: Secure Integration mit Energy, Transport und Communication Infrastructure für Ecosystem Resilience und Cross-Sector Emergency Response.\n• Sustainability & ESG Excellence: Cybersecurity-Maßnahmen, die ESG-Goals unterstützen, Environmental Reporting ermöglichen und Sustainability-Initiatives vorantreiben für Stakeholder Value."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie positioniert ADVISORI Post-, Kurier- und Logistik-Compliance als strategischen Enabler für Supply Chain Excellence, E-Commerce Leadership und Global Trade-Facilitation?",
        answer: "Post-, Kurier- und Logistik-Services sind das Rückgrat der modernen Economy und Critical Enabler für E-Commerce, Global Trade und Supply Chain-Efficiency. ADVISORI transformiert Logistics-Compliance in strategische Assets für Supply Chain Leadership, Digital Commerce-Excellence und Global Trade-Competitiveness.\n\n📦 Logistics & Supply Chain Strategic Excellence:\n• E-Commerce Enablement Security: Cybersecurity-Frameworks, die E-Commerce Growth unterstützen, Last-Mile Delivery optimieren und Digital Commerce-Innovation ermöglichen für Market Leadership.\n• Global Trade Facilitation: Secure Integration mit International Trade Systems, Customs Platforms und Cross-Border Logistics für Global Market Access und Trade Efficiency.\n• Supply Chain Visibility Excellence: End-to-End Supply Chain Transparency und Real-time Tracking-Security für Customer Experience Optimization und Operational Excellence.\n• Critical Goods Logistics: Specialized Security für Medical Supplies, Food Distribution und Essential Goods-Logistics für Public Service Excellence und Crisis Resilience.\n\n🚛 ADVISORI's Logistics Excellence Framework:\n• Smart Logistics & IoT: Advanced Security für IoT-enabled Logistics, Autonomous Vehicles und Smart Warehousing für Innovation Leadership und Operational Efficiency.\n• Platform Economy Integration: Secure Participation in Digital Logistics Platforms, Marketplace-Integration und API Economy für Business Growth und Partnership Excellence.\n• Cross-Border Security Excellence: International Cybersecurity Standards-Compliance für Global Operations, Cross-Border Data Flows und International Partnership-Facilitation.\n• Sustainability & Green Logistics: Cybersecurity für Sustainable Logistics, Carbon Footprint Tracking und Environmental Logistics-Innovation für ESG Excellence und Market Differentiation.\n• Customer Experience Optimization: Security-enabled Customer Platforms, Real-time Communications und Delivery Experience-Enhancement für Customer Loyalty und Competitive Advantage."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
