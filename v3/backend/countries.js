/*
	List of countries, with:
		- Conversion factor
		- Protein consumption
		- Bod per day (IPCC TABLE 6.4)
*/
let Countries={
"Algeria":                               { conv_kwh_co2:0.664209260, prot_con:31.390, bod_pday:37, currency:"DZD"},
"Angola":                                { conv_kwh_co2:0.037950113, prot_con:15.695, bod_pday:37, currency:"AOA"},
"Argentina":                             { conv_kwh_co2:0.391932833, prot_con:34.310, bod_pday:40, currency:"ARS"},
"Australia":                             { conv_kwh_co2:0.991757127, prot_con:38.690, bod_pday:60, currency:"AUD"},
"Austria":                               { conv_kwh_co2:0.176796609, prot_con:39.055, bod_pday:60, currency:"EUR"},
"Bangladesh":                            { conv_kwh_co2:0.637143230, prot_con:17.885, bod_pday:40, currency:"BDT"},
"Belgium":                               { conv_kwh_co2:0.224767376, prot_con:35.405, bod_pday:60, currency:"EUR"},
"Benin":                                 { conv_kwh_co2:0.700678676, prot_con:21.535, bod_pday:37, currency:"XOF"},
"Bolivia (Plurinational State of)":      { conv_kwh_co2:0.534996875, prot_con:20.440, bod_pday:40, currency:"BOB"},
"Botswana":                              { conv_kwh_co2:1.825675055, prot_con:23.360, bod_pday:37, currency:"BWP"},
"Brazil":                                { conv_kwh_co2:0.092643638, prot_con:30.660, bod_pday:50, currency:"BRL"},
"Burkina Faso":                          { conv_kwh_co2:0.693000000, prot_con:29.200, bod_pday:37, currency:"XOF"},
"Cameroon":                              { conv_kwh_co2:0.216568535, prot_con:21.170, bod_pday:37, currency:"XAF"},
"Canada":                                { conv_kwh_co2:0.179763325, prot_con:38.325, bod_pday:60, currency:"CAD"},
"Chile":                                 { conv_kwh_co2:0.408614261, prot_con:32.120, bod_pday:40, currency:"CLP"},
"China":                                 { conv_kwh_co2:0.974624913, prot_con:32.485, bod_pday:40, currency:"CNY"},
"Colombia":                              { conv_kwh_co2:0.111425218, prot_con:23.725, bod_pday:40, currency:"COP"},
"Congo":                                 { conv_kwh_co2:0.120109978, prot_con:19.345, bod_pday:37, currency:"CDF"},
"Costa Rica":                            { conv_kwh_co2:0.063756361, prot_con:27.010, bod_pday:40, currency:"CRC"},
"Cuba":                                  { conv_kwh_co2:0.938086187, prot_con:29.200, bod_pday:40, currency:"CUP"},
"Côte d'Ivoire":                         { conv_kwh_co2:0.501179338, prot_con:18.250, bod_pday:37, currency:"XOF"},
"Democratic People's Republic of Korea": { conv_kwh_co2:0.494658925, prot_con:21.170, bod_pday:40, currency:"KPW"},
"Denmark":                               { conv_kwh_co2:0.374745583, prot_con:40.515, bod_pday:62, currency:"DKK"},
"Dominican Republic":                    { conv_kwh_co2:0.641741728, prot_con:18.980, bod_pday:40, currency:"DOP"},
"Ecuador":                               { conv_kwh_co2:0.269613843, prot_con:20.805, bod_pday:40, currency:"USD"},
"Egypt":                                 { conv_kwh_co2:0.500886095, prot_con:33.215, bod_pday:34, currency:"EGP"},
"El Salvador":                           { conv_kwh_co2:0.256072792, prot_con:25.915, bod_pday:40, currency:"USD"},
"Eritrea":                               { conv_kwh_co2:0.677991638, prot_con:17.155, bod_pday:37, currency:"ERN"},
"Ethiopia":                              { conv_kwh_co2:0.118948451, prot_con:20.440, bod_pday:37, currency:"ETB"},
"Finland":                               { conv_kwh_co2:0.225457295, prot_con:39.055, bod_pday:60, currency:"EUR"},
"France":                                { conv_kwh_co2:0.070927465, prot_con:41.245, bod_pday:60, currency:"EUR"},
"Gabon":                                 { conv_kwh_co2:0.425188882, prot_con:29.565, bod_pday:37, currency:"XAF"},
"Germany":                               { conv_kwh_co2:0.672220452, prot_con:36.135, bod_pday:62, currency:"EUR"},
"Ghana":                                 { conv_kwh_co2:0.214767509, prot_con:21.535, bod_pday:37, currency:"GHS"},
"Greece":                                { conv_kwh_co2:1.921092777, prot_con:43.070, bod_pday:57, currency:"EUR"},
"Guatemala":                             { conv_kwh_co2:0.341534936, prot_con:20.805, bod_pday:40, currency:"GTQ"},
"Honduras":                              { conv_kwh_co2:0.415487352, prot_con:24.455, bod_pday:40, currency:"HNL"},
"India":                                 { conv_kwh_co2:1.333174843, prot_con:20.440, bod_pday:34, currency:"INR"},
"Indonesia":                             { conv_kwh_co2:0.684693977, prot_con:20.440, bod_pday:40, currency:"IDR"},
"Iran (Islamic Republic of)":            { conv_kwh_co2:0.631113877, prot_con:30.660, bod_pday:40, currency:"IRR"},
"Ireland":                               { conv_kwh_co2:0.521193132, prot_con:40.150, bod_pday:60, currency:"EUR"},
"Italy":                                 { conv_kwh_co2:0.410898038, prot_con:40.880, bod_pday:60, currency:"EUR"},
"Japan":                                 { conv_kwh_co2:0.443356848, prot_con:33.580, bod_pday:42, currency:"JPY"},
"Jordan":                                { conv_kwh_co2:0.643924449, prot_con:27.740, bod_pday:40, currency:"JOD"},
"Kenya":                                 { conv_kwh_co2:0.332297783, prot_con:21.170, bod_pday:37, currency:"KES"},
"Kuwait":                                { conv_kwh_co2:0.637316929, prot_con:33.945, bod_pday:40, currency:"KWD"},
"Lebanon":                               { conv_kwh_co2:0.694755686, prot_con:30.660, bod_pday:40, currency:"LBP"},
"Luxembourg":                            { conv_kwh_co2:0.276002537, prot_con:44.895, bod_pday:60, currency:"EUR"},
"Malaysia":                              { conv_kwh_co2:0.748842440, prot_con:28.835, bod_pday:40, currency:"MYR"},
"Mexico":                                { conv_kwh_co2:0.452483345, prot_con:33.580, bod_pday:40, currency:"MXN"},
"Mongolia":                              { conv_kwh_co2:2.310868705, prot_con:26.280, bod_pday:40, currency:"MNT"},
"Morocco":                               { conv_kwh_co2:0.731211458, prot_con:32.485, bod_pday:37, currency:"MAD"},
"Mozambique":                            { conv_kwh_co2:0.000445032, prot_con:13.870, bod_pday:37, currency:"MZN"},
"Namibia":                               { conv_kwh_co2:0.489803834, prot_con:24.455, bod_pday:37, currency:"NAD"},
"Nepal":                                 { conv_kwh_co2:0.003041790, prot_con:21.900, bod_pday:40, currency:"NPR"},
"Netherlands":                           { conv_kwh_co2:0.413302564, prot_con:38.325, bod_pday:60, currency:"EUR"},
"New Zealand":                           { conv_kwh_co2:0.197695588, prot_con:34.310, bod_pday:60, currency:"NZD"},
"Nicaragua":                             { conv_kwh_co2:0.472119274, prot_con:22.630, bod_pday:40, currency:"NIO"},
"Nigeria":                               { conv_kwh_co2:0.439631360, prot_con:22.630, bod_pday:37, currency:"NGN"},
"Norway":                                { conv_kwh_co2:0.002240278, prot_con:39.055, bod_pday:60, currency:"NOK"},
"Pakistan":                              { conv_kwh_co2:0.473378547, prot_con:20.805, bod_pday:40, currency:"PKR"},
"Panama":                                { conv_kwh_co2:0.276797888, prot_con:25.915, bod_pday:40, currency:"USD"},
"Peru":                                  { conv_kwh_co2:0.237721212, prot_con:24.455, bod_pday:40, currency:"PEN"},
"Philippines":                           { conv_kwh_co2:0.526733850, prot_con:21.535, bod_pday:40, currency:"PHP"},
"Poland":                                { conv_kwh_co2:1.196125502, prot_con:36.865, bod_pday:60, currency:"PLN"},
"Portugal":                              { conv_kwh_co2:0.400151316, prot_con:41.610, bod_pday:60, currency:"EUR"},
"Republic of Korea":                     { conv_kwh_co2:0.504377662, prot_con:32.120, bod_pday:40, currency:"KRW"},
"Russian Federation":                    { conv_kwh_co2:0.513180381, prot_con:35.405, bod_pday:60, currency:"RUB"},
"Saudi Arabia":                          { conv_kwh_co2:0.795591395, prot_con:31.755, bod_pday:40, currency:"SAR"},
"Senegal":                               { conv_kwh_co2:0.598259400, prot_con:21.535, bod_pday:37, currency:"XOF"},
"South Africa":                          { conv_kwh_co2:1.069026617, prot_con:29.565, bod_pday:37, currency:"ZAR"},
"Spain":                                 { conv_kwh_co2:0.342875090, prot_con:39.420, bod_pday:60, currency:"EUR"},
"Sri Lanka":                             { conv_kwh_co2:0.417247633, prot_con:20.075, bod_pday:40, currency:"LKR"},
"Sudan":                                 { conv_kwh_co2:0.614906086, prot_con:26.645, bod_pday:37, currency:"SDG"},
"Sweden":                                { conv_kwh_co2:0.023033883, prot_con:39.055, bod_pday:75, currency:"SEK"},
"Switzerland":                           { conv_kwh_co2:0.003177437, prot_con:33.580, bod_pday:60, currency:"CHF"},
"Syrian Arab Republic":                  { conv_kwh_co2:0.639109712, prot_con:29.200, bod_pday:40, currency:"SYP"},
"Thailand":                              { conv_kwh_co2:0.626742612, prot_con:20.805, bod_pday:40, currency:"THB"},
"Togo":                                  { conv_kwh_co2:0.207239024, prot_con:17.885, bod_pday:37, currency:"XOF"},
"Tunisia":                               { conv_kwh_co2:0.572169413, prot_con:33.945, bod_pday:37, currency:"TND"},
"Turkey":                                { conv_kwh_co2:0.865664547, prot_con:36.135, bod_pday:38, currency:"TRY"},
"United Arab Emirates":                  { conv_kwh_co2:0.938297499, prot_con:37.960, bod_pday:40, currency:"AED"},
"United Kingdom":                        { conv_kwh_co2:0.508501975, prot_con:37.960, bod_pday:60, currency:"GBP"},
"United Republic of Tanzania":           { conv_kwh_co2:0.266757050, prot_con:18.250, bod_pday:37, currency:"TZS"},
"United States of America":              { conv_kwh_co2:0.547096737, prot_con:41.610, bod_pday:85, currency:"USD"},
"Uruguay":                               { conv_kwh_co2:0.303713979, prot_con:29.200, bod_pday:40, currency:"UYU"},
"Venezuela (Bolivarian Republic of)":    { conv_kwh_co2:0.208069719, prot_con:25.915, bod_pday:40, currency:"VES"},
"Vietnam":                               { conv_kwh_co2:0.466848028, prot_con:26.280, bod_pday:40, currency:"VND"},
"Yemen":                                 { conv_kwh_co2:0.644106104, prot_con:19.710, bod_pday:40, currency:"YER"},
"Zambia":                                { conv_kwh_co2:0.003197305, prot_con:17.520, bod_pday:37, currency:"ZMW"},
"Zimbabwe":                              { conv_kwh_co2:0.600377947, prot_con:20.075, bod_pday:37, currency:"USD"},
};
/*
1: BRANDER, M. SOOD A. WYLIE, C. HAUGHTON, A. LOVELL, J., 2011,Technical Paper Electricity-specific emission factors for grid electricity, Ecometrica,
2: FAO Statistics Division, 2010, Food Balance Sheets
3: IPCC, 2006, Guidelines for National Greenhouse Gas Inventories Volume 5 Waste
4: currencies: https://www.countries-ofthe-world.com/world-currencies.html (checked on 2020-12-10)
*/
