import React, {FC, useState,} from "react"
import {Form, Input, DatePicker, Button, Row, Select} from 'antd'
import { rules } from "../utils/rules";
import { IUser } from "../models/IUser";
import { IEvent } from "../models/IEvent";
import { formatDate } from "../utils/date";
import { useTypedSelector } from "../hooks/useTypedSelector";
import type { Dayjs } from 'dayjs';

interface EventFormProps {
  guests: IUser[]
  submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = (props) => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: ''
  } as IEvent);
  const {user} = useTypedSelector(state => state.auth)

  const selectDate = (date: Dayjs | null) => {
    if (date) {
      setEvent({...event, date: formatDate(date.toDate())})
    }
  }

  const submitForm = () => {
    props.submit({...event, author: user.username})
  }

  return (
    <Form
      onFinish={submitForm}
    >
      <Form.Item
        label="Description of Event"
        name="description"
        rules={[rules.required()]}
      >
        <Input 
          value={event.description}
          onChange={e => setEvent({...event, description: e.target.value})}
        />
      </Form.Item>
      <Form.Item
        label="Date of Event"
        name="date"
        rules={[rules.required(), rules.isDateAfter('Cannot create events in the past')]}
      >
        <DatePicker 
          onChange={(date) => selectDate(date)}
        />
      </Form.Item>
      <Form.Item
        label="Choose guest"
        name="guest"
        rules={[rules.required()]}>
        <Select
          onChange={(guest: string) => setEvent({...event, guest})}
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={props.guests.map(guest => 
            ({
              value: guest.username,
              label: guest.username
            }))}
        />
      </Form.Item>
      <Row justify='end'>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Row>
      
    </Form>
  )
};

export default EventForm;
