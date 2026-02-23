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
    console.log('Updating DORA Anwendungsbereich page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-anwendungsbereich-scope' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-anwendungsbereich-scope" not found')
    }
    
    // Create new FAQs for DORA scope fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche Finanzinstitute fallen unter den DORA-Anwendungsbereich und wie bestimme ich die Klassifizierung meiner Organisation?',
        answer: "Der DORA-Anwendungsbereich ist bewusst umfassend gestaltet und erfasst praktisch alle Akteure des europäischen Finanzsektors. Die präzise Klassifizierung Ihrer Organisation ist entscheidend für die Bestimmung der spezifischen Compliance-Anforderungen und bildet das Fundament Ihrer gesamten DORA-Strategie.\n\n🏦 Erfasste Finanzinstitute nach DORA:\n• Kreditinstitute gemäß CRR (Capital Requirements Regulation) einschließlich aller Banken, Sparkassen und Genossenschaftsbanken unabhängig von ihrer Größe\n• Versicherungs- und Rückversicherungsunternehmen nach Solvency II, einschließlich kleiner Versicherungsvereine auf Gegenseitigkeit\n• Wertpapierfirmen und Investmentfirmen nach MiFID II, von großen Investmentbanken bis hin zu kleinen Vermögensverwaltern\n• Zentrale Gegenparteien (CCPs) und Zentralverwahrer (CSDs) als kritische Marktinfrastrukturen\n• Handelsplätze einschließlich regulierter Märkte, multilateraler Handelssysteme und organisierter Handelssysteme\n\n💰 Krypto-Asset-Sektor und neue Akteure:\n• Krypto-Asset-Dienstleister nach der Markets in Crypto-Assets Regulation (MiCA)\n• E-Geld-Institute und Zahlungsinstitute nach der Payment Services Directive\n• Crowdfunding-Dienstleister und alternative Investmentfonds-Manager\n• Ratingagenturen und Handelsregisterführer als unterstützende Finanzdienstleister\n• Versicherungsvermittler und Pensionseinrichtungen mit bestimmten Schwellenwerten\n\n🔍 Klassifizierungsmethodik und Schwellenwerte:\n• Die Klassifizierung erfolgt primär nach der regulatorischen Lizenz und den ausgeübten Geschäftstätigkeiten, nicht nach der Unternehmensgröße\n• Bestimmte Schwellenwerte gelten nur für spezifische Kategorien wie kleine Versicherungsunternehmen oder kleinere Zahlungsinstitute\n• Grenzüberschreitende Aktivitäten können zusätzliche Klassifizierungsebenen schaffen\n• Die Zugehörigkeit zu einer Finanzgruppe kann erweiterte Anforderungen auslösen\n\n📋 Praktische Klassifizierungsschritte:\n• Systematische Analyse aller regulatorischen Lizenzen und Genehmigungen Ihrer Organisation\n• Bewertung der tatsächlich ausgeübten Geschäftstätigkeiten und deren regulatorische Einordnung\n• Prüfung von Schwellenwerten und Ausnahmetatbeständen für Ihre spezifische Situation\n• Berücksichtigung von Konzernstrukturen und deren Auswirkungen auf die DORA-Anwendbarkeit\n• Dokumentation der Klassifizierungsentscheidung mit rechtlicher Begründung für Aufsichtszwecke"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie wirkt sich DORA auf Tochtergesellschaften und internationale Konzernstrukturen aus?',
        answer: "DORA verfolgt einen konzernweiten Ansatz, der erhebliche Auswirkungen auf die Governance und das Risikomanagement internationaler Finanzgruppen hat. Die Regulierung erkennt die Realität moderner Finanzdienstleistungen an, bei denen operative Resilienz oft konzernweit koordiniert werden muss, um effektiv zu sein.\n\n🌍 Konzernweite Anwendung und Koordination:\n• DORA gilt für alle EU-Tochtergesellschaften von Finanzinstituten, unabhängig vom Sitz der Muttergesellschaft\n• Drittlandstöchter europäischer Finanzgruppen können indirekt durch Konzernrichtlinien und -standards betroffen sein\n• Die Regulierung fordert eine koordinierte Herangehensweise an IKT-Risikomanagement auf Konzernebene\n• Zentrale IKT-Funktionen und -Services müssen konzernweit unter DORA-Gesichtspunkten bewertet werden\n• Shared Services und konzernweite Technologieplattformen erfordern besondere Aufmerksamkeit\n\n🏢 Governance-Strukturen und Verantwortlichkeiten:\n• Die Geschäftsleitung jeder DORA-pflichtigen Entität trägt die ultimative Verantwortung für die Compliance\n• Konzernweite IKT-Governance-Frameworks müssen lokale regulatorische Anforderungen berücksichtigen\n• Delegation von IKT-Funktionen innerhalb des Konzerns unterliegt spezifischen DORA-Anforderungen\n• Berichtswege und Eskalationsprozesse müssen sowohl konzernweite als auch lokale Perspektiven integrieren\n• Aufsichtsräte und Verwaltungsräte benötigen angemessene Expertise für IKT-Risiko-Oversight\n\n🔗 Drittanbieter-Management in Konzernstrukturen:\n• Konzernweite Drittanbieter-Verträge müssen auf Compliance aller betroffenen Entitäten geprüft werden\n• Kritische IKT-Drittanbieter können unterschiedliche Auswirkungen auf verschiedene Konzerngesellschaften haben\n• Intra-Konzern-Services zwischen verschiedenen Jurisdiktionen erfordern spezielle Bewertung\n• Zentrale Beschaffung von IKT-Services muss lokale DORA-Anforderungen aller Tochtergesellschaften berücksichtigen\n• Exit-Strategien und Kontinuitätspläne müssen konzernweit koordiniert werden\n\n📊 Praktische Umsetzungsherausforderungen:\n• Harmonisierung unterschiedlicher nationaler Implementierungen von DORA in verschiedenen EU-Mitgliedstaaten\n• Koordination mit bestehenden lokalen IKT-Regulierungen und Aufsichtspraktiken\n• Management von Datenschutz- und Datenlokalisierungsanforderungen bei konzernweiten IKT-Systemen\n• Berücksichtigung unterschiedlicher Geschäftsmodelle und Risikoprofile verschiedener Konzerngesellschaften\n• Entwicklung einheitlicher Standards bei gleichzeitiger Flexibilität für lokale Besonderheiten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Was bedeutet die Einbeziehung kritischer IKT-Drittanbieter in den DORA-Scope für mein Unternehmen?',
        answer: "Die Einbeziehung kritischer IKT-Drittanbieter in den DORA-Scope stellt eine der bedeutendsten Neuerungen der Regulierung dar und erweitert den traditionellen Fokus auf Finanzinstitute erheblich. Diese Erweiterung schafft ein umfassendes Ökosystem der digitalen operationellen Resilienz, das weit über die direkten regulatorischen Grenzen hinausgeht.\n\n🎯 Definition und Identifikation kritischer IKT-Drittanbieter:\n• Kritische IKT-Drittanbieter sind Unternehmen, die IKT-Services für Finanzinstitute erbringen und dabei systemische Bedeutung für den Finanzsektor haben\n• Die Kritikalität wird anhand von Faktoren wie Systemrelevanz, Substituierbarkeit, Komplexität der Services und Anzahl der abhängigen Finanzinstitute bestimmt\n• Cloud-Service-Provider, Rechenzentrumsanbieter, Software-Entwickler und Datenverarbeitungsdienstleister können als kritisch eingestuft werden\n• Die Designation erfolgt durch die europäischen Aufsichtsbehörden basierend auf quantitativen und qualitativen Kriterien\n• Auch Subunternehmer kritischer Drittanbieter können in bestimmten Fällen erfasst werden\n\n🔍 Direkte Aufsicht und Compliance-Anforderungen:\n• Kritische IKT-Drittanbieter unterliegen direkter Aufsicht durch europäische Behörden, nicht nur indirekter Überwachung\n• Sie müssen eigene Governance-Strukturen, Risikomanagement-Frameworks und Incident-Response-Prozesse implementieren\n• Regelmäßige Audits, Penetrationstests und Resilienz-Assessments werden verpflichtend\n• Umfassende Berichtspflichten gegenüber Aufsichtsbehörden über Services, Risiken und Incidents\n• Verpflichtung zur Kooperation mit Finanzinstituten bei deren DORA-Compliance-Bemühungen\n\n💼 Auswirkungen auf Finanzinstitute:\n• Erweiterte Due-Diligence-Anforderungen bei der Auswahl und Überwachung von IKT-Drittanbietern\n• Notwendigkeit zur Bewertung, ob ein Drittanbieter als kritisch eingestuft werden könnte\n• Anpassung von Vertragsstrukturen zur Berücksichtigung der DORA-Anforderungen beider Parteien\n• Verstärkte Koordination mit Drittanbietern bei Incident-Management und Business-Continuity-Planung\n• Mögliche Änderungen in Preisstrukturen und Service-Levels aufgrund zusätzlicher Compliance-Kosten\n\n🌐 Strategische Implikationen für das Drittanbieter-Ökosystem:\n• Potenzielle Marktkonsolidierung, da kleinere Anbieter möglicherweise die Compliance-Kosten nicht tragen können\n• Erhöhte Transparenz und Standardisierung von IKT-Services im Finanzsektor\n• Mögliche Entwicklung spezialisierter DORA-konformer Service-Angebote\n• Verstärkte Fokussierung auf europäische oder DORA-konforme Drittanbieter\n• Notwendigkeit für Drittanbieter, ihre Geschäftsmodelle und Risikomanagement-Praktiken zu überdenken"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie unterscheidet sich der DORA-Scope von anderen regulatorischen Frameworks und welche Überschneidungen gibt es?',
        answer: "DORA schafft einen einheitlichen europäischen Rahmen für digitale operationelle Resilienz, der sich sowohl von bestehenden sektorspezifischen Regulierungen als auch von allgemeinen Cybersecurity-Frameworks unterscheidet. Das Verständnis dieser Unterschiede und Überschneidungen ist entscheidend für eine effiziente Compliance-Strategie.\n\n🔄 Verhältnis zu bestehenden Finanzregulierungen:\n• DORA ergänzt und harmonisiert bestehende IKT-Anforderungen in CRD, Solvency II, MiFID II und anderen sektorspezifischen Regulierungen\n• Bestehende nationale IKT-Regulierungen werden durch DORA ersetzt oder müssen angepasst werden\n• DORA schafft erstmals einen sektorübergreifenden Standard für alle Finanzdienstleister in der EU\n• Die Regulierung integriert Elemente aus verschiedenen bestehenden Frameworks in einen kohärenten Ansatz\n• Spezifische Anforderungen für Drittanbieter-Risikomanagement gehen über bisherige Regulierungen hinaus\n\n🛡️ Abgrenzung zur NIS2-Richtlinie:\n• NIS2 fokussiert auf kritische Infrastrukturen und wesentliche Dienste, während DORA spezifisch auf Finanzdienstleistungen ausgerichtet ist\n• DORA hat strengere und detailliertere Anforderungen für Incident-Reporting und Drittanbieter-Management\n• Während NIS2 einen risikobasierten Ansatz verfolgt, definiert DORA spezifische Mindeststandards\n• Finanzinstitute können sowohl unter DORA als auch NIS2 fallen, müssen aber primär DORA-Anforderungen erfüllen\n• Die Koordination zwischen DORA- und NIS2-Compliance erfordert sorgfältige Planung\n\n📋 Integration mit Cybersecurity-Standards:\n• DORA ist kompatibel mit etablierten Standards wie ISO 27001, NIST Cybersecurity Framework und COBIT\n• Die Regulierung definiert jedoch spezifische Anforderungen, die über allgemeine Cybersecurity-Standards hinausgehen\n• Bestehende Cybersecurity-Investitionen können als Grundlage für DORA-Compliance dienen\n• DORA erfordert jedoch zusätzliche finanzspezifische Kontrollen und Berichtsmechanismen\n• Die Integration verschiedener Frameworks erfordert eine strategische Herangehensweise\n\n🌍 Internationale Regulierungslandschaft:\n• DORA unterscheidet sich von ähnlichen Initiativen in anderen Jurisdiktionen wie dem US-amerikanischen Cybersecurity Framework\n• Die Extraterritorialität von DORA kann Auswirkungen auf globale Finanzinstitute haben\n• Koordination mit lokalen Regulierungen in Drittländern wird für internationale Konzerne erforderlich\n• DORA könnte als Modell für ähnliche Regulierungen in anderen Regionen dienen\n• Die Harmonisierung mit internationalen Standards bleibt eine wichtige Überlegung für global tätige Institute"
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
    console.log('✅ FAQ batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
