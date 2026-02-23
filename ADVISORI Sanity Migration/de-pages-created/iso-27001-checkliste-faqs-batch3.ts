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
    console.log('Updating ISO 27001 Checkliste page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-checkliste' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-checkliste" not found')
    }
    
    // Create new FAQs for ISO 27001 checkliste audit preparation and monitoring
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie bereiten ISO 27001 Checklisten optimal auf Zertifizierungsaudits vor?',
        answer: "ISO 27001 Checklisten sind essentiell für eine erfolgreiche Audit-Vorbereitung, da sie systematische Readiness-Validierung und vollständige Evidence-Sammlung gewährleisten. Eine strukturierte Audit-Vorbereitung minimiert Zertifizierungsrisiken und maximiert die Erfolgswahrscheinlichkeit durch methodische Herangehensweise.\n\n🎯 Pre-Audit Readiness Assessment:\n• Vollständige Compliance-Validierung aller ISO 27001 Anforderungen durch strukturierte Checklisten\n• Systematische Evidence-Sammlung mit kategorisierter Dokumentation für alle Kontrollmaßnahmen\n• Mock-Audit-Durchführung mit internen Teams zur Simulation realer Audit-Bedingungen\n• Gap-Remediation-Tracking für identifizierte Schwachstellen und Verbesserungsmaßnahmen\n• Stakeholder-Briefings und Interview-Vorbereitung für konsistente Kommunikation\n\n📋 Strukturierte Evidence-Organisation:\n• Audit-Trail-Dokumentation mit vollständiger Nachverfolgung aller Implementierungsschritte\n• Evidence-Mapping zu spezifischen ISO 27001 Kontrollen für effiziente Auditor-Navigation\n• Digitale Evidence-Repositories mit kategorisierter Ablage und Suchfunktionalitäten\n• Backup-Evidence-Sammlung für kritische Nachweise und Redundanz-Sicherung\n• Real-time Evidence-Updates für aktuelle und relevante Audit-Dokumentation\n\n🔍 Auditor-Interview-Vorbereitung:\n• Rollenspezifische Interview-Checklisten mit typischen Auditor-Fragestellungen\n• Antwort-Leitfäden für konsistente und standardkonforme Kommunikation\n• Eskalations-Prozeduren für komplexe oder unerwartete Audit-Situationen\n• Cross-Training verschiedener Stakeholder für flexible Audit-Unterstützung\n• Kommunikations-Protokolle für professionelle und effektive Auditor-Interaktion"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Monitoring-Funktionen sollten in ISO 27001 Checklisten integriert sein?',
        answer: "Effektive ISO 27001 Checklisten müssen umfassende Monitoring-Funktionen integrieren, die kontinuierliche Compliance-Überwachung und proaktive Risikosteuerung ermöglichen. Monitoring-Integration gewährleistet nachhaltige ISMS-Wirksamkeit und frühzeitige Identifikation von Compliance-Abweichungen.\n\n📊 KPI-basiertes Performance-Monitoring:\n• Automatisierte Compliance-Metriken mit Echtzeit-Dashboards für kontinuierliche Überwachung\n• Trend-Analysen für proaktive Identifikation von Performance-Verschlechterungen\n• Benchmark-Vergleiche mit Branchenstandards und Best-Practice-Referenzen\n• Alert-Systeme für kritische Compliance-Abweichungen und Eskalationsanforderungen\n• Management-Reporting mit aggregierten KPIs für strategische Entscheidungsfindung\n\n🔄 Kontinuierliche Compliance-Validierung:\n• Regelmäßige Compliance-Checks mit automatisierten Validierungsroutinen\n• Change-Impact-Assessment für Auswirkungen von Systemänderungen auf Compliance\n• Periodic Review-Zyklen mit strukturierten Assessment-Protokollen\n• Exception-Management für Compliance-Abweichungen und Korrekturmaßnahmen\n• Audit-Readiness-Monitoring für kontinuierliche Zertifizierungsbereitschaft\n\n🚨 Incident-Response-Integration:\n• Security-Incident-Tracking mit direkter Integration in Compliance-Monitoring\n• Root-Cause-Analyse-Workflows für systematische Problemlösung\n• Lessons-Learned-Integration für kontinuierliche Verbesserung\n• Corrective-Action-Tracking mit Wirksamkeits-Validierung\n• Preventive-Measure-Implementation für proaktive Risikominimierung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie unterstützen Checklisten die kontinuierliche Verbesserung des ISMS?',
        answer: "ISO 27001 Checklisten sind fundamentale Instrumente für kontinuierliche ISMS-Verbesserung, da sie systematische Performance-Bewertung und strukturierte Optimierungszyklen ermöglichen. Kontinuierliche Verbesserung erfordert methodische Herangehensweise mit datengetriebenen Insights und evidenzbasierten Entscheidungen.\n\n🔄 Systematic Improvement Cycles:\n• PDCA-Zyklen-Integration mit strukturierten Plan-Do-Check-Act-Checklisten\n• Performance-Gap-Analyse für Identifikation von Verbesserungspotenzialen\n• Maturity-Assessment-Tracking für systematische ISMS-Weiterentwicklung\n• Innovation-Integration für Adoption neuer Technologien und Methoden\n• Best-Practice-Benchmarking für kontinuierliche Standard-Erhöhung\n\n📈 Data-Driven Optimization:\n• Metriken-basierte Verbesserungsidentifikation durch quantitative Analyse\n• Trend-Monitoring für frühzeitige Erkennung von Optimierungsbedarfen\n• ROI-Tracking für Investitionsentscheidungen in ISMS-Verbesserungen\n• Cost-Benefit-Analysen für priorisierte Verbesserungsmaßnahmen\n• Effectiveness-Measurement für Validierung implementierter Verbesserungen\n\n🎯 Strategic Enhancement Planning:\n• Roadmap-Development für langfristige ISMS-Evolution\n• Stakeholder-Feedback-Integration für benutzerorientierte Verbesserungen\n• Technology-Adoption-Planning für moderne Sicherheitslösungen\n• Skill-Development-Tracking für Kompetenz-Enhancement\n• Culture-Change-Monitoring für nachhaltige Sicherheitsbewusstsein-Steigerung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche Integration mit anderen Compliance-Frameworks ermöglichen ISO 27001 Checklisten?',
        answer: "Moderne ISO 27001 Checklisten ermöglichen nahtlose Integration mit anderen Compliance-Frameworks durch Cross-Standard-Mapping und harmonisierte Kontrollstrukturen. Multi-Framework-Integration maximiert Effizienz und minimiert Redundanzen bei gleichzeitiger Sicherstellung vollständiger Compliance-Abdeckung.\n\n🌐 Multi-Standard Harmonization:\n• DORA-ISO 27001-Mapping für integrierte Finanzdienstleister-Compliance\n• NIS2-Integration für kritische Infrastrukturen und wesentliche Dienste\n• GDPR-Alignment für Datenschutz-konforme Informationssicherheit\n• SOC2-Mapping für Service-Organisation-Compliance\n• NIST-Framework-Integration für umfassende Cybersecurity-Governance\n\n🔗 Synergistic Control Implementation:\n• Shared-Control-Identification für effiziente Ressourcennutzung\n• Unified-Evidence-Collection für mehrere Standards gleichzeitig\n• Integrated-Audit-Preparation für kombinierte Zertifizierungsansätze\n• Cross-Framework-Risk-Assessment für ganzheitliche Risikobewertung\n• Harmonized-Documentation für konsistente Compliance-Nachweise\n\n📊 Unified Governance Structure:\n• Integrated-Compliance-Dashboards für übergreifende Monitoring\n• Consolidated-Reporting für Management und Stakeholder\n• Unified-Training-Programs für Multi-Standard-Awareness\n• Cross-Framework-Incident-Response für koordinierte Reaktionen\n• Integrated-Continuous-Improvement für systematische Enhancement"
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
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
