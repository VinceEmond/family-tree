//JavaScript

var cameraicon = `<svg color="#fff" width="24" height="24" viewBox="0 0 550.801 550.801" xmlns="http://www.w3.org/2000/svg"><path fill="#FFF" d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>`;
function morePhotosFunction() {
  console.log('More photos incoming!');
}

FamilyTree.templates.hugo.field_0 =
  '<text data-width="230" style="font-size: 18px;font-weight:bold;" fill="#ffffff" x="125" y="85" text-anchor="middle">{val}</text>';

FamilyTree.templates.hugo.field_2 =
  '<text class="field_2" style="font-size: 14px;" fill="#ffffff" x="125" y="125" text-anchor="middle">{val}</text>';

FamilyTree.templates.hugo_male.field_2 =
  '<text class="field_2" style="font-size: 14px;" fill="#ffffff" x="125" y="125" text-anchor="middle">{val}</text>';

FamilyTree.templates.hugo_female.field_2 =
  '<text class="field_2" style="font-size: 14px;" fill="#ffffff" x="125" y="125" text-anchor="middle">{val}</text>';

// FamilyTree.templates.hugo_male.field_3 =
// '<text data-width="230" data-text-overflow="multiline-4-ellipsis" style="font-size: 20px;" fill="#fff" x="10" y="28" text-anchor="start">{val}</text>';

FamilyTree.templates.hugo.node =
  '<rect x="0" y="0" height="140" width="250" stroke-width="1" fill="url(#hugo_grad)" stroke="#aeaeae" rx="7" ry="7"></rect>';

FamilyTree.templates.hugo_female.node =
  '<rect x="0" y="0" height="140" width="250" stroke-width="1" fill="url(#hugo_grad_female)" stroke="#aeaeae" rx="7" ry="7"></rect>';

FamilyTree.templates.hugo_male.node =
  '<rect x="0" y="0" height="140" width="250" stroke-width="1" fill="url(#hugo_grad_male)" stroke="#aeaeae" rx="7" ry="7"></rect>';

FamilyTree.elements.bio = function (data, editElement, minWidth, readOnly) {
  // var id = FamilyTree.elements.generateId();
  var id = 'biolabel';
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
                      <textarea ${rDisabledAttr} ${rOnlyAttr} class="biotextarea" id="${id}" name="${id}" style="width: 100%;height: 100px;" data-binding="${editElement.binding}">${value}</textarea>`,
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
  nodeMouseClick: FamilyTree.action.details,
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
    buttons: {
      edit: {
        icon: FamilyTree.icon.edit(24, 24, '#fff'),
        text: 'Edit',
        hideIfEditMode: true,
        hideIfDetailsMode: false,
      },
      share: {
        icon: FamilyTree.icon.share(24, 24, '#fff'),
        text: 'Share',
      },
      pdf: {
        icon: FamilyTree.icon.pdf(24, 24, '#fff'),
        text: 'Save as PDF',
      },
      photos: {
        icon: cameraicon,
        text: 'More Photos',
        onclick: morePhotosFunction,
      },
    },
    elements: [
      { type: 'textbox', label: 'Full Name', binding: 'fullname' },
      { type: 'textbox', label: 'Email Address', binding: 'email' },
      [
        { type: 'textbox', label: 'Phone', binding: 'phone' },
        { type: 'date', label: 'Date Of Birth', binding: 'born' },
        { type: 'date', label: 'Date Of Death', binding: 'died' },
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
      { type: 'bio', label: 'Biography', binding: 'bio' },
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
  // Format date for node
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

  // Format city for node
  if (args.name == 'city') {
    if (args.data['city'] && args.data['country']) {
      args.value = `${args.data['city']}, ${args.data['country']}`;
      // console.log()
    }
  }
});

family.on('click', function (sender, args) {
  console.log('Clicked on node ID:', args.node.id);
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
    // gender: 'male',
    photo: 'https://cdn.balkan.app/shared/m60/2.jpg',
    name: 'Zeph Daniels',
    born: '1954-09-29',
    died: '2000-01-01',
    fullname: 'Zeph John Daniels',
    email: 'fake@email.com',
    phone: '778-420-6969',
    city: 'Calgary',
    country: 'Canada',
    address: '1 Fake Street',
    bio: 'Bacon ipsum dolor amet bresaola doner tri-tip pastrami shoulder, salami flank. Strip steak chicken shank, pork loin buffalo andouille frankfurter. Ham hock frankfurter tongue, turducken andouille alcatra landjaeger buffalo',
    facebook_url: 'https://www.facebook.com/a.fb.profile.42069/',
  },
  {
    id: 2,
    pids: [3],
    gender: 'male',
    photo: 'https://cdn.balkan.app/shared/m60/1.jpg',
    name: 'Rowan Annable',
    born: '1952-10-10',
    city: 'Ottawa',
    country: 'Canada',
  },
  {
    id: 3,
    pids: [1, 2],
    gender: 'female',
    photo: 'https://cdn.balkan.app/shared/w60/1.jpg',
    name: 'Laura Shepherd',
    born: '1943-01-13',
    died: '',
    fullname: 'Laura Diana Shepherd',
    email: 'fake@email.com',
    phone: '778-420-6969',
    city: 'Squamish',
    country: 'Canada',
    address: '1 Fake Street',
    bio: 'Bacon ipsum dolor amet bresaola doner tri-tip pastrami shoulder, salami flank. Strip steak chicken shank, pork loin buffalo andouille frankfurter. Ham hock frankfurter tongue, turducken andouille alcatra landjaeger buffalo',
    facebook_url: 'https://www.facebook.com/a.fb.profile.42069/',
  },
  {
    id: 4,
    pids: [5],
    photo: 'https://cdn.balkan.app/shared/m60/3.jpg',
    name: 'Jack Black',
    born: '1969-04-23',
    died: '2023-02-23',
    city: 'Ottawa',
    country: 'Canada',
  },
  {
    id: 5,
    pids: [4],
    gender: 'female',
    photo: 'https://cdn.balkan.app/shared/w60/3.jpg',
    name: 'Lois Sowle',
    born: '1973-03-22',
    died: '',
    city: 'Seattle',
    country: 'USA',
  },
  {
    id: 6,
    mid: 2,
    fid: 3,
    pids: [7],
    gender: 'female',
    photo: 'https://cdn.balkan.app/shared/w30/1.jpg',
    name: 'Tiara Annable',
    born: '1975-11-12',
    city: 'Seattle',
    country: 'USA',
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
    city: 'Seattle',
    country: 'USA',
  },
  {
    id: 8,
    mid: 7,
    fid: 6,
    gender: 'female',
    photo: 'https://cdn.balkan.app/shared/w10/3.jpg',
    name: 'Celeste Stokes',
    born: '2021-02-01',
    city: 'Seattle',
    country: 'USA',
  },
];
