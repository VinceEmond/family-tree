//JavaScript

FamilyTree.templates.hugo.field_0 =
  '<text data-width="230" style="font-size: 18px;font-weight:bold;" fill="#ffffff" x="125" y="85" text-anchor="middle">{val}</text>';

FamilyTree.templates.hugo.field_2 =
  '<text class="field_2" style="font-size: 14px;" fill="#ffffff" x="125" y="125" text-anchor="middle">{val}, Canada</text>';

FamilyTree.templates.hugo_male.field_2 =
  '<text class="field_2" style="font-size: 14px;" fill="#ffffff" x="125" y="125" text-anchor="middle">{val}, Canada</text>';

FamilyTree.templates.hugo_female.field_2 =
  '<text class="field_2" style="font-size: 14px;" fill="#ffffff" x="125" y="125" text-anchor="middle">{val}, Canada</text>';

// FamilyTree.templates.hugo_male.field_3 =
// '<text data-width="230" data-text-overflow="multiline-4-ellipsis" style="font-size: 20px;" fill="#fff" x="10" y="28" text-anchor="start">{val}</text>';

FamilyTree.templates.hugo.node =
  '<rect x="0" y="0" height="140" width="250" stroke-width="1" fill="url(#hugo_grad)" stroke="#aeaeae" rx="7" ry="7"></rect>';

FamilyTree.templates.hugo_female.node =
  '<rect x="0" y="0" height="140" width="250" stroke-width="1" fill="url(#hugo_grad_female)" stroke="#aeaeae" rx="7" ry="7"></rect>';

FamilyTree.templates.hugo_male.node =
  '<rect x="0" y="0" height="140" width="250" stroke-width="1" fill="url(#hugo_grad_male)" stroke="#aeaeae" rx="7" ry="7"></rect>';

FamilyTree.elements.about = function (data, editElement, minWidth, readOnly) {
  // var id = FamilyTree.elements.generateId();
  var id = 'aboutlabel';
  var value = data[editElement.binding];
  if (value == undefined) value = '';
  if (readOnly && !value) {
    return {
      html: '',
    };
  }
  var rOnlyAttr = readOnly ? 'readonly' : '';
  var rDisabledAttr = readOnly ? 'disabled' : '';
  return {
    html: `<label for="${id}">${editElement.label}</label>
                      <textarea ${rDisabledAttr} ${rOnlyAttr} class="abouttextarea" id="${id}" name="${id}" style="width: 100%;height: 100px;" data-binding="${editElement.binding}">${value}</textarea>`,
    id: id,
    value: value,
  };
};

FamilyTree.elements.hyperlink = function (
  data,
  editElement,
  minWidth,
  readOnly
) {
  // var id = FamilyTree.elements.generateId();
  var id = 'hyperlinklabel';
  var value = data[editElement.binding];
  if (value == undefined) value = '';
  if (readOnly && !value) {
    return {
      html: '',
    };
  }
  var rOnlyAttr = readOnly ? 'readonly' : '';
  var rDisabledAttr = readOnly ? 'disabled' : '';
  return {
    html: `<label for="${id}">${editElement.label}</label>
                      <a ${rDisabledAttr} ${rOnlyAttr} target=”_blank” href="${value}" class="hyperlink" id="${id}" name="${id}" style="width: 100%;height: 100px;" data-binding="${editElement.binding}">Visit Facebook Profile</a>`,
    id: id,
    value: value,
  };
};

