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
    console.log('Updating CRA Verordnung page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-verordnung' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-verordnung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Wie unterscheidet sich die deutsche CRA Verordnung von der EU-Grundverordnung und welche spezifischen nationalen Anforderungen müssen wir berücksichtigen?',
        answer: "Die deutsche Umsetzung der CRA Verordnung bringt spezifische nationale Interpretationen und zusätzliche Anforderungen mit sich, die über die EU-Mindeststandards hinausgehen. Diese nationalen Besonderheiten resultieren aus der Integration in das bestehende deutsche Rechtssystem und spiegeln die deutsche Regulierungsphilosophie wider, die traditionell einen präventiven und umfassenden Ansatz bei der Cybersicherheit verfolgt.\n\n🏛️ Deutsche Behördenlandschaft und Zuständigkeiten:\n• Das Bundesamt für Sicherheit in der Informationstechnik übernimmt eine zentrale Koordinationsrolle bei der CRA-Umsetzung und entwickelt spezifische deutsche Interpretationsleitfäden und technische Richtlinien.\n• Länderspezifische Marktüberwachungsbehörden haben erweiterte Befugnisse und führen regelmäßige Compliance-Prüfungen durch, die über EU-Mindestanforderungen hinausgehen.\n• Die Integration in bestehende deutsche Meldepflichten und Berichtssysteme erfordert zusätzliche Dokumentations- und Kommunikationsverfahren.\n• Deutsche Behörden erwarten proaktive Kommunikation und regelmäßige Updates zu Compliance-Status und Sicherheitsmaßnahmen.\n• Spezielle Verfahren für kritische Infrastrukturen und besonders schützenswerte Bereiche bringen zusätzliche Anforderungen mit sich.\n\n📋 Nationale Interpretationen und Zusatzanforderungen:\n• Deutsche Auslegung der Essential Requirements mit höheren Sicherheitsstandards und detaillierteren Dokumentationsanforderungen als in anderen EU-Mitgliedstaaten.\n• Erweiterte Anforderungen an Risikobewertungen und Schwachstellenmanagement, die deutsche IT-Sicherheitsstandards und bewährte Praktiken integrieren.\n• Spezifische Vorgaben für die Integration in bestehende deutsche Compliance-Frameworks wie IT-Grundschutz und branchenspezifische Sicherheitsstandards.\n• Zusätzliche Meldepflichten und Berichtspflichten gegenüber deutschen Behörden, die parallel zu EU-Anforderungen bestehen.\n• Höhere Anforderungen an Transparenz und Nachvollziehbarkeit von Sicherheitsmaßnahmen und Compliance-Prozessen.\n\n🔗 Integration in deutsche Rechtssysteme:\n• Harmonisierung mit bestehenden deutschen IT-Sicherheitsgesetzen, Datenschutzbestimmungen und branchenspezifischen Regulierungen.\n• Berücksichtigung deutscher Haftungsregelungen und Schadenersatzansprüche, die über EU-Standards hinausgehen können.\n• Integration in deutsche Zertifizierungs- und Akkreditierungssysteme mit spezifischen nationalen Anforderungen.\n• Anpassung an deutsche Geschäftspraktiken und Industriestandards, die traditionell höhere Sicherheits- und Qualitätsanforderungen haben.\n• Berücksichtigung deutscher Arbeitsschutz- und Mitbestimmungsregelungen bei der Implementierung von Cybersicherheitsmaßnahmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche deutschen Behörden sind für die CRA Verordnung zuständig und wie gestalten wir die Interaktion mit diesen Institutionen optimal?',
        answer: "Die deutsche Behördenlandschaft für die CRA Verordnung ist komplex strukturiert und erfordert eine strategische Herangehensweise bei der Interaktion. Eine erfolgreiche Compliance hängt maßgeblich von der professionellen Gestaltung der Behördenbeziehungen und dem Verständnis der verschiedenen Zuständigkeiten und Erwartungen ab.\n\n🏢 Zentrale Bundesbehörden und ihre Rollen:\n• Das Bundesamt für Sicherheit in der Informationstechnik fungiert als zentrale Koordinationsstelle und entwickelt technische Leitfäden, Interpretationshilfen und Best-Practice-Empfehlungen für die CRA-Umsetzung.\n• Das Bundesministerium für Wirtschaft und Klimaschutz übernimmt die strategische Koordination und Abstimmung mit EU-Institutionen sowie die Entwicklung wirtschaftspolitischer Rahmenbedingungen.\n• Die Bundesnetzagentur hat spezielle Zuständigkeiten für Telekommunikations- und Netzwerkprodukte und führt sektorspezifische Überwachungs- und Durchsetzungsmaßnahmen durch.\n• Das Bundesamt für Verfassungsschutz und andere Sicherheitsbehörden sind bei kritischen Infrastrukturen und sicherheitsrelevanten Produkten eingebunden.\n• Branchenspezifische Bundesbehörden haben zusätzliche Aufsichtsfunktionen in ihren jeweiligen Sektoren.\n\n🏛️ Länderebene und regionale Zuständigkeiten:\n• Landesmarktüberwachungsbehörden führen praktische Kontrollen und Durchsetzungsmaßnahmen durch und haben direkte Kontakte zu Unternehmen vor Ort.\n• Regionale Wirtschaftsförderungseinrichtungen bieten Unterstützung und Beratung für kleine und mittlere Unternehmen bei der CRA-Implementierung.\n• Landesdatenschutzbehörden sind bei der Integration von CRA-Anforderungen mit Datenschutzbestimmungen involviert.\n• Regionale Industrie- und Handelskammern fungieren als Vermittler und Informationsquelle für Unternehmen.\n• Länderübergreifende Koordinationsgremien sorgen für einheitliche Anwendung der CRA-Bestimmungen.\n\n💼 Strategische Behördeninteraktion:\n• Aufbau proaktiver Kommunikationskanäle mit relevanten Behörden durch regelmäßige Informationsaustausche und Statusupdates.\n• Teilnahme an behördlichen Konsultationsverfahren und Stakeholder-Dialogen zur Mitgestaltung der deutschen CRA-Implementierung.\n• Entwicklung standardisierter Berichtsprozesse und Dokumentationsverfahren, die den Erwartungen verschiedener Behörden entsprechen.\n• Aufbau von Expertise in behördenspezifischen Kommunikationsprotokollen und Verfahrensabläufen.\n• Etablierung von Eskalationswegen und Konfliktlösungsmechanismen für komplexe Compliance-Situationen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie integrieren wir die CRA Verordnung in bestehende deutsche IT-Sicherheitsframeworks und Compliance-Systeme?',
        answer: "Die Integration der CRA Verordnung in bestehende deutsche IT-Sicherheitsframeworks erfordert einen systematischen Ansatz, der Synergien nutzt und Redundanzen vermeidet. Deutsche Unternehmen haben oft bereits umfassende Sicherheits- und Compliance-Systeme implementiert, die als Grundlage für die CRA-Compliance dienen können, aber gezielt erweitert und angepasst werden müssen.\n\n🛡️ Integration in IT-Grundschutz und BSI-Standards:\n• Mapping der CRA Essential Requirements auf bestehende IT-Grundschutz-Bausteine und Identifikation von Überschneidungen und Ergänzungsbedarfen.\n• Erweiterung bestehender Risikoanalysen und Schutzbedarfsfeststellungen um CRA-spezifische Anforderungen und Bewertungskriterien.\n• Integration von CRA-Compliance-Kontrollen in bestehende IT-Grundschutz-Audits und Zertifizierungsverfahren.\n• Anpassung von Sicherheitsrichtlinien und Verfahrensanweisungen zur Berücksichtigung CRA-spezifischer Anforderungen.\n• Nutzung bestehender BSI-Zertifizierungen als Grundlage für CRA-Konformitätsnachweise und Aufbau darauf aufbauender Compliance-Strukturen.\n\n📊 Harmonisierung mit Branchenstandards:\n• Integration in branchenspezifische Sicherheitsframeworks wie KRITIS-Verordnung, Bankenaufsicht oder Energiewirtschaftsgesetz.\n• Abstimmung mit bestehenden ISO-Zertifizierungen und deren Erweiterung um CRA-spezifische Anforderungen.\n• Berücksichtigung von Industriestandards und deren Anpassung an CRA-Anforderungen ohne Verlust bestehender Zertifizierungen.\n• Entwicklung integrierter Audit- und Bewertungsverfahren, die mehrere Compliance-Anforderungen gleichzeitig abdecken.\n• Nutzung bestehender Lieferanten- und Partnerbewertungssysteme als Grundlage für CRA-konforme Supply Chain Security.\n\n🔄 Prozessintegration und Governance:\n• Erweiterung bestehender Governance-Strukturen um CRA-spezifische Rollen und Verantwortlichkeiten ohne Schaffung paralleler Strukturen.\n• Integration von CRA-Compliance in bestehende Risikomanagement-Prozesse und Berichtssysteme.\n• Anpassung von Change-Management-Verfahren zur systematischen Berücksichtigung CRA-Auswirkungen bei Systemänderungen.\n• Entwicklung integrierter Schulungs- und Awareness-Programme, die CRA-Anforderungen mit bestehenden Sicherheitsschulungen verbinden.\n• Etablierung von Monitoring- und Reporting-Systemen, die CRA-Compliance mit anderen Compliance-Anforderungen konsolidiert darstellen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche deutschen Marktbesonderheiten und Kundenerwartungen müssen bei der CRA Verordnung Implementierung berücksichtigt werden?',
        answer: "Der deutsche Markt weist spezifische Charakteristika und Kundenerwartungen auf, die bei der CRA Verordnung Implementierung strategisch berücksichtigt werden müssen. Deutsche Kunden und Geschäftspartner haben traditionell hohe Sicherheits- und Qualitätsansprüche, die oft über regulatorische Mindestanforderungen hinausgehen und als Wettbewerbsvorteil genutzt werden können.\n\n🎯 Deutsche Kundenerwartungen und Marktanforderungen:\n• Deutsche Kunden erwarten umfassende Transparenz über Sicherheitsmaßnahmen und detaillierte Dokumentation aller Compliance-Aktivitäten, die über EU-Mindestanforderungen hinausgeht.\n• Hohe Erwartungen an Datenschutz und Datensouveränität, die eine enge Integration von CRA-Compliance mit DSGVO-Anforderungen erfordern.\n• Präferenz für deutsche oder europäische Anbieter bei sicherheitskritischen Produkten und Services, was Chancen für entsprechend positionierte Unternehmen schafft.\n• Erwartung proaktiver Kommunikation über Sicherheitsupdates, Schwachstellen und Compliance-Status mit regelmäßigen und detaillierten Berichten.\n• Hohe Qualitätsansprüche an technische Dokumentation und Support-Services in deutscher Sprache mit fachlicher Tiefe.\n\n🏭 Industrielle Besonderheiten und B2B-Markt:\n• Deutsche Industrieunternehmen haben oft komplexe und langfristige Beschaffungsprozesse, die frühzeitige CRA-Compliance-Nachweise erfordern.\n• Starke Integration in bestehende Produktionsumgebungen und Qualitätsmanagementsysteme, die nahtlose CRA-Integration ohne Betriebsunterbrechungen verlangen.\n• Hohe Anforderungen an Lieferantenbewertung und Supply Chain Transparency, die detaillierte CRA-Compliance-Nachweise der gesamten Lieferkette umfassen.\n• Erwartung langfristiger Partnerschaften mit kontinuierlicher Compliance-Unterstützung und gemeinsamer Weiterentwicklung von Sicherheitsstandards.\n• Integration in bestehende Industrie-Ökosysteme und Standardisierungsinitiativen, die branchenspezifische CRA-Interpretationen erfordern.\n\n💼 Wettbewerbsvorteile und Marktpositionierung:\n• CRA-Compliance als Differenzierungsmerkmal und Qualitätssignal im deutschen Markt nutzen, um Premium-Positionierung zu unterstützen.\n• Entwicklung deutscher Referenzkunden und Showcase-Projekte zur Demonstration erfolgreicher CRA-Implementierung.\n• Aufbau von Partnerschaften mit deutschen Systemintegratoren und Beratungsunternehmen zur Markterschließung.\n• Nutzung deutscher Zertifizierungs- und Testlabore zur Stärkung der Marktglaubwürdigkeit und Kundenakzeptanz.\n• Entwicklung deutscher Vertriebskanäle und Support-Strukturen, die lokale CRA-Expertise und Compliance-Unterstützung bieten können."
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
