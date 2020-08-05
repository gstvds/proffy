import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
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

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
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