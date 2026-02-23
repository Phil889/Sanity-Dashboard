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
    console.log('Updating API Produktentwicklung page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'api-produktentwicklung' })
    
    if (!existingDoc) {
      throw new Error('Document "api-produktentwicklung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist strategische API Produktentwicklung mehr als nur technische Implementierung und wie adressiert ADVISORI dies ganzheitlich?',
        answer: "API Produktentwicklung geht weit über die reine technische Bereitstellung von Schnittstellen hinaus und erfordert eine fundamentale Transformation der Art, wie Unternehmen ihre Datenassets als strategische Produkte verstehen, entwickeln und vermarkten. Für moderne Unternehmen ist es entscheidend, APIs nicht als technische Hilfsmittel zu betrachten, sondern als eigenständige Geschäftsprodukte, die messbaren Wert für interne und externe Stakeholder generieren. ADVISORI versteht diese Komplexität und bietet einen umfassenden Ansatz, der Produktstrategie, Developer Experience, Compliance und Geschäftswert in Einklang bringt.\n\n🎯 Strategische Dimensionen der API Produktentwicklung:\n• Produktdenken: Transformation von APIs von technischen Schnittstellen zu strategischen Produkten mit klarem Wertversprechen, Zielgruppen und Geschäftsmodellen.\n• Marktorientierung: Entwicklung von APIs basierend auf Marktbedürfnissen und Developer-Anforderungen, nicht nur auf internen technischen Spezifikationen.\n• Ökosystem-Aufbau: Schaffung nachhaltiger API-Ökosysteme, die Partnerschaften fördern und neue Geschäftsmöglichkeiten eröffnen.\n• Compliance-Excellence: Sicherstellung regulatorischer Konformität, insbesondere im Kontext des EU AI Act und Datenschutzbestimmungen.\n\n🛡️ Der ADVISORI-Ansatz für strategische API-Transformation:\n• Ganzheitliche Produktbewertung: Wir analysieren nicht nur technische API-Spezifikationen, sondern auch Marktpotenzial, Developer Experience, Compliance-Anforderungen und strategische Positionierung.\n• EU AI Act konforme Governance: Unsere Expertise in KI-Regulierung gewährleistet, dass alle API-Produkte den aktuellen und zukünftigen regulatorischen Anforderungen entsprechen.\n• Developer-zentrierte Entwicklung: Fokus auf erstklassige Developer Experience durch intuitive API-Designs, umfassende Dokumentation und effektive Support-Strukturen.\n• Skalierbare Architektur: Aufbau zukunftssicherer API-Plattformen, die mit Ihrem Geschäftswachstum und sich ändernden Marktanforderungen mitwachsen können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie quantifiziert ADVISORI den Geschäftswert von API-Produkten und welche messbaren Ergebnisse können Unternehmen erwarten?',
        answer: "Die Quantifizierung des Geschäftswerts von API-Produkten erfordert eine mehrdimensionale Betrachtung, die sowohl direkte Umsatzgenerierung als auch indirekte Wertschöpfung durch verbesserte Developer Experience, Partnerschaften und operative Effizienz berücksichtigt. ADVISORI hat eine bewährte Methodik entwickelt, die es Unternehmen ermöglicht, den tatsächlichen ROI ihrer API-Investitionen präzise zu messen und kontinuierlich zu optimieren.\n\n📊 Direkte Geschäftswert-Komponenten:\n• Umsatzgenerierung: Direkte Einnahmen durch API-Nutzungsgebühren, Abonnement-Modelle und Premium-Features mit messbaren Umsatzströmen.\n• Kosteneinsparungen: Reduktion von Entwicklungskosten durch Wiederverwendbarkeit, Automatisierung manueller Prozesse und Optimierung der Systemintegration.\n• Marktexpansion: Erschließung neuer Kundensegmente und Geschäftsfelder durch innovative API-Produkte und Partnerschaftsmodelle.\n• Operational Excellence: Verbesserte interne Effizienz durch standardisierte Schnittstellen und reduzierte Integrationszeiten.\n\n💡 Indirekte Wertschöpfung und strategische Vorteile:\n• Developer Ecosystem Growth: Aufbau einer aktiven Developer-Community, die Innovation vorantreibt und neue Anwendungsfälle erschließt.\n• Wettbewerbsdifferenzierung: Aufbau einzigartiger Marktposition durch proprietäre API-Produkte und erstklassige Developer Experience.\n• Kundenbindung: Stärkung der Kundenbeziehungen durch nahtlose Integration und kontinuierliche Wertschöpfung über APIs.\n• Innovation Enablement: Beschleunigung der Produktentwicklung und Markteinführung durch flexible API-basierte Architekturen.\n\n🔍 ADVISORI's Wertmessungs-Framework:\n• Baseline-Etablierung: Detaillierte Erfassung der aktuellen API-Nutzung, Entwicklungskosten und Wertschöpfungspotenziale als Ausgangspunkt.\n• Multi-Horizon-Bewertung: Kurzfristige, mittelfristige und langfristige Wertbetrachtung mit unterschiedlichen Zeithorizonten und Erfolgskriterien.\n• Kontinuierliches Monitoring: Implementierung von Analytics-Dashboards zur laufenden Überwachung und Optimierung der API-Performance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie stellt ADVISORI sicher, dass API-Produkte den Anforderungen des EU AI Act entsprechen und gleichzeitig maximale Developer Experience bieten?',
        answer: "Die Compliance mit dem EU AI Act bei gleichzeitiger Optimierung der Developer Experience stellt eine der komplexesten Herausforderungen moderner API-Entwicklung dar. ADVISORI hat eine spezialisierte Methodik entwickelt, die regulatorische Konformität nicht als Hindernis, sondern als Qualitätsmerkmal und Vertrauensbildner positioniert. Unser Ansatz integriert Compliance-Anforderungen von Beginn an in das API-Design und schafft so Lösungen, die sowohl rechtssicher als auch entwicklerfreundlich sind.\n\n⚖️ EU AI Act Compliance Framework für APIs:\n• Risikokategorisierung: Systematische Bewertung aller KI-gestützten API-Komponenten nach den Risikoklassen des EU AI Act mit entsprechender Dokumentation und Governance.\n• Transparenz und Nachvollziehbarkeit: Implementierung von API-Dokumentation und Audit Trails, die sowohl regulatorische Anforderungen erfüllen als auch Developer bei der Compliance unterstützen.\n• Privacy-by-Design: Integration von Datenschutzprinzipien in die API-Architektur zur Sicherstellung DSGVO und AI Act Konformität ohne Beeinträchtigung der Usability.\n• Qualitätssicherung: Etablierung robuster API-Qualitätsstandards, die sowohl Compliance als auch Developer Experience gewährleisten.\n\n🚀 Developer Experience bei Compliance-Konformität:\n• Compliance als Feature: Positionierung EU AI Act konformer APIs als Premium-Features mit zusätzlichem Wert für Developer.\n• Transparente Dokumentation: Bereitstellung klarer, verständlicher Compliance-Informationen als Teil der API-Dokumentation.\n• Automatisierte Compliance-Checks: Integration von Compliance-Validierung in Developer Tools und SDKs für nahtlose Entwicklungserfahrung.\n• Support und Guidance: Proaktive Unterstützung von Developern bei der Implementierung compliance-konformer Lösungen.\n\n🔒 ADVISORI's Compliance-Excellence-Ansatz:\n• Proaktive Regulierungs-Integration: Kontinuierliche Beobachtung regulatorischer Entwicklungen und proaktive Anpassung der API-Designs.\n• Developer-zentrierte Compliance: Entwicklung von Compliance-Lösungen, die die Developer Experience verbessern statt behindern.\n• Integrierte Governance: Nahtlose Verbindung von API Governance mit regulatorischen Anforderungen und Developer-Bedürfnissen.\n• Zukunftssichere Architektur: Entwicklung flexibler API-Systeme, die sich an zukünftige regulatorische Änderungen anpassen lassen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Rolle spielt API Governance in ADVISORI API Produktentwicklung und wie wird nachhaltige Qualität und Sicherheit sichergestellt?',
        answer: "API Governance ist das Fundament erfolgreicher API Produktentwicklung, da sie die Grundlage für Vertrauen, Qualität, Sicherheit und nachhaltige Wertschöpfung schafft. ADVISORI versteht, dass ohne robuste Governance-Strukturen selbst die innovativsten API-Produkte ihr Potenzial nicht entfalten können. Unser Governance-Ansatz geht über traditionelle API-Management-Praktiken hinaus und schafft ein ganzheitliches Framework für nachhaltige API-Exzellenz.\n\n👥 Strategische API Governance Dimensionen:\n• Organisatorische Verankerung: Etablierung klarer Rollen, Verantwortlichkeiten und Entscheidungsstrukturen für API-Management auf allen Unternehmensebenen.\n• Prozessintegration: Einbettung von Governance-Prinzipien in alle API-relevanten Entwicklungs- und Betriebsprozesse zur Sicherstellung konsistenter Qualitätsstandards.\n• Kulturwandel: Förderung einer API-first Unternehmenskultur, die API-Qualität und Developer Experience als gemeinsame Verantwortung versteht.\n• Stakeholder-Alignment: Koordination zwischen Entwicklung, Business, Legal und Compliance Teams für ganzheitliche Governance-Umsetzung.\n\n🎯 Nachhaltige Qualitäts- und Sicherheitssicherung:\n• Automatisierte Qualitätsprüfung: Implementierung intelligenter Monitoring-Systeme, die API-Qualitätsprobleme proaktiv erkennen und korrigieren.\n• Security-by-Design: Etablierung einheitlicher Sicherheitsstandards und Authentifizierungsmechanismen für alle API-Produkte.\n• Kontinuierliche Verbesserung: Aufbau von Feedback-Schleifen und Optimierungsprozessen für stetige Qualitäts- und Sicherheitssteigerung.\n• Metriken und KPIs: Definition messbarer Qualitäts- und Sicherheitsindikatoren und regelmäßige Bewertung der Governance-Effektivität.\n\n🌟 ADVISORI's Governance-Excellence-Framework:\n• Risikoadaptive Governance: Anpassung der Governance-Intensität an die Kritikalität und Sensitivität verschiedener API-Produkte.\n• Compliance-Integration: Nahtlose Verbindung von API Governance mit regulatorischen Anforderungen wie EU AI Act und DSGVO.\n• Technologie-Enablement: Einsatz moderner Tools und Plattformen zur Automatisierung und Skalierung von Governance-Prozessen.\n• Change Management: Systematische Begleitung der Governance-Implementierung mit Fokus auf Akzeptanz und nachhaltige Verankerung."
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
