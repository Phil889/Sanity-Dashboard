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
    console.log('Updating DORA Implementation Framework page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-implementation-framework' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-implementation-framework" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche Change Management Strategien sind für eine erfolgreiche DORA-Transformation am wirksamsten?',
        answer: "Change Management ist ein kritischer Erfolgsfaktor für DORA-Transformationen, da es nicht nur um technische Implementierung geht, sondern um fundamentale Veränderungen in Denkweise, Prozessen und Organisationskultur. Erfolgreiche DORA-Implementierungen erfordern einen strukturierten Change Management Ansatz, der Menschen in den Mittelpunkt stellt und dabei sowohl rationale als auch emotionale Aspekte des Wandels berücksichtigt.\n\n👥 Stakeholder-zentriertes Change Management:\n• Comprehensive Stakeholder Mapping: Detaillierte Identifikation und Analyse aller betroffenen Stakeholder-Gruppen, ihrer Interessen, Bedenken und Einflussmöglichkeiten auf die DORA-Transformation.\n• Personalized Change Journeys: Entwicklung individueller Change Journeys für verschiedene Stakeholder-Gruppen, die deren spezifische Bedürfnisse, Ängste und Motivationen berücksichtigen.\n• Executive Sponsorship Activation: Aktive Einbindung der Geschäftsleitung als sichtbare Champions der Transformation mit klaren Rollen und Verantwortlichkeiten.\n• Change Champion Networks: Aufbau eines Netzwerks von Change Champions auf verschiedenen Organisationsebenen, die als Multiplikatoren und Unterstützer fungieren.\n\n📢 Strategische Kommunikation und Engagement:\n• Multi-Channel Communication Strategy: Entwicklung einer umfassenden Kommunikationsstrategie, die verschiedene Kanäle und Formate nutzt, um alle Zielgruppen effektiv zu erreichen.\n• Transparent Progress Communication: Regelmäßige, transparente Kommunikation über Fortschritte, Herausforderungen und Erfolge der DORA-Implementation.\n• Two-Way Feedback Mechanisms: Etablierung strukturierter Feedback-Kanäle, die es Mitarbeitern ermöglichen, Bedenken zu äußern und Verbesserungsvorschläge einzubringen.\n• Success Story Amplification: Systematische Identifikation und Kommunikation von Erfolgsgeschichten und Quick Wins zur Stärkung der Motivation und des Vertrauens.\n\n🎓 Kompetenzentwicklung und Empowerment:\n• Skills Gap Assessment: Umfassende Bewertung der vorhandenen Fähigkeiten und Identifikation von Kompetenzlücken in Bezug auf DORA-Anforderungen.\n• Targeted Learning Programs: Entwicklung zielgruppenspezifischer Lernprogramme, die sowohl technische DORA-Kenntnisse als auch Change Management Fähigkeiten vermitteln.\n• Hands-on Training Approach: Implementierung praxisorientierter Schulungsansätze, die reale Szenarien und Anwendungsfälle nutzen.\n• Continuous Learning Culture: Förderung einer Kultur des kontinuierlichen Lernens und der Anpassungsfähigkeit als Grundlage für nachhaltige Transformation.\n\n🔄 Adaptive Change Methodologie:\n• Agile Change Management: Anwendung agiler Prinzipien im Change Management, die schnelle Anpassungen und iterative Verbesserungen ermöglichen.\n• Resistance Management: Proaktive Identifikation und Adressierung von Widerständen durch strukturierte Analyse und gezielte Interventionen.\n• Cultural Integration: Integration von DORA-Prinzipien in die Unternehmenskultur durch Anpassung von Werten, Verhaltensweisen und Belohnungssystemen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie kann man Stakeholder-Engagement maximieren und Widerstand gegen DORA-Veränderungen minimieren?',
        answer: "Effektives Stakeholder-Engagement ist entscheidend für den Erfolg von DORA-Transformationen, da es Vertrauen aufbaut, Widerstände reduziert und kollektive Unterstützung für die notwendigen Veränderungen schafft. Ein strategischer Ansatz erfordert tiefes Verständnis der Stakeholder-Landschaft und maßgeschneiderte Engagement-Strategien für verschiedene Interessensgruppen.\n\n🎯 Strategische Stakeholder-Analyse und Segmentierung:\n• Power-Interest Matrix: Entwicklung einer detaillierten Power-Interest Matrix zur Kategorisierung von Stakeholdern nach ihrem Einfluss und Interesse an der DORA-Transformation.\n• Stakeholder Journey Mapping: Erstellung detaillierter Stakeholder Journey Maps, die deren Erfahrungen, Touchpoints und emotionale Reaktionen während der Transformation dokumentieren.\n• Influence Network Analysis: Analyse informeller Netzwerke und Einflussmuster innerhalb der Organisation zur Identifikation von Schlüsselpersonen und Meinungsführern.\n• Cultural Context Assessment: Bewertung kultureller Faktoren und organisatorischer Dynamiken, die das Stakeholder-Verhalten beeinflussen könnten.\n\n🤝 Partizipative Engagement-Strategien:\n• Co-Creation Workshops: Durchführung von Co-Creation Workshops, in denen Stakeholder aktiv an der Gestaltung der DORA-Implementation beteiligt werden.\n• Advisory Groups: Etablierung von Stakeholder Advisory Groups für verschiedene Bereiche, die regelmäßig Input und Feedback zur Transformation liefern.\n• Pilot Program Participation: Einbindung von Stakeholdern in Pilot-Programme, die ihnen ermöglichen, DORA-Veränderungen in einem kontrollierten Umfeld zu erleben.\n• Decision-Making Involvement: Strukturierte Einbindung von Stakeholdern in relevante Entscheidungsprozesse zur Stärkung des Ownership-Gefühls.\n\n💡 Proaktive Widerstandsmanagement-Strategien:\n• Root Cause Analysis: Systematische Analyse der Grundursachen von Widerständen, einschließlich rationaler Bedenken und emotionaler Faktoren.\n• Personalized Intervention Plans: Entwicklung individueller Interventionspläne für verschiedene Arten von Widerständen und Stakeholder-Gruppen.\n• Benefit Realization Communication: Klare Kommunikation der persönlichen und organisatorischen Vorteile der DORA-Transformation für verschiedene Stakeholder-Gruppen.\n• Safe Space Creation: Schaffung sicherer Räume, in denen Stakeholder Bedenken äußern und Fragen stellen können, ohne negative Konsequenzen zu befürchten.\n\n🔄 Kontinuierliche Engagement-Optimierung:\n• Feedback Loop Integration: Implementierung kontinuierlicher Feedback-Schleifen zur Anpassung der Engagement-Strategien basierend auf Stakeholder-Reaktionen.\n• Engagement Effectiveness Measurement: Entwicklung von Metriken zur Messung der Effektivität verschiedener Engagement-Aktivitäten.\n• Adaptive Communication: Flexible Anpassung der Kommunikationsstile und -kanäle basierend auf Stakeholder-Präferenzen und Feedback.\n• Success Recognition Programs: Implementierung von Anerkennungsprogrammen, die Stakeholder-Beiträge zur DORA-Transformation würdigen und feiern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche Schulungs- und Kompetenzentwicklungsprogramme sind für DORA-Implementation am effektivsten?',
        answer: "Effektive Schulungs- und Kompetenzentwicklungsprogramme sind das Rückgrat erfolgreicher DORA-Implementierungen, da sie sicherstellen, dass alle Beteiligten über das notwendige Wissen und die Fähigkeiten verfügen, um ihre Rollen in der neuen Compliance-Landschaft erfolgreich auszufüllen. Ein strategischer Lernansatz kombiniert verschiedene Lernmethodologien und berücksichtigt unterschiedliche Lernstile und Kompetenzebenen.\n\n🎓 Strategische Lernarchitektur:\n• Competency Framework Development: Entwicklung eines umfassenden Kompetenz-Frameworks, das alle DORA-relevanten Fähigkeiten und Kenntnisse strukturiert und verschiedenen Rollen zuordnet.\n• Learning Path Design: Erstellung individueller Lernpfade für verschiedene Rollen und Kompetenzebenen, die progressiven Kompetenzaufbau ermöglichen.\n• Blended Learning Approach: Integration verschiedener Lernformate wie E-Learning, Präsenzschulungen, Workshops und On-the-Job Training für maximale Effektivität.\n• Micro-Learning Integration: Implementierung von Micro-Learning Modulen für kontinuierliche, bite-sized Wissensvermittlung im Arbeitsalltag.\n\n🛠️ Praxisorientierte Lernmethoden:\n• Simulation-Based Training: Entwicklung realistischer Simulationen und Szenarien, die es Lernenden ermöglichen, DORA-Situationen in einer sicheren Umgebung zu üben.\n• Case Study Methodology: Nutzung branchenspezifischer Fallstudien und realer Beispiele zur Veranschaulichung von DORA-Konzepten und deren praktischer Anwendung.\n• Hands-on Workshops: Durchführung interaktiver Workshops, die praktische Übungen und Gruppenarbeiten zur Vertiefung des Verständnisses nutzen.\n• Peer Learning Programs: Etablierung von Peer-Learning-Programmen, die den Wissensaustausch zwischen Kollegen fördern und verschiedene Perspektiven einbringen.\n\n📊 Adaptive und Personalisierte Lernansätze:\n• Learning Analytics: Einsatz von Learning Analytics zur Verfolgung des Lernfortschritts und Identifikation von Bereichen, die zusätzliche Unterstützung benötigen.\n• Personalized Learning Paths: Entwicklung personalisierter Lernpfade basierend auf individuellen Kompetenzlücken, Lernpräferenzen und Rollenanforderungen.\n• Just-in-Time Learning: Bereitstellung von Just-in-Time Lernressourcen, die genau dann verfügbar sind, wenn sie für spezifische Aufgaben oder Situationen benötigt werden.\n• Adaptive Assessment: Implementierung adaptiver Bewertungsmethoden, die sich an das Kompetenzniveau der Lernenden anpassen.\n\n🔄 Kontinuierliche Kompetenzentwicklung:\n• Continuous Learning Culture: Förderung einer Kultur des kontinuierlichen Lernens, die regelmäßige Kompetenzaktualisierung als normale Geschäftspraxis etabliert.\n• Knowledge Management Integration: Integration von Lernprogrammen in bestehende Knowledge Management Systeme zur Schaffung einer einheitlichen Wissensplattform.\n• Expert Network Development: Aufbau interner Expertennetzwerke, die als Mentoren und Wissensträger für kontinuierliche Kompetenzentwicklung fungieren.\n• Learning Impact Measurement: Entwicklung von Metriken zur Messung der Auswirkungen von Lernprogrammen auf die DORA-Compliance und operative Performance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie kann man eine nachhaltige Compliance-Kultur etablieren, die DORA-Prinzipien langfristig verankert?',
        answer: "Die Etablierung einer nachhaltigen Compliance-Kultur ist entscheidend für den langfristigen Erfolg von DORA-Implementierungen, da sie sicherstellt, dass Compliance-Verhalten zu einem natürlichen Teil der Organisationsidentität wird. Eine starke Compliance-Kultur geht über Regeln und Prozesse hinaus und schafft ein Umfeld, in dem ethisches Verhalten und Risikobewusstsein intrinsisch motiviert sind.\n\n🏛️ Kulturelle Grundlagen und Werte:\n• Values Integration: Integration von DORA-Prinzipien in die Kernwerte der Organisation und deren Verankerung in Mission, Vision und Unternehmensleitbild.\n• Leadership Modeling: Sichtbare Demonstration von Compliance-Verhalten durch Führungskräfte auf allen Ebenen als Vorbilder für die gesamte Organisation.\n• Cultural Assessment: Regelmäßige Bewertung der bestehenden Organisationskultur und Identifikation kultureller Faktoren, die DORA-Compliance unterstützen oder behindern.\n• Behavioral Expectations: Klare Definition und Kommunikation erwarteter Verhaltensweisen in Bezug auf DORA-Compliance für alle Organisationsebenen.\n\n🎯 Verhaltensänderung und Motivation:\n• Intrinsic Motivation Activation: Entwicklung von Strategien zur Aktivierung intrinsischer Motivation für Compliance-Verhalten durch Sinnstiftung und Zweckverbindung.\n• Positive Reinforcement Systems: Implementierung positiver Verstärkungssysteme, die gewünschtes Compliance-Verhalten anerkennen und belohnen.\n• Social Proof Mechanisms: Nutzung sozialer Bewährungs-Mechanismen zur Förderung von Compliance-Verhalten durch Peer-Influence und Gruppendynamik.\n• Psychological Safety: Schaffung psychologischer Sicherheit, die es Mitarbeitern ermöglicht, Compliance-Probleme zu melden und Verbesserungsvorschläge zu machen.\n\n🔄 Systemische Kulturverankerung:\n• Process Integration: Nahtlose Integration von DORA-Compliance in alle Geschäftsprozesse, sodass Compliance-Verhalten zur natürlichen Arbeitsweise wird.\n• Performance Management Alignment: Ausrichtung von Performance Management Systemen auf DORA-Compliance-Ziele und Integration in individuelle Leistungsbewertungen.\n• Recruitment und Onboarding: Integration von Compliance-Kriterien in Rekrutierungsprozesse und umfassende DORA-Orientierung für neue Mitarbeiter.\n• Communication Rituals: Etablierung regelmäßiger Kommunikationsrituale, die DORA-Themen in den organisatorischen Dialog integrieren.\n\n📈 Kulturelle Evolution und Nachhaltigkeit:\n• Culture Measurement: Entwicklung von Metriken zur Messung der Compliance-Kultur und deren Entwicklung über die Zeit.\n• Continuous Cultural Reinforcement: Implementierung kontinuierlicher Verstärkungsmechanismen, die die Compliance-Kultur langfristig aufrechterhalten.\n• Generational Knowledge Transfer: Etablierung von Mechanismen zur Übertragung von Compliance-Wissen und -Kultur auf neue Generationen von Mitarbeitern.\n• Cultural Resilience Building: Aufbau kultureller Resilienz, die sicherstellt, dass die Compliance-Kultur auch bei organisatorischen Veränderungen bestehen bleibt."
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
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
