
const translations = {
  common: {
    nav: {
      home: { tr: 'Ana Sayfa', en: 'Home', fr: 'Accueil', de: 'Startseite' },
      about: { tr: 'Hakkımızda', en: 'About', fr: 'À propos', de: 'Über uns' },
      contact: { tr: 'Kontakt', en: 'Contact', fr: 'Contact', de: 'Kontakt' }
    },
    footer: {
      tagline: {
        tr: 'Estonya merkezli uluslararası savunma tedarikçisi.',
        en: 'Estonia-based international defense supplier.',
        fr: 'Fournisseur de défense international basé en Estonie.',
        de: 'Internationaler Verteidigungsanbieter mit Sitz in Estland.'
      },
      company: { tr: 'Kurumsal', en: 'Company', fr: 'Entreprise', de: 'Unternehmen' },
      products: { tr: 'Ürünler', en: 'Products', fr: 'Produits', de: 'Produkte' }
    },
    productTitles: {
      rf45: { tr: 'PTS RF-45 Jammer', en: 'PTS RF-45 Jammer', fr: 'PTS RF-45 Jammer', de: 'PTS RF-45 Jammer' },
      falcon: { tr: 'PTS Falcon Jammer', en: 'PTS Falcon Jammer', fr: 'PTS Falcon Jammer', de: 'PTS Falcon Jammer' },
      r400: { tr: 'PTS R-400 Sentinel Radar', en: 'PTS R-400 Sentinel Radar', fr: 'PTS R-400 Sentinel Radar', de: 'PTS R-400 Sentinel Radar' },
      groza: { tr: 'Groza-1 / Groza-2 OEM Production', en: 'Groza-1 / Groza-2 OEM Production', fr: 'Production OEM Groza-1 / Groza-2', de: 'Groza-1 / Groza-2 OEM-Produktion' }
    }
  },
  index: {
    hero: {
      badge: { tr: 'Elektronik Harp · Radar · OEM Üretim', en: 'Electronic Warfare · Radar · OEM Production', fr: 'Guerre électronique · Radar · Production OEM', de: 'Elektronische Kampfführung · Radar · OEM-Fertigung' },
      title: { tr: 'PTS Defense ile elektromanyetik hâkimiyet ve sensör üstünlüğü', en: 'Electromagnetic dominance and sensor superiority with PTS Defense', fr: 'Domination électromagnétique et supériorité des capteurs avec PTS Defense', de: 'Elektromagnetische Dominanz und Sensorsouveränität mit PTS Defense' },
      body: { tr: 'Estonya merkezli, NATO NSPA ve SAM.gov kayıtlı uluslararası tedarikçi olarak elektronik harp jammer sistemleri, radar çözümleri ve OEM üretim kabiliyeti sunuyoruz.', en: 'As an Estonia-based supplier registered with NATO NSPA and SAM.gov, we deliver electronic warfare jammers, radar solutions, and OEM production capability.', fr: 'Basés en Estonie et enregistrés auprès de l\'OTAN NSPA et SAM.gov, nous fournissons des brouilleurs de guerre électronique, des solutions radar et des capacités de production OEM.', de: 'Als in Estland ansässiger, bei NATO NSPA und SAM.gov registrierter Anbieter liefern wir elektronische Störsender, Radarlösungen und OEM-Fertigungskompetenz.' },
      ctaPrimary: { tr: 'Operasyonel ihtiyaçlarınızı paylaşın', en: 'Share your operational needs', fr: 'Partagez vos besoins opérationnels', de: 'Teilen Sie Ihre Einsatzanforderungen' },
      ctaSecondary: { tr: 'NATO / SAM.gov uygunluk bilgilerimiz', en: 'Our NATO / SAM.gov compliance', fr: 'Nos conformités NATO / SAM.gov', de: 'Unsere NATO- / SAM.gov-Compliance' }
    },
    trust: {
      title: { tr: 'Operasyonel güven damgaları', en: 'Operational trust marks', fr: 'Labels de confiance opérationnels', de: 'Gütesiegel für Einsatzvertrauen' },
      body: { tr: 'Uluslararası otoritelerce doğrulanmış kimliğimiz kritik programlarda sorunsuz entegrasyon sağlar.', en: 'Our credentials verified by international authorities ensure smooth integration in critical programs.', fr: 'Nos références validées par des autorités internationales garantissent une intégration fluide dans les programmes critiques.', de: 'Unsere von internationalen Behörden bestätigten Referenzen ermöglichen reibungslose Integration in kritische Programme.' },
      nspa: { tr: 'Aktif NATO vendor kaydı', en: 'Active NATO vendor record', fr: 'Enregistrement fournisseur OTAN actif', de: 'Aktiver NATO-Lieferantenstatus' },
      ncage: { tr: 'NCAGE kodu', en: 'NCAGE code', fr: 'Code NCAGE', de: 'NCAGE-Code' },
      uei: { tr: 'UEI ID', en: 'UEI ID', fr: 'Identifiant UEI', de: 'UEI-ID' },
      sam: { tr: 'Aktif tedarikçi profili', en: 'Active supplier profile', fr: 'Profil fournisseur actif', de: 'Aktives Lieferantenprofil' }
    },
    products: {
      title: { tr: 'Ürün portföyü', en: 'Product portfolio', fr: 'Portefeuille de produits', de: 'Produktportfolio' },
      subtitle: { tr: 'Elektronik harp ve radar görevleri için savaş sahasında kanıtlanmış sistemler.', en: 'Battle-proven systems for electronic warfare and radar missions.', fr: 'Des systèmes éprouvés pour les missions de guerre électronique et de radar.', de: 'Kampferprobte Systeme für elektronische Kampfführung und Radarmissionen.' },
      detail: { tr: 'Teknik detaylar', en: 'Technical details', fr: 'Détails techniques', de: 'Technische Details' },
      rf45: {
        title: { tr: 'PTS RF-45 Jammer', en: 'PTS RF-45 Jammer', fr: 'PTS RF-45 Jammer', de: 'PTS RF-45 Jammer' },
        body: { tr: 'Yüksek çıkış güçlü, geniş bant bastırma için modüler RF jammer.', en: 'Modular RF jammer with high output power for wideband suppression.', fr: 'Brouilleur RF modulaire à haute puissance pour une suppression large bande.', de: 'Modularer RF-Störsender mit hoher Ausgangsleistung für Breitbandsuppression.' },
        tag: { tr: 'RF Bastırma', en: 'RF Jamming', fr: 'Brouillage RF', de: 'RF-Störung' }
      },
      falcon: {
        title: { tr: 'PTS Falcon Jammer', en: 'PTS Falcon Jammer', fr: 'PTS Falcon Jammer', de: 'PTS Falcon Jammer' },
        body: { tr: 'Hafif platformlar için çok bantlı, programlanabilir jammer mimarisi.', en: 'Multiband, programmable jammer architecture for light platforms.', fr: 'Architecture de brouilleur multibande et programmable pour plateformes légères.', de: 'Mehrbandige, programmierbare Störsender-Architektur für leichte Plattformen.' },
        tag: { tr: 'Hafif EW', en: 'Light EW', fr: 'GE légère', de: 'Leichte EW' }
      },
      r400: {
        title: { tr: 'PTS R-400 Sentinel Radar', en: 'PTS R-400 Sentinel Radar', fr: 'PTS R-400 Sentinel Radar', de: 'PTS R-400 Sentinel Radar' },
        body: { tr: '360° çevresel gözetleme ve erken uyarı için kompakt radar.', en: 'Compact radar for 360° situational surveillance and early warning.', fr: 'Radar compact pour surveillance 360° et alerte précoce.', de: 'Kompaktes Radar für 360°-Überwachung und Frühwarnung.' },
        tag: { tr: 'Gözetleme', en: 'Surveillance', fr: 'Surveillance', de: 'Überwachung' }
      },
      groza: {
        title: { tr: 'Groza-1 / Groza-2 OEM Production', en: 'Groza-1 / Groza-2 OEM Production', fr: 'Production OEM Groza-1 / Groza-2', de: 'Groza-1 / Groza-2 OEM-Produktion' },
        body: { tr: 'Groza ailesi için lisanslı OEM üretim, kalifikasyon desteği ile.', en: 'Licensed OEM production for the Groza family with qualification support.', fr: 'Production OEM agréée pour la famille Groza avec support de qualification.', de: 'Lizenzierte OEM-Produktion für die Groza-Familie mit Qualifikationssupport.' },
        tag: { tr: 'OEM Üretim', en: 'OEM Production', fr: 'Production OEM', de: 'OEM-Fertigung' }
      }
    },
    mission: {
      title: { tr: 'Misyon ve kabiliyetler', en: 'Mission and capabilities', fr: 'Mission et capacités', de: 'Mission und Fähigkeiten' },
      concept: {
        title: { tr: 'Konseptten sahaya', en: 'From concept to field', fr: 'Du concept au terrain', de: 'Vom Konzept zum Einsatz' },
        body: { tr: 'Kavramsal tasarımdan üretim ve saha lojistiğine kadar tam yaşam döngüsü desteği sağlıyoruz.', en: 'We provide full lifecycle support from conceptual design to production and field logistics.', fr: 'Nous assurons un soutien complet du concept à la production et à la logistique terrain.', de: 'Wir bieten vollständige Lebenszyklusunterstützung vom Konzept bis zur Produktion und Feldlogistik.' },
        item1: { tr: 'Platform entegrasyonu ve EMC/EMI sertifikasyonu', en: 'Platform integration and EMC/EMI certification', fr: 'Intégration de plateforme et certification CEM/EMI', de: 'Plattformintegration und EMV/EMI-Zertifizierung' },
        item2: { tr: 'Çevik sprint tabanlı yazılım/donanım geliştirme', en: 'Agile sprint-based software/hardware development', fr: 'Développement logiciel/matériel agile par sprints', de: 'Agile Sprint-basierte Software-/Hardwareentwicklung' },
        item3: { tr: 'Operasyonel test, kalifikasyon ve eğitim paketleri', en: 'Operational testing, qualification, and training packages', fr: 'Tests opérationnels, qualification et packages de formation', de: 'Operationelle Tests, Qualifikation und Schulungspakete' }
      },
      compliance: {
        title: { tr: 'Uyum ve güven', en: 'Compliance and assurance', fr: 'Conformité et assurance', de: 'Compliance und Vertrauen' },
        body: { tr: 'NATO, EU ve ABD tedarik kurallarına uygun kalite ve tedarik zinciri yönetimi.', en: 'Quality and supply chain management aligned with NATO, EU, and US procurement rules.', fr: 'Gestion de la qualité et de la chaîne d\'approvisionnement conforme aux règles d\'achat de l\'OTAN, de l\'UE et des États-Unis.', de: 'Qualitäts- und Lieferkettenmanagement gemäß NATO-, EU- und US-Beschaffungsregeln.' },
        item1: { tr: 'NATO NSPA vendor: aktif', en: 'NATO NSPA vendor: active', fr: 'Fournisseur NSPA de l\'OTAN : actif', de: 'NATO-NSPA-Lieferant: aktiv' },
        item2: { tr: 'NCAGE: 022CJ · UEI: Z1VDMSSCTGKS', en: 'NCAGE: 022CJ · UEI: Z1VDMSSCTGKS', fr: 'NCAGE : 022CJ · UEI : Z1VDMSSCTGKS', de: 'NCAGE: 022CJ · UEI: Z1VDMSSCTGKS' },
        item3: { tr: 'SAM.gov kaydı: aktif', en: 'SAM.gov registration: active', fr: 'Enregistrement SAM.gov : actif', de: 'SAM.gov-Registrierung: aktiv' }
      }
    }
  },
  about: {
    breadcrumb: { tr: 'Ana Sayfa / Hakkımızda', en: 'Home / About', fr: 'Accueil / À propos', de: 'Startseite / Über uns' },
    hero: {
      title: { tr: 'PTS Defense: güvenilir uluslararası tedarikçi', en: 'PTS Defense: trusted international supplier', fr: 'PTS Defense : fournisseur international de confiance', de: 'PTS Defense: vertrauenswürdiger internationaler Anbieter' },
      body: { tr: 'Elektronik harp, radar ve OEM üretim kabiliyetlerini NATO ve müttefik gereksinimleriyle uyumlu olarak geliştiriyoruz.', en: 'We develop electronic warfare, radar, and OEM production capabilities aligned with NATO and allied requirements.', fr: 'Nous développons des capacités de guerre électronique, de radar et de production OEM alignées sur les exigences de l\'OTAN et des alliés.', de: 'Wir entwickeln Fähigkeiten in elektronischer Kampfführung, Radar und OEM-Fertigung im Einklang mit NATO- und Partneranforderungen.' }
    },
    identity: {
      title: { tr: 'Kurum kimliği', en: 'Corporate identity', fr: 'Identité de l\'entreprise', de: 'Unternehmensidentität' },
      body: { tr: 'Estonya merkezli PTS Defense, Avrupa Birliği ve NATO tedarik zincirine entegre çözümler sunar.', en: 'Estonia-based PTS Defense delivers solutions integrated into EU and NATO supply chains.', fr: 'Basée en Estonie, PTS Defense fournit des solutions intégrées aux chaînes d\'approvisionnement de l\'UE et de l\'OTAN.', de: 'PTS Defense mit Sitz in Estland liefert Lösungen, die in EU- und NATO-Lieferketten integriert sind.' },
      item1: { tr: 'NCAGE kodu: <span class="highlight">022CJ</span>', en: 'NCAGE code: <span class="highlight">022CJ</span>', fr: 'Code NCAGE : <span class="highlight">022CJ</span>', de: 'NCAGE-Code: <span class="highlight">022CJ</span>' },
      item2: { tr: 'UEI ID: <span class="highlight">Z1VDMSSCTGKS</span>', en: 'UEI ID: <span class="highlight">Z1VDMSSCTGKS</span>', fr: 'ID UEI : <span class="highlight">Z1VDMSSCTGKS</span>', de: 'UEI-ID: <span class="highlight">Z1VDMSSCTGKS</span>' },
      item3: { tr: 'NATO NSPA vendor kaydı: <strong>aktif</strong>', en: 'NATO NSPA vendor record: <strong>active</strong>', fr: 'Enregistrement fournisseur NSPA OTAN : <strong>actif</strong>', de: 'NATO-NSPA-Lieferantenstatus: <strong>aktiv</strong>' },
      item4: { tr: 'SAM.gov tedarikçi kaydı: <strong>aktif</strong>', en: 'SAM.gov supplier record: <strong>active</strong>', fr: 'Enregistrement fournisseur SAM.gov : <strong>actif</strong>', de: 'SAM.gov-Lieferantenregistrierung: <strong>aktiv</strong>' }
    },
    ops: {
      title: { tr: 'Operasyonel yaklaşım', en: 'Operational approach', fr: 'Approche opérationnelle', de: 'Operativer Ansatz' },
      body: { tr: 'Gereksinim analizi, çözüm mimarisi, üretim ve lojistik destek süreçlerinde çevik ve şeffaf ilerliyoruz.', en: 'We move agilely and transparently through requirements analysis, solution architecture, production, and logistics support.', fr: 'Nous avançons de manière agile et transparente sur l\'analyse des besoins, l\'architecture de solution, la production et le support logistique.', de: 'Wir agieren agil und transparent bei Bedarfsanalyse, Lösungsarchitektur, Produktion und logistischer Unterstützung.' },
      item1: { tr: 'ITAR ve ihracat kontrol süreçlerinde danışmanlık', en: 'Advisory on ITAR and export control processes', fr: 'Conseil sur les processus ITAR et de contrôle des exportations', de: 'Beratung zu ITAR- und Exportkontrollprozessen' },
      item2: { tr: 'Çoklu domain entegrasyonu (kara, hava, deniz, siber)', en: 'Multi-domain integration (land, air, sea, cyber)', fr: 'Intégration multi-domaines (terre, air, mer, cyber)', de: 'Multidomain-Integration (Land, Luft, See, Cyber)' },
      item3: { tr: 'Yaşam döngüsü destek ve modernizasyon planları', en: 'Lifecycle support and modernization plans', fr: 'Support du cycle de vie et plans de modernisation', de: 'Lebenszyklusunterstützung und Modernisierungspläne' }
    },
    skills: {
      title: { tr: 'Yetkinliklerimiz', en: 'Our competencies', fr: 'Nos compétences', de: 'Unsere Kompetenzen' },
      ew: {
        title: { tr: 'Elektronik Harp', en: 'Electronic Warfare', fr: 'Guerre électronique', de: 'Elektronische Kampfführung' },
        body: { tr: 'Spektrum farkındalığı, bastırma ve aldatma görevleri için programlanabilir jammer mimarileri.', en: 'Programmable jammer architectures for spectrum awareness, denial, and deception missions.', fr: 'Architectures de brouilleurs programmables pour la connaissance du spectre, le déni et la tromperie.', de: 'Programmierbare Störsender-Architekturen für Spektrumüberwachung, Verweigerung und Täuschung.' }
      },
      radar: {
        title: { tr: 'Radar Teknolojileri', en: 'Radar Technologies', fr: 'Technologies radar', de: 'Radartechnologien' },
        body: { tr: 'Kompakt gözetleme radarları, modüler anten sistemleri ve sinyal işleme optimizasyonu.', en: 'Compact surveillance radars, modular antenna systems, and signal processing optimization.', fr: 'Radars de surveillance compacts, systèmes d\'antennes modulaires et optimisation du traitement du signal.', de: 'Kompakte Überwachungsradare, modulare Antennensysteme und Signalverarbeitungsoptimierung.' }
      },
      oem: {
        title: { tr: 'OEM ve Üretim', en: 'OEM and Production', fr: 'OEM et production', de: 'OEM und Produktion' },
        body: { tr: 'Groza ailesi dahil lisanslı üretim, kalite güvence ve kalifikasyon desteği.', en: 'Licensed production including the Groza family with quality assurance and qualification support.', fr: 'Production sous licence incluant la famille Groza avec assurance qualité et support de qualification.', de: 'Lizenzierte Produktion einschließlich der Groza-Familie mit Qualitätssicherung und Qualifikationssupport.' }
      }
    }
  },
  contact: {
    breadcrumb: { tr: 'Ana Sayfa / Kontakt', en: 'Home / Contact', fr: 'Accueil / Contact', de: 'Startseite / Kontakt' },
    hero: {
      title: { tr: 'Kontakt ve teklif', en: 'Contact and proposal', fr: 'Contact et proposition', de: 'Kontakt und Angebot' },
      body: { tr: 'Operasyonel gereksinimlerinizi paylaşın, birlikte en uygun elektronik harp ve radar çözümünü kurgulayalım.', en: 'Share your operational requirements so we can shape the optimal EW and radar solution together.', fr: 'Partagez vos besoins opérationnels pour définir ensemble la meilleure solution GE et radar.', de: 'Teilen Sie Ihre Einsatzanforderungen, damit wir gemeinsam die optimale EW- und Radarlösung gestalten.' }
    },
    info: {
      title: { tr: 'İletişim bilgileri', en: 'Contact details', fr: 'Coordonnées', de: 'Kontaktangaben' },
      body: { tr: 'Güvenli iletişim kanalları üzerinden hızlı yanıt veriyoruz.', en: 'We provide rapid responses over secure communication channels.', fr: 'Nous répondons rapidement via des canaux de communication sécurisés.', de: 'Wir antworten schnell über sichere Kommunikationskanäle.' },
      email: { tr: 'E-posta: <a class="highlight" href="mailto:contact@pts-defense.example">contact@pts-defense.example</a>', en: 'Email: <a class="highlight" href="mailto:contact@pts-defense.example">contact@pts-defense.example</a>', fr: 'E-mail : <a class="highlight" href="mailto:contact@pts-defense.example">contact@pts-defense.example</a>', de: 'E-Mail: <a class="highlight" href="mailto:contact@pts-defense.example">contact@pts-defense.example</a>' },
      phone: { tr: 'Telefon: +372 0000 0000', en: 'Phone: +372 0000 0000', fr: 'Téléphone : +372 0000 0000', de: 'Telefon: +372 0000 0000' },
      hq: { tr: 'Merkez: Tallinn, Estonya', en: 'HQ: Tallinn, Estonia', fr: 'Siège : Tallinn, Estonie', de: 'Zentrale: Tallinn, Estland' },
      hours: { tr: 'Çalışma: 7/24 görev desteği', en: 'Operations: 24/7 mission support', fr: 'Activité : support de mission 24/7', de: 'Betrieb: 24/7 Einsatzunterstützung' }
    },
    form: {
      title: { tr: 'Talep formu', en: 'Request form', fr: 'Formulaire de demande', de: 'Anfrageformular' },
      body: { tr: 'Operasyonel senaryo, platform ve ihtiyaç duyulan teslim takvimiyle birlikte aşağıdaki bilgileri paylaşın:', en: 'Share the details below along with the operational scenario, platform, and required delivery timeline:', fr: 'Partagez les informations ci-dessous avec le scénario opérationnel, la plateforme et le calendrier de livraison souhaité :', de: 'Teilen Sie die folgenden Angaben zusammen mit Einsatzszenario, Plattform und gewünschtem Lieferzeitplan:' },
      item1: { tr: 'Görev tipi (EW, radar, OEM üretim)', en: 'Mission type (EW, radar, OEM production)', fr: 'Type de mission (GE, radar, production OEM)', de: 'Einsatztyp (EW, Radar, OEM-Fertigung)' },
      item2: { tr: 'Platform ve entegrasyon noktaları', en: 'Platform and integration points', fr: 'Plateforme et points d’intégration', de: 'Plattform und Integrationspunkte' },
      item3: { tr: 'Coğrafi ve çevresel koşullar', en: 'Geographical and environmental conditions', fr: 'Conditions géographiques et environnementales', de: 'Geografische und Umgebungsbedingungen' },
      item4: { tr: 'Sertifikasyon/uygunluk gereksinimleri', en: 'Certification/compliance requirements', fr: 'Exigences de certification/conformité', de: 'Zertifizierungs-/Compliance-Anforderungen' }
    }
  },
  rf45: {
    breadcrumb: { tr: 'Ana Sayfa / Ürünler / RF-45 Jammer', en: 'Home / Products / RF-45 Jammer', fr: 'Accueil / Produits / RF-45 Jammer', de: 'Startseite / Produkte / RF-45 Jammer' },
    hero: {
      title: { tr: 'PTS RF-45 Jammer', en: 'PTS RF-45 Jammer', fr: 'PTS RF-45 Jammer', de: 'PTS RF-45 Jammer' },
      body: { tr: 'Yüksek çıkış gücü ve geniş bant bastırma için sahada kanıtlanmış modüler RF jammer sistemi.', en: 'Field-proven modular RF jammer system for high output power and wideband denial.', fr: 'Brouilleur RF modulaire éprouvé pour forte puissance de sortie et déni large bande.', de: 'Bewährtes modulares RF-Störsystem für hohe Ausgangsleistung und Breitbandunterdrückung.' }
    },
    specs: {
      title: { tr: 'Teknik özellikler', en: 'Technical specifications', fr: 'Spécifications techniques', de: 'Technische Spezifikationen' },
      param: { tr: 'Parametre', en: 'Parameter', fr: 'Paramètre', de: 'Parameter' },
      value: { tr: 'Değer', en: 'Value', fr: 'Valeur', de: 'Wert' },
      band: { tr: 'Frekans bandı', en: 'Frequency band', fr: 'Bande de fréquences', de: 'Frequenzband' },
      bandValue: { tr: '30 MHz – 6 GHz (genişletilebilir)', en: '30 MHz – 6 GHz (expandable)', fr: '30 MHz – 6 GHz (extensible)', de: '30 MHz – 6 GHz (erweiterbar)' },
      power: { tr: 'Çıkış gücü', en: 'Output power', fr: 'Puissance de sortie', de: 'Ausgangsleistung' },
      powerValue: { tr: 'Her kanal için 150 W\'a kadar, toplam 1.2 kW', en: 'Up to 150 W per channel, total 1.2 kW', fr: 'Jusqu\'à 150 W par canal, total 1,2 kW', de: 'Bis zu 150 W pro Kanal, gesamt 1,2 kW' },
      modulation: { tr: 'Modülasyon', en: 'Modulation', fr: 'Modulation', de: 'Modulation' },
      modulationValue: { tr: 'Noise, barrage, spot, sweep, DRFM tabanlı teknikler', en: 'Noise, barrage, spot, sweep, DRFM-based techniques', fr: 'Techniques basées sur le bruit, barrage, spot, sweep et DRFM', de: 'Rausch-, Barrage-, Spot-, Sweep- und DRFM-basierte Techniken' },
      platform: { tr: 'Platform', en: 'Platform', fr: 'Plateforme', de: 'Plattform' },
      platformValue: { tr: 'Araç, sabit tesis ve konteyner kurulumu', en: 'Vehicle, fixed site, and container installations', fr: 'Installations sur véhicules, sites fixes et conteneurs', de: 'Fahrzeug-, Feststations- und Containerinstallationen' },
      cooling: { tr: 'Soğutma', en: 'Cooling', fr: 'Refroidissement', de: 'Kühlung' },
      coolingValue: { tr: 'Hibrit sıvı / hava soğutma, -32°C ile +55°C', en: 'Hybrid liquid/air cooling, -32°C to +55°C', fr: 'Refroidissement hybride liquide/air, -32°C à +55°C', de: 'Hybride Flüssig-/Luftkühlung, -32°C bis +55°C' },
      interfaces: { tr: 'Arayüzler', en: 'Interfaces', fr: 'Interfaces', de: 'Schnittstellen' },
      interfacesValue: { tr: 'Ethernet, seri, SNMP, MIL-STD-1553 opsiyonel', en: 'Ethernet, serial, SNMP, optional MIL-STD-1553', fr: 'Ethernet, série, SNMP, MIL-STD-1553 en option', de: 'Ethernet, seriell, SNMP, optional MIL-STD-1553' },
      compliance: { tr: 'Uyumluluk', en: 'Compliance', fr: 'Conformité', de: 'Konformität' },
      complianceValue: { tr: 'EMC/EMI MIL-STD-461, çevresel MIL-STD-810H', en: 'EMC/EMI MIL-STD-461, environmental MIL-STD-810H', fr: 'CEM/EMI MIL-STD-461, environnemental MIL-STD-810H', de: 'EMV/EMI MIL-STD-461, Umwelt MIL-STD-810H' }
    },
    use: {
      title: { tr: 'Kullanım alanları', en: 'Use cases', fr: 'Cas d’usage', de: 'Einsatzbereiche' },
      item1: { tr: 'Konvoy ve üs savunması için RF bastırma', en: 'RF suppression for convoy and base defense', fr: 'Suppression RF pour la défense de convois et de bases', de: 'RF-Unterdrückung für Konvoi- und Basisverteidigung' },
      item2: { tr: 'IED/EOD görevleri ve insansız sistemlere karşı koruma', en: 'IED/EOD missions and protection against unmanned systems', fr: 'Missions IED/EOD et protection contre les systèmes sans équipage', de: 'IED/EOD-Einsätze und Schutz vor unbemannten Systemen' },
      item3: { tr: 'Hibrit tehdit ortamında iletişim engelleme', en: 'Communication denial in hybrid threat environments', fr: 'Déni de communication dans des environnements de menaces hybrides', de: 'Kommunikationsverweigerung in hybriden Bedrohungsumgebungen' },
      item4: { tr: 'Hızlı konuşlandırma için konteyner/kule entegrasyonu', en: 'Container/tower integration for rapid deployment', fr: 'Intégration conteneur/tour pour déploiement rapide', de: 'Container-/Turmintegration für schnelle Verlegung' }
    },
    detail: {
      title: { tr: 'Detay açıklamalar', en: 'Detailed notes', fr: 'Notes détaillées', de: 'Detaillierte Hinweise' },
      body1: { tr: 'RF-45, modüler RF amplifikatör blokları sayesinde görev profiline göre yeniden yapılandırılabilir. Yüksek dinamik aralıkta ön-alıcı mimarisi, dost sinyalleri korurken düşman yayınlarını etkili biçimde bastırır.', en: 'RF-45 can be reconfigured per mission profile thanks to modular RF amplifier blocks. Its high dynamic range front-end protects friendly signals while effectively suppressing hostile emissions.', fr: 'Le RF-45 peut être reconfiguré selon le profil de mission grâce à ses blocs d’amplificateurs RF modulaires. Son entrée à large plage dynamique protège les signaux amis tout en supprimant efficacement les émissions adverses.', de: 'Der RF-45 lässt sich dank modularer RF-Verstärkerblöcke je nach Einsatzprofil neu konfigurieren. Sein Frontend mit hohem Dynamikbereich schützt eigene Signale und unterdrückt gegnerische Aussendungen wirkungsvoll.' },
      body2: { tr: 'Yerleşik tehdit kütüphanesi ve uzaktan yönetim arayüzleri, saha ekiplerinin dinamik frekans planlarını dakikalar içinde güncellemesine olanak tanır. Yazılım tanımlı mimari sayesinde yeni modülasyon ve dalga şekilleri hızla eklenebilir.', en: 'An embedded threat library and remote management interfaces let field teams refresh dynamic frequency plans within minutes. The software-defined architecture enables rapid addition of new modulations and waveforms.', fr: 'Une bibliothèque de menaces intégrée et des interfaces de gestion à distance permettent aux équipes terrain de mettre à jour leurs plans de fréquences dynamiques en quelques minutes. L’architecture définie par logiciel permet d’ajouter rapidement de nouvelles modulations et formes d’onde.', de: 'Eine integrierte Bedrohungsbibliothek und Remote-Management-Schnittstellen ermöglichen es Einsatzteams, dynamische Frequenzpläne in Minuten zu aktualisieren. Die softwaredefinierte Architektur erlaubt die schnelle Ergänzung neuer Modulationen und Wellenformen.' }
    },
    packages: {
      title: { tr: 'Görev odaklı paketler', en: 'Mission-focused packages', fr: 'Packages orientés mission', de: 'Missionsorientierte Pakete' },
      item1: { tr: 'Geniş bant 360° anten kulesi ve yönlü anten setleri', en: 'Wideband 360° antenna tower and directional sets', fr: 'Tour d’antennes 360° large bande et ensembles directionnels', de: 'Breitband-360°-Antennenturm und Richtantennensätze' },
      item2: { tr: 'Akü/sessiz jeneratör tabanlı enerji çözümleri', en: 'Battery/silent-generator power solutions', fr: 'Solutions d’alimentation sur batterie/générateur silencieux', de: 'Stromlösungen mit Batterie/leise Generatoren' },
      item3: { tr: 'Korunaklı rack-mount kontrol birimi', en: 'Hardened rack-mount control unit', fr: 'Unité de contrôle rack renforcée', de: 'Gehärtete Rackmount-Steuereinheit' },
      item4: { tr: 'Entegre kayıt ve görev sonrası analiz modülleri', en: 'Integrated recording and post-mission analysis modules', fr: 'Modules intégrés d’enregistrement et d’analyse post-mission', de: 'Integrierte Aufzeichnungs- und Nachanalyse-Module' }
    }
  }
};

const resolveTranslation = (path, lang) => {
  const [first, ...rest] = path.split('.');
  const lookupOrder = [translations[path.split('.')[0]] || {}, translations.common, translations.index];

  for (const scope of lookupOrder) {
    let current = scope;
    for (const segment of path.split('.')) {
      if (!current) break;
      current = current[segment];
    }
    if (current && typeof current === 'object' && lang in current) {
      return current[lang];
    }
  }
  return null;
};

const applyTranslations = (lang) => {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const value = resolveTranslation(key, lang);
    if (!value) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = value;
    } else {
      el.innerHTML = value;
    }
  });
};

const setupLanguageSwitcher = () => {
  const searchLang = new URLSearchParams(window.location.search).get('lang');
  const storedLang = localStorage.getItem('lang');
  const lang = searchLang || storedLang || 'tr';
  applyTranslations(lang);

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const targetLang = btn.dataset.lang;
      const url = new URL(window.location.href);
      url.searchParams.set('lang', targetLang);
      window.history.replaceState({}, '', url);
      localStorage.setItem('lang', targetLang);
      applyTranslations(targetLang);
    });
  });
};

document.addEventListener('DOMContentLoaded', setupLanguageSwitcher);
