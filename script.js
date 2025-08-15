pdfjsLib.GlobalWorkerOptions.workerSrc = 
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

// Stock array with initial quantities of 0
let stockArray = {
  "Fitted Purple": 0,
"60x78 Purple": 0,
"36x78 Purple": 0,
"Fitted Florica": 0,
"Fitted Harmony": 0,
"60x78 Graphix": 0,
"60x78 Harmony": 0,
"36x78 Florica": 0,
"36x78 Graphix": 0,
"60x78 Florica": 0,
"36x78 Harmony": 0,
"Fitted CubeBrwon": 0,
"60x78 CubeBrown": 0,
"36x78 Olive": 0,
"36x78 GeoFusion": 0,
"60x78 Olive": 0,
"Fitted GeoFusion": 0,
"60x78 GeoFusion": 0,
"Fitted Olive": 0,
"60x78 Beige": 0,
"Fitted Beige": 0,
"36x78 Beige": 0,
"60x78 Vintage": 0,
"60x78 Linear": 0,
"Fitted Silver": 0,
"36x78 Silver": 0,
"Fitted Vintage": 0,
"36x78 Cube": 0,
"36x78 Vintage": 0,
"60x78 Cube": 0,
"Fitted Cube": 0,
"Fitted Linear": 0,
"36x78 Linear": 0,
"60x78 Silver": 0,
"60x78 SS": 0,
"36x78 SS": 0,
"Fitted SS": 0,
"Fitted Cambridge": 0,
"36x78 Cambridge": 0,
"36x78 Queensland": 0,
"Fitted Queensland": 0,
"60x78 Queensland": 0,
"Fitted Perth": 0,
"36x78 Perth": 0,
"60x78 Perth": 0,
"36x78 toronto": 0,
"60x78 sydney": 0,
"60x78 toronto": 0,
"Fitted toronto": 0,
"Fitted sydney": 0,
"36x78 denver": 0,
"60x78 denver": 0,
"Fitted tokyo": 0,
"60x78 tokyo": 0,
"36x78 tokyo": 0,
"Fitted denver": 0,
"60x78 vegas": 0,
"36x78 vegas": 0,
"Fitted vegas": 0,
"Fitted dust": 0,
"60x78 Dust": 0,
"60x78 football": 0,
"Fitted Berlin": 0,
"Fitted bridge": 0,
"60x78 Berlin": 0,
"Fitted dil": 0,
"60x78 grey": 0,
"Fitted yellow floral": 0,
"60x78 yellow floral": 0,
"60x78 bridge diamond": 0,
"36x78 cannon": 0,
"60x78 chino": 0,
"Fitted cannon": 0,
"60x78 cannon": 0,
"Fitted peach": 0,
"36x78 peach": 0,
"60x78 pulmeria": 0,
"60x78 Green": 0,
"60x78 leaves": 0,
"60x78 dil": 0,
"60x78 wine": 0,
"60x78 royal": 0,
"60x78 lovely": 0,
"36x78 berlin": 0,
"Fitted Foot": 0,
"Fitted grey": 0,
"Fitted wine": 0,
"Fitted leaves": 0,
"36x78 pulmeria": 0,
"36x78 wine": 0,
"36x78 lovely": 0,
"36x78 football": 0,
"36x78 green": 0,
"36x78 leaves": 0,
"Fitted Pulmeria": 0,
"36x78 Royal": 0,
"Fitted royal": 0,
"36x78 Dil": 0,
"Fitted Lovely": 0,
"Fitted Green": 0,
"1+1 grey": 0,
"1+1 diam": 0,
"Fitted Leafora Greens": 0,
"Fitted LeaforaCream": 0,
"60x78 Leafora Greens": 0,
"60x78 LeaforaCream": 0,
"1+2 Leafora Greens": 0,
"1+2 LeaforaCream": 0,
"60x78 Zigzag": 0,
"1+1 Zigzag": 0,
"1+2 Zigzag": 0,
"Fitted Zigzag": 0,
"1+1 Box": 0,
"1+2 Box": 0,
"1+1 Blue Flower": 0,
"1+1 Navy": 0,
"1+1 Berlin": 0,
"1+2 Navy": 0,
"1+2 Berlin": 0,
"1+2 Blue Flower": 0,
"1+2 Moon": 0,
"1+1 Moon": 0,
"1+2 PL": 0,
"1+1 Norway": 0,
"1+2 Confetti": 0,
"1+1 Pink": 0,
"1+2 Norway": 0,
"1+1 Confetti": 0,
"1+2 Pink": 0,
"60x78 Pink": 0,
"Fitted Pink": 0,
"60x78 Norway": 0,
"Fitted Norway": 0,
"60x78 Confetti": 0,
"Fitted Confetti": 0,
"60x78 Fiord": 0,
"1+2 Fiord": 0,
"1+1 Fiord": 0,
"Fitted Fiord": 0,
"60x78 Ecru": 0,
"60x78 Sea": 0,
"60x78 PL": 0,
"Fitted PL": 0,
"Fitted Sea": 0,
"Fitted GL": 0,
"Fitted Ecru": 0,
"60x78 GL": 0,
"1+1 Sea": 0,
"1+2 Sea": 0,
"1+2 Ecru": 0,
"1+1 GL": 0,
"1+2 GL": 0,
"1+1 PL": 0,
"Fitted Blue Flower": 0,
"60x78 Blue Flower": 0,
"60x78 Navy": 0,
"60x78 Box": 0,
"Fitted Moon": 0,
"Fitted Box": 0,
"Fitted Navy": 0,
"1+1 WB": 0,
"60x78 WB": 0,
"60x78 Diam": 0,
"60x78 Yellow Slice": 0,
"Fitted Yellow Slice": 0,
"60x78 Multi Triangle": 0,
"Fitted Multi Triangle": 0,
"Fitted WB": 0,
"Fitted Diam": 0,
"1+2 Chicago": 0,
"1+1 Chicago": 0,
"1+2 Columbus": 0,
"1+1 Columbus": 0,
"60x78 Columbus": 0,
"60x78 Chicago": 0,
"Fitted Columbus": 0,
"Fitted Chicago": 0,
"60x78 Snake": 0,
"Fitted Snake": 0,
"60x78 Brown Diam": 0,
"Fitted Brown Diam": 0,
"60x78 Grey Lines": 0,
"Com Double Purple": 0,
"Com Double Harmony": 0,
"Com Double Yellow Floral": 0,
"Com Double Columbus": 0,
"Com Double Chicago": 0,
"Com Double Graphix": 0,
"Com Double Florica": 0,
"Com Double CubeBrown": 0,
"Com Double Geofusion": 0,
"Com Double Olive": 0,
"Com Double Beige": 0,
"Com Double Zigzag": 0,
"Com Double Silver": 0,
"Com Double Linear": 0,
"Com Double Vintage": 0,
"Com Double Cube": 0,
"Com Double SS": 0,
"Com Double Queensland": 0,
"Com Double Cambridge": 0,
"Com Double Perth": 0,
"Com Double Sydney": 0,
"Com Double Toronto": 0,
"Com Double Denver": 0,
"Com Double Tokyo": 0,
"Com Double Vegas": 0,
"Com Double Confetti": 0,
"Com Double Norway": 0,
"Com Double GL": 0,
"Com Double PL": 0,
"Com Double Pulmeria": 0,
"Com Double Dil": 0,
"Com Double Diam": 0,
"Com Double Ecru": 0,
"Com Double Royal": 0,
"Com Double Distorted": 0,
"Com Double Sea": 0,
"Com Double Grey Lines": 0,
"Com Double Snake": 0,
"Set Purple": 0,
"Set Florica": 0,
"Set Graphix": 0,
"Set Harmony": 0,
"Set Cubebrown": 0,
"Set Olive": 0,
"Set Beige": 0,
"Set Geofusion": 0,
"Set Silver": 0,
"Set Vintage": 0,
"Set Linear": 0,
"Set Zigzag": 0,
"Set Cube": 0,
"Set SS": 0,
"Set Queensland": 0,
"Set Cambridge": 0,
"Set Perth": 0,
"Set Toronto": 0,
"Set Sydney": 0,
"Set Denver": 0,
"Set Tokyo": 0,
"Set Vegas": 0,
"Set GL": 0,
"Set PL": 0,
"Set Peach": 0,
"Set Lovely": 0,
"Set Chicago": 0,
"Set Columbus": 0,
"Set Yellow Floral": 0,
"Set Pink": 0,
"Set Bridge Diam": 0,
"Set Diam": 0,
"Set Distorted": 0,
"Set Navy": 0,
"Set Sea": 0,
"Set Grey Lines": 0,
"Set Brown Diam": 0,
"Set Pulmeria": 0,
"Set Dust": 0,
"Set Leaves": 0,
"Set Royal": 0,
"Set Wine": 0,
"Set Dil": 0,
"Set Box": 0,
"S/b com Pink": 0,
"S/b com Norway": 0,
"S/b com Confetti": 0,
"S/b com GL": 0,
"S/b com PL": 0,
"S/b com Lovely": 0,
"S/b com Distorted": 0,
"S/b com Ecru": 0,
"S/b com Box": 0,
"S/b com Pulmeria": 0,
"S/b com Dil": 0
};

