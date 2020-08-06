import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([
    { week_day: 0, from: '', to: '' }
  ]);


  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse formulário de inscrição."
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input label="Nome completo" name="name" type="text" />
          <Input label="Link da sua foto" name="avatar" type="text" />
          <Input label="WhatsApp (somente números)" name="whatsapp" type="text" />
          <TextArea label="Biografia" name="bio" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
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
            label="Matéria"
            name="subject"
          />
          <Input label="Custo da sua hora por aula" name="cost" type="text" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {
            scheduleItems.map(scheduleItem => (
              <div key={scheduleItem.week_day} className="schedule-item">
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
                  label="Dia da semana"
                  name="week_day"
                />
                <Input name="from" label="De" type="time" />
                <Input name="to" label="Até" type="time" />
              </div>
            ))
          }
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm;