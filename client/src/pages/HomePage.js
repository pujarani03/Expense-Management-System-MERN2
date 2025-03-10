import React, { useState } from "react";
import { Form, Modal, Select } from "antd";
import Layout from "./../components/Layout/Layout";

const HomePage = () => {
    const [showModal,setShowModal] = useState(false);
//form handling
const handleSubmit = (values) => {
   console.log(values)
}

    return (
        <Layout>
            <div className="filters">
                <div>range filters</div>
                <div>
                    <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add New</button>
                </div>
            </div>
            <div className="content"></div>
            <Modal title="Add Transaction" visible={showModal} onCancel={() => setShowModal(false)} footer={false}>
                  <form Layout="vertical" onFinish={handleSubmit}>
                    <Form.Item lablel="Amount" name="amount">
                        <input type="text"/>
                    </Form.Item>
                    <Form.Item lablel="type" name="type">
                        <Select>
                            <Select.Option value="income">Income</Select.Option>
                            <Select.Option value="expense">Expense</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item lablel="Category" name="category">
                        <Select>
                            <Select.Option value="salary">Salary</Select.Option>
                            <Select.Option value="tip">Tip</Select.Option>
                            <Select.Option value="project">Project</Select.Option>
                            <Select.Option value="food">Food</Select.Option>
                            <Select.Option value="movie">Movie</Select.Option>
                            <Select.Option value="bills">Bills</Select.Option>
                            <Select.Option value="medical">Medical</Select.Option>
                            <Select.Option value="fee">Fee</Select.Option>
                            <Select.Option value="tax">Tax</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Date" name="date">
                        <input type="date"/>
                    </Form.Item>
                    <Form.Item label="Reference" name="reference">
                        <input type="text"/>
                    </Form.Item>
                    <Form.Item label="Description" name="description">
                        <input type="text"/>
                    </Form.Item>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary"> SAVE </button>
                    </div>
                  </form>
            </Modal>
        </Layout>
    );
};

export default HomePage;