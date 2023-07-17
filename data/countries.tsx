export const countries = {
  Afghanistan: null,
  Albania: null,
  Algeria: null,
  Andorra: null,
  Angola: null,
  'Antigua And Barbuda': null,
  Argentina: null,
  Armenia: null,
  Australia: null,
  Austria: null,
  Azerbaijan: null,
  'Bahamas, The': null,
  Bahrain: null,
  Bangladesh: null,
  Barbados: null,
  Belarus: null,
  Belgium: null,
  Belize: null,
  'Benin (Dahomey)': null,
  Bolivia: null,
  'Bosnia And Herzegovina': null,
  Botswana: null,
  Brazil: null,
  Brunei: null,
  'Brunswick And Lüneburg': null,
  Bulgaria: null,
  'Burkina Faso (Upper Volta)': null,
  Burundi: null,
  'Cabo Verde': null,
  Cambodia: null,
  Cameroon: null,
  Canada: null,
  'Cayman Islands, The': null,
  'Central African Republic': null,
  Chad: null,
  Chile: null,
  China: null,
  Colombia: null,
  Comoros: null,
  'Costa Rica': null,
  'Cote D’ivoire (Ivory Coast)': null,
  Croatia: null,
  Cuba: null,
  Cyprus: null,
  Czechia: null,
  'Democratic Republic Of The Congo': null,
  Denmark: null,
  Djibouti: null,
  Dominica: null,
  'Dominican Republic': null,
  Ecuador: null,
  England: null,
  Egypt: null,
  'El Salvador': null,
  'Equatorial Guinea': null,
  Eritrea: null,
  Estonia: null,
  Eswatini: null,
  Ethiopia: null,
  Fiji: null,
  Finland: null,
  France: null,
  Gabon: null,
  'Gambia, The': null,
  Georgia: null,
  Germany: null,
  Ghana: null,
  Greece: null,
  Greenland: null,
  Grenada: null,
  Guatemala: null,
  Guinea: null,
  'Guinea-Bissau': null,
  Guyana: null,
  Haiti: null,
  'Hanseatic Republics': null,
  Honduras: null,
  Hungary: null,
  Iceland: null,
  India: null,
  Indonesia: null,
  Iran: null,
  Iraq: null,
  Ireland: null,
  Israel: null,
  Italy: null,
  Jamaica: null,
  Japan: null,
  Jordan: null,
  Kazakhstan: null,
  Kenya: null,
  'North Korea (Korea)': null,
  Kosovo: null,
  Kuwait: null,
  Kyrgyzstan: null,
  Laos: null,
  Latvia: null,
  Lebanon: null,
  Lesotho: null,
  Liberia: null,
  Libya: null,
  Liechtenstein: null,
  Lithuania: null,
  Luxembourg: null,
  Madagascar: null,
  Malawi: null,
  Malaysia: null,
  Maldives: null,
  Mali: null,
  Malta: null,
  Mauritania: null,
  Mauritius: null,
  Mexico: null,
  Moldova: null,
  Monaco: null,
  Mongolia: null,
  Montenegro: null,
  Morocco: null,
  Mozambique: null,
  Myanmar: null,
  Namibia: null,
  Nepal: null,
  Netherlands: null,
  'New Zealand': null,
  Nicaragua: null,
  Niger: null,
  Nigeria: null,
  'North Macedonia': null,
  'Northern Ireland': null,
  Norway: null,
  Oman: null,
  Pakistan: null,
  'Palestinian Territories': null,
  Panama: null,
  'Papua New Guinea': null,
  Paraguay: null,
  Peru: null,
  Philippines: null,
  Poland: null,
  Portugal: null,
  Qatar: null,
  'Congo (Republic Of The Congo)': null,
  Romania: null,
  Russia: null,
  Rwanda: null,
  'Saint Lucia': null,
  'Saint Vincent And The Grenadines': null,
  Samoa: null,
  'Saudi Arabia': null,
  Scotland: null,
  Senegal: null,
  Serbia: null,
  'Sierra Leone': null,
  Singapore: null,
  Slovakia: null,
  Slovenia: null,
  'Solomon Islands, The': null,
  Somalia: null,
  'South Africa': null,
  'South Korea (Republic Of Korea)': null,
  'South Sudan': null,
  Spain: null,
  'Sri Lanka': null,
  Sudan: null,
  Suriname: null,
  Sweden: null,
  Switzerland: null,
  Syria: null,
  'Taiwan (Republic of China)': null,
  Tajikistan: null,
  Tanzania: null,
  Thailand: null,
  Togo: null,
  'Trinidad And Tobago': null,
  Tunisia: null,
  Turkey: null,
  Turkmenistan: null,
  Uganda: null,
  Ukraine: null,
  'United Arab Emirates, The': null,
  'United Kingdom, The': null,
  'United States': null,
  Uruguay: null,
  Uzbekistan: null,
  Vanuatu: null,
  Venezuela: null,
  Vietnam: null,
  Wales: null,
  'Western Sahara': null,
  Yemen: null,
  Zambia: null,
  Zimbabwe: null,
};

