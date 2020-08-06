import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

function TeacherForm() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([
    { week_day: 0, from: '', to: '' }
  ]);
  const history = useHistory();

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }

  function handleCreateClass(event: FormEvent) {
    event.preventDefault();
    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    }).then(() => {
      alert('Cadastro realizado com sucesso');

      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro');
    });
  }

  function setScheduleItemValue(position: number, fieldname: string, value: string) {
    const newScheduleItems = scheduleItems.map((item, index) => {
      if (index === position) {
        return {
          ...item,
          [fieldname]: value,
        }
      }

      return item;
    });

    setScheduleItems(newScheduleItems);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse formulário de inscrição."
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              value={name}
              onChange={event => setName(event.target.value)}
              label="Nome completo"
              name="name"
              type="text"
            />
            <Input
              value={avatar}
              onChange={event => setAvatar(event.target.value)}
              label="Link da sua foto"
              name="avatar"
              type="text"
            />
            <Input
              value={whatsapp}
              onChange={event => setWhatsapp(event.target.value)}
              label="WhatsApp (somente números)"
              name="whatsapp"
              type="text"
            />
            <TextArea
              value={bio}
              onChange={event => setBio(event.target.value)}
              label="Biografia"
              name="bio"
            />
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
              value={subject}
              onChange={event => setSubject(event.target.value)}
            />
            <Input
              label="Custo da sua hora por aula"
              name="cost"
              type="text"
              value={cost}
              onChange={event => setCost(event.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
            </button>
            </legend>

            {
              scheduleItems.map((scheduleItem, index) => (
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
                    onChange={event => setScheduleItemValue(index, 'week_day', event.target.value)}
                    value={scheduleItem.week_day}
                    label="Dia da semana"
                    name="week_day"
                  />
                  <Input
                    onChange={event => setScheduleItemValue(index, 'from', event.target.value)}
                    value={scheduleItem.from}
                    name="from"
                    label="De"
                    type="time"
                    />
                  <Input
                    onChange={event => setScheduleItemValue(index, 'to', event.target.value)}
                    value={scheduleItem.to}
                    name="to"
                    label="Até"
                    type="time"
                  />
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
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm;