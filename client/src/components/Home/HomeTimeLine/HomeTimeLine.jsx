import { Timeline } from 'antd';

import { ClockCircleOutlined, CustomerServiceOutlined, SendOutlined } from '@ant-design/icons';

import { Typography } from 'antd';
const { Title } = Typography;

const HomeTimeLine = () => {
    return(
        <div style={{display: "flex", alignItems: "center", alignContent: "center", flexDirection: "column"}}>
        <Title style={{margin: "10px"}}>Full Program Timeline</Title>
        <Timeline mode="alternate" style={{marginTop: "10px"}}>
            {/* Day 1 Timeline */}
          <Timeline.Item color="green" dot={<SendOutlined style={{ fontSize: '28px' }} />}><h1>Start of Day 1 Etamax</h1></Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>Dance Solo / Team</Timeline.Item>
          <Timeline.Item dot={<CustomerServiceOutlined style={{ fontSize: '16px' }} />}>Music Competition</Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>

          {/* Day 2 Timeline */}
          <Timeline.Item color="green" dot={<SendOutlined style={{ fontSize: '28px' }} />}><h1>Start of Day 2 Etamax</h1></Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>Dance Solo / Team</Timeline.Item>
          <Timeline.Item dot={<CustomerServiceOutlined style={{ fontSize: '16px' }} />}>Music Competition</Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>

          {/* Day 3 Timeline */}
          <Timeline.Item color="green" dot={<SendOutlined style={{ fontSize: '28px' }} />}><h1>Start of Day 3 Etamax</h1></Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>Dance Solo / Team</Timeline.Item>
          <Timeline.Item dot={<CustomerServiceOutlined style={{ fontSize: '16px' }} />}>Music Competition</Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        </Timeline>
        </div>
      );  
};

export default HomeTimeLine;