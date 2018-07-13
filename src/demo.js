import React from "react";
import Select from "./components/Select";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

// all countries
const suggestions = [
  { label: "Afghanistan (AF)" },
  { label: "Afrique du Sud (ZA)" },
  { label: "Albanie (AL)" },
  { label: "Algérie (DZ)" },
  { label: "Allemagne (DE)" },
  { label: "Andorre (AD)" },
  { label: "Angola (AO)" },
  { label: "Anguilla (AI)" },
  { label: "Antarctique (AQ)" },
  { label: "Antigua-et-Barbuda (AG)" },
  { label: "Arabie saoudite (SA)" },
  { label: "Argentine (AR)" },
  { label: "Arménie (AM)" },
  { label: "Aruba (AW)" },
  { label: "Australie (AU)" },
  { label: "Autriche (AT)" },
  { label: "Azerbaïdjan (AZ)" },
  { label: "Bahamas (BS)" },
  { label: "Bahreïn (BH)" },
  { label: "Bangladesh (BD)" },
  { label: "Barbade (BB)" },
  { label: "Belgique (BE)" },
  { label: "Belize (BZ)" },
  { label: "Bénin (BJ)" },
  { label: "Bermudes (BM)" },
  { label: "Bhoutan (BT)" },
  { label: "Biélorussie (BY)" },
  { label: "Bolivie (BO)" },
  { label: "Bosnie-Herzégovine (BA)" },
  { label: "Botswana (BW)" },
  { label: "Brésil (BR)" },
  { label: "Brunéi Darussalam (BN)" },
  { label: "Bulgarie (BG)" },
  { label: "Burkina Faso (BF)" },
  { label: "Burundi (BI)" },
  { label: "Cambodge (KH)" },
  { label: "Cameroun (CM)" },
  { label: "Canada (CA)" },
  { label: "Cap-Vert (CV)" },
  { label: "Ceuta et Melilla (EA)" },
  { label: "Chili (CL)" },
  { label: "Chine (CN)" },
  { label: "Chypre (CY)" },
  { label: "Colombie (CO)" },
  { label: "Comores (KM)" },
  { label: "Congo-Brazzaville (CG)" },
  { label: "Congo-Kinshasa (CD)" },
  { label: "Corée du Nord (KP)" },
  { label: "Corée du Sud (KR)" },
  { label: "Costa Rica (CR)" },
  { label: "Côte d’Ivoire (CI)" },
  { label: "Croatie (HR)" },
  { label: "Cuba (CU)" },
  { label: "Curaçao (CW)" },
  { label: "Danemark (DK)" },
  { label: "Diego Garcia (DG)" },
  { label: "Djibouti (DJ)" },
  { label: "Dominique (DM)" },
  { label: "Égypte (EG)" },
  { label: "El Salvador (SV)" },
  { label: "Émirats arabes unis (AE)" },
  { label: "Équateur (EC)" },
  { label: "Érythrée (ER)" },
  { label: "Espagne (ES)" },
  { label: "Estonie (EE)" },
  { label: "État de la Cité du Vatican (VA)" },
  { label: "États fédérés de Micronésie (FM)" },
  { label: "États-Unis (US)" },
  { label: "Éthiopie (ET)" },
  { label: "Eurozone (EZ)" },
  { label: "Fidji (FJ)" },
  { label: "Finlande (FI)" },
  { label: "France (FR)" },
  { label: "Gabon (GA)" },
  { label: "Gambie (GM)" },
  { label: "Géorgie (GE)" },
  { label: "Géorgie du Sud et îles Sandwich du Sud (GS)" },
  { label: "Ghana (GH)" },
  { label: "Gibraltar (GI)" },
  { label: "Grèce (GR)" },
  { label: "Grenade (GD)" },
  { label: "Groenland (GL)" },
  { label: "Guadeloupe (GP)" },
  { label: "Guam (GU)" },
  { label: "Guatemala (GT)" },
  { label: "Guernesey (GG)" },
  { label: "Guinée (GN)" },
  { label: "Guinée équatoriale (GQ)" },
  { label: "Guinée-Bissau (GW)" },
  { label: "Guyana (GY)" },
  { label: "Guyane française (GF)" },
  { label: "Haïti (HT)" },
  { label: "Honduras (HN)" },
  { label: "Hongrie (HU)" },
  { label: "Île Christmas (CX)" },
  { label: "Île de l’Ascension (AC)" },
  { label: "Île de Man (IM)" },
  { label: "Île Norfolk (NF)" },
  { label: "Îles Åland (AX)" },
  { label: "Îles Caïmans (KY)" },
  { label: "Îles Canaries (IC)" },
  { label: "Îles Cocos (CC)" },
  { label: "Îles Cook (CK)" },
  { label: "Îles Féroé (FO)" },
  { label: "Îles Malouines (FK)" },
  { label: "Îles Mariannes du Nord (MP)" },
  { label: "Îles Marshall (MH)" },
  { label: "Îles mineures éloignées des États-Unis (UM)" },
  { label: "Îles Pitcairn (PN)" },
  { label: "Îles Salomon (SB)" },
  { label: "Îles Turques-et-Caïques (TC)" },
  { label: "Îles Vierges britanniques (VG)" },
  { label: "Îles Vierges des États-Unis (VI)" },
  { label: "Inde (IN)" },
  { label: "Indonésie (ID)" },
  { label: "Irak (IQ)" },
  { label: "Iran (IR)" },
  { label: "Irlande (IE)" },
  { label: "Islande (IS)" },
  { label: "Israël (IL)" },
  { label: "Italie (IT)" },
  { label: "Jamaïque (JM)" },
  { label: "Japon (JP)" },
  { label: "Jersey (JE)" },
  { label: "Jordanie (JO)" },
  { label: "Kazakhstan (KZ)" },
  { label: "Kenya (KE)" },
  { label: "Kirghizistan (KG)" },
  { label: "Kiribati (KI)" },
  { label: "Kosovo (XK)" },
  { label: "Koweït (KW)" },
  { label: "La Réunion (RE)" },
  { label: "Laos (LA)" },
  { label: "Lesotho (LS)" },
  { label: "Lettonie (LV)" },
  { label: "Liban (LB)" },
  { label: "Libéria (LR)" },
  { label: "Libye (LY)" },
  { label: "Liechtenstein (LI)" },
  { label: "Lituanie (LT)" },
  { label: "Luxembourg (LU)" },
  { label: "Macédoine (MK)" },
  { label: "Madagascar (MG)" },
  { label: "Malaisie (MY)" },
  { label: "Malawi (MW)" },
  { label: "Maldives (MV)" },
  { label: "Mali (ML)" },
  { label: "Malte (MT)" },
  { label: "Maroc (MA)" },
  { label: "Martinique (MQ)" },
  { label: "Maurice (MU)" },
  { label: "Mauritanie (MR)" },
  { label: "Mayotte (YT)" },
  { label: "Mexique (MX)" },
  { label: "Moldavie (MD)" },
  { label: "Monaco (MC)" },
  { label: "Mongolie (MN)" },
  { label: "Monténégro (ME)" },
  { label: "Montserrat (MS)" },
  { label: "Mozambique (MZ)" },
  { label: "Myanmar (Birmanie) (MM)" },
  { label: "Namibie (NA)" },
  { label: "Nations Unies (UN)" },
  { label: "Nauru (NR)" },
  { label: "Népal (NP)" },
  { label: "Nicaragua (NI)" },
  { label: "Niger (NE)" },
  { label: "Nigéria (NG)" },
  { label: "Niue (NU)" },
  { label: "Norvège (NO)" },
  { label: "Nouvelle-Calédonie (NC)" },
  { label: "Nouvelle-Zélande (NZ)" },
  { label: "Oman (OM)" },
  { label: "Ouganda (UG)" },
  { label: "Ouzbékistan (UZ)" },
  { label: "Pakistan (PK)" },
  { label: "Palaos (PW)" },
  { label: "Panama (PA)" },
  { label: "Papouasie-Nouvelle-Guinée (PG)" },
  { label: "Paraguay (PY)" },
  { label: "Pays-Bas (NL)" },
  { label: "Pays-Bas caribéens (BQ)" },
  { label: "Pérou (PE)" },
  { label: "Philippines (PH)" },
  { label: "Pologne (PL)" },
  { label: "Polynésie française (PF)" },
  { label: "Porto Rico (PR)" },
  { label: "Portugal (PT)" },
  { label: "Qatar (QA)" },
  { label: "R.A.S. chinoise de Hong Kong (HK)" },
  { label: "R.A.S. chinoise de Macao (MO)" },
  { label: "République centrafricaine (CF)" },
  { label: "République dominicaine (DO)" },
  { label: "Roumanie (RO)" },
  { label: "Royaume-Uni (GB)" },
  { label: "Russie (RU)" },
  { label: "Rwanda (RW)" },
  { label: "Sahara occidental (EH)" },
  { label: "Saint-Barthélemy (BL)" },
  { label: "Saint-Christophe-et-Niévès (KN)" },
  { label: "Saint-Marin (SM)" },
  { label: "Saint-Martin (MF)" },
  { label: "Saint-Martin (partie néerlandaise) (SX)" },
  { label: "Saint-Pierre-et-Miquelon (PM)" },
  { label: "Saint-Vincent-et-les-Grenadines (VC)" },
  { label: "Sainte-Hélène (SH)" },
  { label: "Sainte-Lucie (LC)" },
  { label: "Samoa (WS)" },
  { label: "Samoa américaines (AS)" },
  { label: "Sao Tomé-et-Principe (ST)" },
  { label: "Sénégal (SN)" },
  { label: "Serbie (RS)" },
  { label: "Seychelles (SC)" },
  { label: "Sierra Leone (SL)" },
  { label: "Singapour (SG)" },
  { label: "Slovaquie (SK)" },
  { label: "Slovénie (SI)" },
  { label: "Somalie (SO)" },
  { label: "Soudan (SD)" },
  { label: "Soudan du Sud (SS)" },
  { label: "Sri Lanka (LK)" },
  { label: "Suède (SE)" },
  { label: "Suisse (CH)" },
  { label: "Suriname (SR)" },
  { label: "Svalbard et Jan Mayen (SJ)" },
  { label: "Swaziland (SZ)" },
  { label: "Syrie (SY)" },
  { label: "Tadjikistan (TJ)" },
  { label: "Taïwan (TW)" },
  { label: "Tanzanie (TZ)" },
  { label: "Tchad (TD)" },
  { label: "Tchéquie (CZ)" },
  { label: "Terres australes françaises (TF)" },
  { label: "Territoire britannique de l’océan Indien (IO)" },
  { label: "Territoires palestiniens (PS)" },
  { label: "Thaïlande (TH)" },
  { label: "Timor oriental (TL)" },
  { label: "Togo (TG)" },
  { label: "Tokélaou (TK)" },
  { label: "Tonga (TO)" },
  { label: "Trinité-et-Tobago (TT)" },
  { label: "Tristan da Cunha (TA)" },
  { label: "Tunisie (TN)" },
  { label: "Turkménistan (TM)" },
  { label: "Turquie (TR)" },
  { label: "Tuvalu (TV)" },
  { label: "Ukraine (UA)" },
  { label: "Uruguay (UY)" },
  { label: "Vanuatu (VU)" },
  { label: "Venezuela (VE)" },
  { label: "Vietnam (VN)" },
  { label: "Wallis-et-Futuna (WF)" },
  { label: "Yémen (YE)" },
  { label: "Zambie (ZM)" },
  { label: "Zimbabwe (ZW)" }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

class Demo extends React.Component {
  state = {
    single: null,
    multi: null,
    multiLabel: null,
    multiLabelCreatable: null
  };

  handleChange = name => value => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Input
          fullWidth
          inputComponent={Select}
          value={this.state.single}
          onChange={this.handleChange("single")}
          placeholder="Choisissez un pays..."
          id="react-select-single"
          inputProps={{
            classes,
            name: "react-select-single",
            instanceId: "react-select-single",
            simpleValue: true,
            options: suggestions
          }}
        />
        <Input
          fullWidth
          inputComponent={Select}
          value={this.state.multi}
          onChange={this.handleChange("multi")}
          placeholder="Choisissez plusieurs pays..."
          name="react-select-chip"
          inputProps={{
            classes,
            multi: true,
            instanceId: "react-select-chip",
            id: "react-select-chip",
            simpleValue: true,
            options: suggestions
          }}
        />
        <TextField
          fullWidth
          value={this.state.multiLabel}
          onChange={this.handleChange("multiLabel")}
          placeholder="Choisissez plusieurs pays..."
          name="react-select-chip-label"
          label="Avec un label"
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{
            inputComponent: Select,
            inputProps: {
              classes,
              multi: true,
              instanceId: "react-select-chip-label",
              id: "react-select-chip-label",
              simpleValue: true,
              options: suggestions
            }
          }}
        />
        <TextField
          fullWidth
          value={this.state.multiLabelCreatable}
          onChange={this.handleChange("multiLabelCreatable")}
          placeholder="Choisissez plusieurs pays..."
          name="react-select-chip-label"
          label="Avec un label + possibilité de créer des éléments à la volée"
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{
            inputComponent: Select,
            inputProps: {
              classes,
              multi: true,
              creatable: true,
              instanceId: "react-select-chip-label",
              id: "react-select-chip-label",
              simpleValue: true,
              options: suggestions
            }
          }}
        />
      </div>
    );
  }
}

export default Demo;
