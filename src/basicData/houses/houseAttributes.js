export const houseAttributes = {
  fastighetstyper: [
    { label: "Hus", value: "hus" },
    { label: "Villa", value: "villa" },
    { label: "Lägenhet", value: "lagenhet" },
  ],
  affarstyper: [
    { label: "Försäljning", value: "forsaljning" },
    { label: "Uthyrning", value: "uthyrning" },
  ],
  kok: [
    { label: "Kylskåp", value: "kylskap" },
    { label: "Diskmaskin", value: "diskmaskin" },
    { label: "Frys", value: "frys" },
    { label: "Ugn", value: "ugn" },
    { label: "Spis", value: "spis" },
    { label: "Mikrovågsugn", value: "mikrovagsugn" },
  ],
  teknik: [
    { label: "Internet", value: "internet", detaljer: "100/10 Mbps Fiber" },
    { label: "TV", value: "tv", detaljer: "Grundpaket med 50 kanaler" },
  ],
  populara: [
    {
      label: "Balkong/Uteplats",
      value: "balkong_uteplats",
      detaljer: "15 kvm med parkvy",
    },
    { label: "Egen bastu", value: "egen_bastu", detaljer: "Elektrisk" },
    {
      label: "Bubbelpool",
      value: "bubbelpool",
      detaljer: "Kapacitet för 4 personer",
    },
    {
      label: "Eldstad inomhus",
      value: "eldstad_inomhus",
      detaljer: "Braskamin",
    },
    { label: "Pool", value: "pool", detaljer: "8x4 meter, uppvärmd" },
  ],
  parkeringOchHjalpmedel: [
    { label: "Cykelrum", value: "cykelrum", detaljer: "Låst och övervakat" },
    { label: "Förråd", value: "forrad", detaljer: "5 kvm" },
    { label: "Hiss", value: "hiss", detaljer: "Kapacitet för 6 personer" },
    { label: "Parkering", value: "parkering", detaljer: "Markparkering" },
    {
      label: "Återvinningsrum",
      value: "atervinningsrum",
      detaljer: "Sorteringsmöjligheter för glas, papper, metall, plast",
    },
    {
      label: "Laddbox till elbil",
      value: "laddbox_till_elbil",
      detaljer: "11 kW effekt",
    },
  ],
};
