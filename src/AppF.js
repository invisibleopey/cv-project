import React, { useState, useEffect } from 'react';
import GeneralInfo from './components/General-Info';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/App.css';
import Overview from './components/Overview';
import uniqid from 'uniqid';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');
  const [school, setSchool] = useState({
    name: '',
    city: '',
    degree: '',
    subject: '',
    startDate: '',
    endDate: '',
    id: uniqid(),
  });
  const [schools, setSchools] = useState([]);
  const [job, setJob] = useState({
    position: '',
    company: '',
    city: '',
    startDate: '',
    endDate: '',
    id: uniqid(),
  });
  const [jobs, setJobs] = useState([]);
}
