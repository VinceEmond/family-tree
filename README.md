# Family Tree

Building a family tree page for my own family leveraging the FamilyTreeJS API.

### Original FamilyTreeJS "First Look (hugo)" Template

![App Screenshot](/public/FirstLook-Template.png)

### My Version with Modifications & Added Features

![App Screenshot](/public/230424-CurrentVersion.png)

### Modified & Added Features

<ul>
  <li>Fixed Bug: Non-square avatars stretched out in details card</li>
  <li>Increased vertical size of each node (male, female, neutral)</li>
  <li>Calculated and displayed aged in new field based on birth date</li>
  <li>Formatted and display birth and death years if deceased</li>
  <li>Formatted and display currenty city and country on node</li>
</ul>

### Potential Data Fields

- Name
- Middle names
- Nickname
- Title + Suffix
- Surname
- Photo
- Age
- Life years
- Birth date
- Birth place
- Marriage date
- Death date
- Death place
- Death cause
- Burial place
- Email
- Telephone
- Address
- Profession
- Interests
- Activities

### Todos

- [ ] Find a way to change which node the tree starts centered on
- [ ] Add fields
- [ ] Add "Last updated" field to help establish confidence in data accuary
- [x] Change "About" to "Bio"
- [x] Format current city + country based on seperate values (remove hard code for country)
- [x] Find a way to leverage existing exported data from EchoFamily
