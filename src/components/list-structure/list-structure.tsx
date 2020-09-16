/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from 'react';
import { List, Tag, Card } from 'antd';
import data from '../data';
import taskTypes from '../task-types';

import styles from './list-structure.module.css';

export default function ListStructure(): ReactElement {
  return (
    <Card className={styles.list} title="Tasks list" bodyStyle={{ padding: 0 }}>
      <List
        // className={styles.list}
        dataSource={data}
        // bordered
        // size="small"
        renderItem={(item) => (
          <Card.Grid className={styles.item} key={item.key}>
            <Tag
              className={styles.type}
              color={taskTypes.find((task) => task.value === item.type)?.color}
            >
              {item.type.toUpperCase()}
            </Tag>
            <Card
              className={styles.main}
              type="inner"
              title={item.date}
              extra={<a href="#">More</a>}
            >
              {item.name}
            </Card>
          </Card.Grid>
        )}
      />
    </Card>
  );
}