export const sampleGame = () => {
  const answers = {};
  Object.keys(countries).map((country, idx) => {
    if (idx % 3 === 0) answers[country] = true;
    else if (idx % 5 === 0) answers[country] = false;
    else answers[country] = null;
  });

  return answers;
};

export const countriesList = [
  { name: 'Afghanistan' },
  { name: 'Albania' },
  { name: 'Algeria' },
  { name: 'Andorra' },
  { name: 'Angola' },
  { name: 'Antigua And Barbuda' },
  { name: 'Argentina' },
  { name: 'Armenia' },
  { name: 'Australia' },
  { name: 'Austria' },
  { name: 'Azerbaijan' },
  { name: 'Bahamas, The' },
  { name: 'Bahrain' },
  { name: 'Bangladesh' },
  { name: 'Barbados' },
  { name: 'Belarus' },
  { name: 'Belgium' },
  { name: 'Belize' },
  { name: 'Benin (Dahomey)' },
  { name: 'Bolivia' },
  { name: 'Bosnia And Herzegovina' },
  { name: 'Botswana' },
  { name: 'Brazil' },
  { name: 'Brunei' },
  { name: 'Brunswick And Lüneburg' },
  { name: 'Bulgaria' },
  { name: 'Burkina Faso (Upper Volta)' },
  { name: 'Burma' },
  { name: 'Burundi' },
  { name: 'Cabo Verde' },
  { name: 'Cambodia' },
  { name: 'Cameroon' },
  { name: 'Canada' },
  { name: 'Cayman Islands, The' },
  { name: 'Central African Republic' },
  { name: 'Chad' },
  { name: 'Chile' },
  { name: 'China' },
  { name: 'Colombia' },
  { name: 'Comoros' },
  { name: 'Costa Rica' },
  { name: 'Cote D’ivoire (Ivory Coast)' },
  { name: 'Croatia' },
  { name: 'Cuba' },
  { name: 'Cyprus' },
  { name: 'Czechia' },
  { name: 'Czechoslovakia' },
  { name: 'Democratic Republic Of The Congo' },
  { name: 'Denmark' },
  { name: 'Djibouti' },
  { name: 'Dominica' },
  { name: 'Dominican Republic' },
  { name: 'Ecuador' },
  { name: 'Egypt' },
  { name: 'El Salvador' },
  { name: 'England' },
  { name: 'Equatorial Guinea' },
  { name: 'Eritrea' },
  { name: 'Estonia' },
  { name: 'Eswatini' },
  { name: 'Ethiopia' },
  { name: 'Fiji' },
  { name: 'Finland' },
  { name: 'France' },
  { name: 'Gabon' },
  { name: 'Gambia, The' },
  { name: 'Georgia' },
  { name: 'Germany' },
  { name: 'Ghana' },
  { name: 'Greece' },
  { name: 'Grenada' },
  { name: 'Guatemala' },
  { name: 'Guinea' },
  { name: 'Guinea-Bissau' },
  { name: 'Guyana' },
  { name: 'Haiti' },
  { name: 'Hanseatic Republics' },
  { name: 'Holy See' },
  { name: 'Honduras' },
  { name: 'Hungary' },
  { name: 'Iceland' },
  { name: 'India' },
  { name: 'Indonesia' },
  { name: 'Iran' },
  { name: 'Iraq' },
  { name: 'Ireland' },
  { name: 'Israel' },
  { name: 'Italy' },
  { name: 'Jamaica' },
  { name: 'Japan' },
  { name: 'Jordan' },
  { name: 'Kazakhstan' },
  { name: 'Kenya' },
  { name: 'Kiribati' },
  { name: 'Korea' },
  { name: 'Kosovo' },
  { name: 'Kuwait' },
  { name: 'Kyrgyzstan' },
  { name: 'Laos' },
  { name: 'Latvia' },
  { name: 'Lebanon' },
  { name: 'Lesotho' },
  { name: 'Liberia' },
  { name: 'Libya' },
  { name: 'Liechtenstein' },
  { name: 'Lithuania' },
  { name: 'Luxembourg' },
  { name: 'Madagascar' },
  { name: 'Malawi' },
  { name: 'Malaysia' },
  { name: 'Maldives' },
  { name: 'Mali' },
  { name: 'Malta' },
  { name: 'Marshall Islands' },
  { name: 'Mauritania' },
  { name: 'Mauritius' },
  { name: 'Mexico' },
  { name: 'Micronesia' },
  { name: 'Moldova' },
  { name: 'Monaco' },
  { name: 'Mongolia' },
  { name: 'Montenegro' },
  { name: 'Morocco' },
  { name: 'Mozambique' },
  { name: 'Namibia' },
  { name: 'Nauru' },
  { name: 'Nepal' },
  { name: 'Netherlands, The' },
  { name: 'New Zealand' },
  { name: 'Nicaragua' },
  { name: 'Niger' },
  { name: 'Nigeria' },
  { name: 'North Macedonia' },
  { name: 'Northern Ireland' },
  { name: 'Norway' },
  { name: 'Oman' },
  { name: 'Pakistan' },
  { name: 'Palau' },
  { name: 'Panama' },
  { name: 'Papua New Guinea' },
  { name: 'Paraguay' },
  { name: 'Peru' },
  { name: 'Philippines' },
  { name: 'Poland' },
  { name: 'Portugal' },
  { name: 'Qatar' },
  { name: 'Republic Of Korea (South Korea)' },
  { name: 'Republic Of The Congo' },
  { name: 'Romania' },
  { name: 'Russia' },
  { name: 'Rwanda' },
  { name: 'Saint Kitts And Nevis' },
  { name: 'Saint Lucia' },
  { name: 'Saint Vincent And The Grenadines' },
  { name: 'Samoa' },
  { name: 'San Marino' },
  { name: 'Sao Tome And Principe' },
  { name: 'Saudi Arabia' },
  { name: 'Senegal' },
  { name: 'Serbia' },
  { name: 'Seychelles' },
  { name: 'Sierra Leone' },
  { name: 'Singapore' },
  { name: 'Slovakia' },
  { name: 'Slovenia' },
  { name: 'Solomon Islands, The' },
  { name: 'Somalia' },
  { name: 'South Africa' },
  { name: 'South Sudan' },
  { name: 'Spain' },
  { name: 'Sri Lanka' },
  { name: 'Sudan' },
  { name: 'Suriname' },
  { name: 'Scotland' },
  { name: 'Sweden' },
  { name: 'Switzerland' },
  { name: 'Syria' },
  { name: 'Tajikistan' },
  { name: 'Tanzania' },
  { name: 'Thailand' },
  { name: 'Timor-Leste' },
  { name: 'Togo' },
  { name: 'Tonga' },
  { name: 'Trinidad And Tobago' },
  { name: 'Tunisia' },
  { name: 'Turkey' },
  { name: 'Turkmenistan' },
  { name: 'Tuvalu' },
  { name: 'Uganda' },
  { name: 'Ukraine' },
  { name: 'United Arab Emirates, The' },
  { name: 'United Kingdom, The' },
  { name: 'United States' },
  { name: 'Uruguay' },
  { name: 'Uzbekistan' },
  { name: 'Vanuatu' },
  { name: 'Venezuela' },
  { name: 'Vietnam' },
  { name: 'Wales' },
  { name: 'Yemen' },
  { name: 'Zambia' },
  { name: 'Zimbabwe' },
];