var family = new FamilyTree(document.getElementById('tree'), {
  // state: {
  //   name: 'MyStateName',
  //   readFromLocalStorage: true,
  //   writeToLocalStorage: true,
  // readFromIndexedDB: true,
  // writeToIndexedDB: true,
  // readFromUrlParams: true,
  // writeToUrlParams: true,
  // },
  mouseScrool: FamilyTree.action.zoom,
  miniMap: false,
  zoom: { speed: 15, smooth: 10 },
  mode: 'dark',
  template: 'hugo',
  roots: [3],
  filterBy: ['gender', 'city', 'country'],
  tags: {
    filter: {
      template: 'filtered',
    },
  },
  menu: {
    xml: { text: 'Export XML' },
    csv: { text: 'Export CSV' },
    json: { text: 'Export JSON' },
    importJSON: {
      text: 'Import JSON',
      icon: FamilyTree.icon.json(24, 24, 'red'),
      onClick: importJSONHandler,
    },
    importXML: {
      text: 'Import XML',
      icon: FamilyTree.icon.xml(24, 24, 'red'),
      onClick: importXMLHandler,
    },
    importCSV: {
      text: 'Import CSV',
      icon: FamilyTree.icon.csv(24, 24, 'red'),
      onClick: importCSVHandler,
    },
  },
  nodeMenu: {
    edit: { text: 'Edit' },
    details: { text: 'Details' },
  },
  nodeTreeMenu: true,
  nodeBinding: {
    field_0: 'name',
    // field_1: 'born',
    field_1: 'born',
    field_2: 'city',
    // field_3: 'address',
    img_0: 'photo',
  },
  editForm: {
    titleBinding: 'name',
    photoBinding: 'photo',
    addMoreBtn: 'Add element',
    addMore: 'Add more elements',
    addMoreFieldName: 'Element name',
    generateElementsFromFields: false,
    elements: [
      { type: 'textbox', label: 'Full Name', binding: 'fullname' },
      { type: 'textbox', label: 'Email Address', binding: 'email' },
      [
        { type: 'textbox', label: 'Phone', binding: 'phone' },
        { type: 'date', label: 'Date Of Birth', binding: 'born' },
      ],
      [
        {
          type: 'textbox',
          label: 'Country',
          binding: 'country',
        },
        { type: 'textbox', label: 'City', binding: 'city' },
      ],
      { type: 'textbox', label: 'Photo Url', binding: 'photo', btn: 'Upload' },
      { type: 'about', label: 'About', binding: 'about' },
      { type: 'hyperlink', label: 'Facebook', binding: 'facebook_url' },
    ],
  },
});

function importJSONHandler() {
  family.importJSON();
}
function importXMLHandler() {
  family.importXML();
}

function importCSVHandler() {
  family.importCSV();
}

// function importHandler(){
//     family.importJSON();
// }

const getAge = (birthDate) =>
  Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

family.on('field', function (sender, args) {
  if (args.name == 'born') {
    if (args.data['died']) {
      var borndate = args.data['born'].substring(0, 4);
      var dieddate = args.data['died'].substring(0, 4);
      args.value = borndate + ' - ' + dieddate;
    } else if (args.data['born']) {
      args.value = `Age: ${getAge(args.data['born'])}`;
    } else {
      args.value;
    }
  }
});

// Option to start with details card already open
// family.on('init', function (sender) {
//   sender.editUI.show(1, true);
// });

async function loadFromFile(url) {
  try {
    const response = await fetch(url);
    const allfamily = await response.json();
    family.load(allfamily);
  } catch (err) {
    family.load(placeholders);
    console.error(err);
  }
}

loadFromFile('/_familyinfo.json');

const placeholders = [
  {
    id: 1,
    pids: [3],
    gender: 'male',
    photo: 'https://cdn.balkan.app/shared/m60/2.jpg',
    name: 'Zeph Daniels',
    born: '1954-09-29',
  },
  {
    id: 2,
    pids: [3],
    gender: 'male',
    photo: 'https://cdn.balkan.app/shared/m60/1.jpg',
    name: 'Rowan Annable',
    born: '1952-10-10',
  },
  {
    id: 3,
    pids: [1, 2],
    gender: 'female',
    photo: 'https://cdn.balkan.app/shared/w60/1.jpg',
    name: 'Laura Shepherd',
    born: '1943-01-13',
    email: 'laura.shepherd@gmail.com',
    phone: '+44 845 5752 547',
    city: 'Moscow',
    country: 'ru',
  },
  {
    id: 4,
    pids: [5],
    photo: 'https://cdn.balkan.app/shared/m60/3.jpg',
    name: 'Rowan Annable',
  },
  {
    id: 5,
    pids: [4],
    gender: 'female',
    photo: 'https://cdn.balkan.app/shared/w60/3.jpg',
    name: 'Lois Sowle',
  },
  {
    id: 6,
    mid: 2,
    fid: 3,
    pids: [7],
    gender: 'female',
    photo: 'https://cdn.balkan.app/shared/w30/1.jpg',
    name: 'Tyler Heath',
    born: '1975-11-12',
  },
  {
    id: 7,
    pids: [6],
    mid: 5,
    fid: 4,
    gender: 'male',
    photo: 'https://cdn.balkan.app/shared/m30/3.jpg',
    name: 'Samson Stokes',
    born: '1986-10-01',
  },
  {
    id: 8,
    mid: 7,
    fid: 6,
    gender: 'female',
    photo: 'https://cdn.balkan.app/shared/w10/3.jpg',
    name: 'Celeste Castillo',
    born: '2021-02-01',
  },
];
