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
    console.log('Updating SIEM as a Service page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-as-a-service' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-as-a-service" not found')
    }
    
    // Create new FAQs for SIEM as a Service fundamentals and benefits
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was ist SIEM as a Service und wie unterscheidet es sich von traditionellen SIEM-Implementierungen?',
        answer: "SIEM as a Service repräsentiert die Evolution von Security Information and Event Management in das Cloud-Zeitalter, wo traditionelle Infrastructure-Barrieren durch elastische, service-orientierte Architekturen ersetzt werden. Diese Transformation geht weit über eine einfache Cloud-Migration hinaus und ermöglicht völlig neue Ansätze für Security Operations, die sowohl technische als auch wirtschaftliche Vorteile bieten.\n\n☁️ Cloud-Native Architecture Fundamentals:\n• Multi-Tenant SaaS-Plattformen mit elastischer Skalierung und automatischer Resource-Allocation\n• API-First Design für nahtlose Integration mit modernen Cloud-Services und DevSecOps-Workflows\n• Microservices-basierte Architektur für modulare Funktionalität und unabhängige Service-Updates\n• Container-basierte Deployment-Modelle für optimale Performance und Resource-Effizienz\n• Global Distribution mit Edge-Computing für minimale Latenz und lokale Compliance-Anforderungen\n\n🔄 Service Delivery Model Transformation:\n• Subscription-basierte Pricing-Modelle mit Pay-as-you-Grow Flexibilität statt hoher Capital Investments\n• Continuous Feature Updates und Innovation ohne manuelle Upgrade-Zyklen\n• Managed Infrastructure mit automatischer Wartung, Patching und Performance-Optimization\n• Self-Service Provisioning für sofortige Kapazitätserweiterung und Feature-Aktivierung\n• Global Service Level Agreements mit garantierter Verfügbarkeit und Performance-Metriken\n\n⚡ Operational Excellence Advantages:\n• Instant Deployment mit Time-to-Value von Tagen statt Monaten\n• Unlimited Scalability ohne Hardware-Limitationen oder Capacity Planning\n• Automatic High Availability und Disaster Recovery ohne zusätzliche Infrastruktur\n• Built-in Security Controls und Compliance-Features auf Enterprise-Level\n• Real-time Analytics und Machine Learning Capabilities ohne separate Tool-Integration\n\n🎯 Strategic Business Impact:\n• Transformation von Capital Expenditure zu Operational Expenditure für verbesserte Cash Flow\n• Focus Shift auf Security Strategy statt Infrastructure Management\n• Accelerated Digital Transformation durch Cloud-Native Security Operations\n• Enhanced Business Agility durch flexible Service-Skalierung und Feature-Adoption\n• Reduced Total Cost of Ownership durch Shared Infrastructure und Economies of Scale"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche strategischen Vorteile bietet SIEM as a Service für moderne Unternehmen und deren digitale Transformation?',
        answer: "SIEM as a Service fungiert als Katalysator für die digitale Transformation von Unternehmen, indem es traditionelle Security Operations von Infrastructure-Limitationen befreit und innovative, cloud-native Ansätze ermöglicht. Die strategischen Vorteile gehen weit über Kostenersparnisse hinaus und umfassen fundamentale Verbesserungen in Agilität, Innovation und Wettbewerbsfähigkeit.\n\n🚀 Digital Transformation Acceleration:\n• Cloud-First Security Strategy als Enabler für umfassende Digital Transformation Initiativen\n• API-driven Integration mit modernen Cloud-Plattformen und DevSecOps-Pipelines\n• Microservices-kompatible Security Architecture für agile Entwicklungszyklen\n• Container-native Security Monitoring für moderne Application Architectures\n• Edge Computing Integration für IoT und Distributed Computing Security\n\n💡 Innovation und Competitive Advantage:\n• Immediate Access zu Latest Security Technologies ohne interne R&D Investments\n• AI und Machine Learning Capabilities für Advanced Threat Detection und Behavioral Analytics\n• Threat Intelligence Integration mit Global Security Research und Real-time Updates\n• Automated Response Capabilities für Rapid Incident Containment und Remediation\n• Predictive Analytics für Proactive Risk Management und Strategic Security Planning\n\n📈 Business Agility und Scalability:\n• Elastic Resource Scaling für Business Growth, Seasonal Demands und M&A Activities\n• Geographic Expansion Support ohne lokale Infrastructure Investments\n• Multi-Cloud Strategy Enablement für Vendor Diversification und Risk Mitigation\n• Rapid Service Provisioning für New Business Units und Strategic Initiatives\n• Flexible Service Models für verschiedene Business Requirements und Compliance Needs\n\n💰 Economic Efficiency und Resource Optimization:\n• Predictable Operating Expenses mit Subscription-based Cost Models\n• Elimination of Capital Investments für Hardware, Software und Infrastructure\n• Reduced Personnel Requirements für Infrastructure Management und Maintenance\n• Shared Cost Benefits durch Multi-Tenant Architecture und Economies of Scale\n• Optimized Resource Utilization durch Dynamic Allocation und Usage-based Pricing\n\n🎯 Strategic Focus Enhancement:\n• Liberation of Internal Resources für Core Business Activities und Strategic Initiatives\n• Enhanced Security Expertise Access ohne langwierige Recruitment und Training\n• Improved Risk Management durch Professional Service Provider Capabilities\n• Accelerated Compliance Achievement durch Built-in Regulatory Features\n• Strategic Partnership Opportunities mit Leading Security Technology Providers"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie bewertet man die Readiness für SIEM as a Service und welche Faktoren sind entscheidend für eine erfolgreiche Transformation?',
        answer: "Die Bewertung der SIEMaaS-Readiness erfordert eine ganzheitliche Analyse von technischen, organisatorischen und strategischen Faktoren, die über traditionelle IT-Assessments hinausgeht. Eine erfolgreiche Transformation hängt von der sorgfältigen Evaluierung der Cloud-Reife, Security-Anforderungen und Change-Management-Capabilities ab.\n\n🔍 Technical Readiness Assessment:\n• Cloud Infrastructure Maturity und bestehende Multi-Cloud Strategy Alignment\n• Network Architecture Evaluation für Cloud-Connectivity und Bandwidth Requirements\n• Data Architecture Assessment für Cloud-Native Data Flow und Integration Patterns\n• Security Architecture Review für Cloud Security Controls und Compliance Alignment\n• Integration Capability Analysis für API-Management und Service Orchestration\n\n🏢 Organizational Readiness Evaluation:\n• Cloud Skills Assessment und Training Requirements für Security Teams\n• Change Management Capability für Service Model Transformation\n• Governance Framework Readiness für Cloud Service Management\n• Risk Management Maturity für Cloud Security Risk Assessment\n• Vendor Management Capabilities für Strategic Service Provider Relationships\n\n📊 Strategic Alignment Factors:\n• Digital Transformation Strategy Alignment mit Cloud-First Initiatives\n• Business Growth Projections und Scalability Requirements\n• Compliance und Regulatory Requirements für Cloud-based Security Operations\n• Budget Allocation Preferences zwischen CapEx und OpEx Models\n• Innovation Priorities und Technology Adoption Strategies\n\n⚖️ Risk und Compliance Considerations:\n• Data Sovereignty Requirements und Geographic Restrictions\n• Regulatory Compliance Obligations für verschiedene Jurisdictions\n• Business Continuity Requirements und Disaster Recovery Expectations\n• Security Control Requirements und Audit Trail Needs\n• Vendor Risk Tolerance und Due Diligence Capabilities\n\n🎯 Success Criteria Definition:\n• Performance Metrics Definition für Service Quality Measurement\n• Cost Optimization Targets und ROI Expectations\n• Security Effectiveness Goals und Threat Detection Requirements\n• Compliance Achievement Timelines und Audit Readiness\n• Innovation Adoption Plans und Future State Vision\n\n📋 Readiness Improvement Strategies:\n• Cloud Skills Development Programs für Security Teams\n• Governance Framework Enhancement für Cloud Service Management\n• Network Infrastructure Optimization für Cloud Connectivity\n• Security Policy Updates für Cloud-Native Operations\n• Vendor Management Process Development für Strategic Partnerships"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Kostenmodelle und Pricing-Strukturen gibt es bei SIEM as a Service und wie optimiert man die Wirtschaftlichkeit?',
        answer: "SIEM as a Service Kostenmodelle revolutionieren traditionelle Security Investment Approaches durch flexible, usage-basierte Pricing-Strukturen, die optimale Kosteneffizienz und Planbarkeit ermöglichen. Die Auswahl des richtigen Kostenmodells und dessen strategische Optimierung sind entscheidend für maximale ROI und nachhaltige Wirtschaftlichkeit.\n\n💰 Pricing Model Variationen:\n• Data Volume-based Pricing mit gestaffelten Tarifen für verschiedene Ingestion-Volumina\n• User-based Licensing für definierte Anzahl von Security Analysts und Administratoren\n• Feature-based Subscriptions mit modularen Add-ons für spezielle Capabilities\n• Hybrid Models mit Base Subscription plus Usage-based Overages für Flexibilität\n• Enterprise Agreements mit Custom Pricing für Large-Scale Deployments\n\n📊 Cost Optimization Strategies:\n• Data Lifecycle Management für intelligente Retention und Archiving Policies\n• Smart Data Filtering für Reduction von irrelevanten Log Sources und Noise\n• Tiered Storage Strategies für Cost-effective Long-term Data Retention\n• Usage Pattern Analysis für Predictive Capacity Planning und Budget Forecasting\n• Multi-Tenant Cost Allocation für Fair Chargeback Models in großen Organisationen\n\n🔄 Dynamic Pricing Advantages:\n• Elastic Scaling mit automatischer Cost Adjustment basierend auf tatsächlicher Usage\n• Seasonal Pricing Flexibility für Businesses mit schwankenden Security Requirements\n• Geographic Pricing Optimization für Multi-Region Deployments\n• Commitment-based Discounts für langfristige Service Agreements\n• Volume Discounts für Enterprise-Scale Implementations\n\n📈 ROI Maximization Techniques:\n• Total Cost of Ownership Analysis inklusive Hidden Costs von On-Premise Solutions\n• Value-based Pricing Evaluation basierend auf Security Effectiveness und Risk Reduction\n• Operational Efficiency Gains durch Automation und Reduced Manual Processes\n• Compliance Cost Savings durch Built-in Regulatory Features\n• Innovation Value durch Access zu Latest Technologies ohne zusätzliche Investments\n\n🎯 Budget Planning und Management:\n• Predictable Monthly Costs für verbesserte Financial Planning und Cash Flow\n• Cost Transparency durch Detailed Usage Analytics und Reporting\n• Budget Alert Systems für Proactive Cost Management und Overage Prevention\n• Multi-Year Planning mit Escalation Clauses für Inflation und Growth\n• Cost Center Allocation für Departmental Chargeback und Accountability\n\n📋 Economic Efficiency Metrics:\n• Cost per GB Ingested für Data Volume Efficiency Measurement\n• Cost per Security Event für Operational Efficiency Tracking\n• Cost per Compliance Requirement für Regulatory Efficiency Assessment\n• Time-to-Value Measurement für Investment Payback Calculation\n• Security ROI Tracking durch Risk Reduction und Incident Cost Avoidance"
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQ batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
