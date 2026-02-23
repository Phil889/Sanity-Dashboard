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
    console.log('Updating NIS2 Business Continuity Management page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-business-continuity-management' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-business-continuity-management" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie etabliert ADVISORI ein NIS2-konformes BCM-Governance-System, das sowohl Aufsichtsrat als auch Management die notwendige Transparenz und Kontrolle über Cyber-Resilienz bietet?",
        answer: "Die NIS2-Richtlinie fordert explizit die Beteiligung der Unternehmensleitung an Cyber-Sicherheitsmaßnahmen und stellt damit BCM in den Fokus der Corporate Governance. ADVISORI entwickelt BCM-Governance-Frameworks, die sowohl regulatorische Compliance sicherstellen als auch der Führungsebene die notwendigen Instrumente für strategische Steuerung und Risikomanagement bereitstellen.\n\n🏛️ Strategische BCM-Governance-Architektur:\n• Board-Level BCM Oversight: Etablierung spezifischer Aufsichtsratskompetenzen für Business Continuity und Cyber-Resilienz mit klaren Berichtswegen und Entscheidungsbefugnissen.\n• Executive BCM Dashboard: Entwicklung von Führungskennzahlen und Dashboards, die der Geschäftsleitung kontinuierliche Einblicke in BCM-Performance und Risikolage ermöglichen.\n• Risk Appetite Framework: Definition und Operationalisierung der organisationalen Risikotoleranz für Business Continuity Ereignisse im Kontext der Gesamtstrategie.\n• Compliance Monitoring und Reporting: Automatisierte Systeme zur kontinuierlichen Überwachung der NIS2-Compliance und proaktiven Meldung von Abweichungen.\n\n⚖️ ADVISORI's Governance-Excellence-Ansatz:\n• Three Lines of Defense Integration: Einbindung von BCM in das bestehende Risikomanagement-Framework mit klarer Aufgabentrennung zwischen operativen Einheiten, Risikomanagement und interner Revision.\n• Stakeholder Communication Frameworks: Entwicklung strukturierter Kommunikationsprozesse für verschiedene Stakeholder-Gruppen (Aufsichtsrat, Investoren, Regulatoren, Kunden).\n• Performance Measurement und KPIs: Etablierung messbarer BCM-Leistungsindikatoren, die sowohl operative Effektivität als auch strategischen Wertbeitrag transparent machen.\n• Crisis Leadership Protocols: Definition klarer Führungsstrukturen und Entscheidungsprozesse für Krisensituationen, die auch unter Stress effektive Governance gewährleisten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Wie integriert ADVISORI fortschrittliche Technologien wie KI und Cloud Computing in NIS2-Business Continuity Strategien, ohne dabei neue Risiken zu schaffen?",
        answer: "Die digitale Transformation bietet einzigartige Möglichkeiten zur Verbesserung von Business Continuity Capabilities, bringt aber auch neue Risiken mit sich. ADVISORI entwickelt technologiegestützte BCM-Lösungen, die sowohl die Potenziale moderner Technologien nutzen als auch die damit verbundenen Risiken proaktiv adressieren und dabei vollständig NIS2-konform bleiben.\n\n🤖 Intelligente BCM-Technologie-Integration:\n• AI-powered Predictive Analytics: Einsatz von Machine Learning zur Vorhersage potenzieller Störungen und automatischen Optimierung von BCM-Maßnahmen basierend auf Echtzeit-Datenanalyse.\n• Cloud-native BCM Architekturen: Entwicklung skalierbarer, geografisch verteilter BCM-Systeme, die sowohl Resilienz als auch Kosteneffizienz maximieren.\n• Automated Response Orchestration: Implementierung von KI-gestützten Systemen zur automatischen Aktivierung und Koordination von BCM-Maßnahmen bei erkannten Störungen.\n• Digital Twin Simulation: Aufbau digitaler Zwillinge kritischer Infrastrukturen zur Simulation und Optimierung von BCM-Szenarien ohne Risiko für produktive Systeme.\n\n🛡️ ADVISORI's Secure-by-Design Technologieansatz:\n• Zero Trust BCM Architecture: Implementierung von Zero Trust-Prinzipien in BCM-Systemen zur Minimierung von Insider-Bedrohungen und lateraler Bewegung bei Kompromittierungen.\n• Quantum-resistant Encryption: Vorbereitung auf Post-Quantum-Kryptographie zur langfristigen Sicherung von BCM-kritischen Daten und Kommunikation.\n• Multi-Cloud Resilience Strategies: Entwicklung von Cloud-Strategien, die Vendor Lock-in vermeiden und geografische sowie technologische Diversifikation maximieren.\n• Continuous Security Validation: Etablierung kontinuierlicher Sicherheitstests und Validierungen für alle technologischen BCM-Komponenten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie gewährleistet ADVISORI, dass unser NIS2-BCM human-zentriert bleibt und die psychologischen und sozialen Aspekte von Krisen angemessen berücksichtigt?",
        answer: "Während Technologie und Prozesse die Grundlage für effektives BCM bilden, erkennt ADVISORI an, dass der menschliche Faktor oft über Erfolg oder Misserfolg von Business Continuity Maßnahmen entscheidet. Unser Ansatz integriert bewährte Erkenntnisse aus Krisenpsychologie, Organisationsverhalten und Change Management in NIS2-konforme BCM-Systeme.\n\n👥 Human-Centered BCM Design:\n• Crisis Psychology Integration: Berücksichtigung psychologischer Stressreaktionen und Entscheidungsfindung unter Druck bei der Gestaltung von BCM-Prozessen und -Training.\n• Stakeholder-spezifische Kommunikation: Entwicklung zielgruppenspezifischer Kommunikationsstrategien für verschiedene interne und externe Stakeholder während Krisensituationen.\n• Resilience Capability Building: Systematische Entwicklung individueller und organisationaler Resilienz-Fähigkeiten durch gezieltes Training und Kulturentwicklung.\n• Leadership in Crisis: Spezielle Vorbereitung von Führungskräften auf ihre Rolle als Entscheidungsträger und Kommunikatoren in Krisensituationen.\n\n🧠 ADVISORI's ganzheitlicher People-First Ansatz:\n• Behavioral BCM Analytics: Einsatz von Verhaltenswissenschaften zur Optimierung von BCM-Prozessen und zur Vorhersage menschlicher Reaktionen in Krisenszenarien.\n• Cultural Resilience Assessment: Bewertung und Entwicklung organisationaler Kulturen, die Resilienz, Flexibilität und effektive Krisenreaktion fördern.\n• Inclusive Crisis Management: Sicherstellung, dass BCM-Maßnahmen die Bedürfnisse aller Mitarbeiter berücksichtigen, einschließlich vulnerabler Gruppen und Remote-Arbeitskräfte.\n• Mental Health und Wellbeing Integration: Integration von Mental Health-Überlegungen in BCM-Planung zur Unterstützung der psychischen Gesundheit während und nach Krisen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie positioniert ADVISORI NIS2-Business Continuity Management als Wettbewerbsvorteil in M&A-Transaktionen und Investorenbeziehungen?",
        answer: "In einer zunehmend digitalisierten und vernetzten Wirtschaft wird Cyber-Resilienz zu einem kritischen Bewertungsfaktor bei Unternehmensbewertungen und Investitionsentscheidungen. ADVISORI positioniert NIS2-konformes BCM als strategischen Asset, der sowohl bei M&A-Transaktionen als auch in Investorenbeziehungen erheblichen Mehrwert schaffen kann.\n\n💼 BCM als strategischer Value Driver:\n• Due Diligence Excellence: Unternehmen mit nachweislich robusten BCM-Systemen durchlaufen M&A-Prozesse schneller und mit geringeren Risikobewertungen, was zu höheren Bewertungen führt.\n• Investor Confidence Building: Systematische BCM-Capabilities demonstrieren operationale Reife und Risikomanagement-Kompetenz, was das Vertrauen institutioneller Investoren stärkt.\n• Integration Risk Mitigation: Starke BCM-Fähigkeiten erleichtern Post-Merger-Integrationen und reduzieren die Wahrscheinlichkeit kostspieliger Störungen während Fusionsprozessen.\n• ESG Rating Enhancement: BCM-Excellence trägt zu verbesserten ESG-Bewertungen bei, die zunehmend für Investitionsentscheidungen relevant werden.\n\n📈 ADVISORI's Investment-Grade BCM Strategie:\n• Valuation-oriented BCM Metrics: Entwicklung von BCM-Kennzahlen, die direkt mit Unternehmenswert und Investitionsattraktivität korrelieren.\n• Investor Communication Frameworks: Spezialisierte Kommunikationsstrategien, die BCM-Capabilities für verschiedene Investorentypen verständlich und attraktiv darstellen.\n• Transaction Readiness Programs: Vorbereitung von BCM-Dokumentation und -Prozessen für effiziente Due Diligence-Prozesse.\n• Cross-Border Compliance Advantage: NIS2-Compliance als Sprungbrett für internationale Expansion und globale Investorenansprache."
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
