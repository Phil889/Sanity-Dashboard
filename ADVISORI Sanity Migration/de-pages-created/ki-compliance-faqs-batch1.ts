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
    console.log('Updating KI-Compliance page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-compliance" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Wie navigiert ADVISORI durch die komplexe EU AI Act-Landschaft und welche strategischen Vorteile bietet proaktive KI-Compliance für Unternehmen?',
        answer: "Der EU AI Act stellt eine der umfassendsten KI-Regulierungen weltweit dar und erfordert einen strategischen, vorausschauenden Compliance-Ansatz. ADVISORI versteht KI-Compliance nicht als regulatorische Belastung, sondern als strategischen Enabler für vertrauensvolle Innovation und nachhaltigen Wettbewerbsvorteile. Unser Ansatz transformiert Compliance-Anforderungen in Geschäftschancen und positioniert Ihr Unternehmen als verantwortungsvoller KI-Pionier.\n\n🎯 Strategische EU AI Act-Navigation:\n• Risikokategorisierung und Compliance-Mapping: Systematische Bewertung Ihrer KI-Systeme nach EU AI Act-Risikoklassen mit präziser Zuordnung zu Minimal-, Limited-, High-Risk- oder Unacceptable-Risk-Kategorien.\n• Proaktive Governance-Integration: Entwicklung von Compliance-Frameworks, die über Mindestanforderungen hinausgehen und als Best-Practice-Standard für die gesamte Branche fungieren.\n• Dokumentations- und Audit-Exzellenz: Etablierung umfassender Dokumentationssysteme, die nicht nur Compliance gewährleisten, sondern auch kontinuierliche Verbesserung und Innovation ermöglichen.\n• Stakeholder-Vertrauen und Marktpositionierung: Nutzung von Compliance-Exzellenz als Differenzierungsmerkmal für Kunden, Investoren und Geschäftspartner.\n\n🔍 ADVISORI's Compliance-Excellence-Framework:\n• Kontinuierliche Regulierungs-Überwachung: Proaktive Verfolgung regulatorischer Entwicklungen und frühzeitige Anpassung Ihrer KI-Systeme an kommende Anforderungen.\n• Branchenspezifische Expertise: Tiefes Verständnis für sektorspezifische Compliance-Anforderungen in Finanzdienstleistungen, Gesundheitswesen, Automobilindustrie und anderen regulierten Branchen.\n• Internationale Harmonisierung: Koordination zwischen EU AI Act, nationalen Gesetzen und internationalen Standards für global agierende Unternehmen.\n• Innovation-Compliance-Balance: Entwicklung von Ansätzen, die maximale Innovation bei vollständiger Compliance-Konformität ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche konkreten Schritte unternimmt ADVISORI zur Implementierung von Algorithmic Accountability und wie wird Transparenz in KI-Entscheidungsprozessen gewährleistet?',
        answer: "Algorithmic Accountability ist das Fundament vertrauensvoller KI-Systeme und ein zentraler Baustein moderner KI-Governance. ADVISORI entwickelt umfassende Transparenz- und Verantwortlichkeits-Frameworks, die nicht nur regulatorische Anforderungen erfüllen, sondern auch das Vertrauen von Stakeholdern stärken und die Qualität von KI-Entscheidungen kontinuierlich verbessern. Unser Ansatz macht KI-Systeme nachvollziehbar, überprüfbar und kontinuierlich optimierbar.\n\n🔍 Umfassende Algorithmic Accountability-Implementierung:\n• Explainable AI-Integration: Entwicklung von KI-Systemen mit eingebauter Erklärbarkeit, die komplexe Algorithmus-Entscheidungen in verständliche, nachvollziehbare Begründungen übersetzen.\n• Decision Audit Trails: Etablierung lückenloser Dokumentationssysteme, die jeden Schritt des KI-Entscheidungsprozesses nachverfolgbar machen und Audit-Bereitschaft gewährleisten.\n• Bias Detection und Mitigation: Implementierung kontinuierlicher Überwachungssysteme zur Erkennung und Korrektur von Algorithmus-Verzerrungen und Diskriminierung.\n• Human-in-the-Loop-Frameworks: Design von KI-Systemen mit angemessener menschlicher Aufsicht und Interventionsmöglichkeiten für kritische Entscheidungen.\n\n📊 Transparenz-Excellence durch ADVISORI:\n• Stakeholder-spezifische Kommunikation: Entwicklung differenzierter Transparenz-Ansätze für verschiedene Zielgruppen, von technischen Teams bis hin zu Endnutzern und Regulierungsbehörden.\n• Real-time Monitoring Dashboards: Implementierung von Überwachungssystemen, die kontinuierliche Einblicke in KI-Performance, Fairness und Compliance-Status bieten.\n• Impact Assessment Frameworks: Systematische Bewertung der gesellschaftlichen und geschäftlichen Auswirkungen von KI-Entscheidungen mit proaktiven Anpassungsmaßnahmen.\n• Continuous Improvement Loops: Etablierung von Feedback-Mechanismen, die Transparenz-Erkenntnisse in kontinuierliche Systemverbesserungen überführen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie integriert ADVISORI DSGVO-Anforderungen in KI-Compliance-Frameworks und welche spezifischen Herausforderungen entstehen bei der Kombination von Datenschutz und KI-Innovation?',
        answer: "Die Integration von DSGVO-Anforderungen in KI-Systeme stellt eine der komplexesten Compliance-Herausforderungen dar, da sie die Spannung zwischen Innovation und Datenschutz auflösen muss. ADVISORI entwickelt integrierte Compliance-Frameworks, die DSGVO-Konformität nicht als Innovationshemmnis, sondern als Qualitätsmerkmal und Vertrauensgarantie positionieren. Unser Ansatz ermöglicht maximale KI-Innovation bei vollständigem Datenschutz.\n\n🛡️ Integrierte DSGVO-KI-Compliance-Architektur:\n• Privacy-by-Design für KI-Systeme: Entwicklung von KI-Architekturen, die Datenschutzprinzipien von Grund auf integrieren und nicht nachträglich aufsetzen.\n• Datenminimierung und Purpose Limitation: Implementierung von KI-Systemen, die nur notwendige Daten verarbeiten und strikt zweckgebunden operieren, ohne Innovationspotenzial zu beschränken.\n• Consent Management für KI: Entwicklung intelligenter Einverständnis-Systeme, die dynamische, granulare Zustimmung für verschiedene KI-Anwendungen ermöglichen.\n• Right to Explanation: Integration von Erklärbarkeits-Mechanismen, die DSGVO-Transparenzanforderungen erfüllen und gleichzeitig KI-Entscheidungen nachvollziehbar machen.\n\n🔄 Herausforderungs-Management und Lösungsansätze:\n• Anonymisierung vs. KI-Performance: Entwicklung fortschrittlicher Anonymisierungs- und Pseudonymisierungstechniken, die Datenschutz gewährleisten ohne KI-Modell-Qualität zu beeinträchtigen.\n• Cross-Border Data Flows: Navigation komplexer internationaler Datentransfer-Regelungen für global agierende KI-Systeme mit lokaler Compliance-Konformität.\n• Automated Decision Making: Implementierung von KI-Systemen, die DSGVO-Anforderungen für automatisierte Entscheidungsfindung erfüllen und gleichzeitig Geschäftswert generieren.\n• Data Subject Rights: Entwicklung von Systemen, die Betroffenenrechte wie Löschung, Berichtigung und Datenportabilität auch in komplexen KI-Umgebungen gewährleisten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Rolle spielt kontinuierliches Monitoring in ADVISORI\'s KI-Compliance-Strategie und wie wird sichergestellt, dass KI-Systeme auch nach der Implementierung compliant bleiben?',
        answer: "Kontinuierliches Monitoring ist das Herzstück nachhaltiger KI-Compliance, da KI-Systeme dynamisch sind und sich sowohl ihre Performance als auch regulatorische Anforderungen kontinuierlich entwickeln. ADVISORI etabliert proaktive Überwachungs-Ökosysteme, die nicht nur Compliance-Drift verhindern, sondern auch kontinuierliche Verbesserung und Optimierung ermöglichen. Unser Ansatz verwandelt Monitoring von einer reaktiven Pflicht in einen strategischen Wettbewerbsvorteil.\n\n📊 Comprehensive Continuous Monitoring Framework:\n• Real-time Compliance Dashboards: Implementierung intelligenter Überwachungssysteme, die kontinuierlich KI-Performance, Bias-Indikatoren, Datenschutz-Metriken und Compliance-Status in Echtzeit verfolgen.\n• Automated Anomaly Detection: Entwicklung von KI-gestützten Monitoring-Systemen, die Abweichungen von Compliance-Standards automatisch erkennen und Alarm-Mechanismen auslösen.\n• Predictive Compliance Analytics: Nutzung fortschrittlicher Analytik zur Vorhersage potenzieller Compliance-Risiken bevor sie zu Problemen werden.\n• Multi-dimensional Risk Assessment: Kontinuierliche Bewertung von Compliance-Risiken aus technischer, rechtlicher, ethischer und geschäftlicher Perspektive.\n\n🔄 Proaktive Compliance-Maintenance-Strategien:\n• Automated Compliance Updates: Implementierung von Systemen, die regulatorische Änderungen automatisch in KI-Compliance-Frameworks integrieren und notwendige Anpassungen vorschlagen.\n• Continuous Audit Readiness: Etablierung von Dokumentations- und Reporting-Systemen, die jederzeit audit-bereit sind und regulatorische Anfragen effizient beantworten können.\n• Stakeholder Feedback Loops: Integration von Feedback-Mechanismen von Nutzern, Regulierungsbehörden und anderen Stakeholdern in kontinuierliche Compliance-Verbesserung.\n• Performance-Compliance Optimization: Entwicklung von Ansätzen, die Compliance-Anforderungen mit KI-Performance-Optimierung harmonisieren und Win-Win-Situationen schaffen."
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
