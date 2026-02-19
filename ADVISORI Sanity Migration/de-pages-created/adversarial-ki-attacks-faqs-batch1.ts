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
    console.log('Updating Adversarial KI Attacks page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'adversarial-ki-attacks' })
    
    if (!existingDoc) {
      throw new Error('Document "adversarial-ki-attacks" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum stellen Adversarial KI Attacks eine existenzielle Bedrohung für AI-gestützte Geschäftsmodelle dar und wie positioniert ADVISORI den Schutz vor diesen sophistizierten Angriffen als strategischen Wettbewerbsvorteil?",
        answer: "Adversarial KI Attacks repräsentieren eine der sophistiziertesten und gefährlichsten Bedrohungen für moderne AI-gestützte Unternehmen, da sie direkt die Integrität und Zuverlässigkeit von Machine Learning Modellen angreifen, auf denen kritische Geschäftsentscheidungen basieren. Diese Angriffe können unbemerkt die Funktionsweise von KI-Systemen manipulieren und zu katastrophalen Fehlentscheidungen führen. ADVISORI versteht diese Bedrohung als strategische Herausforderung, die proaktive und spezialisierte Verteidigungsmaßnahmen erfordert.\n\n🎯 Strategische Bedrohungslandschaft für C-Level:\n• Model Poisoning Risiken: Angreifer können während der Trainingsphase schädliche Daten einschleusen, die das Modell dauerhaft kompromittieren und zu systematischen Fehlentscheidungen in kritischen Geschäftsprozessen führen.\n• Data Poisoning Vulnerabilities: Manipulation von Trainingsdaten kann subtile Verzerrungen einführen, die erst bei spezifischen Eingaben aktiviert werden und dann erhebliche Geschäftsschäden verursachen.\n• Evasion Attacks auf Produktionssysteme: Gezielte Manipulation von Eingabedaten kann AI-Systeme dazu bringen, falsche Klassifikationen oder Entscheidungen zu treffen, was besonders in sicherheitskritischen Anwendungen verheerend sein kann.\n• Backdoor Implantation: Versteckte Trigger in AI-Modellen können von Angreifern aktiviert werden, um das System zu kompromittieren, ohne dass dies durch normale Überwachung erkannt wird.\n\n🛡️ ADVISORI's Strategischer AI Security Ansatz:\n• Proaktive Threat Intelligence: Wir entwickeln umfassende Bedrohungsmodelle, die spezifisch auf Ihre AI-Architektur und Geschäftsmodelle zugeschnitten sind, um potenzielle Angriffsvektoren frühzeitig zu identifizieren.\n• Multi-Layer Defense Strategie: Implementierung mehrschichtiger Sicherheitsmaßnahmen, die sowohl präventive als auch reaktive Komponenten umfassen, um maximalen Schutz gegen verschiedene Angriffstechniken zu gewährleisten.\n• DSGVO-konforme Security-by-Design: Integration von Datenschutz und Sicherheit von Grund auf, um nicht nur technische Robustheit, sondern auch regulatorische Compliance zu gewährleisten.\n• Kontinuierliche Adaptive Defense: Entwicklung von Systemen, die sich automatisch an neue Bedrohungen anpassen und kontinuierlich ihre Verteidigungsmechanismen verbessern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifizieren wir die finanziellen Auswirkungen von Adversarial KI Attacks auf unser Unternehmen und welchen ROI bietet ADVISORI's spezialisierte AI Security Implementierung für den Schutz unserer AI-Investitionen?",
        answer: "Die finanziellen Auswirkungen von Adversarial KI Attacks können verheerend sein und weit über direkte technische Schäden hinausgehen, da sie das Vertrauen in AI-gestützte Geschäftsprozesse untergraben und zu systematischen Fehlentscheidungen führen können. ADVISORI's spezialisierte AI Security Lösungen bieten messbaren ROI durch Risikominimierung, Geschäftskontinuität und den Schutz strategischer AI-Investitionen.\n\n💰 Direkte finanzielle Risiken von Adversarial KI Attacks:\n• Geschäftskritische Fehlentscheidungen: Kompromittierte AI-Modelle können zu kostspieligen Fehlentscheidungen in Bereichen wie Kreditvergabe, Betrugserkennung oder Qualitätskontrolle führen, die Millionenverluste verursachen können.\n• Reputationsschäden und Kundenvertrauen: Öffentlich bekannt gewordene AI-Sicherheitsvorfälle können das Vertrauen in Ihre technologische Kompetenz nachhaltig beschädigen und zu Kundenabwanderung führen.\n• Regulatorische Strafen und Compliance-Kosten: Sicherheitsverletzungen in AI-Systemen können zu erheblichen DSGVO-Strafen und zusätzlichen Compliance-Aufwendungen führen.\n• Intellectual Property Verluste: Model Extraction Attacks können Ihr geistiges Eigentum stehlen und Wettbewerbsvorteile zunichte machen.\n\n📈 ROI von ADVISORI's AI Security Investment:\n• Risikominimierung und Schadensprävention: Proaktive Sicherheitsmaßnahmen verhindern kostspielige Sicherheitsvorfälle und schützen vor den oben genannten finanziellen Risiken.\n• Geschäftskontinuität und Operational Excellence: Robuste AI-Systeme gewährleisten zuverlässige Geschäftsprozesse und vermeiden kostspielige Ausfallzeiten oder Systemkompromittierungen.\n• Competitive Advantage durch Security Leadership: Überlegene AI Security kann als Differenzierungsmerkmal gegenüber Wettbewerbern genutzt werden und neue Geschäftsmöglichkeiten eröffnen.\n• Investorvertrauen und Unternehmenswert: Nachweisbare AI Security Kompetenz stärkt das Vertrauen von Investoren und kann die Unternehmensbewertung positiv beeinflussen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die Regulierungslandschaft für AI Security entwickelt sich rasant – wie stellt ADVISORI sicher, dass unsere Adversarial Defense Strategien nicht nur technisch robust, sondern auch regulatorisch zukunftssicher und DSGVO-konform sind?",
        answer: "In einer Zeit sich schnell entwickelnder AI-Regulierung ist die Integration von Compliance und Security nicht nur eine rechtliche Notwendigkeit, sondern ein strategischer Imperativ für nachhaltige AI-Adoption. ADVISORI verfolgt einen vorausschauenden Ansatz, der technische Robustheit mit rigoroser regulatorischer Compliance verbindet und Ihr Unternehmen für zukünftige Regulierungsentwicklungen positioniert.\n\n🔄 Adaptive Compliance-Security Integration:\n• EU-AI-Act Compliance: Wir integrieren die Anforderungen der EU-KI-Verordnung in unsere Adversarial Defense Strategien, insbesondere für Hochrisiko-AI-Systeme, um sowohl Sicherheit als auch regulatorische Compliance zu gewährleisten.\n• DSGVO-konforme Security Architectures: Unsere AI Security Lösungen sind von Grund auf datenschutzkonform gestaltet und implementieren Privacy-by-Design Prinzipien in allen Sicherheitsmaßnahmen.\n• Branchenspezifische Compliance: Berücksichtigung sektorspezifischer Anforderungen wie MiFID II für Finanzdienstleister oder MDR für Medizintechnik bei der Entwicklung von AI Security Strategien.\n• Internationale Harmonisierung: Koordination mit internationalen Regulierungsstandards für global agierende Unternehmen.\n\n🔍 ADVISORI's Regulatory-Security Excellence Framework:\n• Proaktive Regulierungs-Überwachung: Kontinuierliche Analyse regulatorischer Entwicklungen und deren Auswirkungen auf AI Security Anforderungen, um frühzeitig Anpassungen vornehmen zu können.\n• Compliance-by-Design Security: Integration regulatorischer Anforderungen in die Architektur von Adversarial Defense Systemen von Beginn an, um nachträgliche kostspielige Anpassungen zu vermeiden.\n• Audit-Ready Documentation: Umfassende Dokumentation aller Security-Maßnahmen und Compliance-Prozesse für Transparenz und Audit-Bereitschaft.\n• Stakeholder Engagement: Aufbau von Beziehungen zu Regulierungsbehörden und Branchenverbänden für frühzeitige Einblicke in kommende Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI Adversarial KI Defense von einem Kostenfaktor zu einem strategischen Enabler für Innovation und Geschäftswachstum, und welche konkreten Wettbewerbsvorteile entstehen durch überlegene AI Security?",
        answer: "ADVISORI positioniert Adversarial KI Defense nicht als defensive Notwendigkeit, sondern als strategischen Enabler für sichere Innovation und nachhaltiges Geschäftswachstum. Überlegene AI Security wird zum Wettbewerbsvorteil, der neue Geschäftsmöglichkeiten eröffnet, Kundenvertrauen stärkt und die Grundlage für aggressive AI-Adoption schafft, während Risiken minimiert werden.\n\n🚀 Von Defense zu Strategic Advantage:\n• Sichere Innovation Acceleration: Robuste Adversarial Defense ermöglicht es Unternehmen, aggressiver in AI-Innovation zu investieren, da Risiken kontrolliert und minimiert sind, was zu schnellerer Markteinführung neuer AI-Produkte führt.\n• Trust-as-a-Service Positioning: Überlegene AI Security wird zum Verkaufsargument und Differenzierungsmerkmal, das Kunden anzieht, die Wert auf sichere und zuverlässige AI-Lösungen legen.\n• Regulatory Leadership: Proaktive Compliance und Security Excellence positioniert Ihr Unternehmen als Branchenführer und ermöglicht den Zugang zu regulierten Märkten und sicherheitskritischen Anwendungen.\n• Ecosystem Orchestration: Vertrauensvolle AI-Systeme ermöglichen die Schaffung von Geschäftsökosystemen und Partnerschaften, die auf sicherer Datenverarbeitung und AI-Interaktion basieren.\n\n💡 ADVISORI's Strategic Value Creation Framework:\n• Security-Enabled Business Models: Entwicklung neuer Geschäftsmodelle, die auf der Sicherheit und Vertrauenswürdigkeit Ihrer AI-Systeme basieren und Premium-Positionierung ermöglichen.\n• Competitive Moat Building: AI Security Excellence als schwer nachahmbarer Wettbewerbsvorteil, der langfristige Marktposition sichert und Markteintrittsbarrieren für Konkurrenten schafft.\n• Innovation Risk Management: Strukturierte Ansätze zur Risikobewertung neuer AI-Technologien, die schnelle und sichere Adoption ermöglichen, ohne Geschäftskontinuität zu gefährden.\n• Strategic Partnership Enablement: Sichere AI-Systeme als Grundlage für strategische Allianzen und Joint Ventures, die auf vertrauensvoller Datenverarbeitung und AI-Kollaboration basieren."
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
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
