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
    console.log('Updating Software Compliance page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'software-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "software-compliance" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie kann ADVISORI helfen, komplexe Software-Audits von Herstellern wie Microsoft, Oracle oder SAP erfolgreich zu meistern und Strafzahlungen zu vermeiden?",
        answer: "Hersteller-Audits gehören zu den gefürchtetsten Ereignissen im IT-Management, da sie oft unangekündigt kommen und zu erheblichen Nachzahlungen führen können. Major Vendors wie Microsoft, Oracle, IBM und SAP führen zunehmend aggressive Audit-Strategien durch, die ohne professionelle Vorbereitung zu existenzbedrohenden finanziellen Belastungen werden können. ADVISORI verwandelt diese Bedrohung in eine kontrollierbare Geschäftssituation durch strategische Vorbereitung und professionelles Audit-Management.\n\n⚠️ Typische Audit-Fallen und Risiken:\n• License Metric Complexity: Verschiedene Hersteller nutzen unterschiedliche Berechnungsmodelle (Named User, Processor, Core-basiert), die ohne Expertise zu kostspieligen Fehlinterpretationen führen.\n• Indirect Access Liabilities: Besonders bei SAP können indirekte Zugriffe über APIs oder Datenreplikation zu unerwarteten Lizenzforderungen in Millionenhöhe führen.\n• Cloud Migration Gaps: Unvollständige Lizenz-Migrationen bei Cloud-Transitionen schaffen Compliance-Lücken, die bei Audits teuer werden.\n• Shadow IT Discovery: Audits decken häufig unbekannte Software-Installationen auf, für die nachträglich Lizenzen erworben werden müssen.\n\n🛡️ ADVISORI's Proactive Audit Defense Strategy:\n• Pre-Audit Health Checks: Regelmäßige interne Assessments identifizieren potenzielle Compliance-Gaps lange bevor externe Audits stattfinden, ermöglichen proaktive Remediation.\n• Strategic License Positioning: Optimierung der Lizenz-Struktur und -Dokumentation zur Minimierung von Audit-Exposure und Maximierung von Verhandlungsspielräumen.\n• Expert Audit Representation: Erfahrene Audit-Manager begleiten den gesamten Audit-Prozess, führen Verhandlungen und stellen sicher, dass nur berechtigte Forderungen anerkannt werden.\n• Documentation Excellence: Aufbau lückenloser Dokumentations-Frameworks, die Compliance nachweisen und Audit-Dauer sowie -Komplexität erheblich reduzieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Rolle spielt künstliche Intelligenz in ADVISORI's Software Compliance Lösungen und wie wird dadurch die Effizienz gesteigert?",
        answer: "Künstliche Intelligenz revolutioniert Software Compliance Management durch die Automatisierung komplexer Analyseprozesse, die traditionell enormen manuellen Aufwand erfordern. ADVISORI nutzt cutting-edge AI und Machine Learning Technologien, um Compliance-Prozesse zu transformieren und eine neue Dimension der Effizienz und Genauigkeit zu erreichen. Unsere KI-gestützten Lösungen verwandeln reaktive Compliance-Verwaltung in proaktive, intelligente Governance-Systeme.\n\n🤖 AI-Powered Compliance Innovation:\n• Intelligent Asset Discovery: Machine Learning Algorithmen analysieren Netzwerk-Traffic, Deployment-Patterns und System-Logs, um auch versteckte oder vergessene Software-Installationen zu identifizieren.\n• Predictive License Optimization: AI-Modelle analysieren historische Usage-Patterns und Business-Trends, um zukünftigen Lizenzbedarf vorherzusagen und Über- oder Unterlizenzierung zu vermeiden.\n• Automated Risk Scoring: Intelligente Algorithmen bewerten automatisch das Compliance-Risiko neuer Software-Komponenten basierend auf Lizenztyp, Vendor-Historie und Nutzungskontext.\n• Natural Language Processing: AI-basierte Analyse von Lizenzverträgen extrahiert automatisch kritische Compliance-Anforderungen und Risikofaktoren aus komplexen rechtlichen Dokumenten.\n\n⚡ Efficiency Multipliers durch AI Integration:\n• 24/7 Continuous Monitoring: AI-Systeme überwachen kontinuierlich alle Software-Assets ohne menschliche Intervention und erstellen automatisch Alerts bei Compliance-Abweichungen.\n• Automated Compliance Reporting: Intelligente Report-Generierung erstellt maßgeschneiderte Compliance-Dashboards für verschiedene Stakeholder-Gruppen von Technical Teams bis C-Level.\n• Smart Remediation Recommendations: AI analysiert Compliance-Gaps und schlägt automatisch die kosteneffizientesten Lösungsansätze vor, einschließlich License-Adjustments oder Alternative-Sourcing.\n• Behavioral Learning: Machine Learning Systeme lernen kontinuierlich von Organisationsmustern und passen Compliance-Policies automatisch an sich ändernde Business-Anforderungen an."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie stellt ADVISORI sicher, dass Software Compliance auch bei M&A-Transaktionen, Unternehmensaufspaltungen und komplexen Organisationsveränderungen gewährleistet bleibt?",
        answer: "Mergers & Acquisitions, Corporate Restructuring und Spin-offs gehören zu den komplexesten Herausforderungen im Software Compliance Management. Diese Ereignisse schaffen oft chaotische Lizenz-Situationen, rechtliche Unklarheiten und massive Compliance-Risiken. ADVISORI hat spezialisierte M&A Compliance Frameworks entwickelt, die auch bei den komplexesten Unternehmenstransaktionen rechtliche Sicherheit und operative Kontinuität gewährleisten.\n\n🔄 M&A Compliance Herausforderungen:\n• License Transferability: Nicht alle Software-Lizenzen sind übertragbar oder können bei Unternehmenszusammenschlüssen konsolidiert werden, was zu Dual-Licensing und erhöhten Kosten führt.\n• Due Diligence Gaps: Unvollständige Compliance-Assessments während der Due Diligence Phase können zu versteckten Liabilities und Post-Merger Überraschungen führen.\n• Integration Complexity: Verschiedene Lizenz-Management-Systeme, Vendor-Beziehungen und Compliance-Policies müssen harmonisiert werden ohne Geschäftsunterbrechungen.\n• Regulatory Variations: Unterschiedliche regulatorische Anforderungen in verschiedenen Jurisdiktionen komplizieren globale M&A-Transaktionen erheblich.\n\n🎯 ADVISORI's M&A Compliance Excellence:\n• Pre-Transaction Risk Assessment: Comprehensive Software-Audits aller beteiligten Entitäten identifizieren Compliance-Risiken und Kostenfaktoren bereits in der Due Diligence Phase.\n• License Consolidation Strategy: Strategische Planung der Lizenz-Integration maximiert Synergien und eliminiert redundante Lizenzen ohne Compliance-Verstöße.\n• Transition Management: Detaillierte Roadmaps für die schrittweise Integration von Software-Portfolios minimieren Disruption und stellen kontinuierliche Compliance sicher.\n• Vendor Relationship Optimization: Neuverhandlung von Vendor-Verträgen post-Merger nutzt erhöhte Buying Power für bessere Konditionen und vereinfachte Compliance-Strukturen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie hilft ADVISORI dabei, Software Compliance in hochregulierten Branchen wie Finanzdienstleistungen, Healthcare oder Pharma zu implementieren, wo zusätzliche Sicherheits- und Validierungsanforderungen gelten?",
        answer: "Hochregulierte Industrien stehen vor einzigartigen Software Compliance Herausforderungen, die weit über Standard-Lizenzmanagement hinausgehen. Branchen wie Banking, Healthcare, Pharma und Aerospace unterliegen strengen regulatorischen Frameworks, die zusätzliche Validierung, Dokumentation und Sicherheitsmaßnahmen erfordern. ADVISORI hat spezialisierte Compliance-Ansätze entwickelt, die branchenspezifische Anforderungen mit operativer Effizienz verbinden.\n\n🏥 Branchenspezifische Compliance-Komplexität:\n• Regulatory Validation: Software in FDA-regulierten Umgebungen muss extensive Validierungsprozesse durchlaufen (21 CFR Part 11), die Standard-Deployment-Praktiken erheblich komplizieren.\n• Financial Services Oversight: SOX, PCI-DSS und Basel III Anforderungen stellen strenge Kontrollen an Software-Änderungen und Third-Party-Komponenten.\n• Data Sovereignty: GDPR, HIPAA und branchenspezifische Datenschutzregulierungen beeinflussen Software-Auswahl und -Konfiguration erheblich.\n• Audit Trail Requirements: Lückenlose Dokumentation aller Software-Änderungen und Compliance-Entscheidungen ist für regulatorische Audits essentiell.\n\n🔒 ADVISORI's Regulatory-Grade Compliance Framework:\n• Validated System Integration: Implementierung von Software Compliance Lösungen, die selbst den strengsten Validierungsanforderungen entsprechen und regulatorische Audits bestehen.\n• Risk-Based Classification: Automatische Kategorisierung von Software-Komponenten nach regulatorischem Risiko ermöglicht angemessene Kontrolle ohne Überregulierung unkritischer Systeme.\n• Compliance-by-Design: Integration regulatorischer Anforderungen direkt in Software-Entwicklungs- und Deployment-Prozesse verhindert Compliance-Gaps von Anfang an.\n• Regulatory Change Management: Proaktive Überwachung regulatorischer Entwicklungen und automatische Anpassung von Compliance-Policies stellt kontinuierliche Regulatory Adherence sicher."
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
