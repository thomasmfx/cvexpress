import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { PoppinsRegular } from './Fonts/Poppins-Regular'
import { PoppinsSemiBold } from './Fonts/Poppins-SemiBold'
import { PoppinsLight } from './Fonts/Poppins-Light'
import { PoppinsMedium } from './Fonts/Poppins-Medium'
import { hasEntries, getDefaultIfEntries } from "../../helpers/helpers"

export default function resumePDF(data, download) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs
  window.pdfMake.vfs["Poppins-Regular.ttf"] = PoppinsRegular;
  window.pdfMake.vfs["Poppins-SemiBold.ttf"] = PoppinsSemiBold;
  window.pdfMake.vfs["Poppins-Light.ttf"] = PoppinsLight;
  window.pdfMake.vfs["Poppins-Medium.ttf"] = PoppinsMedium;

  pdfMake.fonts={
    Poppins: {
      normal: 'Poppins-Light.ttf',
      bold: 'Poppins-SemiBold.ttf',
      italics: 'Poppins-Medium.ttf' // Not really italics, just another hack :P theres no medium property
    }
 }

  function contactData() {
    const contact = hasEntries(data.contactInformation) 
    ? data.contactInformation[0].data
    : data.contactInformation
    let details = '';
    const contactEntries = Object.entries(contact);

    contactEntries.map(([key, value], index) => {
      if (key !== 'fullName' && value.value !== '') {
        details += value.value;
        if (index < contactEntries.length - 1) details += ' • ';
      }
    })
    
    return details;
  }
  const contactSection = [
    {
      text: data.contactInformation[0].data.fullName.value,
      style: 'header',
      alignment: 'center',
      fontSize: 24,
      margin: [0, 0, 0, 5],
    },
    {
      text: contactData(),
      alignment: 'center',
      margin: [50, 0, 50, 20],
    }
  ]

  const educationData = data.educationHistory.map((entry) => {
    return {
      columns: [
        {
          stack: [
            {text: entry.data.school.value, style: 'subHeader'},
            {text: entry.data.course.value,}
          ],
        },
        {
          stack: [
            {text: ' '},
            {text: `${entry.data.startDate.value} - ${entry.data.endDate.value}`}
          ],
          alignment: 'right'
        },
      ]
    }
  }); 
  const educationSection = [
    getDefaultIfEntries(data.educationHistory, {
      text: 'EDUCATION',
      style: 'header'
    }),
    {
			stack: [
        ...educationData,
      ]
    },
  ]

  const experienceData = data.experienceList.map((entry) => {
    return {
      columns: [
        {
          stack: [
            {text: entry.data.jobPosition.value, style: 'subHeader'}, 
            {text: entry.data.company.value}, 
          ],
        },
        {
          stack: [
            {
              text: `${entry.data.startDate.value} - ${entry.data.endDate.value}`,
              alignment: 'right',
            }, 
            {
              text: entry.data.location.value, 
              alignment: 'right',
              margin: [0, 0, 0, 6]
            }, 
          ],
          alignment: 'right'
        },
      ]
    }
  }); 
  const experienceSection = [
    getDefaultIfEntries(data.experienceList, {
      text: 'EXPERIENCE',
      style: 'header'
    }),
    {
      stack: [
        ...experienceData
      ]
    }
  ]

  // Had to make a little hack to divide the ul in 2 columns
  function skillsLeftData() {
    return data.skillSet.map((entry, index) => index % 2 === 0 ? entry.data.skill.value : null)
  };
  function skillsRightData() {
    return data.skillSet.map((entry, index) => index % 2 !== 0 ? entry.data.skill.value : null)
  };
  const skillsSection = [
    getDefaultIfEntries(data.skillSet, {
      text: 'SKILLS',
      style: 'header'
    }),
    {
      columns: [
        {
          ul: [ 
            ...skillsLeftData()
          ]
        },
        {
          ul: [
            ...skillsRightData()
          ]
        }
      ],
    }
  ];

  function languagesLeftData() {
    return data.spokenLanguages.map((entry, index) => 
      index % 2 === 0 
        ? `${entry.data.language.value} - ${entry.data.proficiency.value}`
        : null
    )
  };
  function languagesRightData() {
    return data.spokenLanguages.map((entry, index) => 
      index % 2 !== 0 
        ? `${entry.data.language.value} - ${entry.data.proficiency.value}`
        : null
    )
  };
  const languagesSection = [
    getDefaultIfEntries(data.spokenLanguages, {
      text: 'LANGUAGES',
      style: 'header'
    }),
    {
      columns: [
        {
          ul: [...languagesLeftData()]
        },
        {
          ul: [...languagesRightData()]
        }
      ],
    }
  ];
 

  const docDefinition = {
    pageSize: 'A4',
    pageMargins: [35, 35, 35, 20],

    content: [
      contactSection,
      educationSection,
      experienceSection,
      skillsSection,
      languagesSection
    ],

    styles: {
      header: {
        fontSize: 14,
        bold: true,
        color: '#007e72',
        margin: [0, 15, 0, 1]
      },
      subHeader: {
        italics: true
      }
    },
    defaultStyle: {
      fontSize: 12,
      font: 'Poppins'
    }
  }

  function formatName(name) {
    return name
      .normalize("NFD")                
      .replace(/[\u0300-\u036f]/g, '') 
      .toUpperCase()                   
      .replace(/\s+/g, '-');           
  }
  
  const original = data.contactInformation[0].data.fullName.value
  const formatedName = formatName(original);
  
  if (download) {
    return pdfMake.createPdf(docDefinition).download(`${formatedName}.pdf`)
  };
  return pdfMake.createPdf(docDefinition).open();
}