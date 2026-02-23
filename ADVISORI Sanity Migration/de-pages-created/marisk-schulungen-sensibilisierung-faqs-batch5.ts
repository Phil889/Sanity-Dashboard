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
    console.log('Updating MaRisk Schulungen und Sensibilisierung page with FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'marisk-schulungen-sensibilisierung' })
    
    if (!existingDoc) {
      throw new Error('Document "marisk-schulungen-sensibilisierung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche besonderen Anforderungen stellt die Schulung von Management und Geschäftsleitung zu MaRisk-Themen?",
        answer: "Die Schulung von Management und Geschäftsleitung zu MaRisk-Themen stellt spezifische Anforderungen, die sich deutlich von der Qualifizierung operativer Mitarbeiter unterscheiden. Ein effektives Schulungskonzept für diese Zielgruppe berücksichtigt ihre besondere Verantwortung, ihre strategische Perspektive und ihre spezifischen Informationsbedürfnisse, um sie optimal auf ihre Überwachungs- und Steuerungsfunktion im Rahmen der MaRisk vorzubereiten.\n\n🏛️ Spezifische Anforderungen an Management-Schulungen:\n• Strategischer Fokus statt operativem Detail: Konzentration auf die übergreifenden Governance-Aspekte der MaRisk mit klarem Bezug zu strategischen Entscheidungsprozessen, anstelle detaillierter operativer Umsetzungsanforderungen.\n• Verantwortungs- und haftungsorientierte Perspektive: Klare Vermittlung der persönlichen Verantwortung und potenziellen Haftungsrisiken für Geschäftsleitungs- und Aufsichtsratsmitglieder bei Compliance-Verstößen, inklusive regulatorischer und rechtlicher Konsequenzen.\n• Entscheidungsorientierte Aufbereitung: Fokussierung auf entscheidungsrelevante Informationen und praxisnahe Handlungsoptionen in typischen Führungsdilemma-Situationen zwischen Geschäftsentwicklung und regulatorischen Anforderungen.\n• Prägnante, zeitsparende Formate: Berücksichtigung der Zeitrestriktionen von Top-Managern durch kompakte, hocheffiziente Schulungsformate, die maximalen Informationsgewinn in minimaler Zeit ermöglichen.\n\n📊 Inhaltliche Schwerpunkte für Geschäftsleitungs-Schulungen:\n• Gesamtverantwortungskonzept der MaRisk: Vertieftes Verständnis der umfassenden Verantwortung der Geschäftsleitung für die regelkonforme Geschäftsorganisation und effektive Risikosteuerung des Gesamtinstituts.\n• Aufsichtliche Erwartungshaltung und Prüfungspraxis: Einblicke in aktuelle aufsichtliche Schwerpunkte, typische Feststellungen auf Geschäftsleitungsebene und Erwartungen der Aufsicht an die Geschäftsleitung in Krisensituationen.\n• Integrierte Governance-Perspektive: Zusammenhänge zwischen MaRisk und anderen regulatorischen Anforderungen (wie BAIT, EBA-Guidelines, DSGVO), mit Fokus auf systemische Interdependenzen und potenzielle Zielkonflikte.\n• Strategisches Risikomanagement: Methodische Ansätze zur Integration regulatorischer Anforderungen in die strategische Planung und zur risikoadäquaten Steuerung des Instituts unter Berücksichtigung regulatorischer Rahmenbedingungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Rolle spielen Fallstudien und praxisnahe Beispiele in der MaRisk-Schulung und wie können sie optimal gestaltet werden?",
        answer: "Fallstudien und praxisnahe Beispiele nehmen eine Schlüsselrolle in effektiven MaRisk-Schulungen ein, da sie die oft abstrakte Regulatorik in konkrete, erlebbare Anwendungskontexte übersetzen und dadurch sowohl das Verständnis als auch den Praxistransfer maßgeblich fördern. Durch ihre narrative Kraft und ihren direkten Bezug zur Arbeitswirklichkeit der Teilnehmer bilden sie eine wichtige Brücke zwischen regulatorischer Theorie und gelebter Compliance-Praxis.\n\n🔑 Strategischer Mehrwert von Fallstudien in der MaRisk-Qualifizierung:\n• Kontextualisierung abstrakter Anforderungen: Übersetzung komplexer regulatorischer Vorgaben in konkrete Handlungssituationen, die die praktische Relevanz und Anwendbarkeit im Arbeitsalltag verdeutlichen und emotionale Anknüpfungspunkte schaffen.\n• Förderung kritischen Urteilsvermögens: Entwicklung analytischer Fähigkeiten zur Identifikation und Bewertung regulatorischer Risiken in komplexen, mehrdeutigen Situationen, die keine eindeutigen Standardlösungen bieten.\n• Erfahrungsbasiertes Lernen: Nutzung des Potenzials stellvertretender Erfahrungen, die es Teilnehmern ermöglichen, aus den Fehlern und Erfolgen anderer zu lernen, ohne diese selbst durchleben zu müssen.\n• Sicheres Übungsfeld für Entscheidungen: Schaffung eines geschützten Raums zum Erproben verschiedener Handlungsoptionen und zum Reflektieren ihrer möglichen Konsequenzen, ohne reale Compliance-Risiken zu erzeugen.\n\n📚 Gestaltungsprinzipien für wirkungsvolle MaRisk-Fallstudien:\n• Authentische Realitätsnähe: Entwicklung von Fallstudien auf Basis realer Prüfungsfeststellungen, Compliance-Vorfälle oder typischer Herausforderungen aus der Praxis, anonymisiert aber mit ausreichend spezifischen Details für Glaubwürdigkeit und Relevanz.\n• Mehrdimensionale Komplexität: Integration verschiedener Perspektiven und Zielkonflikte in die Fallstudie, die die typischen Spannungsfelder zwischen Geschäftsentwicklung, Risikomanagement und regulatorischen Anforderungen widerspiegeln.\n• Prozessorientiertes Storytelling: Gestaltung von Fallstudien als Prozessnarrativ mit mehreren Entscheidungspunkten, an denen Teilnehmer aktiv verschiedene Handlungsoptionen analysieren und bewerten müssen.\n• Instituts- und Aufgabenspezifische Anpassung: Maßgeschneiderte Kontextualisierung der Fallstudien für die spezifischen Rollen, Verantwortlichkeiten und Geschäftskontexte der jeweiligen Zielgruppe, um maximale Identifikation und Transferrelevanz zu erreichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie kann der Lernerfolg von MaRisk-Schulungen langfristig gesichert und der Wissenstransfer in die tägliche Praxis gefördert werden?",
        answer: "Die langfristige Sicherung des Lernerfolgs von MaRisk-Schulungen und die Förderung des Wissenstransfers in die tägliche Praxis erfordern eine systematische Transferstrategie, die weit über die eigentliche Schulungsmaßnahme hinausgeht. Nur durch gezielte Verankerungsmechanismen kann sichergestellt werden, dass das vermittelte Wissen nicht nur kurzfristig präsent ist, sondern nachhaltig in konkretes Handeln übersetzt wird und zu einer verbesserten MaRisk-Compliance beiträgt.\n\n🔄 Systematische Transfersicherung durch Mehrphasenkonzept:\n• Pre-Learning-Aktivierung: Gezielte Vorbereitung der Teilnehmer durch Reflexionsaufgaben, Standortbestimmungen oder praxisbezogene Vorbereitungsaufgaben, die persönliche Relevanz und Lernmotivation fördern und für eigene Lernbedarfe sensibilisieren.\n• Transferoptimierte Schulungsgestaltung: Integration expliziter Transferelemente bereits während der Schulung, etwa durch konkrete Anwendungsübungen, individuelle Transferpläne und Reflexion potenzieller Umsetzungshindernisse im eigenen Arbeitsumfeld.\n• Strukturierte Post-Training-Begleitung: Systematische Nachbetreuung durch Follow-up-Formate, Transfercoaching und moderierte Erfahrungsaustausche, die den Umsetzungsprozess begleiten und bei Implementierungshürden unterstützen.\n• Kontinuierliche Reaktivierung: Regelmäßige, zeitlich gestaffelte Wiederholungs- und Vertiefungsimpulse, die dem natürlichen Vergessen entgegenwirken und das Gelernte in verschiedenen Kontexten und Anwendungssituationen aktivieren.\n\n⚙️ Implementierungsansätze zur Verankerung in der Praxis:\n• Transferprojekte mit Workspace-Integration: Entwicklung konkreter Umsetzungsprojekte während der Schulung, die direkt an realen Compliance-Herausforderungen im eigenen Arbeitsbereich ansetzen und mit definierten Meilensteinen nachverfolgt werden.\n• Mikrolern-Ökosystem im Arbeitsalltag: Etablierung kontextsensibler Mikrolern-Elemente direkt im Arbeitsfluss, etwa durch integrierte Compliance-Hilfestellungen in relevanten Prozessen, Just-in-Time-Lernressourcen oder regelmäßige kurze Reflexionsimpulse.\n• Kollegiale Transferunterstützung: Aufbau von Peer-Learning-Strukturen wie Transfertandems oder Implementierungszirkeln, in denen Teilnehmer sich gegenseitig bei der praktischen Umsetzung unterstützen und voneinander lernen können.\n• Führungskräfte als Transferkatalysatoren: Systematische Einbindung der Führungskräfte als aktive Förderer des Lerntransfers durch strukturierte Transfergespräche, gezielte Anwendungsmöglichkeiten im Team und kontinuierliches Feedback zur Umsetzung des Gelernten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können digitale Transformationstrends wie künstliche Intelligenz und adaptive Lernsysteme die Zukunft der MaRisk-Schulungen gestalten?",
        answer: "Digitale Transformationstrends wie künstliche Intelligenz, adaptive Lernsysteme und immersive Technologien haben das Potenzial, die Zukunft der MaRisk-Schulungen grundlegend zu verändern und eine neue Generation regulatorischer Lernformate zu ermöglichen. Diese Technologien bieten innovative Ansätze, um die spezifischen Herausforderungen regulatorischer Qualifizierung – wie Komplexität, kontinuierliche Anpassungserfordernisse und individualisierte Lernbedarfe – effektiver zu adressieren und gleichzeitig das Lernerlebnis attraktiver zu gestalten.\n\n🧠 Potenziale künstlicher Intelligenz für personalisierte MaRisk-Qualifizierung:\n• Adaptive Lernpfade mit KI-Steuerung: Entwicklung intelligenter Lernsysteme, die individuelle Lernpfade basierend auf Vorwissen, Lernverhalten, Funktion im Institut und spezifischen Compliance-Risiken dynamisch anpassen und kontinuierlich optimieren.\n• KI-gestützte Wissensextraktion und -aufbereitung: Automatisierte Analyse regulatorischer Texte, aufsichtlicher Veröffentlichungen und Prüfungsfeststellungen zur zeitnahen Identifikation relevanter Änderungen und ihrer intelligenten Transformation in zielgruppengerechte Lernressourcen.\n• Predictive Analytics für proaktive Compliance-Schulung: Nutzung von Vorhersagemodellen, die basierend auf Compliance-Daten, Prüfungsergebnissen und Mitarbeiterverhalten potenzielle Risikobereiche identifizieren und gezielt präventive Schulungsmaßnahmen empfehlen.\n• Intelligente Compliance-Assistenten: Integration kontextsensibler KI-Assistenten in Arbeitsprozesse, die situationsabhängig relevantes regulatorisches Wissen bereitstellen, Entscheidungsunterstützung bieten und kontinuierliches Lernen im Workflow ermöglichen.\n\n🚀 Innovative Lernformate durch immersive und adaptive Technologien:\n• Immersive Compliance-Simulationen: Entwicklung interaktiver VR/AR-basierter Szenarien, in denen komplexe regulatorische Anforderungen in realitätsnahen virtuellen Umgebungen erfahrbar werden und verschiedene Handlungsoptionen risikolos exploriert werden können.\n• Gamifizierte Lernökosysteme: Gestaltung langfristiger, spielbasierter Lernumgebungen mit progressiven Herausforderungen, Wettbewerbselementen und narrativen Strukturen, die kontinuierliches Engagement fördern und komplexe regulatorische Inhalte emotional verankern.\n• Adaptive Mikrolernsysteme: Implementation intelligenter Mikrolernplattformen, die basierend auf individuellen Lernfortschritten, Wissensständen und Arbeitskontexten maßgeschneiderte Lernimpulse generieren und diese optimal im Arbeitsalltag platzieren.\n• Kollaborative Lernräume: Schaffung digitaler Kollaborationsumgebungen, die institutionsübergreifenden Wissensaustausch zu regulatorischen Themen ermöglichen, kollektive Intelligenz nutzen und Communities of Practice im Compliance-Bereich fördern."
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
    console.log('✅ FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
