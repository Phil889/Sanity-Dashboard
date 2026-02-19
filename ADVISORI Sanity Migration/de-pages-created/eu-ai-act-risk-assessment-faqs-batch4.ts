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
    console.log('Updating EU AI Act Risk Assessment page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-risk-assessment' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-risk-assessment" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie gewährleistet ADVISORI, dass unser AI Risk Assessment Framework auch internationale Compliance-Anforderungen und Multi-Jurisdictional Risks berücksichtigt?",
        answer: "In einer globalisierten Wirtschaft müssen C-Level-Führungskräfte AI Risk Assessment über EU-Grenzen hinaus denken. ADVISORI entwickelt comprehensive Multi-Jurisdictional Risk Assessment Frameworks, die nicht nur EU AI Act Compliance sicherstellen, sondern auch internationale Regulatory Landscapes berücksichtigen und Global AI Strategy ermöglichen.\n\n🌍 Global Regulatory Convergence Strategy:\n• Multi-Jurisdictional Compliance Mapping: Systematic Analysis regulatorischer Anforderungen in key Markets (USA, UK, Singapur, China, Kanada) mit Cross-Jurisdictional Risk Assessment Methodologies.\n• Regulatory Arbitrage Optimization: Identification von Jurisdictional Advantages und Development strategischer Market Entry Approaches basierend auf Regional AI Regulatory Frameworks.\n• International Standard Harmonization: Alignment mit emerging International AI Standards (ISO/IEC 23053, IEEE Standards) und Multi-Lateral AI Governance Initiatives.\n• Global Incident Response Coordination: Entwicklung koordinierter Incident Response Strategies für Multi-Jurisdictional AI Risk Events mit Cross-Border Legal und Regulatory Implications.\n\n🔄 Cross-Border Risk Intelligence:\n• Regulatory Intelligence Networks: Establishment globaler Regulatory Monitoring Networks mit Local Legal Experts und Regulatory Relationships in key Jurisdictions.\n• Cultural Risk Assessment: Integration kultureller und gesellschaftlicher Risk Factors in AI Deployment Strategies für verschiedene Geographic Markets.\n• Data Governance Compliance: Multi-Jurisdictional Data Protection Compliance (GDPR, CCPA, PIPEDA) Integration in AI Risk Assessment für Global Data Processing Activities.\n• International Partnership Risk: Assessment regulatorischer Risks bei International AI Partnerships, Joint Ventures und Cross-Border AI System Deployments."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Wie unterstützt ADVISORI bei der Integration von AI Risk Assessment in Corporate Strategy und Long-term Business Planning?",
        answer: "AI Risk Assessment darf nicht als isolierte Compliance-Funktion betrachtet werden, sondern muss integral in Corporate Strategy und Long-term Business Planning eingebettet sein. ADVISORI entwickelt Strategic AI Risk Integration Frameworks, die Risk Assessment zu einem enabler for Strategic Decision Making und Long-term Value Creation machen.\n\n🎯 Strategic Integration Methodology:\n• Business Strategy Alignment: Integration von AI Risk Assessment Insights in Strategic Planning Processes, Marktexpansionsstrategien und Portfolio Management Decisions.\n• Investment Decision Support: Utilization von AI Risk Metrics als Key Input für Capital Allocation Decisions, R&D Investment Prioritization und Strategic Technology Investments.\n• Competitive Strategy Enhancement: Leveraging von AI Risk Intelligence für Competitive Positioning, Market Differentiation Strategies und Strategic Partnership Development.\n• Long-term Value Creation: Integration von AI Risk Management Excellence in Long-term Business Model Innovation und Sustainable Competitive Advantage Development.\n\n📊 Strategic Planning Integration:\n• Scenario Planning Integration: Incorporation von AI Risk Scenarios in Corporate Scenario Planning und Strategic Risk Assessment für Long-term Business Resilience.\n• Strategic KPI Development: Creation von Strategic Key Performance Indicators, die AI Risk Management Performance mit Business Outcomes und Strategic Goals verknüpfen.\n• Board Strategy Sessions: Integration von AI Risk Assessment Results in Regular Board Strategy Sessions und Annual Strategic Planning Reviews.\n• Stakeholder Value Communication: Development von Stakeholder Communication Strategies, die AI Risk Management als Strategic Value Driver positionieren und Investor Confidence stärken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Welche Rolle spielt AI Risk Assessment bei der Optimierung unserer Innovation Pipeline und der Beschleunigung von AI-driven Business Transformation?",
        answer: "AI Risk Assessment sollte Innovation beschleunigen, nicht behindern. ADVISORI entwickelt Innovation-friendly Risk Assessment Approaches, die systematisches Risk Management mit agiler Innovation verbinden und AI-driven Business Transformation als Strategic Competitive Advantage ermöglichen.\n\n🚀 Innovation Acceleration Framework:\n• Innovation Risk Portfolio Management: Holistic Management der AI Innovation Pipeline mit Risk-adjusted Portfolio Optimization und Strategic Resource Allocation für High-Value, Low-Risk Opportunities.\n• Fast-Track Innovation Pathways: Development von Expedited Risk Assessment Processes für Strategic Innovation Initiatives mit Pre-approved Risk Templates und Streamlined Approval Workflows.\n• Innovation Sandbox Governance: Establishment kontrollierter Innovation Environments mit relaxed Risk Requirements für Rapid Prototyping und Proof-of-Concept Development.\n• Risk-Informed Innovation Strategy: Integration von Risk Intelligence in Innovation Strategy Development für Optimal Balance zwischen Innovation Ambition und Risk Management.\n\n💡 Business Transformation Enablement:\n• Transformation Risk Assessment: Comprehensive Assessment der Risks und Opportunities AI-driven Business Model Transformation mit Strategic Risk Mitigation Planning.\n• Change Management Integration: Integration von AI Risk Considerations in Change Management Processes für Smooth Business Transformation ohne Compliance Disruption.\n• Digital Strategy Alignment: Coordination zwischen AI Risk Assessment und Digital Transformation Strategy für Coherent Technology Risk Management und Business Innovation.\n• Market Opportunity Optimization: Utilization von AI Risk Assessment für Identification und Prioritization neuer Market Opportunities und Business Model Innovations."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie gewährleistet ADVISORI nachhaltige AI Risk Assessment Capabilities und organisatorische Resilienz bei Personalwechseln und Strukturveränderungen?",
        answer: "Organisatorische Resilienz in AI Risk Assessment ist critical für Long-term Compliance und Strategic Effectiveness. ADVISORI entwickelt Sustainable AI Risk Management Capabilities, die unabhängig von Personalwechseln und Organisationsveränderungen robust funktionieren und Institutional Knowledge preservation gewährleisten.\n\n🏗️ Organizational Resilience Framework:\n• Knowledge Management Systems: Implementation comprehensive Knowledge Management Platforms für AI Risk Assessment Methodologies, Best Practices und Institutional Learning Preservation.\n• Capability Development Programs: Establishment systematischer Training und Development Programs für AI Risk Assessment Skills in Various Organizational Levels und Functions.\n• Process Standardization: Development standardisierter AI Risk Assessment Processes mit Clear Documentation, Standard Operating Procedures und Quality Assurance Mechanisms.\n• Cross-functional Expertise: Building AI Risk Assessment Expertise across Multiple Business Functions und Organizational Levels für Redundancy und Knowledge Distribution.\n\n🔄 Sustainable Capability Building:\n• Succession Planning Integration: Integration von AI Risk Assessment Capabilities in Executive Succession Planning und Leadership Development Programs.\n• Technology Platform Investment: Investment in Robust Technology Platforms und Automation Tools, die Dependency auf Individual Expertise reduzieren und Process Consistency gewährleisten.\n• External Partnership Networks: Development strategischer Partnerships mit External AI Risk Experts, Academic Institutions und Professional Networks für Ongoing Capability Support.\n• Continuous Learning Culture: Establishment einer Learning Organization Culture mit Regular Training Updates, Industry Best Practice Integration und Continuous Improvement Mindset."
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
