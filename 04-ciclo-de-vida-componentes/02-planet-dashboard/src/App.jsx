import { Layout } from 'antd'
import { PanelDeControl } from './components/PanelDeControl'
import { useState, useContext } from 'react'
import { StatusContext } from './context/StatusContext'
import { Explorando } from './components/Explorando'
import { Despegar } from './components/Despegar'
import { SinEnergia } from './components/SinEnergia'
import { Detenido } from './components/Detenido'
import { RegistrandoPlaneta } from './components/RegistrandoPlaneta'

const { Sider, Content } = Layout

const styleSider = {
  backgroundColor: '#000000',
}

export const App = () => {
  const { status, setStatus } = useContext(StatusContext)

  const estadoNavegacion = [<Despegar />, <SinEnergia />, <Detenido />, <Explorando />, 'Registrando planeta']

  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout style={styleSider} className='h-dvh w-dvw crt p-2'>
      <Sider
        width='30%'
        style={styleSider}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <PanelDeControl collapsed={collapsed} />
      </Sider>
      <Layout>
        <Content className='bg-black '>
          {/* {estadoNavegacion[status]} */}
          <RegistrandoPlaneta />
        </Content>
      </Layout>
    </Layout>
  )
}
