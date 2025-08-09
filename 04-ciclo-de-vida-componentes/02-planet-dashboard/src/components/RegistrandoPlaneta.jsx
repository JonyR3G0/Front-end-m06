import React, { useContext } from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { StatusContext } from '../context/StatusContext'

export const RegistrandoPlaneta = () => {
  const { status, setStatus } = useContext(StatusContext)
  const onFinish = values => {
  // Aqui iria la logica para agregar los planetas
    setStatus(0)
    console.log('Success:', values)
  }
  const onFinishFailed = errorInfo => {
  // A causa del poco tiempo que tengo, no voy a hacer la implementacion
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <div className='text-amber-50 bg-sky-800 h-full flex flex-col justify-center items-center'>
        <Form
          className='w-xl'
          layout='vertical'
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <h1 className='text-2xl text-sky-200 p-1'>Nombre del planeta</h1>
          <Form.Item
            name='Nombre del planeta'
            rules={[{ required: true, message: '¡Por favor no lo dejes vacío!' }]}
          >
            <Input />
          </Form.Item>

          <Button type='primary' htmlType='submit'>
            Registrar
          </Button>
        </Form>
      </div>
    </>
  )
}
