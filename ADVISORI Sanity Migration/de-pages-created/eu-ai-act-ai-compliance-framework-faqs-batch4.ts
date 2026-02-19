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
    console.log('Updating EU AI Act AI Compliance Framework page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-ai-compliance-framework' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-ai-compliance-framework" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie adressiert ADVISORI die Herausforderung der globalen AI Compliance, wenn Unternehmen in mehreren Jurisdiktionen mit unterschiedlichen AI-Regulierungen operieren?",
        answer: "Globale AI Compliance ist eine der komplexesten Herausforderungen für multinationale Unternehmen, da verschiedene Jurisdiktionen unterschiedliche regulatorische Ansätze verfolgen. ADVISORI entwickelt harmonisierte Compliance-Frameworks, die lokale Anforderungen erfüllen, während sie gleichzeitig operative Effizienz und strategische Kohärenz über alle Märkte hinweg sicherstellen.\n\n🌍 Global Compliance Architecture:\n• Jurisdictional Mapping & Analysis: Umfassende Analyse aller relevanten AI-Regulierungen (EU AI Act, US Executive Orders, China AI Regulations) und deren Implikationen für Ihr Geschäft.\n• Harmonized Baseline Framework: Entwicklung eines globalen Mindeststandards, der die strengsten Anforderungen aller relevanten Jurisdiktionen erfüllt.\n• Localization Strategy: Anpassung des globalen Frameworks an spezifische lokale Anforderungen ohne Kompromittierung der übergeordneten Governance.\n• Cross-border Data Governance: Spezielle Berücksichtigung grenzüberschreitender Datenflüsse und deren Compliance-Implikationen.\n\n🛡️ ADVISORI's Global Compliance Excellence:\n• Regulatory Intelligence Network: Kontinuierliche Überwachung regulatorischer Entwicklungen in allen relevanten Jurisdiktionen durch unser globales Expertennetzwerk.\n• Cultural Adaptation Strategies: Berücksichtigung kultureller und geschäftlicher Unterschiede bei der Implementierung einheitlicher AI Ethics-Prinzipien.\n• Multi-jurisdictional Audit Coordination: Koordination von Compliance-Audits über verschiedene Märkte hinweg für maximale Effizienz.\n• Legal Risk Mitigation: Proaktive Identifikation und Mitigation rechtlicher Risiken durch unterschiedliche Interpretationen von AI-Regulierungen.\n• Scalable Implementation: Design von Frameworks, die effizient auf neue Märkte und Jurisdiktionen skaliert werden können.\n• Strategic Regulatory Engagement: Unterstützung bei der Teilnahme an regulatorischen Konsultationen und Policy-Dialogen in verschiedenen Märkten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Change Management-Strategien implementiert ADVISORI, um eine nachhaltige Transformation zur AI-ethischen Unternehmenskultur zu gewährleisten?",
        answer: "Die Transformation zu einer AI-ethischen Unternehmenskultur erfordert mehr als nur Policy-Implementation – sie verlangt einen fundamentalen Wandel in Denkweise, Verhalten und Entscheidungsprozessen auf allen Organisationsebenen. ADVISORI entwickelt holistische Change Management-Programme, die technische Compliance mit kultureller Transformation verbinden und nachhaltige Verhaltensänderungen fördern.\n\n🎯 Cultural Transformation Strategy:\n• Leadership Commitment & Modeling: Etablierung sichtbarer Führungsunterstützung und -vorbildfunktion für ethische AI-Praktiken auf C-Level.\n• Values Integration: Nahtlose Integration von AI Ethics in bestehende Unternehmenswerte und Performance-Management-Systeme.\n• Behavior Change Programs: Entwicklung strukturierter Programme zur Förderung ethischer Entscheidungsfindung in alltäglichen AI-bezogenen Situationen.\n• Success Story Amplification: Systematische Kommunikation von Erfolgsgeschichten und Best Practices zur Verstärkung positiver Verhaltensweisen.\n\n🚀 ADVISORI's Change Excellence Approach:\n• Multi-stakeholder Engagement: Gezielte Ansprache verschiedener Zielgruppen (Developers, Business Teams, Legal) mit maßgeschneiderten Change-Narrativen.\n• Gamification & Incentivization: Einsatz von spielerischen Elementen und Anreizsystemen zur Förderung der Adoption ethischer AI-Praktiken.\n• Continuous Feedback Loops: Etablierung von Mechanismen zur kontinuierlichen Erfassung und Integration von Mitarbeiterfeedback in die Change-Strategie.\n• Skills Development Programs: Comprehensive Schulungsprogramme zur Entwicklung AI Ethics-Kompetenzen auf allen Organisationsebenen.\n• Cultural Assessment & Monitoring: Regelmäßige Bewertung des kulturellen Wandels durch Surveys, Interviews und Behavioral Analytics.\n• Resistance Management: Proaktive Identifikation und Adressierung von Widerständen gegen die kulturelle Transformation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie stellt ADVISORI sicher, dass das AI Compliance Framework mit der Geschäftsstrategie und den Innovationszielen des Unternehmens aligned bleibt?",
        answer: "Die Alignment zwischen AI Compliance und Geschäftsstrategie ist entscheidend für den langfristigen Erfolg – ein Framework, das Innovation behindert oder strategische Ziele konterkariert, wird unweigerlich scheitern. ADVISORI entwickelt dynamische Alignment-Mechanismen, die AI Compliance als strategischen Enabler positionieren und kontinuierlich mit evolving Business-Prioritäten synchronisieren.\n\n🎯 Strategic Alignment Architecture:\n• Business Strategy Integration: Direkte Verknüpfung von AI Compliance-Zielen mit übergeordneten Geschäftszielen und strategischen Initiativen.\n• Innovation Pipeline Alignment: Integration von Compliance-Überlegungen in den gesamten Innovation-Lifecycle von Ideation bis Market Launch.\n• Dynamic Priority Balancing: Flexible Mechanismen zur Anpassung von Compliance-Prioritäten an sich ändernde Geschäftsanforderungen.\n• ROI-driven Compliance Investment: Strategische Allokation von Compliance-Ressourcen basierend auf Business-Impact und strategischem Wert.\n\n⚖️ ADVISORI's Strategic Integration Excellence:\n• C-Suite Strategic Sessions: Regelmäßige strategische Reviews mit der Geschäftsführung zur Sicherstellung kontinuierlicher Alignment.\n• Business Case Development: Entwicklung überzeugender Business Cases für AI Compliance-Investitionen mit klarem ROI-Nachweis.\n• Innovation-Compliance Co-Design: Parallel-Engineering von Innovationsprozessen und Compliance-Frameworks für optimale Synergie.\n• Market Opportunity Assessment: Kontinuierliche Bewertung neuer Marktchancen durch überlegene AI Governance und Stakeholder-Vertrauen.\n• Competitive Intelligence: Monitoring der AI Compliance-Posture von Wettbewerbern zur Identifikation strategischer Differenzierungsmöglichkeiten.\n• Future Strategy Preparation: Proaktive Anpassung des Compliance-Frameworks an sich abzeichnende strategische Shifts und Marktentwicklungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche Rolle spielt ADVISORI bei der Entwicklung von AI Incident Response und Crisis Management-Prozessen als Teil des umfassenden Compliance Frameworks?",
        answer: "AI-bedingte Incidents können existenzielle Bedrohungen für Unternehmen darstellen – von Algorithmic Bias-Skandalen bis zu AI-Security-Breaches. ADVISORI entwickelt robuste Incident Response und Crisis Management-Frameworks, die nicht nur schnelle Schadensbegrenzung ermöglichen, sondern auch strategische Lernchancen schaffen und das Vertrauen der Stakeholder langfristig stärken.\n\n🚨 Comprehensive AI Incident Response:\n• Incident Classification & Escalation: Strukturierte Kategorisierung von AI-Incidents basierend auf Impact, Scope und regulatorischen Implikationen.\n• Rapid Response Teams: Vordefinierte, cross-funktionale Teams mit klaren Rollen und Verantwortlichkeiten für verschiedene Incident-Szenarien.\n• Stakeholder Communication Protocols: Präzise Kommunikationsstrategien für verschiedene Stakeholder-Gruppen (Regulatoren, Kunden, Medien, Investoren).\n• Evidence Preservation & Analysis: Systematische Sammlung und Analyse von Incident-Evidenzen für interne Learnings und externe Reporting.\n\n🛡️ ADVISORI's Crisis Excellence Framework:\n• Scenario Planning & Simulation: Regelmäßige Krisenübungen und Scenario-Planning-Sessions zur Vorbereitung auf verschiedene AI-Incident-Typen.\n• Regulatory Relationship Management: Proaktive Beziehungspflege zu Regulatoren für konstruktive Incident-Resolution und Reputationsschutz.\n• Crisis Communication Excellence: Professionelle Unterstützung bei der Entwicklung authentischer, transparenter Kommunikationsstrategien.\n• Post-Incident Learning Integration: Systematische Integration von Incident-Learnings in die kontinuierliche Verbesserung des AI Compliance Frameworks.\n• Legal & Regulatory Coordination: Koordination zwischen internen Teams, externen Anwälten und Regulatoren für optimale Incident-Resolution.\n• Reputation Recovery Strategies: Langfristige Strategien zur Wiederherstellung und Stärkung des Stakeholder-Vertrauens nach kritischen Incidents."
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
