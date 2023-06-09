// Template to facilitate converting a https://www.familyecho.com/ CSV export to an import-friendly FamilyTreeJS JSON file
// Use this template at https://www.convertcsv.com/csv-to-json.htm
// Template Formatting help: https://www.convertcsv.com/csv-to-template-output.htm#tWriter


// Top
[{br}
 
// Repeating Section for each Line of CSV
{lb}
     "id": {f2},
     "mid": {f13},
     "fid": {f16},
     "pids": [{f35}],
     "gender": "{f10.toLowerCase()}",
     "name": "{f3}",
     "photo": "",
     "fullname": "{f3}",
     "born": "{("0000" + f25).slice(-4)}-{("00" + f26).slice(-2)}-{("00" + f27).slice(-2)}",
     "email": "",
     "phone": "",
     "city": "",
     "country": "",
     "address": "",
     "about": "",
     "facebook_url": ""
  {rb}

// Bottom
{br}]


// NOTES:
// -Nicknames cause issues





// {lb}
// "og_id": {f1}, 
// "id": {seq}, 
// "mid": {f11}, 
// "fid": {f13}, 
// "pids": [{f31}], 
// "gender": "{f9.toLowerCase()}",
// "name": "{f2}", 
// "photo": "",
// "fullname": "{f2}", 
// "born": "{("0000" + f22).slice(-4)}-{("00" + f23).slice(-2)}-{("00" + f24).slice(-2)}",
// "email": "",
// "phone": "",
// "city": "",
// "country": "",
// "address": "",
// "about": "",
// "facebook_url": ""
// {rb}
