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
- Create column "mid" directly right to the existing column "Mother ID"
- Create column "fid" directly right to the existing column "Father ID"
  - Insert the following formula into the first row, then pull to auto-fill the remainder of rows in the column:
    ```
    =IF(ISNA(VLOOKUP(INDIRECT(ADDRESS(ROW(),COLUMN()-1)), A:B,2, FALSE)), "", VLOOKUP(INDIRECT(ADDRESS(ROW(),COLUMN()-1)), A:B,2, FALSE))
    ```
    partner id formula
  ```
  =IF(ISNA(VLOOKUP(INDIRECT(ADDRESS(ROW(),COLUMN()-1)), A:B,2, FALSE)), INDIRECT(ADDRESS(ROW(),COLUMN()+9)), VLOOKUP(INDIRECT(ADDRESS(ROW(),COLUMN()-1)), A:B,2, FALSE))
  ```
  - You may need to adjust "L2" to the cell
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
     "id": {f2},
     "mid": {f13},
     "fid": {f16},
     "pids": [{f35}],
     "divorced": [{f44}],
     "divorced2":[{f45}],
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
  ```

  Bottom

  ```
  {br}]
  ```

- Click "Convert CSV To JSON via Template"
- Click "Download Result" at the bottom of the page

### Manual Adjustments + Find and replace

- Make sure everyone has a name
- Find and Erase
  - "mid": ,
  - "fid": ,
  - "pids": [],
  - 0000-00-00
  - "divorced": [],
  - "divorced2": [],
- Find and replace
  - -00
    - Replace with: -01
- Make sure there's no blank nodes at the bottom of the file
- If someone has two ex-partners, make sure to manually add their IDs into the pids array
  - Alphe
  - Charles Emond
  - Brenda Christine
  - Etc

### Import into FamilyTreeJS App

- If everything worked properly you should have all the correctly formatted fields required for the FamilyTreeJS app

### Exceptions to Consider

- Nicknames in Family Echo cause issues
- Multiple Ex Partners causes issues
- Ex Partners are not considered partners in Family Echo therefor need to be relinked

### Useful links

- [Excel Vlookup Function](https://support.microsoft.com/en-us/office/vlookup-function-0bbc8083-26fe-4963-8ab8-93a18ad188a1)
- [Excel Vlookup: if not found return blank cell](<https://www.ablebits.com/office-addins-blog/if-vlookup-excel/#:~:text=Excel%20Vlookup%3A%20if%20not%20found%20return%20blank%20cell,%22%2C%20VLOOKUP(%E2%80%A6)>)
- [Convertcsv.com: Template Writer](https://www.convertcsv.com/csv-to-template-output.htm#tWriter)
