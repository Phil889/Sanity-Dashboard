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
    console.log('Updating Banklizenz Governance & Organisationsstruktur page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'banklizenz-governance-organisationsstruktur' })
    
    if (!existingDoc) {
      throw new Error('Document "banklizenz-governance-organisationsstruktur" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie stellt ADVISORI sicher, dass die entwickelten Governance-Strukturen nicht nur die BaFin überzeugen, sondern auch internationale Best Practices integrieren und globale Skalierbarkeit ermöglichen?",
        answer: "Moderne Banking-Governance muss über nationale Grenzen hinausgehen und internationale Standards integrieren, um in einer globalisierten Finanzwelt wettbewerbsfähig zu bleiben. ADVISORI entwickelt Governance-Frameworks, die nicht nur deutschen BaFin-Anforderungen genügen, sondern auch internationale Best Practices integrieren und die Grundlage für globale Expansion schaffen.\n\n🌍 Internationale Governance-Excellence-Standards:\n• Basel Committee Integration: Vollständige Berücksichtigung der Basel III/IV-Governance-Prinzipien und internationaler Supervisory Guidance für grenzüberschreitende Kompatibilität.\n• EU Passport Readiness: Governance-Strukturen, die für die Nutzung von EU-Banking-Passport-Rechten und Expansion in andere Mitgliedstaaten optimiert sind.\n• Global Regulatory Harmonization: Integration von FSB (Financial Stability Board)-Empfehlungen und G20-Governance-Standards für internationale Akzeptanz.\n• Cross-Border Compliance Efficiency: Entwicklung von Governance-Prozessen, die Multiple-Jurisdictional-Requirements mit minimaler Duplikation erfüllen.\n\n🎯 ADVISORI's Global Governance Architecture:\n• International Framework Alignment: Mapping deutscher BaFin-Anforderungen gegen internationale Standards wie UK PRA/FCA, Singapore MAS, Hong Kong HKMA für nahtlose Cross-Border-Operationen.\n• Scalable Governance Modules: Modulare Governance-Komponenten, die bei internationaler Expansion durch jurisdictions-spezifische Module ergänzt werden können, ohne Kernstrukturen zu ändern.\n• Global Risk Management Integration: Governance-Frameworks, die internationale Risikomanagement-Standards (COSO, ISO 31000) integrieren und für globale Audit-Standards (SOX, IFRS) vorbereitet sind.\n• Cultural Adaptability: Governance-Designs, die bei internationaler Expansion an lokale Geschäftskulturen und Regulatory Practices angepasst werden können, während Kernprinzipien erhalten bleiben.\n• Technology-Enabled Global Oversight: Integration digitaler Governance-Tools, die Real-time-Monitoring und -Reporting über Multiple-Jurisdictions ermöglichen und globale Compliance-Efficiency schaffen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "In welcher Weise entwickelt ADVISORI Governance-Strukturen, die sowohl Startup-Agilität als auch Enterprise-Grade-Kontrollen bieten und damit das Beste aus beiden Welten für wachsende Fintech-Unternehmen schaffen?",
        answer: "Die moderne Fintech-Landschaft erfordert eine neue Generation von Governance-Strukturen, die sowohl die Agilität und Innovationsgeschwindigkeit von Startups als auch die robusten Kontrollen und Risk-Management-Capabilities etablierter Banken bieten. ADVISORI hat einen hybriden Governance-Ansatz entwickelt, der diese scheinbar widersprüchlichen Anforderungen harmonisiert.\n\n⚡ Agile-Enterprise Governance Hybrid:\n• Lean-but-Robust Framework: Minimalistischer Governance-Overhead bei maximaler Compliance-Abdeckung durch intelligente Prozessautomatisierung und risikobasierte Kontrolldichte.\n• Sprint-Compatible Compliance: Governance-Prozesse, die in agile Entwicklungszyklen integriert sind und Continuous Compliance ohne Development-Velocity-Verlust ermöglichen.\n• Scalable Control Architecture: Governance-Systeme, die bei Unternehmenswachstum automatisch skalieren und zusätzliche Kontrollebenen aktivieren, ohne bestehende Prozesse zu disruption.\n• Innovation-Enabling Oversight: Risk-Management-Frameworks, die kontrollierte Innovation und Experimentation ermöglichen, während regulatorische Boundaries respektiert werden.\n\n🚀 ADVISORI's Fintech-Optimized Governance:\n• Dynamic Governance Intensity: Adaptive Governance-Dichte, die bei Low-Risk-Innovationen minimale Oversight und bei High-Impact-Changes intensive Controls aktiviert.\n• DevOps-Integrated Compliance: Governance-Controls, die direkt in CI/CD-Pipelines, Code-Reviews und Deployment-Prozesse integriert sind für Real-time-Compliance-Validation.\n• Real-Time Risk Monitoring: KI-gestützte Governance-Dashboards, die kontinuierliches Risk-Monitoring ermöglichen und proaktive Interventionen bei Compliance-Drift auslösen.\n• Ecosystem-Compatible Governance: Governance-Strukturen, die Fintech-Partnerschaften, API-Economy-Participation und Platform-Business-Models unterstützen, ohne Compliance zu kompromittieren.\n• Investor-Grade Transparency: Governance-Reporting und -Dashboards, die VC/PE-Investoren die institutionelle Reife und Risk-Management-Kompetenz demonstrieren, die für Growth-Stage-Funding erforderlich ist."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie integriert ADVISORI ESG-Faktoren und Nachhaltigkeits-Governance in die Banklizenz-Organisationsstruktur und positioniert damit das Institut für zukünftige Regulatory Requirements und Stakeholder-Erwartungen?",
        answer: "ESG (Environmental, Social, Governance) und Nachhaltigkeit sind von nice-to-have zu must-have für moderne Finanzinstitute geworden. ADVISORI integriert proaktiv ESG-Governance in Banking-Strukturen, um nicht nur aufkommende regulatorische Anforderungen zu antizipieren, sondern auch Competitive Advantage durch Sustainability Leadership zu schaffen.\n\n🌱 ESG-Integrated Banking Governance:\n• Regulatory Anticipation: Proaktive Integration kommender EU-Sustainable Finance-Regulations (SFDR, EU Taxonomy, CSRD) in Governance-Strukturen zur Vermeidung kostspieliger Retrofit-Prozesse.\n• Board-Level ESG Integration: Entwicklung von Board-Committees und C-Level-Rollen (Chief Sustainability Officer) mit klaren ESG-Verantwortlichkeiten und KPIs.\n• Risk-Return ESG Integration: Integration von ESG-Faktoren in Credit-Decision-Processes, Investment-Frameworks und Risk-Management-Systemen für holistische Sustainability-Integration.\n• Stakeholder Capitalism Governance: Governance-Strukturen, die Multiple-Stakeholder-Interests (Shareholders, Customers, Employees, Society) balancieren und Sustainable Value Creation priorisieren.\n\n🎯 ADVISORI's Sustainability-First Governance Design:\n• Climate Risk Integration: Governance-Frameworks für Climate Stress Testing, Transition Risk Management und Physical Risk Assessment als integrale Komponenten der Organisationsstruktur.\n• Impact Measurement Architecture: Governance-Systeme für Impact-KPI-Tracking, Sustainability-Reporting und ESG-Performance-Management auf Board- und Executive-Level.\n• Green Finance Enablement: Governance-Strukturen, die Green Bond Issuance, Sustainable Lending und ESG-Investment-Products unterstützen und entsprechende Oversight-Mechanismen etablieren.\n• Supply Chain ESG Governance: Integration von ESG-Due-Diligence-Prozessen für Vendor-Management, Partnership-Decisions und Third-Party-Risk-Management.\n• Transparency and Accountability Framework: Governance-Systeme für Public ESG-Reporting, Stakeholder-Engagement und External ESG-Rating-Optimization zur Stärkung der Market-Position als Sustainability Leader."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie entwickelt ADVISORI Crisis-Resilient Governance-Strukturen, die bei Black-Swan-Events, Cyber-Attacken oder regulatorischen Schocks handlungsfähig bleiben und Business Continuity sicherstellen?",
        answer: "Moderne Banking-Governance muss für extreme Stress-Szenarien und unvorhersehbare Krisen konzipiert sein. ADVISORI entwickelt Anti-Fragile Governance-Strukturen, die nicht nur Krisen überstehen, sondern gestärkt daraus hervorgehen und in volatilen Umgebungen Competitive Advantage generieren.\n\n🛡️ Crisis-Proof Governance Architecture:\n• Distributed Decision Making: Governance-Strukturen mit redundanten Entscheidungswegen und dezentralen Autoritäten, die bei C-Level-Ausfällen oder Isolation handlungsfähig bleiben.\n• Rapid Response Protocols: Pre-Authorized Crisis-Response-Mechanismen, die bei Emergencies sofortige Maßnahmen ohne langwierige Genehmigungsprozesse ermöglichen.\n• Scenario-Based Governance Testing: Regelmäßige Stress-Tests der Governance-Systeme durch Simulation von Cyber-Attacks, Regulatory Interventions und Market-Disruptions.\n• Digital-Native Crisis Management: Cloud-basierte Governance-Systeme mit Remote-Capabilities, die bei Physical-Office-Disruptions vollständige Operational Continuity gewährleisten.\n\n⚡ ADVISORI's Anti-Fragile Governance Framework:\n• Dynamic Authority Escalation: Governance-Systeme, die bei Krisen automatisch erweiterte Authorities aktivieren und beschleunigte Decision-Making ermöglichen, während Compliance-Standards aufrechterhalten werden.\n• Real-Time Intelligence Integration: Governance-Dashboards mit Real-time-Monitoring von Regulatory-Alerts, Cyber-Threat-Intelligence und Market-Volatility für proaktive Response-Activation.\n• Stakeholder Communication Protocols: Pre-Established Communication-Channels und -Protocols für Crisis-Communication mit Regulators, Media, Customers und Investors.\n• Recovery and Learning Integration: Governance-Prozesse für Post-Crisis-Analysis, Lesson-Learning und Continuous-Improvement zur Stärkung der Institutional Resilience.\n• Regulatory Relationship Management: Governance-Frameworks für Crisis-Communication mit BaFin und anderen Authorities, die Transparency und Cooperation demonstrieren und Regulatory Goodwill aufbauen."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