// Hardcoded SKU to stock mapping
const skuToStockMapping = {
  // Example mappings - modify these according to your actual SKUs
  'Purple Fitted': {
    "Fitted Purple": 1
  },
  'Purple 60x78': {
    "60x78 Purple": 1
  },
  'Purple 36x78': {
    "36x78 Purple": 1
  },
  '2pc box,foot,grey,pista': {
    "pillow box": 2,
    "pillow foot": 2,
    "pillow grey": 2,
    "pillow pista": 2
  },
  'Florica Fitted': {
    "Fitted Florica": 1
  },
  'Harmony Fitted': {
    "Fitted Harmony": 1
  },
  'Graphix 60x78': {
    "60x78 Graphix": 1
  },
  'Harmony 60x78': {
    "60x78 Harmony": 1
  },
  'Florica 36x78': {
    "36x78 Florica": 1
  },
  'Graphix 36x78': {
    "36x78 Graphix": 1
  },
  'Florica 60x78': {
    "60x78 Florica": 1
  },
  'Harmony 36x78': {
    "36x78 Harmony": 1
  },
  'CubeBrwon Fitted': {
    "Fitted CubeBrwon": 1
  },
  'CubeBrown 60x78': {
    "60x78 CubeBrown": 1
  },
  'Olive 36x78': {
    "36x78 Olive": 1
  },
  'GeoFusion 36x78': {
    "36x78 GeoFusion": 1
  },
  'Olive 60x78': {
    "60x78 Olive": 1
  },
  'GeoFusion Fitted': {
    "Fitted GeoFusion": 1
  },
  'GeoFusion 60x78': {
    "60x78 GeoFusion": 1
  },
  'Olive Fitted': {
    "Fitted Olive": 1
  },
  'Beige 60x78': {
    "60x78 Beige": 1
  },
  'Beige Fitted': {
    "Fitted Beige": 1
  },
  'Beige 36x78': {
    "36x78 Beige": 1
  },
  'Vintage 60x78': {
    "60x78 Vintage": 1
  },
  'Linear 60x78': {
    "60x78 Linear": 1
  },
  'Silver Fitted': {
    "Fitted Silver": 1
  },
  'Silver 36x78': {
    "36x78 Silver": 1
  },
  'Vintage Fitted': {
    "Fitted Vintage": 1
  },
  'Cube 36x78': {
    "36x78 Cube": 1
  },
  'Vintage 36x78': {
    "36x78 Vintage": 1
  },
  'Cube 60x78': {
    "60x78 Cube": 1
  },
  'Cube Fitted': {
    "Fitted Cube": 1
  },
  'Linear Fitted': {
    "Fitted Linear": 1
  },
  'Linear 36x78': {
    "36x78 Linear": 1
  },
  'Silver 60x78': {
    "60x78 Silver": 1
  },
  'SS 60x78': {
    "60x78 SS": 1
  },
  'SS 36x78': {
    "36x78 SS": 1
  },
  'SS Fitted': {
    "Fitted SS": 1
  },
  'Cambridge Fitted': {
    "Fitted Cambridge": 1
  },
  'Cambridge 36x78': {
    "36x78 Cambridge": 1
  },
  'Queensland 36x78': {
    "36x78 Queensland": 1
  },
  'Queensland Fitted': {
    "Fitted Queensland": 1
  },
  'Queensland 60x78': {
    "60x78 Queensland": 1
  },
  'Perth Fitted': {
    "Fitted Perth": 1
  },
  'Perth 36x78': {
    "36x78 Perth": 1
  },
  'Perth 60x78': {
    "60x78 Perth": 1
  },
  'toronto 36x78': {
    "36x78 toronto": 1
  },
  'sydney 60x78': {
    "60x78 sydney": 1
  },
  'toronto 60x78': {
    "60x78 toronto": 1
  },
  'toronto fitted': {
    "Fitted toronto": 1
  },
  'sydney fitted': {
    "Fitted sydney": 1
  },
  'denver 36x78': {
    "36x78 denver": 1
  },
  'denver 60x78': {
    "60x78 denver": 1
  },
  'tokyo fitted': {
    "Fitted tokyo": 1
  },
  'tokyo 60x78': {
    "60x78 tokyo": 1
  },
  'tokyo 36x78': {
    "36x78 tokyo": 1
  },
  'denver fitted': {
    "Fitted denver": 1
  },
  'vegas 60x78': {
    "60x78 vegas": 1
  },
  'vegas 36x78': {
    "36x78 vegas": 1
  },
  'vegas fitted': {
    "Fitted vegas": 1
  },
  'dust fitted': {
    "Fitted dust": 1
  },
  'dust 60x78': {
    "60x78 Dust": 1
  },
  'football 60x78 ||': {
    "60x78 football": 1
  },
  'brown fitted ||': {
    "Fitted Berlin": 1
  },
  'bridge fitted ||': {
    "Fitted bridge": 1
  },
  'brown 60x78 ||': {
    "60x78 Berlin": 1
  },
  'dil fitted ||': {
    "Fitted dil": 1
  },
  'grey 60x78 ||': {
    "60x78 grey": 1
  },
  'yellow floral fitted': {
    "Fitted yellow floral": 1
  },
  'yellow floral 60x78': {
    "60x78 yellow floral": 1
  },
  'bridge diamond 60x78': {
    "60x78 bridge diamond": 1
  },
  'cannon pink s/b fitted': {
    "36x78 cannon": 1
  },
  'chino grey 60x78': {
    "60x78 chino": 1
  },
  'cannon pink fitted.': {
    "Fitted cannon": 1
  },
  'cannon pink 60x78': {
    "60x78 cannon": 1
  },
  'peach fitted': {
    "Fitted peach": 1
  },
  'peach s/b fitted': {
    "36x78 peach": 1
  },
  'white floral 60x78': {
    "60x78 pulmeria": 1
  },
  'green kashmira 60x78': {
    "60x78 Green": 1
  },
  'green leaves 60x78': {
    "60x78 leaves": 1
  },
  'dil 60x78': {
    "60x78 dil": 1
  },
  'wine 60x78': {
    "60x78 wine": 1
  },
  'royal 60x78': {
    "60x78 royal": 1
  },
  'lovely 60x78': {
    "60x78 lovely": 1
  },
  'brown kashmira s/b fitted.': {
    "36x78 berlin": 1
  },
  'football fitted.': {
    "Fitted Foot": 1
  },
  'grey patta fitted.': {
    "Fitted grey": 1
  },
  'wine fitted.': {
    "Fitted wine": 1
  },
  'green leaves fitted.': {
    "Fitted leaves": 1
  },
  'white floral s/b fitted.': {
    "36x78 pulmeria": 1
  },
  'wine s/b fitted.': {
    "36x78 wine": 1
  },
  'lovely s/b fitted.': {
    "36x78 lovely": 1
  },
  'football s/b fitted..': {
    "36x78 football": 1
  },
  'green kashmira s/b fitted..': {
    "36x78 green": 1
  },
  'green leaves s/b fitted.': {
    "36x78 leaves": 1
  },
  'white floral fitted..': {
    "Fitted Pulmeria": 1
  },
  'royal s/b fitted .': {
    "36x78 Royal": 1
  },
  'royal fitted.': {
    "Fitted royal": 1
  },
  'dil s/b fitted.': {
    "36x78 Dil": 1
  },
  'lovely fitted .': {
    "Fitted Lovely": 1
  },
  'green kashmira fitted.': {
    "Fitted Green": 1
  },
  'grey patta +diamond 1+1': {
    "1+1 grey": 1,
    "1+1 diam": 1
  },
  'berlin fitted': {
    "Fitted Berlin": 1
  },
  'Leafora Greens 72x78': {
    "Fitted Leafora Greens": 1
  },
  'LeaforaCream 72x78': {
    "Fitted LeaforaCream": 1
  },
  'Leafora Greens 60x78': {
    "60x78 Leafora Greens": 1
  },
  'LeaforaCream 60x78': {
    "60x78 LeaforaCream": 1
  },
  'Leafora Greens 1+2': {
    "1+2 Leafora Greens": 1
  },
  'LeaforaCream 1+2': {
    "1+2 LeaforaCream": 1
  },
  'ZigZag 60x78': {
    "60x78 Zigzag": 1
  },
  'ZigZag 1+1': {
    "1+1 Zigzag": 1
  },
  'ZigZag 1+2': {
    "1+2 Zigzag": 1
  },
  'ZigZag Fitted': {
    "Fitted Zigzag": 1
  },
  'Box 1+1||': {
    "1+1 Box": 1
  },
  'Box 1+2||': {
    "1+2 Box": 1
  },
  'blue flower 1+1||': {
    "1+1 Blue Flower": 1
  },
  'navy 1+1||': {
    "1+1 Navy": 1
  },
  'brown 1+1||': {
    "1+1 Berlin": 1
  },
  'navy 1+2||': {
    "1+2 Navy": 1
  },
  'brown 1+2||': {
    "1+2 Berlin": 1
  },
  'blue flower 1+2||': {
    "1+2 Blue Flower": 1
  },
  'Moon mist 1+2||': {
    "1+2 Moon": 1
  },
  'Moon mist 1+1||': {
    "1+1 Moon": 1
  },
  'Pink Lehr 1+2 |||': {
    "1+2 PL": 1
  },
  'norway 1+1 |': {
    "1+1 Norway": 1
  },
  'confetti 1+2 |': {
    "1+2 Confetti": 1
  },
  'pink flare 1+1 |': {
    "1+1 Pink": 1
  },
  'norway 1+2 |': {
  "1+2 Norway": 1
  },
  'confetti 1+1 |': {
    "1+1 Confetti": 1
  },
  'pink flare 1+2 |': {
    "1+2 Pink": 1
  },
  'pink 60x78': {
    "60x78 Pink": 1
  },
  'pink fitted': {
    "Fitted Pink": 1
  },
  'norway 60x78': {
    "60x78 Norway": 1
  },
  'norway fitted': {
    "Fitted Norway": 1
  },
  'confetti 60x78': {
    "60x78 Confetti": 1
  },
  'confetti fitted': {
    "Fitted Confetti": 1
  },
  'Fiord 60 x 78': {
    "60x78 Fiord": 1
  },
  'Fiord 1+2': {
    "1+2 Fiord": 1
  },
  'Fiord 1+1': {
    "1+1 Fiord": 1
  },
  'Fiord Fitted': {
    "Fitted Fiord": 1
  },
  'Golden 60x78 |': {
    "60x78 Ecru": 1
  },
  'sea shell 60x78 |': {
    "60x78 Sea": 1
  },
  'Pink Lehr 60x78 |': {
    "60x78 PL": 1
  },
  'Pink Lehr Fitted |': {
    "Fitted PL": 1
  },
  'Sea shell Fitted |': {
    "Fitted Sea": 1
  },
  'Grey Lehr Fitted |': {
    "Fitted GL": 1
  },
  'Golden Fitted |': {
    "Fitted Ecru": 1
  },
  'Grey Lehr 60x78|': {
    "60x78 GL": 1
  },
  'sea shell 1+1 |': {
    "1+1 Sea": 1
  },
  'Sea shell 1+2 |': {
    "1+2 Sea": 1
  },
  'Golden 1+2 |': {
    "1+2 Ecru": 1
  },
  'Grey Lehr 1+1 |': {
    "1+1 GL": 1
  },
  'Grey Lehr 1+2 |': {
    "1+2 GL": 1
  },
  'Golden 1+1 |': {
    "1+1 Ecru": 1
  },
  'Pink Lehr 1+1 |': {
    "1+1 PL": 1
  },
  'blue flower fitted': {
    "Fitted Blue Flower": 1
  },
  'blue flower 60x78': {
    "60x78 Blue Flower": 1
  },
  'navyy squaree 60x78': {
    "60x78 Navy": 1
  },
  'moon mist 60x78': {
    "60x78 Moon": 1
  },
  'brown 60x78/': {
    "60x78 Berlin": 1
  },
  'box 60x78': {
    "60x78 Box": 1
  },
  'Moon mist fitted': {
    "Fitted Moon": 1
  },
  'Box fitted': {
    "Fitted Box": 1
  },
  'navy fitted //': {
    "Fitted Navy": 1
  },
  'Grey patta + football (1+1)': {
    "1+1 Box": 1,
    "1+1 WB": 1
  },
  'box + white blue (1+1)': {
     "1+1 Box": 1,
    "1+1 WB": 1
  },
  'wb 60x78': {
    "60x78 WB": 1
  },
  'diam 60x78': {
    "60x78 Diam": 1
  },
  'yellow slice 60x78': {
    "60x78 Yellow Slice": 1
  },
  'yellow slice fitted': {
    "Fitted Yellow Slice": 1
  },
  'pink lehar 60x78': {
    "60x78 PL": 1
  },
  'multi triangle 60x78': {
    "60x78 Multi Triangle": 1
  },
  'grey lehar 60x78': {
    "60x78 GL": 1
  },
  'grey lehar fitted': {
    "Fitted GL": 1
  },
  'pink lehar fitted': {
    "Fitted PL": 1
  },
  'Multi triangle fitted': {
    "Fitted Multi Triangle": 1
  },
  '6M-O2LU-0W8W': {
    "Fitted WB": 1
  },
  'diamond fitted.': {
    "Fitted Diam": 1
  },
  'chicago 1+2||': {
    "1+2 Chicago": 1
  },
  'chicago 1+1||': {
    "1+1 Chicago": 1
  },
  'columbus 1+2||': {
    "1+2 Columbus": 1
  },
  'columbus 1+1||': {
  "1+1 Columbus": 1
  },
  'columbus 60x78': {
    "60x78 Columbus": 1
  },
  'chicago 60x78': {
    "60x78 Chicago": 1
  },
  'columbus fitted': {
    "Fitted Columbus": 1
  },
  'chicago fitted': {
    "Fitted Chicago": 1
  },
  'snake 60x78': {
    "60x78 Snake": 1
  },
  'pink stripes 60x78': {
    "60x78 SS": 1
  },
  'snake fitted.': {
    "Fitted Snake": 1
  },
  'pink stripes fitted .': {
    "Fitted SS": 1
  },
  'brown diamond 60x78//,': {
    "60x78 Brown Diam": 1
  },
  'brown diamond fitted //': {
    "Fitted Brown Diam": 1
  },
  'dust gray 60x78': {
    "60x78 Dust": 1
  },
  'grey lines 60x78': {
    "60x78 Grey Lines": 1
  },
  'grey lines fitted.': {
    "Fitted Tokyo": 1
  },
  'dust gray fitted .': {
  "Fitted Dust": 1
  },
  'Purple Com Only': {
    "Com Double Purple": 1
  },
  'harmony com only': {
    "Com Double Harmony": 1
  },
  'yellow floral com only': {
    "Com Double Yellow Floral": 1
  },
  'columbus com only': {
    "Com Double Columbus": 1
  },
  'chicago com only': {
    "Com Double Chicago ": 1
  },
  'graphix com only': {
    "Com Double Graphix": 1
  },
  'Florica com only': {
    "Com Double Florica": 1
  },
  'CubeBrown Com Only': {
    "Com Double CubeBrown": 1
  },
  'GeoFusion Com Only': {
    "Com Double Geofusion": 1
  },
  'Olive Com Only': {
    "Com Double Olive": 1
  },
  'Beige Com Only': {
    "Com Double Beige": 1
  },
  'ZigZag Com Only': {
    "Com Double Zigzag": 1
  },
  'Silver Com Only': {
    "Com Double Silver": 1
  },
  'Linear Com Only': {
    "Com Double Linear": 1
  },
  'Vintage Com Only': {
    "Com Double Vintage": 1
  },
  'Cube Com Only': {
    "Com Double Cube": 1
  },
  'SS Com Only': {
    "Com Double SS": 1
  },
  'Queensland Com Only': {
    "Com Double Queensland": 1
  },
  'Cambridge Com Only': {
    "Com Double Cambridge": 1
  },
  'Perth com only': {
    "Com Double Perth": 1
  },
  'sydney com only': {
    "Com Double Sydney": 1
  },
  'toronto com only': {
    "Com Double Toronto": 1
  },
  'Denver Com Only': {
    "Com Double Denver": 1
  },
  'Tokyo Com Only': {
    "Com Double Tokyo": 1
  },
  'Vegas Com Only': {
    "Com Double Vegas": 1
  },
  'confetti com only||': {
    "Com Double Confetti": 1
  },
  'norway com only ||': {
    "Com Double Norway": 1
  },
  'grey lehar double com only': {
    "Com Double GL": 1
  },
  'pink lehar double com only': {
    "Com Double PL": 1
  },
  'navy square double com only': {
    "Com Double Navy": 1
  },
  'white floral double com only': {
    "Com Double Pulmeria": 1
  },
  'dil double com only': {
    "Com Double Dil": 1
  },
  'multi diamond com only': {
    "Com Double Diam": 1
  },
  'Ecru white com only//': {
    "Com Double Ecru": 1
  },
  'royal blue com only': {
    "Com Double Royal": 1
  },
  'distorted com only': {
    "Com Double Distorted": 1
  },
  'sea shell com only': {
    "Com Double Sea": 1
  },
  'navy com only': {
    "Com Double Navy": 1
  },
  'navy square com only': {
    "Com Double Navy": 1
  },
  'grey lines com only': {
    "Com Double Grey Lines": 1
  },
  'snake com only': {
    "Com Double Snake": 1
  },
  'charcol com only': {
    "Com Double Dust": 1
  },
  'green stripes com only': {
    "Com Double SS": 1
  },
  'Purple Set': {
    "Set Purple": 1
  },
  'Florica set': {
    "Set Florica": 1
  },
  'graphix set': {
    "Set Graphix": 1
  },
  'Harmony set': {
    "Set Harmony": 1
  },
  'CubeBrown Set': {
    "Set Cubebrown": 1
  },
  'Olive Com Set': {
    "Set Olive": 1
  },
  'Beige Com Set': {
    "Set Beige": 1
  },
  'GeoFusion Com Set': {
    "Set Geofusion": 1
  },
  'Silver Set': {
    "Set Silver": 1
  },
  'Vintage Set': {
    "Set Vintage": 1
  },
  'Linear Set': {
    "Set Linear": 1
  },
  'ZigZag Set': {
    "Set Zigzag": 1
  },
  'Cube Set': {
    "Set Cube": 1
  },
  'SS Set': {
    "Set SS": 1
  },
  'Queensland Set': {
    "Set Queensland": 1
  },
  'Cambridge Set': {
    "Set Cambridge": 1
  },
  'Perth set': {
    "Set Perth": 1
  },
  'Toronto set': {
    "Set Toronto": 1
  },
  'Sydney set': {
    "Set Sydney": 1
  },
  'Denver Set': {
    "Set Denver": 1
  },
  'Tokyo set': {
    "Set Tokyo": 1
  },
  'Vegas Set': {
    "Set Vegas": 1
  },
  'GL com set': {
    "Set GL": 1
  },
  'PL com set': {
    "Set PL": 1
  },
  'peach set': {
    "Set Peach": 1
  },
  'alaska set': {
    "Set Lovely": 1
  },
  'chicago set': {
    "Set Chicago": 1
  },
  'columbus set': {
    "Set Columbus": 1
  },
  'yellow floral set': {
    "Set Yellow Floral": 1
  },
  'Pink set': {
    "Set Pink": 1
  },
  'bridge diamond com set': {
    "Set Bridge Diam": 1
  },
  'multi diamond com set': {
    "Set Diam": 1
  },
  'distorted com set': {
    "Set Distorted": 1
  },
  'navy com set': {
    "Set Navy": 1
  },
  'sea shell com set': {
    "Set Sea": 1
  },
  'lovely set': {
    "Set Lovely": 1
  },
  'grey lines com set': {
    "Set Grey Lines": 1
  },
'brown diamond com set': {
    "Set Brown Diam": 1
  },
  'rose pink com set': {
    "Set Pulmeria": 1
  },
  'charcol com set': {
    "Set Dust": 1
  },
  'green leaves com set': {
    "Set Leaves": 1
  },
  'White floral com set': {
    "Set Pulmeria": 1
  },
  'royal blue com set': {
    "Set Royal": 1
  },
  'wine with flowers com set': {
    "Set Wine": 1
  },
  'dil wala com set': {
    "Set Dil": 1
  },
  'box com set': {
    "Set Box": 1
  },
  'pink s/b com': {
    "S/b com Pink": 1
  },
  'norway s/b com': {
    "S/b com Norway": 1
  },
  'confetti s/b com': {
    "S/b com Confetti": 1
  },
  'grey lehar s/b com only': {
    "S/b com GL": 1
  },
  'pink lehar s/b com only': {
    "S/b com PL": 1
  },
  'lovely s/b comforter onlyy': {
    "S/b com Lovely": 1
  },
  'distorted s/b com only': {
    "S/b com Distorted": 1
  },
  'ecru white s/b com only': {
    "S/b com Ecru": 1
  },
  'box s/b com only': {
    "S/b com Box": 1
  },
  'white floral s/b com only': {
    "S/b com Pulmeria": 1
  },
  'dil s/b com only': {
    "S/b com Dil": 1
  },
  '4pc Bridge Diam': {
    "Pillow Bridge Diam": 4
  },
  '4pc Yellow floral': {
    "Pillow Yellow Floral": 4
  },
  '6pc Beige': {
    "Pillow Beige": 6
  },
  '6pc BL': {
    "Pillow BL": 6
  },
  '2pc Vintage': {
    "Pillow Vintage": 2
  },
  '8pc Florica': {
    "Pillow Florica": 8
  },
  '2pc PL, GL': {
    "Pillow GL": 2,
    "Pillow PL": 2
  },
  '2pc GL, BL': {
    "Pillow GL": 2,
    "Pillow BL": 2
  },
  '4pc Wine': {
  "Pillow Wine": 4
  },
  '2pc SS': {
    "Pillow SS": 2
  },
  '4pc Denver': {
    "Pillow Denver": 2
  },
  '6pc Florica': {
    "Pillow Florica": 6
  },
  '2pc Perth': {
    "Pillow Perth": 2
  },
  '6pc Harmony': {
    "Pillow Harmony": 6
  },
  '8pc SS': {
    "Pillow SS": 8
  },
  '6pc Vintage': {
    "Pillow Vintage": 6
  },
  '4pc Sydney': {
    "Pillow Sydney": 4
  },
  '8pc Silver': {
    "Pillow Silver": 8
  },
  '8pc Olive': {
    "Pillow Olive": 8
  },
  '6pc Cambridge': {
    "Pillow Cambridge": 2
  },
  '8pc GL': {
    "Pillow GL": 8
  },
  '6pc Grey': {
    "Pillow Grey": 2
  },
  '6pc Yellow floral': {
    "Pillow Yellow Floral": 6
  },
  '8pc Queensland': {
    "Pillow Queensland": 8
  },
  '6pc Olive': {
    "Pillow Olive": 6
  },
  '4pc CubeBrown': {
    "Pillow Cubebrown": 4
  },
  '8pc Dust': {
    "Pillow Dust": 8
  },
  '8pc Vintage': {
    "Pillow Vintage": 8
  },
  '2pc Harmony': {
    "Pillow Harmony": 2
  },
  '6pc GL': {
    "Pillow GL": 6
  },
  '6pc Denver': {
    "Pillow Denver": 6
  },
  '8pc Grey': {
    "Pillow Grey": 8
  },
  '6pc Cube': {
    "Pillow Cube": 6
  },
  '4pc GL': {
    "Pillow GL": 4
  },
  '2pc Cube': {
    "Pillow Cube": 2
  },
  '8pc PL': {
    "Pillow PL": 8
  },
  '4pc Silver': {
    "Pillow Silver": 4
  },
  '4pc Linear': {
    "Pillow Linear": 4
  },
  '6pc Linear': {
    "Pillow Linear": 6
  },
  '8pc Cube': {
    "Pillow Cube": 8
  },
  '2pc Florica': {
    "Pillow Florica": 2
  },
  '8pc Bridge Diam': {
    "Pillow Bridge Diam": 8
  },
  '6pc SS': {
    "Pillow SS": 6
  },
  '2pc Beige': {
    "Pillow Beige": 2
  },
  '8pc Linear': {
    "Pillow Linear": 8
  },
  '4pc SS': {
    "Pillow SS": 4
  },
  '4pc Tokyo': {
    "Pillow Tokyo": 4
  },
  '4pc PL': {
    "Pillow PL": 4
  },
  '8pc Yellow floral': {
    "Pillow Yellow Floral": 8
  },
  '2pc Dust': {
    "Pillow Dust": 2
  },
  '4pc Olive': {
    "Pillow Olive": 4
  },
  '6pc Silver': {
    "Pillow Silver": 6
  },
  '2pc Cambridge': {
  "Pillow Cambridge": 2
  },
  '6pc Queensland': {
    "Pillow Queensland": 6
  },
  '6pc CubeBrown': {
    "Pillow Cubebrown": 6
  },
  '6pc Graphix': {
    "Pillow Graphix": 6
  },
  '4pc Beige': {
    "Pillow Beige": 4
  },
  '4pc BL': {
    "Pillow BL": 4
  },
  '2pc Denver': {
    "Pillow Denver": 2
  },
  '8pc Cannon': {
    "Pillow Cannon": 8
  },
  '4pc Perth': {
    "Pillow Perth": 4
  },
  '2pc Tokyo': {
    "Pillow Tokyo": 2
  },
  '4pc Cube': {
    "Pillow Cube": 4
  },
  '8pc Beige': {
    "Pillow Beige": 8
  },
  '2pc Graphix': {
    "Pillow Graphix": 2
  },
  '4pc Grey': {
    "Pillow Grey": 4
  },
  '4pc Cambridge': {
    "Pillow Cambridge": 4
  },
  '4pc Cannon': {
    "Pillow Cannon": 4
  },
  '8pc Toronto': {
    "Pillow Toronto": 8
  },
  '6pc Sydney': {
    "Pillow Sydney": 6
  },
  '4pc Toronto': {
    "Pillow Toronto": 4
  },
  '4pc Florica': {
    "Pillow Florica": 4
  },
  '2pc CubeBrown': {
    "Pillow Cubebrown": 4
  },
  '8pc Harmony': {
    "Pillow Harmony": 8
  },
  '4pc Dust': {
    "Pillow Dust": 4
  },
  '8pc CubeBrown': {
    "Pillow Cubebrown": 8
  },
  '4pc Graphix': {
    "Pillow Graphix": 4
  },
  '6pc Cannon': {
    "Pillow Cannon": 6
  },
  '2pc Silver': {
    "Pillow Silver": 2
  },
  '6pc Wine': {
    "Pillow Wine": 6
  },
  '2pc Toronto': {
    "Pillow Toronto": 2
  },
  '8pc Tokyo': {
    "Pillow Tokyo": 8
  },
  '2pc Linear': {
    "Pillow Linear": 2
  },
  '8pc Perth': {
    "Pillow Perth": 8
  },
  '6pc Dust': {
    "Pillow Dust": 6
  },
  '2pc Queensland': {
    "Pillow Queensland": 2
  },
  '6pc Tokyo': {
    "Pillow Tokyo": 6
  },
  '4pc Harmony': {
    "Pillow Harmony": 4
  },
  '6pc Bridge Diam': {
    "Pillow Bridge Diam": 6
  },
  '6pc PL': {
    "Pillow PL": 6
  },
  '8pc BL': {
    "Pillow BL": 8
  },
  '2pc GL,PL,GL': {
    "Pillow GL": 2,
    "Pillow PL": 2,
    "Pillow BL": 2
  },
  '2pc PL, BL': {
    "Pillow PL": 2,
    "Pillow BL": 2
  },
  '6pc Perth': {
    "Pillow Perth": 6
  },
  '6pc Toronto': {
    "Pillow Toronto": 6
  },
  '8pc Cambridge': {
    "Pillow Cambridge": 8
  },
  '2pc Sydney': {
    "Pillow Sydney": 2
  },
  '8pc Graphix': {
    "Pillow Graphix": 8
  },
  '8pc Sydney': {
    "Pillow Sydney": 8
  },
  '2pc Yellow floral': {
    "Pillow Yellow Floral": 2
  },
  '8pc Wine': {
    "Pillow Wine": 8
  },
  '8pc Denver': {
    "Pillow Denver": 8
  },
  '2pc Olive': {
    "Pillow Olive": 2
  },
  '4pc Vintage': {
    "Pillow Vintage": 4
  },
  '4pc Queensland': {
    "Pillow Queensland": 4
  },
  '2pc - dust grey': {
    "Pillow Dust": 2
  },
  '2pc - white floral': {
    "Pillow Pulmeria": 2
  },
  '2 pc peach': {
    "Pillow Peach": 2
  },
  '2 pc - navy square': {
    "Pillow Navy": 2
  },
  '2pc- box': {
    "Pillow Box": 2
  },
  '2pc - diam': {
    "Pillow Diam": 2
  },
  '2 pc - pink floral': {
    "Pillow Pink Floral": 2
  },
  '2 pc - indigo': {
    "Pillow Indigo": 2
  },
  '2 pc - pink lehr': {
    "Pillow PL": 2
  },
  '2 pc - green leaves': {
    "Pillow Leaves": 2
  },
  '2 pc - distorted': {
    "Pillow Distorted": 2
  },
  '2 pc - green': {
    "Pillow Green": 2
  },
  '2 pc - brown': {
    "Pillow Berlin": 2
  },
  '2 pc - grey lehr': {
    "Pillow GL": 2
  },
  '2 pc - lovely': {
    "Pillow Lovely": 2
  },
  '2 pc - cannon': {
    "Pillow Cannon": 2
  },
  '2 pc- wine': {
    "Pillow Wine": 2
  },
  '2 pc - foot': {
    "Pillow Foot": 2
  },
  '2 pc - grey patta': {
    "Pillow Grey": 2
  },
  '2 pc - bridge diamond': {
    "Pillow Bridge Diam": 2
  },
  '2 pc - dil': {
    "Pillow Dil": 2
  },
  '2 pc - brown diam': {
    "Pillow Brown Diam": 2
  },
  '2 pc - moon mist': {
    "Pillow Moon": 2
  },
  '2 pc - royal': {
    "Pillow Royal": 2
  },
  '2pc - foot + sea + pl + gl': {
    "Pillow Foot": 2,
    "Pillow Sea": 2,
    "Pillow GL": 2,
    "Pillow PL": 2
  },
  '2pc - box + sea + pl + gl': {
    "Pillow Box": 2,
    "Pillow Sea": 2,
    "Pillow GL": 2,
    "Pillow PL": 2
  },
  '2pc - gp + sea + pl + gl': {
    "Pillow Grey": 2,
    "Pillow Sea": 2,
    "Pillow GL": 2,
    "Pillow PL": 2
  },
  '2 pc - dil + sea + pl + gl': {
    "Pillow Dil": 2,
    "Pillow Sea": 2,
    "Pillow GL": 2,
    "Pillow PL": 2
  },
  '2 pc - love + sea + pl + gl': {
    "Pillow Lovely": 2,
    "Pillow Sea": 2,
    "Pillow GL": 2,
    "Pillow PL": 2
  },
  '2pc-diam+sea + pl + gl': {
    "Pillow Diam": 2,
    "Pillow Sea": 2,
    "Pillow GL": 2,
    "Pillow PL": 2
  },
  '2 pc - navy + sea + pl + gl': {
    "Pillow Navy": 2,
    "Pillow Sea": 2,
    "Pillow GL": 2,
    "Pillow PL": 2
  },
  '2pc-box+dil+gp+lovely': {
    "Pillow Box": 2,
    "Pillow Dil": 2,
    "Pillow Grey": 2,
    "Pillow Bridge": 2
  },
  '2pc-box+foot+gp+pista': {
    "Pillow Box": 2,
    "Pillow Foot": 2,
    "Pillow Grey": 2,
    "Pillow Pista": 2
  },
  '2pc-box+lovely+navy+pista': {
    "Pillow Box": 2,
    "Pillow Bridge": 2,
    "Pillow Navy": 2,
    "Pillow Pista": 2
  },
  '2pc-box+gp+lovely+navy': {
    "Pillow Box": 2,
    "Pillow Grey": 2,
    "Pillow Bridge": 2,
    "Pillow Navy": 2
  },
  '2pc-box+diam+gp+pista': {
    "Pillow Box": 2,
    "Pillow Diam": 2,
    "Pillow Grey": 2,
    "Pillow Pista": 2
  },
  '2pc-box+dil+gp+pista': {
    "Pillow Box": 2,
    "Pillow Dil": 2,
    "Pillow Grey": 2,
    "Pillow Pista": 2
  },
  '2pc-box+dil+foot+navy': {
    "Pillow Box": 2,
    "Pillow Dil": 2,
    "Pillow Foot": 2,
    "Pillow Navy": 2
  },
  '2pc-box+dil+foot+lovely': {
    "Pillow Box": 2,
    "Pillow Dil": 2,
    "Pillow Foot": 2,
    "Pillow Bridge": 2
  },
  '2pc-box+dil+lovely+navy': {
    "Pillow Box": 2,
    "Pillow Dil": 2,
    "Pillow Bridge": 2,
    "Pillow Navy": 2
  },
  '2pc-box+foot+lovely+navy': {
    "Pillow Box": 2,
    "Pillow Foot": 2,
    "Pillow Grey": 2,
    "Pillow Navy": 2
  },
  '2pc-box+foot+gp+lovely': {
    "Pillow Box": 2,
    "Pillow Foot": 2,
    "Pillow Grey": 2,
    "Pillow Bridge": 2
  },
  '2pc-box+dil+foot+pista': {
    "Pillow Box": 2,
    "Pillow Dil": 2,
    "Pillow Foot": 2,
    "Pillow Pista": 2
  },
  '2pc-box+dil+gp+navy': {
    "Pillow Box": 2,
    "Pillow Dil": 2,
    "Pillow Grey": 2,
    "Pillow Navy": 2
  },
  '2pc-box+foot+gp+navy': {
    "Pillow Box": 2,
    "Pillow Foot": 2,
    "Pillow Grey": 2,
    "Pillow Navy": 2
  },
'4 pc navy square': {
    "Pillow Navy": 4
  },
'6 pc navy square': {
    "Pillow Navy": 6
  },
'4 pc lovely': {
    "Pillow Bridge": 4
  },
'6 pc box': {
    "Pillow Box": 6
  },
'6 pc foot': {
    "Pillow Foot": 6
  },
'8 pc lovely': {
    "Pillow Bridge": 8
  },
'8 pc box': {
    "Pillow Box": 8
  },
'4 pc box': {
    "Pillow Box": 4
  },
'8 pc navy square': {
    "Pillow Navy": 8
  },
'6 pc dil': {
    "Pillow Dil": 6
  },
'4 pc dil': {
    "Pillow Dil": 4
  },
'4pc foot': {
    "Pillow Foot": 4
  },
'8 pc dil': {
    "Pillow Dil": 8
  },
'6 pc lovely': {
    "Pillow Bridge": 6
  },
'8 pc foot': {
    "Pillow Foot": 8
  },
'4 pc - diam': {
    "Pillow Diam": 4
  },
'6 pc - diam': {
    "Pillow Diam": 6
  },
'8 pc diam': {
    "Pillow Diam": 8
  },
'Harmony dohr2Pc': {
    "Dohar Harmony": 1,
    "Pillow Harmony": 2
  },
'Purple dohr2Pc': {
    "Dohar Purple": 1,
    "Pillow Purple": 2
  },
'CubeBrown dohr2Pc': {
    "Dohar Cubebrown": 1,
    "Pillow Cubebrown": 2
  },
'GeoFusion dohr2Pc': {
    "Dohar Geofusion": 1,
    "Pillow Geofusion": 2
  },
'Olive dohr2Pc': {
    "Dohar Olive": 1,
    "Pillow Olive": 2
  },
'Beige dohr2Pc': {
    "Dohar Beige": 1,
    "Pillow Beige": 2
  },
'Linear dohr2Pc': {
    "Dohar Linear": 1,
    "Pillow Linear": 2
  },
'Silver dohr2Pc': {
    "Dohar Silver": 1,
    "Pillow Silver": 2
  },
'Cube dohr2Pc': {
    "Dohar Cube": 1,
    "Pillow Cube": 2
  },
'ZigZag dohr2Pc': {
    "Dohar ZigZag": 1,
    "Pillow ZigZag": 2
  },
'Vintage dohr2Pc': {
    "Dohar Vintage": 1,
    "Pillow Vintage": 2
  },
'SS dohr2Pc': {
    "Dohar SS": 1,
    "Pillow SS": 2
  },
'Cambridge dohr2Pc': {
    "Dohar Cambridge": 1,
    "Pillow Cambridge": 2
  },
'Queensland dohr2Pc': {
    "Dohar Queensland": 1,
    "Pillow Queensland": 2
  },
'Perth dohr2Pc': {
    "Dohar Perth": 1,
    "Pillow Perth": 2
  },
'Toronto dohr2Pc': {
    "Dohar Toronto": 1,
    "Pillow Toronto": 2
  },
'Sydney dohr2Pc': {
    "Dohar Sydney": 1,
    "Pillow Sydney": 2
  },
'peach dohr2pc': {
    "Dohar Peach": 1,
    "Pillow Peach": 2
  },
'distorted dohr2pc': {
    "Dohar Wine": 1,
    "Pillow Wine": 2
  },
'diamond dohr2pc': {
    "Dohar Diam": 1,
    "Pillow Diam": 2
  },
'Royal dohr2pc': {
    "Dohar Royal": 1,
    "Pillow Royal": 2
  },
'dil dohr2pc': {
    "Dohar Dil": 1,
    "Pillow Dil": 2
  },
'Vegas dohr2pc': {
    "Dohar Vegas": 1,
    "Pillow Vegas": 2
  },
'Cannon dohr2pc': {
    "Dohar Cannon": 1,
    "Pillow Cannon": 2
  },
'multi triangle dohr2pc': {
    "Dohar Multi Triangle": 1,
    "Pillow Multi Triangle": 2
  },
'chino dohr2pc': {
    "Dohar Chino": 1,
    "Pillow Chino": 2
  },
'white floral dohr2pc': {
    "Dohar Pulmeria": 1,
    "Pillow Pulmeria": 2
  },
'box dohr2pc': {
    "Dohar Box": 1,
    "Pillow Box": 2
  },
'navy dohr2pc': {
    "Dohar Navy": 1,
    "Pillow Navy": 2
  },
'tokyo dohr2pc': {
    "Dohar Tokyo": 1,
    "Pillow Tokyo": 2
  },
'snake dohr2pc': {
    "Dohar Snake": 1,
    "Pillow Snake": 2
  },
'Brown dohr2pc': {
    "Dohar Berlin": 1,
    "Pillow Berlin": 2
  },
'Denver dohr2pc': {
    "Dohar Denver": 1,
    "Pillow Denver": 2
  },
'moon dohr2pc': {
    "Dohar Moon": 1,
    "Pillow Moon": 2
  },
'leaves dohr2pc': {
    "Dohar Leaves": 1,
    "Pillow Leaves": 2
  },
'Harmony Dohar': {
    "Dohar Harmony": 1
  },
'Purple Dohar': {
    "Dohar Purple": 1
  },
'CubeBrown Dohar': {
    "Dohar Cubebrown": 1
  },
'Olive Dohar': {
    "Dohar Olive": 1
  },
'GeoFusion Dohar': {
    "Dohar Geofusion": 1
  },
'Beige Dohar': {
    "Dohar Beige": 1
  },
'ZigZag Dohar': {
    "Dohar ZigZag": 1
  },
'Linear Dohar': {
    "Dohar Linear": 1
  },
'Cube Dohar': {
    "Dohar Cube": 1
  },
'Vintage Dohar': {
    "Dohar Vintage": 1
  },
'Silver Dohar': {
    "Dohar Silver": 1
  },
'SS Dohar': {
    "Dohar SS": 1
  },
'Cambridge Dohar': {
    "Dohar Cambridge": 1
  },
'Queensland Dohar': {
    "Dohar Queensland": 1
  },
'Perth dohar': {
    "Dohar Perth": 1
  },
'Sydney dohar': {
    "Dohar Sydney": 1
  },
'Toronto dohar': {
    "Dohar Toronto": 1
  },
'tokyo dohar': {
    "Dohar Tokyo": 1
  },
'Denver dohar': {
    "Dohar Denver": 1
  },
'Vegas dohar': {
    "Dohar Vegas": 1
  },
'Norway dohar': {
    "Dohar Norway": 1
  },
'Confetti dohar': {
    "Dohar Confetti": 1
  },
'Pink dohar': {
    "Dohar Harmony": 1
  },
'Pink Lehr dohar |||': {
    "Dohar PL": 1
  },
'Fiord Dohar': {
    "Dohar Fiord": 1
  },
'Grey Lehr Dohr': {
    "Dohar GL": 1
  },
'Golden Dohr': {
    "Dohar Ecru": 1
  },
'Sea shell dohr': {
    "Dohar Sea": 1
  },
'distorted double dohr': {
    "Dohar Distorted": 1
  },
'box dohar': {
    "Dohar Box": 1
  },
'snake double dohar': {
    "Dohar Snake": 1
  },
'green leaves dohar': {
    "Dohar Leaves": 1
  },
'moon mist dohar': {
    "Dohar Moon": 1
  },
'multi triangle dohar': {
    "Dohar Multi Triangle": 1
  },
'peach dohar': {
    "Dohar Peach": 1
  },
'navy square dohar': {
    "Dohar Navy": 1
  },
'Cannon pink dohar': {
    "Dohar Cannon": 1
  },
'dil dohar': {
    "Dohar Dil": 1
  },
'brown diamond double dohr': {
    "Dohar Brown Diam": 1
  },
'chino grey dohar': {
    "Dohar Chino": 1
  },
'green leaves dohr': {
    "Dohar Leaves": 1
  },
'dust grey dohr': {
    "Dohar Dust": 1
  },
'snake dohr': {
    "Dohar Snake": 1
  },
'white floral dohr': {
    "Dohar Pulmeria": 1
  },
'Wine Dohar': {
    "Dohar Wine": 1
  },
'Royal Blue Dohar': {
    "Dohar Royal": 1
  },
'Brown pashmina dohar': {
    "Dohar Berlin": 1
  },
'green pashmina dohar': {
    "Dohar Berlin": 1
  },
'multi diamond dohar': {
    "Dohar Diam": 1
  },
'Purple s/b dohr': {
    "S/b Dohar Purple": 1
  },
'Harmony s/b dohr': {
    "S/b Dohar Harmony": 1
  },
'CubeBrown s/b dohr': {
    "S/b Dohar Cubebrown": 1
  },
'GeoFusion s/b dohr': {
    "S/b Dohar Geofusion": 1
  },
'Olive s/b dohr': {
    "S/b Dohar Olive": 1
  },
'Beige s/b dohr': {
    "S/b Dohar Beige": 1
  },
'Linear s/b dohr': {
    "S/b Dohar Linear": 1
  },
'Vintage s/b dohr': {
    "S/b Dohar Vintage": 1
  },
'ZigZag s/b dohr': {
    "S/b Dohar Zigzag": 1
  },
'Cube s/b dohr': {
    "S/b Dohar Cube": 1
  },
'Silver s/b dohr': {
    "S/b Dohar Silver": 1
  },
'SS s/b dohr': {
    "S/b Dohar SS": 1
  },
'Cambridge s/b dohr': {
    "S/b Dohar Cambridge": 1
  },
'Queensland s/b dohr': {
    "S/b Dohar Queensland": 1
  },
'Perth s/b dohr': {
    "S/b Dohar Perth": 1
  },
'Sydney s/b dohr': {
    "S/b Dohar Sydney": 1
  },
'Toronto s/b dohr': {
    "S/b Dohar Toronto": 1
  },
'denver s/b dohr': {
    "S/b Dohar Denver": 1
  },
'tokyo s/b dohr': {
    "S/b Dohar Tokyo": 1
  },
'Vegas s/b dohr': {
    "S/b Dohar Vegas": 1
  },
'Pink s/b dohr': {
    "S/b Dohar Pink": 1
  },
'confetti s/b dohr': {
    "S/b Dohar Confetti": 1
  },
'norway s/b dohr': {
    "S/b Dohar Norway": 1
  },
'Fiord s/b dohr': {
    "S/b Dohar Purple": 1
  },
'sea shell s/b dohr': {
    "S/b Dohar Sea": 1
  },
'Golden s/b dohr': {
    "S/b Dohar Ecru": 1
  },
'Grey Lehr s/b dohr': {
    "S/b Dohar GL": 1
  },
'Pink Lehr s/b dohr': {
    "S/b Dohar PL": 1
  },
'snakee s/b dohr': {
    "S/b Dohar Snake": 1
  },
'box s/b dohar': {
    "S/b Dohar Box": 1
  },
'multi triangle s/b dohar': {
    "S/b Dohar Multi Triangle": 1
  },
'moon mist s/b dohar': {
    "S/b Dohar Moon": 1
  },
'leaves s/b dohar': {
    "S/b Dohar Leaves": 1
  },
'chino grey s/b dohar': {
    "S/b Dohar Chino": 1
  },
'diamond s/b dohar': {
    "S/b Dohar Diam": 1
  },
'navy square s/b dohar': {
    "S/b Dohar Navy": 1
  },
'cannon pink s/b dohar': {
    "S/b Dohar Cannon": 1
  },
'peach s/b dohar': {
    "S/b Dohar Peach": 1
  },
'distorted lines s/b dohr': {
    "S/b Dohar Distorted": 1
  },
'pink patti s/b dohar': {
    "S/b Dohar SS": 1
  },
'white flowers s/b dohar': {
    "S/b Dohar Pulmeria": 1
  },
'wine s/b dohar': {
    "S/b Dohar Wine": 1
  },
'dil s/b dohar': {
    "S/b Dohar Dil": 1
  },
'green s/b dohar': {
    "S/b Dohar Green": 1
  },
'brown s/b dohar': {
    "S/b Dohar Berlin": 1
  },
'royal s/b dohar': {
    "S/b Dohar Royal": 1
  },
'Purple 1+1': {
    "1+1 Purple": 1
  },
'Florica 1+1': {
    "1+1 Florica": 1
  },
'Harmony 1+1': {
    "1+1 Harmony": 1
  },
'Graphix 1+1': {
    "1+1 Graphix": 1
  },
'Yellow floral 1+1': {
    "1+1 Yellow Floral": 1
  },
'CubeBrown 1+1': {
    "1+1 CubeBrown": 1
  },
'GeoFusion 1+1': {
    "1+1 Geofusion": 1
  },
'Beige 1+1': {
    "1+1 Beige": 1
  },
'Olive 1+1': {
    "1+1 Olive": 1
  },
'Silver Single Sheet': {
    "1+1 Silver": 1
  },
'Linear Single Sheet': {
    "1+1 Linear": 1
  },
'Cube Single Sheet': {
    "1+1 Cube": 1
  },
'Vintage Single Sheet': {
    "1+1 Vintage": 1
  },
'Cambridge 1+1': {
    "1+1 Purple": 1
  },
'Perth 1+1': {
    "1+1 Perth": 1
  },
'Toronto 1+1': {
    "1+1 Toronto": 1
  },
'Sydney 1+1': {
    "1+1 Sydney": 1
  },
'Vegas 1+1': {
    "1+1 Vegas": 1
  },
'Denver 1+1': {
    "1+1 Denver": 1
  },
'Tokyo 1+1': {
    "1+1 Tokyo": 1
  },
'confetti 1+1(heavy)': {
    "1+1 Confetti": 1
  },
'norway 1+1 (heavy)': {
    "1+1 Norway": 1
  },
'pink 1+1(heavy)': {
    "1+1 Pink": 1
  },
'lovely 1+1 ||': {
    "1+1 Lovely": 1
  },
'Pulmeria 1+1': {
    "1+1 Pulmeria": 1
  },
'chino grey 1+1 ||': {
    "1+1 Chino": 1
  },
'dil 1+1,,//': {
    "1+1 Dil": 1
  },
'leaves 1+1': {
    "1+1 Leaves": 1
  },
'grey 1+1': {
    "1+1 Grey": 1
  },
'box+pista 1+1': {
    "1+1 Box": 1,
    "1+1 Pista": 1,
  },
  'royal 1+1,,//': {
    "1+1 Royal": 1
  },
  'wine 1+1,,//': {
    "1+1 Wine": 1
  },
  'Box + foot 1+1..': {
    "1+1 Box": 1,
    "1+1 Foot": 1,
  },
  'Do - Diamond 1+1': {
    "1+1 Diam": 2
  },
  'Do - w.b 1+1': {
    "1+1 WB": 2
  },
  'Do - Dil 1+1': {
    "1+1 Dil": 2
  },
  'dil+diamond 1+1': {
    "1+1 Dil": 1,
    "1+1 Diam": 1
  },
  'Grey patta + dil': {
    "1+1 Dil": 1,
    "1+1 Grey": 1
  },
  'dil + football (1+1) combo': {
    "1+1 Dil": 1,
    "1+1 Foot": 1
  },
  'Purple 1+2': {
    "1+2 Purple": 1
  },
  'Florica 1+2': {
    "1+2 Florica": 1
  },
  'Harmony 1+2': {
    "1+2 Harmony": 1
  },
  'Graphix 1+2': {
    "1+2 Graphix": 1
  },
  'Yellow floral 1+2': {
    "1+2 Yellow Floral": 1
  },
  'CubeBrown 1+2': {
    "1+2 Cubebrown": 1
  },
  'GeoFusion 1+2': {
    "1+2 Geofusion": 1
  },
  'Beige 1+2': {
    "1+2 Beige": 1
  },
  'Olive 1+2': {
    "1+2 Olive": 1
  },
  'Silver Sheet': {
    "1+2 Silver": 1
  },
  'Cube Sheet': {
    "1+2 Cube": 1
  },
  'Linear Sheet': {
    "1+2 Linear": 1
  },
  'Vintage Sheet': {
  "1+2 Vintage": 1
  },
  'Cambridge 1+2': {
    "1+2 Cambridge": 1
  },
  'Perth 1+2': {
    "1+2 Perth": 1
  },
  'Sydney 1+2': {
    "1+2 Sydney": 1
  },
  'Toronto 1+2': {
    "1+2 Toronto": 1
  },
  'Denver 1+2': {
    "1+2 Denver": 1
  },
  'Vegas 1+2': {
    "1+2 Vegas": 1
  },
  'Tokyo 1+2': {
    "1+2 Tokyo": 1
  },
  'confetti 1+2 (heavy)': {
    "1+2 Confetti": 1
  },
  'norway 1+2 (heavy)': {
    "1+2 Norway": 1
  },
  'pink 1+2 (heavy)': {
    "1+2 Pink": 1
  },
  'blue flower 1+2 (heavy)': {
    "1+2 Confetti": 1
  },
  'pulmeria 1+2': {
    "1+2 Pulmeria": 1
  },
  'Yellow Slice 1+2,,': {
    "1+2 Yellow Slice": 1
  },
  'wine 1+2,,//': {
    "1+2 Wine": 1
  },
  'green leaves 1+2/': {
    "1+2 Leaves": 1
  },
  'chino grey 1+2/': {
    "1+2 Chino": 1
  },
  'lovely 1+2': {
    "1+2 Lovely": 1
  },
  'royal blue 1+2': {
    "1+2 Royal": 1
  },
  'dil 1+2': {
    "1+2 Dil": 1
  },
  'grey patti 1+2': {
    "1+2 Grey": 1
  },
  'Berlin 108x108': {
    "108 Berlin": 1
  },
  'Tokyo 108x108': {
    "108 Tokyo": 1
  },
  'blue sunflower comforter only': {
    "Com Double Leaves": 1
  },
  'pink blue lining comforter only': {
    "Com Double SS": 1
  },
  'blue sunflower comforter set': {
  "Set Leaves": 1
  },
  'football comforter only': {
    "Com Double Foot": 1
  },
  'football comforter set': {
    "Set Foot": 1
  },
  'new triangle comforter set': {
    "Set Berlin": 1
  },
  'new triangle comforter only': {
    "Com Double Berlin": 1
  }

  // Add more SKU mappings here as needed
};

