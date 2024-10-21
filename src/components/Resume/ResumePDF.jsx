import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from './Fonts/fonts'
import { PoppinsRegular } from './Fonts/Poppins-Regular'
import { PoppinsSemiBold } from './Fonts/Poppins-SemiBold'
import { PoppinsLight } from './Fonts/Poppins-Light'
import { PoppinsMedium } from './Fonts/Poppins-Medium'
import { hasEntries, getDefaultIfEntries } from "../../helpers/helpers"
import { getFieldTranslation } from '../../models/translations'

export default function resumePDF(data) {
  pdfMake.vfs = pdfFonts;
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

  const contact = data.contact;
  
  function getContactData() {
    let data = [];

    if (hasEntries(contact)) {
      const contactEntries = Object.entries(contact[0].data)
      
      contactEntries.map(([key, value], index) => {
        if (key !== 'fullName' && value.value !== '') {
          value.inputType === 'url'
            ? data.push({ text: value.value, link: `${value.value}`, decoration: 'underline' })
            : data.push({ text: value.value });
            if (index > 0 && index < contactEntries.length - 1) data.push({text: ' • '});
        };
      })
    }

    return data;
  }
  const contactSection = [
    {
      text: data.contact[0].data.fullName.value,
      style: 'header',
      alignment: 'center',
      fontSize: 24,
      margin: [0, 0, 0, 5],
    },
    {
      text: [
        ...getContactData()
      ],
      alignment: 'center',
      margin: [50, 0, 50, 20],
    },
  ]

  const educationData = data.education.map((entry) => {
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
            {text: 
              `${(entry.data.startDate.value) +
              
              (entry.data.startDate.value !== '' && 
              entry.data.endDate.value !== ''
                ? ' - '
                : '')

              + (entry.data.endDate.value)}`
            }
          ],
          margin: [0, 0, 0, 6],
          alignment: 'right'
        },
      ]
    }
  }); 
  const educationSection = [
    getDefaultIfEntries(data.education, {
      text: getFieldTranslation('education', data.language).toUpperCase(),
      style: 'header'
    }),
    {
			stack: [
        ...educationData,
      ]
    },
  ]

  const experienceData = data.experience.map((entry) => {
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
              text: 
                `${(entry.data.startDate.value) +
                
                (entry.data.startDate.value !== '' && 
                entry.data.endDate.value !== ''
                  ? ' - '
                  : '')

                + (entry.data.endDate.value)}`,
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
    getDefaultIfEntries(data.experience, {
      text: getFieldTranslation('experience', data.language).toUpperCase(),
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
    return data.skills.map((entry, index) => index % 2 === 0 ? entry.data.skill.value : null)
  };
  function skillsRightData() {
    return data.skills.map((entry, index) => index % 2 !== 0 ? entry.data.skill.value : null)
  };
  const skillsSection = [
    getDefaultIfEntries(data.skills, {
      text: getFieldTranslation('skills', data.language).toUpperCase(),
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
        },
      ],
      margin: [0, 0, 0, 6]
    }
  ];

  function languagesLeftData() {
    return data.languages.map((entry, index) => 
      index % 2 === 0 
        ? `${entry.data.language.value} - ${entry.data.proficiency.value}`
        : null
    )
  };
  function languagesRightData() {
    return data.languages.map((entry, index) => 
      index % 2 !== 0 
        ? `${entry.data.language.value} - ${entry.data.proficiency.value}`
        : null
    )
  };
  const languagesSection = [
    getDefaultIfEntries(data.languages, {
      text: getFieldTranslation('languages', data.language).toUpperCase(),
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
  
  const fullName = data.contact[0].data.fullName.value
  const fileName = fullName !== ''
    ? formatName(fullName)
    : data.language === 'pt'
        ? 'Curriculo'
        : 'Resume';

  // return pdfMake.createPdf(docDefinition).open();
  return pdfMake.createPdf(docDefinition).download(`${fileName}.pdf`)
}