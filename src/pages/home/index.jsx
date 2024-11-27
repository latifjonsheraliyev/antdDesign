import React from "react";
import {
  Button,
  Form,
  Input,
  Card,
  Checkbox,
  Spin,
  Select,
  DatePicker,
  Switch,
  Radio,
} from "antd";
import "antd/dist/reset.css";

const App = () => (
  <div className="bg-[white]">
    <div className="flex gap-3 flex-col w-[60%] m-auto pt-10">
      <Input placeholder="Matnni kiriting" />
      <Input.Password placeholder="Parolni kiriting" />

      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>

      <Card title="Card Sarlavhasi" bordered={true}>
        Bu Card kontenti.
      </Card>

      <Form>
        <Form.Item
          label="Ism"
          name="name"
          rules={[{ required: true, message: "Ismni kiriting!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Yuborish
          </Button>
        </Form.Item>
      </Form>

      <Checkbox>Tanlov</Checkbox>
      <Checkbox.Group options={["A", "B", "C"]} />

      <Spin />
      <Spin tip="Yuklanmoqda..." />

      <Select defaultValue="lucy" style={{ width: 120 }}>
        <Option value="lucy">Lucy</Option>
        <Option value="jack">Jack</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
      </Select>

      <DatePicker />

      <Switch defaultChecked />

      <Radio.Group defaultValue="a">
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
        <Radio value="c">C</Radio>
      </Radio.Group>
    </div>
  </div>
);

export default App; // Default eksport