// Initialize file handling when DOM loads
document.addEventListener('DOMContentLoaded', function() {
  // Enhanced file input handling
  document.getElementById('upload').addEventListener('change', function(e) {
    const fileName = e.target.files[0]?.name;
    const fileNameDiv = document.getElementById('fileName');
    const processBtn = document.getElementById('processBtn');
    
    if (fileName) {
      fileNameDiv.textContent = `Selected: ${fileName}`;
      fileNameDiv.style.display = 'block';
      processBtn.disabled = false;
    } else {
      fileNameDiv.style.display = 'none';
      processBtn.disabled = true;
    }
  });
});

// Add loading state management
function setLoadingState(isLoading) {
  const processBtn = document.getElementById('processBtn');
  if (isLoading) {
    processBtn.classList.add('loading');
    processBtn.disabled = true;
  } else {
    processBtn.classList.remove('loading');
    processBtn.disabled = false;
  }
}

async function processPDF() {
  const fileInput = document.getElementById("upload");
  if (!fileInput.files.length) {
    alert("Please upload a PDF file.");
    return;
  }
  
  // Set loading state
  setLoadingState(true);
  
  const file = fileInput.files[0];
  const arrayBuffer = await file.arrayBuffer();
  const pdfLibDoc = await PDFLib.PDFDocument.load(arrayBuffer);
  const pdfJsDoc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const pages = pdfLibDoc.getPages();
  
  // Reset stock array to 0
  for (let key in stockArray) {
    stockArray[key] = 0;
  }
  
  console.log('pages >>> ', pages);
  console.log('Initial stock array:', stockArray);
  
  for (let i = 1; i < pdfJsDoc.numPages; i += 2) {
    const pageTextContent = await pdfJsDoc.getPage(i + 1).then(p => p.getTextContent());
    const text = pageTextContent.items.map(item => item.str).join(" ");
    console.log('text >>> ', text);
    
    // Find all SKU matches on this specific detail page
    const skuMatches = text.match(/\(\s*([^)]+?)\s*\)\s*HSN/gi);
    const orderItemsOnThisPage = [];
    
    if (skuMatches) {
      for (const match of skuMatches) {
        const skuMatch = match.match(/\(\s*([^)]+?)\s*\)\s*HSN/i);
        if (skuMatch) {
          const sku = skuMatch[1].trim();
          
          // Find quantity for this SKU - look for quantity in table structure
          // Pattern: HSN:#### ₹price qty ₹total
          const hsnPattern = new RegExp(`HSN:\\d+\\s+₹[\\d,\\.]+\\s+(\\d+)`, 'i');
          const qtyMatch = text.match(hsnPattern);
          
          let qty = null;
          if (qtyMatch) {
            qty = qtyMatch[1];
          } else {
            // Fallback to original method
            const allNumbers = text.match(/\d+/g);
            const qtyIndex = text.search(/Qty/i);
            if (qtyIndex !== -1 && allNumbers) {
              const afterQty = text.substring(qtyIndex);
              const nextNumberMatch = afterQty.match(/\d+/);
              if (nextNumberMatch) {
                qty = nextNumberMatch[0];
              }
            }
          }
          
          // console.log(`Found SKU: ${sku}, Quantity: ${qty}`);
          
          if (qty) {
            const orderQty = parseInt(qty);
            orderItemsOnThisPage.push({
              sku: sku,
              qty: orderQty
            });
            
            // Process stock requirements based on SKU mapping
            if (skuToStockMapping[sku]) {
              // console.log(`Processing SKU: ${sku} with quantity: ${orderQty}`);
              
              for (const [stockItem, baseQty] of Object.entries(skuToStockMapping[sku])) {
                const totalToAdd = baseQty * orderQty;
                stockArray[stockItem] += totalToAdd;
                
                // console.log(`Added ${totalToAdd} to ${stockItem} (base: ${baseQty} * order qty: ${orderQty})`);
              }
            } else {
              console.log(`No stock mapping found for SKU: ${sku}`);
            }
          }
        }
      }
    }
    
    console.log(`Page ${i + 1} has ${orderItemsOnThisPage.length} order items:`, orderItemsOnThisPage);
    
    // Continue with original barcode page logic
    if (orderItemsOnThisPage.length > 0) {
      const barcodePageIndex = i - 1;
      const barcodePage = pages[barcodePageIndex];
      console.log('printing on page index:', barcodePageIndex);
      
      if (barcodePage) {
        const { width, height } = barcodePage.getSize();
        const font = await pdfLibDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        const textY = 180;
        const textX = 60;
        
        let insertText;
        let fontSize;
        
        if (orderItemsOnThisPage.length > 1) {
          // Multiple order items on this specific page - print 'Multi' ONLY
          insertText = 'Multi';
          fontSize = 16;
          
          console.log(`Placing text "${insertText}" at x: ${textX}, y: ${textY}, page height: ${height}, fontSize: ${fontSize}`);
          
          barcodePage.drawText(insertText, {
            x: textX,
            y: textY,
            size: fontSize,
            font: font,
            color: PDFLib.rgb(0, 0, 0)
          });
        } else {
          // Single order item on this page - check quantity
          const item = orderItemsOnThisPage[0];
          
          if (item.qty > 1) {
            // Draw quantity in larger font, then " * SKU" in normal font
            const qtyText = item.qty.toString();
            const restText = ` * ${item.sku}`;
            
            // Draw quantity in larger font
            barcodePage.drawText(qtyText, {
              x: textX,
              y: textY,
              size: 20,
              font: font,
              color: PDFLib.rgb(0, 0, 0)
            });
            
            // Calculate width of quantity text to position the rest
            const qtyWidth = font.widthOfTextAtSize(qtyText, 18);
            
            // Draw " * SKU" in normal font
            barcodePage.drawText(restText, {
              x: textX + qtyWidth,
              y: textY,
              size: 16,
              font: font,
              color: PDFLib.rgb(0, 0, 0)
            });
            
            console.log(`Placing quantity "${qtyText}" (size 18) and "${restText}" (size 12) at x: ${textX}, y: ${textY}`);
          } else {
            // Quantity is 1, draw normally
            insertText = `${item.qty} * ${item.sku}`;
            barcodePage.drawText(insertText, {
              x: textX,
              y: textY,
              size: 12,
              font: font,
              color: PDFLib.rgb(0, 0, 0)
            });
            
            console.log(`Placing text "${insertText}" at x: ${textX}, y: ${textY}, fontSize: 12`);
          }
        }
      }
    }
  }
  
  // Display final stock array
  displayStockArray();
  
  const modifiedPdfBytes = await pdfLibDoc.save();
  const blob = new Blob([modifiedPdfBytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "updated.pdf";
  link.click();
  
  // Remove loading state
  setLoadingState(false);
}


// Modified displayStockArray function with password protection
function displayStockArray() {
  const resultsDiv = document.getElementById('results');

  // Define the custom sort order (unchanged)
  const sortOrder = [
    "1+1", "1+2", "108","Fitted", "60x78", "36x78", "72x72",
    "Dohar Single", "Dohar", "Set",
    "Com Double", "Com Single"
  ];

  // Filter out items with zero quantity (unchanged)
  const filteredStock = Object.entries(stockArray).filter(([item, qty]) => qty > 0);

  // Sort according to the custom order (unchanged)
  filteredStock.sort(([itemA], [itemB]) => {
    const indexA = sortOrder.findIndex(order => itemA.toLowerCase().includes(order.toLowerCase()));
    const indexB = sortOrder.findIndex(order => itemB.toLowerCase().includes(order.toLowerCase()));
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return itemA.localeCompare(itemB);
  });

  let html = '';

  if (filteredStock.length === 0) {
    html += '<div class="no-items"><i class="fas fa-info-circle"></i> No items with quantity greater than 0</div>';
  } else {
    // Check password from input field
    const passwordInput = document.getElementById('passwordInput');
    const userPassword = passwordInput ? passwordInput.value.trim() : '';
    const isAuthorized = userPassword === 'Radhasoami';

    let copyText = '';
    
    if (isAuthorized) {
      // Category order + match patterns (anchor at start, case-insensitive)
      console.log('[displayStockArray] filteredStock count:', filteredStock.length);
      console.log('[displayStockArray] filteredStock:', filteredStock);
      const categories = [
        { label: '(1+1)-',       pattern: /^1\+1\s*/i },
        { label: '(1+2)-',       pattern: /^1\+2\s*/i },
        { label: '(108)-',     pattern: /^108\s*/i },
        { label: '(72x78)-',     pattern: /^Fitted\s*/i },        // "Fitted ..." -> 72x78
        { label: '(60x78)-',     pattern: /^60x78\s*/i },
        { label: '(36x78)-',     pattern: /^36x78\s*/i },
        { label: '(72x72)-',     pattern: /^72x72\s*/i },
        { label: '(S/b Dohar)-', pattern: /^S\/b\s*Dohar\s*/i },
        { label: '(Dohar)-',     pattern: /^Dohar\s*/i },
        { label: '(Dohar2Pc)-',  pattern: /^Dohar2Pc\s*/i },
        { label: '(Set)-',       pattern: /^Set\s*/i },
        { label: '(Com Double)-',pattern: /^Com\s*Double\s*/i },
        { label: '(Com Single)-',pattern: /^Com\s*Single\s*/i },
      ];

      // Prepare bins
      let grouped = Object.fromEntries(categories.map(c => [c.label, []]));
      const unmatched = [];

      // Assign items to bins, stripping the matched prefix
      for (const [stockItem, quantity] of filteredStock) {
        let matched = false;

        for (const cat of categories) {
          if (cat.pattern.test(stockItem)) {
            const nameWithoutPrefix = stockItem.replace(cat.pattern, '').trim();
            grouped[cat.label].push({ name: nameWithoutPrefix, qty: quantity, original: stockItem });
            console.log(`[group] MATCH: "${stockItem}" -> ${cat.label} as "${nameWithoutPrefix}" (qty=${quantity})`);
            matched = true;
            break;
          }
        }

        if (!matched) {
          unmatched.push({ name: stockItem, qty: quantity });
          console.warn(`[group] UNMATCHED: "${stockItem}" (qty=${quantity})`);
        }
      }

      // Build the WhatsApp copy text from bins (skip empty categories)
      copyText = "📦 Stock Summary:\n";
      for (const cat of categories) {
        const items = grouped[cat.label];
        console.log(`[copyText] ${cat.label} count:`, items.length);
        if (!items.length) continue;

        copyText += `${cat.label}\n`;
        for (const item of items) {
          copyText += `• ${item.name} -- ${item.qty}\n`;
        }
        copyText += `\n`;
      }

      if (unmatched.length) {
        console.log('[group] Unmatched items (excluded from copyText):', unmatched);
      }
    } else {
      // If password is wrong, show message in textarea
      copyText = isAuthorized ? '' : 'Not calculated';
    }

    // Copy section with password-protected content
    html += `
      <div class="copy-section">
        <h4><i class="fas fa-copy"></i> Copy for WhatsApp</h4>
        <textarea id="copyText" class="copy-textarea" readonly>${copyText.trim()}</textarea>
        <button class="copy-btn" onclick="copyToClipboard()" ${!isAuthorized ? 'disabled' : ''}>
          <i class="fas fa-copy"></i> Copy Text
        </button>
      </div>
    `;
  }

  resultsDiv.innerHTML = html;
  resultsDiv.classList.add('show');

  // Keep your existing debug logs
  console.log('Filtered and Sorted Stock Array:', filteredStock);
  console.log('Full Stock Array:', stockArray);
}


function copyToClipboard() {
  const copyText = document.getElementById('copyText');
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  
  try {
    document.execCommand('copy');
    
    // Visual feedback
    const copyBtn = document.querySelector('.copy-btn');
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    copyBtn.style.background = '#28a745';
    
    setTimeout(() => {
      copyBtn.innerHTML = originalText;
      copyBtn.style.background = '';
    }, 2000);
    
  } catch (err) {
    // Fallback for mobile
    copyText.focus();
    copyText.select();
    alert('Text selected! Press Ctrl+C (or Cmd+C on Mac) to copy, or long-press and select "Copy" on mobile.');
  }
}
