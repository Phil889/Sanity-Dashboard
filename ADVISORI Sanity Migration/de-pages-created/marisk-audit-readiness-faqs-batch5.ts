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
    console.log('Updating MaRisk Audit Readiness page with FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'marisk-audit-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "marisk-audit-readiness" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können Finanzinstitute Prüfungen als strategische Chance zur Organisationsentwicklung nutzen?",
        answer: "MaRisk-Prüfungen werden oft primär als regulatorische Pflichtübung oder gar als Belastung wahrgenommen. Weitsichtige Institute erkennen jedoch die strategische Chance, die in einer fundierten Prüfung liegt: Sie bietet einen strukturierten Anlass zur Analyse und Optimierung der organisationalen Fähigkeiten und kann als Katalysator für nachhaltige Verbesserungen dienen.\n\n🔍 Strategische Mehrwertdimensionen von Prüfungen:\n• Unabhängige Expertise und Perspektive: Nutzung der externen Prüfungsperspektive als wertvolle Außensicht, die blinde Flecken und Betriebsblindheit überwinden kann - vergleichbar mit einem hochspezialisierten Beratungsmandat, jedoch ohne direktes Honorar.\n• Priorisierungshilfe für Verbesserungsinitiativen: Verwendung von Prüfungsergebnissen als objektive Basis für die Ressourcenallokation und Priorisierung von Optimierungsprojekten gegenüber dem Management und anderen Stakeholdern.\n• Organisationales Lernen und Kompetenzaufbau: Betrachtung jeder Prüfung als Lernchance für die beteiligten Mitarbeiter, die ihr Verständnis regulatorischer Anforderungen und Compliance-Best-Practices vertiefen können.\n• Kultureller Veränderungstreiber: Nutzung des Fokus, den Prüfungen auf bestimmte Themen lenken, um breitere kulturelle Veränderungen in Richtung höherer Compliance-Sensibilität und Risikobewusstsein zu katalysieren.\n\n🚀 Praktische Ansätze zur strategischen Nutzung:\n• Strukturiertes Post-Audit Enhancement Program: Entwicklung eines systematischen Programms, das über die reine Behebung von Feststellungen hinausgeht und identifizierte Schwachstellen zum Ausgangspunkt umfassenderer Verbesserungsinitiativen macht.\n• Cross-funktionale Excellence-Teams: Bildung bereichsübergreifender Arbeitsgruppen, die tiefergehende Ursachen wiederkehrender Feststellungen analysieren und ganzheitliche Lösungskonzepte entwickeln, statt isolierter Maßnahmen in einzelnen Bereichen.\n• Systematisches Benchmarking: Ableitung von Best Practices und Reifegradvergleichen aus Prüfungsergebnissen, um nicht nur Mindestanforderungen zu erfüllen, sondern gezielt zu Vorreitern in bestimmten Compliance-Bereichen zu werden.\n• Strategisches Feststellungsportfoliomanagement: Entwicklung eines portfoliobasierten Ansatzes zur Maßnahmenpriorisierung, der Quick Wins, strukturelle Verbesserungen und langfristige Transformationsinitiativen in einer ausgewogenen Roadmap kombiniert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Ansätze haben sich bei der Vorbereitung auf MaRisk-Prüfungen für international tätige Bankengruppen als besonders effektiv erwiesen?",
        answer: "International tätige Bankengruppen stehen bei MaRisk-Prüfungen vor besonderen Herausforderungen durch die Komplexität ihrer Strukturen, die Vielfalt regulatorischer Anforderungen in verschiedenen Jurisdiktionen und die kulturelle sowie organisatorische Diversität. Eine effektive Prüfungsvorbereitung muss diese Komplexität gezielt adressieren und gleichzeitig gruppenweite Synergiepotenziale erschließen.\n\n🌐 Strategische Erfolgsfaktoren für internationale Bankengruppen:\n• Regulatorische Kartographie: Systematische Erfassung und Analyse der verschiedenen aufsichtlichen Anforderungen in relevanten Jurisdiktionen sowie Identifikation von Gemeinsamkeiten, Unterschieden und potenziellen Konflikten als Basis für eine effiziente Compliance-Architektur.\n• Harmonisierte Basis mit lokaler Flexibilität: Entwicklung eines gruppenweiten Grundgerüsts für MaRisk-Compliance und Prüfungsvorbereitung, das gemeinsame Standards sicherstellt, aber ausreichend Flexibilität für lokale regulatorische Besonderheiten bietet.\n• Governance mit klaren Verantwortlichkeiten: Etablierung transparenter Governance-Strukturen mit eindeutiger Zuordnung von Verantwortlichkeiten zwischen Gruppen- und lokalen Einheiten sowie Eskalationswegen für grenzüberschreitende Compliance-Themen.\n• Wissenstransfer und -management: Systematische Erfassung, Aufbereitung und Bereitstellung von Prüfungserfahrungen und Best Practices aus verschiedenen Landesgesellschaften, um voneinander zu lernen und Erfolgsmuster zu replizieren.\n\n🛠️ Praktische Implementierungsansätze:\n• Group Audit Coordination Office: Etablierung einer zentralen Koordinationsstelle, die länderübergreifende Prüfungen orchestriert, Standards setzt, Best Practices identifiziert und als Wissensdrehscheibe zwischen verschiedenen Einheiten fungiert.\n• Globale Prüfungs-Community: Aufbau eines internationalen Netzwerks von Prüfungskoordinatoren und Compliance-Spezialisten, die regelmäßig Erfahrungen austauschen, gemeinsame Herausforderungen diskutieren und kollaborativ Lösungen entwickeln.\n• Standardisierte Toolkits mit lokaler Anpassung: Entwicklung modularer Prüfungsvorbereitungs-Toolkits mit Kernkomponenten, die gruppenweiten Standards entsprechen, und flexiblen Modulen, die für lokale regulatorische Anforderungen angepasst werden können.\n• Cross-Border Mock Audits: Durchführung gruppeninterner Probe-Prüfungen mit Teams aus verschiedenen Landesgesellschaften, um den Wissensaustausch zu fördern, blinde Flecken zu identifizieren und kulturelle Unterschiede in der Prüfungsherangehensweise zu überbrücken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie entwickeln sich die aufsichtlichen Erwartungen an die MaRisk-Prüfungsbereitschaft und wie können Institute proaktiv darauf reagieren?",
        answer: "Die aufsichtlichen Erwartungen an die MaRisk-Prüfungsbereitschaft unterliegen einer kontinuierlichen Evolution, getrieben durch regulatorische Entwicklungen, technologischen Fortschritt und sich wandelnde Risikoprofile. Institute, die diese Trends frühzeitig erkennen und proaktiv adressieren, können nicht nur regulatorische Risiken minimieren, sondern auch Wettbewerbsvorteile durch effizientere Compliance-Prozesse erzielen.\n\n📈 Zentrale Entwicklungstrends aufsichtlicher Erwartungen:\n• Datenzentrierter Nachweisfokus: Zunehmende Erwartung an quantitative, datenbasierte Nachweise der MaRisk-Compliance anstelle rein qualitativer, konzeptioneller Darstellungen, mit steigenden Anforderungen an Datenqualität, -vollständigkeit und -konsistenz.\n• Integrierte Gesamtsicht: Verstärkter Fokus auf die Kohärenz und Wechselwirkungen zwischen verschiedenen Compliance-Bereichen und Risikodimensionen, statt isolierter Bewertung einzelner MaRisk-Anforderungen.\n• Erhöhte Automatisierungserwartungen: Wachsende Anforderungen an den Automatisierungsgrad von Kontrollen, Überwachungsprozessen und Nachweisführung, mit kritischerer Betrachtung manueller Prozesse und Excel-basierter Lösungen.\n• Governance und Kultur: Stärkere Betonung der Rolle von Governance-Strukturen, Managementprozessen und Unternehmenskultur für eine wirksame MaRisk-Compliance, jenseits formaler Dokumentationen und Prozesse.\n\n⚡ Proaktive Strategien zur Antizipation aufsichtlicher Erwartungen:\n• Regulatory Horizon Scanning: Etablierung systematischer Prozesse zur frühzeitigen Identifikation und Analyse aufsichtlicher Trends durch aktives Monitoring von Konsultationspapieren, Prüfungsschwerpunkten und Fachveröffentlichungen.\n• Aufsichtlicher Dialog: Proaktive Teilnahme an Diskussionen mit Aufsichtsbehörden, Branchenverbänden und Fachgremien, um Einblick in sich entwickelnde Erwartungen zu gewinnen und eigene Perspektiven einzubringen.\n• Benchmark-Analysen: Regelmäßiger Austausch und Vergleich mit Peer-Instituten zu Prüfungserfahrungen, aufsichtlichen Schwerpunkten und Compliance-Ansätzen, um Marktstandards zu identifizieren und Best Practices zu adaptieren.\n• Übererfüllung in strategischen Bereichen: Gezielte Investition in fortschrittliche Lösungen für Bereiche mit hoher aufsichtlicher Aufmerksamkeit oder zunehmendem Risikopotenzial, um einen Vorsprung gegenüber steigenden Erwartungen zu gewinnen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können Finanzinstitute die Qualität und Konsistenz ihrer MaRisk-Prüfungsvorbereitung über verschiedene Organisationseinheiten und Themengebiete hinweg sicherstellen?",
        answer: "Die Sicherstellung von Qualität und Konsistenz in der MaRisk-Prüfungsvorbereitung über verschiedene Organisationseinheiten und Themengebiete hinweg ist eine komplexe Herausforderung. Inkonsistenzen in Ansatz, Methodik oder Dokumentationsstandards können nicht nur die Prüfungseffizienz beeinträchtigen, sondern auch zu unterschiedlichen Bewertungen ähnlicher Sachverhalte führen und das Gesamtbild des Instituts gegenüber Prüfern negativ beeinflussen.\n\n📋 Strategische Ansätze für konsistente Prüfungsqualität:\n• Übergreifendes Qualitätsmanagementframework: Entwicklung eines institutsweiten Rahmens für die Prüfungsvorbereitung mit klaren Qualitätsstandards, Prozessen und Verantwortlichkeiten, der als verbindliche Referenz für alle Bereiche dient.\n• Standardisierte Methodik und Werkzeuge: Etablierung einheitlicher Vorgehensweisen, Templates und Tools für die Prüfungsvorbereitung, die durchgängig in allen Organisationseinheiten angewendet werden und konsistente Ergebnisse fördern.\n• Zentrales Qualitätsmanagement mit dezentraler Umsetzung: Kombination einer zentralen Qualitätssicherungsfunktion, die Standards setzt und überwacht, mit dezentraler Verantwortung für die Umsetzung in den Fachbereichen.\n• Cross-funktionale Qualitätsreviews: Implementation eines Peer-Review-Prozesses, bei dem Fachbereiche gegenseitig ihre Prüfungsvorbereitungen begutachten, um Konsistenz zu fördern und Best Practices zu teilen.\n\n🔄 Praktische Implementierungsansätze:\n• Audit Readiness Competence Center: Etablierung eines zentralen Kompetenzzentrums, das Qualitätsstandards entwickelt, Schulungen durchführt, Beratung anbietet und als Wissensdrehscheibe für die Prüfungsvorbereitung fungiert.\n• MaRisk-Koordinatoren-Netzwerk: Aufbau eines strukturierten Netzwerks dezentraler MaRisk-Koordinatoren in allen relevanten Organisationseinheiten, die als Multiplikatoren für Qualitätsstandards und als Frühwarnsystem für Qualitätsprobleme dienen.\n• Mehrstufige Qualitätssicherungsprozesse: Implementierung eines mehrschichtigen Review-Verfahrens für prüfungsrelevante Dokumente und Nachweise, das sowohl fachliche Korrektheit als auch Konformität mit institutsweit einheitlichen Standards sicherstellt.\n• Gemeinsame Qualifizierungsprogramme: Durchführung bereichsübergreifender Schulungs- und Entwicklungsmaßnahmen für alle an der Prüfungsvorbereitung beteiligten Mitarbeiter, um ein einheitliches Verständnis von Qualitätsstandards und Methoden zu fördern."
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
