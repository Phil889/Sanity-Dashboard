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
    console.log('Updating DORA Compliance Software page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-compliance-software' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-compliance-software" not found')
    }
    
    // Create new FAQs for DORA compliance software implementation
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche Herausforderungen entstehen bei der Implementierung von DORA-Compliance-Software und wie kann ich diese bewältigen?',
        answer: "Die Implementierung von DORA-Compliance-Software bringt verschiedene technische, organisatorische und kulturelle Herausforderungen mit sich, die eine strategische Herangehensweise und sorgfältige Planung erfordern. Ein proaktives Change-Management ist entscheidend für den Erfolg.\n\n🔧 Technische Implementierungsherausforderungen:\n• Legacy-System-Integration mit veralteten Schnittstellen und inkompatiblen Datenformaten erfordert oft aufwendige Middleware-Entwicklung\n• Datenqualitäts- und Konsistenzprobleme bei der Migration historischer Daten aus verschiedenen Quellsystemen\n• Performance-Optimierung bei großen Datenvolumen und komplexen Reporting-Anforderungen\n• Sicherheitsarchitektur-Anpassungen für neue Software-Komponenten und Datenzugriffsmuster\n• Disaster-Recovery und Backup-Strategien für kritische Compliance-Daten und Systeme\n\n👥 Organisatorische und Change-Management-Herausforderungen:\n• Widerstand gegen Veränderungen bei etablierten Arbeitsweisen und manuellen Prozessen\n• Skill-Gaps bei Mitarbeitern bezüglich neuer Software-Tools und DORA-Anforderungen\n• Koordination zwischen verschiedenen Abteilungen und Stakeholder-Gruppen\n• Ressourcenallokation und Priorisierung bei begrenzten IT- und Personal-Budgets\n• Zeitdruck durch regulatorische Deadlines und parallele Geschäftsanforderungen\n\n📋 Governance und Compliance-Komplexität:\n• Abstimmung zwischen verschiedenen regulatorischen Frameworks und bestehenden Compliance-Programmen\n• Dokumentations- und Audit-Trail-Anforderungen für alle Implementierungsschritte\n• Risikomanagement während der Übergangsphase mit parallelen Alt- und Neu-Systemen\n• Stakeholder-Alignment bezüglich Compliance-Interpretation und Umsetzungsprioritäten\n• Kontinuierliche Anpassung an sich entwickelnde DORA-Guidance und Best-Practices\n\n🚀 Bewährte Lösungsansätze:\n• Phased-Implementation mit Pilotprojekten und schrittweiser Ausweitung zur Risikominimierung\n• Comprehensive-Training-Programme mit hands-on-Workshops und kontinuierlicher Unterstützung\n• Cross-functional-Teams mit klaren Rollen und Verantwortlichkeiten für alle Implementierungsphasen\n• Agile-Projektmanagement-Methoden für Flexibilität und schnelle Anpassung an neue Anforderungen\n• External-Expert-Support für spezialisierte Bereiche und Wissenstransfer\n\n🎯 Erfolgsfaktoren für nachhaltige Implementierung:\n• Executive-Sponsorship und Top-Management-Commitment für organisatorische Unterstützung\n• Clear-Communication-Strategy mit regelmäßigen Updates und Erfolgs-Kommunikation\n• Incentive-Alignment für Mitarbeiter zur Förderung der Adoption neuer Prozesse\n• Continuous-Improvement-Culture mit Feedback-Loops und iterativer Optimierung\n• Long-term-Vision mit strategischer Roadmap für zukünftige Entwicklungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie kann ich die Kosten-Nutzen-Analyse für DORA-Compliance-Software durchführen und ROI messen?',
        answer: "Eine fundierte Kosten-Nutzen-Analyse für DORA-Compliance-Software erfordert eine ganzheitliche Betrachtung direkter und indirekter Kosten sowie quantifizierbarer und qualitativer Nutzen. Die ROI-Messung sollte sowohl kurzfristige Compliance-Ziele als auch langfristige strategische Vorteile berücksichtigen.\n\n💰 Umfassende Kostenanalyse:\n• Software-Lizenzkosten einschließlich Initial-Lizenzen, jährlicher Maintenance-Fees und Upgrade-Kosten\n• Implementierungskosten für Consulting, Customization, Integration, Testing und Training\n• Infrastruktur-Kosten für Hardware, Cloud-Services, Netzwerk-Upgrades und Security-Enhancements\n• Personal-Kosten für interne Projektteams, Change-Management und laufenden Support\n• Opportunity-Costs für Ressourcen, die nicht für andere strategische Initiativen verfügbar sind\n\n📊 Quantifizierbare Nutzenkomponenten:\n• Effizienzgewinne durch Automatisierung manueller Compliance-Prozesse mit messbaren Zeitersparnissen\n• Risikoreduktion durch verbesserte Monitoring- und Control-Mechanismen\n• Kosteneinsparungen bei externen Beratung und Audit-Unterstützung\n• Vermeidung regulatorischer Strafen und Sanktionen durch bessere Compliance\n• Produktivitätssteigerungen durch streamlined Workflows und bessere Datenqualität\n\n🎯 Qualitative Nutzenaspekte:\n• Verbesserte Entscheidungsqualität durch bessere Datenanalyse und Reporting-Capabilities\n• Enhanced-Risk-Management mit proaktiver Risikoidentifikation und Mitigation\n• Stakeholder-Confidence durch demonstrierte Compliance-Exzellenz\n• Competitive-Advantage durch frühe DORA-Readiness und Best-Practice-Implementation\n• Organizational-Learning und Capability-Building für zukünftige regulatorische Herausforderungen\n\n📈 ROI-Messungsframework:\n• Baseline-Establishment mit aktuellen Kosten und Performance-Metriken vor der Implementierung\n• KPI-Definition für messbare Verbesserungen in Effizienz, Qualität und Risikomanagement\n• Time-to-Value-Tracking für verschiedene Nutzenkomponenten und Implementierungsphasen\n• Total-Economic-Impact-Modelling mit Berücksichtigung aller direkten und indirekten Effekte\n• Sensitivity-Analysis für verschiedene Szenarien und Annahmen\n\n🔍 Langfristige Wertschöpfung:\n• Strategic-Value-Creation durch verbesserte Operational-Resilience und Business-Continuity\n• Platform-Value für zukünftige Compliance-Anforderungen und regulatorische Entwicklungen\n• Data-Asset-Value durch verbesserte Datenqualität und Analytics-Capabilities\n• Organizational-Maturity-Improvement mit nachhaltigen Prozess- und Governance-Verbesserungen\n• Innovation-Enablement durch moderne Technologie-Plattformen und digitale Capabilities"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Rolle spielt Cloud-Computing bei DORA-Compliance-Software und welche Sicherheitsaspekte muss ich beachten?',
        answer: "Cloud-Computing spielt eine zentrale Rolle bei modernen DORA-Compliance-Software-Lösungen, bringt aber spezifische Sicherheits- und Compliance-Herausforderungen mit sich. Die richtige Cloud-Strategie kann erhebliche Vorteile bieten, erfordert aber sorgfältige Planung und Risikomanagement.\n\n☁️ Cloud-Deployment-Modelle für DORA-Compliance:\n• Public-Cloud-Lösungen mit standardisierten Compliance-Features und schneller Skalierbarkeit\n• Private-Cloud-Implementierungen für höhere Kontrolle und spezifische Sicherheitsanforderungen\n• Hybrid-Cloud-Architekturen für optimale Balance zwischen Flexibilität und Kontrolle\n• Multi-Cloud-Strategien zur Vermeidung von Vendor-Lock-in und Erhöhung der Resilienz\n• Edge-Computing-Integration für lokale Datenverarbeitung und reduzierte Latenz\n\n🛡️ DORA-spezifische Cloud-Sicherheitsanforderungen:\n• Data-Residency und Sovereignty-Compliance für EU-Finanzinstitute mit strikten Datenlokalisierungsanforderungen\n• Encryption-at-Rest und in-Transit mit Enterprise-Grade-Verschlüsselung und Key-Management\n• Identity-and-Access-Management mit Multi-Factor-Authentication und Zero-Trust-Prinzipien\n• Network-Security mit Micro-Segmentation und Advanced-Threat-Protection\n• Continuous-Security-Monitoring mit SIEM-Integration und Incident-Response-Capabilities\n\n📋 Cloud-Provider-Due-Diligence:\n• Compliance-Zertifizierungen wie SOC 2, ISO 27001, und finanzspezifische Standards\n• Operational-Resilience-Capabilities des Cloud-Providers einschließlich Disaster-Recovery und Business-Continuity\n• Data-Protection und Privacy-Controls mit GDPR-Compliance und Audit-Rechten\n• Vendor-Risk-Assessment einschließlich Finanzstabilität und Geschäftskontinuität\n• Service-Level-Agreements mit klaren Performance- und Verfügbarkeits-Garantien\n\n🔐 Governance und Risk-Management:\n• Cloud-Security-Governance mit klaren Rollen und Verantwortlichkeiten zwischen Kunde und Provider\n• Risk-Assessment-Frameworks für Cloud-spezifische Risiken und Mitigation-Strategien\n• Incident-Response-Koordination zwischen internen Teams und Cloud-Provider\n• Regular-Security-Assessments und Penetration-Testing der Cloud-Infrastruktur\n• Exit-Strategy-Planning für Vendor-Wechsel und Data-Portability\n\n🚀 Cloud-Vorteile für DORA-Compliance:\n• Rapid-Deployment und Skalierbarkeit für schnelle Anpassung an neue Anforderungen\n• Cost-Optimization durch Pay-as-you-Use-Modelle und reduzierte Infrastruktur-Investitionen\n• Innovation-Access zu neuesten Technologien wie AI/ML für Advanced-Analytics\n• Global-Reach für internationale Finanzinstitute mit konsistenten Compliance-Standards\n• Automatic-Updates und Patch-Management für verbesserte Security-Posture"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie entwickle ich eine effektive Schulungs- und Change-Management-Strategie für DORA-Compliance-Software?',
        answer: "Eine erfolgreiche Einführung von DORA-Compliance-Software hängt maßgeblich von einer durchdachten Schulungs- und Change-Management-Strategie ab. Diese muss verschiedene Stakeholder-Gruppen ansprechen und sowohl technische als auch kulturelle Aspekte berücksichtigen.\n\n🎯 Stakeholder-spezifische Schulungsansätze:\n• Executive-Level-Training mit Fokus auf strategische Vorteile, Risikomanagement und regulatorische Compliance\n• Management-Training für Abteilungsleiter mit Schwerpunkt auf Prozessänderungen und Team-Führung\n• Power-User-Programme für Key-Users mit vertieften technischen Kenntnissen und Multiplikator-Funktionen\n• End-User-Training mit praktischen Hands-on-Sessions und rollenspezifischen Workflows\n• IT-Administrator-Schulungen für technische Systemverwaltung und Support-Funktionen\n\n📚 Strukturierte Lernprogramme:\n• Blended-Learning-Ansätze mit Online-Modulen, Präsenz-Workshops und praktischen Übungen\n• Microlearning-Konzepte mit kurzen, fokussierten Lerneinheiten für bessere Retention\n• Simulation-Environments für risikofreies Üben und Experimentieren mit neuen Systemen\n• Certification-Programme für formale Qualifikationsnachweise und Kompetenzvalidierung\n• Continuous-Learning-Plattformen für ongoing Education und Updates\n\n🔄 Change-Management-Framework:\n• Stakeholder-Analysis mit Identification von Change-Champions und Resistance-Points\n• Communication-Strategy mit klaren Botschaften über Nutzen und Notwendigkeit der Veränderung\n• Resistance-Management mit proaktiver Adressierung von Bedenken und Ängsten\n• Quick-Wins-Identification für frühe Erfolge und Momentum-Building\n• Feedback-Loops für kontinuierliche Anpassung der Change-Strategie\n\n📊 Erfolgs- und Progress-Messung:\n• Learning-Analytics für Tracking von Schulungsfortschritt und Kompetenzentwicklung\n• Adoption-Metrics für Messung der tatsächlichen System-Nutzung und Feature-Adoption\n• User-Satisfaction-Surveys für qualitatives Feedback und Verbesserungsvorschläge\n• Performance-Indicators für Messung der Auswirkungen auf Arbeitsqualität und Effizienz\n• ROI-Tracking für Quantifizierung des Schulungs- und Change-Management-Investments\n\n🤝 Nachhaltige Verankerung:\n• Mentoring-Programme mit erfahrenen Nutzern als Unterstützung für neue Anwender\n• Communities-of-Practice für Wissensaustausch und Best-Practice-Sharing\n• Regular-Refresher-Training für Auffrischung und Updates bei System-Änderungen\n• Documentation-and-Knowledge-Base für Self-Service-Support und Nachschlagewerke\n• Integration in Performance-Management für Verankerung in individuellen Zielsetzungen"
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
    console.log('✅ FAQ batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
