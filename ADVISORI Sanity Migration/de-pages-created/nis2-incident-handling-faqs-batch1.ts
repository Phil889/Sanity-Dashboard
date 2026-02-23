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
    console.log('Updating NIS2 Incident Handling page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-incident-handling' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-incident-handling" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist ein professionelles NIS2-Incident Handling für die strategische Wettbewerbsfähigkeit unseres Unternehmens entscheidend, und wie kann ADVISORI uns dabei unterstützen?",
        answer: "NIS2-konformes Incident Handling ist weit mehr als eine regulatorische Compliance-Anforderung – es bildet das Herzstück der operationalen Resilienz und des Vertrauens in Ihre kritischen Geschäftsprozesse. Für C-Level-Führungskräfte bedeutet effektives Incident Handling den Unterschied zwischen kontrollierten Störungen und existenzbedrohenden Krisen, die nicht nur finanzielle Verluste, sondern auch irreparablen Reputationsschaden verursachen können.\n\n🎯 Strategische Imperative für professionelles Incident Handling:\n• Geschäftskontinuität als Wettbewerbsvorteil: Während Ihre Wettbewerber bei Cyberangriffen mit tagelangen Ausfällen kämpfen, ermöglicht robustes Incident Handling die schnelle Wiederherstellung kritischer Services und erhält Ihre Marktposition.\n• Vertrauen von Stakeholdern und Kunden: Professionelle Incident Response demonstriert operationale Exzellenz und stärkt das Vertrauen von Investoren, Partnern und Kunden in Ihre Zuverlässigkeit.\n• Regulatorische Compliance und Haftungsminimierung: NIS2 fordert Meldungen binnen 24 Stunden – Verzögerungen können zu Millionen-Bußgeldern und persönlicher Haftung der Geschäftsleitung führen.\n• Kostenoptimierung durch Schadensbegrenzung: Jede Minute, die bei der Incident Response gewonnen wird, kann Millionen an direkten und indirekten Schäden verhindern.\n\n🛡️ ADVISORIs strategischer Ansatz für Incident Handling Excellence:\n• Ganzheitliche Response-Architekturen: Wir entwickeln integrierte Incident Handling Frameworks, die technische Exzellenz mit organisatorischer Effizienz verbinden und alle kritischen Stakeholder einbeziehen.\n• Automatisierte Intelligence-Systeme: Implementierung fortschrittlicher Detection- und Response-Technologien, die Bedrohungen in Echtzeit identifizieren und automatisierte Gegenmaßnahmen einleiten.\n• Strategische Krisenmanagement-Integration: Verbindung von technischen Incident Response Prozessen mit Executive Crisis Management für koordinierte, effektive Entscheidungsfindung unter Druck.\n• Kontinuierliche Optimierung durch Lessons Learned: Etablierung einer Kultur des kontinuierlichen Lernens, die jeden Vorfall in eine Gelegenheit zur Stärkung der Resilienz verwandelt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten finanziellen und operationalen Risiken entstehen für unser Unternehmen bei mangelhaftem NIS2-Incident Handling, und wie quantifizieren wir diese?",
        answer: "Die finanziellen und operationalen Auswirkungen unzureichender NIS2-Incident Handling Capabilities können existenzbedrohende Dimensionen erreichen. Moderne Cyberangriffe verursachen durchschnittlich Schäden von 4,45 Millionen USD pro Vorfall, wobei kritische Infrastrukturen aufgrund ihrer systemrelevanten Rolle besonders exponiert sind. Die wahren Kosten gehen jedoch weit über direkte Schadenssummen hinaus.\n\n💰 Quantifizierbare finanzielle Risiken mangelhafter Incident Response:\n• Direkte Regulierungsstrafen: NIS2-Bußgelder können bis zu 10 Millionen EUR oder 2% des weltweiten Jahresumsatzes erreichen – zusätzlich zu persönlicher Haftung der Geschäftsleitung.\n• Betriebsausfallschäden: Jede Stunde Systemausfall kann bei kritischen Infrastrukturen Millionenschäden verursachen – unzureichende Response verlängert diese Ausfälle exponentiell.\n• Cyber-Erpressung und Datendiebstahl: Ohne effektive Incident Response steigt die Wahrscheinlichkeit erfolgreicher Ransomware-Angriffe mit Lösegeldforderungen im Millionenbereich.\n• Reputationsschäden mit langfristigen Auswirkungen: Verlorenes Kundenvertrauen führt zu messbaren Umsatzrückgängen, die oft das 10-fache der direkten Incident-Kosten erreichen.\n\n⚠️ Operationale Risiken unzureichender NIS2-Compliance:\n• Systemische Betriebsstörungen: Unkoordinierte Incident Response kann aus lokalisierten Problemen unternehmensweite Krisen machen.\n• Eskalation zu nationalen Sicherheitsrisiken: Bei kritischen Infrastrukturen können Incident Handling Versäumnisse zu staatlichen Interventionen und verschärfter Regulierung führen.\n• Verlust der operationalen Kontrolle: Ohne strukturierte Response-Prozesse können Notfallsituationen in Chaos ausarten, das Wochen zur Bewältigung benötigt.\n• Kompetenz- und Talentflucht: Professionelle Cybersecurity-Experten verlassen Organisationen, die ihre Expertise durch unzureichende Incident Handling Prozesse untergraben.\n\n📊 ADVISORIs quantitativer Risikobewertungsansatz:\n• ROI-Analyse für Incident Handling Investments: Wir berechnen konkrete Kosteneinsparungen durch professionelle Response-Capabilities versus potenzielle Schadenssummen.\n• Szenariobasierte Schadensprognosen: Entwicklung realistischer Incident-Szenarien mit quantifizierten finanziellen Auswirkungen für verschiedene Response-Qualitätsniveaus.\n• Compliance-Kosten-Optimierung: Berechnung der optimalen Balance zwischen Compliance-Investitionen und Risikominimierung für maximum Return on Security Investment."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie kann unser Unternehmen NIS2-Incident Handling als strategischen Enabler für digitale Transformation und operative Exzellenz nutzen?",
        answer: "NIS2-Incident Handling bietet eine einzigartige Gelegenheit, Cybersecurity-Investitionen als Katalysator für umfassende digitale Transformation und operative Exzellenz zu nutzen. Anstatt Incident Response als notwendiges Übel zu betrachten, können progressive Organisationen diese Capabilities als Grundlage für datengetriebene Entscheidungsfindung, automatisierte Operationen und resiliente Geschäftsmodelle verwenden.\n\n🚀 Strategische Transformation durch Incident Handling Excellence:\n• Datengetriebene Geschäftsintelligenz: Incident Handling generiert wertvolle Daten über Systemverhalten, Benutzeraktivitäten und Betriebsanomalien, die für prädiktive Analysen und Geschäftsoptimierung genutzt werden können.\n• Automatisierung als Competitive Advantage: Die für effektive Incident Response benötigten Automatisierungsplattformen können erweitert werden, um Routine-Geschäftsprozesse zu optimieren und operative Effizienz zu steigern.\n• Resilienz-Design als Innovationstreiber: Der für Cyber-Resilienz erforderliche Design-Thinking Ansatz fördert innovative Lösungen für traditionelle Geschäftsherausforderungen.\n• Stakeholder-Vertrauen als Wachstumshebel: Demonstrierte Cybersecurity-Excellence öffnet neue Geschäftsmöglichkeiten mit sicherheitsbewussten Partnern und Kunden.\n\n🔧 Operative Exzellenz durch integrierte Response-Systeme:\n• Process Mining und Optimierung: Incident Handling Tools bieten tiefe Einblicke in Geschäftsprozesse und identifizieren Optimierungspotenziale weit über Sicherheitsaspekte hinaus.\n• Echtzeit-Monitoring für Business Intelligence: Security Information and Event Management (SIEM) Systeme können erweitert werden, um kritische Geschäftsmetriken zu überwachen und Leistungsindikatoren zu verfolgen.\n• Cross-funktionale Team-Excellence: Die für effektive Incident Response erforderliche interdisziplinäre Zusammenarbeit verbessert die allgemeine Teamperformance und Kommunikationseffektivität.\n• Kontinuierliche Verbesserungskultur: Incident Response Lessons Learned Prozesse etablieren eine Kultur der kontinuierlichen Optimierung, die sich auf alle Geschäftsbereiche überträgt.\n\n💡 ADVISORIs transformativer Implementierungsansatz:\n• Strategische Technologie-Integration: Wir entwickeln Incident Handling Plattformen, die nahtlos in Ihre bestehende IT-Landschaft integrieren und als Grundlage für weitere Digitalisierungsinitiativen dienen.\n• Change Management für Kulturwandel: Etablierung einer Resilienz-Mentalität, die Mitarbeiter ermutigt, proaktiv Verbesserungen zu identifizieren und umzusetzen.\n• Skalierbare Architektur-Designs: Aufbau modularer, erweiterbarer Systeme, die mit Ihren Geschäftsanforderungen wachsen und neue Capabilities ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche strategischen Vorteile bietet eine proaktive NIS2-Incident Handling Strategie für unsere Marktposition und Stakeholder-Beziehungen?",
        answer: "Eine proaktive NIS2-Incident Handling Strategie transformiert Cybersecurity von einem Kostenverursacher zu einem strategischen Differentiator, der Marktvorteile schafft und Stakeholder-Beziehungen nachhaltig stärkt. In einer zunehmend digitalisierten Geschäftswelt wird operative Resilienz zu einem entscheidenden Wettbewerbsfaktor, der direkten Einfluss auf Marktbewertung, Kundenvertrauen und Partnerschaftsqualität hat.\n\n🎯 Marktpositionierung durch Cybersecurity Excellence:\n• Premium-Positionierung in sicherheitskritischen Märkten: Demonstrierte Incident Handling Excellence ermöglicht die Erschließung hochpreisiger Marktsegmente, in denen Sicherheit und Zuverlässigkeit Premiumwerte rechtfertigen.\n• Competitive Moat durch operative Resilienz: Während Wettbewerber bei Cyberangriffen mit wochenlangen Ausfällen kämpfen, ermöglicht robuste Incident Response die Aufrechterhaltung kritischer Services und Marktanteile.\n• Thought Leadership und Branchenführerschaft: Proaktive Cybersecurity-Praktiken positionieren Ihr Unternehmen als Innovationsführer und vertrauenswürdigen Partner in Ihrem Marktsegment.\n• Regulatorische Vorteile und Early Adopter Benefits: Frühzeitige NIS2-Compliance kann zu bevorzugter Behandlung durch Regulatoren und Zugang zu neuen Geschäftsmöglichkeiten führen.\n\n🤝 Stakeholder-Vertrauen als strategischer Asset:\n• Investoren und Rating-Agenturen: ESG-bewusste Investoren bewerten Cybersecurity-Resilienz zunehmend als kritischen Faktor für langfristige Unternehmenswerte und Risikobewertungen.\n• Kunden und Endverbraucher: In einer Zeit häufiger Datenschutzverletzungen wird nachweisbare Cybersecurity-Excellence zu einem entscheidenden Kaufkriterium und Loyalitätstreiber.\n• Geschäftspartner und Lieferanten: B2B-Partner fordern zunehmend Nachweise für robuste Cybersecurity-Praktiken als Voraussetzung für Geschäftsbeziehungen.\n• Mitarbeiter und Talentakquisition: Cybersecurity-Excellence signalisiert professionelle Arbeitsumgebungen und zieht Top-Talente an, die Sicherheit und Professionalität schätzen.\n\n💼 Geschäftswert-Generierung durch strategisches Incident Handling:\n• Versicherungsoptimierung: Nachweisliche Incident Handling Excellence führt zu signifikant reduzierten Cyber-Versicherungsprämien und besseren Konditionen.\n• Partnerschafts- und M&A-Vorteile: Robuste Cybersecurity-Capabilities erhöhen den Unternehmenswert bei Transaktionen und machen das Unternehmen zu einem attraktiveren Partner.\n• Regulatorische Relationship Management: Proaktive Compliance-Haltung führt zu konstruktiven Beziehungen mit Aufsichtsbehörden und kann regulatorische Vorteile schaffen.\n• Innovation und neue Geschäftsmodelle: Die für fortschrittliches Incident Handling entwickelten Capabilities können in neue, cybersecurity-fokussierte Geschäftsmodelle und Services münden."
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
