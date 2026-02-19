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
    console.log('Updating FIDA Verordnung page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'fida-verordnung' })
    
    if (!existingDoc) {
      throw new Error('Document "fida-verordnung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche spezifischen regulatorischen Anforderungen definiert die FIDA Verordnung für Finanzdienstleister?',
        answer: "Die FIDA Verordnung etabliert ein umfassendes regulatorisches Framework, das präzise Anforderungen für alle Finanzdienstleister in der EU definiert. Diese Bestimmungen gehen weit über bestehende Open Banking-Regelungen hinaus und schaffen einheitliche Standards für Datenfreigabe, Kundenrechte und technische Implementation im gesamten Finanzsektor.\n\n📋 Kernbestimmungen der FIDA Verordnung:\n• Erweiterte Datenfreigabe-Verpflichtungen: Finanzdienstleister müssen Kundendaten auf Anfrage an autorisierte Drittanbieter weitergeben, wobei dies alle Finanzprodukte und -dienstleistungen umfasst, nicht nur Zahlungskonten.\n• Standardisierte API-Anforderungen: Implementation einheitlicher technischer Standards für Datenschnittstellen, die Interoperabilität und sichere Datenübertragung gewährleisten.\n• Erweiterte Kundenrechte: Kunden erhalten umfassende Kontrolle über ihre Finanzdaten mit granularen Einverständnisoptionen und jederzeitigen Widerrufsmöglichkeiten.\n• Governance und Compliance-Strukturen: Aufbau spezifischer Organisationsstrukturen und Verantwortlichkeiten für FIDA-Compliance innerhalb des Unternehmens.\n\n🔒 Datenschutz und Sicherheitsanforderungen:\n• Robuste Authentifizierung und Autorisierung: Implementation starker Kundenidentifikations- und Einverständnisverfahren für alle Datenfreigabe-Transaktionen.\n• Datenschutz-by-Design: Integration von Datenschutzprinzipien in alle FIDA-relevanten Systeme und Prozesse von der Konzeption an.\n• Sichere Datenübertragung: Verwendung modernster Verschlüsselungs- und Sicherheitstechnologien für alle Datenfreigabe-Aktivitäten.\n• Audit-Trail und Nachverfolgbarkeit: Vollständige Dokumentation und Nachverfolgung aller Datenfreigabe-Aktivitäten für Compliance und Audit-Zwecke.\n\n⚖️ Compliance und Überwachungsanforderungen:\n• Kontinuierliche Compliance-Überwachung: Aufbau von Systemen zur kontinuierlichen Überwachung der Einhaltung aller FIDA-Bestimmungen.\n• Regulatorische Berichterstattung: Regelmäßige Meldungen an Aufsichtsbehörden über FIDA-Compliance-Status und Datenfreigabe-Aktivitäten.\n• Incident Management: Etablierung von Verfahren für die Meldung und Behandlung von Sicherheitsvorfällen und Compliance-Verstößen.\n• Drittanbieter-Management: Umfassende Due-Diligence und Überwachung aller autorisierten Drittanbieter, die Zugang zu Kundendaten erhalten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie unterscheidet sich die FIDA Verordnung von bestehenden Regulierungen wie PSD2 und welche zusätzlichen Compliance-Herausforderungen entstehen?',
        answer: "Die FIDA Verordnung stellt eine erhebliche Erweiterung und Vertiefung bestehender Finanzregulierung dar, die neue Compliance-Dimensionen schafft und bestehende Frameworks erheblich erweitert. Während PSD2 primär auf Zahlungsdienstleistungen fokussiert, umfasst FIDA alle Finanzdienstleistungssektoren und schafft neue regulatorische Komplexitäten.\n\n🔄 Erweiterte Sektorabdeckung und Anwendungsbereich:\n• Umfassende Finanzdienstleistungen: FIDA erweitert den Anwendungsbereich auf Versicherungen, Investmentfonds, Pensionsfonds, Kreditdienstleistungen und alle anderen Finanzprodukte, nicht nur Zahlungskonten.\n• Granulare Datenfreigabe-Anforderungen: Detailliertere und umfassendere Datenfreigabe-Verpflichtungen, die über Account Information Services hinausgehen und produktspezifische Daten einschließen.\n• Erweiterte Drittanbieter-Kategorien: Neue Kategorien von Drittanbietern mit spezifischen Autorisierungs- und Überwachungsanforderungen.\n• Cross-Border Harmonisierung: Einheitliche Standards für grenzüberschreitende Finanzdienstleistungen innerhalb der EU.\n\n📊 Technische und operative Komplexitäten:\n• Erweiterte API-Standards: Komplexere technische Anforderungen für Datenschnittstellen, die verschiedene Finanzprodukte und -dienstleistungen abdecken müssen.\n• Multi-Sektor Integration: Herausforderungen bei der Integration verschiedener Finanzdienstleistungssysteme und -datenstrukturen.\n• Skalierbare Consent-Management: Komplexere Einverständnismanagement-Systeme, die granulare Kontrolle über verschiedene Datentypen und Verwendungszwecke ermöglichen.\n• Legacy-System-Integration: Erhöhte Komplexität bei der Integration bestehender IT-Landschaften verschiedener Finanzdienstleistungssektoren.\n\n⚡ Neue Governance und Compliance-Anforderungen:\n• Erweiterte Organisationsstrukturen: Aufbau spezialisierter FIDA-Compliance-Funktionen, die über bestehende PSD2-Strukturen hinausgehen.\n• Sektorübergreifende Risikomanagement: Entwicklung integrierter Risikomanagement-Frameworks, die verschiedene Finanzdienstleistungsbereiche abdecken.\n• Komplexere Audit-Anforderungen: Erweiterte Prüfungs- und Nachweispflichten, die alle FIDA-relevanten Geschäftsbereiche umfassen.\n• Regulatorische Koordination: Koordination mit verschiedenen Aufsichtsbehörden und Regulierungsframeworks gleichzeitig.\n\n🌐 Strategische Compliance-Herausforderungen:\n• Business Model Transformation: Notwendigkeit zur Anpassung von Geschäftsmodellen an erweiterte Datenfreigabe-Anforderungen und neue Wettbewerbsdynamiken.\n• Competitive Landscape Changes: Anpassung an veränderte Wettbewerbsbedingungen durch erweiterte Drittanbieter-Zugangsrechte.\n• Customer Relationship Management: Neugestaltung von Kundenbeziehungen in einem Umfeld erweiterter Datenfreigabe und Drittanbieter-Services.\n• Innovation und Compliance Balance: Ausbalancierung von Innovationsbestrebungen mit erweiterten Compliance-Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche technischen Standards und API-Spezifikationen müssen gemäß der FIDA Verordnung implementiert werden?',
        answer: "Die FIDA Verordnung definiert umfassende technische Standards und API-Spezifikationen, die eine sichere, interoperable und skalierbare Datenfreigabe-Infrastruktur gewährleisten. Diese technischen Anforderungen gehen erheblich über bestehende Standards hinaus und erfordern eine strategische technische Transformation.\n\n🔧 Kernkomponenten der technischen FIDA-Standards:\n• Standardisierte API-Architekturen: Implementation einheitlicher RESTful API-Standards mit spezifischen Endpunkten für verschiedene Finanzdienstleistungskategorien und Datentypen.\n• Erweiterte Authentifizierung und Autorisierung: Implementation von OAuth-basierten Authentifizierungsverfahren mit Multi-Faktor-Authentifizierung und granularen Autorisierungsebenen.\n• Datenformat-Standardisierung: Verwendung einheitlicher Datenformate und Schemas für verschiedene Finanzprodukte und -dienstleistungen zur Gewährleistung der Interoperabilität.\n• Sichere Kommunikationsprotokolle: Implementation von TLS-Verschlüsselung und anderen Sicherheitsprotokollen für alle API-Kommunikation.\n\n🛡️ Sicherheits- und Datenschutz-Spezifikationen:\n• End-to-End-Verschlüsselung: Implementation robuster Verschlüsselungsverfahren für alle Datenübertragungen und -speicherungen.\n• Digital Signing und Integrität: Verwendung digitaler Signaturen und Integritätsprüfungen zur Gewährleistung der Datenintegrität.\n• Secure API Gateways: Aufbau sicherer API-Gateways mit erweiterten Sicherheitsfeatures wie Rate Limiting, Threat Detection und Anomalie-Erkennung.\n• Privacy-Preserving Technologies: Integration von Technologien zum Schutz der Privatsphäre wie Differential Privacy und Homomorphic Encryption wo anwendbar.\n\n📡 Interoperabilität und Integration-Standards:\n• Cross-Platform Compatibility: Entwicklung von APIs, die mit verschiedenen Technologie-Stacks und Plattformen kompatibel sind.\n• Legacy System Integration: Spezifikationen für die Integration mit bestehenden Legacy-Systemen und Core-Banking-Plattformen.\n• Real-Time Data Access: Implementation von Echtzeit-Datenzugriff-Capabilities für zeitkritische Finanzdienstleistungen.\n• Scalable Architecture Design: Aufbau skalierbarer Architekturen, die hohe Transaktionsvolumen und gleichzeitige Zugriffe bewältigen können.\n\n🔍 Monitoring und Compliance-Integration:\n• API Monitoring und Analytics: Implementation umfassender Monitoring-Systeme zur Überwachung von API-Performance, Sicherheit und Compliance.\n• Automated Compliance Checking: Aufbau automatisierter Systeme zur kontinuierlichen Überprüfung der Einhaltung technischer Standards.\n• Audit Trail Generation: Automatische Generierung detaillierter Audit-Trails für alle API-Transaktionen und Datenfreigabe-Aktivitäten.\n• Error Handling und Recovery: Implementation robuster Fehlerbehandlungs- und Recovery-Mechanismen zur Gewährleistung der Systemstabilität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie entwickelt ADVISORI maßgeschneiderte Governance-Frameworks für die FIDA Verordnung Compliance?',
        answer: "ADVISORI entwickelt umfassende Governance-Frameworks, die spezifisch auf die komplexen Anforderungen der FIDA Verordnung zugeschnitten sind und eine nachhaltige, effiziente Compliance-Organisation gewährleisten. Unser Ansatz integriert regulatorische Anforderungen mit operativer Exzellenz und strategischer Geschäftsausrichtung.\n\n🏛️ Strategische Governance-Architektur:\n• FIDA-spezifische Organisationsstrukturen: Entwicklung dedizierter Governance-Strukturen mit klaren Verantwortlichkeiten für FIDA-Compliance, einschließlich spezialisierter Rollen und Entscheidungsgremien.\n• Cross-Functional Integration: Integration von FIDA-Governance in bestehende Unternehmensstrukturen mit klaren Schnittstellen zu IT, Risk Management, Legal und Business Units.\n• Escalation und Decision-Making Frameworks: Aufbau strukturierter Eskalations- und Entscheidungsprozesse für FIDA-relevante Themen und Compliance-Herausforderungen.\n• Board-Level Oversight: Etablierung von Board-Level-Überwachung und Berichterstattung für FIDA-Compliance und strategische Ausrichtung.\n\n📋 Operative Governance-Prozesse:\n• Comprehensive Policy Framework: Entwicklung umfassender Richtlinien und Verfahrensanweisungen, die alle Aspekte der FIDA-Compliance abdecken.\n• Risk Assessment und Management: Integration von FIDA-spezifischen Risikobewertungen in bestehende Risikomanagement-Frameworks.\n• Change Management Processes: Aufbau strukturierter Change-Management-Prozesse für FIDA-relevante Systemänderungen und Prozessanpassungen.\n• Vendor und Third-Party Management: Entwicklung spezialisierter Governance-Prozesse für das Management von FIDA-relevanten Drittanbietern und Technologiepartnern.\n\n🔄 Kontinuierliche Überwachung und Optimierung:\n• Performance Monitoring Frameworks: Aufbau umfassender KPI-Systeme zur Überwachung der FIDA-Compliance-Performance und Effektivität.\n• Regular Assessment und Review: Etablierung regelmäßiger Bewertungs- und Review-Zyklen zur kontinuierlichen Verbesserung der Governance-Strukturen.\n• Regulatory Change Management: Entwicklung proaktiver Prozesse zur Identifikation und Integration regulatorischer Änderungen und Updates.\n• Continuous Improvement Culture: Förderung einer Kultur der kontinuierlichen Verbesserung mit Fokus auf FIDA-Compliance-Exzellenz.\n\n🎯 Strategische Ausrichtung und Business Integration:\n• Business Strategy Alignment: Integration der FIDA-Governance in die übergeordnete Geschäftsstrategie und strategische Planung.\n• Innovation und Compliance Balance: Entwicklung von Governance-Mechanismen, die Innovation fördern und gleichzeitig Compliance gewährleisten.\n• Stakeholder Engagement: Aufbau strukturierter Stakeholder-Engagement-Prozesse für interne und externe FIDA-relevante Stakeholder.\n• Value Creation Focus: Ausrichtung der Governance-Strukturen auf Wertschöpfung und Geschäftserfolg durch effektive FIDA-Compliance."
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
