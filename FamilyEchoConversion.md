# FamilyEcho Conversion Guide

A guide to help convert an exported CSV file from Family Echo into an importable JSON file for my FamilyTreeJS project.

### In Family Echo

- Go to Family's Link
- Login
- Click Download --> CSV Format

### In Excel

- Open CSV and Save-as .xls format
- Create column "id" next to the existing column "ID"
  - Fill with Sequential numbers starting with 1
- Create column "mid" next to the existing column "Mother ID"
- Create column "fid" next to the existing column "Father ID"
- Insert the following formula into all cells of both "mid" and "fid" columns
  ```
  =IF(ISNA(VLOOKUP(L5, A2:B91,2, FALSE)), "", VLOOKUP(L5, A2:B91,2, FALSE))
  ```
  - If the formula is working correctly it should return the newly created sequencial "id" value in column B the right of the matched value found in column A.
  - If no match is found in the "ID" colmun, it returns "".
- Save as .CSV

### Convert CSV to JSON using Convertcsv.com

- Upload CSV to https://www.convertcsv.com/csv-to-json.htm
- Go to Step 4 "Create Custom Output via Template"
- Enter the following template details:

  Top

  ```
  [{br}
  ```

  Repeating Section for each Line of CSV

  ```
  {lb}
     "og_id": {f1},
     "id": {seq},
     "mid": {f11},
     "fid": {f13},
     "pids": [{f31}],
     "gender": "{f9.toLowerCase()}",
     "name": "{f2}",
     "photo": "",
     "fullname": "{f2}",
     "born": "{("0000" + f22).slice(-4)}-{("00" + f23).slice(-2)}-{("00" + f24).slice(-2)}",
     "email": "",
     "phone": "",
     "city": "",
     "country": "",
     "address": "",
     "about": "",
     "facebook_url": ""
  {rb}
  ```

  Bottom

  ```
  {br}]
  ```

- Click "Convert CSV To JSON via Template"
- Click "Download Result" at the bottom of the page

### Import into FamilyTreeJS App

- If everything worked properly you should have all the correctly formatted fields required for the FamilyTreeJS app

### Useful links

- [Excel Vlookup Function](https://support.microsoft.com/en-us/office/vlookup-function-0bbc8083-26fe-4963-8ab8-93a18ad188a1)
- [Excel Vlookup: if not found return blank cell](<https://www.ablebits.com/office-addins-blog/if-vlookup-excel/#:~:text=Excel%20Vlookup%3A%20if%20not%20found%20return%20blank%20cell,%22%2C%20VLOOKUP(%E2%80%A6)>)
- [Convertcsv.com: Template Writer](https://www.convertcsv.com/csv-to-template-output.htm#tWriter)
