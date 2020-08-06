import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';


function TeacherList() {
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  async function searchTeachers(event: FormEvent) {
    event.preventDefault();

    const response = await api.get<Teacher[]>('classes', {
      params: {
        week_day,
        subject,
        time,
      }
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            options={[
              { value: 'Química', label: 'Química' },
              { value: 'Física', label: 'Física' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'História', label: 'História' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Artes', label: 'Artes' },
            ]}
            onChange={event => setSubject(event.target.value)}
            value={subject}
            label="Matéria"
            name="subject"
          />
          <Select
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
            onChange={event => setWeekDay(event.target.value)}
            value={week_day}
            label="Dia da semana"
            name="week_day"
          />
          <Input
            label="Hora"
            name="time"
            type="time"
            onChange={event => setTime(event.target.value)}
            value={time}
          />
          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map(teacher => (
          <TeacherItem key={teacher.user_id} teacher={teacher} />
        ))}
      </main>
    </div>
  )
}

export default TeacherList;