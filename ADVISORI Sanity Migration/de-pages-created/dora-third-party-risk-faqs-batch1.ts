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
    console.log('Updating DORA Third-Party Risk Management page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-third-party-risk' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-third-party-risk" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche strategischen Vorteile bietet eine proaktive DORA Third-Party Risk Management Strategie für Finanzunternehmen?',
        answer: "DORA Third-Party Risk Management ist weit mehr als eine regulatorische Compliance-Anforderung – es ist ein strategischer Enabler für nachhaltige Geschäftsresilienz und operative Exzellenz im digitalen Finanzsektor. Eine durchdachte Third-Party Risk Management Strategie transformiert potenzielle Schwachstellen in der ICT-Lieferkette in messbare Wettbewerbsvorteile und schafft eine solide Grundlage für vertrauensvolle Partnerschaften mit kritischen Dienstleistern.\n\n🎯 Strategische Geschäftsvorteile:\n• Erhöhte operative Resilienz: Systematische Identifikation und Bewertung von ICT-Drittanbieter-Risiken reduziert das Risiko kaskadierender Ausfälle und schützt vor kostspieligen Betriebsunterbrechungen, die durch Schwachstellen in der Lieferkette entstehen können.\n• Verbesserte Risikotransparenz: Kontinuierliche Third-Party Risk Assessments schaffen detaillierte Einblicke in die tatsächliche Abhängigkeit von externen ICT-Dienstleistern und ermöglichen datenbasierte Entscheidungen für strategische Partnerschaften.\n• Regulatorische Compliance als Differenzierungsmerkmal: Frühzeitige und umfassende DORA-Compliance im Third-Party Bereich positioniert Ihr Unternehmen als vertrauenswürdigen Partner und kann Marktvorteile gegenüber weniger gut vorbereiteten Wettbewerbern schaffen.\n• Optimierte Vendor-Beziehungen: Strukturierte Risk Management-Prozesse fördern transparente Kommunikation mit ICT-Dienstleistern und schaffen Grundlagen für langfristige, strategische Partnerschaften.\n\n🛡️ Operative Exzellenz durch strukturiertes Third-Party Management:\n• Kontinuierliche Verbesserung: Regelmäßige Vendor Assessments und Performance Reviews schaffen einen Zyklus kontinuierlicher Verbesserung der Service-Qualität und Sicherheitsstandards.\n• Proaktive Risikominimierung: Frühzeitige Identifikation potenzieller Schwachstellen bei ICT-Dienstleistern ermöglicht präventive Maßnahmen und reduziert das Risiko unerwarteter Service-Unterbrechungen.\n• Stakeholder-Vertrauen: Transparente Third-Party Risk Management-Prozesse und regelmäßige Reporting stärken das Vertrauen von Aufsichtsbehörden, Investoren und Kunden in die operative Stabilität.\n• Innovation Enablement: Robuste Third-Party Risk Frameworks ermöglichen es, innovative ICT-Services sicher zu integrieren, ohne die operative Resilienz zu gefährden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie unterscheidet sich DORA-konformes Third-Party Risk Management von traditionellen Vendor Management-Ansätzen?',
        answer: "DORA Third-Party Risk Management repräsentiert eine fundamentale Evolution gegenüber traditionellen Vendor Management-Praktiken und stellt spezifische Anforderungen an die Bewertung und Überwachung von ICT-Drittanbietern im Finanzsektor. Die DORA-Anforderungen gehen weit über klassische Vertragsmanagement-Prozesse hinaus und erfordern eine ganzheitliche, risikobasierte Herangehensweise an die Steuerung von ICT-Dienstleister-Beziehungen.\n\n🔍 Fundamentale Unterschiede zu traditionellem Vendor Management:\n• Risikobasierte Kritikalitätsbewertung: DORA erfordert eine systematische Bewertung der Kritikalität von ICT-Dienstleistern basierend auf ihrer Bedeutung für die Geschäftskontinuität, nicht nur auf Basis von Vertragsvolumen oder historischen Beziehungen.\n• Kontinuierliche Überwachung: Während traditionelles Vendor Management oft auf periodische Reviews setzt, verlangt DORA kontinuierliche Monitoring-Prozesse und Real-time Risk Assessment für kritische ICT-Dienstleister.\n• Regulatorische Berichtspflichten: DORA-konformes Third-Party Risk Management umfasst spezifische Dokumentations- und Berichtspflichten gegenüber Aufsichtsbehörden, die über traditionelle Vendor-Dokumentation hinausgehen.\n• Exit-Strategien als Pflichtbestandteil: DORA erfordert explizite Exit-Strategien und Contingency-Pläne für alle kritischen ICT-Dienstleister, nicht nur für strategisch wichtige Vendor-Beziehungen.\n\n⚡ DORA-spezifische Third-Party Risk Management-Anforderungen:\n• Due Diligence Standards: DORA definiert spezifische Standards für die Due Diligence-Prüfung von ICT-Dienstleistern, einschließlich Cyber-Security-Bewertungen und operationeller Resilienz-Assessments.\n• Vertragsgestaltung: DORA-konforme Verträge müssen spezifische Klauseln zu Informationspflichten, Audit-Rechten und Incident-Reporting enthalten, die über traditionelle Service Level Agreements hinausgehen.\n• Konzentrations-Risiko Management: DORA erfordert explizite Bewertung und Management von Konzentrationsrisiken bei ICT-Dienstleistern, um systemische Risiken zu minimieren.\n• Integration in ICT Risk Management: Third-Party Risks müssen vollständig in das übergeordnete ICT Risk Management Framework integriert werden, nicht als separater Vendor Management-Prozess behandelt werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche kritischen Erfolgsfaktoren müssen bei der Implementierung eines DORA-konformen Third-Party Risk Management Frameworks berücksichtigt werden?',
        answer: "Die erfolgreiche Implementierung eines DORA-konformen Third-Party Risk Management Frameworks erfordert eine strategische Herangehensweise, die technische Exzellenz mit organisatorischer Transformation und regulatorischer Compliance verbindet. Kritische Erfolgsfaktoren umfassen sowohl die systematische Bewertung der ICT-Drittanbieter-Landschaft als auch die Etablierung nachhaltiger Governance-Strukturen für kontinuierliches Risk Management.\n\n🏗️ Strategische Grundlagen:\n• Executive Sponsorship und Governance: Starke Unterstützung durch die Geschäftsleitung und klare Governance-Strukturen sind unerlässlich für die erfolgreiche Transformation traditioneller Vendor Management-Prozesse zu DORA-konformen Third-Party Risk Management-Frameworks.\n• Risikobasierte Priorisierung: Systematische Identifikation und Klassifizierung kritischer ICT-Dienstleister basierend auf ihrer Bedeutung für Geschäftsprozesse, regulatorische Anforderungen und operative Resilienz.\n• Cross-funktionale Integration: Nahtlose Integration von Third-Party Risk Management in bestehende Risk Management-, Compliance- und IT-Governance-Strukturen zur Vermeidung von Silos und Redundanzen.\n• Stakeholder-Alignment: Klare Kommunikation und Abstimmung zwischen Procurement, IT-Sicherheit, Risikomanagement, Legal und Geschäftsbereichen zur Sicherstellung konsistenter Third-Party Risk Management-Praktiken.\n\n🔧 Technische und operative Implementierung:\n• Automatisierung und Skalierbarkeit: Implementierung automatisierter Risk Assessment-Tools und kontinuierlicher Monitoring-Systeme, die eine skalierbare Überwachung der gesamten ICT-Drittanbieter-Landschaft ermöglichen.\n• Datenqualität und -integration: Sicherstellung hochwertiger, konsistenter Daten über ICT-Dienstleister aus verschiedenen Quellen für aussagekräftige Risk Assessments und fundierte Entscheidungen.\n• Incident Response Integration: Enge Verzahnung von Third-Party Risk Management mit Incident Response-Prozessen zur schnellen Reaktion auf Sicherheitsvorfälle bei ICT-Dienstleistern.\n• Performance Measurement: Etablierung von KPIs und Metriken zur kontinuierlichen Messung der Effektivität des Third-Party Risk Management-Programms.\n\n👥 Organisatorische Transformation:\n• Kompetenzaufbau: Systematische Entwicklung interner Fähigkeiten in Third-Party Risk Assessment, Contract Management und Vendor Relationship Management.\n• Kulturwandel: Förderung einer Risikobewusstsein-Kultur, die proaktives Third-Party Risk Management als integralen Bestandteil der Geschäftsstrategie anerkennt.\n• Change Management: Strukturierte Begleitung der organisatorischen Veränderungen mit klarer Kommunikation, Schulungen und Unterstützung für alle betroffenen Stakeholder."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie können Finanzunternehmen die Balance zwischen regulatorischer Compliance und geschäftlicher Flexibilität im DORA Third-Party Risk Management optimieren?',
        answer: "Die Optimierung der Balance zwischen DORA-Compliance und geschäftlicher Flexibilität im Third-Party Risk Management erfordert einen strategischen Ansatz, der regulatorische Anforderungen als Enabler für operative Exzellenz und nicht als Hindernis für Innovation betrachtet. Erfolgreiche Organisationen entwickeln adaptive Third-Party Risk Management-Frameworks, die sowohl regulatorische Sicherheit als auch geschäftliche Agilität gewährleisten.\n\n💰 Strategische Balance-Optimierung:\n• Risikobasierte Flexibilität: Entwicklung differenzierter Third-Party Risk Management-Ansätze, die strenge Kontrollen für kritische ICT-Dienstleister mit streamlined Prozessen für weniger kritische Vendor-Beziehungen kombinieren.\n• Agile Compliance-Frameworks: Implementierung modularer Third-Party Risk Management-Strukturen, die schnelle Anpassungen an neue Geschäftsanforderungen ermöglichen, ohne die DORA-Compliance zu gefährden.\n• Präventive Risikominimierung: Proaktive Identifikation und Behandlung von Third-Party Risks reduziert die Notwendigkeit reaktiver Compliance-Maßnahmen und schafft Raum für geschäftliche Innovation.\n• Vendor-Partnership-Modelle: Entwicklung strategischer Partnerschaften mit ICT-Dienstleistern, die gemeinsame Compliance-Ziele und geteilte Verantwortung für Risk Management umfassen.\n\n📊 Operative Effizienz durch intelligente Automatisierung:\n• Automated Risk Scoring: Implementierung automatisierter Risk Assessment-Systeme, die kontinuierliche Vendor-Bewertungen ohne manuellen Aufwand ermöglichen und schnelle Geschäftsentscheidungen unterstützen.\n• Dynamic Contract Management: Nutzung intelligenter Contract Management-Plattformen, die DORA-konforme Vertragsklauseln automatisch integrieren und gleichzeitig flexible Verhandlungen ermöglichen.\n• Real-time Monitoring: Einsatz kontinuierlicher Monitoring-Systeme, die frühzeitige Warnsignale bei Third-Party Risks liefern und proaktive Maßnahmen vor Compliance-Problemen ermöglichen.\n• Streamlined Onboarding: Entwicklung effizienter Vendor-Onboarding-Prozesse, die DORA-Anforderungen erfüllen, ohne die Time-to-Market für neue ICT-Services zu verlängern.\n\n🎯 Geschäftswert durch strategisches Third-Party Management:\n• Innovation Enablement: Nutzung robuster Third-Party Risk Frameworks als Grundlage für die sichere Integration innovativer ICT-Services und emerging Technologies.\n• Competitive Advantage: Transformation von DORA-Compliance in einen Wettbewerbsvorteil durch überlegene Third-Party Risk Management-Capabilities und vertrauensvolle Vendor-Beziehungen.\n• Cost Optimization: Optimierung der Total Cost of Ownership für ICT-Services durch strategisches Third-Party Risk Management und effiziente Vendor-Portfolio-Steuerung.\n• Market Responsiveness: Aufbau agiler Third-Party Risk Management-Prozesse, die schnelle Reaktionen auf Marktveränderungen und neue Geschäftschancen ermöglichen."
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
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
