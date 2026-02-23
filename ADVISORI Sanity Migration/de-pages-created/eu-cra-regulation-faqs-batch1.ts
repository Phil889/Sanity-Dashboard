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
    console.log('Updating EU CRA Regulation page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-cra-regulation' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-cra-regulation" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche strategischen Auswirkungen hat die EU Cyber Resilience Act auf unsere Produktstrategie und wie können wir diese als Wettbewerbsvorteil nutzen?',
        answer: "Die EU Cyber Resilience Act (CRA) stellt einen fundamentalen Paradigmenwechsel in der europäischen Produktregulierung dar und bietet Unternehmen die Chance, Cybersicherheit von einer Compliance-Anforderung zu einem strategischen Differenzierungsmerkmal zu transformieren. Für vorausschauende Unternehmen eröffnet die CRA die Möglichkeit, durch proaktive Implementierung höchster Sicherheitsstandards Marktführerschaft zu etablieren und nachhaltiges Vertrauen bei Kunden und Partnern aufzubauen.\n\n🎯 Strategische Transformation der Produktentwicklung:\n• Die CRA erfordert eine grundlegende Neuausrichtung der Produktentwicklung hin zu Security-by-Design Prinzipien, wodurch Sicherheit nicht mehr nachträglich implementiert, sondern von Beginn an in die DNA des Produkts eingebettet wird.\n• Unternehmen müssen ihre gesamte Produktarchitektur überdenken und dabei Cybersicherheit als integralen Bestandteil der Wertschöpfung verstehen, nicht als Kostenfaktor.\n• Die Verordnung schafft klare Marktdifferenzierung zwischen Unternehmen, die proaktiv höchste Sicherheitsstandards implementieren, und solchen, die lediglich Mindestanforderungen erfüllen.\n• Durch die Etablierung robuster Schwachstellenmanagement-Prozesse und kontinuierlicher Sicherheitsupdates können Unternehmen langfristige Kundenbeziehungen aufbauen und Produktlebenszyklen verlängern.\n\n🏆 Wettbewerbsvorteile durch CRA-Excellence:\n• Frühe CRA-Compliance ermöglicht es, als vertrauenswürdiger Partner in kritischen Infrastrukturen und sensiblen Anwendungsbereichen wahrgenommen zu werden.\n• Die Implementierung von CRA-Standards kann als Qualitätsmerkmal in der Marktpositionierung genutzt werden und Premium-Pricing rechtfertigen.\n• Unternehmen mit nachweislicher CRA-Compliance haben bessere Chancen bei öffentlichen Ausschreibungen und Unternehmenspartnerschaften.\n• Die durch CRA-Prozesse geschaffene Transparenz und Dokumentation stärkt das Vertrauen von Investoren und kann die Unternehmensbewertung positiv beeinflussen.\n\n💡 Strategische Implementierungsansätze:\n• Entwicklung einer CRA-Roadmap, die über Mindestanforderungen hinausgeht und Best-Practice-Standards etabliert.\n• Integration von CRA-Anforderungen in bestehende Qualitätsmanagement- und Entwicklungsprozesse zur Effizienzsteigerung.\n• Aufbau interner Expertise und Kompetenzzentren für Cybersicherheit als strategische Ressource.\n• Nutzung der CRA-Implementierung als Katalysator für digitale Transformation und Prozessoptimierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie bewerten wir die Kosten-Nutzen-Relation einer CRA-Implementierung und welche ROI-Metriken sind für die Geschäftsführung relevant?',
        answer: "Die Investition in CRA-Compliance sollte nicht isoliert als Compliance-Kostenstelle betrachtet werden, sondern als strategische Investition in die langfristige Wettbewerbsfähigkeit und Marktposition des Unternehmens. Eine fundierte ROI-Bewertung berücksichtigt sowohl direkte finanzielle Auswirkungen als auch indirekte Werttreiber, die sich über mehrere Geschäftsjahre manifestieren.\n\n💰 Direkte finanzielle Auswirkungen und Kostenvermeidung:\n• Vermeidung von Bußgeldern und Sanktionen durch Non-Compliance, die bis zu mehreren Millionen Euro betragen können, abhängig von Unternehmensgröße und Schwere der Verstöße.\n• Reduktion von Produktrückrufkosten und Haftungsrisiken durch proaktive Sicherheitsmaßnahmen und kontinuierliche Überwachung.\n• Senkung von Cyber-Versicherungsprämien durch nachweisbare Sicherheitsmaßnahmen und Risikominimierung.\n• Vermeidung von Umsatzverlusten durch Produktionsausfälle oder Marktausschluss bei Non-Compliance.\n• Optimierung von Entwicklungskosten durch integrierte Security-by-Design Ansätze, die nachträgliche Sicherheitsnachrüstungen vermeiden.\n\n📈 Indirekte Werttreiber und strategische Vorteile:\n• Erhöhung der Marktakzeptanz und Kundenzufriedenheit durch demonstrierte Sicherheitsexzellenz, was zu höheren Verkaufspreisen und Marktanteilen führen kann.\n• Verbesserung der Verhandlungsposition bei Partnerschaften und Lieferantenverträgen durch nachweisbare Sicherheitsstandards.\n• Stärkung der Markenreputation und des Unternehmensimages als vertrauenswürdiger Technologieanbieter.\n• Erschließung neuer Marktsegmente und Kundengruppen, die hohe Sicherheitsanforderungen haben.\n• Verbesserung der Mitarbeiterproduktivität durch robuste und zuverlässige Systeme.\n\n🎯 Relevante ROI-Metriken für die Geschäftsführung:\n• Time-to-Market Verbesserung durch streamlined Security-Prozesse und reduzierte Nacharbeiten.\n• Kundenbindungsrate und Customer Lifetime Value Steigerung durch erhöhtes Vertrauen.\n• Marktanteilsgewinne in sicherheitskritischen Segmenten und deren Umsatzauswirkungen.\n• Reduktion von Support- und Wartungskosten durch proaktive Sicherheitsmaßnahmen.\n• Verbesserung der Operational Excellence Kennzahlen durch integrierte Sicherheitsprozesse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche organisatorischen Veränderungen sind für eine erfolgreiche CRA-Implementierung erforderlich und wie managen wir den Change-Prozess?',
        answer: "Die erfolgreiche Implementierung der CRA erfordert eine tiefgreifende organisatorische Transformation, die weit über technische Anpassungen hinausgeht. Es geht um die Etablierung einer sicherheitszentrierten Unternehmenskultur, die Integration neuer Governance-Strukturen und die Entwicklung cross-funktionaler Kompetenzen. Ein strategisch geplanter Change-Management-Prozess ist entscheidend für den nachhaltigen Erfolg der CRA-Transformation.\n\n🏗️ Strukturelle Organisationsveränderungen:\n• Etablierung einer zentralen CRA-Governance-Struktur mit klaren Verantwortlichkeiten und Entscheidungsbefugnissen, die direkt an die Geschäftsführung berichtet.\n• Integration von Cybersicherheitsexperten in alle relevanten Geschäftsbereiche, von der Produktentwicklung über das Qualitätsmanagement bis hin zum Vertrieb.\n• Schaffung cross-funktionaler Teams, die technische, rechtliche und geschäftliche Aspekte der CRA-Compliance koordinieren.\n• Implementierung neuer Rollen wie CRA-Compliance-Manager, Security-by-Design-Architekten und Incident-Response-Koordinatoren.\n• Anpassung bestehender Prozesse in Entwicklung, Produktion, Vertrieb und Kundenservice zur Integration von CRA-Anforderungen.\n\n🔄 Change-Management-Strategien für nachhaltige Transformation:\n• Entwicklung einer umfassenden Change-Vision, die CRA-Compliance als strategischen Enabler für Geschäftswachstum positioniert, nicht als regulatorische Belastung.\n• Implementierung eines mehrstufigen Kommunikationsplans, der alle Stakeholder über die Bedeutung, Vorteile und Auswirkungen der CRA-Transformation informiert.\n• Etablierung von Change-Champions in allen Geschäftsbereichen, die als Multiplikatoren und Unterstützer der Transformation fungieren.\n• Schaffung von Quick-Wins und sichtbaren Erfolgen in der frühen Implementierungsphase, um Momentum und Akzeptanz zu schaffen.\n• Kontinuierliche Messung und Kommunikation des Transformationsfortschritts durch KPIs und Erfolgsgeschichten.\n\n🎓 Kompetenzentwicklung und Kulturwandel:\n• Implementierung umfassender Schulungsprogramme für alle Mitarbeiter, von Awareness-Training bis hin zu spezialisierten technischen Qualifikationen.\n• Entwicklung interner Expertise durch gezielte Weiterbildung und externe Partnerschaften mit Cybersicherheitsexperten.\n• Integration von CRA-Anforderungen in Leistungsbewertungen und Anreizsysteme zur Förderung der gewünschten Verhaltensänderungen.\n• Schaffung einer Lernkultur, die kontinuierliche Verbesserung und proaktive Sicherheitsmaßnahmen belohnt.\n• Etablierung regelmäßiger Reviews und Anpassungen der organisatorischen Strukturen basierend auf Erfahrungen und sich ändernden Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie können wir die CRA-Compliance in unsere bestehende Risikomanagement-Strategie integrieren und welche neuen Risikodimensionen müssen berücksichtigt werden?',
        answer: "Die Integration der CRA-Compliance in bestehende Risikomanagement-Frameworks erfordert eine holistische Betrachtung neuer Risikodimensionen und die Entwicklung adaptiver Governance-Strukturen. Die CRA führt nicht nur neue technische Risiken ein, sondern schafft auch komplexe Interdependenzen zwischen Cybersicherheit, Compliance, Reputation und Geschäftskontinuität, die eine integrierte Risikomanagement-Strategie erfordern.\n\n🎯 Integration in bestehende Risikomanagement-Frameworks:\n• Erweiterung der Risikotaxonomie um CRA-spezifische Risikokategorien wie Produktsicherheitsrisiken, Compliance-Risiken, Schwachstellenmanagement-Risiken und Incident-Response-Risiken.\n• Anpassung bestehender Risikobewertungsmethoden zur Berücksichtigung der dynamischen Natur von Cybersicherheitsrisiken und deren Auswirkungen auf Produktlebenszyklen.\n• Integration von CRA-Risiken in die strategische Unternehmensplanung und Investitionsentscheidungen zur Sicherstellung angemessener Ressourcenallokation.\n• Entwicklung von Risiko-Appetit-Statements, die spezifisch auf CRA-Anforderungen und Geschäftsziele abgestimmt sind.\n• Etablierung von Eskalationspfaden und Entscheidungsprozessen für CRA-bezogene Risikosituationen.\n\n⚠️ Neue Risikodimensionen durch die CRA:\n• Produkthaftungsrisiken durch unzureichende Cybersicherheitsmaßnahmen, die zu Schäden bei Endnutzern oder kritischen Infrastrukturen führen können.\n• Supply-Chain-Risiken durch die Notwendigkeit, die Cybersicherheit der gesamten Lieferkette zu überwachen und zu gewährleisten.\n• Reputationsrisiken durch öffentliche Sicherheitsvorfälle oder Non-Compliance-Situationen, die das Markenimage nachhaltig schädigen können.\n• Technologische Obsoleszenz-Risiken durch die Notwendigkeit kontinuierlicher Sicherheitsupdates und die Gefahr veralteter Systeme.\n• Regulatorische Änderungsrisiken durch die Dynamik der Cybersicherheitslandschaft und mögliche Anpassungen der CRA-Anforderungen.\n\n🛡️ Adaptive Risikomanagement-Strategien:\n• Implementierung kontinuierlicher Risikobewertungsprozesse, die sich an die schnell verändernde Bedrohungslandschaft anpassen können.\n• Entwicklung von Szenario-basierten Risikobewertungen, die verschiedene Cyber-Bedrohungen und deren potenzielle Auswirkungen auf das Geschäft simulieren.\n• Etablierung von Real-time-Monitoring-Systemen für kritische Risikoindikatoren und automatisierte Alerting-Mechanismen.\n• Integration von Threat Intelligence und externen Risikodaten in interne Risikobewertungsprozesse.\n• Entwicklung von Business Continuity Plänen, die spezifisch auf CRA-bezogene Störungen und Compliance-Verletzungen ausgerichtet sind."
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
