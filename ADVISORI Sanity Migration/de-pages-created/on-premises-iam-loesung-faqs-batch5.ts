import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating On-Premises IAM-Lösung page with FAQ batch 5...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'on-premises-iam-loesung' })
    
    if (!existingDoc) {
      throw new Error('Document "on-premises-iam-loesung" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Welche strategischen Überlegungen sind bei der Entscheidung zwischen On-Premises, Cloud und Hybrid IAM-Deployments entscheidend und wie bewertet man diese objektiv?',
        answer: "Die Entscheidung zwischen On-Premises, Cloud und Hybrid IAM-Deployments ist eine der kritischsten strategischen Entscheidungen für Unternehmen und erfordert eine umfassende Bewertung von Sicherheits-, Compliance-, Kosten- und Geschäftsanforderungen. Diese Entscheidung hat langfristige Auswirkungen auf Sicherheitsposture, operative Effizienz und strategische Flexibilität.\n\n🏛️ Regulatory und Compliance Considerations:\n• Data Residency Requirements mit strikten geografischen Beschränkungen für sensitive Daten\n• Industry-Specific Regulations wie HIPAA, SOX oder Finanzdienstleistungsvorschriften\n• Audit und Compliance Kontrollen mit Anforderungen an direkte Systemkontrolle\n• Regulatory Change Agility für schnelle Anpassung an neue Compliance-Anforderungen\n• Cross-Border Data Transfer Restrictions mit internationalen Datenschutzgesetzen\n\n🔒 Security und Risk Assessment:\n• Threat Landscape Analysis mit branchenspezifischen Sicherheitsrisiken\n• Data Classification mit Bewertung der Kritikalität verschiedener Identitätsdaten\n• Attack Surface Evaluation für verschiedene Deployment-Modelle\n• Insider Threat Considerations mit internen Sicherheitsrisiken\n• Third-Party Risk Assessment für Cloud-Provider-Abhängigkeiten\n\n💰 Total Cost of Ownership Analysis:\n• Capital Expenditure versus Operational Expenditure für verschiedene Modelle\n• Hidden Costs wie Compliance, Training und Integration\n• Scalability Economics mit Kosten-Nutzen-Analysen für Wachstumsszenarien\n• Vendor Lock-in Risks mit langfristigen Kostenimplikationen\n• ROI Timeline für verschiedene Deployment-Strategien\n\n⚡ Technical und Operational Factors:\n• Performance Requirements mit Latenz- und Durchsatz-Anforderungen\n• Integration Complexity mit bestehenden Systemen und Legacy-Infrastrukturen\n• Scalability Needs für zukünftiges Wachstum und Expansion\n• Disaster Recovery Requirements mit Business Continuity Anforderungen\n• Technical Expertise Availability für verschiedene Technologie-Stacks\n\n🔄 Strategic Business Alignment:\n• Digital Transformation Strategy mit langfristigen Technologie-Zielen\n• Business Agility Requirements für schnelle Marktanpassungen\n• Innovation Priorities mit Fokus auf emerging Technologies\n• Competitive Advantage Considerations für Differenzierung\n• Future-Proofing Strategy für technologische Evolution\n\n📊 Decision Framework und Evaluation:\n• Multi-Criteria Decision Analysis mit gewichteten Bewertungsfaktoren\n• Risk-Adjusted ROI Calculations für verschiedene Szenarien\n• Pilot Program Results mit praktischen Erfahrungen\n• Stakeholder Impact Assessment für alle betroffenen Gruppen\n• Exit Strategy Planning für Flexibilität bei zukünftigen Änderungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Wie entwickelt man eine umfassende Business Continuity und Disaster Recovery Strategie für kritische On-Premises IAM-Systeme in verschiedenen Ausfallszenarien?',
        answer: "Eine robuste Business Continuity und Disaster Recovery Strategie für On-Premises IAM-Systeme ist essentiell, da diese Systeme kritische Geschäftsprozesse unterstützen und deren Ausfall sofortige Auswirkungen auf die gesamte Organisation hat. Diese Strategie muss verschiedene Ausfallszenarien berücksichtigen und schnelle Wiederherstellung gewährleisten.\n\n🎯 Business Impact Analysis und Risk Assessment:\n• Critical Business Process Mapping mit Identifikation IAM-abhängiger Prozesse\n• Recovery Time Objectives Definition für verschiedene Geschäftsfunktionen\n• Recovery Point Objectives Festlegung für akzeptable Datenverluste\n• Financial Impact Assessment für verschiedene Ausfallszenarien\n• Stakeholder Impact Analysis für interne und externe Betroffene\n\n🏗️ Multi-Tier Recovery Architecture:\n• Primary Site Operations mit hochverfügbaren Systemen und Redundanz\n• Secondary Site Standby mit Hot-Standby oder Warm-Standby Konfigurationen\n• Tertiary Backup Sites für extreme Disaster-Szenarien\n• Cloud-based Emergency Services für temporäre Überbrückung\n• Mobile Recovery Units für schnelle Vor-Ort-Wiederherstellung\n\n🔄 Automated Failover und Recovery Procedures:\n• Intelligent Health Monitoring mit automatischer Fehlererkennung\n• Automated Failover Triggers mit definierten Schwellenwerten\n• Data Synchronization Processes mit Real-time oder Near-real-time Replikation\n• Service Restoration Automation mit orchestrierten Recovery-Workflows\n• Rollback Capabilities für Failed Recovery Attempts\n\n📋 Comprehensive Testing und Validation:\n• Regular DR Testing mit verschiedenen Ausfallszenarien\n• Tabletop Exercises für Team-Koordination und Entscheidungsfindung\n• Technical Recovery Drills mit vollständiger Systemwiederherstellung\n• Performance Validation für Recovery-Systeme unter Last\n• Lessons Learned Integration mit kontinuierlicher Verbesserung\n\n👥 Crisis Management und Communication:\n• Incident Command Structure mit klaren Rollen und Verantwortlichkeiten\n• Communication Plans für interne und externe Stakeholder\n• Escalation Procedures für verschiedene Severity-Level\n• Media Relations Strategy für öffentliche Kommunikation\n• Legal und Regulatory Notification Requirements\n\n🔧 Technology und Infrastructure Resilience:\n• Geographic Distribution mit räumlich getrennten Standorten\n• Infrastructure Hardening gegen physische und cyber Bedrohungen\n• Backup Power Systems mit unterbrechungsfreier Stromversorgung\n• Network Redundancy mit mehreren Internet-Providern\n• Equipment Replacement Strategies mit vorgehaltenen Ersatzteilen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Welche Rolle spielt Identity Governance bei On-Premises IAM-Systemen und wie implementiert man effektive Governance-Prozesse für komplexe Enterprise-Umgebungen?',
        answer: "Identity Governance ist das strategische Fundament für On-Premises IAM-Systeme und gewährleistet, dass Identitäten und Zugriffsrechte ordnungsgemäß verwaltet, überwacht und kontrolliert werden. Effektive Governance-Prozesse sind entscheidend für Compliance, Sicherheit und operative Exzellenz in komplexen Enterprise-Umgebungen.\n\n🏛️ Governance Framework Foundation:\n• Identity Governance Charter mit klaren Zielen und Verantwortlichkeiten\n• Governance Committee Structure mit Cross-functional Representation\n• Policy Framework Development mit umfassenden Richtlinien und Standards\n• Risk Management Integration mit kontinuierlicher Risikobewertung\n• Compliance Oversight mit regulatorischen Anforderungen\n\n🔍 Identity Lifecycle Management:\n• Automated Provisioning Workflows mit rollenbasierten Zugriffskontrollen\n• Joiner-Mover-Leaver Processes mit standardisierten Verfahren\n• Role Management mit dynamischen Rollendefinitionen und Updates\n• Entitlement Management mit granularen Berechtigungskontrollen\n• Deprovisioning Automation mit zeitgerechter Rechtsentzug\n\n📊 Access Governance und Reviews:\n• Regular Access Reviews mit automatisierten Workflow-Prozessen\n• Risk-based Review Prioritization mit Fokus auf kritische Zugriffe\n• Segregation of Duties Monitoring mit automatischer Konfliktdetektion\n• Privileged Access Governance mit erhöhten Kontrollen\n• Exception Management mit dokumentierten Genehmigungsprozessen\n\n🔄 Continuous Monitoring und Analytics:\n• Real-time Access Monitoring mit Anomaly Detection\n• Compliance Dashboard mit Executive-Level Visibility\n• Risk Scoring mit dynamischen Bewertungen\n• Audit Trail Management mit umfassender Protokollierung\n• Trend Analysis mit prädiktiven Insights\n\n⚙️ Process Automation und Efficiency:\n• Workflow Automation mit Self-Service Capabilities\n• Approval Processes mit intelligenten Routing-Mechanismen\n• Policy Enforcement Automation mit Real-time Controls\n• Reporting Automation mit standardisierten Compliance-Reports\n• Integration Automation mit Enterprise-Systemen\n\n📈 Governance Maturity und Improvement:\n• Maturity Assessment mit regelmäßigen Capability-Evaluationen\n• Best Practice Adoption mit Industry-Standard-Integration\n• Continuous Improvement mit Feedback-Loops und Optimierung\n• Innovation Integration mit emerging Governance-Technologien\n• Benchmarking mit Peer-Organizations und Industry-Standards"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Wie gestaltet man eine erfolgreiche digitale Transformation von Legacy IAM-Systemen zu modernen On-Premises-Lösungen unter Berücksichtigung von Change Management und User Adoption?',
        answer: "Die digitale Transformation von Legacy IAM-Systemen zu modernen On-Premises-Lösungen ist ein komplexer Prozess, der technische Modernisierung mit organisatorischem Wandel verbindet. Erfolgreiche Transformationen erfordern strategische Planung, effektives Change Management und fokussierte User Adoption-Strategien.\n\n🎯 Strategic Transformation Planning:\n• Vision und Strategy Definition mit klaren Zielen und Erfolgskriterien\n• Current State Assessment mit detaillierter Legacy-System-Analyse\n• Future State Architecture mit modernen IAM-Capabilities\n• Transformation Roadmap mit phasenweiser Implementierung\n• Success Metrics Definition mit messbaren KPIs\n\n🔄 Phased Migration Strategy:\n• Pilot Program Implementation mit ausgewählten Benutzergruppen\n• Parallel System Operation mit schrittweiser Migration\n• Risk Mitigation Strategies mit Rollback-Plänen\n• Data Migration Planning mit Qualitätssicherung\n• Legacy System Decommissioning mit sicherer Datenarchivierung\n\n👥 Comprehensive Change Management:\n• Stakeholder Engagement mit Executive Sponsorship\n• Change Impact Assessment für alle betroffenen Gruppen\n• Communication Strategy mit transparenter Information\n• Resistance Management mit proaktiver Adressierung von Bedenken\n• Change Champion Network mit internen Multiplikatoren\n\n🎓 User Adoption und Training:\n• User Experience Design mit intuitiven Interfaces\n• Role-based Training Programs mit spezifischen Schulungsinhalten\n• Self-Service Capabilities mit benutzerfreundlichen Tools\n• Support Structure mit Help Desk und Escalation-Prozessen\n• Feedback Collection mit kontinuierlicher Verbesserung\n\n📊 Performance Monitoring und Optimization:\n• Adoption Metrics Tracking mit detaillierter Nutzungsanalyse\n• User Satisfaction Surveys mit regelmäßigem Feedback\n• System Performance Monitoring mit Optimierungsmaßnahmen\n• Business Value Realization mit ROI-Tracking\n• Continuous Improvement mit iterativen Enhancements\n\n🔧 Technical Excellence und Innovation:\n• Modern Architecture Implementation mit zukunftssicheren Technologien\n• Integration Excellence mit nahtloser System-Anbindung\n• Security Enhancement mit verbesserten Sicherheitskontrollen\n• Automation Implementation mit effizienten Prozessen\n• Innovation Adoption mit emerging IAM-Technologien"
      }
    ]
    
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQ batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
