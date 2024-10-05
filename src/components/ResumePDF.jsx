import Data from '../models/Data';
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const contact = Data.contactInformation[0].data;
const educationHistory = Data.educationHistory;
const experienceList = Data.experienceList;

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" className='pdf'>
      <View className='contact'>
        <Text className='name highlight'>{contact.fullName.value}</Text>
        <View className='info'>
          {Object.entries(contact).map(([key, value]) =>
            key !== 'fullName'
            ? <Text className={key}> {value.value}</Text> 
            : null
          )}
        </View>
      </View>
      {educationHistory.length
      ? (
        <>          
        <View className='section education'>
        <Text className='section-title highlight'>EDUCATION</Text> 
        <View className='info'>
          {educationHistory.map((education) =>
            <>
              <Text className="school">{education.data.school.value}</Text>
              <Text className="degree">{education.data.degree.value}</Text>
              <Text className="date-info">
                {education.data.startDate.value} - {education.data.endDate.value}
              </Text>
            </>
          )}
        </View>
      </View>
      </>
      ) 
      : ( 
        null 
      )
      }
      {experienceList.length
      ? (
        <>          
        <View className='section experience'>
          <Text className='section-title highlight'>EXPERIENCE</Text> 
          <View className='info'>
          {experienceList.map((experience) =>
            <>
              <Text className="job-position">{experience.data.jobPosition.value}</Text>
              <View className="date-info">
                <Text>{experience.data.startDate.value}</Text>
                &nbsp;-&nbsp;
                <Text> {experience.data.endDate.value}</Text>
              </View>
              <Text className="company">{experience.data.company.value}</Text>
              <Text className="location">{experience.data.location.value}</Text>
              <Text className="description">{experience.data.description.value.trim()}</Text>
            </>
          )}
        </View>
      </View>
      </>
      ) 
      : ( 
        null 
      )
      }
    </Page>
  </Document>
);

export { MyDocument }