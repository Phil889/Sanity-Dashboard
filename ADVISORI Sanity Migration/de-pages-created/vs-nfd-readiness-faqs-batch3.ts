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
    console.log('Updating VS-NFD Readiness page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'vs-nfd-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "vs-nfd-readiness" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie adressiert ADVISORI die Integration von VS-NFD Anforderungen in bestehende IT-Landschaften und Legacy-Systeme ohne operative Unterbrechungen?",
        answer: "Die Integration von VS-NFD Compliance in bestehende IT-Infrastrukturen erfordert einen strategischen Ansatz, der Modernisierung mit Geschäftskontinuität verbindet. ADVISORI entwickelt maßgeschneiderte Integrationsstrategien, die Legacy-Systeme schrittweise transformieren und dabei kritische Geschäftsprozesse schützen.\n\n🔧 Strategische IT-Integration für VS-NFD Compliance:\n• Legacy System Assessment: Comprehensive Bewertung bestehender IT-Landschaften zur Identifikation von Modernisierungsbedarfen und Integration-Möglichkeiten.\n• Hybrid Architecture Design: Entwicklung flexibler Hybrid-Architekturen, die Legacy-Systeme mit modernen Compliance-Plattformen nahtlos verbinden.\n• API-Layer Development: Aufbau intelligenter API-Schichten, die Legacy-Systeme für moderne Compliance-Monitoring und Reporting-Anforderungen zugänglich machen.\n• Phased Migration Strategy: Schrittweise Modernisierung kritischer Systeme mit minimalen Unterbrechungen und kontinuierlicher Validierung.\n\n🚀 ADVISORIs IT-Transformations-Framework:\n• Zero-Downtime Implementation: Entwicklung von Parallel-Run-Strategien und Blue-Green-Deployments zur Sicherstellung kontinuierlicher Verfügbarkeit während der Transformation.\n• Data Integration Excellence: Implementierung robuster Datenintegrations-Lösungen, die konsistente, qualitativ hochwertige Datenflüsse zwischen Legacy- und modernen Systemen gewährleisten.\n• Security-First Approach: Integration fortgeschrittener Cybersecurity-Maßnahmen in alle Modernisierungsschritte zur Sicherstellung höchster Sicherheitsstandards.\n• Performance Optimization: Kontinuierliche Optimierung der IT-Performance während der Integration zur Sicherstellung verbesserter System-Reaktionszeiten und Effizienz."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Bedeutung hat Vendor Risk Management im Kontext von VS-NFD und wie entwickelt ADVISORI robuste Third-Party-Risk-Frameworks?",
        answer: "Vendor Risk Management ist eine kritische Komponente der VS-NFD Compliance, da systemrelevante Dienstleister oft komplexe Ökosysteme von Third-Party-Partnern nutzen. ADVISORI entwickelt comprehensive Vendor Risk Frameworks, die End-to-End Resilienz sicherstellen und regulatorische Anforderungen erfüllen.\n\n🤝 Third-Party Risk Excellence für VS-NFD:\n• Vendor Classification: Strategische Kategorisierung von Vendors basierend auf Kritikalität, Systemrelevanz und potenziellen Auswirkungen auf Geschäftskontinuität.\n• Due Diligence Frameworks: Entwicklung rigoroser Due Diligence Prozesse, die technische, operative und regulatorische Compliance-Aspekte umfassend bewerten.\n• Continuous Monitoring: Implementierung kontinuierlicher Vendor Performance Monitoring-Systeme mit Real-Time Risk Alerts und Eskalations-Mechanismen.\n• Contract Governance: Aufbau robuster Contract Management Frameworks mit klaren SLAs, Compliance-Anforderungen und Ausstiegs-Strategien.\n\n🛡️ ADVISORIs Vendor Risk Management Strategy:\n• Risk-Based Vendor Segmentation: Entwicklung differenzierter Risk Management Ansätze basierend auf Vendor-Kategorien und deren Einfluss auf kritische Geschäftsprozesse.\n• Automated Risk Assessment: Implementierung KI-gestützter Risk Assessment Tools, die kontinuierliche Vendor-Bewertungen und predictive Risk Analytics ermöglichen.\n• Incident Response Integration: Integration von Vendor Risk Management in Incident Response Pläne zur Sicherstellung koordinierter Reaktionen bei Third-Party-Störungen.\n• Regulatory Alignment: Sicherstellung, dass alle Vendor Risk Frameworks vollständig mit VS-NFD Anforderungen und anderen relevanten Regulierungen aligned sind."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie unterstützt ADVISORI bei der Entwicklung von Crisis Communication-Strategien und Stakeholder Management während VS-NFD-relevanten Incidents?",
        answer: "Effektive Crisis Communication ist entscheidend für die Aufrechterhaltung von Stakeholder-Vertrauen und regulatorischer Compliance während kritischer Incidents. ADVISORI entwickelt comprehensive Communication Frameworks, die schnelle, transparente und strategisch ausgerichtete Krisenkommunikation ermöglichen.\n\n📢 Strategic Crisis Communication für VS-NFD:\n• Multi-Stakeholder Communication Matrix: Entwicklung differenzierter Kommunikationsstrategien für verschiedene Stakeholder-Gruppen (Regulatoren, Kunden, Partner, Medien, Mitarbeiter).\n• Real-Time Communication Protocols: Implementierung schneller Entscheidungs- und Kommunikationsprozesse, die binnen Minuten aktiviert werden können.\n• Message Consistency Framework: Aufbau konsistenter Messaging-Frameworks, die sicherstellen, dass alle Kommunikationskanäle einheitliche und akkurate Informationen vermitteln.\n• Regulatory Reporting Integration: Nahtlose Integration von Crisis Communication mit regulatorischen Meldepflichten und Compliance-Anforderungen.\n\n🎯 ADVISORIs Crisis Management Excellence:\n• Executive Crisis Leadership: Training und Vorbereitung von Executive Teams für effektive Krisenkommunikation und Stakeholder Management.\n• Digital Communication Platforms: Implementierung moderner Digital Communication Tools, die Multi-Channel-Kommunikation und Real-Time Updates ermöglichen.\n• Reputation Protection Strategy: Entwicklung proaktiver Reputationsschutz-Strategien, die langfristige Stakeholder-Beziehungen während und nach Krisen schützen.\n• Lessons Learned Integration: Strukturierte Post-Incident-Analysen zur kontinuierlichen Verbesserung von Crisis Communication Capabilities und Stakeholder Management."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche Rolle spielt Data Governance im VS-NFD Kontext und wie etabliert ADVISORI robuste Data Quality und Data Lineage Frameworks?",
        answer: "Data Governance ist fundamental für VS-NFD Compliance, da qualitativ hochwertige, nachverfolgbare Daten die Basis für effektives Risk Management und regulatorisches Reporting bilden. ADVISORI entwickelt enterprise-grade Data Governance Frameworks, die Datenqualität, Transparenz und Compliance nachhaltig sicherstellen.\n\n📊 Strategic Data Governance für VS-NFD Excellence:\n• Data Quality Management: Implementierung umfassender Data Quality Frameworks mit automatisierten Validierungen, Cleansing-Prozessen und Qualitäts-KPIs.\n• Data Lineage Tracking: Aufbau vollständiger Data Lineage Dokumentation, die End-to-End Nachverfolgbarkeit von Datenflüssen und Transformationen ermöglicht.\n• Master Data Management: Etablierung zentraler Master Data Management Systeme zur Sicherstellung konsistenter, authoritative Datenquellen across allen Systemen.\n• Data Privacy Compliance: Integration von Datenschutz-Anforderungen und Privacy-by-Design Prinzipien in alle Data Governance Frameworks.\n\n🔍 ADVISORIs Data Excellence Strategy:\n• Automated Data Monitoring: Implementierung intelligenter Data Monitoring Systeme, die kontinuierliche Datenqualitäts-Überwachung und proaktive Issue Detection ermöglichen.\n• Data Governance Organization: Aufbau spezialisierter Data Governance Teams mit klaren Rollen, Verantwortlichkeiten und Entscheidungs-Authorities.\n• Analytics-Driven Insights: Nutzung fortgeschrittener Data Analytics zur Identifikation von Datenqualitäts-Trends und Optimierungspotenzialen.\n• Regulatory Data Alignment: Sicherstellung, dass alle Data Governance Frameworks optimal auf VS-NFD Reporting-Anforderungen und andere regulatorische Daten-Requirements ausgerichtet sind."
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
