import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'

const onFinish = values => {
  console.log('Success:', values)
}
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo)
}

export const RegistrandoPlaneta = () => (
  <div className='text-amber-50 bg-sky-800'>
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item
        className='text-amber-50'
        style={{ color: 'white' }}
        label='Username'
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label={null}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
)
