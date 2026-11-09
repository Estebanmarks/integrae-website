export type Publication = {
  id: string;
  kind: 'Journal article' | 'Conference research';
  citation: string;
  href: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

/** Verified public publication links only. The 2007 TU Wien record is intentionally omitted pending title review. */
export const publications: Publication[] = [
  {
    id: 'msea-2008',
    kind: 'Journal article',
    citation:
      'Requena, G., Degischer, H.-P., Marks, E. D., and Boller, E. (2008). "Microtomographic study of the evolution of microstructure during creep of an AlSi12CuMgNi alloy reinforced with Al2O3 short fibres." Materials Science and Engineering: A, 487(1-2), 99-107.',
    href: 'https://doi.org/10.1016/j.msea.2007.10.016',
    secondaryHref: 'https://repositum.tuwien.at/rest/person/publications_html/tiss_id/47817?lang=de',
    secondaryLabel: 'TU Wien bibliographic record',
  },
  {
    id: 'pacam-2010',
    kind: 'Conference research',
    citation:
      'Marks, E., Requena, G., and Degischer, H.-P. (2010). "3D Creep Modelling of a Short Fibre Reinforced Aluminium Alloy: Interconnectivity and Load Sequences." PACAM XI - Pan-American Congress of Applied Mechanics proceedings.',
    href: 'https://www.researchgate.net/publication/267254340_3D_CREEP_MODELLING_OF_A_SHORT_FIBRE_REINFORCED_ALUMINIUM_ALLOY_INTERCONNECTIVITY_AND_LOAD_SEQUENCES',
  },
];
